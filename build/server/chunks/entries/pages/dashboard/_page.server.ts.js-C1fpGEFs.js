import { r as db, c as count, E as enquiries, m as eq, F as bookings, o as and, k as isNull, w as menuItems, x as galleryImages, y as events, B as faqs, G as testimonials } from '../../../chunks/db.js-DqGthl3g.js';
import { a as auth } from '../../../chunks/auth.js-DPmbUclL.js';
import { z as redirect } from '../../../chunks/utils.js-D-kl_003.js';

//#region src/routes/dashboard/+page.server.ts
/** Live rows only, so the counts match what the public site actually renders. */
var liveCount = (table) => db.select({ value: count() }).from(table).where(and(eq(table.isActive, true), isNull(table.deletedAt))).then((rows) => rows[0]?.value ?? 0);
var load = async () => {
	const [dishCount, imageCount, eventCount, faqCount, quotes, unread, upcomingBookings] = await Promise.all([
		liveCount(menuItems),
		liveCount(galleryImages),
		liveCount(events),
		liveCount(faqs),
		liveCount(testimonials),
		db.select({ value: count() }).from(enquiries).where(eq(enquiries.seen, false)).then((rows) => rows[0]?.value ?? 0),
		db.select({ value: count() }).from(bookings).where(eq(bookings.status, "new")).then((rows) => rows[0]?.value ?? 0)
	]);
	return {
		unread,
		stats: [
			{
				label: "New bookings",
				value: upcomingBookings,
				href: "/dashboard/bookings"
			},
			{
				label: "Menu items",
				value: dishCount,
				href: "/dashboard/content/menu-items"
			},
			{
				label: "Gallery images",
				value: imageCount,
				href: "/dashboard/content/gallery"
			},
			{
				label: "Events",
				value: eventCount,
				href: "/dashboard/content/events"
			},
			{
				label: "FAQs",
				value: faqCount,
				href: "/dashboard/content/faqs"
			},
			{
				label: "Reviews",
				value: quotes,
				href: "/dashboard/testimonials"
			}
		]
	};
};
var actions = { logout: async (event) => {
	await auth.api.signOut({ headers: event.request.headers });
	return redirect(302, "/login");
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-C1fpGEFs.js.map
