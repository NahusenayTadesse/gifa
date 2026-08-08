import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	title: z.string('Required').min(1, 'Required').max(160),
	slug: z
		.string('Required')
		.min(1, 'Required')
		.max(180)
		.regex(/^[a-z0-9-]+$/, 'Lowercase letters, numbers and hyphens only'),
	description: z.string().optional(),
	eventType: z.string().max(60).optional(),
	startsAt: z.coerce.date('Required'),
	endsAt: z.coerce.date().optional(),
	posterImage: z.file().max(10_000_000).optional(),
	isPrivateHireExample: z.boolean().default(false),
	ticketUrl: z.string().max(255).optional(),
	bookingNote: z.string().optional(),
	isPublished: z.boolean().default(true),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number(),
	posterImage: z.file().max(10_000_000).optional()
});
