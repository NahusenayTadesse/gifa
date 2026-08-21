import { Y as head, F as derived, ad as store_mutate, ac as store_get, af as unsubscribe_stores, X as attr, a4 as escape_html, V as ensure_array_like } from '../../../../chunks/index-server.js-G-77DcSL.js';
import { F as FilterMenu } from '../../../../chunks/FilterMenu.js-D2gHdxjx.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../chunks/data-table.js-CuHKJWZh.js';
import { C as Circle_check_big } from '../../../../chunks/circle-check-big.js-BJS0QIUN.js';
import { C as Copy_1 } from '../../../../chunks/Copy.js-BmYCAf6t.js';
import { S as Statuses } from '../../../../chunks/statuses.js-BV0WCOej.js';
import { T as Trash } from '../../../../chunks/trash.js-DmF8DNb4.js';
import { B as Button, b as buttonVariants } from '../../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../../chunks/dialog.js-D2Ktpyuv.js';
import { S as Select, a as Select_trigger, b as Select_content, c as Select_item } from '../../../../chunks/select.js-2ghzD58U.js';
import { P as Popover, a as Popover_trigger, b as Popover_content } from '../../../../chunks/popover.js-BLmiDDDH.js';
import { d as superForm } from '../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-BE73K9-j.js';
import { t as toastOnError } from '../../../../chunks/superform-defaults.js-BzqyareB.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../chunks/command.js-Dz__iECm.js';
import '../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../chunks/checkbox.js-C_O2KGSH.js';
import '../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../chunks/label.js-THGsI54u.js';
import '../../../../chunks/card.js-DuOddC8W.js';
import '../../../../chunks/badge.js-DBsr7IxJ.js';
import '../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../chunks/state.js-Bu_s3vG5.js';
import '../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import '../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-BgJqRNF-.js';

//#region src/routes/dashboard/enquiries/status-select.svelte
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
				value: "in_progress",
				name: "In progress"
			},
			{
				value: "closed",
				name: "Closed"
			}
		];
		const { form, submit } = superForm(data, {
			resetForm: false,
			invalidateAll: true,
			id: `enquiry-status-${id}`,
			onError: toastOnError
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
								class: "w-32 capitalize",
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
//#region src/routes/dashboard/enquiries/bigText.svelte
function BigText($$renderer, $$props) {
	const { text } = $$props;
	const truncate = (value, max = 20) => value.length > max ? value.slice(0, max) + "..." : value;
	$$renderer.push(`<div class="w-32">`);
	Popover($$renderer, {
		children: ($$renderer) => {
			Popover_trigger($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(truncate(text || "—"))}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Popover_content($$renderer, {
				class: "max-w-sm p-3 text-sm wrap-break-word",
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
//#region src/routes/dashboard/enquiries/read.svelte
function Read($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id } = $$props;
		const { form, delayed} = superForm(data, {
			resetForm: false,
			id: `seen-${id}`,
			onError: toastOnError
		});
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		$$renderer.push(`<form method="post" action="?/seen"><input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> `);
		Button($$renderer, {
			type: "submit",
			size: "sm",
			variant: "outline",
			children: ($$renderer) => {
				if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
					$$renderer.push("<!--[0-->");
					LoadingBtn($$renderer, { name: "Marking" });
				} else {
					$$renderer.push("<!--[-1-->");
					Circle_check_big($$renderer, { class: "size-4" });
					$$renderer.push(`<!----> Mark seen`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></form>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/dashboard/enquiries/delete.svelte
function Delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id } = $$props;
		const { form, delayed} = superForm(data, {
			resetForm: false,
			id: `enquiry-delete-${id}`,
			onError: toastOnError
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
															$$renderer.push(`<!---->Delete enquiry`);
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
//#region src/routes/dashboard/enquiries/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const sortHeader = (name) => ({ column }) => renderComponent(Data_table_sort, {
			name,
			onclick: column.getToggleSortingHandler()
		});
		const columns = [
			{
				accessorKey: "type",
				header: sortHeader("Type"),
				sortable: true,
				cell: ({ row }) => row.original.type === "private_hire" ? "Private hire" : "Contact"
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
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.phone ?? "" })
			},
			{
				accessorKey: "email",
				header: sortHeader("Email"),
				sortable: true,
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.email ?? "" })
			},
			{
				accessorKey: "message",
				header: "Message",
				cell: ({ row }) => renderComponent(BigText, { text: row.original.message ?? "" })
			},
			{
				accessorKey: "eventDate",
				header: sortHeader("Event date"),
				sortable: true,
				cell: ({ row }) => row.original.eventDate ?? "—"
			},
			{
				accessorKey: "guests",
				header: sortHeader("Guests"),
				sortable: true,
				cell: ({ row }) => row.original.guests ?? "—"
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
				accessorKey: "seen",
				header: sortHeader("Seen"),
				sortable: true,
				cell: ({ row }) => row.original.seen ? renderComponent(Statuses, { status: "Seen" }) : renderComponent(Read, {
					data: data.seenForm,
					id: row.original.id
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
		let filteredList = derived(() => data.rows);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("u14pi5", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Enquiries | Dashboard</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Enquiries</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Contact-form messages and private-hire requests, in one inbox.</p></div> <!---->`);
			FilterMenu($$renderer, {
				data: data.rows,
				filterKeys: [
					"type",
					"status",
					"seen"
				],
				get filteredList() {
					return filteredList();
				},
				set filteredList($$value) {
					filteredList($$value);
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			Data_table($$renderer, {
				columns,
				data: filteredList(),
				search: true,
				fileName: "Enquiries"
			});
			$$renderer.push(`<!---->`);
			$$renderer.push(`<!----></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BL8L-pV_.js.map
