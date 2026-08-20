import { superValidate, message, fail } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { asc, eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { bookings } from '$lib/server/db/schema';
import { statusSchema, deleteSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod4(statusSchema)),
		superValidate(zod4(deleteSchema)),
		db.select().from(bookings).orderBy(asc(bookings.bookingDate), asc(bookings.bookingTime))
	]);

	return { statusForm, deleteForm, rows };
};

export const actions: Actions = {
	status: async ({ request }) => {
		const form = await superValidate(request, zod4(statusSchema));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db
				.update(bookings)
				.set({ status: form.data.status })
				.where(eq(bookings.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That booking no longer exists' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Booking updated' });
		} catch (err) {
			console.error('Failed to update booking:', err);
			return message(form, { type: 'error', text: 'Could not update booking' }, { status: 500 });
		}
	},

	delete: async ({ request }) => {
		const form = await superValidate(request, zod4(deleteSchema));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db.delete(bookings).where(eq(bookings.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That booking was already deleted' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Booking deleted' });
		} catch (err) {
			console.error('Failed to delete booking:', err);
			return message(form, { type: 'error', text: 'Could not delete booking' }, { status: 500 });
		}
	}
};
