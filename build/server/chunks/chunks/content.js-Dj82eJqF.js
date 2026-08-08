import { r as db, t as siteSettings, u as announcements, m as eq, a as asc, v as pageHeroes, w as menuItems, o as and, k as isNull, x as galleryImages, y as events, j as gte, z as openingHours, A as menuCategories, B as faqs } from './db.js-DqGthl3g.js';

//#region src/lib/server/content.ts
/** Live rows (active, not soft-deleted) in the order an admin arranged them. */
var list = (table) => db.select().from(table).where(and(eq(table.isActive, true), isNull(table.deletedAt))).orderBy(asc(table.sortOrder), asc(table.id));
/** Live rows for a single page, in the order an admin arranged them. */
var listForPage = (table, page) => db.select().from(table).where(and(eq(table.page, page), eq(table.isActive, true), isNull(table.deletedAt))).orderBy(asc(table.sortOrder), asc(table.id));
var listFaqs = (page) => listForPage(faqs, page);
/** Live gallery images for one context (food, drink, interior, event, team, hero). */
var listGalleryByContext = (context) => db.select().from(galleryImages).where(and(eq(galleryImages.context, context), eq(galleryImages.isActive, true), isNull(galleryImages.deletedAt))).orderBy(asc(galleryImages.sortOrder));
/** The banner for a page. Returns `undefined` if the row has not been seeded. */
var getHero = async (page) => (await db.select().from(pageHeroes).where(eq(pageHeroes.page, page)).limit(1)).at(0);
/** The single settings row. Returns `undefined` if the table has not been seeded. */
var getSettings = async () => (await db.select().from(siteSettings).limit(1)).at(0);
/** Menu categories with their live items, food and drink alike, in display order. */
var getMenu = async () => {
	const [categories, items] = await Promise.all([db.select().from(menuCategories).where(and(eq(menuCategories.isActive, true), isNull(menuCategories.deletedAt))).orderBy(asc(menuCategories.sortOrder)), db.select().from(menuItems).where(and(eq(menuItems.isActive, true), isNull(menuItems.deletedAt))).orderBy(asc(menuItems.sortOrder))]);
	return categories.map((category) => ({
		...category,
		items: items.filter((item) => item.categoryId === category.id)
	}));
};
/** Up to 3 signature dishes for the homepage grid. */
var getSignatureDishes = async () => db.select().from(menuItems).where(and(eq(menuItems.isSignature, true), eq(menuItems.isAvailable, true), eq(menuItems.isActive, true), isNull(menuItems.deletedAt))).orderBy(asc(menuItems.sortOrder)).limit(3);
/** All seven rows of the weekly opening-hours table, ordered Sunday first. */
var getOpeningHours = () => db.select().from(openingHours).orderBy(asc(openingHours.weekday));
/** Announcements currently in their active window. */
var getActiveAnnouncements = async () => {
	const now = /* @__PURE__ */ new Date();
	return (await db.select().from(announcements).where(eq(announcements.isActive, true)).orderBy(asc(announcements.sortOrder))).filter((row) => (!row.startsAt || row.startsAt <= now) && (!row.endsAt || row.endsAt >= now));
};
/** Published, upcoming events for the public events/lounge pages. */
var getUpcomingEvents = () => db.select().from(events).where(and(eq(events.isPublished, true), gte(events.startsAt, /* @__PURE__ */ new Date()))).orderBy(asc(events.startsAt));
/** A single published event by its slug, for the event detail/registration page. */
var getEventBySlug = async (slug) => (await db.select().from(events).where(and(eq(events.slug, slug), eq(events.isPublished, true))).limit(1)).at(0);
/** Past events flagged as private-hire social proof. */
var getPrivateHireExamples = async () => {
	return (await db.select().from(events).where(and(eq(events.isPublished, true), eq(events.isPrivateHireExample, true))).orderBy(asc(events.sortOrder))).filter((row) => !row.endsAt || row.endsAt < /* @__PURE__ */ new Date());
};

export { getActiveAnnouncements as a, getHero as b, getSignatureDishes as c, listFaqs as d, getUpcomingEvents as e, getOpeningHours as f, getSettings as g, getEventBySlug as h, list as i, getMenu as j, getPrivateHireExamples as k, listGalleryByContext as l };
//# sourceMappingURL=content.js-Dj82eJqF.js.map
