import { b as getHero, l as listGalleryByContext, d as listFaqs } from '../../../chunks/content.js-DdRtddEa.js';

//#region src/routes/about/+page.server.ts
var load = async () => {
	const [hero, gallery, faqs] = await Promise.all([
		getHero("about"),
		listGalleryByContext("interior"),
		listFaqs("about")
	]);
	return {
		hero,
		gallery: gallery.map((image) => ({
			src: image.src,
			alt: image.altText,
			caption: image.caption
		})),
		faqs
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CU_E3I7T.js.map
