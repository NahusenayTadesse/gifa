import { u as announcements } from '../../../../../chunks/db.js-DqGthl3g.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-DtaldeSl.js';
import { n as number, o as object, h as boolean, i as date, _ as _enum, d as string } from '../../../../../chunks/auth.js-DlYYXSox.js';

//#region src/routes/dashboard/content/announcements/schema.ts
var addSchema = object({
	message: string("Required").min(1, "Required").max(255),
	level: _enum([
		"info",
		"notice",
		"warning"
	]).default("info"),
	startsAt: date().optional(),
	endsAt: date().optional(),
	isActive: boolean().default(true),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/announcements/+page.server.ts
var crud = contentCrud({
	table: announcements,
	label: "Announcement",
	addSchema,
	editSchema: addSchema.extend({ id: number() })
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-SjeutZRs.js.map
