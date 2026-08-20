import { superValidate, message, fail } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { desc, eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { eventRegistrations, events } from '$lib/server/db/schema';
import { statusSchema, deleteSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod4(statusSchema)),
		superValidate(zod4(deleteSchema)),
		db
			.select({
				id: eventRegistrations.id,
				eventTitle: events.title,
				eventStartsAt: events.startsAt,
				name: eventRegistrations.name,
				phone: eventRegistrations.phone,
				email: eventRegistrations.email,
				guests: eventRegistrations.guests,
				notes: eventRegistrations.notes,
				status: eventRegistrations.status,
				createdAt: eventRegistrations.createdAt
			})
			.from(eventRegistrations)
			.leftJoin(events, eq(events.id, eventRegistrations.eventId))
			.orderBy(desc(eventRegistrations.createdAt))
	]);

	return { statusForm, deleteForm, rows };
};

export const actions: Actions = {
	status: async ({ request }) => {
		const form = await superValidate(request, zod4(statusSchema));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db
				.update(eventRegistrations)
				.set({ status: form.data.status })
				.where(eq(eventRegistrations.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That registration no longer exists' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Registration updated' });
		} catch (err) {
			console.error('Failed to update event registration:', err);
			return message(form, { type: 'error', text: 'Could not update registration' }, { status: 500 });
		}
	},

	delete: async ({ request }) => {
		const form = await superValidate(request, zod4(deleteSchema));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db
				.delete(eventRegistrations)
				.where(eq(eventRegistrations.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That registration was already deleted' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Registration deleted' });
		} catch (err) {
			console.error('Failed to delete event registration:', err);
			return message(form, { type: 'error', text: 'Could not delete registration' }, { status: 500 });
		}
	}
};
