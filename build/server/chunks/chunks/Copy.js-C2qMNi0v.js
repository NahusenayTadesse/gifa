import { T as attr, a2 as stringify, a4 as escape_html, $ as spread_props } from './index-server.js-CFhxFuri.js';
import { I as Icon } from './Icon.js-BJJlMSR3.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/copy.svelte
function Copy($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "copy" },
		props,
		{ iconNode: [["rect", {
			"width": "14",
			"height": "14",
			"x": "8",
			"y": "8",
			"rx": "2",
			"ry": "2"
		}], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]] }
	]));
}
//#endregion
//#region src/lib/Copy.svelte
function Copy_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data = "" } = $$props;
		if (data) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button type="button"${attr("title", `Copy ${stringify(data)}`)} class="group flex items-center gap-2 text-left text-sm normal-case transition-colors hover:text-primary"><span class="break-all">${escape_html(data)}</span> `);
			$$renderer.push("<!--[-1-->");
			Copy($$renderer, { class: "size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" });
			$$renderer.push(`<!--]--></button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span class="text-muted-foreground">—</span>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}

export { Copy_1 as C };
//# sourceMappingURL=Copy.js-C2qMNi0v.js.map
