import { Y as head, V as ensure_array_like, X as attr, a4 as escape_html } from '../../../chunks/index-server.js-G-77DcSL.js';
import { A as Arrow_right } from '../../../chunks/arrow-right.js-BFDDLaWX.js';
import { M as Mail } from '../../../chunks/mail.js-CknIL-37.js';
import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { C as Card, a as Card_content } from '../../../chunks/card.js-DuOddC8W.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/Icon.js-DGpwHSC6.js';

//#region src/routes/dashboard/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("x1i5gj", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Dashboard</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-6 p-2"><div><h1 class="font-heading text-2xl font-bold">Website Content</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Everything on the public site is editable from here. Pick a section below, or use the sidebar.</p></div> `);
		if (data.unread > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a href="/dashboard/enquiries" class="block">`);
			Card($$renderer, {
				class: "border-primary/40 bg-primary/5 transition-colors hover:bg-primary/10",
				children: ($$renderer) => {
					Card_content($$renderer, {
						class: "flex items-center gap-3 py-4",
						children: ($$renderer) => {
							Mail($$renderer, { class: "size-5 text-primary" });
							$$renderer.push(`<!----> <p class="text-sm font-medium">You have ${escape_html(data.unread)} unread
						${escape_html(data.unread === 1 ? "enquiry" : "enquiries")}</p> `);
							Arrow_right($$renderer, { class: "ml-auto size-4 text-muted-foreground" });
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
		const each_array = ensure_array_like(data.stats);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let stat = each_array[$$index];
			$$renderer.push(`<a${attr("href", stat.href)} class="block">`);
			Card($$renderer, {
				class: "h-full transition-all hover:border-primary/40 hover:shadow-md",
				children: ($$renderer) => {
					Card_content($$renderer, {
						class: "py-6",
						children: ($$renderer) => {
							$$renderer.push(`<p class="font-heading text-3xl font-bold tabular-nums">${escape_html(stat.value)}</p> <p class="mt-1 text-sm text-muted-foreground">${escape_html(stat.label)}</p>`);
						},
						$$slots: { default: true }
					});
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></a>`);
		}
		$$renderer.push(`<!--]--></div> <div class="flex flex-wrap gap-3">`);
		Button($$renderer, {
			href: "/dashboard/content/heroes",
			variant: "outline",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Page banners`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/dashboard/content/settings",
			variant: "outline",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Site settings`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/dashboard/content/opening-hours",
			variant: "outline",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Opening hours`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/dashboard/enquiries",
			variant: "outline",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Enquiries`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-xe9O0K0T.js.map
