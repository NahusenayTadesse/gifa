import { U as head, T as attr, ac as store_get, a4 as escape_html, af as unsubscribe_stores } from '../../../chunks/index-server.js-CFhxFuri.js';
import { I as InputComp } from '../../../chunks/InputComp.js-BqojA_86.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-CajxpVk3.js';
import { M as Mail } from '../../../chunks/mail.js-D-0ALk7E.js';
import { P as Phone } from '../../../chunks/phone.js-CEAre1dW.js';
import { S as Send } from '../../../chunks/send.js--qxnzbPN.js';
import { B as Button } from '../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-BQDGh9xP.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-DGc3kgw2.js';
import { d as superForm } from '../../../chunks/client2.js-iA4z0kVm.js';
import { E as Errors } from '../../../chunks/Errors.js-CCE9GXl8.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-BocO_oFE.js';
import '../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../chunks/image.js-D8rxvsAA.js';
import '../../../chunks/loader.js-CAX0l8lx.js';
import '../../../chunks/command.js-CgGlfGDc.js';
import '../../../chunks/input.js-BuyvpeQU.js';
import '../../../chunks/noop.js-vWrzhrAx.js';
import '../../../chunks/is.js-D78pHSN-.js';
import '../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../chunks/x.js-Ban1Odu2.js';
import '../../../chunks/popover.js-HGTt93TX.js';
import '../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../chunks/label.js-DJ_DCSg-.js';
import '../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../chunks/assets.js-DVYtCFUU.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-C4xvWha9.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-DWqFh_5z.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../chunks/select.js-Dy4k-kF2.js';
import '../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../chunks/forms.js-BnJirwUv.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-Dcs4_6jL.js';

//#region src/lib/forms/BookingForm.svelte
function BookingForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/book" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, { resetForm: true });
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="book" class="flex flex-col gap-2">`);
			if (store_get($$store_subs ??= {}, "$message", message)?.type === "error") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div role="alert" aria-live="assertive" class="mb-2 flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">`);
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
//# sourceMappingURL=_page.svelte.js-BDNoBe58.js.map
