import './exports.js-D8tTp1_m.js';
import { U as head, a4 as escape_html, $ as spread_props, Z as ensure_array_like } from './index-server.js-CFhxFuri.js';
import './client.js-DEzvbNS6.js';
import { I as Icon } from './Icon.js-BJJlMSR3.js';
import { T as Trash } from './trash.js-CGwD8oO2.js';
import { b as buttonVariants, B as Button } from './button.js-tGj5Lmrq.js';
import './LoadingBtn.js-CAww63Xj.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from './dialog.js-DUe6BEut.js';
import { S as Scroll_area } from './scroll-area.js-ZxpPU0l1.js';
import './shared.js-4SMYzfPQ.js';
import { C as Card, b as Card_header, a as Card_content, c as Card_title, d as Card_description } from './card.js-CBH4NVhi.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/arrow-left.svelte
function Arrow_left($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "arrow-left" },
		props,
		{ iconNode: [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/pencil.svelte
function Pencil($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "pencil" },
		props,
		{ iconNode: [["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { "d": "m15 5 4 4" }]] }
	]));
}
//#endregion
//#region src/lib/components/SingleTable.svelte
function SingleTable($$renderer, $$props) {
	/** Renders a record's fields as a simple label/value detail table. */
	let { singleTable = [] } = $$props;
	$$renderer.push(`<div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-left text-sm"><tbody><!--[-->`);
	const each_array = ensure_array_like(singleTable);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let row = each_array[$$index];
		$$renderer.push(`<tr class="border-b border-border last:border-0"><th class="w-48 bg-muted/40 px-4 py-3 font-medium text-muted-foreground">${escape_html(row.name)}</th><td class="px-4 py-3">`);
		if (row.value === null || row.value === void 0 || row.value === "") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="text-muted-foreground">—</span>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`${escape_html(row.value)}`);
		}
		$$renderer.push(`<!--]--></td></tr>`);
	}
	$$renderer.push(`<!--]--></tbody></table></div>`);
}
//#endregion
//#region src/lib/forms/Delete.svelte
function Delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isOpen = false;
		let { redirect = "/dashboard" } = $$props;
		let deleting = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					get open() {
						return isOpen;
					},
					set open($$value) {
						isOpen = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Dialog_trigger) {
							$$renderer.push("<!--[-->");
							Dialog_trigger($$renderer, {
								class: buttonVariants({ variant: "destructive" }),
								children: ($$renderer) => {
									Trash($$renderer, {});
									$$renderer.push(`<!----> Delete`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								class: "w-full",
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->Delete`);
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
										class: "h-auto rounded-md border p-2",
										children: ($$renderer) => {
											$$renderer.push(`<h5 class="text-center">Are you sure you want to Delete? This action is irreversable</h5> <div class="flex flex-row items-center justify-center gap-4 pt-4"><form method="post" action="?/delete">`);
											Button($$renderer, {
												type: "submit",
												disabled: deleting,
												variant: "destructive",
												size: "lg",
												children: ($$renderer) => {
													$$renderer.push("<!--[-1-->");
													Trash($$renderer, {});
													$$renderer.push(`<!----> Delete`);
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form> `);
											Button($$renderer, {
												onclick: () => isOpen = false,
												size: "lg",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Cancel`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></div>`);
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
	});
}
//#endregion
//#region src/lib/components/SingleView.svelte
function SingleView($$renderer, $$props) {
	/** Page shell for a single-record detail view. */
	let { title, description = "", children } = $$props;
	head("17fm2zj", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>${escape_html(title)}</title>`);
		});
	});
	if (Card) {
		$$renderer.push("<!--[-->");
		Card($$renderer, {
			class: "w-full",
			children: ($$renderer) => {
				if (Card_header) {
					$$renderer.push("<!--[-->");
					Card_header($$renderer, {
						children: ($$renderer) => {
							if (Card_title) {
								$$renderer.push("<!--[-->");
								Card_title($$renderer, {
									class: "text-2xl",
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
							$$renderer.push(` `);
							if (description) {
								$$renderer.push("<!--[0-->");
								if (Card_description) {
									$$renderer.push("<!--[-->");
									Card_description($$renderer, {
										children: ($$renderer) => {
											$$renderer.push(`<!---->${escape_html(description)}`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` `);
				if (Card_content) {
					$$renderer.push("<!--[-->");
					Card_content($$renderer, {
						class: "flex w-full flex-col gap-4 p-0",
						children: ($$renderer) => {
							children?.($$renderer);
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

export { Arrow_left as A, Delete as D, Pencil as P, SingleView as S, SingleTable as a };
//# sourceMappingURL=SingleView.js-CmU7ETbi.js.map
