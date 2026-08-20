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

/** One row's "move up" / "move down" click. */
export const reorderSchema = z.object({
	id: z.coerce.number(),
	direction: z.enum(['up', 'down'])
});

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

	/** Only tables with a real `sortOrder` column can be reordered. */
	const reorderable = Boolean(table.sortOrder);

	const load = async () => {
		const [addForm, editForm, deleteForm, reorderForm, rows] = await Promise.all([
			superValidate(zod4(addSchema)),
			superValidate(zod4(editSchema)),
			superValidate(zod4(idSchema)),
			superValidate(zod4(reorderSchema)),
			db.select().from(table).orderBy(asc(orderColumn))
		]);

		return { addForm, editForm, deleteForm, reorderForm, rows };
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
				const [result] = await db
					.update(table)
					.set({ ...values, updatedBy: locals.user?.id })
					.where(eq(table.id, data.id));
				if (result.affectedRows === 0) {
					return message(
						form,
						{ type: 'error', text: `That ${label.toLowerCase()} no longer exists` },
						{ status: 404 }
					);
				}
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
				const [result] = await db
					.delete(table)
					.where(eq(table.id, (form.data as FormData).id));
				if (result.affectedRows === 0) {
					return message(
						form,
						{ type: 'error', text: `That ${label.toLowerCase()} was already deleted` },
						{ status: 404 }
					);
				}
				return message(form, { type: 'success', text: `${label} deleted` });
			} catch (err) {
				console.error(`Failed to delete ${label}:`, err);
				return message(form, { type: 'error', text: `Could not delete ${label}` }, { status: 500 });
			}
		},

		/** Swaps a row's display order with its neighbour above or below. */
		reorder: async ({ request }: RequestEvent) => {
			const form = await superValidate(request, zod4(reorderSchema));
			if (!form.valid) {
				return message(form, { type: 'error', text: 'Invalid request' }, { status: 400 });
			}

			if (!reorderable) {
				return message(
					form,
					{ type: 'error', text: `${label} has no display order` },
					{ status: 400 }
				);
			}

			try {
				const { id, direction } = form.data as FormData & { direction: 'up' | 'down' };
				const rows = await db
					.select({ id: table.id, sortOrder: table.sortOrder })
					.from(table)
					.orderBy(asc(orderColumn));

				const index = rows.findIndex((row) => row.id === id);
				const neighborIndex = direction === 'up' ? index - 1 : index + 1;
				if (index === -1 || neighborIndex < 0 || neighborIndex >= rows.length) {
					// Already at the top/bottom — nothing to swap.
					return message(form, { type: 'success', text: `${label} order unchanged` });
				}

				const current = rows[index];
				const neighbor = rows[neighborIndex];
				await db.transaction(async (tx) => {
					await tx
						.update(table)
						.set({ sortOrder: neighbor.sortOrder })
						.where(eq(table.id, current.id));
					await tx
						.update(table)
						.set({ sortOrder: current.sortOrder })
						.where(eq(table.id, neighbor.id));
				});

				return message(form, { type: 'success', text: `${label} order updated` });
			} catch (err) {
				console.error(`Failed to reorder ${label}:`, err);
				return message(form, { type: 'error', text: `Could not reorder ${label}` }, { status: 500 });
			}
		}
	};

	return { load, actions };
}
