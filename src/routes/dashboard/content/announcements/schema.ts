import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	message: z.string('Required').min(1, 'Required').max(255),
	level: z.enum(['info', 'notice', 'warning']).default('info'),
	startsAt: z.coerce.date().optional(),
	endsAt: z.coerce.date().optional(),
	isActive: z.boolean().default(true),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
