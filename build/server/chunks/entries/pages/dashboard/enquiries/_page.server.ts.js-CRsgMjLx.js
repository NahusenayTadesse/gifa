import { r as db, E as enquiries, m as eq, d as desc } from '../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-BrZUAIoh.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-SaiAi5EC.js';
import { z as zod } from '../../../../chunks/adapters.js-DZdKSGWy.js';
import { o as object, n as number, _ as _enum } from '../../../../chunks/auth.js-CigcsaCA.js';

//#region src/routes/dashboard/enquiries/schema.ts
var markSeen = object({ id: number() });
var statusSchema = object({
	id: number(),
	status: _enum([
		"new",
		"in_progress",
		"closed"
	])
});
var deleteEnquiry = object({ id: number() });
//#endregion
//#region src/routes/dashboard/enquiries/+page.server.ts
var load = async () => {
	const [seenForm, statusForm, deleteForm, rows] = await Promise.all([
		superValidate(zod(markSeen)),
		superValidate(zod(statusSchema)),
		superValidate(zod(deleteEnquiry)),
		db.select().from(enquiries).orderBy(desc(enquiries.createdAt))
	]);
	return {
		seenForm,
		statusForm,
		deleteForm,
		rows
	};
};
var actions = {
	seen: async ({ request }) => {
		const form = await superValidate(request, zod(markSeen));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.update(enquiries).set({ seen: true }).where(eq(enquiries.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Marked as seen"
			});
		} catch (err) {
			console.error("Failed to mark enquiry as seen:", err);
			return message(form, {
				type: "error",
				text: "Could not update enquiry"
			}, { status: 500 });
		}
	},
	status: async ({ request }) => {
		const form = await superValidate(request, zod(statusSchema));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.update(enquiries).set({ status: form.data.status }).where(eq(enquiries.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Enquiry updated"
			});
		} catch (err) {
			console.error("Failed to update enquiry:", err);
			return message(form, {
				type: "error",
				text: "Could not update enquiry"
			}, { status: 500 });
		}
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(deleteEnquiry));
		if (!form.valid) return fail$1(400, { form });
		try {
			await db.delete(enquiries).where(eq(enquiries.id, form.data.id));
			return message(form, {
				type: "success",
				text: "Enquiry deleted"
			});
		} catch (err) {
			console.error("Failed to delete enquiry:", err);
			return message(form, {
				type: "error",
				text: "Could not delete enquiry"
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
//# sourceMappingURL=_page.server.ts.js-CRsgMjLx.js.map
