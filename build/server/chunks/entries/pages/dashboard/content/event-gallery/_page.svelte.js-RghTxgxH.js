import { Y as head, ac as store_get, V as ensure_array_like, X as attr, F as derived, a4 as escape_html, a3 as stringify, af as unsubscribe_stores, a0 as bind_props, _ as spread_props } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { a as toast } from '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import { I as Icon } from '../../../../../chunks/Icon.js-DGpwHSC6.js';
import { F as FilterMenu } from '../../../../../chunks/FilterMenu.js-D2gHdxjx.js';
import { I as InputComp, C as Cloud_upload } from '../../../../../chunks/InputComp.js-D9ih9EPq.js';
import { I as Image } from '../../../../../chunks/image.js-DhjcWPLt.js';
import { L as Loader } from '../../../../../chunks/loader.js-CJHbYKhD.js';
import { S as Save } from '../../../../../chunks/save.js-BUv6pSbp.js';
import { X } from '../../../../../chunks/x.js-Bu-evnKT.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { I as Input } from '../../../../../chunks/input.js-CyJuxXk4.js';
import { L as LoadingBtn } from '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { L as Label } from '../../../../../chunks/label.js-THGsI54u.js';
import { a as assetUrl } from '../../../../../chunks/assets.js-DVYtCFUU.js';
import { d as superForm, e as filesProxy } from '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import { E as Errors } from '../../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { B as Badge } from '../../../../../chunks/badge.js-DBsr7IxJ.js';
import { C as Crud_delete } from '../../../../../chunks/crud-delete.js-BarRY9lQ.js';
import imageCompression from 'browser-image-compression';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/tooltip.js-DG5RmUXX.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../chunks/card.js-DuOddC8W.js';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/trash.js-DmF8DNb4.js';
import '../../../../../chunks/dialog.js-D2Ktpyuv.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/brush-cleaning.svelte
function Brush_cleaning($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "brush-cleaning" },
		props,
		{ iconNode: [
			["path", { "d": "m16 22-1-4" }],
			["path", { "d": "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" }],
			["path", { "d": "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" }],
			["path", { "d": "m8 22 1-4" }]
		] }
	]));
}
//#endregion
//#region src/lib/formComponents/GalleryUpload.svelte
function GalleryUpload($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { form, name, title = "Gallery Upload", placeholder = "JPG or PNG, up to 1MB each after compression", images = [] } = $$props;
		let file = filesProxy(form, name);
		let isDragging = false;
		let isProcessing = false;
		const MAX_RAW_BYTES = 25 * 1024 * 1024;
		async function handleFileSelection(newFiles) {
			if (!newFiles || newFiles.length === 0) return;
			const accepted = Array.from(newFiles).filter((f) => f.size <= MAX_RAW_BYTES);
			const rejected = newFiles.length - accepted.length;
			if (rejected > 0) toast.error(`${rejected} photo${rejected === 1 ? "" : "s"} over 25MB skipped.`);
			if (accepted.length === 0) return;
			isProcessing = true;
			const options = {
				maxSizeMB: 1,
				maxWidthOrHeight: 1920,
				useWebWorker: true,
				initialQuality: .8
			};
			try {
				const processed = await Promise.all(accepted.map(async (f) => {
					if (!f.type.startsWith("image/")) return f;
					try {
						const compressed = await imageCompression(f, options);
						return new File([compressed], f.name, { type: compressed.type });
					} catch (err) {
						console.error("Compression error:", err);
						return f;
					}
				}));
				const currentFiles = Array.from(store_get($$store_subs ??= {}, "$file", file) ?? []);
				const dt = new DataTransfer();
				[...currentFiles, ...processed].forEach((f) => dt.items.add(f));
				file.set(dt.files);
				toast.success(`${processed.length} photo${processed.length === 1 ? "" : "s"} added`);
			} catch (err) {
				console.error("Selection Error:", err);
				toast.error("Failed to process photos");
			} finally {
				isProcessing = false;
			}
		}
		function removeNewFile(index) {
			const current = Array.from(store_get($$store_subs ??= {}, "$file", file));
			current.splice(index, 1);
			const dt = new DataTransfer();
			current.forEach((f) => dt.items.add(f));
			file.set(dt.files);
		}
		function removeExistingImage(index) {
			images = images.filter((_, i) => i !== index);
		}
		let previewUrls = [];
		$$renderer.push(`<div class="flex w-full flex-col gap-6"><div class="flex flex-col gap-2">`);
		if (title) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h3 class="text-sm font-semibold tracking-tight">${escape_html(title)}</h3>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		Label($$renderer, {
			for: name,
			class: `group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed py-8 transition-all
			${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 bg-muted/50 hover:border-primary/50 hover:bg-muted"}`,
			ondragover: (e) => {
				e.preventDefault();
				isDragging = true;
			},
			ondragleave: () => isDragging = false,
			ondrop: (e) => {
				e.preventDefault();
				isDragging = false;
				handleFileSelection(e.dataTransfer?.files ?? null);
			},
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-col items-center justify-center gap-3 text-center"><div class="rounded-full bg-background p-4 shadow-sm transition-transform group-hover:scale-110">`);
				if (isProcessing) {
					$$renderer.push("<!--[0-->");
					Loader($$renderer, { class: "h-6 w-6 animate-spin text-primary" });
				} else {
					$$renderer.push("<!--[-1-->");
					Cloud_upload($$renderer, { class: `h-6 w-6 ${isDragging ? "text-primary" : "text-muted-foreground"}` });
				}
				$$renderer.push(`<!--]--></div> <div class="px-4"><p class="text-sm font-medium">${escape_html(isProcessing ? "Optimizing photos…" : isDragging ? "Drop them now!" : "Click to upload or drag photos in")}</p> <p class="text-xs text-muted-foreground">${escape_html(placeholder)}</p></div></div> `);
				Input($$renderer, {
					id: name,
					type: "file",
					class: "sr-only",
					name,
					accept: "image/*",
					multiple: true,
					onchange: (e) => handleFileSelection(e.currentTarget.files)
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> `);
		if (store_get($$store_subs ??= {}, "$file", file).length > 0 || images.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="space-y-4"><div class="flex items-center justify-between"><h3 class="text-sm font-semibold tracking-tight">Gallery Preview</h3> `);
			if (store_get($$store_subs ??= {}, "$file", file).length > 0) {
				$$renderer.push("<!--[0-->");
				Button($$renderer, {
					variant: "ghost",
					size: "sm",
					class: "h-8 text-xs text-muted-foreground hover:text-destructive",
					onclick: () => file.set(new DataTransfer().files),
					children: ($$renderer) => {
						Brush_cleaning($$renderer, { class: "mr-2 h-3.5 w-3.5" });
						$$renderer.push(`<!----> Clear New`);
					},
					$$slots: { default: true }
				});
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"><!--[-->`);
			const each_array = ensure_array_like(images);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let img = each_array[i];
				$$renderer.push(`<div class="group relative aspect-square overflow-hidden rounded-lg border bg-muted"><img${attr("src", `/files/${stringify(img)}`)} class="h-full w-full object-cover" alt="Server asset"/> <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">`);
				Button($$renderer, {
					variant: "destructive",
					size: "icon",
					class: "absolute top-1 right-1 h-7 w-7 rounded-full",
					onclick: () => removeExistingImage(i),
					children: ($$renderer) => {
						X($$renderer, { class: "h-4 w-4" });
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div> <div class="absolute right-0 bottom-0 left-0 bg-background/80 p-1 text-center"><span class="text-[10px] font-medium text-muted-foreground uppercase">Existing</span></div></div>`);
			}
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$file", file));
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				let f = each_array_1[i];
				$$renderer.push(`<div class="group relative aspect-square overflow-hidden rounded-lg border bg-card shadow-sm">`);
				if (f.type.startsWith("image/")) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<img${attr("src", previewUrls[i])} class="h-full w-full object-cover" alt="Local preview"/>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="flex h-full flex-col items-center justify-center gap-2 bg-muted/50">`);
					Image($$renderer, { class: "h-8 w-8 text-muted-foreground" });
					$$renderer.push(`<!----> <span class="max-w-full truncate px-2 text-[10px]">${escape_html(f.name)}</span></div>`);
				}
				$$renderer.push(`<!--]--> <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">`);
				Button($$renderer, {
					variant: "destructive",
					size: "icon",
					class: "absolute top-1 right-1 h-7 w-7 rounded-full",
					onclick: () => removeNewFile(i),
					children: ($$renderer) => {
						X($$renderer, { class: "h-4 w-4" });
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div> <div class="absolute right-0 bottom-0 left-0 bg-primary/90 p-1 text-center text-white"><span class="text-[10px] font-bold">${escape_html((f.size / 1024).toFixed(0))} KB</span></div></div>`);
			}
			$$renderer.push(`<!--]--></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { images });
	});
}
//#endregion
//#region src/routes/dashboard/content/event-gallery/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const eventItems = derived(() => data.eventList.map((e) => ({
			value: String(e.id),
			name: e.title
		})));
		const { form, errors, delayed, allErrors } = superForm(data.addForm, {
			resetForm: true,
			onError: toastOnError
		});
		let filteredRows = data.rows;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("wro7c9", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Event Gallery | Dashboard</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Event Gallery</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Extra photos for one specific event, shown at the bottom of that event's page — separate
			from its poster image. Pick the event, drop in as many photos as you like, no titles or
			captions needed.</p></div> <div class="max-w-xl rounded-lg border border-border bg-card p-4 sm:p-6"><form method="post" action="?/add" enctype="multipart/form-data" class="flex flex-col gap-4">`);
			Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				label: "Event",
				name: "eventId",
				type: "select",
				form,
				errors,
				required: true,
				items: eventItems()
			});
			$$renderer.push(`<!----> `);
			GalleryUpload($$renderer, {
				form,
				name: "images",
				title: "Photos"
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				type: "submit",
				class: "mt-2 self-start",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Saving" });
					} else {
						$$renderer.push("<!--[-1-->");
						Save($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Add to Gallery`);
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></form></div> `);
			if (data.rows.length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<!---->`);
				{
					FilterMenu($$renderer, {
						data: data.rows,
						filterKeys: ["eventTitle"],
						get filteredList() {
							return filteredRows;
						},
						set filteredList($$value) {
							filteredRows = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"><!--[-->`);
					const each_array = ensure_array_like(filteredRows);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let photo = each_array[$$index];
						$$renderer.push(`<div class="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"><img${attr("src", assetUrl(photo.imageUrl))}${attr("alt", photo.eventTitle ?? "Event photo")} loading="lazy" class="size-full object-cover"/> <div class="absolute top-1 right-1 opacity-0 transition-opacity group-hover:opacity-100">`);
						Crud_delete($$renderer, {
							data: data.deleteForm,
							id: photo.id,
							name: "this photo"
						});
						$$renderer.push(`<!----></div> <div class="absolute inset-x-0 bottom-0 bg-black/70 px-2 py-1">`);
						Badge($$renderer, {
							variant: "secondary",
							class: "max-w-full truncate px-1.5 py-0 text-[10px]",
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(photo.eventTitle ?? "Unknown event")}`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<p class="py-8 text-center text-sm text-muted-foreground">No event photos yet.</p>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-RghTxgxH.js.map
