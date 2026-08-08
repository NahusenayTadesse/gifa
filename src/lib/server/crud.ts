import { superValidate, message } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { asc, eq } from 'drizzle-orm';
import { z } from 'zod/v4';
import type { RequestEvent } from '@sveltejs/kit';
import type { MySqlTable } from 'drizzle-orm/mysql-core';
import { db } from '$lib/server/db';
import { saveUploadedFile } from '$lib/server/upload';

/** Every content table is keyed by an autoincrement id. */
export const idSchema = z.object({ id: z.coerce.number() });

/** Reused by every content form: an integer that decides display order. */
export const sortOrderField = z.coerce.number().int().min(0).default(0);

/** A content table, plus index access to its columns for the generic helpers. */
type AnyTable = MySqlTable & Record<string, any>;
type AnySchema = z.ZodType<any, any>;
/** Validated form data always carries the row's own columns, and an id on edit. */
type FormData = Record<string, any> & { id: number };

interface CrudOptions {
	/** The Drizzle table being managed. */
	table: AnyTable;
	/** Singular, human-readable name used in toast messages, e.g. "Farm". */
	label: string;
	addSchema: AnySchema;
	editSchema: AnySchema;
	/** Fields holding an uploaded File; saved to disk and stored as a filename. */
	fileFields?: string[];
	/** Fields entered as one-per-line text and stored as a JSON string array. */
	listFields?: string[];
}

/**
 * Builds the `load` and `actions` for a content table's dashboard page.
 *
 * Every content page needs the same three forms and the same add/edit/delete
 * round trip, so the only thing a route has to supply is its schemas and the
 * handful of fields that need special treatment (files, JSON lists).
 */
export function contentCrud({
	table,
	label,
	addSchema,
	editSchema,
	fileFields = [],
	listFields = []
}: CrudOptions) {
	/** Newest content sorts by the admin-chosen order; the rest falls back to id. */
	const orderColumn = table.sortOrder ?? table.id;

	/** Turns validated form data into a row, minus anything that must not change. */
	const toRow = async (data: Record<string, any>) => {
		const { id, ...values } = data;

		for (const field of fileFields) {
			const file = values[field];
			// No new upload means "keep whatever is already stored".
			if (file instanceof File && file.size > 0) {
				values[field] = await saveUploadedFile(file);
			} else {
				delete values[field];
			}
		}

		for (const field of listFields) {
			const raw = values[field];
			values[field] =
				typeof raw === 'string'
					? raw
							.split('\n')
							.map((line) => line.trim())
							.filter(Boolean)
					: (raw ?? []);
		}

		return values;
	};

	const load = async () => {
		const [addForm, editForm, deleteForm, rows] = await Promise.all([
			superValidate(zod4(addSchema)),
			superValidate(zod4(editSchema)),
			superValidate(zod4(idSchema)),
			db.select().from(table).orderBy(asc(orderColumn))
		]);

		return { addForm, editForm, deleteForm, rows };
	};

	const actions = {
		add: async ({ request, locals }: RequestEvent) => {
			const form = await superValidate(request, zod4(addSchema));
			if (!form.valid) {
				return message(
					form,
					{ type: 'error', text: 'Please check the form for errors' },
					{ status: 400 }
				);
			}

			try {
				const values = await toRow(form.data as FormData);
				await db.insert(table).values({ ...values, createdBy: locals.user?.id });
				return message(form, { type: 'success', text: `${label} added` });
			} catch (err) {
				console.error(`Failed to add ${label}:`, err);
				return message(form, { type: 'error', text: `Could not add ${label}` }, { status: 500 });
			}
		},

		edit: async ({ request, locals }: RequestEvent) => {
			const form = await superValidate(request, zod4(editSchema));
			if (!form.valid) {
				return message(
					form,
					{ type: 'error', text: 'Please check the form for errors' },
					{ status: 400 }
				);
			}

			try {
				const data = form.data as FormData;
				const values = await toRow(data);
				await db
					.update(table)
					.set({ ...values, updatedBy: locals.user?.id })
					.where(eq(table.id, data.id));
				return message(form, { type: 'success', text: `${label} updated` });
			} catch (err) {
				console.error(`Failed to update ${label}:`, err);
				return message(form, { type: 'error', text: `Could not update ${label}` }, { status: 500 });
			}
		},

		delete: async ({ request }: RequestEvent) => {
			const form = await superValidate(request, zod4(idSchema));
			if (!form.valid) {
				return message(form, { type: 'error', text: 'Invalid request' }, { status: 400 });
			}

			try {
				await db.delete(table).where(eq(table.id, (form.data as FormData).id));
				return message(form, { type: 'success', text: `${label} deleted` });
			} catch (err) {
				console.error(`Failed to delete ${label}:`, err);
				return message(form, { type: 'error', text: `Could not delete ${label}` }, { status: 500 });
			}
		}
	};

	return { load, actions };
}
