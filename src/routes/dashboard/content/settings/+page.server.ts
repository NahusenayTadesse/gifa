import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { siteSettings } from '$lib/server/db/schema';
import { settingsSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const current = (await db.select().from(siteSettings).limit(1)).at(0);

	const form = await superValidate(
		{
			phone: current?.phone ?? '',
			email: current?.email ?? '',
			address: current?.address ?? '',
			instagramUrl: current?.instagramUrl ?? '',
			facebookUrl: current?.facebookUrl ?? '',
			justEatUrl: current?.justEatUrl ?? '',
			heroHeading: current?.heroHeading ?? '',
			heroSub: current?.heroSub ?? '',
			footerBlurb: current?.footerBlurb ?? '',
			deliveryEnabled: current?.deliveryEnabled ?? true
		},
		zod4(settingsSchema)
	);

	return { form, exists: Boolean(current) };
};

export const actions: Actions = {
	save: async ({ request, locals }) => {
		const form = await superValidate(request, zod4(settingsSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		try {
			const current = (await db.select({ id: siteSettings.id }).from(siteSettings).limit(1)).at(0);

			// A single row backs the whole site, so the first save creates it.
			if (current) {
				await db
					.update(siteSettings)
					.set({ ...form.data, updatedBy: locals.user?.id })
					.where(eq(siteSettings.id, current.id));
			} else {
				await db.insert(siteSettings).values({ ...form.data, createdBy: locals.user?.id });
			}

			return message(form, { type: 'success', text: 'Site settings saved' });
		} catch (err) {
			console.error('Failed to save site settings:', err);
			return message(
				form,
				{ type: 'error', text: 'Could not save site settings' },
				{ status: 500 }
			);
		}
	}
};
