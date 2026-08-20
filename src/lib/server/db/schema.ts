import {
	mysqlTable,
	varchar,
	boolean,
	int,
	tinyint,
	text,
	timestamp,
	date,
	time,
	datetime,
	json,
	mysqlEnum
} from 'drizzle-orm/mysql-core';
import { secureFields } from './auth.schema';

/** One banner per marketing page, keyed by route slug ('home', 'menu', 'about', ...). */
export const pageHeroes = mysqlTable('page_heroes', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull().unique(),
	eyebrow: varchar('eyebrow', { length: 255 }),
	title: varchar('title', { length: 255 }).notNull(),
	/** Rendered after the title in the accent colour, so no raw HTML is stored. */
	titleAccent: varchar('title_accent', { length: 255 }),
	tagline: varchar('tagline', { length: 255 }),
	body: text('body'),
	image: varchar('image', { length: 255 }).notNull(),
	imageAlt: varchar('image_alt', { length: 255 }),
	...secureFields
});

// --- Menu ---

export const menuCategories = mysqlTable('menu_categories', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 80 }).notNull(),
	slug: varchar('slug', { length: 80 }).notNull().unique(),
	type: mysqlEnum('type', ['food', 'drink']).notNull().default('food'),
	description: text('description'),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const menuItems = mysqlTable('menu_items', {
	id: int('id').primaryKey().autoincrement(),
	categoryId: int('category_id')
		.notNull()
		.references(() => menuCategories.id, { onDelete: 'cascade' }),
	name: varchar('name', { length: 120 }).notNull(),
	description: text('description'),
	/** Pence. £15.99 -> 1599 */
	price: int('price').notNull(),
	image: varchar('image', { length: 255 }),
	isVegan: boolean('is_vegan').default(false).notNull(),
	isVegetarian: boolean('is_vegetarian').default(false).notNull(),
	isSpicy: boolean('is_spicy').default(false).notNull(),
	/** UK's 14 declarable allergens, multi-select. */
	allergens: json('allergens').$type<string[]>(),
	isAvailable: boolean('is_available').default(true).notNull(),
	/** Surfaced on the homepage signature grid; capped at 3 in the Zod schema. */
	isSignature: boolean('is_signature').default(false).notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

// --- Bookings ---

export const bookings = mysqlTable('bookings', {
	id: int('id').primaryKey().autoincrement(),
	reference: varchar('reference', { length: 12 }).notNull().unique(),
	name: varchar('name', { length: 120 }).notNull(),
	phone: varchar('phone', { length: 32 }).notNull(),
	email: varchar('email', { length: 180 }),
	partySize: tinyint('party_size').notNull(),
	bookingDate: date('booking_date', { mode: 'string' }).notNull(),
	bookingTime: time('booking_time').notNull(),
	occasion: varchar('occasion', { length: 60 }),
	notes: text('notes'),
	status: mysqlEnum('status', ['new', 'confirmed', 'seated', 'no_show', 'cancelled'])
		.notNull()
		.default('new'),
	staffNotes: text('staff_notes'),
	source: varchar('source', { length: 30 }).notNull().default('website'),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// --- Gallery ---

export const galleryImages = mysqlTable('gallery_images', {
	id: int('id').primaryKey().autoincrement(),
	src: varchar('src', { length: 255 }).notNull(),
	title: varchar('title', { length: 140 }),
	altText: varchar('alt_text', { length: 200 }).notNull(),
	caption: text('caption'),
	place: varchar('place', { length: 120 }),
	context: mysqlEnum('context', ['food', 'drink', 'interior', 'event', 'team', 'hero'])
		.notNull()
		.default('interior'),
	isFeatured: boolean('is_featured').default(false).notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

// --- Events ---

export const events = mysqlTable('events', {
	id: int('id').primaryKey().autoincrement(),
	title: varchar('title', { length: 160 }).notNull(),
	slug: varchar('slug', { length: 180 }).notNull().unique(),
	description: text('description'),
	eventType: varchar('event_type', { length: 60 }),
	startsAt: datetime('starts_at').notNull(),
	endsAt: datetime('ends_at'),
	posterImage: varchar('poster_image', { length: 255 }),
	/** Past events shown as social proof on the private-hire page. */
	isPrivateHireExample: boolean('is_private_hire_example').default(false).notNull(),
	ticketUrl: varchar('ticket_url', { length: 255 }),
	bookingNote: text('booking_note'),
	isPublished: boolean('is_published').default(true).notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const eventRegistrations = mysqlTable('event_registrations', {
	id: int('id').primaryKey().autoincrement(),
	eventId: int('event_id')
		.notNull()
		.references(() => events.id, { onDelete: 'cascade' }),
	name: varchar('name', { length: 120 }).notNull(),
	phone: varchar('phone', { length: 32 }),
	email: varchar('email', { length: 180 }).notNull(),
	guests: tinyint('guests').notNull().default(1),
	notes: text('notes'),
	status: mysqlEnum('status', ['new', 'confirmed', 'cancelled']).notNull().default('new'),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

/**
 * Extra photos for one event, shown at the bottom of its page — separate
 * from `events.posterImage` (the single hero image). Deliberately a plain
 * relational table rather than a JSON array column: no per-photo metadata
 * needed, and JSON columns are more trouble than they're worth on MariaDB
 * in production.
 */
export const eventGallery = mysqlTable('event_gallery', {
	id: int('id').primaryKey().autoincrement(),
	eventId: int('event_id')
		.notNull()
		.references(() => events.id, { onDelete: 'cascade' }),
	imageUrl: varchar('image_url', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// --- Opening hours ---

export const openingHours = mysqlTable('opening_hours', {
	id: int('id').primaryKey().autoincrement(),
	/** 0 = Sunday ... 6 = Saturday */
	weekday: tinyint('weekday').notNull().unique(),
	openTime: time('open_time'),
	closeTime: time('close_time'),
	isClosed: boolean('is_closed').default(false).notNull()
});

export const dateOverrides = mysqlTable('date_overrides', {
	id: int('id').primaryKey().autoincrement(),
	date: date('date', { mode: 'string' }).notNull().unique(),
	openTime: time('open_time'),
	closeTime: time('close_time'),
	isClosed: boolean('is_closed').default(false).notNull(),
	label: varchar('label', { length: 120 })
});

// --- Announcements ---

export const announcements = mysqlTable('announcements', {
	id: int('id').primaryKey().autoincrement(),
	message: varchar('message', { length: 255 }).notNull(),
	level: mysqlEnum('level', ['info', 'notice', 'warning']).notNull().default('info'),
	startsAt: datetime('starts_at'),
	endsAt: datetime('ends_at'),
	isActive: boolean('is_active').default(true).notNull(),
	sortOrder: int('sort_order').default(0).notNull()
});

// --- Enquiries (contact + private hire) ---

export const enquiries = mysqlTable('enquiries', {
	id: int('id').primaryKey().autoincrement(),
	type: mysqlEnum('type', ['contact', 'private_hire']).notNull().default('contact'),
	name: varchar('name', { length: 120 }).notNull(),
	phone: varchar('phone', { length: 32 }),
	email: varchar('email', { length: 180 }),
	message: text('message'),
	/** Private-hire-only fields; empty on plain contact enquiries. */
	eventDate: date('event_date', { mode: 'string' }),
	guests: int('guests'),
	eventType: varchar('event_type', { length: 80 }),
	status: mysqlEnum('status', ['new', 'in_progress', 'closed']).notNull().default('new'),
	internalNotes: text('internal_notes'),
	seen: boolean('seen').default(false).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

// --- Reviews / testimonials ---

export const testimonials = mysqlTable('testimonials', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	position: varchar('position', { length: 255 }),
	message: text('message').notNull(),
	avatar: varchar('avatar', { length: 255 }),
	...secureFields
});

export const faqs = mysqlTable('faqs', {
	id: int('id').primaryKey().autoincrement(),
	/** Which page's FAQ section this answer belongs to. */
	page: varchar('page', { length: 50 }).notNull().default('menu'),
	question: varchar('question', { length: 255 }).notNull(),
	answer: text('answer').notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

/** Single-row table holding site-wide contact details and footer/hero copy. */
export const siteSettings = mysqlTable('site_settings', {
	id: int('id').primaryKey().autoincrement(),
	phone: varchar('phone', { length: 32 }),
	email: varchar('email', { length: 180 }),
	address: varchar('address', { length: 255 }),
	instagramUrl: varchar('instagram_url', { length: 255 }),
	facebookUrl: varchar('facebook_url', { length: 255 }),
	justEatUrl: varchar('just_eat_url', { length: 255 }),
	heroHeading: varchar('hero_heading', { length: 255 }),
	heroSub: varchar('hero_sub', { length: 255 }),
	footerBlurb: text('footer_blurb'),
	deliveryEnabled: boolean('delivery_enabled').default(true).notNull(),
	...secureFields
});

export * from './auth.schema';
