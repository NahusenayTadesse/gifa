import { U as head, T as attr, ac as store_get, ad as store_mutate, a4 as escape_html, F as derived, $ as spread_props, af as unsubscribe_stores } from '../../../chunks/index-server.js-CFhxFuri.js';
import { I as Icon } from '../../../chunks/Icon.js-BJJlMSR3.js';
import { D as DarkMode } from '../../../chunks/DarkMode.js-R3KtuXVK.js';
import { B as Button } from '../../../chunks/button.js-tGj5Lmrq.js';
import { I as Input } from '../../../chunks/input.js-BuyvpeQU.js';
import { L as Label } from '../../../chunks/label.js-DJ_DCSg-.js';
import { d as superForm } from '../../../chunks/client2.js-Bwb_58-4.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-BbOw6TcD.js';
import { E as Errors } from '../../../chunks/Errors.js-CCE9GXl8.js';
import { C as Card, b as Card_header, c as Card_title, d as Card_description, a as Card_content } from '../../../chunks/card.js-CBH4NVhi.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/dist.js-B8Q2ktxz.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import '../../../chunks/create-id.js-BocO_oFE.js';
import '../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../chunks/noop.js-vWrzhrAx.js';
import '../../../chunks/is.js-D78pHSN-.js';
import '../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../chunks/menu.js-DIhxGpfS.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/forms.js-DZlBN5Cy.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-Deo_Prpb.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-BYNuKnXn.js';
import '../../../chunks/circle-alert.js-CajxpVk3.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/eye.svelte
function Eye($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "eye" },
		props,
		{ iconNode: [["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", {
			"cx": "12",
			"cy": "12",
			"r": "3"
		}]] }
	]));
}
//#endregion
//#region src/lib/forms/Login.svelte
function Login($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/login" } = $$props;
		const { form, errors, allErrors} = superForm(data, {});
		let EyeIcon = derived(() => Eye);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "mx-auto flex w-full max-w-md flex-col justify-center justify-self-center ",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "flex flex-row justify-between text-2xl",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Login `);
												DarkMode($$renderer);
												$$renderer.push(`<!---->`);
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
											children: ($$renderer) => {
												$$renderer.push(`<!---->Enter your email below to login to your account`);
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
									$$renderer.push(`<form method="POST"${attr("action", action)}>`);
									Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
									$$renderer.push(`<!----> <div class="grid gap-4"><div class="grid gap-2">`);
									Label($$renderer, {
										for: "email",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Email`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Input($$renderer, {
										id: "email",
										name: "email",
										type: "email",
										placeholder: "m@example.com",
										required: true,
										get value() {
											return store_get($$store_subs ??= {}, "$form", form).email;
										},
										set value($$value) {
											store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).email = $$value);
											$$settled = false;
										}
									});
									$$renderer.push(`<!----> `);
									if (store_get($$store_subs ??= {}, "$errors", errors).email) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).email)}</span>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div> <div class="grid gap-2"><div class="flex items-center">`);
									Label($$renderer, {
										for: "password",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Password`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> <a href="/forgot-password" class="ml-auto inline-block text-sm underline">Forgot your password?</a></div> <div class="relative">`);
									Input($$renderer, {
										id: "password",
										name: "password",
										type: "password",
										required: true,
										get value() {
											return store_get($$store_subs ??= {}, "$form", form).password;
										},
										set value($$value) {
											store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).password = $$value);
											$$settled = false;
										}
									});
									$$renderer.push(`<!----> <button type="button" title="Make Password Visible">`);
									if (EyeIcon()) {
										$$renderer.push("<!--[-->");
										EyeIcon()($$renderer, { class: "absolute top-0.5 right-2 h-6 w-6 transition-transform duration-300 ease-in-out" });
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(`</button> `);
									if (store_get($$store_subs ??= {}, "$errors", errors).password) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<span class="text-red-500">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).password)}</span>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div></div> `);
									Button($$renderer, {
										type: "submit",
										class: "w-full",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Login`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div></form>`);
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
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1x05zx6", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Login</title>`);
			});
		});
		$$renderer.push(`<div class="flex h-screen w-full items-center justify-center px-4">`);
		Login($$renderer, {
			data: data?.form,
			action: "?/login"
		});
		$$renderer.push(`<!----></div>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Bx6ifvnZ.js.map
