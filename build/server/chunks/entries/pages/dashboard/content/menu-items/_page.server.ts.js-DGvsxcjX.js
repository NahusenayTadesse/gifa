import { r as db, w as menuItems, m as eq, A as menuCategories, a as asc } from '../../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate } from '../../../../../chunks/client2.js-C_OVuHK9.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-YG-tZQQh.js';
import { z as zod } from '../../../../../chunks/adapters.js-BbArp9p3.js';
import { c as contentCrud, s as sortOrderField } from '../../../../../chunks/crud.js-BZIO77a-.js';
import { o as object, k as boolean, n as number, h as boolean$1, d as string, j as file } from '../../../../../chunks/auth.js-DPmbUclL.js';

//#region src/routes/dashboard/content/menu-items/schema.ts
var addSchema = object({
	categoryId: number("Required").int().positive(),
	name: string("Required").min(1, "Required").max(120),
	description: string().max(600).optional(),
	/** Entered in pounds, stored in pence. */
	price: number("Required").min(0).max(999).transform((v) => Math.round(v * 100)),
	image: file().max(1e7).optional(),
	isVegan: boolean$1().default(false),
	isVegetarian: boolean$1().default(false),
	isSpicy: boolean$1().default(false),
	/** One allergen per line; the UK's 14 declarable allergens. */
	allergens: string().optional(),
	isAvailable: boolean$1().default(true),
	isSignature: boolean$1().default(false),
	sortOrder: sortOrderField
});
var editSchema = addSchema.extend({
	id: number(),
	image: file().max(1e7).optional()
});
var toggleSchema = object({
	id: number(),
	isAvailable: boolean()
});
//#endregion
//#region src/routes/dashboard/content/menu-items/+page.server.ts
var crud = contentCrud({
	table: menuItems,
	label: "Dish",
	addSchema,
	editSchema,
	fileFields: ["image"],
	listFields: ["allergens"]
});
var load = async () => {
	const [base, categories, toggleForm] = await Promise.all([
		crud.load(),
		db.select().from(menuCategories).orderBy(asc(menuCategories.sortOrder)),
		superValidate(zod(toggleSchema))
	]);
	return {
		...base,
		categories,
		toggleForm
	};
};
var actions = {
	...crud.actions,
	toggleAvailability: async ({ request }) => {
		const form = await superValidate(request, zod(toggleSchema));
		if (!form.valid) return { form };
		await db.update(menuItems).set({ isAvailable: form.data.isAvailable }).where(eq(menuItems.id, form.data.id));
		return { form };
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DGvsxcjX.js.map
