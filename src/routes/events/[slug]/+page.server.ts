import { error } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { getEventBySlug, getEventGallery, getSettings } from '$lib/server/content';
import { db } from '$lib/server/db';
import { eventRegistrations } from '$lib/server/db/schema';
import {
	adminEventRegistrationTemplate,
	customerEventRegistrationTemplate,
	sendEmail
} from '$lib/server/email';
import { registrationSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const event = await getEventBySlug(params.slug);
	if (!event) error(404, 'Event not found');

	const [form, gallery] = await Promise.all([
		superValidate(zod4(registrationSchema)),
		getEventGallery(event.id)
	]);

	return { event, form, gallery };
};

export const actions: Actions = {
	register: async ({ request, params }) => {
		const form = await superValidate(request, zod4(registrationSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		const event = await getEventBySlug(params.slug);
		if (!event) {
			return message(
				form,
				{ type: 'error', text: 'This event could not be found.' },
				{ status: 404 }
			);
		}

		const { name, phone, email, guests, notes, website } = form.data;

		if (website) {
			return message(form, {
				type: 'success',
				text: "Thanks — you're on the list."
			});
		}

		try {
			await db.insert(eventRegistrations).values({
				eventId: event.id,
				name,
				phone,
				email,
				guests,
				notes
			});
		} catch (err) {
			console.error('Failed to save event registration:', err);
			return message(
				form,
				{ type: 'error', text: 'We could not save your registration. Please try again.' },
				{ status: 500 }
			);
		}

		try {
			const settings = await getSettings();
			const notify = adminEventRegistrationTemplate({
				eventTitle: event.title,
				name,
				phone,
				email,
				guests,
				notes
			});
			const receipt = customerEventRegistrationTemplate({
				eventTitle: event.title,
				name,
				startsAt: event.startsAt,
				guests
			});

			await Promise.all([
				settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : undefined,
				sendEmail(email, receipt.subject, receipt.html)
			]);
		} catch (err) {
			console.error('Event registration notification failed:', err);
		}

		return message(form, {
			type: 'success',
			text: `Thanks, ${name} — you're registered for ${event.title}. A confirmation is on its way to your inbox.`
		});
	}
};
