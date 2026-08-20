import { a4 as escape_html, _ as spread_props, a3 as stringify } from './index-server.js-G-77DcSL.js';
import { b as buttonVariants, B as Button } from './button.js-CVHOzf19.js';
import { T as Tooltip_provider, a as Tooltip, b as Tooltip_trigger, c as Tooltip_content } from './tooltip.js-DG5RmUXX.js';

//#region src/lib/components/Table/data-table-links.svelte
function Data_table_links($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id, IconComp, name, link, variant = "ghost", target = "" } = $$props;
		if (id) {
			$$renderer.push("<!--[0-->");
			if (Tooltip_provider) {
				$$renderer.push("<!--[-->");
				Tooltip_provider($$renderer, {
					children: ($$renderer) => {
						if (Tooltip) {
							$$renderer.push("<!--[-->");
							Tooltip($$renderer, {
								children: ($$renderer) => {
									{
										function child($$renderer, { props }) {
											Button($$renderer, spread_props([
												{
													href: `${stringify(link)}/${stringify(id)}`,
													target,
													variant
												},
												props,
												{
													class: `wrap-break-words justify-start!  ${variant === "ghost" ? "pl-0" : ""}`,
													children: ($$renderer) => {
														if (IconComp) {
															$$renderer.push("<!--[0-->");
															if (IconComp) {
																$$renderer.push("<!--[-->");
																IconComp($$renderer, { class: "size-4" });
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
														} else $$renderer.push("<!--[-1-->");
														$$renderer.push(`<!--]--> ${escape_html(name)}`);
													},
													$$slots: { default: true }
												}
											]));
										}
										if (Tooltip_trigger) {
											$$renderer.push("<!--[-->");
											Tooltip_trigger($$renderer, {
												class: buttonVariants({ variant: "ghost" }),
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
									if (Tooltip_content) {
										$$renderer.push("<!--[-->");
										Tooltip_content($$renderer, {
											class: "left-0 justify-self-start",
											children: ($$renderer) => {
												$$renderer.push(`<p class="text-[13px]!">Goto ${escape_html(name)}</p>`);
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
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span class="wrap-break-words text-muted-foreground">${escape_html(name)}</span>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}

export { Data_table_links as D };
//# sourceMappingURL=data-table-links.js-DgpuzJmx.js.map
