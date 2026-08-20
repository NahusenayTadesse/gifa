import { Y as head, X as attr, ac as store_get, a4 as escape_html, af as unsubscribe_stores } from '../../../chunks/index-server.js-G-77DcSL.js';
import { I as InputComp } from '../../../chunks/InputComp.js-CxBPygYN.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-xan0O7Rm.js';
import { M as Mail } from '../../../chunks/mail.js-CknIL-37.js';
import { P as Phone } from '../../../chunks/phone.js-CEtnwgfv.js';
import { S as Send } from '../../../chunks/send.js-Bgsoze9f.js';
import { B as Button } from '../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-wShaoZt0.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-BbSbdCg2.js';
import { d as superForm } from '../../../chunks/client2.js-ASiNbvEC.js';
import { E as Errors } from '../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../chunks/superform-defaults.js-BzqyareB.js';
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
import '../../../chunks/client.js-PQFg6ATt.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-DHV9U4Ai.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../chunks/select.js-2ghzD58U.js';
import '../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../chunks/forms.js-BKs70KGI.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-MUgsUiLj.js';

//#region src/lib/forms/BookingForm.svelte
function BookingForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/book" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, {
			resetForm: true,
			onError: toastOnError
		});
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="book" class="flex flex-col gap-2">`);
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
				label: "Name",
				type: "text",
				name: "name",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Phone",
				type: "tel",
				name: "phone",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Email",
				type: "email",
				name: "email",
				placeholder: "Optional"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Occasion",
				type: "text",
				name: "occasion",
				placeholder: "Optional"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Date",
				type: "date",
				name: "bookingDate",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Time",
				type: "time",
				name: "bookingTime",
				required: true
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Number of guests",
				type: "number",
				name: "partySize",
				min: "1",
				max: "30",
				required: true
			});
			$$renderer.push(`<!----></div> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Anything we should know?",
				type: "textarea",
				name: "notes",
				rows: 3,
				placeholder: "Allergies, accessibility, high chairs…"
			});
			$$renderer.push(`<!----> <input type="text" name="website"${attr("value", store_get($$store_subs ??= {}, "$form", form).website)} tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden"/> `);
			Button($$renderer, {
				type: "submit",
				form: "book",
				size: "lg",
				class: "glow-gold mt-2 gap-2",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Sending" });
					} else {
						$$renderer.push("<!--[-1-->");
						Send($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Request booking`);
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
//#region src/routes/book/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("17et19q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Book a Table | Gifa Restaurant &amp; Lounge N15</title>`);
			});
			$$renderer.push(`<meta name="description" content="Reserve a table at Gifa on Seven Sisters Road. Groups welcome, halal kitchen, full vegan menu."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, { hero: data.hero });
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="relative isolate overflow-hidden border-b border-border py-16 text-center"><div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div> <div class="container mx-auto px-4 sm:px-6"><h1 class="font-heading text-4xl font-bold md:text-5xl">Book a table</h1> <p class="mx-auto mt-4 max-w-2xl text-muted-foreground">Reservations are recommended on Friday and Saturday evenings, and for any group of six or
				more. For everything else, walking in is usually fine.</p></div></section>`);
		}
		$$renderer.push(`<!--]--> <section class="py-16"><div class="container mx-auto px-4 sm:px-6"><div class="mx-auto grid max-w-4xl gap-12 lg:grid-cols-3"><div class="lg:col-span-2">`);
		Section_heading($$renderer, {
			title: "Request a table",
			align: "start"
		});
		$$renderer.push(`<!----> <p class="mt-3 text-sm text-muted-foreground">This is a request, not an instant confirmation — we'll call or email you to confirm.</p> <div class="mt-8">`);
		BookingForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div> <div><div class="glass-panel rounded-2xl p-6"><h3 class="font-heading text-lg font-semibold">Prefer to call?</h3> <div class="mt-4 flex items-center gap-2 text-sm">`);
		Phone($$renderer, { class: "size-4 text-primary" });
		$$renderer.push(`<!----> <a href="tel:07950786579" class="hover:text-primary">07950 786579</a></div> <div class="mt-2 flex items-center gap-2 text-sm">`);
		Mail($$renderer, { class: "size-4 text-primary" });
		$$renderer.push(`<!----> <a href="mailto:gifalounge@gmail.com" class="hover:text-primary">gifalounge@gmail.com</a></div> <p class="mt-4 text-xs text-muted-foreground">More than 12 guests? Head to <a href="/private-hire" class="underline hover:text-primary">Private Hire</a> instead.</p></div></div></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BDc1eW8g.js.map
