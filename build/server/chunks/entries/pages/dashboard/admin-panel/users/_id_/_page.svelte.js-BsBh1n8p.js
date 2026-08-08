import { ad as store_mutate, ac as store_get, af as unsubscribe_stores, a0 as bind_props, U as head, a2 as stringify, F as derived, a4 as escape_html } from '../../../../../../chunks/index-server.js-CFhxFuri.js';
import { S as SingleView, P as Pencil, A as Arrow_left, D as Delete, a as SingleTable } from '../../../../../../chunks/SingleView.js-CmU7ETbi.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../../chunks/data-table.js-CVCU15D7.js';
import { S as Save } from '../../../../../../chunks/save.js-DlyDISKU.js';
import { B as Button } from '../../../../../../chunks/button.js-tGj5Lmrq.js';
import { I as Input } from '../../../../../../chunks/input.js-BuyvpeQU.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { L as Label } from '../../../../../../chunks/label.js-DJ_DCSg-.js';
import { d as superForm } from '../../../../../../chunks/client2.js-fgFBQkZh.js';
import { S as SelectComp } from '../../../../../../chunks/SelectComp.js-DwcVRGdr.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-CCE9GXl8.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-Dr2Ub319.js';
import { e as editUserSchema } from '../../../../../../chunks/schema3.js-CQXcjzgY.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-DEzvbNS6.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../../chunks/internal2.js-CD2yIDC5.js';
import '../../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../../../chunks/trash.js-CGwD8oO2.js';
import '../../../../../../chunks/dialog.js-DUe6BEut.js';
import '../../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../../chunks/card.js-CBH4NVhi.js';
import '../../../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../../../chunks/state.js-DHrX6gJK.js';
import '../../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../../chunks/menu.js-DIhxGpfS.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../../../chunks/forms.js-DNL_Auze.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-BEW9-n6n.js';
import '../../../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../../../chunks/auth.js-Dz0kDMeZ.js';
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

//#region src/routes/dashboard/admin-panel/users/[id]/columns.ts
var columns = [
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
		sortable: true
	},
	{
		accessorKey: "description",
		header: "Description"
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/users/[id]/+page.svelte
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
				name: "Email",
				value: data.singleUser?.email
			},
			{
				name: "Phone",
				value: data.singleUser?.phone
			},
			{
				name: "Role",
				value: data.singleUser?.role
			},
			{
				name: "Created At",
				value: data.singleUser?.createdAt.toLocaleString()
			},
			{
				name: "Updated At",
				value: data.singleUser?.updatedAt.toLocaleString()
			}
		]);
		const { form, errors, delayed, capture, restore, allErrors} = superForm(data.form, {
			validators: zodClient(editUserSchema),
			resetForm: false
		});
		const snapshot = {
			capture,
			restore
		};
		let edit = false;
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).name = data.singleUser?.name);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).email = data.singleUser?.email);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).role = data.singleUser?.roleId);
		function fe($$renderer, label = "", name = "", type = "", placeholder = "", required = false, min = "", max = "") {
			$$renderer.push(`<div class="flex w-full flex-col justify-start gap-2">`);
			Label($$renderer, {
				for: name,
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(label)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				type,
				name,
				placeholder,
				required,
				min,
				max,
				"aria-invalid": store_get($$store_subs ??= {}, "$errors", errors)[name] ? "true" : void 0,
				get value() {
					return store_get($$store_subs ??= {}, "$form", form)[name];
				},
				set value($$value) {
					store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[name] = $$value);
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			if (store_get($$store_subs ??= {}, "$errors", errors)[name]) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors)[name])}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		function selects($$renderer, name, items) {
			$$renderer.push(`<div class="flex w-full flex-col justify-start gap-2">`);
			Label($$renderer, {
				for: name,
				class: "capitalize",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(name.replace(/([a-z])([A-Z])/g, "$1 $2"))}:`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			SelectComp($$renderer, {
				name,
				items,
				get value() {
					return store_get($$store_subs ??= {}, "$form", form)[name];
				},
				set value($$value) {
					store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[name] = $$value);
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			if (store_get($$store_subs ??= {}, "$errors", errors)[name]) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors)[name])}</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("ljj9n7", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>User Details</title>`);
				});
			});
			SingleView($$renderer, {
				title: "User Details",
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
					Delete($$renderer, { redirect: "/dashboard/admin-panel/users" });
					$$renderer.push(`<!----></div> `);
					if (edit === false) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="w-full p-4">`);
						SingleTable($$renderer, { singleTable: singleTable() });
						$$renderer.push(`<!----></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					if (edit) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="w-full p-4"><form action="?/editUser" class="flex flex-col gap-4" id="edit" method="post"><h3 class="text-center text-red-500">Any changes made here will signout the user from every device they are logged in on.</h3> `);
						Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
						$$renderer.push(`<!----> `);
						fe($$renderer, "Name", "name", "text", "Change Name", true);
						$$renderer.push(`<!----> `);
						fe($$renderer, "Email", "email", "email", "Change email", true);
						$$renderer.push(`<!----> `);
						selects($$renderer, "role", data?.roleList);
						$$renderer.push(`<!----> `);
						Button($$renderer, {
							form: "edit",
							type: "submit",
							class: "mt-4",
							children: ($$renderer) => {
								if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
									$$renderer.push("<!--[0-->");
									LoadingBtn($$renderer, { name: "Saving Changes" });
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
			Data_table($$renderer, {
				data: data?.permissionList,
				columns,
				fileName: `${stringify(data?.singleUser?.name)}Permission List`
			});
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BsBh1n8p.js.map
