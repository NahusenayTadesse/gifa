import { a3 as attr_class, Y as clsx$1, a4 as escape_html } from './index-server.js-CFhxFuri.js';

//#region src/lib/components/section-heading.svelte
function Section_heading($$renderer, $$props) {
	let { title, subtitle, eyebrow, align = "center", rule = false } = $$props;
	$$renderer.push(`<div${attr_class(clsx$1(align === "center" ? "mx-auto max-w-2xl text-center" : ""))}>`);
	if (eyebrow) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p${attr_class(`eyebrow ${align === "center" ? "" : "eyebrow-left"} mb-6`)}>${escape_html(eyebrow)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <h2 class="text-3xl md:text-4xl">${escape_html(title)}</h2> `);
	if (rule) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="reveal-rule mt-4 h-px w-16 bg-primary"></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> `);
	if (subtitle) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="text-champagne mt-4 font-sans text-lg italic opacity-90 md:text-xl">${escape_html(subtitle)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div>`);
}

export { Section_heading as S };
//# sourceMappingURL=section-heading.js-DGc3kgw2.js.map
