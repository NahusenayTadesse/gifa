import { Z as ensure_array_like, T as attr, a3 as attr_class, a4 as escape_html } from './index-server.js-CFhxFuri.js';
import { C as Carousel, G as GalleryLightbox, a as Carousel_content, b as Carousel_item, c as Carousel_previous, d as Carousel_next, E as Expand } from './GalleryLightbox.js-YDp41Mru.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region src/lib/components/image-gallery.svelte
function Image_gallery($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { images, label = "Image gallery", openOn = "centered" } = $$props;
		let api = void 0;
		let selected = 0;
		let loaded = [];
		let lightboxOpen = false;
		let lightboxIndex = 0;
		const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="relative">`);
			if (Carousel) {
				$$renderer.push("<!--[-->");
				Carousel($$renderer, {
					setApi: (embla) => api = embla,
					opts: {
						loop: true,
						align: "center",
						duration: reduceMotion ? 0 : 26
					},
					"aria-label": label,
					children: ($$renderer) => {
						if (Carousel_content) {
							$$renderer.push("<!--[-->");
							Carousel_content($$renderer, {
								class: "-ml-4 py-4 sm:-ml-6 sm:py-6",
								children: ($$renderer) => {
									$$renderer.push(`<!--[-->`);
									const each_array = ensure_array_like(images);
									for (let i = 0, $$length = each_array.length; i < $$length; i++) {
										let image = each_array[i];
										const active = i === selected;
										if (Carousel_item) {
											$$renderer.push("<!--[-->");
											Carousel_item($$renderer, {
												class: "basis-[72%] pl-4 sm:basis-[46%] sm:pl-6 lg:basis-[34%]",
												children: ($$renderer) => {
													$$renderer.push(`<figure data-gallery-slide=""${attr("data-active", active)} style="transform: scale(var(--depth-scale, 1)); opacity: var(--depth-opacity, 1); filter: blur(var(--depth-blur, 0px));" class="group relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_2px_12px_-6px_rgb(0_0_0/0.4)] transition-[box-shadow] duration-500 will-change-[transform,opacity] data-[active=true]:shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]"><img${attr("src", assetUrl(image.src))}${attr("alt", image.alt)}${attr("loading", i < 2 ? "eager" : "lazy")} decoding="async" draggable="false"${attr_class(`pointer-events-none h-full w-full scale-[1.02] object-cover transition-[transform,opacity,filter] duration-[900ms] ease-out group-hover:scale-[1.09] ${loaded[i] ? "opacity-100 blur-0" : "opacity-0 blur-lg"}`)} onload="this.__e=event"/> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-95 group-data-[active=true]:opacity-85"></div> <div class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset"></div> <div class="pointer-events-none absolute top-4 right-4 flex size-9 scale-90 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-data-[active=true]:opacity-100">`);
													Expand($$renderer, { class: "size-4" });
													$$renderer.push(`<!----></div> `);
													if (image.caption) {
														$$renderer.push("<!--[0-->");
														$$renderer.push(`<figcaption class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 text-[0.9375rem] leading-snug font-medium text-balance text-white opacity-0 transition-[transform,opacity] duration-500 ease-out group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100">${escape_html(image.caption)}</figcaption>`);
													} else $$renderer.push("<!--[-1-->");
													$$renderer.push(`<!--]--> <button type="button"${attr("aria-label", i === selected ? `Open ${image.caption ?? image.alt} full screen` : `Show image ${i + 1} of ${images.length}`)}${attr("aria-current", i === selected ? "true" : void 0)} class="absolute inset-0 rounded-3xl focus-visible:-outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"></button></figure>`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(`<!--]-->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (images.length > 1) {
							$$renderer.push("<!--[0-->");
							if (Carousel_previous) {
								$$renderer.push("<!--[-->");
								Carousel_previous($$renderer, { class: "-left-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-left-5" });
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Carousel_next) {
								$$renderer.push("<!--[-->");
								Carousel_next($$renderer, { class: "-right-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-right-5" });
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> `);
			GalleryLightbox($$renderer, {
				images,
				onclose: (i) => api?.scrollTo(i, true),
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

export { Image_gallery as I };
//# sourceMappingURL=image-gallery.js-3BPnAt35.js.map
