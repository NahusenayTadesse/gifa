import { getHero, getMenu, listFaqs } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, categories, faqs] = await Promise.all([
		getHero('menu'),
		getMenu(),
		listFaqs('menu')
	]);

	return {
		hero,
		foodCategories: categories.filter((c) => c.type === 'food' && c.items.length),
		drinkCategories: categories.filter((c) => c.type === 'drink' && c.items.length),
		faqs
	};
};
