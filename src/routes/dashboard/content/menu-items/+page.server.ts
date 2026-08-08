import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { asc, eq } from 'drizzle-orm';
import { contentCrud } from '$lib/server/crud';
import { db } from '$lib/server/db';
import { menuItems, menuCategories } from '$lib/server/db/schema';
import { addSchema, editSchema, toggleSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: menuItems,
	label: 'Dish',
	addSchema,
	editSchema,
	fileFields: ['image'],
	listFields: ['allergens']
});

export const load: PageServerLoad = async () => {
	const [base, categories, toggleForm] = await Promise.all([
		crud.load(),
		db.select().from(menuCategories).orderBy(asc(menuCategories.sortOrder)),
		superValidate(zod4(toggleSchema))
	]);

	return { ...base, categories, toggleForm };
};

export const actions: Actions = {
	...crud.actions,
	toggleAvailability: async ({ request }) => {
		const form = await superValidate(request, zod4(toggleSchema));
		if (!form.valid) return { form };

		await db
			.update(menuItems)
			.set({ isAvailable: form.data.isAvailable })
			.where(eq(menuItems.id, form.data.id));

		return { form };
	}
};
