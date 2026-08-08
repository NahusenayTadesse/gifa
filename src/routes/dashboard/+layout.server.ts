import { redirect } from '@sveltejs/kit';
import { eq, count } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { enquiries } from '$lib/server/db/schema';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, depends }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

	depends('app:messages');

	const messageNumber = await db
		.select({ count: count() })
		.from(enquiries)
		.where(eq(enquiries.seen, false))
		.then((rows) => rows[0]?.count ?? 0);

	return {
		name: locals.user.name,
		messageNumber
	};
};
