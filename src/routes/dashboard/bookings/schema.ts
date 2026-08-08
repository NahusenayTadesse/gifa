import { z } from 'zod/v4';

export const statusSchema = z.object({
	id: z.coerce.number(),
	status: z.enum(['new', 'confirmed', 'seated', 'no_show', 'cancelled'])
});

export const deleteSchema = z.object({ id: z.coerce.number() });
