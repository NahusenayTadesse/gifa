import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { asc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { openingHours } from '$lib/server/db/schema';
import { hoursSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const WEEKDAY_NAMES = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

export const load: PageServerLoad = async () => {
	const rows = await db.select().from(openingHours).orderBy(asc(openingHours.weekday));
	const byWeekday = new Map(rows.map((row) => [row.weekday, row]));

	const days = WEEKDAY_NAMES.map((_, weekday) => {
		const row = byWeekday.get(weekday);
		return {
			weekday,
			isClosed: row?.isClosed ?? false,
			openTime: row?.openTime ?? '',
			closeTime: row?.closeTime ?? ''
		};
	});

	const form = await superValidate({ days }, zod4(hoursSchema));
	return { form, weekdayNames: WEEKDAY_NAMES };
};

export const actions: Actions = {
	save: async ({ request }) => {
		const form = await superValidate(request, zod4(hoursSchema));

		if (!form.valid) {
			return message(
				form,
				{ type: 'error', text: 'Please check the form for errors' },
				{ status: 400 }
			);
		}

		try {
			for (const day of form.data.days) {
				await db
					.insert(openingHours)
					.values({
						weekday: day.weekday,
						isClosed: day.isClosed,
						openTime: day.isClosed ? null : (day.openTime ?? null) || null,
						closeTime: day.isClosed ? null : (day.closeTime ?? null) || null
					})
					.onDuplicateKeyUpdate({
						set: {
							isClosed: day.isClosed,
							openTime: day.isClosed ? null : (day.openTime ?? null) || null,
							closeTime: day.isClosed ? null : (day.closeTime ?? null) || null
						}
					});
			}

			return message(form, { type: 'success', text: 'Opening hours saved' });
		} catch (err) {
			console.error('Failed to save opening hours:', err);
			return message(
				form,
				{ type: 'error', text: 'Could not save opening hours' },
				{ status: 500 }
			);
		}
	}
};
