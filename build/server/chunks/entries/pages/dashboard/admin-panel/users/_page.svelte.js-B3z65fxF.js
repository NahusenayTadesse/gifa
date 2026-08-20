import { Y as head, ag as await_block, a4 as escape_html, X as attr, a3 as stringify, a2 as attr_class, U as clsx$1, _ as spread_props } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { I as Icon } from '../../../../../chunks/Icon.js-DGpwHSC6.js';
import { F as Frown, D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../chunks/data-table.js-CFR9DTrO.js';
import { P as Plus } from '../../../../../chunks/plus.js-Dpb43_E6.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { D as Dropdown_menu, a as Dropdown_menu_trigger, b as Dropdown_menu_content, d as Dropdown_menu_group, e as Dropdown_menu_label, f as Dropdown_menu_separator, c as Dropdown_menu_item } from '../../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import { f as formatEthiopianDate, d as dropdownClass } from '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import { D as Data_table_links } from '../../../../../chunks/data-table-links.js-DgpuzJmx.js';
import { L as Loading } from '../../../../../chunks/Loading.js-SGG386B5.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../../chunks/state.js-CWxzuCny.js';
import '../../../../../chunks/client.js-PQFg6ATt.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-DHV9U4Ai.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/skeleton.js-ohn4cN7Z.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/ellipsis.svelte
function Ellipsis($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "ellipsis" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "1"
			}],
			["circle", {
				"cx": "19",
				"cy": "12",
				"r": "1"
			}],
			["circle", {
				"cx": "5",
				"cy": "12",
				"r": "1"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/external-link.svelte
function External_link($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "external-link" },
		props,
		{ iconNode: [
			["path", { "d": "M15 3h6v6" }],
			["path", { "d": "M10 14 21 3" }],
			["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
		] }
	]));
}
//#endregion
//#region src/routes/dashboard/admin-panel/users/data-table-actions.svelte
function Data_table_actions($$renderer, $$props) {
	let { id, name } = $$props;
	if (Dropdown_menu) {
		$$renderer.push("<!--[-->");
		Dropdown_menu($$renderer, {
			children: ($$renderer) => {
				{
					function child($$renderer, { props }) {
						Button($$renderer, spread_props([props, {
							variant: "ghost",
							size: "icon",
							class: "relative size-8 p-0",
							children: ($$renderer) => {
								$$renderer.push(`<span class="sr-only">Open menu</span> `);
								Ellipsis($$renderer, {});
								$$renderer.push(`<!---->`);
							},
							$$slots: { default: true }
						}]));
					}
					if (Dropdown_menu_trigger) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_trigger($$renderer, {
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
				if (Dropdown_menu_content) {
					$$renderer.push("<!--[-->");
					Dropdown_menu_content($$renderer, {
						children: ($$renderer) => {
							if (Dropdown_menu_group) {
								$$renderer.push("<!--[-->");
								Dropdown_menu_group($$renderer, {
									children: ($$renderer) => {
										if (Dropdown_menu_label) {
											$$renderer.push("<!--[-->");
											Dropdown_menu_label($$renderer, {
												children: ($$renderer) => {
													$$renderer.push(`<!---->Actions`);
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
							if (Dropdown_menu_separator) {
								$$renderer.push("<!--[-->");
								Dropdown_menu_separator($$renderer, {});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Dropdown_menu_item) {
								$$renderer.push("<!--[-->");
								Dropdown_menu_item($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<a${attr("href", `/dashboard/admin-panel/users/${stringify(id)}`)} target="_blank"${attr_class(clsx$1(dropdownClass))}>`);
										External_link($$renderer, {});
										$$renderer.push(`<!----> View ${escape_html(name)}'s Details</a>`);
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
			},
			$$slots: { default: true }
		});
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/routes/dashboard/admin-panel/users/columns.ts
var columns = [
	{
		id: "index",
		header: "#",
		cell: (info) => {
			return info.table.getRowModel().rows.findIndex((row) => row.id === info.row.id) + 1;
		},
		enableSorting: false
	},
	{
		accessorKey: "name",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Name",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: ({ row }) => {
			return renderComponent(Data_table_links, {
				id: row.original.id,
				name: row.original.name,
				link: "/dashboard/admin-panel/users"
			});
		}
	},
	{
		accessorKey: "email",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Email",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true
	},
	{
		accessorKey: "role",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Role",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: ({ row }) => {
			return renderComponent(Data_table_links, {
				id: row.original.roleId,
				name: row.original.role,
				link: "/dashboard/admin-panel/roles"
			});
		}
	},
	{
		accessorKey: "permissionsCount",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Permissions Count",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: (info) => `${info.getValue()} Permissions`
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Added At",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: (info) => formatEthiopianDate(new Date(info.getValue()))
	},
	{
		accessorKey: "actions",
		header: "Actions",
		cell: ({ row }) => {
			return renderComponent(Data_table_actions, {
				id: row.original.id,
				name: row.original.name
			});
		}
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/users/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("m1c7vv", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Users List</title>`);
			});
		});
		await_block($$renderer, data, () => {
			Loading($$renderer, { name: "Customers" });
		}, (customerList) => {
			if (data.userList.length === 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex h-96 w-full flex-col items-center justify-center lg:w-5xl"><p class="justify-self-cente mt-4 flex flex-row gap-4 text-center text-4xl">`);
				Frown($$renderer, { class: "h-12 w-16  animate-bounce" });
				$$renderer.push(`<!----> Users List is Empty</p> `);
				Button($$renderer, {
					href: "/dashboard/admin-panel/users/add-users",
					children: ($$renderer) => {
						Plus($$renderer, {});
						$$renderer.push(`<!---->Add New Users`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<h2 class="my-4 text-2xl">No of Users: ${escape_html(data.userList?.length)}</h2> <div class="mt-8 mb-4 w-[350px] p-0 pt-4 lg:w-full lg:p-0">`);
				Data_table($$renderer, {
					data: data.userList,
					columns,
					fileName: "Users List"
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		});
		$$renderer.push(`<!--]-->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-B3z65fxF.js.map
