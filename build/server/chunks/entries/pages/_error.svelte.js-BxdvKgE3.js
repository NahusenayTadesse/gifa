import { U as head, a4 as escape_html } from '../../chunks/index-server.js-CFhxFuri.js';
import { p as page } from '../../chunks/state.js-wKdfgGfb.js';
import { B as Button } from '../../chunks/button.js-tGj5Lmrq.js';
import '../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../chunks/uneval.js-CatQk29t.js';
import '../../chunks/client.js-SaiAi5EC.js';
import '../../chunks/shared.js-4SMYzfPQ.js';
import '../../chunks/exports.js-D8tTp1_m.js';
import '../../chunks/routing.js-NQIFfGdk.js';
import '../../chunks/internal2.js-CyvG6wSg.js';
import '../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../chunks/utils.js-D-kl_003.js';

//#region src/routes/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1j96wlh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Page not found | Gifa Restaurant &amp; Lounge</title>`);
			});
		});
		$$renderer.push(`<section class="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"><p class="text-sm font-semibold tracking-widest text-primary uppercase">${escape_html(page.status)}</p> <h1 class="mt-4 font-heading text-3xl font-bold md:text-4xl">This page has left the table.</h1> <p class="mt-4 max-w-md text-muted-foreground">Nothing here — but the menu's still on.</p> `);
		Button($$renderer, {
			href: "/menu",
			size: "lg",
			class: "mt-8",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Back to the menu`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></section>`);
	});
}

export { _error as default };
//# sourceMappingURL=_error.svelte.js-BxdvKgE3.js.map
