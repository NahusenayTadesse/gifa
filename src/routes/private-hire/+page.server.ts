import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { getHero, getSettings, getPrivateHireExamples, listGalleryByContext } from '$lib/server/content';
import { db } from '$lib/server/db';
import { enquiries } from '$lib/server/db/schema';
import { adminEnquiryTemplate, customerEnquiryTemplate, sendEmail } from '$lib/server/email';
import { privateHireSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, examples, gallery, form] = await Promise.all([
		getHero('private-hire'),
		getPrivateHireExamples(),
		listGalleryByContext('event'),
		superValidate(zod4(privateHireSchema))
	]);

	return {
		hero,
		examples,
		gallery: gallery.map((image) => ({ src: image.src, alt: image.altText, caption: image.caption })),
		form
	};
};

export const actions: Actions = {
	enquire: async ({ request }) => {
		const form = await superValidate(request, zod4(privateHireSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		const { name, phone, email, eventDate, guests, eventType, message: body, website } = form.data;

		if (website) {
			return message(form, { type: 'success', text: 'Thanks — we will be in touch shortly.' });
		}

		try {
			await db.insert(enquiries).values({
				type: 'private_hire',
				name,
				phone,
				email,
				eventDate: eventDate || undefined,
				guests,
				eventType,
				message: body
			});
		} catch (err) {
			console.error('Failed to save private hire enquiry:', err);
			return message(
				form,
				{ type: 'error', text: 'We could not save your enquiry. Please try again.' },
				{ status: 500 }
			);
		}

		try {
			const settings = await getSettings();
			const notify = adminEnquiryTemplate({
				type: 'private_hire',
				name,
				phone,
				email,
				message: body,
				eventDate,
				guests,
				eventType
			});
			const receipt = customerEnquiryTemplate(name);

			await Promise.all([
				settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : undefined,
				sendEmail(email, receipt.subject, receipt.html)
			]);
		} catch (err) {
			console.error('Private hire notification failed:', err);
		}

		return message(form, {
			type: 'success',
			text: "Thanks — we've got your enquiry. We'll build a quote and get back to you shortly."
		});
	}
};
