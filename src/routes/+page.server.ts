import {
	getHero,
	listFaqs,
	listGalleryByContext,
	getSignatureDishes,
	getUpcomingEvents
} from '$lib/server/content';
import type { PageServerLoad } from './$types';

const toGalleryImage = (image: { src: string; altText: string; caption: string | null }) => ({
	src: image.src,
	alt: image.altText,
	caption: image.caption
});

export const load: PageServerLoad = async () => {
	const [hero, dishes, foodGallery, loungeGallery, heroSlides, faqs, events] = await Promise.all([
		getHero('home'),
		getSignatureDishes(),
		listGalleryByContext('food'),
		listGalleryByContext('interior'),
		listGalleryByContext('hero'),
		listFaqs('home'),
		getUpcomingEvents()
	]);

	return {
		hero,
		dishes,
		gallery: foodGallery.map(toGalleryImage),
		loungeGallery: loungeGallery.map(toGalleryImage),
		heroSlideshow: heroSlides.map((image) => ({ src: image.src, alt: image.altText })),
		faqs,
		events: events.slice(0, 6)
	};
};
