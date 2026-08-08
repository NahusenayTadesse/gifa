import { getHero, list } from '$lib/server/content';
import { galleryImages } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, images] = await Promise.all([getHero('gallery'), list(galleryImages)]);

	return {
		hero,
		// `hero`-tagged rows are the homepage background pool, not a public
		// browsing category — everything in it is usually a duplicate of a shot
		// already filed under food/drink/interior/event/team.
		images: images
			.filter((image) => image.context !== 'hero')
			.map((image) => ({
				id: image.id,
				src: image.src,
				alt: image.altText,
				caption: image.caption,
				place: image.place,
				context: image.context
			}))
	};
};
