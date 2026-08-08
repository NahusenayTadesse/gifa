import { A as menuCategories } from '../../../../../chunks/db.js-DqGthl3g.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-DVucIFhN.js';
import { n as number, o as object, d as string, _ as _enum } from '../../../../../chunks/auth.js-Dz0kDMeZ.js';

//#region src/routes/dashboard/content/menu-categories/schema.ts
var addSchema = object({
	name: string("Required").min(1, "Required").max(80),
	slug: string("Required").min(1, "Required").max(80).regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers and hyphens only"),
	type: _enum(["food", "drink"]).default("food"),
	description: string().max(600).optional(),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/menu-categories/+page.server.ts
var crud = contentCrud({
	table: menuCategories,
	label: "Category",
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
//# sourceMappingURL=_page.server.ts.js-D3rXP4ir.js.map
