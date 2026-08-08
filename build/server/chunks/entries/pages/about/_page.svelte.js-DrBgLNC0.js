import { U as head, $ as spread_props } from '../../../chunks/index-server.js-CFhxFuri.js';
import { I as Icon } from '../../../chunks/Icon.js-BJJlMSR3.js';
import { U as Users } from '../../../chunks/users.js-Cxe6njEC.js';
import { U as Utensils_crossed } from '../../../chunks/utensils-crossed.js-DwvIhdDL.js';
import { F as Faq_section } from '../../../chunks/faq-section.js-CiNyirj5.js';
import { I as Image_gallery } from '../../../chunks/image-gallery.js-Cw5Gn-KY.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-BQDGh9xP.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-DGc3kgw2.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../chunks/create-id.js-BocO_oFE.js';
import '../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../chunks/button.js-tGj5Lmrq.js';
import '../../../chunks/noop.js-vWrzhrAx.js';
import '../../../chunks/is.js-D78pHSN-.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/GalleryLightbox.js-BF9tGUo2.js';
import '../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../chunks/x.js-Ban1Odu2.js';
import '../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../chunks/dialog-description.js-DmqX_l-i.js';
import '../../../chunks/assets.js-DVYtCFUU.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/accessibility.svelte
function Accessibility($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "accessibility" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "16",
				"cy": "4",
				"r": "1"
			}],
			["path", { "d": "m18 19 1-7-6 1" }],
			["path", { "d": "m5 8 3-3 5.5 3-2.36 3.5" }],
			["path", { "d": "M4.24 14.5a5 5 0 0 0 6.88 6" }],
			["path", { "d": "M13.76 17.5a5 5 0 0 0-6.88-6" }]
		] }
	]));
}
//#endregion
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>About Us | Gifa Restaurant &amp; Lounge, Seven Sisters</title>`);
			});
			$$renderer.push(`<meta name="description" content="Traditional Eritrean and Ethiopian cooking, a coffee ceremony and a late lounge — seven minutes from Seven Sisters station."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div class="group overflow-hidden rounded-2xl border border-border shadow-sm"><img src="/image1.webp" alt="A shared plate of dishes on the table at Gifa" class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"/></div> <div>`);
		Section_heading($$renderer, {
			title: "A little of home on Seven Sisters Road",
			align: "start",
			rule: true
		});
		$$renderer.push(`<!----> <p class="mt-6 text-lg text-muted-foreground">Gifa opened to give North London somewhere that feels like the Horn of Africa at its most
					generous — big shared plates, coffee that takes an hour, and a welcome that doesn't check
					the clock.</p> <p class="mt-4 text-muted-foreground">Our kitchen cooks Eritrean and Ethiopian food the traditional way. The berbere is blended
					to our own recipe. The stews are cooked down slowly, never rushed. The injera arrives fresh
					and folded, and there are no knives and forks unless you'd like them.</p></div></div></div></section> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, { title: "Two rooms, one evening" });
		$$renderer.push(`<!----> <div class="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2"><div class="group text-center"><div class="overflow-hidden rounded-2xl border border-border"><img src="/image6.webp" alt="The main dining room at Gifa" class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"/></div> `);
		Utensils_crossed($$renderer, { class: "mx-auto mt-5 size-8 text-primary" });
		$$renderer.push(`<!----> <h3 class="mt-3 text-xl font-semibold">The restaurant</h3> <p class="mt-2 text-sm text-muted-foreground">For eating — daytime coffee, breakfast, long lunches, family dinners.</p></div> <div class="group text-center"><div class="overflow-hidden rounded-2xl border border-border"><img src="/image5.webp" alt="A glowing 'Lounge' sign at Gifa" class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"/></div> `);
		Users($$renderer, { class: "mx-auto mt-5 size-8 text-primary" });
		$$renderer.push(`<!----> <h3 class="mt-3 text-xl font-semibold">The lounge</h3> <p class="mt-2 text-sm text-muted-foreground">For what comes after: cocktails, music and a room that stays warm well into the evening.</p></div></div> <p class="mx-auto mt-12 max-w-2xl text-center text-muted-foreground">Both are halal, and there's always a full plant-based menu — Eritrean and Ethiopian cooking
			has been feeding vegans beautifully for centuries, long before anyone called it that.</p></div></section> <section class="relative isolate overflow-hidden py-20 text-primary-foreground"><img src="/coffee.webp" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover"/> <div class="absolute inset-0 -z-10 bg-primary/90"></div> <div class="spotlight -z-10" style="--spot-x: 65%; --spot-y: 40%"></div> <div class="container mx-auto px-4 text-center sm:px-6"><div>`);
		Accessibility($$renderer, { class: "mx-auto size-8" });
		$$renderer.push(`<!----></div> <h2 class="mt-4 font-heading text-3xl font-bold md:text-4xl">Everyone's welcome</h2> <p class="mx-auto mt-4 max-w-2xl text-lg opacity-90">Wheelchair-accessible facilities, high chairs for the little ones, big tables for big groups,
			and staff happy to walk first-timers through the menu dish by dish. If you've never eaten
			with injera before, tell us — it's one of our favourite parts of the job.</p></div></section> `);
		if (data.gallery.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				title: "The room",
				subtitle: "A look inside Gifa."
			});
			$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
			Image_gallery($$renderer, { images: data.gallery });
			$$renderer.push(`<!----></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			eyebrow: "A Few Questions",
			subtitle: "More about who we are and how we work."
		});
		$$renderer.push(`<!---->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-DrBgLNC0.js.map
