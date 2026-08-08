import { r as db, L as eventRegistrations, m as eq, y as events, d as desc } from '../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-iA4z0kVm.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-C4xvWha9.js';
import { z as zod } from '../../../../chunks/adapters.js-C6GGMh-T.js';
import { o as object, n as number, _ as _enum } from '../../../../chunks/auth.js-DHoIfIoo.js';

//#region src/routes/dashboard/event-registrations/schema.ts
var statusSchema = object({
	id: number(),
	status: _enum([
		"new",
		"confirmed",
		"cancelled"
	])
});
var deleteSchema = object({ id: number() });
//#endregion
//#region src/routes/dashboard/event-registrations/+page.server.ts
var load = async () => {
	const [statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod(statusSchema)),
		superValidate(zod(deleteSchema)),
		db.select({
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
		}).from(eventRegistrations).leftJoin(events, eq(events.id, eventRegistrations.eventId)).orderBy(desc(eventRegistrations.createdAt))
	]);
	return {
		statusForm,
		deleteForm,
		rows
	};
};
var actions = {
	status: async ({ request }) => {
		const form = await superValidate(request, zod(statusSchema));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.update(eventRegistrations).set({ status: form.data.status }).where(eq(eventRegistrations.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Registration updated"
			});
		} catch (err) {
			console.error("Failed to update event registration:", err);
			return message(form, {
				type: "error",
				text: "Could not update registration"
			}, { status: 500 });
		}
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(deleteSchema));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.delete(eventRegistrations).where(eq(eventRegistrations.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Registration deleted"
			});
		} catch (err) {
			console.error("Failed to delete event registration:", err);
			return message(form, {
				type: "error",
				text: "Could not delete registration"
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
//# sourceMappingURL=_page.server.ts.js-bBT31aLz.js.map
