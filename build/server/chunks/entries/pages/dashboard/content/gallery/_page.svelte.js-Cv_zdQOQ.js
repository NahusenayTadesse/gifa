import { Y as head, a4 as escape_html, V as ensure_array_like, X as attr, F as derived } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { F as FilterMenu } from '../../../../../chunks/FilterMenu.js-D2gHdxjx.js';
import { S as Search } from '../../../../../chunks/command.js-Dz__iECm.js';
import { S as Star } from '../../../../../chunks/star.js-Cvd9G-GX.js';
import { I as Input } from '../../../../../chunks/input.js-CyJuxXk4.js';
import { a as assetUrl } from '../../../../../chunks/assets.js-DVYtCFUU.js';
import { B as Badge } from '../../../../../chunks/badge.js-DBsr7IxJ.js';
import { C as Crud_dialog, R as Reorder_buttons } from '../../../../../chunks/reorder-buttons.js-Dt2VXQ0M.js';
import { C as Crud_delete } from '../../../../../chunks/crud-delete.js-BarRY9lQ.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../chunks/button.js-CVHOzf19.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../chunks/card.js-DuOddC8W.js';
import '../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../chunks/InputComp.js-D9ih9EPq.js';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
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
import '../../../../../chunks/trash.js-DmF8DNb4.js';

//#region src/routes/dashboard/content/gallery/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const fields = [
			{
				name: "src",
				label: "Image",
				type: "file",
				required: true
			},
			{
				name: "title",
				label: "Title",
				type: "text",
				placeholder: "e.g. Bebi-Aynetu platter"
			},
			{
				name: "altText",
				label: "Image description",
				type: "text",
				required: true,
				placeholder: "For screen readers"
			},
			{
				name: "caption",
				label: "Caption",
				type: "textarea",
				rows: 2
			},
			{
				name: "place",
				label: "Place",
				type: "text",
				placeholder: "e.g. The lounge"
			},
			{
				name: "context",
				label: "Where it can show",
				type: "select",
				required: true,
				items: [
					{
						value: "hero",
						name: "Hero — homepage background slideshow"
					},
					{
						value: "food",
						name: "Food"
					},
					{
						value: "drink",
						name: "Drink"
					},
					{
						value: "interior",
						name: "Interior / the room"
					},
					{
						value: "event",
						name: "Event"
					},
					{
						value: "team",
						name: "Team"
					}
				]
			},
			{
				name: "isFeatured",
				label: "",
				type: "checkboxSingle",
				placeholder: "Featured"
			},
			{
				name: "sortOrder",
				label: "Display order",
				type: "number"
			}
		];
		const editValues = (image) => ({
			id: image.id,
			title: image.title ?? "",
			altText: image.altText,
			caption: image.caption ?? "",
			place: image.place ?? "",
			context: image.context,
			isFeatured: image.isFeatured,
			sortOrder: image.sortOrder
		});
		let filteredRows = data.rows;
		let search = "";
		const visibleRows = derived(() => search.trim() ? filteredRows.filter((image) => {
			return `${image.title ?? ""} ${image.caption ?? ""} ${image.place ?? ""} ${image.altText}`.toLowerCase().includes(search.trim().toLowerCase());
		}) : filteredRows);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("28c2qg", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Gallery | Dashboard</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div class="flex flex-wrap items-start justify-between gap-4"><div><h1 class="font-heading text-2xl font-bold">Gallery</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">The photo library used across the site — food, drink, the room and events. Tag an image
				'Hero' to add it to the crossfading slideshow behind the homepage headline. Hover a photo
				to reorder, edit or delete it.</p></div> `);
			Crud_dialog($$renderer, {
				title: "Add Image",
				data: data.addForm,
				action: "?/add",
				fields
			});
			$$renderer.push(`<!----></div> <!---->`);
			$$renderer.push(`<div class="flex flex-wrap items-center gap-3"><div class="relative w-full max-w-xs">`);
			Search($$renderer, { class: "pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" });
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				placeholder: "Search title, caption, place…",
				class: "pl-8",
				get value() {
					return search;
				},
				set value($$value) {
					search = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----></div> `);
			FilterMenu($$renderer, {
				data: data.rows,
				filterKeys: ["context", "isFeatured"],
				get filteredList() {
					return filteredRows;
				},
				set filteredList($$value) {
					filteredRows = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----></div> <p class="text-sm text-muted-foreground">${escape_html(visibleRows().length)} of ${escape_html(data.rows.length)} photo${escape_html(data.rows.length === 1 ? "" : "s")}</p> `);
			if (visibleRows().length === 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="py-12 text-center text-sm text-muted-foreground">No photos match this search or filter.</p>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"><!--[-->`);
				const each_array = ensure_array_like(visibleRows());
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let image = each_array[$$index];
					const index = data.rows.findIndex((r) => r.id === image.id);
					$$renderer.push(`<div class="group relative overflow-hidden rounded-lg border border-border bg-muted"><div class="aspect-square w-full overflow-hidden"><img${attr("src", assetUrl(image.src))}${attr("alt", image.altText)} loading="lazy" class="size-full object-cover transition-transform duration-300 group-hover:scale-105"/></div> `);
					if (image.isFeatured) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="absolute top-2 left-2 rounded-full bg-primary p-1 text-primary-foreground shadow" title="Featured">`);
						Star($$renderer, { class: "size-3.5 fill-current" });
						$$renderer.push(`<!----></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> <div class="absolute top-2 right-2 flex flex-col items-end gap-1 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100"><div class="flex gap-0.5 rounded-md bg-background/95 p-0.5 shadow-sm">`);
					Reorder_buttons($$renderer, {
						data: data.reorderForm,
						id: image.id,
						isFirst: index === 0,
						isLast: index === data.rows.length - 1
					});
					$$renderer.push(`<!----></div> <div class="flex gap-0.5 rounded-md bg-background/95 p-0.5 shadow-sm">`);
					Crud_dialog($$renderer, {
						title: "Edit Image",
						data: data.editForm,
						action: "?/edit",
						fields,
						values: editValues(image),
						existing: { src: image.src },
						iconOnly: true
					});
					$$renderer.push(`<!----> `);
					Crud_delete($$renderer, {
						data: data.deleteForm,
						id: image.id,
						name: image.title || "this image"
					});
					$$renderer.push(`<!----></div></div> <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-2.5 pt-8 pb-2"><p class="truncate text-sm font-medium text-white">${escape_html(image.title || "(untitled)")}</p> <div class="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/70">`);
					Badge($$renderer, {
						variant: "secondary",
						class: "px-1.5 py-0 text-[10px] capitalize",
						children: ($$renderer) => {
							$$renderer.push(`<!---->${escape_html(image.context)}`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					if (image.place) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<span class="truncate">${escape_html(image.place)}</span>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div></div></div>`);
				}
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]-->`);
			$$renderer.push(`<!----></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Cv_zdQOQ.js.map
