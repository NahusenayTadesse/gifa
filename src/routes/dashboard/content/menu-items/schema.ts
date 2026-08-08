import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	categoryId: z.coerce.number('Required').int().positive(),
	name: z.string('Required').min(1, 'Required').max(120),
	description: z.string().max(600).optional(),
	/** Entered in pounds, stored in pence. */
	price: z.coerce
		.number('Required')
		.min(0)
		.max(999)
		.transform((v) => Math.round(v * 100)),
	image: z.file().max(10_000_000).optional(),
	isVegan: z.boolean().default(false),
	isVegetarian: z.boolean().default(false),
	isSpicy: z.boolean().default(false),
	/** One allergen per line; the UK's 14 declarable allergens. */
	allergens: z.string().optional(),
	isAvailable: z.boolean().default(true),
	isSignature: z.boolean().default(false),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number(),
	image: z.file().max(10_000_000).optional()
});

export const toggleSchema = z.object({
	id: z.coerce.number(),
	isAvailable: z.coerce.boolean()
});
