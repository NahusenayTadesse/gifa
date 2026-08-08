import { z } from 'zod/v4';

export const markSeen = z.object({ id: z.coerce.number() });

export const statusSchema = z.object({
	id: z.coerce.number(),
	status: z.enum(['new', 'in_progress', 'closed'])
});

export const deleteEnquiry = z.object({ id: z.coerce.number() });
