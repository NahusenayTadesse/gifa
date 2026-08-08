import { contentCrud } from '$lib/server/crud';
import { faqs } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: faqs,
	label: 'FAQ',
	addSchema,
	editSchema
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
