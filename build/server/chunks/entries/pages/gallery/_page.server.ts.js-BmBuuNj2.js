import { x as galleryImages } from '../../../chunks/db.js-CPhQsSSC.js';
import { b as getHero, j as list } from '../../../chunks/content.js-DdRtddEa.js';

//#region src/routes/gallery/+page.server.ts
var load = async () => {
	const [hero, images] = await Promise.all([getHero("gallery"), list(galleryImages)]);
	return {
		hero,
		images: images.filter((image) => image.context !== "hero").map((image) => ({
			id: image.id,
			src: image.src,
			alt: image.altText,
			caption: image.caption,
			place: image.place,
			context: image.context
		}))
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-BmBuuNj2.js.map
