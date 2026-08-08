import { T as attr, a4 as escape_html, X as attributes, $ as spread_props } from './index-server.js-CFhxFuri.js';
import { I as Icon } from './Icon.js-BJJlMSR3.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content } from './dialog.js-DUe6BEut.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/square-pen.svelte
function Square_pen($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "square-pen" },
		props,
		{ iconNode: [["path", { "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }]] }
	]));
}
//#endregion
//#region src/lib/components/Table/image-viewer.svelte
function Image_viewer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { src, alt = "Image" } = $$props;
		let isOpen = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Dialog($$renderer, {
				get open() {
					return isOpen;
				},
				set open($$value) {
					isOpen = $$value;
					$$settled = false;
				},
				children: ($$renderer) => {
					{
						function child($$renderer, { props }) {
							$$renderer.push(`<button${attributes({
								...props,
								class: "group relative size-12 overflow-hidden rounded-md border border-border bg-muted transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden"
							})}>`);
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`<img${attr("src", assetUrl(src))}${attr("alt", alt)} class="size-full object-cover transition-transform group-hover:scale-110" onerror="this.__e=event"/>`);
							$$renderer.push(`<!--]--></button>`);
						}
						Dialog_trigger($$renderer, {
							child,
							$$slots: { child: true }
						});
					}
					$$renderer.push(`<!----> `);
					Dialog_content($$renderer, {
						class: "max-w-2xl p-2",
						children: ($$renderer) => {
							$$renderer.push(`<div class="relative aspect-video w-full overflow-hidden rounded-md bg-muted">`);
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`<img${attr("src", assetUrl(src))}${attr("alt", alt)} class="size-full object-contain" onerror="this.__e=event"/>`);
							$$renderer.push(`<!--]--></div> `);
							if (alt && alt !== "Image") {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<p class="mt-2 text-center text-sm text-muted-foreground">${escape_html(alt)}</p>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}

export { Image_viewer as I, Square_pen as S };
//# sourceMappingURL=image-viewer.js-BySaE7Pv.js.map
