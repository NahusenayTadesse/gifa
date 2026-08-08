import { contentCrud } from '$lib/server/crud';
import { galleryImages } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: galleryImages,
	label: 'Image',
	addSchema,
	editSchema,
	fileFields: ['src']
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
