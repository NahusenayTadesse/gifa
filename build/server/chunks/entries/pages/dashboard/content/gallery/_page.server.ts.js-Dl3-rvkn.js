import { x as galleryImages } from '../../../../../chunks/db.js-DqGthl3g.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-gg3ijoqJ.js';
import { j as file, n as number, o as object, h as boolean, _ as _enum, d as string } from '../../../../../chunks/auth.js-1j_Wga1v.js';

//#region src/routes/dashboard/content/gallery/schema.ts
var addSchema = object({
	src: file("An image is required").max(1e7),
	title: string().max(140).optional(),
	altText: string("Required").min(1, "Required").max(200),
	caption: string().max(600).optional(),
	place: string().max(120).optional(),
	context: _enum([
		"food",
		"drink",
		"interior",
		"event",
		"team",
		"hero"
	]).default("interior"),
	isFeatured: boolean().default(false),
	sortOrder: sortOrderField
});
//#endregion
//#region src/routes/dashboard/content/gallery/+page.server.ts
var crud = contentCrud({
	table: galleryImages,
	label: "Image",
	addSchema,
	editSchema: addSchema.extend({
		id: number(),
		src: file().max(1e7).optional()
	}),
	fileFields: ["src"]
});
var load = crud.load;
var actions = crud.actions;

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-Dl3-rvkn.js.map
