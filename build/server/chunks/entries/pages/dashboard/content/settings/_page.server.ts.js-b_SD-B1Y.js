import { r as db, t as siteSettings, m as eq } from '../../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate, m as message } from '../../../../../chunks/client2.js-SufGfZGd.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-CHBDgIN6.js';
import { z as zod } from '../../../../../chunks/adapters.js-Ocs0SWFL.js';
import { o as object, h as boolean, d as string } from '../../../../../chunks/auth.js-1j_Wga1v.js';

//#region src/routes/dashboard/content/settings/schema.ts
var settingsSchema = object({
	phone: string().max(32).optional(),
	email: string().max(180).optional(),
	address: string().max(255).optional(),
	instagramUrl: string().max(255).optional(),
	facebookUrl: string().max(255).optional(),
	justEatUrl: string().max(255).optional(),
	heroHeading: string().max(255).optional(),
	heroSub: string().max(255).optional(),
	footerBlurb: string().optional(),
	deliveryEnabled: boolean().default(true)
});
//#endregion
//#region src/routes/dashboard/content/settings/+page.server.ts
var load = async () => {
	const current = (await db.select().from(siteSettings).limit(1)).at(0);
	return {
		form: await superValidate({
			phone: current?.phone ?? "",
			email: current?.email ?? "",
			address: current?.address ?? "",
			instagramUrl: current?.instagramUrl ?? "",
			facebookUrl: current?.facebookUrl ?? "",
			justEatUrl: current?.justEatUrl ?? "",
			heroHeading: current?.heroHeading ?? "",
			heroSub: current?.heroSub ?? "",
			footerBlurb: current?.footerBlurb ?? "",
			deliveryEnabled: current?.deliveryEnabled ?? true
		}, zod(settingsSchema)),
		exists: Boolean(current)
	};
};
var actions = { save: async ({ request, locals }) => {
	const form = await superValidate(request, zod(settingsSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	try {
		const current = (await db.select({ id: siteSettings.id }).from(siteSettings).limit(1)).at(0);
		if (current) await db.update(siteSettings).set({
			...form.data,
			updatedBy: locals.user?.id
		}).where(eq(siteSettings.id, current.id));
		else await db.insert(siteSettings).values({
			...form.data,
			createdBy: locals.user?.id
		});
		return message(form, {
			type: "success",
			text: "Site settings saved"
		});
	} catch (err) {
		console.error("Failed to save site settings:", err);
		return message(form, {
			type: "error",
			text: "Could not save site settings"
		}, { status: 500 });
	}
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-b_SD-B1Y.js.map
