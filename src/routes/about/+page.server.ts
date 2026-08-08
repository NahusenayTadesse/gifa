import { getHero, listFaqs, listGalleryByContext } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, gallery, faqs] = await Promise.all([
		getHero('about'),
		listGalleryByContext('interior'),
		listFaqs('about')
	]);

	return {
		hero,
		gallery: gallery.map((image) => ({ src: image.src, alt: image.altText, caption: image.caption })),
		faqs
	};
};
