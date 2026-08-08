import { and, asc, eq, isNull, gte } from 'drizzle-orm';
import type { AnyMySqlTable, MySqlColumn } from 'drizzle-orm/mysql-core';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema';

/**
 * Shape shared by every marketing-content table: `secureFields` for auditing
 * plus a `sortOrder` the dashboard uses to arrange rows on the public page.
 */
type ContentTable = AnyMySqlTable & {
	$inferSelect: Record<string, unknown>;
	id: MySqlColumn;
	isActive: MySqlColumn;
	deletedAt: MySqlColumn;
	sortOrder: MySqlColumn;
};

/** Live rows (active, not soft-deleted) in the order an admin arranged them. */
export const list = <T extends ContentTable>(table: T) =>
	db
		.select()
		.from(table)
		.where(and(eq(table.isActive, true), isNull(table.deletedAt)))
		.orderBy(asc(table.sortOrder), asc(table.id)) as unknown as Promise<T['$inferSelect'][]>;

/** A content table whose rows each belong to one public page. */
type PagedTable = ContentTable & { page: MySqlColumn };

/** Live rows for a single page, in the order an admin arranged them. */
const listForPage = <T extends PagedTable>(table: T, page: string) =>
	db
		.select()
		.from(table)
		.where(and(eq(table.page, page), eq(table.isActive, true), isNull(table.deletedAt)))
		.orderBy(asc(table.sortOrder), asc(table.id)) as unknown as Promise<T['$inferSelect'][]>;

export const listFaqs = (page: string) => listForPage(schema.faqs, page);

/** Live gallery images for one context (food, drink, interior, event, team, hero). */
export const listGalleryByContext = (context: string) =>
	db
		.select()
		.from(schema.galleryImages)
		.where(
			and(
				eq(schema.galleryImages.context, context as any),
				eq(schema.galleryImages.isActive, true),
				isNull(schema.galleryImages.deletedAt)
			)
		)
		.orderBy(asc(schema.galleryImages.sortOrder));

/** The banner for a page. Returns `undefined` if the row has not been seeded. */
export const getHero = async (page: string) =>
	(await db.select().from(schema.pageHeroes).where(eq(schema.pageHeroes.page, page)).limit(1)).at(
		0
	);

/** The single settings row. Returns `undefined` if the table has not been seeded. */
export const getSettings = async () =>
	(await db.select().from(schema.siteSettings).limit(1)).at(0);

/** Menu categories with their live items, food and drink alike, in display order. */
export const getMenu = async () => {
	const [categories, items] = await Promise.all([
		db
			.select()
			.from(schema.menuCategories)
			.where(and(eq(schema.menuCategories.isActive, true), isNull(schema.menuCategories.deletedAt)))
			.orderBy(asc(schema.menuCategories.sortOrder)),
		db
			.select()
			.from(schema.menuItems)
			.where(and(eq(schema.menuItems.isActive, true), isNull(schema.menuItems.deletedAt)))
			.orderBy(asc(schema.menuItems.sortOrder))
	]);

	return categories.map((category) => ({
		...category,
		items: items.filter((item) => item.categoryId === category.id)
	}));
};

/** Up to 3 signature dishes for the homepage grid. */
export const getSignatureDishes = async () =>
	db
		.select()
		.from(schema.menuItems)
		.where(
			and(
				eq(schema.menuItems.isSignature, true),
				eq(schema.menuItems.isAvailable, true),
				eq(schema.menuItems.isActive, true),
				isNull(schema.menuItems.deletedAt)
			)
		)
		.orderBy(asc(schema.menuItems.sortOrder))
		.limit(3);

/** All seven rows of the weekly opening-hours table, ordered Sunday first. */
export const getOpeningHours = () =>
	db.select().from(schema.openingHours).orderBy(asc(schema.openingHours.weekday));

/** Announcements currently in their active window. */
export const getActiveAnnouncements = async () => {
	const now = new Date();
	const rows = await db
		.select()
		.from(schema.announcements)
		.where(eq(schema.announcements.isActive, true))
		.orderBy(asc(schema.announcements.sortOrder));

	return rows.filter(
		(row) => (!row.startsAt || row.startsAt <= now) && (!row.endsAt || row.endsAt >= now)
	);
};

/** Published, upcoming events for the public events/lounge pages. */
export const getUpcomingEvents = () =>
	db
		.select()
		.from(schema.events)
		.where(and(eq(schema.events.isPublished, true), gte(schema.events.startsAt, new Date())))
		.orderBy(asc(schema.events.startsAt));

/** A single published event by its slug, for the event detail/registration page. */
export const getEventBySlug = async (slug: string) =>
	(
		await db
			.select()
			.from(schema.events)
			.where(and(eq(schema.events.slug, slug), eq(schema.events.isPublished, true)))
			.limit(1)
	).at(0);

/** Past events flagged as private-hire social proof. */
export const getPrivateHireExamples = async () => {
	const rows = await db
		.select()
		.from(schema.events)
		.where(
			and(eq(schema.events.isPublished, true), eq(schema.events.isPrivateHireExample, true))
		)
		.orderBy(asc(schema.events.sortOrder));

	return rows.filter((row) => !row.endsAt || row.endsAt < new Date());
};
