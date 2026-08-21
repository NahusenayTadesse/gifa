import { r as db, a as asc, m as eq } from './db.js-CPhQsSSC.js';
import { s as superValidate, m as message } from './client2.js-ccjA_ZCz.js';
import './exports.js-D8tTp1_m.js';
import './client.js-BE73K9-j.js';
import { z as zod } from './adapters.js-Da1EWjvb.js';
import { s as saveUploadedFile } from './upload.js-BimPnVXC.js';
import { o as object, _ as _enum, n as number } from './auth.js-CzaJ0OJC.js';

//#region src/lib/server/crud.ts
/** Every content table is keyed by an autoincrement id. */
var idSchema = object({ id: number() });
/** Reused by every content form: an integer that decides display order. */
var sortOrderField = number().int().min(0).default(0);
/** One row's "move up" / "move down" click. */
var reorderSchema = object({
	id: number(),
	direction: _enum(["up", "down"])
});
/**
* Builds the `load` and `actions` for a content table's dashboard page.
*
* Every content page needs the same three forms and the same add/edit/delete
* round trip, so the only thing a route has to supply is its schemas and the
* handful of fields that need special treatment (files, JSON lists).
*/
function contentCrud({ table, label, addSchema, editSchema, fileFields = [], listFields = [] }) {
	/** Newest content sorts by the admin-chosen order; the rest falls back to id. */
	const orderColumn = table.sortOrder ?? table.id;
	/** Turns validated form data into a row, minus anything that must not change. */
	const toRow = async (data) => {
		const { id, ...values } = data;
		for (const field of fileFields) {
			const file = values[field];
			if (file instanceof File && file.size > 0) values[field] = await saveUploadedFile(file);
			else delete values[field];
		}
		for (const field of listFields) {
			const raw = values[field];
			values[field] = typeof raw === "string" ? raw.split("\n").map((line) => line.trim()).filter(Boolean) : raw ?? [];
		}
		return values;
	};
	/** Only tables with a real `sortOrder` column can be reordered. */
	const reorderable = Boolean(table.sortOrder);
	const load = async () => {
		const [addForm, editForm, deleteForm, reorderForm, rows] = await Promise.all([
			superValidate(zod(addSchema)),
			superValidate(zod(editSchema)),
			superValidate(zod(idSchema)),
			superValidate(zod(reorderSchema)),
			db.select().from(table).orderBy(asc(orderColumn))
		]);
		return {
			addForm,
			editForm,
			deleteForm,
			reorderForm,
			rows
		};
	};
	return {
		load,
		actions: {
			add: async ({ request, locals }) => {
				const form = await superValidate(request, zod(addSchema));
				if (!form.valid) return message(form, {
					type: "error",
					text: "Please check the form for errors"
				}, { status: 400 });
				try {
					const values = await toRow(form.data);
					await db.insert(table).values({
						...values,
						createdBy: locals.user?.id
					});
					return message(form, {
						type: "success",
						text: `${label} added`
					});
				} catch (err) {
					console.error(`Failed to add ${label}:`, err);
					return message(form, {
						type: "error",
						text: `Could not add ${label}`
					}, { status: 500 });
				}
			},
			edit: async ({ request, locals }) => {
				const form = await superValidate(request, zod(editSchema));
				if (!form.valid) return message(form, {
					type: "error",
					text: "Please check the form for errors"
				}, { status: 400 });
				try {
					const data = form.data;
					const values = await toRow(data);
					const [result] = await db.update(table).set({
						...values,
						updatedBy: locals.user?.id
					}).where(eq(table.id, data.id));
					if (result.affectedRows === 0) return message(form, {
						type: "error",
						text: `That ${label.toLowerCase()} no longer exists`
					}, { status: 404 });
					return message(form, {
						type: "success",
						text: `${label} updated`
					});
				} catch (err) {
					console.error(`Failed to update ${label}:`, err);
					return message(form, {
						type: "error",
						text: `Could not update ${label}`
					}, { status: 500 });
				}
			},
			delete: async ({ request }) => {
				const form = await superValidate(request, zod(idSchema));
				if (!form.valid) return message(form, {
					type: "error",
					text: "Invalid request"
				}, { status: 400 });
				try {
					const [result] = await db.delete(table).where(eq(table.id, form.data.id));
					if (result.affectedRows === 0) return message(form, {
						type: "error",
						text: `That ${label.toLowerCase()} was already deleted`
					}, { status: 404 });
					return message(form, {
						type: "success",
						text: `${label} deleted`
					});
				} catch (err) {
					console.error(`Failed to delete ${label}:`, err);
					return message(form, {
						type: "error",
						text: `Could not delete ${label}`
					}, { status: 500 });
				}
			},
			/** Swaps a row's display order with its neighbour above or below. */
			reorder: async ({ request }) => {
				const form = await superValidate(request, zod(reorderSchema));
				if (!form.valid) return message(form, {
					type: "error",
					text: "Invalid request"
				}, { status: 400 });
				if (!reorderable) return message(form, {
					type: "error",
					text: `${label} has no display order`
				}, { status: 400 });
				try {
					const { id, direction } = form.data;
					const rows = await db.select({
						id: table.id,
						sortOrder: table.sortOrder
					}).from(table).orderBy(asc(orderColumn));
					const index = rows.findIndex((row) => row.id === id);
					const neighborIndex = direction === "up" ? index - 1 : index + 1;
					if (index === -1 || neighborIndex < 0 || neighborIndex >= rows.length) return message(form, {
						type: "success",
						text: `${label} order unchanged`
					});
					const current = rows[index];
					const neighbor = rows[neighborIndex];
					await db.transaction(async (tx) => {
						await tx.update(table).set({ sortOrder: neighbor.sortOrder }).where(eq(table.id, current.id));
						await tx.update(table).set({ sortOrder: current.sortOrder }).where(eq(table.id, neighbor.id));
					});
					return message(form, {
						type: "success",
						text: `${label} order updated`
					});
				} catch (err) {
					console.error(`Failed to reorder ${label}:`, err);
					return message(form, {
						type: "error",
						text: `Could not reorder ${label}`
					}, { status: 500 });
				}
			}
		}
	};
}

export { contentCrud as c, sortOrderField as s };
//# sourceMappingURL=crud.js-DUpTnNVi.js.map
