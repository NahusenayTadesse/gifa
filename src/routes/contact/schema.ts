import { z } from 'zod/v4';

export const contactSchema = z.object({
	name: z.string('Your name is required').min(2, 'Name is too short').max(255),
	email: z.email('A valid email address is required'),
	phone: z.string().max(32, 'Phone number is too long').optional(),
	subject: z.string('Subject is required').min(2, 'Subject is too short').max(255),
	message: z.string('Message is required').min(10, 'Please tell us a little more'),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: z.string().max(0, 'Submission rejected').optional()
});

export type ContactSchema = typeof contactSchema;
