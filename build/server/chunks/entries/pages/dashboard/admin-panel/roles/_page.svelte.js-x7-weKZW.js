import { Y as head, ag as await_block, a4 as escape_html } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { F as Frown, D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../chunks/data-table.js-CuHKJWZh.js';
import { S as Statuses } from '../../../../../chunks/statuses.js-BV0WCOej.js';
import { P as Plus } from '../../../../../chunks/plus.js-Dpb43_E6.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { D as Data_table_links } from '../../../../../chunks/data-table-links.js-DgpuzJmx.js';
import { L as Loading } from '../../../../../chunks/Loading.js-SGG386B5.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../../chunks/state.js-Bu_s3vG5.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/badge.js-DBsr7IxJ.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/skeleton.js-ohn4cN7Z.js';

//#region src/routes/dashboard/admin-panel/roles/columns.ts
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
				link: "/dashboard/admin-panel/roles"
			});
		}
	},
	{
		accessorKey: "status",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Status",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: ({ row }) => {
			return renderComponent(Statuses, { status: row.original.status ? "Active" : "Inactive" });
		}
	},
	{
		accessorKey: "userCount",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "User Count",
			onclick: column.getToggleSortingHandler()
		}),
		cell: (info) => {
			return info.getValue() ? info.getValue() + " Users" : "No Users for this Role";
		}
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/roles/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("18wmnim", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Roles List</title>`);
			});
		});
		await_block($$renderer, data, () => {
			Loading($$renderer, { name: "Customers" });
		}, (customerList) => {
			if (data.roleList.length === 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex h-96 w-full flex-col items-center justify-center lg:w-5xl"><p class="justify-self-cente mt-4 flex flex-row gap-4 text-center text-4xl">`);
				Frown($$renderer, { class: "h-12 w-16  animate-bounce" });
				$$renderer.push(`<!----> Roles List is Empty</p> `);
				Button($$renderer, {
					href: "/dashboard/admin-panel/roles/add-roles",
					children: ($$renderer) => {
						Plus($$renderer, {});
						$$renderer.push(`<!---->Add New Role`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<h2 class="my-4 text-2xl">No of Roles ${escape_html(data.roleList?.length)}</h2> <div class="mt-8 mb-4 w-87.5 p-0 pt-4 lg:w-full lg:p-0">`);
				Data_table($$renderer, {
					data: data.roleList,
					columns,
					fileName: "Roles List"
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		});
		$$renderer.push(`<!--]-->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-x7-weKZW.js.map
