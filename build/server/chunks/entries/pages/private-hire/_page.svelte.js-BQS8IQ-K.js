import { U as head, Z as ensure_array_like, a4 as escape_html, T as attr, ac as store_get, af as unsubscribe_stores } from '../../../chunks/index-server.js-CFhxFuri.js';
import { I as InputComp } from '../../../chunks/InputComp.js-D09Lbe68.js';
import { C as Check } from '../../../chunks/minus.js-CdYgHBTQ.js';
import { C as Circle_alert } from '../../../chunks/circle-alert.js-CajxpVk3.js';
import { S as Send } from '../../../chunks/send.js--qxnzbPN.js';
import { B as Button } from '../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { I as Image_gallery } from '../../../chunks/image-gallery.js-3BPnAt35.js';
import { P as Page_hero } from '../../../chunks/page-hero.js-BQDGh9xP.js';
import { S as Section_heading } from '../../../chunks/section-heading.js-DGc3kgw2.js';
import { d as superForm } from '../../../chunks/client2.js-C_OVuHK9.js';
import { E as Errors } from '../../../chunks/Errors.js-CCE9GXl8.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/create-id.js-BocO_oFE.js';
import '../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../chunks/badge-check.js-DyQIjrrk.js';
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
import '../../../chunks/client.js-YG-tZQQh.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-oxkMWBIz.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../chunks/select.js-Dy4k-kF2.js';
import '../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../chunks/GalleryLightbox.js-YDp41Mru.js';
import '../../../chunks/dialog-description.js-DmqX_l-i.js';
import '../../../chunks/forms.js-VEDUZztA.js';
import '../../../chunks/app.js-COdsXQ7K.js';
import '../../../chunks/stores.js-BiaXQUEZ.js';

//#region src/lib/forms/PrivateHireForm.svelte
function PrivateHireForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/enquire" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, { resetForm: true });
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="private-hire" class="flex flex-col gap-2">`);
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
				label: "Event date",
				type: "date",
				name: "eventDate"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Approximate guests",
				type: "number",
				name: "guests",
				min: "1"
			});
			$$renderer.push(`<!----> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Type of event",
				type: "text",
				name: "eventType",
				placeholder: "Birthday, engagement, work party…"
			});
			$$renderer.push(`<!----></div> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Tell us what you have in mind",
				type: "textarea",
				name: "message",
				rows: 4
			});
			$$renderer.push(`<!----> <input type="text" name="website"${attr("value", store_get($$store_subs ??= {}, "$form", form).website)} tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden"/> `);
			Button($$renderer, {
				type: "submit",
				form: "private-hire",
				size: "lg",
				class: "glow-gold mt-2 gap-2",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Sending" });
					} else {
						$$renderer.push("<!--[-1-->");
						Send($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Enquire about your event`);
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
//#region src/routes/private-hire/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const included = [
			"Exclusive use of the lounge for your party",
			"Set menus built around your guests, including fully vegan spreads",
			"Full bar service, or a drinks package agreed in advance",
			"Space for a DJ or live music, and room to dance",
			"Coffee ceremony service on request",
			"Your own decorations welcome — we'll help you set up"
		];
		const steps = [
			{
				title: "Tell us about it.",
				body: "Date, rough numbers, and what you're celebrating."
			},
			{
				title: "We'll build a quote.",
				body: "Food, drinks and hire, priced clearly with nothing hidden."
			},
			{
				title: "Confirm with a deposit.",
				body: "We'll hold the date and agree the final menu closer to the time."
			},
			{
				title: "Turn up.",
				body: "We handle the rest."
			}
		];
		head("1r3l5al", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Private Hire &amp; Events | Gifa Lounge, North London</title>`);
			});
			$$renderer.push(`<meta name="description" content="Hire our Tottenham lounge for birthdays, engagements and parties. Set menus, full bar, space for a DJ."/>`);
		});
		if (data.hero) {
			$$renderer.push("<!--[0-->");
			Page_hero($$renderer, {
				hero: data.hero,
				scrollCue: true
			});
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="relative isolate overflow-hidden border-b border-border py-20 text-center"><div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div> <div class="container mx-auto px-4 sm:px-6"><h1 class="font-heading text-4xl font-bold md:text-5xl">Hire the lounge</h1> <p class="mx-auto mt-4 max-w-2xl text-muted-foreground">Birthdays, engagements, name-days, memorials, work parties, community meetings — Gifa's
				lounge is available for private hire, with the kitchen and bar to match.</p></div></section>`);
		}
		$$renderer.push(`<!--]--> `);
		if (data.gallery.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="py-16"><div class="container mx-auto px-4 sm:px-6">`);
			Image_gallery($$renderer, {
				images: data.gallery,
				label: "Past nights at the lounge"
			});
			$$renderer.push(`<!----></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-20"><div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, { title: "What you get" });
		$$renderer.push(`<!----> <div class="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2"><!--[-->`);
		const each_array = ensure_array_like(included);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let item = each_array[i];
			$$renderer.push(`<div class="glass-panel flex items-start gap-3 rounded-xl p-4">`);
			Check($$renderer, { class: "mt-0.5 size-5 shrink-0 text-primary" });
			$$renderer.push(`<!----> <p class="text-sm text-muted-foreground">${escape_html(item)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="relative isolate overflow-hidden py-20"><div class="spotlight" style="--spot-x: 20%; --spot-y: 60%"></div> <div class="container mx-auto px-4 sm:px-6">`);
		Section_heading($$renderer, { title: "How it works" });
		$$renderer.push(`<!----> <div class="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
		const each_array_1 = ensure_array_like(steps);
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let step = each_array_1[i];
			$$renderer.push(`<div class="text-center"><div class="glow-gold mx-auto flex size-9 items-center justify-center rounded-full border border-primary text-sm font-semibold text-primary">${escape_html(i + 1)}</div> <h3 class="mt-4 font-semibold">${escape_html(step.title)}</h3> <p class="mt-2 text-sm text-muted-foreground">${escape_html(step.body)}</p></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section> `);
		if (data.examples.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="atmosphere py-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				title: "Recent nights at Gifa",
				subtitle: "A taste of what's happened here before."
			});
			$$renderer.push(`<!----> <div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			const each_array_2 = ensure_array_like(data.examples);
			for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
				let event = each_array_2[i];
				$$renderer.push(`<div class="lift rounded-2xl border border-border bg-card p-5 hover:border-primary/40"><p class="font-heading font-semibold">${escape_html(event.title)}</p> `);
				if (event.eventType) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="eyebrow mt-1 text-primary">${escape_html(event.eventType)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (event.description) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="mt-2 text-sm text-muted-foreground">${escape_html(event.description)}</p>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]--></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="py-20"><div class="container mx-auto px-4 sm:px-6"><div class="mx-auto max-w-2xl">`);
		Section_heading($$renderer, { title: "Enquire about your event" });
		$$renderer.push(`<!----> <div class="mt-12">`);
		PrivateHireForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BQS8IQ-K.js.map
