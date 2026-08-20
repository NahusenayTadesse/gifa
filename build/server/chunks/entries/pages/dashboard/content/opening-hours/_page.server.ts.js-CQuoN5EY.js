import { r as db, z as openingHours, a as asc } from '../../../../../chunks/db.js-CPhQsSSC.js';
import { s as superValidate, m as message } from '../../../../../chunks/client2.js-ASiNbvEC.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-PQFg6ATt.js';
import { z as zod } from '../../../../../chunks/adapters.js-CwAUwTBz.js';
import { o as object, i as array, d as string, g as boolean, n as number } from '../../../../../chunks/auth.js-CCGW_diT.js';

//#region src/routes/dashboard/content/opening-hours/schema.ts
var dayRow = object({
	weekday: number().int().min(0).max(6),
	isClosed: boolean().default(false),
	openTime: string().optional(),
	closeTime: string().optional()
});
var hoursSchema = object({ days: array(dayRow).length(7) });
//#endregion
//#region src/routes/dashboard/content/opening-hours/+page.server.ts
var WEEKDAY_NAMES = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var load = async () => {
	const rows = await db.select().from(openingHours).orderBy(asc(openingHours.weekday));
	const byWeekday = new Map(rows.map((row) => [row.weekday, row]));
	return {
		form: await superValidate({ days: WEEKDAY_NAMES.map((_, weekday) => {
			const row = byWeekday.get(weekday);
			return {
				weekday,
				isClosed: row?.isClosed ?? false,
				openTime: row?.openTime ?? "",
				closeTime: row?.closeTime ?? ""
			};
		}) }, zod(hoursSchema)),
		weekdayNames: WEEKDAY_NAMES
	};
};
var actions = { save: async ({ request }) => {
	const form = await superValidate(request, zod(hoursSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	try {
		for (const day of form.data.days) await db.insert(openingHours).values({
			weekday: day.weekday,
			isClosed: day.isClosed,
			openTime: day.isClosed ? null : (day.openTime ?? null) || null,
			closeTime: day.isClosed ? null : (day.closeTime ?? null) || null
		}).onDuplicateKeyUpdate({ set: {
			isClosed: day.isClosed,
			openTime: day.isClosed ? null : (day.openTime ?? null) || null,
			closeTime: day.isClosed ? null : (day.closeTime ?? null) || null
		} });
		return message(form, {
			type: "success",
			text: "Opening hours saved"
		});
	} catch (err) {
		console.error("Failed to save opening hours:", err);
		return message(form, {
			type: "error",
			text: "Could not save opening hours"
		}, { status: 500 });
	}
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CQuoN5EY.js.map
