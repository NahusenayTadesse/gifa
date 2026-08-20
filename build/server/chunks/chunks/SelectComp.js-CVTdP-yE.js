import { a0 as bind_props, a4 as escape_html, V as ensure_array_like, F as derived } from './index-server.js-G-77DcSL.js';
import { S as Select, a as Select_trigger, b as Select_content, c as Select_item } from './select.js-2ghzD58U.js';
import { s as selectItem } from './global.svelte.js-CK6uR_iK.js';

//#region src/lib/formComponents/SelectComp.svelte
function SelectComp($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { value = void 0, items, name } = $$props;
		const triggerContent = derived(() => items.find((f) => String(f.value) === String(value))?.name ?? "Select " + name.replace(/([a-z])([A-Z])/g, "$1 $2"));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Select) {
				$$renderer.push("<!--[-->");
				Select($$renderer, {
					type: "single",
					name,
					get value() {
						return value;
					},
					set value($$value) {
						value = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Select_trigger) {
							$$renderer.push("<!--[-->");
							Select_trigger($$renderer, {
								class: "w-full capitalize",
								children: ($$renderer) => {
									$$renderer.push(`<!---->${escape_html(triggerContent())}`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Select_content) {
							$$renderer.push("<!--[-->");
							Select_content($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<!--[-->`);
									const each_array = ensure_array_like(items);
									for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
										let item = each_array[$$index];
										if (Select_item) {
											$$renderer.push("<!--[-->");
											Select_item($$renderer, {
												value: item.value,
												class: selectItem,
												children: ($$renderer) => {
													$$renderer.push(`<!---->${escape_html(item.name)}`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(`<!--]-->`);
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
		bind_props($$props, { value });
	});
}

export { SelectComp as S };
//# sourceMappingURL=SelectComp.js-CVTdP-yE.js.map
