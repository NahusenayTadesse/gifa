import { a0 as bind_props, $ as spread_props } from './index-server.js-CFhxFuri.js';
import { C as Check, M as Minus } from './minus.js-CdYgHBTQ.js';
import { c as cn } from './button.js-tGj5Lmrq.js';
import { C as Checkbox$1 } from './checkbox.js-Bl0jTWJn.js';

//#region src/lib/components/ui/checkbox/checkbox.svelte
function Checkbox($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, checked = false, indeterminate = false, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function children($$renderer, { checked, indeterminate }) {
					$$renderer.push(`<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none">`);
					if (checked) {
						$$renderer.push("<!--[0-->");
						Check($$renderer, {});
					} else if (indeterminate) {
						$$renderer.push("<!--[1-->");
						Minus($$renderer, {});
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div>`);
				}
				if (Checkbox$1) {
					$$renderer.push("<!--[-->");
					Checkbox$1($$renderer, spread_props([
						{
							"data-slot": "checkbox",
							class: cn("flex size-4.5 items-center justify-center rounded-none border border-input bg-transparent transition-shadow group-has-disabled/field:opacity-50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", className)
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							get checked() {
								return checked;
							},
							set checked($$value) {
								checked = $$value;
								$$settled = false;
							},
							get indeterminate() {
								return indeterminate;
							},
							set indeterminate($$value) {
								indeterminate = $$value;
								$$settled = false;
							},
							children,
							$$slots: { default: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			checked,
			indeterminate
		});
	});
}

export { Checkbox as C };
//# sourceMappingURL=checkbox2.js-ZirzxI5t.js.map
