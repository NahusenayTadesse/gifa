import { z } from 'zod/v4';

export const addSchema = z.object({
	page: z.string('Required').min(1, 'Required'),
	title: z.string('Required').min(1, 'Required').max(255),
	titleAccent: z.string().max(255).optional(),
	eyebrow: z.string().max(255).optional(),
	tagline: z.string().max(255).optional(),
	body: z.string().optional(),
	image: z.file().max(10_000_000).optional(),
	imageAlt: z.string().max(255).optional()
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
