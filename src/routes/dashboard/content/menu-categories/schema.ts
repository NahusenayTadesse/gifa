import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	name: z.string('Required').min(1, 'Required').max(80),
	slug: z
		.string('Required')
		.min(1, 'Required')
		.max(80)
		.regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers and hyphens only'),
	type: z.enum(['food', 'drink']).default('food'),
	description: z.string().max(600).optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
