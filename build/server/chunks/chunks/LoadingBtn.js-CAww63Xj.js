import { a4 as escape_html } from './index-server.js-CFhxFuri.js';
import { u as styleToString } from './create-id.js-BocO_oFE.js';
import { L as Loader } from './loader.js-CAX0l8lx.js';

//#region node_modules/.pnpm/svelte-toolbelt@0.10.6_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5_ef4331f8a17b21d52e7d86e328b464d0/node_modules/svelte-toolbelt/dist/utils/sr-only-styles.js
var srOnlyStyles = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0",
	transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
//#endregion
//#region src/lib/formComponents/LoadingBtn.svelte
function LoadingBtn($$renderer, $$props) {
	let { name } = $$props;
	$$renderer.push(`<div class="flex flex-row gap-2 align-self-center justify-self-center-safe items-center">`);
	Loader($$renderer, { class: "animate-spin w-6 h-6" });
	$$renderer.push(`<!----> <span class="animate-pulse">${escape_html(name)}...</span></div>`);
}

export { LoadingBtn as L, srOnlyStyles as s };
//# sourceMappingURL=LoadingBtn.js-CAww63Xj.js.map
