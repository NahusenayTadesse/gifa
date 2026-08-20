import { V as ensure_array_like, a4 as escape_html } from './index-server.js-G-77DcSL.js';
import { C as Circle_alert } from './circle-alert.js-xan0O7Rm.js';

//#region src/lib/formComponents/Errors.svelte
function Errors($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { allErrors } = $$props;
		if (allErrors.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div role="alert" aria-live="assertive" class="mb-4 rounded-lg bg-destructive/15 p-3 text-destructive"><div class="flex items-center justify-between"><strong class="text-sm font-semibold">Please fix the following</strong></div> <ul class="mt-2 ml-4 list-inside list-disc space-y-1 text-sm"><!--[-->`);
			const each_array = ensure_array_like(allErrors);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let error = each_array[$$index];
				$$renderer.push(`<li class="flex items-center gap-2">`);
				Circle_alert($$renderer, {});
				$$renderer.push(`<!----> ${escape_html(error.messages)}</li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}

export { Errors as E };
//# sourceMappingURL=Errors.js-DMvwSaSx.js.map
