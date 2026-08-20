import { X as attr, ad as store_mutate, ac as store_get, af as unsubscribe_stores, a4 as escape_html, V as ensure_array_like, _ as spread_props } from './index-server.js-G-77DcSL.js';
import { I as InputComp } from './InputComp.js-CxBPygYN.js';
import { C as Chevron_down } from './chevron-down.js-B9MsoqDg.js';
import { C as Chevron_up } from './chevron-up.js-CYbksHm-.js';
import { P as Plus } from './plus.js-Dpb43_E6.js';
import { S as Save } from './save.js-BUv6pSbp.js';
import { S as Square_pen } from './square-pen.js-BkPwX186.js';
import { B as Button } from './button.js-CVHOzf19.js';
import { L as LoadingBtn } from './LoadingBtn.js-BFpbCOtB.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from './dialog.js-D2Ktpyuv.js';
import { S as Scroll_area } from './scroll-area.js-BbOAkcOe.js';
import { d as superForm } from './client2.js-ASiNbvEC.js';
import './exports.js-D8tTp1_m.js';
import './client.js-PQFg6ATt.js';
import { E as Errors } from './Errors.js-DMvwSaSx.js';
import { t as toastOnError } from './superform-defaults.js-BzqyareB.js';

//#region src/lib/components/Table/crud-dialog.svelte
function Crud_dialog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { title, data, action, fields, values = {}, existing = {}, trigger, variant, iconOnly = false } = $$props;
		const editing = "id" in values;
		const formId = `crud-${Math.random().toString(36).slice(2, 9)}`;
		const { form, errors, delayed, allErrors } = superForm(data, {
			resetForm: !editing,
			id: formId,
			onError: toastOnError
		});
		for (const [key, value] of Object.entries(values)) store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form)[key] = value);
		let open = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						{
							function child($$renderer, { props }) {
								Button($$renderer, spread_props([props, {
									size: "sm",
									variant: variant ?? (editing ? "ghost" : "default"),
									class: "border-0",
									children: ($$renderer) => {
										if (editing) {
											$$renderer.push("<!--[0-->");
											Square_pen($$renderer, { class: "size-4" });
										} else {
											$$renderer.push("<!--[-1-->");
											Plus($$renderer, { class: "size-4" });
										}
										$$renderer.push(`<!--]--> `);
										if (!iconOnly) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`${escape_html(trigger ?? title)}`);
										} else $$renderer.push("<!--[-1-->");
										$$renderer.push(`<!--]-->`);
									},
									$$slots: { default: true }
								}]));
							}
							if (Dialog_trigger) {
								$$renderer.push("<!--[-->");
								Dialog_trigger($$renderer, {
									child,
									$$slots: { child: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								class: "w-lg!",
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(title)}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									Scroll_area($$renderer, {
										class: "h-auto w-full! min-w-0! px-2 pr-4",
										orientation: "both",
										children: ($$renderer) => {
											$$renderer.push(`<div class="h-auto max-h-96 w-full lg:max-h-[calc(100vh-14rem)]"><form${attr("action", action)} method="post"${attr("id", formId)} enctype="multipart/form-data" class="flex w-full flex-col gap-2 p-1">`);
											Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
											$$renderer.push(`<!----> `);
											if (editing) {
												$$renderer.push("<!--[0-->");
												$$renderer.push(`<input type="hidden" name="id"${attr("value", store_get($$store_subs ??= {}, "$form", form).id)}/>`);
											} else $$renderer.push("<!--[-1-->");
											$$renderer.push(`<!--]--> <!--[-->`);
											const each_array = ensure_array_like(fields);
											for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
												let field = each_array[$$index];
												InputComp($$renderer, {
													form,
													errors,
													label: field.label,
													name: field.name,
													type: field.type ?? "text",
													required: field.required ?? false,
													placeholder: field.placeholder ?? "",
													rows: field.rows ?? 5,
													items: field.items ?? [],
													image: existing[field.name] ?? ""
												});
											}
											$$renderer.push(`<!--]--> `);
											Button($$renderer, {
												type: "submit",
												form: formId,
												class: "mt-4",
												children: ($$renderer) => {
													if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
														$$renderer.push("<!--[0-->");
														LoadingBtn($$renderer, { name: "Saving" });
													} else {
														$$renderer.push("<!--[-1-->");
														Save($$renderer, { class: "size-4" });
														$$renderer.push(`<!----> ${escape_html(editing ? "Save Changes" : "Add")}`);
													}
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
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
//#endregion
//#region src/lib/components/Table/reorder-buttons.svelte
function Reorder_buttons($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, id, isFirst = false, isLast = false } = $$props;
		superForm(data, {
			resetForm: false,
			invalidateAll: true,
			id: `reorder-${id}`,
			onError: toastOnError
		});
		$$renderer.push(`<form method="post" action="?/reorder" class="flex gap-0.5"><input type="hidden" name="id"${attr("value", id)}/> `);
		Button($$renderer, {
			type: "submit",
			name: "direction",
			value: "up",
			size: "icon",
			variant: "ghost",
			class: "size-7",
			disabled: isFirst,
			title: "Move up",
			children: ($$renderer) => {
				Chevron_up($$renderer, { class: "size-4" });
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			type: "submit",
			name: "direction",
			value: "down",
			size: "icon",
			variant: "ghost",
			class: "size-7",
			disabled: isLast,
			title: "Move down",
			children: ($$renderer) => {
				Chevron_down($$renderer, { class: "size-4" });
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></form>`);
	});
}

export { Crud_dialog as C, Reorder_buttons as R };
//# sourceMappingURL=reorder-buttons.js-DtLbycrl.js.map
