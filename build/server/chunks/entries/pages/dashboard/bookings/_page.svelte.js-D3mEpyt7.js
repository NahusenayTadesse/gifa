import { U as head, F as derived, a4 as escape_html, ad as store_mutate, ac as store_get, af as unsubscribe_stores, $ as spread_props, T as attr, Z as ensure_array_like } from '../../../../chunks/index-server.js-CFhxFuri.js';
import { I as Icon } from '../../../../chunks/Icon.js-BJJlMSR3.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../chunks/data-table.js-BqWSSlns.js';
import { C as Copy_1 } from '../../../../chunks/Copy.js-C2qMNi0v.js';
import { T as Trash } from '../../../../chunks/trash.js-CGwD8oO2.js';
import { B as Button, b as buttonVariants } from '../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../../chunks/dialog.js-DUe6BEut.js';
import { S as Select, a as Select_trigger, b as Select_content, c as Select_item } from '../../../../chunks/select.js-Dy4k-kF2.js';
import { P as Popover, a as Popover_trigger, b as Popover_content } from '../../../../chunks/popover.js-HGTt93TX.js';
import { d as superForm } from '../../../../chunks/client2.js-SufGfZGd.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-CHBDgIN6.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../chunks/state.js-CRDzCqwe.js';
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
import '../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/forms.js-DIucMh1w.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-CvGAYget.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-ujsGVL1P.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/sticky-note.svelte
function Sticky_note($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "sticky-note" },
		props,
		{ iconNode: [["path", { "d": "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }], ["path", { "d": "M15 3v5a1 1 0 0 0 1 1h5" }]] }
	]));
}
//#endregion
//#region src/routes/dashboard/bookings/status-select.svelte
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
				value: "seated",
				name: "Seated"
			},
			{
				value: "no_show",
				name: "No show"
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
//#region src/routes/dashboard/bookings/notes.svelte
function Notes($$renderer, $$props) {
	const { notes, staffNotes } = $$props;
	if (Boolean(notes || staffNotes)) {
		$$renderer.push("<!--[0-->");
		Popover($$renderer, {
			children: ($$renderer) => {
				Popover_trigger($$renderer, {
					children: ($$renderer) => {
						Sticky_note($$renderer, { class: "size-4 text-primary" });
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Popover_content($$renderer, {
					class: "max-w-sm space-y-2 p-3 text-sm wrap-break-word",
					children: ($$renderer) => {
						if (notes) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<p><span class="font-medium">Customer:</span> ${escape_html(notes)}</p>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--> `);
						if (staffNotes) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<p><span class="font-medium">Staff:</span> ${escape_html(staffNotes)}</p>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
	} else {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<span class="text-muted-foreground">—</span>`);
	}
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region src/routes/dashboard/bookings/delete.svelte
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
															$$renderer.push(`<!---->Delete booking`);
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
//#region src/routes/dashboard/bookings/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const sortHeader = (name) => ({ column }) => renderComponent(Data_table_sort, {
			name,
			onclick: column.getToggleSortingHandler()
		});
		const columns = [
			{
				accessorKey: "bookingDate",
				header: sortHeader("Date"),
				sortable: true
			},
			{
				accessorKey: "bookingTime",
				header: sortHeader("Time"),
				sortable: true
			},
			{
				accessorKey: "reference",
				header: sortHeader("Ref"),
				sortable: true
			},
			{
				accessorKey: "name",
				header: sortHeader("Name"),
				sortable: true
			},
			{
				accessorKey: "phone",
				header: sortHeader("Phone"),
				sortable: true,
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.phone })
			},
			{
				accessorKey: "partySize",
				header: sortHeader("Party"),
				sortable: true
			},
			{
				accessorKey: "occasion",
				header: sortHeader("Occasion"),
				sortable: true
			},
			{
				id: "notes",
				header: "Notes",
				enableSorting: false,
				cell: ({ row }) => renderComponent(Notes, {
					notes: row.original.notes,
					staffNotes: row.original.staffNotes
				})
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
		let filter = "today";
		const toDateStr = (d) => d.toISOString().slice(0, 10);
		const today = /* @__PURE__ */ new Date();
		const todayStr = toDateStr(today);
		const tomorrowStr = toDateStr(new Date(today.getTime() + 864e5));
		const weekAheadStr = toDateStr(new Date(today.getTime() + 7 * 864e5));
		const filteredRows = derived(() => data.rows.filter((row) => {
			const d = String(row.bookingDate).slice(0, 10);
			if (filter === "today") return d === todayStr;
			if (filter === "tomorrow") return d === tomorrowStr;
			if (filter === "week") return d >= todayStr && d <= weekAheadStr;
			return true;
		}));
		head("ih4eye", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Bookings | Dashboard</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Bookings</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Requests from the "Book a table" form. Bookings are confirmed by phone, not automatically —
			update the status once you've called the guest.</p></div> <div class="flex flex-wrap gap-2">`);
		Button($$renderer, {
			size: "sm",
			variant: filter === "today" ? "default" : "outline",
			onclick: () => filter = "today",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Today`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			size: "sm",
			variant: filter === "tomorrow" ? "default" : "outline",
			onclick: () => filter = "tomorrow",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Tomorrow`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			size: "sm",
			variant: filter === "week" ? "default" : "outline",
			onclick: () => filter = "week",
			children: ($$renderer) => {
				$$renderer.push(`<!---->This week`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			size: "sm",
			variant: filter === "all" ? "default" : "outline",
			onclick: () => filter = "all",
			children: ($$renderer) => {
				$$renderer.push(`<!---->All`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> <!---->`);
		Data_table($$renderer, {
			columns,
			data: filteredRows(),
			search: true,
			fileName: "Bookings"
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-D3mEpyt7.js.map
