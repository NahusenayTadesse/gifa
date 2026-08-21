import { ad as store_mutate, ac as store_get, Y as head, a3 as stringify, af as unsubscribe_stores, a0 as bind_props, F as derived } from '../../../../../../chunks/index-server.js-G-77DcSL.js';
import { a as toast } from '../../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import { S as SingleView, P as Pencil, A as Arrow_left, D as Delete, a as SingleTable } from '../../../../../../chunks/SingleView.js-Dv1-M7JU.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../../chunks/data-table.js-CuHKJWZh.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-D9ih9EPq.js';
import { S as Save } from '../../../../../../chunks/save.js-BUv6pSbp.js';
import { T as Trash } from '../../../../../../chunks/trash.js-DmF8DNb4.js';
import { B as Button } from '../../../../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { d as superForm } from '../../../../../../chunks/client2.js-ccjA_ZCz.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-Da1EWjvb.js';
import { D as Data_table_links } from '../../../../../../chunks/data-table-links.js-DgpuzJmx.js';
import { e as editRoleSchema } from '../../../../../../chunks/schema.js-DLTB7a6M.js';
import '../../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-BE73K9-j.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../../chunks/dialog.js-D2Ktpyuv.js';
import '../../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../../chunks/card.js-DuOddC8W.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../../../chunks/state.js-Bu_s3vG5.js';
import '../../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import '../../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../../chunks/auth.js-CzaJ0OJC.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-CPhQsSSC.js';
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
import '../../../../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';
import '../../../../../../chunks/tooltip.js-DG5RmUXX.js';

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
				value: data?.singleUser?.permissionsCount || 0
			}
		]);
		const { form, errors, delayed, capture, restore, allErrors} = superForm(data.form, {
			validators: zodClient(editRoleSchema),
			dataType: "json",
			resetForm: false,
			onError: toastOnError
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
//# sourceMappingURL=_page.svelte.js-CtxEzJkD.js.map
