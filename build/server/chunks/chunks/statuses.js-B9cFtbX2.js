import { $ as spread_props, _ as element, X as attributes, Y as clsx$1, a0 as bind_props, a4 as escape_html, a2 as stringify } from './index-server.js-CFhxFuri.js';
import { I as Icon } from './Icon.js-BJJlMSR3.js';
import { B as Badge_check } from './badge-check.js-DyQIjrrk.js';
import { L as Loader } from './loader.js-CAX0l8lx.js';
import { c as cn, t as tv } from './button.js-tGj5Lmrq.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/octagon-minus.svelte
function Octagon_minus($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "octagon-minus" },
		props,
		{ iconNode: [["path", { "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { "d": "M8 12h8" }]] }
	]));
}
//#endregion
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
//#endregion
//#region src/lib/components/Table/statuses.svelte
function Statuses($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { status } = $$props;
		const statusMeta = {
			confirmed: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			paid: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			quoted: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			complete: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			incomplete: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			cancelled: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			unpaid: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			dead: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			pending: {
				icon: Loader,
				colour: "bg-yellow-500"
			},
			delivered: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			read: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			active: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			contracted: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			inactive: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			yes: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			no: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			unremovable: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			removable: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			out: {
				icon: Octagon_minus,
				colour: "bg-red-500"
			},
			low: {
				icon: Loader,
				colour: "bg-yellow-500"
			},
			new: {
				icon: Loader,
				colour: "bg-yellow-500"
			},
			live: {
				icon: Badge_check,
				colour: "bg-green-400"
			},
			unknown: {
				icon: Loader,
				colour: "bg-gray-500"
			}
		};
		const { icon: Icon, colour } = statusMeta[String(status).trim().toLowerCase()] ?? statusMeta.unknown;
		Badge($$renderer, {
			variant: "secondary",
			class: `${stringify(colour)} text-white`,
			children: ($$renderer) => {
				Icon($$renderer, {});
				$$renderer.push(`<!----> ${escape_html(String(status))}`);
			},
			$$slots: { default: true }
		});
	});
}

export { Badge as B, Statuses as S };
//# sourceMappingURL=statuses.js-B9cFtbX2.js.map
