import { contentCrud } from '$lib/server/crud';
import { pageHeroes } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: pageHeroes,
	label: 'Page Banner',
	addSchema,
	editSchema,
	fileFields: ['image']
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
