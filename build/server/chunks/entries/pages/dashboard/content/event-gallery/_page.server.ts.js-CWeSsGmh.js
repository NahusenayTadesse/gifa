import { r as db, A as eventGallery, m as eq, y as events, d as desc, a as asc } from '../../../../../chunks/db.js-CPhQsSSC.js';
import { s as superValidate, m as message } from '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import { z as zod } from '../../../../../chunks/adapters.js-Da1EWjvb.js';
import { s as saveUploadedFile } from '../../../../../chunks/upload.js-BimPnVXC.js';
import { o as object, n as number, i as array, j as file } from '../../../../../chunks/auth.js-CzaJ0OJC.js';

//#region src/routes/dashboard/content/event-gallery/schema.ts
var addSchema = object({
	eventId: number("Pick an event").int().positive(),
	images: array(file("Each file must be an image").max(1e7, "Each photo must be under 10MB")).min(1, "Add at least one photo").max(30, "Add up to 30 photos at a time")
});
var deleteSchema = object({ id: number() });
//#endregion
//#region src/routes/dashboard/content/event-gallery/+page.server.ts
var load = async () => {
	const [addForm, deleteForm, rows, eventList] = await Promise.all([
		superValidate(zod(addSchema)),
		superValidate(zod(deleteSchema)),
		db.select({
			id: eventGallery.id,
			eventId: eventGallery.eventId,
			imageUrl: eventGallery.imageUrl,
			eventTitle: events.title
		}).from(eventGallery).leftJoin(events, eq(eventGallery.eventId, events.id)).orderBy(desc(eventGallery.id)),
		db.select({
			id: events.id,
			title: events.title
		}).from(events).orderBy(asc(events.startsAt))
	]);
	return {
		addForm,
		deleteForm,
		rows,
		eventList
	};
};
var actions = {
	add: async ({ request }) => {
		const form = await superValidate(request, zod(addSchema));
		if (!form.valid) return message(form, {
			type: "error",
			text: "Please check the form for errors"
		}, { status: 400 });
		try {
			const { eventId, images } = form.data;
			for (const file of images) {
				if (!(file instanceof File) || file.size === 0) continue;
				const fileName = await saveUploadedFile(file);
				await db.insert(eventGallery).values({
					eventId,
					imageUrl: fileName
				});
			}
			return message(form, {
				type: "success",
				text: "Photos added"
			});
		} catch (err) {
			console.error("Failed to add event photos:", err);
			return message(form, {
				type: "error",
				text: "Could not add photos"
			}, { status: 500 });
		}
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(deleteSchema));
		if (!form.valid) return message(form, {
			type: "error",
			text: "Invalid request"
		}, { status: 400 });
		try {
			await db.delete(eventGallery).where(eq(eventGallery.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Photo deleted"
			});
		} catch (err) {
			console.error("Failed to delete event photo:", err);
			return message(form, {
				type: "error",
				text: "Could not delete photo"
			}, { status: 500 });
		}
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CWeSsGmh.js.map
