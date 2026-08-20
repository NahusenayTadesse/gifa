import { superValidate, message, fail } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { desc, eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { enquiries } from '$lib/server/db/schema';
import { markSeen, statusSchema, deleteEnquiry } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [seenForm, statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod4(markSeen)),
		superValidate(zod4(statusSchema)),
		superValidate(zod4(deleteEnquiry)),
		db.select().from(enquiries).orderBy(desc(enquiries.createdAt))
	]);

	return { seenForm, statusForm, deleteForm, rows };
};

export const actions: Actions = {
	seen: async ({ request }) => {
		const form = await superValidate(request, zod4(markSeen));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db
				.update(enquiries)
				.set({ seen: true })
				.where(eq(enquiries.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That enquiry no longer exists' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Marked as seen' });
		} catch (err) {
			console.error('Failed to mark enquiry as seen:', err);
			return message(form, { type: 'error', text: 'Could not update enquiry' }, { status: 500 });
		}
	},

	status: async ({ request }) => {
		const form = await superValidate(request, zod4(statusSchema));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db
				.update(enquiries)
				.set({ status: form.data.status })
				.where(eq(enquiries.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That enquiry no longer exists' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Enquiry updated' });
		} catch (err) {
			console.error('Failed to update enquiry:', err);
			return message(form, { type: 'error', text: 'Could not update enquiry' }, { status: 500 });
		}
	},

	delete: async ({ request }) => {
		const form = await superValidate(request, zod4(deleteEnquiry));
		if (!form.valid) return fail(400, { form });

		try {
			const [result] = await db.delete(enquiries).where(eq(enquiries.id, form.data.id));
			if (result.affectedRows === 0) {
				return message(
					form,
					{ type: 'error', text: 'That enquiry was already deleted' },
					{ status: 404 }
				);
			}
			return message(form, { type: 'success', text: 'Enquiry deleted' });
		} catch (err) {
			console.error('Failed to delete enquiry:', err);
			return message(form, { type: 'error', text: 'Could not delete enquiry' }, { status: 500 });
		}
	}
};
