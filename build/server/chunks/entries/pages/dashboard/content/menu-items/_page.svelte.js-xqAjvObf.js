import { F as derived, ad as store_mutate, ac as store_get, X as attr, af as unsubscribe_stores, _ as spread_props } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { I as Icon } from '../../../../../chunks/Icon.js-DGpwHSC6.js';
import { r as renderComponent } from '../../../../../chunks/data-table.js-CuHKJWZh.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { d as superForm } from '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import { t as toastOnError } from '../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { C as Crud_dialog } from '../../../../../chunks/reorder-buttons.js-Dt2VXQ0M.js';
import { C as Content_page, i as indexColumn, r as reorderColumn, c as column, l as longColumn, d as deleteColumn } from '../../../../../chunks/columns.js-DYFVWIvm.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../../chunks/state.js-Bu_s3vG5.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../chunks/InputComp.js-D9ih9EPq.js';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import '../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../../../chunks/plus.js-Dpb43_E6.js';
import '../../../../../chunks/save.js-BUv6pSbp.js';
import '../../../../../chunks/square-pen.js-BkPwX186.js';
import '../../../../../chunks/dialog.js-D2Ktpyuv.js';
import '../../../../../chunks/Errors.js-DMvwSaSx.js';
import '../../../../../chunks/FilterMenu.js-D2gHdxjx.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/card.js-DuOddC8W.js';
import '../../../../../chunks/badge.js-DBsr7IxJ.js';
import '../../../../../chunks/image-viewer.js-CwhGnqDu.js';
import '../../../../../chunks/crud-delete.js-BarRY9lQ.js';
import '../../../../../chunks/trash.js-DmF8DNb4.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/circle-check.svelte
function Circle_check($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "circle-check" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}], ["path", { "d": "m9 12 2 2 4-4" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/circle-x.svelte
function Circle_x($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "circle-x" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "10"
			}],
			["path", { "d": "m15 9-6 6" }],
			["path", { "d": "m9 9 6 6" }]
		] }
	]));
}
//#endregion
//#region src/routes/dashboard/content/menu-items/toggle-availability.svelte
function Toggle_availability($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id, available } = $$props;
		const { form} = superForm(data, {
			resetForm: false,
			invalidateAll: true,
			id: `avail-${id}`,
			onError: toastOnError
		});
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).isAvailable = !available);
		$$renderer.push(`<form method="post" action="?/toggleAvailability"><input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/> <input type="hidden" name="isAvailable"${attr("value", store_get($$store_subs ??= {}, "$form", form).isAvailable)}/> `);
		Button($$renderer, {
			type: "submit",
			size: "sm",
			variant: available ? "outline" : "destructive",
			children: ($$renderer) => {
				if (available) {
					$$renderer.push("<!--[0-->");
					Circle_check($$renderer, { class: "size-4" });
					$$renderer.push(`<!----> Available`);
				} else {
					$$renderer.push("<!--[-1-->");
					Circle_x($$renderer, { class: "size-4" });
					$$renderer.push(`<!----> 86'd`);
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
//#region src/routes/dashboard/content/menu-items/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const categoryItems = derived(() => data.categories.map((c) => ({
			value: String(c.id),
			name: c.name
		})));
		const fields = derived(() => [
			{
				name: "categoryId",
				label: "Category",
				type: "select",
				required: true,
				items: categoryItems()
			},
			{
				name: "name",
				label: "Dish name",
				type: "text",
				required: true
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				rows: 3
			},
			{
				name: "price",
				label: "Price (£)",
				type: "number",
				required: true,
				placeholder: "e.g. 15.99"
			},
			{
				name: "image",
				label: "Photo",
				type: "file"
			},
			{
				name: "isVegan",
				label: "",
				type: "checkboxSingle",
				placeholder: "Vegan"
			},
			{
				name: "isVegetarian",
				label: "",
				type: "checkboxSingle",
				placeholder: "Vegetarian"
			},
			{
				name: "isSpicy",
				label: "",
				type: "checkboxSingle",
				placeholder: "Spicy"
			},
			{
				name: "allergens",
				label: "Allergens",
				type: "textarea",
				rows: 3,
				placeholder: "One per line, e.g. gluten"
			},
			{
				name: "isAvailable",
				label: "",
				type: "checkboxSingle",
				placeholder: "Available"
			},
			{
				name: "isSignature",
				label: "",
				type: "checkboxSingle",
				placeholder: "Signature dish (max 3, homepage)"
			},
			{
				name: "sortOrder",
				label: "Display order",
				type: "number"
			}
		]);
		const priceColumn = {
			accessorKey: "price",
			header: "Price",
			cell: ({ row }) => `£${(row.original.price / 100).toFixed(2)}`
		};
		const categoryColumn = column("categoryName", "Category");
		const availabilityColumn = {
			id: "available",
			header: "Available",
			enableSorting: false,
			cell: ({ row }) => renderComponent(Toggle_availability, {
				data: data.toggleForm,
				id: row.original.id,
				available: row.original.isAvailable
			})
		};
		const editPriceColumn = derived(() => ({
			id: "edit",
			header: "Edit",
			enableSorting: false,
			cell: ({ row }) => {
				const r = row.original;
				return renderComponent(Crud_dialog, {
					title: "Edit Dish",
					data: data.editForm,
					action: "?/edit",
					fields: fields(),
					values: {
						id: r.id,
						categoryId: String(r.categoryId),
						name: r.name,
						description: r.description ?? "",
						price: (r.price / 100).toFixed(2),
						isVegan: r.isVegan,
						isVegetarian: r.isVegetarian,
						isSpicy: r.isSpicy,
						allergens: (r.allergens ?? []).join("\n"),
						isAvailable: r.isAvailable,
						isSignature: r.isSignature,
						sortOrder: r.sortOrder
					},
					existing: { image: r.image ?? "" },
					iconOnly: true
				});
			}
		}));
		const columns = derived(() => [
			indexColumn,
			reorderColumn(data.rows, data.reorderForm),
			categoryColumn,
			column("name", "Name"),
			priceColumn,
			longColumn("description", "Description"),
			availabilityColumn,
			column("isSignature", "Signature"),
			column("sortOrder", "Order"),
			editPriceColumn(),
			deleteColumn(data.deleteForm, "name")
		]);
		Content_page($$renderer, {
			title: "Menu Items",
			description: "The full food and drinks menu. Toggle Available to 86 a dish for the night without deleting it.",
			addTitle: "Add Dish",
			addForm: data.addForm,
			fields: fields(),
			columns: columns(),
			rows: data.rows,
			filterKeys: [
				"categoryName",
				"isAvailable",
				"isVegan",
				"isSpicy",
				"isSignature"
			]
		});
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-xqAjvObf.js.map
