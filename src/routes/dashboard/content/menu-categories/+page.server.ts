import { contentCrud } from '$lib/server/crud';
import { menuCategories } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: menuCategories,
	label: 'Category',
	addSchema,
	editSchema
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
