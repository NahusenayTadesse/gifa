import { Y as head, V as ensure_array_like, X as attr, a3 as stringify, a4 as escape_html } from '../../../chunks/index-server.js-G-77DcSL.js';
import { A as Arrow_right } from '../../../chunks/arrow-right.js-BFDDLaWX.js';
import { C as Calendar_days } from '../../../chunks/calendar-days.js-BLalSm1t.js';
import { T as Ticket } from '../../../chunks/ticket.js-DrbbAo6D.js';
import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { a as assetUrl } from '../../../chunks/assets.js-DVYtCFUU.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-wShaoZt0.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-BbSbdCg2.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-DGpwHSC6.js';

//#region src/routes/events/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
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
		head("13hsgdq", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Events | Gifa Restaurant &amp; Lounge</title>`);
			});
			$$renderer.push(`<meta name="description" content="Live music, DJ nights and coffee ceremonies coming up at Gifa — Seven Sisters Road, N15."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="relative isolate overflow-hidden border-b border-border py-20 text-center"><div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div> <div class="container mx-auto px-4 sm:px-6"><p class="eyebrow">What's on</p> <h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Events</h1> <p class="mx-auto mt-4 max-w-2xl text-muted-foreground">Live music, DJ nights and coffee ceremonies — here's what's coming up at the lounge.</p></div></section>`);
		}
		$$renderer.push(`<!--]--> <section class="py-14"><div class="container mx-auto px-4 sm:px-6">`);
		if (!data.hero) {
			$$renderer.push("<!--[0-->");
			Section_heading($$renderer, {
				eyebrow: "What's on",
				title: "Upcoming events",
				rule: true
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.events.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			const each_array = ensure_array_like(data.events);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let event = each_array[i];
				$$renderer.push(`<article class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"><a${attr("href", `/events/${stringify(event.slug)}`)} class="block">`);
				if (event.posterImage) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="aspect-4/3 w-full overflow-hidden"><img${attr("src", assetUrl(event.posterImage))}${attr("alt", event.title)} loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></a> <div class="flex flex-1 flex-col p-5">`);
				if (event.eventType) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="eyebrow mb-2">${escape_html(event.eventType)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <h3 class="font-heading text-xl font-semibold"><a${attr("href", `/events/${stringify(event.slug)}`)} class="hover:text-primary">${escape_html(event.title)}</a></h3> <p class="mt-2 flex items-center gap-2 text-sm text-muted-foreground">`);
				Calendar_days($$renderer, { class: "size-4 shrink-0" });
				$$renderer.push(`<!----> ${escape_html(formatDate(event.startsAt))} · ${escape_html(formatTime(event.startsAt))}</p> `);
				if (event.description) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="mt-3 line-clamp-3 text-sm text-muted-foreground">${escape_html(event.description)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <div class="mt-4 flex flex-wrap items-center gap-3">`);
				Button($$renderer, {
					href: `/events/${stringify(event.slug)}`,
					size: "sm",
					class: "group/btn gap-1.5",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Details &amp; register `);
						Arrow_right($$renderer, { class: "size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" });
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				if (event.ticketUrl) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<a${attr("href", event.ticketUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase hover:underline">`);
					Ticket($$renderer, { class: "size-3.5" });
					$$renderer.push(`<!----> Tickets / RSVP</a>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div></div></article>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<p class="mt-10 text-center text-muted-foreground">Nothing on the calendar right now — check back soon, or follow us for announcements.</p>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-CYfaw2aJ.js.map
