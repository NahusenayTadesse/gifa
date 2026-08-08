import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	src: z.file('An image is required').max(10_000_000),
	title: z.string().max(140).optional(),
	altText: z.string('Required').min(1, 'Required').max(200),
	caption: z.string().max(600).optional(),
	place: z.string().max(120).optional(),
	context: z.enum(['food', 'drink', 'interior', 'event', 'team', 'hero']).default('interior'),
	isFeatured: z.boolean().default(false),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number(),
	src: z.file().max(10_000_000).optional()
});
