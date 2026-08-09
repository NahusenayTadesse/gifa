import { i as indexColumn, c as column, l as longColumn, e as editColumn, d as deleteColumn, C as Content_page } from '../../../../../chunks/columns.js-gBlWYIii.js';
import '../../../../../chunks/index-server.js-CFhxFuri.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/data-table.js-BqWSSlns.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../../../chunks/state.js-CRDzCqwe.js';
import '../../../../../chunks/client.js-CHBDgIN6.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-ujsGVL1P.js';
import '../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../chunks/button.js-tGj5Lmrq.js';
import '../../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../chunks/menu.js-DIhxGpfS.js';
import '../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
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
import '../../../../../chunks/client2.js-SufGfZGd.js';
import '../../../../../chunks/forms.js-DIucMh1w.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-CvGAYget.js';
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

//#region src/routes/dashboard/content/menu-categories/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const fields = [
			{
				name: "name",
				label: "Category name",
				type: "text",
				required: true,
				placeholder: "e.g. Lamb"
			},
			{
				name: "slug",
				label: "Slug",
				type: "text",
				required: true,
				placeholder: "e.g. lamb"
			},
			{
				name: "type",
				label: "Menu",
				type: "select",
				required: true,
				items: [{
					value: "food",
					name: "Food"
				}, {
					value: "drink",
					name: "Drink"
				}]
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				rows: 2
			},
			{
				name: "sortOrder",
				label: "Display order",
				type: "number"
			}
		];
		const columns = [
			indexColumn,
			column("name", "Name"),
			column("slug", "Slug"),
			column("type", "Menu"),
			longColumn("description", "Description"),
			column("sortOrder", "Order"),
			editColumn({
				data: data.editForm,
				fields,
				title: "Edit Category",
				keys: [
					"name",
					"slug",
					"type",
					"description",
					"sortOrder"
				]
			}),
			deleteColumn(data.deleteForm, "name")
		];
		Content_page($$renderer, {
			title: "Menu Categories",
			description: "Sections of the public menu page, e.g. Breakfast, Lamb, Cocktails. 'Menu' decides whether it renders under Food or Drinks.",
			addTitle: "Add Category",
			addForm: data.addForm,
			fields,
			columns,
			rows: data.rows
		});
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Dh_rH0FJ.js.map
