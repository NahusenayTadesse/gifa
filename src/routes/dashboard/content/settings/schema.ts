import { z } from 'zod/v4';

export const settingsSchema = z.object({
	phone: z.string().max(32).optional(),
	email: z.string().max(180).optional(),
	address: z.string().max(255).optional(),
	instagramUrl: z.string().max(255).optional(),
	facebookUrl: z.string().max(255).optional(),
	justEatUrl: z.string().max(255).optional(),
	heroHeading: z.string().max(255).optional(),
	heroSub: z.string().max(255).optional(),
	footerBlurb: z.string().optional(),
	deliveryEnabled: z.boolean().default(true)
});

export type SettingsSchema = typeof settingsSchema;
