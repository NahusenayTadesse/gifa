import { getHero, getUpcomingEvents } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, events] = await Promise.all([getHero('events'), getUpcomingEvents()]);

	return { hero, events };
};
