import { z } from 'zod/v4';

export const privateHireSchema = z.object({
	name: z.string('Your name is required').min(2, 'Name is too short').max(120),
	phone: z.string().max(32).optional(),
	email: z.email('A valid email address is required'),
	eventDate: z.string().optional(),
	guests: z.coerce.number().int().min(1).max(500).optional(),
	eventType: z.string().max(80).optional(),
	message: z.string().max(2000).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: z.string().max(0, 'Submission rejected').optional()
});

export type PrivateHireSchema = typeof privateHireSchema;
