import { z } from 'zod/v4';

export const bookingSchema = z.object({
	name: z.string('Your name is required').min(2, 'Name is too short').max(120),
	phone: z.string('A phone number is required').min(6, 'Phone number is too short').max(32),
	email: z.email('Please enter a valid email').optional().or(z.literal('')),
	bookingDate: z.string('Please pick a date'),
	bookingTime: z.string('Please pick a time'),
	partySize: z.coerce.number('Party size is required').int().min(1).max(30),
	occasion: z.string().max(60).optional(),
	notes: z.string().max(600).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: z.string().max(0, 'Submission rejected').optional()
});

export type BookingSchema = typeof bookingSchema;
