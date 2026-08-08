import { X as attributes, Y as clsx$1, a0 as bind_props } from './index-server.js-CFhxFuri.js';
import { c as cn } from './button.js-tGj5Lmrq.js';

//#region src/lib/components/ui/skeleton/skeleton.svelte
function Skeleton($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "skeleton",
			class: clsx$1(cn("bg-muted animate-pulse", className)),
			...restProps
		})}></div>`);
		bind_props($$props, { ref });
	});
}

export { Skeleton as S };
//# sourceMappingURL=skeleton.js-Gcpx8hDy.js.map
