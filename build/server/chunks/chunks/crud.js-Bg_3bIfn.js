import { r as db, m as eq, a as asc } from './db.js-DqGthl3g.js';
import { s as superValidate, m as message } from './client2.js-BrZUAIoh.js';
import './exports.js-D8tTp1_m.js';
import './client.js-SaiAi5EC.js';
import { z as zod } from './adapters.js-DZdKSGWy.js';
import { s as saveUploadedFile } from './upload.js-CnGDM66A.js';
import { o as object, n as number } from './auth.js-CigcsaCA.js';

//#region src/lib/server/crud.ts
/** Every content table is keyed by an autoincrement id. */
var idSchema = object({ id: number() });
/** Reused by every content form: an integer that decides display order. */
var sortOrderField = number().int().min(0).default(0);
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
	const load = async () => {
		const [addForm, editForm, deleteForm, rows] = await Promise.all([
			superValidate(zod(addSchema)),
			superValidate(zod(editSchema)),
			superValidate(zod(idSchema)),
			db.select().from(table).orderBy(asc(orderColumn))
		]);
		return {
			addForm,
			editForm,
			deleteForm,
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
					await db.update(table).set({
						...values,
						updatedBy: locals.user?.id
					}).where(eq(table.id, data.id));
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
					await db.delete(table).where(eq(table.id, form.data.id));
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
			}
		}
	};
}

export { contentCrud as c, sortOrderField as s };
//# sourceMappingURL=crud.js-Bg_3bIfn.js.map
