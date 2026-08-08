import { T as attr, a2 as stringify, Z as ensure_array_like } from './index-server.js-CFhxFuri.js';
import { S as Skeleton } from './skeleton.js-Gcpx8hDy.js';

//#region src/lib/components/Loading.svelte
function Loading($$renderer, $$props) {
	/** Placeholder shown while a table's data resolves. */
	let { name = "data", rows = 6 } = $$props;
	$$renderer.push(`<div class="flex w-full flex-col gap-3 p-2" aria-busy="true"${attr("aria-label", `Loading ${stringify(name)}`)}>`);
	Skeleton($$renderer, { class: "h-10 w-full" });
	$$renderer.push(`<!----> <!--[-->`);
	const each_array = ensure_array_like(Array.from({ length: rows }, (_, i) => i));
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		each_array[$$index];
		Skeleton($$renderer, { class: "h-12 w-full" });
	}
	$$renderer.push(`<!--]--></div>`);
}

export { Loading as L };
//# sourceMappingURL=Loading.js-C_lcSnoy.js.map
