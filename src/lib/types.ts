export interface GalleryImage {
	src: string;
	alt?: string | null;
	caption?: string | null;
	/** Optional high-resolution source for the lightbox. Falls back to `src`. */
	full?: string | null;
}

/**
 * Prop shapes for the CMS-backed marketing components. These mirror the
 * relevant columns of the content tables in `$lib/server/db/schema` but are
 * declared structurally so client components never reach into server-only code.
 */

export interface Hero {
	eyebrow?: string | null;
	title: string;
	titleAccent?: string | null;
	tagline?: string | null;
	body?: string | null;
	image: string;
	imageAlt?: string | null;
}

export interface MenuItem {
	id: number;
	categoryId: number;
	name: string;
	description?: string | null;
	/** Pence. */
	price: number;
	image?: string | null;
	isVegan: boolean;
	isVegetarian: boolean;
	isSpicy: boolean;
	allergens?: string[] | null;
	isAvailable: boolean;
	isSignature: boolean;
}

export interface MenuCategory {
	id: number;
	name: string;
	slug: string;
	type: 'food' | 'drink';
	description?: string | null;
}

export interface IconCard {
	icon?: string | null;
	title: string;
	description?: string | null;
}
