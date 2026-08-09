import { a4 as escape_html, V as html } from '../../../chunks/index-server.js-CFhxFuri.js';
import { p as page } from '../../../chunks/state.js-CtTGHc_6.js';
import { B as Button } from '../../../chunks/button.js-tGj5Lmrq.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/client.js-BbOw6TcD.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-BYNuKnXn.js';
import '../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../chunks/utils.js-D-kl_003.js';

//#region src/routes/dashboard/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="w-full h-full flex flex-col justify-center items-center"><h1 class="text-red-600 text-5xl">${escape_html(page.status)}</h1> <h3 class="text-red-600 font-head text-2xl">${html(page.error?.message)}</h3> `);
		Button($$renderer, {
			href: "/dashboard",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Back to Dashboard`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _error as default };
//# sourceMappingURL=_error.svelte.js-BvAnWLba.js.map
