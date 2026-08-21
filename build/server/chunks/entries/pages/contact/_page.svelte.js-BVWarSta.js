import { Y as head, X as attr, ac as store_get, a4 as escape_html, af as unsubscribe_stores, a3 as stringify, V as ensure_array_like, F as derived } from '../../../chunks/index-server.js-G-77DcSL.js';
import { I as InputComp } from '../../../chunks/InputComp.js-D9ih9EPq.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-xan0O7Rm.js';
import { C as Clock } from '../../../chunks/clock.js-zAJpXbdq.js';
import { M as Mail } from '../../../chunks/mail.js-CknIL-37.js';
import { M as Map_pin } from '../../../chunks/map-pin.js-eL1lEaBV.js';
import { S as Send } from '../../../chunks/send.js-Bgsoze9f.js';
import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-wShaoZt0.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-BbSbdCg2.js';
import { d as superForm } from '../../../chunks/client2.js-ccjA_ZCz.js';
import { E as Errors } from '../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../chunks/superform-defaults.js-BzqyareB.js';
import { C as Card, a as Card_content } from '../../../chunks/card.js-DuOddC8W.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../chunks/image.js-DhjcWPLt.js';
import '../../../chunks/loader.js-CJHbYKhD.js';
import '../../../chunks/command.js-Dz__iECm.js';
import '../../../chunks/input.js-CyJuxXk4.js';
import '../../../chunks/noop.js-BLOEitT-.js';
import '../../../chunks/is.js-LX4C4ueF.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../chunks/x.js-Bu-evnKT.js';
import '../../../chunks/popover.js-BLmiDDDH.js';
import '../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../chunks/label.js-THGsI54u.js';
import '../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../chunks/assets.js-DVYtCFUU.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-BE73K9-j.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../chunks/select.js-2ghzD58U.js';
import '../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../chunks/forms.js-D03WpUL4.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-DhsAxxq-.js';

//#region src/lib/forms/ContactForm.svelte
function ContactForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/contact" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, {
			resetForm: true,
			onError: toastOnError
		});
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="contact" class="flex flex-col gap-2">`);
			if (store_get($$store_subs ??= {}, "$message", message)?.type === "error") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div role="alert" aria-live="assertive" class="mb-2 flex items-center gap-2 rounded-lg bg-destructive/15 p-3 text-sm text-destructive">`);
				Circle_alert($$renderer, { class: "size-4 shrink-0" });
				$$renderer.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$message", message).text)}</div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
			$$renderer.push(`<!----> <div class="grid gap-2 sm:grid-cols-2">`);
			InputComp($$renderer, {
				form,
				errors,
				label: "Your name",
				type: "text",
				name: "name",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Email",
				type: "email",
				name: "email",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Phone",
				type: "tel",
				name: "phone",
				placeholder: "Optional"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Subject",
				type: "text",
				name: "subject",
				required: true
			});
			$$renderer.push(`<!----></div> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Message",
				type: "textarea",
				name: "message",
				rows: 6,
				required: true,
				placeholder: "Tell us what's on your mind…"
			});
			$$renderer.push(`<!----> <input type="text" name="website"${attr("value", store_get($$store_subs ??= {}, "$form", form).website)} tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden"/> `);
			Button($$renderer, {
				type: "submit",
				form: "contact",
				size: "lg",
				class: "glow-gold mt-2 gap-2",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Sending" });
					} else {
						$$renderer.push("<!--[-1-->");
						Send($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Send Message`);
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></form>`);
		}
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/contact/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const settings = derived(() => data.settings);
		const dayNames = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		const formatTime = (t) => {
			if (!t) return "";
			const [h, m] = t.split(":");
			const hour = Number(h);
			const suffix = hour >= 12 ? "pm" : "am";
			const twelve = hour % 12 === 0 ? 12 : hour % 12;
			return m === "00" ? `${twelve}${suffix}` : `${twelve}:${m}${suffix}`;
		};
		head("1bv7ezn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Contact &amp; Directions | Gifa Restaurant &amp; Lounge, N15 6EP</title>`);
			});
			$$renderer.push(`<meta name="description" content="Find Gifa at 513 Seven Sisters Road, London N15 6EP. Opening hours, phone, delivery and directions."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-16"><div class="container mx-auto px-4 sm:px-6"><div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"><div>`);
		Card($$renderer, {
			class: "lift group h-full hover:border-primary/40 hover:shadow-lg",
			children: ($$renderer) => {
				Card_content($$renderer, {
					class: "pt-6",
					children: ($$renderer) => {
						Map_pin($$renderer, { class: "size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" });
						$$renderer.push(`<!----> <h3 class="mt-4 font-semibold">Address</h3> <p class="mt-2 text-sm text-muted-foreground">${escape_html(settings()?.address ?? "513 Seven Sisters Road, London N15 6EP")}</p> <p class="mt-2 text-xs text-muted-foreground">Seven Sisters (Victoria line, Overground) — about 7 minutes' walk.</p>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> <div>`);
		Card($$renderer, {
			class: "lift group h-full hover:border-primary/40 hover:shadow-lg",
			children: ($$renderer) => {
				Card_content($$renderer, {
					class: "pt-6",
					children: ($$renderer) => {
						Mail($$renderer, { class: "size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" });
						$$renderer.push(`<!----> <h3 class="mt-4 font-semibold">Email &amp; phone</h3> `);
						if (settings()?.email) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<p class="mt-2"><a${attr("href", `mailto:${stringify(settings().email)}`)} class="text-sm break-all text-foreground hover:text-primary">${escape_html(settings().email)}</a></p>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--> `);
						if (settings()?.phone) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<p class="mt-1"><a${attr("href", `tel:${stringify(settings().phone.replace(/\s/g, ""))}`)} class="text-sm text-foreground hover:text-primary">${escape_html(settings().phone)}</a></p>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div> <div>`);
		Card($$renderer, {
			class: "lift group h-full hover:border-primary/40 hover:shadow-lg",
			children: ($$renderer) => {
				Card_content($$renderer, {
					class: "pt-6",
					children: ($$renderer) => {
						Clock($$renderer, { class: "size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" });
						$$renderer.push(`<!----> <h3 class="mt-4 font-semibold">Opening hours</h3> <ul class="mt-2 space-y-1 text-sm text-muted-foreground"><!--[-->`);
						const each_array = ensure_array_like(data.hours);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let row = each_array[$$index];
							$$renderer.push(`<li class="flex justify-between gap-4"><span>${escape_html(dayNames[row.weekday])}</span> <span>${escape_html(row.isClosed ? "Closed" : `${formatTime(row.openTime)} – ${formatTime(row.closeTime)}`)}</span></li>`);
						}
						$$renderer.push(`<!--]--></ul>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></div></section> <section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, {
			title: "Send Us a Message",
			subtitle: "Tell us what you need and our team will get back to you."
		});
		$$renderer.push(`<!----> <div class="mx-auto mt-12 max-w-2xl">`);
		ContactForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BVWarSta.js.map
