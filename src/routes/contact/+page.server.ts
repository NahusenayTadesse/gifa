import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

import { contactSchema } from './schema';
import { getHero, getSettings, getOpeningHours } from '$lib/server/content';
import { db } from '$lib/server/db';
import { enquiries } from '$lib/server/db/schema';
import { adminEnquiryTemplate, customerEnquiryTemplate, sendEmail } from '$lib/server/email';
import type { Actions, PageServerLoad } from './$types';

/** Address, email and phone come from the shared settings row in the layout. */
export const load: PageServerLoad = async () => {
	const [hero, hours, form] = await Promise.all([
		getHero('contact'),
		getOpeningHours(),
		superValidate(zod4(contactSchema))
	]);

	return { hero, hours, form };
};

export const actions: Actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, zod4(contactSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		const { name, email, phone, subject, message: body, website } = form.data;

		// The honeypot was filled, so this is a bot. Report success and drop it.
		if (website) {
			return message(form, { type: 'success', text: 'Thanks — we will be in touch shortly.' });
		}

		try {
			await db.insert(enquiries).values({
				type: 'contact',
				name,
				email,
				phone,
				message: `${subject}\n\n${body}`
			});
		} catch {
			return message(
				form,
				{ type: 'error', text: 'We could not save your message. Please try again.' },
				{ status: 500 }
			);
		}

		// The message is safely stored, so a mail failure must not fail the request.
		try {
			const settings = await getSettings();
			const notify = adminEnquiryTemplate({ type: 'contact', name, email, phone, message: body });
			const receipt = customerEnquiryTemplate(name);

			await Promise.all([
				settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : undefined,
				sendEmail(email, receipt.subject, receipt.html)
			]);
		} catch (err) {
			console.error('Contact form notification failed:', err);
		}

		return message(form, {
			type: 'success',
			text: 'Thank you — your message has been sent. We will get back to you shortly.'
		});
	}
};
