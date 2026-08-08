import { X as attributes, Y as clsx$1, a0 as bind_props } from './index-server.js-CFhxFuri.js';
import { c as cn } from './button.js-tGj5Lmrq.js';

//#region src/lib/components/ui/input/input.svelte
function Input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, type, files = void 0, class: className, "data-slot": dataSlot = "input", $$slots, $$events, ...restProps } = $$props;
		if (type === "file") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<input${attributes({
				"data-slot": dataSlot,
				class: clsx$1(cn("h-10 border border-transparent border-b-input bg-transparent px-0 py-1 text-base transition-[color,border-color] file:h-7 file:text-sm file:font-medium focus-visible:border-b-ring aria-invalid:border-b-destructive md:text-sm dark:aria-invalid:border-b-destructive/50 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", className)),
				type: "file",
				...restProps
			}, void 0, void 0, void 0, 4)}/>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<input${attributes({
				"data-slot": dataSlot,
				class: clsx$1(cn("h-10 border border-transparent border-b-input bg-transparent px-0 py-1 text-base transition-[color,border-color] file:h-7 file:text-sm file:font-medium focus-visible:border-b-ring aria-invalid:border-b-destructive md:text-sm dark:aria-invalid:border-b-destructive/50 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", className)),
				type,
				value,
				...restProps
			}, void 0, void 0, void 0, 4)}/>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value,
			files
		});
	});
}

export { Input as I };
//# sourceMappingURL=input.js-BuyvpeQU.js.map
