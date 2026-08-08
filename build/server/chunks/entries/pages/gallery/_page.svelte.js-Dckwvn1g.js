import { U as head, a3 as attr_class, Z as ensure_array_like, a4 as escape_html, T as attr, F as derived } from '../../../chunks/index-server.js-CFhxFuri.js';
import { E as Expand, G as GalleryLightbox } from '../../../chunks/GalleryLightbox.js-BF9tGUo2.js';
import { a as assetUrl } from '../../../chunks/assets.js-DVYtCFUU.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-BQDGh9xP.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../chunks/x.js-Ban1Odu2.js';
import '../../../chunks/button.js-tGj5Lmrq.js';
import '../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/create-id.js-BocO_oFE.js';
import '../../../chunks/noop.js-vWrzhrAx.js';
import '../../../chunks/is.js-D78pHSN-.js';
import '../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../chunks/dialog-description.js-DmqX_l-i.js';

//#region src/routes/gallery/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const contextLabels = {
			food: "Food",
			drink: "Drink",
			interior: "The room",
			event: "Events",
			team: "Team"
		};
		const contexts = derived(() => Array.from(new Set(data.images.map((i) => i.context))).filter((c) => c in contextLabels));
		let active = "all";
		const filtered = derived(() => data.images);
		let lightboxOpen = false;
		let lightboxIndex = 0;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("16h6p05", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Gallery | Gifa Restaurant &amp; Lounge</title>`);
				});
				$$renderer.push(`<meta name="description" content="A look inside Gifa — the food, the coffee ceremony, the lounge at night, and past events. Seven Sisters Road, N15."/>`);
			});
			if (data.hero) {
				$$renderer.push("<!--[0-->");
				Page_hero($$renderer, { hero: data.hero });
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<section class="relative isolate overflow-hidden border-b border-border py-20 text-center"><div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div> <div class="container mx-auto px-4 sm:px-6"><p class="eyebrow">In the room</p> <h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Gallery</h1> <p class="mx-auto mt-4 max-w-2xl text-muted-foreground">The food, the coffee ceremony, the lounge after dark — a look at Gifa before you book.</p></div></section>`);
			}
			$$renderer.push(`<!--]--> `);
			if (contexts().length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur"><div class="container mx-auto flex flex-wrap gap-2 px-4 py-4 sm:px-6"><button${attr_class(`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors border-primary bg-primary text-primary-foreground`)}>All</button> <!--[-->`);
				const each_array = ensure_array_like(contexts());
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let context = each_array[$$index];
					$$renderer.push(`<button${attr_class(`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors ${active === context ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`)}>${escape_html(contextLabels[context] ?? context)}</button>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <section class="py-14"><div class="container mx-auto px-4 sm:px-6">`);
			if (filtered().length) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<!---->`);
				{
					$$renderer.push(`<div class="columns-2 gap-4 sm:columns-3 lg:columns-4"><!--[-->`);
					const each_array_1 = ensure_array_like(filtered());
					for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
						let image = each_array_1[i];
						$$renderer.push(`<button type="button" class="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border text-left break-inside-avoid"><img${attr("src", assetUrl(image.src))}${attr("alt", image.alt ?? "")} loading="lazy" decoding="async" class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"></div> <div class="pointer-events-none absolute top-3 right-3 flex size-8 scale-90 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">`);
						Expand($$renderer, { class: "size-4" });
						$$renderer.push(`<!----></div> `);
						if (image.caption || image.place) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<div class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-3 text-xs font-medium text-white opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100">${escape_html(image.caption ?? image.place)}</div>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></button>`);
					}
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<p class="text-center text-muted-foreground">No photos here yet — check back soon.</p>`);
			}
			$$renderer.push(`<!--]--></div></section> `);
			GalleryLightbox($$renderer, {
				images: filtered(),
				get open() {
					return lightboxOpen;
				},
				set open($$value) {
					lightboxOpen = $$value;
					$$settled = false;
				},
				get index() {
					return lightboxIndex;
				},
				set index($$value) {
					lightboxIndex = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Dckwvn1g.js.map
