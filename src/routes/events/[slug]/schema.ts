import { z } from 'zod/v4';

export const registrationSchema = z.object({
	name: z.string('Your name is required').min(2, 'Name is too short').max(120),
	phone: z.string().max(32).optional(),
	email: z.email('A valid email address is required'),
	guests: z.coerce.number('Number of guests is required').int().min(1).max(20),
	notes: z.string().max(600).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: z.string().max(0, 'Submission rejected').optional()
});

export type RegistrationSchema = typeof registrationSchema;
