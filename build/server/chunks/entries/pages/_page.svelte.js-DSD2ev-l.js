import { U as head, Z as ensure_array_like, a4 as escape_html, a5 as attr_style, $ as spread_props, T as attr, a2 as stringify } from '../../chunks/index-server.js-CFhxFuri.js';
import { I as Icon } from '../../chunks/Icon.js-BJJlMSR3.js';
import { A as Arrow_right } from '../../chunks/arrow-right.js-C8fGeBgu.js';
import { C as Calendar_days } from '../../chunks/calendar-days.js-DCVRLhlw.js';
import { C as Carousel, a as Carousel_content, d as Carousel_item, b as Carousel_previous, c as Carousel_next } from '../../chunks/GalleryLightbox.js-BF9tGUo2.js';
import { S as Shield_check, L as Leaf } from '../../chunks/shield-check.js-Dg3-okBD.js';
import { P as Party_popper } from '../../chunks/party-popper.js-BLe8JzLN.js';
import { T as Ticket } from '../../chunks/ticket.js-BN3MB491.js';
import { U as Utensils_crossed } from '../../chunks/utensils-crossed.js-DwvIhdDL.js';
import { B as Button } from '../../chunks/button.js-tGj5Lmrq.js';
import { F as Faq_section } from '../../chunks/faq-section.js-CiNyirj5.js';
import { a as assetUrl } from '../../chunks/assets.js-DVYtCFUU.js';
import { I as Image_gallery } from '../../chunks/image-gallery.js-Cw5Gn-KY.js';
import { P as Page_hero } from '../../chunks/page-hero.js-DzVHJFIi.js';
import { S as Section_heading } from '../../chunks/section-heading.js-DGc3kgw2.js';
import '../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../chunks/uneval.js-CatQk29t.js';
import '../../chunks/chevron-right.js-CoPqOygK.js';
import '../../chunks/x.js-Ban1Odu2.js';
import '../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../chunks/index-server2.js-BPx0mTfA.js';
import '../../chunks/create-id.js-BocO_oFE.js';
import '../../chunks/noop.js-vWrzhrAx.js';
import '../../chunks/is.js-D78pHSN-.js';
import '../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../chunks/dialog-description.js-DmqX_l-i.js';
import '../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../chunks/chevron-up.js-DW_r37Xs.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/credit-card.svelte
function Credit_card($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "credit-card" },
		props,
		{ iconNode: [["rect", {
			"width": "20",
			"height": "14",
			"x": "2",
			"y": "5",
			"rx": "2"
		}], ["line", {
			"x1": "2",
			"x2": "22",
			"y1": "10",
			"y2": "10"
		}]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/train-front.svelte
function Train_front($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "train-front" },
		props,
		{ iconNode: [
			["path", { "d": "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
			["path", { "d": "m9 15-1-1" }],
			["path", { "d": "m15 15 1-1" }],
			["path", { "d": "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }],
			["path", { "d": "m8 19-2 3" }],
			["path", { "d": "m16 19 2 3" }]
		] }
	]));
}
//#endregion
//#region src/lib/components/events-carousel.svelte
function Events_carousel($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { events, label = "Upcoming events" } = $$props;
		const dateFormatter = new Intl.DateTimeFormat("en-GB", {
			weekday: "short",
			day: "numeric",
			month: "short"
		});
		const timeFormatter = new Intl.DateTimeFormat("en-GB", {
			hour: "numeric",
			minute: "2-digit"
		});
		const formatDate = (value) => dateFormatter.format(new Date(value));
		const formatTime = (value) => timeFormatter.format(new Date(value));
		$$renderer.push(`<div class="relative">`);
		if (Carousel) {
			$$renderer.push("<!--[-->");
			Carousel($$renderer, {
				setApi: (embla) => embla,
				opts: {
					loop: events.length > 2,
					align: "start"
				},
				"aria-label": label,
				children: ($$renderer) => {
					if (Carousel_content) {
						$$renderer.push("<!--[-->");
						Carousel_content($$renderer, {
							class: "-ml-4 py-2 sm:-ml-6",
							children: ($$renderer) => {
								$$renderer.push(`<!--[-->`);
								const each_array = ensure_array_like(events);
								for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
									let event = each_array[$$index];
									if (Carousel_item) {
										$$renderer.push("<!--[-->");
										Carousel_item($$renderer, {
											class: "basis-[82%] pl-4 sm:basis-[55%] sm:pl-6 lg:basis-[38%]",
											children: ($$renderer) => {
												$$renderer.push(`<a${attr("href", `/events/${stringify(event.slug)}`)} class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"><div class="aspect-4/3 w-full overflow-hidden bg-muted">`);
												if (event.posterImage) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<img${attr("src", assetUrl(event.posterImage))}${attr("alt", event.title)} loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--></div> <div class="flex flex-1 flex-col p-5 text-left">`);
												if (event.eventType) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<p class="eyebrow mb-2">${escape_html(event.eventType)}</p>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--> <h3 class="font-heading text-lg font-semibold">${escape_html(event.title)}</h3> <p class="mt-2 flex items-center gap-2 text-sm text-muted-foreground">`);
												Calendar_days($$renderer, { class: "size-4 shrink-0" });
												$$renderer.push(`<!----> ${escape_html(formatDate(event.startsAt))} · ${escape_html(formatTime(event.startsAt))}</p> `);
												if (event.description) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<p class="mt-3 line-clamp-2 text-sm text-muted-foreground">${escape_html(event.description)}</p>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--> `);
												if (event.ticketUrl) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<p class="text-primary mt-4 inline-flex items-center gap-2 self-start text-xs font-medium tracking-wide uppercase">`);
													Ticket($$renderer, { class: "size-3.5" });
													$$renderer.push(`<!----> Tickets / RSVP</p>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--></div></a>`);
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
					if (events.length > 1) {
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
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/lib/components/marquee.svelte
function Marquee($$renderer, $$props) {
	/**
	* An infinite scrolling ticker, like the neon signage strip above a lounge
	* bar. The item list is rendered twice back to back and the track scrolls
	* exactly -50%, so the loop seam is invisible.
	*/
	let { items, duration = 28, separator = "✦" } = $$props;
	$$renderer.push(`<div class="marquee-row overflow-hidden border-y border-primary/20 bg-primary/5 py-3" aria-hidden="true"><div class="marquee-track flex w-max items-center gap-8"${attr_style(`--marquee-duration: ${stringify(duration)}s`)}><!--[-->`);
	const each_array = ensure_array_like([0, 1]);
	for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
		each_array[$$index_1];
		$$renderer.push(`<div class="flex items-center gap-8 pr-8"><!--[-->`);
		const each_array_1 = ensure_array_like(items);
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			let item = each_array_1[$$index];
			$$renderer.push(`<span class="eyebrow flex items-center gap-8 whitespace-nowrap text-primary/90">${escape_html(item)} <span class="text-primary/40">${escape_html(separator)}</span></span>`);
		}
		$$renderer.push(`<!--]--></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const trustStrip = [
			{
				icon: Shield_check,
				label: "Halal kitchen"
			},
			{
				icon: Leaf,
				label: "Vegan & vegetarian menu"
			},
			{
				icon: Train_front,
				label: "7 min walk from Seven Sisters"
			},
			{
				icon: Utensils_crossed,
				label: "Dine in · Takeaway · Delivery"
			},
			{
				icon: Party_popper,
				label: "Private lounge hire"
			},
			{
				icon: Credit_card,
				label: "Card & contactless"
			}
		];
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Gifa Restaurant &amp; Lounge | Eritrean &amp; Ethiopian Food, Seven Sisters N15</title>`);
			});
			$$renderer.push(`<meta name="description" content="Halal Eritrean and Ethiopian restaurant and cocktail lounge on Seven Sisters Road, N15. Injera, vegan platters, coffee ceremony and private hire. Book a table."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, {
				hero: data.hero,
				slideshow: data.heroSlideshow,
				size: "lg",
				scrollCue: true,
				children: ($$renderer) => {
					$$renderer.push(`<div class="enter-up mt-10 flex flex-wrap items-center justify-center gap-4" style="--enter-delay: 680ms">`);
					Button($$renderer, {
						href: "/book",
						size: "lg",
						class: "glow-gold gap-2",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Book a table `);
							Arrow_right($$renderer, { class: "size-4" });
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Button($$renderer, {
						href: "/menu",
						size: "lg",
						variant: "outline",
						class: "border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white",
						children: ($$renderer) => {
							$$renderer.push(`<!---->View the menu`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div> <div class="enter-up mt-4" style="--enter-delay: 780ms"><a href="https://www.just-eat.co.uk" target="_blank" rel="noreferrer noopener" class="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">Order delivery on Just Eat</a></div>`);
				}});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		Marquee($$renderer, { items: [
			"Halal kitchen",
			"Coffee ceremony nightly",
			"Vegan menu always on",
			"Private lounge hire",
			"Dine in · Takeaway · Delivery",
			"7 min from Seven Sisters"
		] });
		$$renderer.push(`<!----> <section class="border-b border-border py-10"><div class="container mx-auto px-4 sm:px-6"><div class="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6"><!--[-->`);
		const each_array = ensure_array_like(trustStrip);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let item = each_array[i];
			$$renderer.push(`<div class="flex flex-col items-center gap-2">`);
			if (item.icon) {
				$$renderer.push("<!--[-->");
				item.icon($$renderer, { class: "size-6 text-primary" });
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` <p class="text-xs text-muted-foreground">${escape_html(item.label)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div>`);
		Section_heading($$renderer, {
			title: "Food that takes its time",
			align: "start",
			rule: true
		});
		$$renderer.push(`<!----> <p class="mt-6 text-lg text-muted-foreground">Eritrean and Ethiopian cooking is built on patience — onions cooked down until they're
					sweet, berbere layered in slowly, spiced butter that perfumes the whole kitchen.
					Everything arrives on injera, the soft sourdough flatbread that's plate, spoon and side
					dish all at once.</p> <p class="mt-4 text-muted-foreground">Order a few dishes, put them in the middle, and eat with your hands from the same plate.
					It's the fastest way to make a table feel like a family.</p> <div>`);
		Button($$renderer, {
			href: "/menu",
			variant: "link",
			class: "group mt-2 gap-1 px-0 text-primary",
			children: ($$renderer) => {
				$$renderer.push(`<!---->See the full menu `);
				Arrow_right($$renderer, { class: "size-4 transition-transform duration-500 group-hover:translate-x-1" });
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div> <div class="group overflow-hidden rounded-2xl border border-border shadow-sm"><img src="/image2.webp" alt="A shared plate of stews at Gifa" class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div></div></div></section>  <section class="relative isolate overflow-hidden py-28"><img src="/coffee.webp" alt="Coffee beans roasting table-side at Gifa" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="scrim-ink absolute inset-0 -z-10"></div> <div class="absolute inset-0 -z-10 bg-void/60"></div> <div class="spotlight -z-10" style="--spot-x: 30%; --spot-y: 50%"></div> <div class="container mx-auto px-4 text-center sm:px-6"><p class="eyebrow text-primary">Nº 01 · The Ritual</p> <h2 class="mt-3 text-3xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:text-4xl">The coffee ceremony <span class="heading-accent">bunna · ቡና</span></h2> <p class="mx-auto mt-6 max-w-2xl text-lg text-cream drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">Coffee here isn't an afterthought at the end of a meal — it's the reason people stay for
			another hour. Green beans roasted, ground and brewed in front of you, poured from a clay
			jebena, served with the room smelling of incense.</p> <p class="mx-auto mt-4 max-w-xl text-cream/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">Ask us about it when you sit down. It takes a while. That's the point.</p> <div class="mt-8 flex justify-center"><span class="border-gold text-gold inline-block border px-6 py-3 font-heading text-sm tracking-[0.2em]">£12 · for the table</span></div></div></section> <section class="relative isolate overflow-hidden py-28"><img src="/image5.webp" alt="A glowing 'Lounge' sign at Gifa" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="scrim-ink absolute inset-0 -z-10"></div> <div class="spotlight -z-10" style="--spot-x: 70%; --spot-y: 30%"></div> <div class="container mx-auto px-4 text-center sm:px-6"><p class="eyebrow text-primary">After the plates are cleared</p> <h2 class="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">Stay for the evening</h2> <p class="mx-auto mt-6 max-w-2xl text-lg text-white/80">Gifa becomes a lounge. Cocktails, low light, music, and a room that's built for lingering —
			whether that's four of you at the end of a long week or forty of you celebrating something.</p> <div>`);
		Button($$renderer, {
			href: "/private-hire",
			size: "lg",
			class: "glow-gold mt-8",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Hire the lounge`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section> `);
		if (data.events.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				eyebrow: "What's On",
				title: "Upcoming events",
				subtitle: "Live music, DJ nights and coffee ceremonies coming up at the lounge."
			});
			$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
			Events_carousel($$renderer, {
				events: data.events,
				label: "Upcoming events"
			});
			$$renderer.push(`<!----></div> <div class="mt-8 text-center">`);
			Button($$renderer, {
				href: "/events",
				variant: "link",
				class: "group gap-1 text-primary",
				children: ($$renderer) => {
					$$renderer.push(`<!---->See all events `);
					Arrow_right($$renderer, { class: "size-4 transition-transform duration-500 group-hover:translate-x-1" });
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.gallery.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				title: "From the kitchen",
				subtitle: "A taste of what's on the table."
			});
			$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
			Image_gallery($$renderer, {
				images: data.gallery,
				label: "Food at Gifa"
			});
			$$renderer.push(`<!----></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="text-center">`);
		Button($$renderer, {
			href: "/gallery",
			variant: "link",
			class: "group gap-1 text-primary",
			children: ($$renderer) => {
				$$renderer.push(`<!---->See the full gallery `);
				Arrow_right($$renderer, { class: "size-4 transition-transform duration-500 group-hover:translate-x-1" });
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			eyebrow: "A Few Questions",
			subtitle: "The questions guests ask us most often."
		});
		$$renderer.push(`<!----> <section class="relative isolate overflow-hidden py-28"><img src="/hero.webp" alt="The dining room at Gifa Restaurant &amp; Lounge" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="absolute inset-0 -z-10 bg-linear-to-b from-black/75 via-black/70 to-black/80"></div> <div class="container mx-auto px-4 text-center sm:px-6"><h2 class="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">Table for two, or a room for fifty?</h2> <p class="mx-auto mt-4 max-w-xl text-white/85">Book online, call us, or just walk in.</p> <div class="mt-8 flex flex-wrap items-center justify-center gap-4">`);
		Button($$renderer, {
			href: "/book",
			size: "lg",
			class: "glow-gold",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Book a table`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "tel:07950786579",
			size: "lg",
			variant: "outline",
			class: "border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Call 07950 786579`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-DSD2ev-l.js.map
