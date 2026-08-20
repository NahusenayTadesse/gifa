import { a4 as escape_html, a3 as stringify, _ as spread_props } from './index-server.js-G-77DcSL.js';
import { I as Icon } from './Icon.js-DGpwHSC6.js';
import { B as Badge_check } from './badge-check.js-Btq2tknP.js';
import { L as Loader } from './loader.js-CJHbYKhD.js';
import { B as Badge } from './badge.js-DBsr7IxJ.js';

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

export { Statuses as S };
//# sourceMappingURL=statuses.js-BV0WCOej.js.map
