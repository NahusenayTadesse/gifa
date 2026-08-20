import { z } from 'zod/v4';

export const addSchema = z.object({
	eventId: z.coerce.number('Pick an event').int().positive(),
	images: z
		.array(z.file('Each file must be an image').max(10_000_000, 'Each photo must be under 10MB'))
		.min(1, 'Add at least one photo')
		.max(30, 'Add up to 30 photos at a time')
});

export const deleteSchema = z.object({ id: z.coerce.number() });
