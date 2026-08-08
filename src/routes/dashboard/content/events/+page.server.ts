import { contentCrud } from '$lib/server/crud';
import { events } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: events,
	label: 'Event',
	addSchema,
	editSchema,
	fileFields: ['posterImage']
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
