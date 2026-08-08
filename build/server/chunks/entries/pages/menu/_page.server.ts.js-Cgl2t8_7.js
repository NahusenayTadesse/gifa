import { b as getHero, j as getMenu, d as listFaqs } from '../../../chunks/content.js-Dj82eJqF.js';

//#region src/routes/menu/+page.server.ts
var load = async () => {
	const [hero, categories, faqs] = await Promise.all([
		getHero("menu"),
		getMenu(),
		listFaqs("menu")
	]);
	return {
		hero,
		foodCategories: categories.filter((c) => c.type === "food" && c.items.length),
		drinkCategories: categories.filter((c) => c.type === "drink" && c.items.length),
		faqs
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-Cgl2t8_7.js.map
