import { T as attributes, U as clsx$1, a0 as bind_props, _ as spread_props, E as setContext, a4 as escape_html, S as hasContext, M as getContext, V as ensure_array_like, X as attr, a2 as attr_class } from './index-server.js-G-77DcSL.js';
import { I as Icon } from './Icon.js-DGpwHSC6.js';
import { C as Chevron_left, a as Chevron_right } from './chevron-right.js-CDa_K5Qm.js';
import { X } from './x.js-Bu-evnKT.js';
import { c as cn, B as Button } from './button.js-CVHOzf19.js';
import { P as Portal } from './scroll-lock.js-B2UsFhK8.js';
import { D as Dialog, d as Dialog_overlay, a as Dialog_content, e as Dialog_title, b as Dialog_close } from './dialog-content.js-Bk31zkZ0.js';
import { D as Dialog_description } from './dialog-description.js-B7R2haCG.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/expand.svelte
function Expand($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "expand" },
		props,
		{ iconNode: [
			["path", { "d": "m15 15 6 6" }],
			["path", { "d": "m15 9 6-6" }],
			["path", { "d": "M21 16v5h-5" }],
			["path", { "d": "M21 8V3h-5" }],
			["path", { "d": "M3 16v5h5" }],
			["path", { "d": "m3 21 6-6" }],
			["path", { "d": "M3 8V3h5" }],
			["path", { "d": "M9 9 3 3" }]
		] }
	]));
}
//#endregion
//#region src/lib/components/ui/carousel/context.ts
var EMBLA_CAROUSEL_CONTEXT = Symbol("EMBLA_CAROUSEL_CONTEXT");
function setEmblaContext(config) {
	setContext(EMBLA_CAROUSEL_CONTEXT, config);
	return config;
}
function getEmblaContext(name = "This component") {
	if (!hasContext(EMBLA_CAROUSEL_CONTEXT)) throw new Error(`${name} must be used within a <Carousel.Root> component`);
	return getContext(EMBLA_CAROUSEL_CONTEXT);
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-content.svelte
function Carousel_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Content/>");
		$$renderer.push(`<div data-slot="carousel-content" class="overflow-hidden"><div${attributes({
			class: clsx$1(cn("flex", emblaCtx.orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className)),
			"data-embla-container": "",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-item.svelte
function Carousel_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Item/>");
		$$renderer.push(`<div${attributes({
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: clsx$1(cn("min-w-0 shrink-0 grow-0 basis-full", emblaCtx.orientation === "horizontal" ? "ps-4" : "pt-4", className)),
			"data-embla-slide": "",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-next.svelte
function Carousel_next($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, variant = "outline", size = "icon-sm", $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Next/>");
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Button($$renderer, spread_props([
				{
					"data-slot": "carousel-next",
					variant,
					size,
					"aria-disabled": !emblaCtx.canScrollNext,
					disabled: !emblaCtx.canScrollNext,
					class: cn("cn-carousel-next absolute touch-manipulation", emblaCtx.orientation === "horizontal" ? "inset-y-0 -end-12 my-auto" : "start-1/2 -bottom-12 -translate-x-1/2 rotate-90", className),
					onclick: emblaCtx.scrollNext,
					onkeydown: emblaCtx.handleKeyDown
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						Chevron_right($$renderer, {});
						$$renderer.push(`<!----> <span class="sr-only">Next slide</span>`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-previous.svelte
function Carousel_previous($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, variant = "outline", size = "icon-sm", $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Previous/>");
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Button($$renderer, spread_props([
				{
					"data-slot": "carousel-previous",
					variant,
					size,
					"aria-disabled": !emblaCtx.canScrollPrev,
					disabled: !emblaCtx.canScrollPrev,
					class: cn("cn-carousel-previous absolute touch-manipulation", emblaCtx.orientation === "horizontal" ? "inset-y-0 -start-12 my-auto" : "start-1/2 -top-12 -translate-x-1/2 rotate-90", className),
					onclick: emblaCtx.scrollPrev,
					onkeydown: emblaCtx.handleKeyDown
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						Chevron_left($$renderer, {});
						$$renderer.push(`<!----> <span class="sr-only">Previous slide</span>`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel.svelte
function Carousel($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, opts = {}, plugins = [], setApi = () => {}, orientation = "horizontal", class: className, children, $$slots, $$events, ...restProps } = $$props;
		let carouselState = {
			api: void 0,
			scrollPrev,
			scrollNext,
			orientation,
			canScrollNext: false,
			canScrollPrev: false,
			handleKeyDown,
			options: opts,
			plugins,
			onInit,
			scrollSnaps: [],
			selectedIndex: 0,
			scrollTo
		};
		setEmblaContext(carouselState);
		function scrollPrev() {
			carouselState.api?.scrollPrev();
		}
		function scrollNext() {
			carouselState.api?.scrollNext();
		}
		function scrollTo(index, jump) {
			carouselState.api?.scrollTo(index, jump);
		}
		function onSelect() {
			if (!carouselState.api) return;
			carouselState.selectedIndex = carouselState.api.selectedScrollSnap();
			carouselState.canScrollNext = carouselState.api.canScrollNext();
			carouselState.canScrollPrev = carouselState.api.canScrollPrev();
		}
		function handleKeyDown(e) {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				scrollPrev();
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				scrollNext();
			}
		}
		function onInit(event) {
			carouselState.api = event.detail;
			setApi(carouselState.api);
			carouselState.scrollSnaps = carouselState.api.scrollSnapList();
			carouselState.api.on("select", onSelect);
			onSelect();
		}
		$$renderer.push(`<div${attributes({
			"data-slot": "carousel",
			class: clsx$1(cn("relative", className)),
			role: "region",
			"aria-roledescription": "carousel",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/GalleryLightbox.svelte
function GalleryLightbox($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { images, open = false, index = 0, onclose } = $$props;
		let loaded = [];
		const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		function onOpenChange(next) {
			if (!next) onclose?.(index);
		}
		/** Only the current image and its neighbours are worth fetching eagerly. */
		const eager = (i) => Math.min(Math.abs(i - index), images.length - Math.abs(i - index)) <= 1;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					onOpenChange,
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Portal) {
							$$renderer.push("<!--[-->");
							Portal($$renderer, {
								children: ($$renderer) => {
									if (Dialog_overlay) {
										$$renderer.push("<!--[-->");
										Dialog_overlay($$renderer, { class: "fixed inset-0 z-50 bg-black/92 backdrop-blur-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" });
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Dialog_content) {
										$$renderer.push("<!--[-->");
										Dialog_content($$renderer, {
											class: "fixed inset-0 z-50 flex flex-col outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														class: "sr-only",
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(images[index]?.caption ?? images[index]?.alt ?? "Image viewer")}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` `);
												if (Dialog_description) {
													$$renderer.push("<!--[-->");
													Dialog_description($$renderer, {
														class: "sr-only",
														children: ($$renderer) => {
															$$renderer.push(`<!---->Image ${escape_html(index + 1)} of ${escape_html(images.length)}. Use the arrow keys to move between images, Escape to
				close.`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` <header class="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6"><span class="text-sm font-medium tabular-nums text-white/60">${escape_html(index + 1)} / ${escape_html(images.length)}</span> `);
												if (Dialog_close) {
													$$renderer.push("<!--[-->");
													Dialog_close($$renderer, {
														class: "flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:rotate-90 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
														"aria-label": "Close image viewer",
														children: ($$renderer) => {
															X($$renderer, { class: "size-5" });
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(`</header> `);
												if (Carousel) {
													$$renderer.push("<!--[-->");
													Carousel($$renderer, {
														setApi: (embla) => embla,
														opts: {
															loop: true,
															duration: reduceMotion ? 0 : 22
														},
														"aria-label": "Full screen image viewer",
														class: "min-h-0 flex-1",
														children: ($$renderer) => {
															if (Carousel_content) {
																$$renderer.push("<!--[-->");
																Carousel_content($$renderer, {
																	class: "ml-0",
																	children: ($$renderer) => {
																		$$renderer.push(`<!--[-->`);
																		const each_array = ensure_array_like(images);
																		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
																			let image = each_array[i];
																			if (Carousel_item) {
																				$$renderer.push("<!--[-->");
																				Carousel_item($$renderer, {
																					class: "basis-full pl-0",
																					children: ($$renderer) => {
																						$$renderer.push(`<div class="flex h-[calc(100dvh-11rem)] items-center justify-center px-5 sm:px-16"><img${attr("src", assetUrl(image.full ?? image.src))}${attr("alt", image.alt)}${attr("loading", eager(i) ? "eager" : "lazy")} decoding="async" draggable="false"${attr_class(`max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-500 ${loaded[i] ? "opacity-100" : "opacity-0"}`)} onload="this.__e=event"/></div>`);
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
																	Carousel_previous($$renderer, { class: "left-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:left-6" });
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
																$$renderer.push(` `);
																if (Carousel_next) {
																	$$renderer.push("<!--[-->");
																	Carousel_next($$renderer, { class: "right-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:right-6" });
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
												$$renderer.push(` <footer class="px-5 pb-8 text-center sm:px-8">`);
												if (images[index]?.caption) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<p class="mx-auto max-w-2xl text-sm leading-relaxed text-balance text-white/75">${escape_html(images[index].caption)}</p>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--></footer>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								}});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			open,
			index
		});
	});
}

export { Carousel as C, Expand as E, GalleryLightbox as G, Carousel_content as a, Carousel_item as b, Carousel_previous as c, Carousel_next as d };
//# sourceMappingURL=GalleryLightbox.js-D11cBi9E.js.map
