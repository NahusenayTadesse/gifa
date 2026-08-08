import { z } from 'zod/v4';

const dayRow = z.object({
	weekday: z.coerce.number().int().min(0).max(6),
	isClosed: z.boolean().default(false),
	openTime: z.string().optional(),
	closeTime: z.string().optional()
});

export const hoursSchema = z.object({
	days: z.array(dayRow).length(7)
});
