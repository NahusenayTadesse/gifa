import { Y as head, V as ensure_array_like, X as attr, a3 as stringify, a4 as escape_html, a2 as attr_class, F as derived } from '../../../chunks/index-server.js-G-77DcSL.js';
import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { F as Faq_section } from '../../../chunks/faq-section.js-BppcRo9e.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-wShaoZt0.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-BbSbdCg2.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../chunks/noop.js-BLOEitT-.js';
import '../../../chunks/is.js-LX4C4ueF.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/assets.js-DVYtCFUU.js';

//#region src/lib/components/menu-item-card.svelte
function Menu_item_card($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item } = $$props;
		const tags = derived(() => [
			item.isVegan && "Vegan",
			!item.isVegan && item.isVegetarian && "Vegetarian",
			item.isSpicy && "Spicy"
		].filter(Boolean));
		$$renderer.push(`<div class="menu-row py-6 first:pt-0"><div class="mb-2 flex items-baseline gap-x-3"><h4${attr_class(`font-heading min-w-0 shrink text-lg tracking-[0.08em] uppercase ${item.isAvailable ? "text-foreground" : "text-muted-foreground line-through"}`)}>${escape_html(item.name)}</h4> <span class="menu-leader"></span> <span class="text-gold shrink-0 font-heading text-base tracking-[0.06em]">£${escape_html((item.price / 100).toFixed(2))}</span></div> `);
		if (tags().length || !item.isAvailable) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mb-1.5 flex flex-wrap gap-2"><!--[-->`);
			const each_array = ensure_array_like(tags());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let tag = each_array[$$index];
				$$renderer.push(`<span class="text-gold border-gold/40 font-heading rounded-full border px-2.5 py-0.5 text-[10px] tracking-[0.18em] uppercase">${escape_html(tag)}</span>`);
			}
			$$renderer.push(`<!--]--> `);
			if (!item.isAvailable) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<span class="rounded-full border border-destructive/50 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-destructive uppercase">Sold out tonight</span>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (item.description) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="font-sans text-[15px] leading-relaxed text-muted-foreground">${escape_html(item.description)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (item.allergens?.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-ash mt-1 font-sans text-sm italic">Contains: ${escape_html(item.allergens.join(", "))}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/routes/menu/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1uas024", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Menu | Gifa Restaurant &amp; Lounge, Tottenham N15</title>`);
			});
			$$renderer.push(`<meta name="description" content="Breakfast, lamb tibs, vegan Bebi-Aynetu and Shero, all served on fresh injera. See the full halal Eritrean and Ethiopian menu at Gifa Lounge."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="atmosphere relative isolate overflow-hidden py-20 text-center"><div class="container mx-auto px-4 sm:px-6"><p class="eyebrow text-gold-light mx-auto mb-6">The Kitchen</p> <h1 class="mx-auto max-w-2xl text-4xl md:text-5xl">Our Bill of Fare</h1> <p class="mx-auto mt-3 font-sans text-xl text-muted-foreground italic">handwritten each morning</p> <p class="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">Everything on this menu is halal. Dishes marked Vegan are fully plant-based. Please tell
				your server about any allergies before ordering — we'll talk you through every dish.</p></div></section>`);
		}
		$$renderer.push(`<!--]--> `);
		if (data.foodCategories.length || data.drinkCategories.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="border-gold/15 bg-void/95 sticky top-20 z-30 border-b backdrop-blur"><div class="relative container mx-auto"><div class="font-heading no-scrollbar flex snap-x snap-mandatory scroll-px-4 flex-nowrap gap-x-7 gap-y-2 overflow-x-auto px-4 py-4 text-[11px] tracking-[0.2em] uppercase scroll-smooth sm:flex-wrap sm:gap-x-8 sm:overflow-visible sm:px-6 sm:scroll-auto"><!--[-->`);
			const each_array = ensure_array_like([...data.foodCategories, ...data.drinkCategories]);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let category = each_array[$$index];
				$$renderer.push(`<a${attr("href", `#${stringify(category.slug)}`)} class="text-cream/60 -my-2 -mx-1 snap-start whitespace-nowrap px-1 py-2 transition-colors hover:text-gold active:text-gold">${escape_html(category.name)}</a>`);
			}
			$$renderer.push(`<!--]--></div> <div class="from-void via-void/80 pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r to-transparent sm:hidden" aria-hidden="true"></div> <div class="from-void via-void/80 pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-end bg-gradient-to-l to-transparent sm:hidden" aria-hidden="true"><svg class="text-gold/70 mr-1 h-3.5 w-3.5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.foodCategories.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				eyebrow: "Vegan, Meat & Breakfast",
				title: "Food"
			});
			$$renderer.push(`<!----> <div class="frame-corners border-gold relative mx-auto lg:mt-14 mt-4 max-w-4xl border p-2"><div class="border-gold/30 border p-8 sm:p-12"><!--[-->`);
			const each_array_1 = ensure_array_like(data.foodCategories);
			for (let ci = 0, $$length = each_array_1.length; ci < $$length; ci++) {
				let category = each_array_1[ci];
				$$renderer.push(`<div${attr("id", category.slug)}${attr_class(`scroll-mt-40 ${ci > 0 ? "mt-12" : ""}`)}><h3 class="text-gold text-center text-xl tracking-[0.16em]">${escape_html(category.name)}</h3> `);
				if (category.description) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="mt-2 text-center font-sans text-sm text-muted-foreground italic">${escape_html(category.description)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <div class="mt-6 grid gap-x-14 md:grid-cols-2"><!--[-->`);
				const each_array_2 = ensure_array_like(category.items);
				for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
					let item = each_array_2[$$index_1];
					Menu_item_card($$renderer, { item });
				}
				$$renderer.push(`<!--]--></div></div>`);
			}
			$$renderer.push(`<!--]--></div></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.drinkCategories.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				eyebrow: "The Bar",
				title: "Drinks",
				subtitle: "Ethiopian coffee, honey wine, cold beer and cocktails."
			});
			$$renderer.push(`<!----> <div class="frame-corners border-gold relative mx-auto lg:mt-14 mt-4 max-w-4xl border p-2"><div class="border-gold/30 border p-8 sm:p-12"><!--[-->`);
			const each_array_3 = ensure_array_like(data.drinkCategories);
			for (let ci = 0, $$length = each_array_3.length; ci < $$length; ci++) {
				let category = each_array_3[ci];
				$$renderer.push(`<div${attr("id", category.slug)}${attr_class(`scroll-mt-40 ${ci > 0 ? "mt-12" : ""}`)}><h3 class="text-gold text-center text-xl tracking-[0.16em]">${escape_html(category.name)}</h3> `);
				if (category.description) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="mt-2 text-center font-sans text-sm text-muted-foreground italic">${escape_html(category.description)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <div class="mt-6 grid gap-x-14 md:grid-cols-2"><!--[-->`);
				const each_array_4 = ensure_array_like(category.items);
				for (let $$index_3 = 0, $$length = each_array_4.length; $$index_3 < $$length; $$index_3++) {
					let item = each_array_4[$$index_3];
					Menu_item_card($$renderer, { item });
				}
				$$renderer.push(`<!--]--></div></div>`);
			}
			$$renderer.push(`<!--]--></div></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-16 text-center"><div class="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 sm:px-6">`);
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
			href: "https://www.just-eat.co.uk",
			target: "_blank",
			rel: "noreferrer noopener",
			size: "lg",
			variant: "outline",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Order on Just Eat`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></section> `);
		Faq_section($$renderer, {
			faqs: data.faqs,
			eyebrow: "A Few Questions",
			subtitle: "Common questions about the menu and allergens."
		});
		$$renderer.push(`<!---->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Cpf_32mR.js.map
