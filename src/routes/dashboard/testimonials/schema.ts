import { z } from 'zod/v4';

export const paymentMethod = z.object({
	name: z.string('Name of Payment Method is required').min(2).max(50),
	position: z.string().optional(),
	testimonial: z.string(),
	avatar: z.file('Avatar is required').max(10000000)
});

export const editPaymentMethod = z.object({
	id: z.coerce.number(),
	name: z.string('Name of Payment Method is required').min(2).max(50),
	position: z.string().optional(),
	testimonial: z.string(),
	avatar: z.file('Avatar is required').max(10000000).optional()
});

export type EditPaymentMethod = typeof editPaymentMethod;

export const deleteTestimonial = z.object({
	id: z.coerce.number()
});

export type DeleteTestimonial = typeof deleteTestimonial;
