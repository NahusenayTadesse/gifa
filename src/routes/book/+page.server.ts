import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { getHero, getSettings } from '$lib/server/content';
import { db } from '$lib/server/db';
import { bookings } from '$lib/server/db/schema';
import { adminBookingTemplate, customerBookingTemplate, sendEmail } from '$lib/server/email';
import { bookingSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

/** Short human code like GF-8K2M, easy to read back over the phone. */
const generateReference = () => {
	const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
	let code = '';
	for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
	return `GF-${code}`;
};

export const load: PageServerLoad = async () => {
	const [hero, form] = await Promise.all([getHero('book'), superValidate(zod4(bookingSchema))]);
	return { hero, form };
};

export const actions: Actions = {
	book: async ({ request }) => {
		const form = await superValidate(request, zod4(bookingSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		const { name, phone, email, bookingDate, bookingTime, partySize, occasion, notes, website } =
			form.data;

		// The honeypot was filled, so this is a bot. Report success and drop it.
		if (website) {
			return message(form, {
				type: 'success',
				text: "Thanks — we've got your request. We'll confirm by phone or email shortly."
			});
		}

		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const requested = new Date(bookingDate);
		const maxDate = new Date(today);
		maxDate.setDate(maxDate.getDate() + 90);

		if (requested < today || requested > maxDate) {
			return message(
				form,
				{ type: 'error', text: 'Please choose a date within the next 90 days.' },
				{ status: 400 }
			);
		}

		// Same-day bookings still need to be for a time that hasn't passed yet.
		if (requested.getTime() === today.getTime()) {
			const [hours, minutes] = bookingTime.split(':').map(Number);
			const requestedDateTime = new Date();
			requestedDateTime.setHours(hours, minutes, 0, 0);

			if (Number.isNaN(requestedDateTime.getTime()) || requestedDateTime < new Date()) {
				return message(
					form,
					{ type: 'error', text: "That time's already passed today — please choose a later time." },
					{ status: 400 }
				);
			}
		}

		if (partySize > 12) {
			return message(form, {
				type: 'error',
				text: "For groups over 12 we'll look after you better through private hire — head to the Private Hire page to enquire."
			});
		}

		const reference = generateReference();

		try {
			await db.insert(bookings).values({
				reference,
				name,
				phone,
				email: email || undefined,
				partySize,
				bookingDate,
				bookingTime,
				occasion,
				notes,
				source: 'website'
			});
		} catch (err) {
			console.error('Failed to save booking:', err);
			return message(
				form,
				{ type: 'error', text: 'We could not save your request. Please call us instead.' },
				{ status: 500 }
			);
		}

		try {
			const settings = await getSettings();
			const notify = adminBookingTemplate({
				reference,
				name,
				phone,
				email: email || undefined,
				partySize,
				bookingDate,
				bookingTime,
				occasion,
				notes
			});
			const receipt = customerBookingTemplate({ reference, name, bookingDate, bookingTime, partySize });

			await Promise.all([
				settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : undefined,
				email ? sendEmail(email, receipt.subject, receipt.html) : undefined
			]);
		} catch (err) {
			console.error('Booking notification failed:', err);
		}

		return message(form, {
			type: 'success',
			text: `Thanks — we've got your request (ref ${reference}). We'll confirm by phone or email shortly. If you need a table in the next couple of hours, please call us on 07950 786579 so we can sort it straight away.`
		});
	}
};
