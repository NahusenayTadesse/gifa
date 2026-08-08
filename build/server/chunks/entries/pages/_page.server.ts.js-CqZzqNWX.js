import { b as getHero, c as getSignatureDishes, l as listGalleryByContext, d as listFaqs, e as getUpcomingEvents } from '../../chunks/content.js-Dj82eJqF.js';

//#region src/routes/+page.server.ts
var toGalleryImage = (image) => ({
	src: image.src,
	alt: image.altText,
	caption: image.caption
});
var load = async () => {
	const [hero, dishes, foodGallery, loungeGallery, heroSlides, faqs, events] = await Promise.all([
		getHero("home"),
		getSignatureDishes(),
		listGalleryByContext("food"),
		listGalleryByContext("interior"),
		listGalleryByContext("hero"),
		listFaqs("home"),
		getUpcomingEvents()
	]);
	return {
		hero,
		dishes,
		gallery: foodGallery.map(toGalleryImage),
		loungeGallery: loungeGallery.map(toGalleryImage),
		heroSlideshow: heroSlides.map((image) => ({
			src: image.src,
			alt: image.altText
		})),
		faqs,
		events: events.slice(0, 6)
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CqZzqNWX.js.map
