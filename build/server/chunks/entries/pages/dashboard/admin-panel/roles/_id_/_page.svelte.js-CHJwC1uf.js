import { ad as store_mutate, ac as store_get, U as head, a2 as stringify, af as unsubscribe_stores, a0 as bind_props, F as derived } from '../../../../../../chunks/index-server.js-CFhxFuri.js';
import { a as toast } from '../../../../../../chunks/toast-state.svelte.js-4DwG5KRJ.js';
import { S as SingleView, P as Pencil, A as Arrow_left, D as Delete, a as SingleTable } from '../../../../../../chunks/SingleView.js-BqK0r8CH.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../../chunks/data-table.js-DUEjDVQe.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-D09Lbe68.js';
import { S as Save } from '../../../../../../chunks/save.js-DlyDISKU.js';
import { T as Trash } from '../../../../../../chunks/trash.js-CGwD8oO2.js';
import { B as Button } from '../../../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { d as superForm } from '../../../../../../chunks/client2.js-C_OVuHK9.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-CCE9GXl8.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-BbArp9p3.js';
import { D as Data_table_links } from '../../../../../../chunks/data-table-links.js-BT8yzFMd.js';
import { e as editRoleSchema } from '../../../../../../chunks/schema.js-s8UMfR6a.js';
import '../../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-YG-tZQQh.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../../chunks/internal2.js-oxkMWBIz.js';
import '../../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../../../chunks/dialog.js-DUe6BEut.js';
import '../../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../../../chunks/card.js-CBH4NVhi.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../../../chunks/state.js-HOf8s5SG.js';
import '../../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../../chunks/menu.js-DIhxGpfS.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../../../chunks/popover.js-HGTt93TX.js';
import '../../../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../../../chunks/forms.js-VEDUZztA.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-BiaXQUEZ.js';
import '../../../../../../chunks/auth.js-DPmbUclL.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-DqGthl3g.js';
import 'node:buffer';
import 'url';
import 'net';
import 'tls';
import 'timers';
import 'events';
import 'stream';
import 'buffer';
import 'string_decoder';
import 'process';
import 'crypto';
import 'zlib';
import 'util';
import 'node:events';
import '../../../../../../chunks/dist4.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';
import '../../../../../../chunks/tooltip.js-CBkZEv3A.js';

//#region src/routes/dashboard/admin-panel/roles/[id]/columns.ts
var userColumns = [
	{
		accessorKey: "index",
		header: "#",
		cell: (info) => info.row.index + 1,
		sortable: false
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
				link: "/dashboard/users"
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
		accessorKey: "isActive",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Active",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/roles/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		let singleTable = derived(() => [
			{
				name: "Name",
				value: data.singleUser?.name
			},
			{
				name: "Description",
				value: data.singleUser?.description
			},
			{
				name: "User Count",
				value: data?.singleUser?.userCount || 0
			},
			{
				name: "Permission Count",
				value: data?.permissionList?.length || 0
			}
		]);
		const { form, errors, delayed, capture, restore, allErrors} = superForm(data.form, {
			validators: zodClient(editRoleSchema),
			dataType: "json",
			resetForm: false
		});
		const snapshot = {
			capture,
			restore
		};
		let edit = false;
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).name = data.singleUser?.name);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).description = data.singleUser?.description || "");
		head("ol2z7a", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Role Details</title>`);
			});
		});
		SingleView($$renderer, {
			title: "Role Details",
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-4 flex w-full flex-row items-start justify-start gap-2 pl-4">`);
				Button($$renderer, {
					onclick: () => edit = !edit,
					children: ($$renderer) => {
						if (!edit) {
							$$renderer.push("<!--[0-->");
							Pencil($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Edit`);
						} else {
							$$renderer.push("<!--[-1-->");
							Arrow_left($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Back`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				if (data.singleUser?.userCount > 0) {
					$$renderer.push("<!--[0-->");
					Button($$renderer, {
						variant: "destructive",
						onclick: () => toast.error("Cannot delete role with users"),
						title: "Cannot delete role with users",
						children: ($$renderer) => {
							Trash($$renderer, {});
							$$renderer.push(`<!----> Delete`);
						},
						$$slots: { default: true }
					});
				} else {
					$$renderer.push("<!--[-1-->");
					Delete($$renderer, { redirect: "/dashboard/admin-panel/roles" });
				}
				$$renderer.push(`<!--]--></div> `);
				if (edit === false) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="w-full p-4">`);
					SingleTable($$renderer, { singleTable: singleTable() });
					$$renderer.push(`<!----></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (edit) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="w-full p-4"><form action="?/edit" id="main" class="flex flex-col gap-4" method="POST">`);
					Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Name",
						name: "name",
						type: "text",
						form,
						errors,
						placeholder: "Enter Role Name"
					});
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Description",
						name: "description",
						type: "textarea",
						form,
						errors,
						placeholder: "Enter Role Description"
					});
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Permissions",
						name: "permissions",
						type: "checkbox",
						form,
						errors,
						placeholder: "Enter Role Name",
						items: data?.allPermissions
					});
					$$renderer.push(`<!----> `);
					Button($$renderer, {
						type: "submit",
						class: "mt-4",
						form: "main",
						children: ($$renderer) => {
							if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
								$$renderer.push("<!--[0-->");
								LoadingBtn($$renderer, { name: "Saving Change" });
							} else {
								$$renderer.push("<!--[-1-->");
								Save($$renderer, { class: "h-4 w-4" });
								$$renderer.push(`<!----> Save Changes`);
							}
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			}});
		$$renderer.push(`<!----> <br/> `);
		if (data?.userList?.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h3>Users on this Role</h3> `);
			Data_table($$renderer, {
				data: data?.userList,
				columns: userColumns,
				fileName: `${stringify(data?.singleUser.name)} Users List`
			});
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-CHJwC1uf.js.map
