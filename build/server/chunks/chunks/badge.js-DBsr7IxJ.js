import { W as element, a0 as bind_props, T as attributes, U as clsx$1 } from './index-server.js-G-77DcSL.js';
import { t as tv, c as cn } from './button.js-CVHOzf19.js';

//#region src/lib/components/ui/badge/badge.svelte
var badgeVariants = tv({
	base: "gap-1.5 rounded-none border-0 bg-transparent px-0 py-0 text-[0.625rem] font-semibold tracking-widest uppercase transition-colors has-data-[icon=inline-end]:pr-0 has-data-[icon=inline-start]:pl-0 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
	variants: { variant: {
		default: "text-foreground [a]:hover:text-foreground/70",
		secondary: "text-muted-foreground [a]:hover:text-foreground",
		destructive: "text-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:text-destructive/70",
		outline: "text-foreground [a]:hover:text-foreground/70",
		ghost: "text-muted-foreground hover:text-foreground",
		link: "text-foreground underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, href, class: className, variant = "default", children, $$slots, $$events, ...restProps } = $$props;
		element($$renderer, href ? "a" : "span", () => {
			$$renderer.push(`${attributes({
				"data-slot": "badge",
				href,
				class: clsx$1(cn(badgeVariants({ variant }), className)),
				...restProps
			})}`);
		}, () => {
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		});
		bind_props($$props, { ref });
	});
}

export { Badge as B };
//# sourceMappingURL=badge.js-DBsr7IxJ.js.map
