import { p as page } from '../../../../../chunks/state.js-BhJVS57C.js';
import { P as Plus } from '../../../../../chunks/plus.js-Dh6l4MVl.js';
import { S as Sheet } from '../../../../../chunks/sheet.js-RZ-etUY0.js';
import { B as Button } from '../../../../../chunks/button.js-tGj5Lmrq.js';
import '../../../../../chunks/index-server.js-CFhxFuri.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/client.js-bhqsBV9j.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-CPdeRynN.js';
import '../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/Icon.js-BJJlMSR3.js';

//#region src/routes/dashboard/admin-panel/users/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		$$renderer.push(`<div class="mb-8 flex flex-row items-center justify-start gap-2">`);
		Button($$renderer, {
			href: "/dashboard/admin-panel/users",
			variant: page.url.pathname === "/dashboard/admin-panel/users" ? "default" : "outline",
			children: ($$renderer) => {
				Sheet($$renderer, {});
				$$renderer.push(`<!----> Users`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/dashboard/admin-panel/users/add-users",
			variant: page.url.pathname === "/dashboard/admin-panel/users/add-users" ? "default" : "outline",
			children: ($$renderer) => {
				Plus($$renderer, {});
				$$renderer.push(`<!----> Add Users`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> `);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte.js-5KINhSui.js.map
