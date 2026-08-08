import { redirect } from '@sveltejs/kit';
import { and, count, eq, isNull } from 'drizzle-orm';
import type { MySqlTable } from 'drizzle-orm/mysql-core';
import { auth } from '$lib/server/auth';
import { db } from '$lib/server/db';
import {
	menuItems,
	galleryImages,
	events,
	faqs,
	testimonials,
	enquiries,
	bookings
} from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';

type CountableTable = MySqlTable & Record<string, any>;

/** Live rows only, so the counts match what the public site actually renders. */
const liveCount = (table: CountableTable) =>
	db
		.select({ value: count() })
		.from(table)
		.where(and(eq(table.isActive, true), isNull(table.deletedAt)))
		.then((rows) => rows[0]?.value ?? 0);

export const load: PageServerLoad = async () => {
	const [dishCount, imageCount, eventCount, faqCount, quotes, unread, upcomingBookings] =
		await Promise.all([
			liveCount(menuItems),
			liveCount(galleryImages),
			liveCount(events),
			liveCount(faqs),
			liveCount(testimonials),
			db
				.select({ value: count() })
				.from(enquiries)
				.where(eq(enquiries.seen, false))
				.then((rows) => rows[0]?.value ?? 0),
			db
				.select({ value: count() })
				.from(bookings)
				.where(eq(bookings.status, 'new'))
				.then((rows) => rows[0]?.value ?? 0)
		]);

	return {
		unread,
		stats: [
			{ label: 'New bookings', value: upcomingBookings, href: '/dashboard/bookings' },
			{ label: 'Menu items', value: dishCount, href: '/dashboard/content/menu-items' },
			{ label: 'Gallery images', value: imageCount, href: '/dashboard/content/gallery' },
			{ label: 'Events', value: eventCount, href: '/dashboard/content/events' },
			{ label: 'FAQs', value: faqCount, href: '/dashboard/content/faqs' },
			{ label: 'Reviews', value: quotes, href: '/dashboard/testimonials' }
		]
	};
};

export const actions: Actions = {
	logout: async (event) => {
		await auth.api.signOut({ headers: event.request.headers });
		return redirect(302, '/login');
	}
};
