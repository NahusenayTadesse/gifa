import { U as head, ad as store_mutate, ac as store_get, af as unsubscribe_stores, T as attr, a4 as escape_html, Z as ensure_array_like } from '../../../../chunks/index-server.js-CFhxFuri.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../chunks/data-table.js-DLbaYyVK.js';
import { C as Copy_1 } from '../../../../chunks/Copy.js-C2qMNi0v.js';
import { T as Trash } from '../../../../chunks/trash.js-CGwD8oO2.js';
import { b as buttonVariants, B as Button } from '../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../../chunks/dialog.js-DUe6BEut.js';
import { S as Select, a as Select_trigger, b as Select_content, c as Select_item } from '../../../../chunks/select.js-Dy4k-kF2.js';
import { d as superForm } from '../../../../chunks/client2.js-Bwb_58-4.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-BbOw6TcD.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../chunks/state.js-CtTGHc_6.js';
import '../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../chunks/is.js-D78pHSN-.js';
import '../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../chunks/menu.js-DIhxGpfS.js';
import '../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/forms.js-DZlBN5Cy.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-Deo_Prpb.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-BYNuKnXn.js';

//#region src/routes/dashboard/event-registrations/status-select.svelte
function Status_select($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id, status } = $$props;
		const items = [
			{
				value: "new",
				name: "New"
			},
			{
				value: "confirmed",
				name: "Confirmed"
			},
			{
				value: "cancelled",
				name: "Cancelled"
			}
		];
		const { form, submit } = superForm(data, {
			resetForm: false,
			invalidateAll: true,
			id: `status-${id}`
		});
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).status = status);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<form method="post" action="?/status"><input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> `);
			if (Select) {
				$$renderer.push("<!--[-->");
				Select($$renderer, {
					type: "single",
					name: "status",
					onValueChange: () => submit(),
					get value() {
						return store_get($$store_subs ??= {}, "$form", form).status;
					},
					set value($$value) {
						store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).status = $$value);
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Select_trigger) {
							$$renderer.push("<!--[-->");
							Select_trigger($$renderer, {
								class: "w-36 capitalize",
								children: ($$renderer) => {
									$$renderer.push(`<!---->${escape_html(items.find((i) => i.value === store_get($$store_subs ??= {}, "$form", form).status)?.name ?? "Status")}`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Select_content) {
							$$renderer.push("<!--[-->");
							Select_content($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<!--[-->`);
									const each_array = ensure_array_like(items);
									for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
										let item = each_array[$$index];
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: item.value,
												children: ($$renderer) => {
													$$renderer.push(`<!---->${escape_html(item.name)}`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(`<!--]-->`);
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
			$$renderer.push(`</form>`);
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
//#region src/routes/dashboard/event-registrations/delete.svelte
function Delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id } = $$props;
		const { form, delayed} = superForm(data, {
			resetForm: false,
			id: `delete-${id}`
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
									variant: "ghost",
									size: "icon"
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
															$$renderer.push(`<!---->Delete registration`);
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
									$$renderer.push(` <p class="text-center text-sm text-muted-foreground">This action can't be undone.</p> <div class="flex flex-row items-end justify-center gap-4 pt-4"><form method="post" action="?/delete"><input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> `);
									Button($$renderer, {
										type: "submit",
										variant: "destructive",
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
										children: ($$renderer) => {
											$$renderer.push(`<!---->Cancel`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div>`);
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
//#region src/routes/dashboard/event-registrations/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const sortHeader = (name) => ({ column }) => renderComponent(Data_table_sort, {
			name,
			onclick: column.getToggleSortingHandler()
		});
		const columns = [
			{
				accessorKey: "eventTitle",
				header: sortHeader("Event"),
				sortable: true
			},
			{
				accessorKey: "eventStartsAt",
				header: sortHeader("Event date"),
				sortable: true,
				cell: ({ row }) => row.original.eventStartsAt ? new Date(row.original.eventStartsAt).toLocaleString("en-GB", {
					day: "numeric",
					month: "short",
					hour: "numeric",
					minute: "2-digit"
				}) : "—"
			},
			{
				accessorKey: "name",
				header: sortHeader("Name"),
				sortable: true
			},
			{
				accessorKey: "email",
				header: sortHeader("Email"),
				sortable: true,
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.email })
			},
			{
				accessorKey: "phone",
				header: sortHeader("Phone"),
				sortable: true,
				cell: ({ row }) => row.original.phone ? renderComponent(Copy_1, { data: row.original.phone }) : "—"
			},
			{
				accessorKey: "guests",
				header: sortHeader("Guests"),
				sortable: true
			},
			{
				accessorKey: "notes",
				header: "Notes",
				enableSorting: false
			},
			{
				id: "status",
				header: "Status",
				enableSorting: false,
				cell: ({ row }) => renderComponent(Status_select, {
					data: data.statusForm,
					id: row.original.id,
					status: row.original.status
				})
			},
			{
				id: "delete",
				header: "Delete",
				enableSorting: false,
				cell: ({ row }) => renderComponent(Delete, {
					data: data.deleteForm,
					id: row.original.id
				})
			}
		];
		head("cx4zzr", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Event Registrations | Dashboard</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Event Registrations</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Guests who registered for an upcoming event from the public events page.</p></div> `);
		Data_table($$renderer, {
			columns,
			data: data.rows,
			search: true,
			fileName: "Event Registrations"
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Be9U6orU.js.map
