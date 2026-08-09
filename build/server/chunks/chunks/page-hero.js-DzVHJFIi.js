import { a3 as attr_class, Z as ensure_array_like, T as attr, a4 as escape_html, F as derived } from './index-server.js-CFhxFuri.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region src/lib/components/page-hero.svelte
function Page_hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { hero, slideshow = [], size = "md", scrollCue = false, children } = $$props;
		const slides = derived(() => slideshow.length ? slideshow : [{
			src: hero.image,
			alt: hero.imageAlt
		}]);
		let active = 0;
		const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		$$renderer.push(`<section${attr_class(`relative isolate overflow-hidden ${size === "lg" ? "py-16 lg:py-44" : "py-28 lg:py-36"}`)}><div${attr_class(`absolute inset-0 -z-20 ${reduceMotion ? "" : "hero-pan"}`)}><!--[-->`);
		const each_array = ensure_array_like(slides());
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let slide = each_array[i];
			$$renderer.push(`<img${attr("src", assetUrl(slide.src))}${attr("alt", i === 0 ? slide.alt ?? "" : "")}${attr("aria-hidden", i === 0 ? void 0 : true)}${attr("loading", i === 0 ? "eager" : "lazy")}${attr_class(`absolute inset-0 h-full w-full object-cover transition-opacity duration-2200 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`)}/>`);
		}
		$$renderer.push(`<!--]--></div> <div class="enter-fade from-void/85 via-void/60 to-void/92 absolute inset-0 -z-10 bg-linear-to-b" style="--enter-duration: 1400ms"></div> <div class="spotlight -z-10" style="--spot-x: 22%; --spot-y: 30%"></div> <div class="spotlight -z-10" style="--spot-x: 82%; --spot-y: 75%; --spot-color: var(--burgundy-glow)"></div> <div class="container mx-auto px-4 text-center sm:px-6">`);
		if (hero.eyebrow) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="eyebrow enter-down text-gold-light mb-8" style="--enter-delay: 150ms">${escape_html(hero.eyebrow)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <h1${attr_class(`enter-rise text-shimmer mx-auto max-w-4xl text-balance ${size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"}`)} style="--enter-delay: 250ms">${escape_html(hero.title)} `);
		if (hero.titleAccent) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="font-sans text-gold-light block text-[0.6em] normal-case italic">${escape_html(hero.titleAccent)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></h1> `);
		if (hero.tagline) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="enter-up mt-6 font-sans text-2xl text-champagne italic md:text-3xl" style="--enter-delay: 380ms">${escape_html(hero.tagline)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (hero.body) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="enter-up mx-auto mt-8 max-w-2xl text-lg text-white/80" style="--enter-delay: 520ms">${escape_html(hero.body)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		children?.($$renderer);
		$$renderer.push(`<!----></div> `);
		if (slides().length > 1) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-2"><!--[-->`);
			const each_array_1 = ensure_array_like(slides());
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				each_array_1[i];
				$$renderer.push(`<span${attr_class(`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-white/40"}`)}></span>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else if (scrollCue) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div class="enter-fade pointer-events-none absolute inset-x-0 bottom-6 flex justify-center" style="--enter-delay: 1400ms"><span class="flex h-9 w-6 items-start justify-center rounded-full border border-white/35 p-1.5"><span class="h-1.5 w-1 animate-scroll-cue rounded-full bg-primary"></span></span></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section>`);
	});
}

export { Page_hero as P };
//# sourceMappingURL=page-hero.js-DzVHJFIi.js.map
