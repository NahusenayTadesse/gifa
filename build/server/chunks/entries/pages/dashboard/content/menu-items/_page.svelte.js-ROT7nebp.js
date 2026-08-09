import { F as derived, ad as store_mutate, ac as store_get, T as attr, af as unsubscribe_stores, $ as spread_props } from '../../../../../chunks/index-server.js-CFhxFuri.js';
import { I as Icon } from '../../../../../chunks/Icon.js-BJJlMSR3.js';
import { r as renderComponent } from '../../../../../chunks/data-table.js-BqWSSlns.js';
import { B as Button } from '../../../../../chunks/button.js-tGj5Lmrq.js';
import { d as superForm } from '../../../../../chunks/client2.js-SufGfZGd.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-CHBDgIN6.js';
import { C as Content_page, i as indexColumn, c as column, l as longColumn, d as deleteColumn, b as Crud_dialog } from '../../../../../chunks/columns.js-gBlWYIii.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../../chunks/state.js-CRDzCqwe.js';
import '../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../chunks/menu.js-DIhxGpfS.js';
import '../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-DIucMh1w.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-CvGAYget.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-ujsGVL1P.js';
import '../../../../../chunks/InputComp.js-DIpR68_l.js';
import '../../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import '../../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../../chunks/popover.js-HGTt93TX.js';
import '../../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../../chunks/plus.js-Dh6l4MVl.js';
import '../../../../../chunks/save.js-DlyDISKU.js';
import '../../../../../chunks/image-viewer.js-BySaE7Pv.js';
import '../../../../../chunks/dialog.js-DUe6BEut.js';
import '../../../../../chunks/trash.js-CGwD8oO2.js';
import '../../../../../chunks/Errors.js-CCE9GXl8.js';

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
			id: `avail-${id}`
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
		const categoryName = (id) => data.categories.find((c) => c.id === id)?.name ?? "—";
		const priceColumn = {
			accessorKey: "price",
			header: "Price",
			cell: ({ row }) => `£${(row.original.price / 100).toFixed(2)}`
		};
		const categoryColumn = {
			accessorKey: "categoryId",
			header: "Category",
			cell: ({ row }) => categoryName(row.original.categoryId)
		};
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
			rows: data.rows
		});
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-ROT7nebp.js.map
