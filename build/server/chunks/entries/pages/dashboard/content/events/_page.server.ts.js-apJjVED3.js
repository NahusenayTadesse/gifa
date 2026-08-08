import { y as events } from '../../../../../chunks/db.js-DqGthl3g.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-BZIO77a-.js';
import { j as file, n as number, o as object, h as boolean, d as string, i as date } from '../../../../../chunks/auth.js-DPmbUclL.js';

//#region src/routes/dashboard/content/events/schema.ts
var addSchema = object({
	title: string("Required").min(1, "Required").max(160),
	slug: string("Required").min(1, "Required").max(180).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers and hyphens only"),
	description: string().optional(),
	eventType: string().max(60).optional(),
	startsAt: date("Required"),
	endsAt: date().optional(),
	posterImage: file().max(1e7).optional(),
	isPrivateHireExample: boolean().default(false),
	ticketUrl: string().max(255).optional(),
	bookingNote: string().optional(),
	isPublished: boolean().default(true),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/events/+page.server.ts
var crud = contentCrud({
	table: events,
	label: "Event",
	addSchema,
	editSchema: addSchema.extend({
		id: number(),
		posterImage: file().max(1e7).optional()
	}),
	fileFields: ["posterImage"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-apJjVED3.js.map
