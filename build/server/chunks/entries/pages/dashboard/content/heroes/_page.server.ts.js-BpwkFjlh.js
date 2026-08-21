import { v as pageHeroes } from '../../../../../chunks/db.js-CPhQsSSC.js';
import { c as contentCrud } from '../../../../../chunks/crud.js-DUpTnNVi.js';
import { n as number, o as object, d as string, j as file } from '../../../../../chunks/auth.js-CzaJ0OJC.js';

//#region src/routes/dashboard/content/heroes/schema.ts
var addSchema = object({
	page: string("Required").min(1, "Required"),
	title: string("Required").min(1, "Required").max(255),
	titleAccent: string().max(255).optional(),
	eyebrow: string().max(255).optional(),
	tagline: string().max(255).optional(),
	body: string().optional(),
	image: file().max(1e7).optional(),
	imageAlt: string().max(255).optional()
});
//#endregion
//#region src/routes/dashboard/content/heroes/+page.server.ts
var crud = contentCrud({
	table: pageHeroes,
	label: "Page Banner",
	addSchema,
	editSchema: addSchema.extend({ id: number() }),
	fileFields: ["image"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-BpwkFjlh.js.map
