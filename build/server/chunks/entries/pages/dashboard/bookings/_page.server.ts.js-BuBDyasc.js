import { r as db, F as bookings, m as eq, a as asc } from '../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-Bwb_58-4.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-BbOw6TcD.js';
import { z as zod } from '../../../../chunks/adapters.js-DtqLBpUn.js';
import { o as object, n as number, _ as _enum } from '../../../../chunks/auth.js-iJB6n9vL.js';

//#region src/routes/dashboard/bookings/schema.ts
var statusSchema = object({
	id: number(),
	status: _enum([
		"new",
		"confirmed",
		"seated",
		"no_show",
		"cancelled"
	])
});
var deleteSchema = object({ id: number() });
//#endregion
//#region src/routes/dashboard/bookings/+page.server.ts
var load = async () => {
	const [statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod(statusSchema)),
		superValidate(zod(deleteSchema)),
		db.select().from(bookings).orderBy(asc(bookings.bookingDate), asc(bookings.bookingTime))
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
			await db.update(bookings).set({ status: form.data.status }).where(eq(bookings.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Booking updated"
			});
		} catch (err) {
			console.error("Failed to update booking:", err);
			return message(form, {
				type: "error",
				text: "Could not update booking"
			}, { status: 500 });
		}
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(deleteSchema));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.delete(bookings).where(eq(bookings.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Booking deleted"
			});
		} catch (err) {
			console.error("Failed to delete booking:", err);
			return message(form, {
				type: "error",
				text: "Could not delete booking"
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
//# sourceMappingURL=_page.server.ts.js-BuBDyasc.js.map
