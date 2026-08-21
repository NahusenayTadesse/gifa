import { i as indexColumn, r as reorderColumn, c as column, l as longColumn, e as editColumn, d as deleteColumn, C as Content_page } from '../../../../../chunks/columns.js-DYFVWIvm.js';
import '../../../../../chunks/index-server.js-G-77DcSL.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/FilterMenu.js-D2gHdxjx.js';
import '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/button.js-CVHOzf19.js';
import '../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../chunks/card.js-DuOddC8W.js';
import '../../../../../chunks/badge.js-DBsr7IxJ.js';
import '../../../../../chunks/data-table.js-CuHKJWZh.js';
import '../../../../../chunks/dist.js-0_pi50Yw.js';
import '../../../../../chunks/state.js-Bu_s3vG5.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/dropdown-menu.js-Ybaq1Jon.js';
import '../../../../../chunks/menu.js-D-wpWomV.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/reorder-buttons.js-Dt2VXQ0M.js';
import '../../../../../chunks/InputComp.js-D9ih9EPq.js';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import 'browser-image-compression';
import '../../../../../chunks/plus.js-Dpb43_E6.js';
import '../../../../../chunks/save.js-BUv6pSbp.js';
import '../../../../../chunks/square-pen.js-BkPwX186.js';
import '../../../../../chunks/dialog.js-D2Ktpyuv.js';
import '../../../../../chunks/Errors.js-DMvwSaSx.js';
import '../../../../../chunks/superform-defaults.js-BzqyareB.js';
import '../../../../../chunks/image-viewer.js-CwhGnqDu.js';
import '../../../../../chunks/crud-delete.js-BarRY9lQ.js';
import '../../../../../chunks/trash.js-DmF8DNb4.js';

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
			reorderColumn(data.rows, data.reorderForm),
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
			description: "Sections of the public menu page, e.g. Breakfast, Lamb, Cocktails. 'Menu' decides whether it renders under Food or Drinks. Use the arrows to set the order sections appear on the public menu.",
			addTitle: "Add Category",
			addForm: data.addForm,
			fields,
			columns,
			rows: data.rows,
			filterKeys: ["type"]
		});
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-CYSvcLKG.js.map
