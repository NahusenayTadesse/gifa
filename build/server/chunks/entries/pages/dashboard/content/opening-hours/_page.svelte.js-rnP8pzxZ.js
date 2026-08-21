import { Y as head, ac as store_get, V as ensure_array_like, a4 as escape_html, ad as store_mutate, af as unsubscribe_stores } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { S as Save } from '../../../../../chunks/save.js-BUv6pSbp.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { I as Input } from '../../../../../chunks/input.js-CyJuxXk4.js';
import { L as LoadingBtn } from '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { L as Label } from '../../../../../chunks/label.js-THGsI54u.js';
import { d as superForm } from '../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-BE73K9-j.js';
import { C as Checkbox } from '../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import { E as Errors } from '../../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { F as FormCard } from '../../../../../chunks/FormCard.js-7Ia794lK.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../chunks/card.js-DuOddC8W.js';

//#region src/routes/dashboard/content/opening-hours/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, allErrors, delayed} = superForm(data.form, {
			resetForm: false,
			dataType: "json",
			onError: toastOnError
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("i41tho", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Opening Hours | Dashboard</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Opening Hours</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Drives the footer, the contact page and booking-time validation. This is the single
			highest-value piece of information on the site — keep it current.</p></div> `);
			FormCard($$renderer, {
				title: "Weekly hours",
				description: "Changes go live as soon as you save.",
				children: ($$renderer) => {
					$$renderer.push(`<form method="post" action="?/save" id="hours" class="flex flex-col gap-3">`);
					Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
					$$renderer.push(`<!----> <!--[-->`);
					const each_array = ensure_array_like(data.weekdayNames);
					for (let i = 0, $$length = each_array.length; i < $$length; i++) {
						let name = each_array[i];
						$$renderer.push(`<div class="grid grid-cols-1 items-center gap-3 border-b border-border/60 pb-3 sm:grid-cols-4"><span class="font-medium">${escape_html(name)}</span> <label class="flex items-center gap-2 text-sm">`);
						Checkbox($$renderer, {
							get checked() {
								return store_get($$store_subs ??= {}, "$form", form).days[i].isClosed;
							},
							set checked($$value) {
								store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).days[i].isClosed = $$value);
								$$settled = false;
							}
						});
						$$renderer.push(`<!----> Closed</label> <div class="flex flex-col gap-1">`);
						Label($$renderer, {
							class: "text-xs text-muted-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Open`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----> `);
						Input($$renderer, {
							type: "time",
							disabled: store_get($$store_subs ??= {}, "$form", form).days[i].isClosed,
							get value() {
								return store_get($$store_subs ??= {}, "$form", form).days[i].openTime;
							},
							set value($$value) {
								store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).days[i].openTime = $$value);
								$$settled = false;
							}
						});
						$$renderer.push(`<!----></div> <div class="flex flex-col gap-1">`);
						Label($$renderer, {
							class: "text-xs text-muted-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Close`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----> `);
						Input($$renderer, {
							type: "time",
							disabled: store_get($$store_subs ??= {}, "$form", form).days[i].isClosed,
							get value() {
								return store_get($$store_subs ??= {}, "$form", form).days[i].closeTime;
							},
							set value($$value) {
								store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).days[i].closeTime = $$value);
								$$settled = false;
							}
						});
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]--> `);
					Button($$renderer, {
						type: "submit",
						form: "hours",
						class: "mt-2 w-fit",
						children: ($$renderer) => {
							if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
								$$renderer.push("<!--[0-->");
								LoadingBtn($$renderer, { name: "Saving" });
							} else {
								$$renderer.push("<!--[-1-->");
								Save($$renderer, { class: "size-4" });
								$$renderer.push(`<!----> Save Hours`);
							}
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form>`);
				}});
			$$renderer.push(`<!----></div>`);
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

export { _page as default };
//# sourceMappingURL=_page.svelte.js-rnP8pzxZ.js.map
