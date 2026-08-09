import { U as head, ad as store_mutate, ac as store_get, af as unsubscribe_stores, a4 as escape_html, T as attr } from '../../../../chunks/index-server.js-CFhxFuri.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../chunks/data-table.js-DtLuKeWw.js';
import { I as InputComp } from '../../../../chunks/InputComp.js-BMy-o067.js';
import { P as Plus } from '../../../../chunks/plus.js-Dh6l4MVl.js';
import { S as Save } from '../../../../chunks/save.js-DlyDISKU.js';
import { I as Image_viewer, S as Square_pen } from '../../../../chunks/image-viewer.js-BySaE7Pv.js';
import { T as Trash } from '../../../../chunks/trash.js-CGwD8oO2.js';
import { b as buttonVariants, B as Button } from '../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../../chunks/dialog.js-DUe6BEut.js';
import { P as Popover, a as Popover_trigger, b as Popover_content } from '../../../../chunks/popover.js-HGTt93TX.js';
import { S as Scroll_area } from '../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import { d as superForm } from '../../../../chunks/client2.js-BrZUAIoh.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-SaiAi5EC.js';
import { E as Errors } from '../../../../chunks/Errors.js-CCE9GXl8.js';
import { D as Data_table_links } from '../../../../chunks/data-table-links.js-BT8yzFMd.js';
import { D as DialogComp } from '../../../../chunks/DialogComp.js-ft2elz6X.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../chunks/state.js-wKdfgGfb.js';
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
import '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/forms.js-C5iyEmPX.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-DtEd_hq3.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-CyvG6wSg.js';
import '../../../../chunks/tooltip.js-CBkZEv3A.js';

//#region src/routes/dashboard/testimonials/edit.svelte
function Edit($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/edit", id, name, position, testimonial = "", avatar, icon = false } = $$props;
		const { form, errors, delayed, allErrors } = superForm(data, { resetForm: false });
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).name = name);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).position = position);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).testimonial = testimonial);
		DialogComp($$renderer, {
			variant: "ghost",
			title: icon ? "Edit" : name,
			IconComp: icon ? Square_pen : void 0,
			children: ($$renderer) => {
				$$renderer.push(`<form${attr("action", action)} method="post" id="edit" class="flex w-full flex-col gap-4 p-4" enctype="multipart/form-data">`);
				Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
				$$renderer.push(`<!----> <input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Name of Customer",
					type: "text",
					name: "name",
					required: true
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Position",
					type: "text",
					name: "position"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Team Member",
					type: "textarea",
					name: "testimonial"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Logo or Avatar",
					image: avatar ? avatar : "",
					type: "file",
					name: "avatar"
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					class: "mt-4",
					form: "edit",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Saving Avatar" });
						} else {
							$$renderer.push("<!--[-1-->");
							Save($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Save Changes`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/dashboard/testimonials/delete.svelte
function Delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/delete", id } = $$props;
		const { form, delayed, allErrors } = superForm(data, { resetForm: false });
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
								class: buttonVariants({ variant: "destructive" }),
								children: ($$renderer) => {
									Trash($$renderer, {});
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
											$$renderer.push(`<h5 class="text-center">Are you sure you want to Delete? This action is irreversable</h5> <div class="flex flex-row items-end justify-center gap-4 pt-4"><form method="post" id="delete" action="?/delete">`);
											Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
											$$renderer.push(`<!----> <input${attr("value", store_get($$store_subs ??= {}, "$form", form).id)} name="id" type="hidden"/> `);
											Button($$renderer, {
												type: "submit",
												class: "mt-4",
												form: "delete",
												children: ($$renderer) => {
													if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
														$$renderer.push("<!--[0-->");
														LoadingBtn($$renderer, { name: "Deleting" });
													} else {
														$$renderer.push("<!--[-1-->");
														Trash($$renderer, {});
														$$renderer.push(`<!----> Delete`);
													}
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form> `);
											Button($$renderer, {
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
//#region src/routes/dashboard/testimonials/bigText.svelte
function BigText($$renderer, $$props) {
	const { text } = $$props;
	/**
	* Truncate text to a maximum length
	*/
	const truncateText = (text, maxLength = 30) => {
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
//#region src/routes/dashboard/testimonials/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const columns = [
			{
				id: "index",
				header: "#",
				cell: (info) => {
					return info.table.getRowModel().rows.findIndex((row) => row.id === info.row.id) + 1;
				},
				enableSorting: false
			},
			{
				accessorKey: "avatar",
				header: "Image",
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Image_viewer, {
						src: row.original.avatar,
						alt: row.original.name
					});
				}
			},
			{
				accessorKey: "name",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Name",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Edit, {
						id: row.original.id,
						name: row.original.name,
						position: row.original.position,
						testimonial: row.original.testimonial,
						avatar: row.original.avatar,
						action: "?/edit",
						data: data.editForm,
						icon: false
					});
				}
			},
			{
				accessorKey: "position",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Position",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true
			},
			{
				accessorKey: "testimonial",
				header: "Testimonials",
				sortable: true,
				cell: ({ row }) => renderComponent(BigText, { text: row.original.testimonial })
			},
			{
				accessorKey: "createdBy",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Created By",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Data_table_links, {
						id: row.original.createdById,
						name: row.original.createdBy,
						link: "/dashboard/users"
					});
				}
			},
			{
				accessorKey: "",
				header: "Edit",
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Edit, {
						id: row.original.id,
						name: row.original.name,
						position: row.original.position,
						testimonial: row.original.testimonial,
						avatar: row.original.avatar,
						action: "?/edit",
						data: data.editForm,
						icon: true
					});
				}
			},
			{
				accessorKey: "",
				header: "Delete",
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Delete, {
						id: row.original.id,
						action: "?/delete",
						data: data.deleteForm
					});
				}
			}
		];
		let { data } = $$props;
		const { form, errors, delayed} = superForm(data.form, {});
		head("1ozqhtu", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Testimonials</title>`);
			});
		});
		$$renderer.push(`<!---->`);
		DialogComp($$renderer, {
			title: "+ Add New Testimonial",
			variant: "default",
			children: ($$renderer) => {
				$$renderer.push(`<form action="?/add" id="main" class="flex flex-col gap-4" method="post" enctype="multipart/form-data">`);
				InputComp($$renderer, {
					form,
					errors,
					label: "Name of Customer",
					type: "text",
					name: "name",
					required: true
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Position",
					type: "text",
					name: "position"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Testimonial",
					type: "textarea",
					name: "testimonial"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Logo or Avatar",
					type: "file",
					name: "avatar"
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					form: "main",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Adding Testimonial" });
						} else {
							$$renderer.push("<!--[-1-->");
							Plus($$renderer, {});
							$$renderer.push(`<!----> Add Testimonial`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		$$renderer.push(`<!----> `);
		Data_table($$renderer, {
			columns,
			data: data?.allPaymentMethods,
			search: true,
			fileName: "Testimonial"
		});
		$$renderer.push(`<!---->`);
		$$renderer.push(`<!---->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Byhk-zT2.js.map
