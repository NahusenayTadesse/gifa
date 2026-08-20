import { a4 as escape_html, a3 as stringify, _ as spread_props } from './index-server.js-G-77DcSL.js';
import { T as Trash } from './trash.js-DmF8DNb4.js';
import { B as Button } from './button.js-CVHOzf19.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from './dialog.js-D2Ktpyuv.js';
import { S as Scroll_area } from './scroll-area.js-BbOAkcOe.js';

//#region src/lib/formComponents/DialogComp.svelte
function DialogComp($$renderer, $$props) {
	let { title, children, variant, IconComp, class: className = "" } = $$props;
	if (Dialog) {
		$$renderer.push("<!--[-->");
		Dialog($$renderer, {
			children: ($$renderer) => {
				{
					function child($$renderer, { props }) {
						Button($$renderer, spread_props([
							{
								size: "sm",
								class: "border-0",
								variant
							},
							props,
							{
								children: ($$renderer) => {
									if (variant === "destructive") {
										$$renderer.push("<!--[0-->");
										Trash($$renderer, {});
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--> `);
									if (IconComp) {
										$$renderer.push("<!--[0-->");
										if (IconComp) {
											$$renderer.push("<!--[-->");
											IconComp($$renderer, {});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--> ${escape_html(title)}`);
								},
								$$slots: { default: true }
							}
						]));
					}
					if (Dialog_trigger) {
						$$renderer.push("<!--[-->");
						Dialog_trigger($$renderer, {
							class: "w-auto border-0",
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
						class: `w-lg! ${stringify(className)}`,
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
								class: "h-auto w-full! min-w-0!  px-2 pr-4",
								orientation: "both",
								children: ($$renderer) => {
									$$renderer.push(`<div class="h-auto max-h-96 w-full lg:max-h-[calc(100vh-10rem)]">`);
									children($$renderer);
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

export { DialogComp as D };
//# sourceMappingURL=DialogComp.js-lliIUsvt.js.map
