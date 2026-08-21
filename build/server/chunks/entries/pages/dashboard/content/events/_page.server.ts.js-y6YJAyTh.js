import { y as events } from '../../../../../chunks/db.js-CPhQsSSC.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-DUpTnNVi.js';
import { j as file, n as number, o as object, g as boolean, d as string, h as date } from '../../../../../chunks/auth.js-CzaJ0OJC.js';

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
//# sourceMappingURL=_page.server.ts.js-y6YJAyTh.js.map
