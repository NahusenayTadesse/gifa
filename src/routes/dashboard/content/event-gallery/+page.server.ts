import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { asc, desc, eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { eventGallery, events } from '$lib/server/db/schema';
import { saveUploadedFile } from '$lib/server/upload';
import { addSchema, deleteSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [addForm, deleteForm, rows, eventList] = await Promise.all([
		superValidate(zod4(addSchema)),
		superValidate(zod4(deleteSchema)),
		db
			.select({
				id: eventGallery.id,
				eventId: eventGallery.eventId,
				imageUrl: eventGallery.imageUrl,
				eventTitle: events.title
			})
			.from(eventGallery)
			.leftJoin(events, eq(eventGallery.eventId, events.id))
			.orderBy(desc(eventGallery.id)),
		db.select({ id: events.id, title: events.title }).from(events).orderBy(asc(events.startsAt))
	]);

	return { addForm, deleteForm, rows, eventList };
};

export const actions: Actions = {
	add: async ({ request }) => {
		const form = await superValidate(request, zod4(addSchema));
		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		try {
			const { eventId, images } = form.data;
			for (const file of images) {
				if (!(file instanceof File) || file.size === 0) continue;
				const fileName = await saveUploadedFile(file);
				await db.insert(eventGallery).values({ eventId, imageUrl: fileName });
			}
			return message(form, { type: 'success', text: 'Photos added' });
		} catch (err) {
			console.error('Failed to add event photos:', err);
			return message(form, { type: 'error', text: 'Could not add photos' }, { status: 500 });
		}
	},

	delete: async ({ request }) => {
		const form = await superValidate(request, zod4(deleteSchema));
		if (!form.valid) {
			return message(form, { type: 'error', text: 'Invalid request' }, { status: 400 });
		}

		try {
			await db.delete(eventGallery).where(eq(eventGallery.id, form.data.id));
			return message(form, { type: 'success', text: 'Photo deleted' });
		} catch (err) {
			console.error('Failed to delete event photo:', err);
			return message(form, { type: 'error', text: 'Could not delete photo' }, { status: 500 });
		}
	}
};
