import { U as head, a4 as escape_html, ad as store_mutate, ac as store_get, af as unsubscribe_stores, T as attr, Z as ensure_array_like, $ as spread_props } from './index-server.js-CFhxFuri.js';
import { r as renderComponent, D as Data_table, a as Data_table_sort } from './data-table.js-DtLuKeWw.js';
import { I as InputComp } from './InputComp.js-BMy-o067.js';
import { P as Plus } from './plus.js-Dh6l4MVl.js';
import { S as Save } from './save.js-DlyDISKU.js';
import { I as Image_viewer, S as Square_pen } from './image-viewer.js-BySaE7Pv.js';
import { T as Trash } from './trash.js-CGwD8oO2.js';
import { b as buttonVariants, B as Button } from './button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from './LoadingBtn.js-CAww63Xj.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from './dialog.js-DUe6BEut.js';
import { P as Popover, a as Popover_trigger, b as Popover_content } from './popover.js-HGTt93TX.js';
import { S as Scroll_area } from './scroll-area.js-ZxpPU0l1.js';
import { d as superForm } from './client2.js-BrZUAIoh.js';
import './exports.js-D8tTp1_m.js';
import './client.js-SaiAi5EC.js';
import { E as Errors } from './Errors.js-CCE9GXl8.js';

//#region src/lib/components/Table/crud-dialog.svelte
function Crud_dialog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { title, data, action, fields, values = {}, existing = {}, trigger, variant, iconOnly = false } = $$props;
		const editing = "id" in values;
		const formId = `crud-${Math.random().toString(36).slice(2, 9)}`;
		const { form, errors, delayed, allErrors } = superForm(data, {
			resetForm: !editing,
			id: formId
		});
		for (const [key, value] of Object.entries(values)) store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[key] = value);
		let open = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						{
							function child($$renderer, { props }) {
								Button($$renderer, spread_props([props, {
									size: "sm",
									variant: variant ?? (editing ? "ghost" : "default"),
									class: "border-0",
									children: ($$renderer) => {
										if (editing) {
											$$renderer.push("<!--[0-->");
											Square_pen($$renderer, { class: "size-4" });
										} else {
											$$renderer.push("<!--[-1-->");
											Plus($$renderer, { class: "size-4" });
										}
										$$renderer.push(`<!--]--> `);
										if (!iconOnly) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`${escape_html(trigger ?? title)}`);
										} else $$renderer.push("<!--[-1-->");
										$$renderer.push(`<!--]-->`);
									},
									$$slots: { default: true }
								}]));
							}
							if (Dialog_trigger) {
								$$renderer.push("<!--[-->");
								Dialog_trigger($$renderer, {
									child,
									$$slots: { child: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								class: "w-lg!",
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(title)}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									Scroll_area($$renderer, {
										class: "h-auto w-full! min-w-0! px-2 pr-4",
										orientation: "both",
										children: ($$renderer) => {
											$$renderer.push(`<div class="h-auto max-h-96 w-full lg:max-h-[calc(100vh-14rem)]"><form${attr("action", action)} method="post"${attr("id", formId)} enctype="multipart/form-data" class="flex w-full flex-col gap-2 p-1">`);
											Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
											$$renderer.push(`<!----> `);
											if (editing) {
												$$renderer.push("<!--[0-->");
												$$renderer.push(`<input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/>`);
											} else $$renderer.push("<!--[-1-->");
											$$renderer.push(`<!--]--> <!--[-->`);
											const each_array = ensure_array_like(fields);
											for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
												let field = each_array[$$index];
												InputComp($$renderer, {
													form,
													errors,
													label: field.label,
													name: field.name,
													type: field.type ?? "text",
													required: field.required ?? false,
													placeholder: field.placeholder ?? "",
													rows: field.rows ?? 5,
													items: field.items ?? [],
													image: existing[field.name] ?? ""
												});
											}
											$$renderer.push(`<!--]--> `);
											Button($$renderer, {
												type: "submit",
												form: formId,
												class: "mt-4",
												children: ($$renderer) => {
													if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
														$$renderer.push("<!--[0-->");
														LoadingBtn($$renderer, { name: "Saving" });
													} else {
														$$renderer.push("<!--[-1-->");
														Save($$renderer, { class: "size-4" });
														$$renderer.push(`<!----> ${escape_html(editing ? "Save Changes" : "Add")}`);
													}
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/dashboard/content-page.svelte
function Content_page($$renderer, $$props) {
	let { title, description, addTitle, addForm, fields, columns, rows } = $$props;
	head("r7d3mh", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>${escape_html(title)} | Dashboard</title>`);
		});
	});
	$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div class="flex flex-wrap items-start justify-between gap-4"><div><h1 class="font-heading text-2xl font-bold">${escape_html(title)}</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">${escape_html(description)}</p></div> `);
	Crud_dialog($$renderer, {
		title: addTitle,
		data: addForm,
		action: "?/add",
		fields
	});
	$$renderer.push(`<!----></div> <!---->`);
	Data_table($$renderer, {
		columns,
		data: rows,
		search: true,
		fileName: title
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
//#region src/lib/components/Table/bigText.svelte
function BigText($$renderer, $$props) {
	const { text } = $$props;
	/**
	* Truncate text to a maximum length
	*/
	const truncateText = (text, maxLength = 10) => {
		const str = String(text);
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};
	$$renderer.push(`<div class="w-32">`);
	Popover($$renderer, {
		children: ($$renderer) => {
			Popover_trigger($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(truncateText(text))}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Popover_content($$renderer, {
				class: "max-w-sm p-3  text-sm wrap-break-word",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(text)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
//#region src/lib/components/Table/crud-delete.svelte
function Crud_delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/delete", id, name = "" } = $$props;
		const formId = `del-${id}`;
		const { form, delayed, allErrors } = superForm(data, {
			resetForm: false,
			id: formId
		});
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		let open = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Dialog_trigger) {
							$$renderer.push("<!--[-->");
							Dialog_trigger($$renderer, {
								class: buttonVariants({
									variant: "destructive",
									size: "sm"
								}),
								children: ($$renderer) => {
									Trash($$renderer, { class: "size-4" });
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								class: "w-full",
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->Delete`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									Scroll_area($$renderer, {
										class: "h-auto rounded-md border p-2",
										children: ($$renderer) => {
											$$renderer.push(`<h5 class="text-center">Delete ${escape_html(name ? `"${name}"` : "this item")}? This action cannot be undone.</h5> <div class="flex flex-row items-end justify-center gap-4 pt-4"><form method="post"${attr("id", formId)}${attr("action", action)}>`);
											Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
											$$renderer.push(`<!----> <input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> `);
											Button($$renderer, {
												type: "submit",
												variant: "destructive",
												form: formId,
												class: "mt-4",
												children: ($$renderer) => {
													if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
														$$renderer.push("<!--[0-->");
														LoadingBtn($$renderer, { name: "Deleting" });
													} else {
														$$renderer.push("<!--[-1-->");
														Trash($$renderer, { class: "size-4" });
														$$renderer.push(`<!----> Delete`);
													}
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form> `);
											Button($$renderer, {
												variant: "outline",
												onclick: () => open = false,
												class: "mt-4",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Cancel`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/dashboard/columns.ts
/**
* Column builders shared by every content page, so a route only has to say
* which fields it shows rather than repeat the TanStack boilerplate.
*/
/** Running row number, unaffected by sorting. */
var indexColumn = {
	id: "index",
	header: "#",
	cell: (info) => info.table.getRowModel().rows.findIndex((row) => row.id === info.row.id) + 1,
	enableSorting: false
};
var sortHeader = (name) => ({ column }) => renderComponent(Data_table_sort, {
	name,
	onclick: column.getToggleSortingHandler()
});
/** A plain, sortable text column. */
var column = (key, name) => ({
	accessorKey: key,
	header: sortHeader(name),
	sortable: true
});
/** Long text, truncated with the full value behind a popover. */
var longColumn = (key, name) => ({
	accessorKey: key,
	header: name,
	cell: ({ row }) => renderComponent(BigText, { text: row.original[key] ?? "" })
});
/** Thumbnail that opens the full image. */
var imageColumn = (key = "image", name = "Image") => ({
	accessorKey: key,
	header: name,
	enableSorting: false,
	cell: ({ row }) => renderComponent(Image_viewer, {
		src: row.original[key] ?? "",
		alt: name
	})
});
/** The trailing "Edit" column, wired to the shared dialog. */
var editColumn = ({ data, fields, title, keys, fileKeys = [], listKeys = [] }) => ({
	id: "edit",
	header: "Edit",
	enableSorting: false,
	cell: ({ row }) => {
		const values = { id: row.original.id };
		for (const key of keys) {
			const value = row.original[key];
			if (listKeys.includes(key)) values[key] = (value ?? []).join("\n");
			else if (key.endsWith("Id") && value != null) values[key] = String(value);
			else values[key] = value ?? "";
		}
		const existing = {};
		for (const key of fileKeys) existing[key] = row.original[key] ?? "";
		return renderComponent(Crud_dialog, {
			title,
			data,
			action: "?/edit",
			fields,
			values,
			existing,
			iconOnly: true
		});
	}
});
/** The trailing "Delete" column, wired to the shared confirmation dialog. */
var deleteColumn = (data, nameKey = "name") => ({
	id: "delete",
	header: "Delete",
	enableSorting: false,
	cell: ({ row }) => renderComponent(Crud_delete, {
		data,
		id: row.original.id,
		name: row.original[nameKey] ?? ""
	})
});

export { Content_page as C, imageColumn as a, Crud_dialog as b, column as c, deleteColumn as d, editColumn as e, indexColumn as i, longColumn as l };
//# sourceMappingURL=columns.js-CklMwJvK.js.map
