import { B as faqs } from '../../../../../chunks/db.js-DqGthl3g.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-gg3ijoqJ.js';
import { n as number, o as object, d as string } from '../../../../../chunks/auth.js-1j_Wga1v.js';

//#region src/routes/dashboard/content/faqs/schema.ts
var addSchema = object({
	page: string("Required").min(1, "Required"),
	question: string("Required").min(1, "Required").max(255),
	answer: string("Required").min(1, "Required"),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/faqs/+page.server.ts
var crud = contentCrud({
	table: faqs,
	label: "FAQ",
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
//# sourceMappingURL=_page.server.ts.js-DJfK8eoT.js.map
