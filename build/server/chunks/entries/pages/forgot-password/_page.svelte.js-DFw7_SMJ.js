import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { I as Input } from '../../../chunks/input.js-CyJuxXk4.js';
import { L as Label } from '../../../chunks/label.js-THGsI54u.js';
import { C as Card, b as Card_header, a as Card_content, e as Card_footer, c as Card_title, d as Card_description } from '../../../chunks/card.js-DuOddC8W.js';
import '../../../chunks/auth-client.js-x1HIy4_Q.js';
import '../../../chunks/index-server.js-G-77DcSL.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../chunks/error.js-DzWUU7VP.js';

//#region src/routes/forgot-password/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let isLoading = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="container flex h-screen w-screen flex-col items-center justify-center">`);
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "w-full max-w-md border-border bg-card text-card-foreground shadow-lg",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								class: "space-y-1",
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "text-2xl font-bold tracking-tight",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Forgot password?`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_description) {
										$$renderer.push("<!--[-->");
										Card_description($$renderer, {
											class: "text-muted-foreground",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Enter your email address and we'll send you a link to reset your password.`);
											},
											$$slots: { default: true }
										});
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
						$$renderer.push(` `);
						if (Card_content) {
							$$renderer.push("<!--[-->");
							Card_content($$renderer, {
								children: ($$renderer) => {
									$$renderer.push("<!--[-1-->");
									$$renderer.push(`<form class="space-y-4">`);
									$$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--> <div class="space-y-2">`);
									Label($$renderer, {
										for: "email",
										class: "text-foreground",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Email address`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Input($$renderer, {
										id: "email",
										type: "email",
										placeholder: "name@example.com",
										required: true,
										disabled: isLoading,
										class: "border-input bg-background text-foreground focus-visible:ring-ring",
										get value() {
											return email;
										},
										set value($$value) {
											email = $$value;
											$$settled = false;
										}
									});
									$$renderer.push(`<!----></div> `);
									Button($$renderer, {
										type: "submit",
										class: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
										disabled: isLoading,
										children: ($$renderer) => {
											$$renderer.push("<!--[-1-->");
											$$renderer.push(`Send reset link`);
											$$renderer.push(`<!--]-->`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></form>`);
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
						if (Card_footer) {
							$$renderer.push("<!--[-->");
							Card_footer($$renderer, {
								class: "flex justify-center border-t border-border pt-4",
								children: ($$renderer) => {
									$$renderer.push(`<a href="/login" class="text-sm text-muted-foreground transition-colors hover:text-primary">Back to sign in</a>`);
								},
								$$slots: { default: true }
							});
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
			$$renderer.push(`</div>`);
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
//# sourceMappingURL=_page.svelte.js-DFw7_SMJ.js.map
