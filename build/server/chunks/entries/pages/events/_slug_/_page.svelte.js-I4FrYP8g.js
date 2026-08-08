import { U as head, a4 as escape_html, T as attr, F as derived, ac as store_get, af as unsubscribe_stores } from '../../../../chunks/index-server.js-CFhxFuri.js';
import { I as InputComp } from '../../../../chunks/InputComp.js-BScGU3JW.js';
import { C as Calendar_days } from '../../../../chunks/calendar-days.js-DCVRLhlw.js';
import { C as Circle_alert } from '../../../../chunks/circle-alert.js-CajxpVk3.js';
import { C as Clock } from '../../../../chunks/clock.js-T7Q4wrWD.js';
import { P as Party_popper } from '../../../../chunks/party-popper.js-BLe8JzLN.js';
import { T as Ticket } from '../../../../chunks/ticket.js-BN3MB491.js';
import { B as Button } from '../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { P as Page_hero } from '../../../../chunks/page-hero.js-BQDGh9xP.js';
import { d as superForm } from '../../../../chunks/client2.js-fgFBQkZh.js';
import { E as Errors } from '../../../../chunks/Errors.js-CCE9GXl8.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../chunks/is.js-D78pHSN-.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../chunks/popover.js-HGTt93TX.js';
import '../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-DEzvbNS6.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-CD2yIDC5.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../chunks/forms.js-DNL_Auze.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-BEW9-n6n.js';

//#region src/lib/forms/EventRegistrationForm.svelte
function EventRegistrationForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/register" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, { resetForm: true });
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="event-register" class="flex flex-col gap-2">`);
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
				label: "Number of guests",
				type: "number",
				name: "guests",
				min: "1",
				max: "20",
				required: true
			});
			$$renderer.push(`<!----></div> `);
			InputComp($$renderer, {
				form,
				errors,
				label: "Anything we should know?",
				type: "textarea",
				name: "notes",
				rows: 4,
				placeholder: "Dietary needs, accessibility, or anything else — optional"
			});
			$$renderer.push(`<!----> <input type="text" name="website"${attr("value", store_get($$store_subs ??= {}, "$form", form).website)} tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden"/> `);
			Button($$renderer, {
				type: "submit",
				form: "event-register",
				size: "lg",
				class: "glow-gold mt-2 gap-2",
				children: ($$renderer) => {
					if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
						$$renderer.push("<!--[0-->");
						LoadingBtn($$renderer, { name: "Registering" });
					} else {
						$$renderer.push("<!--[-1-->");
						Party_popper($$renderer, { class: "size-4" });
						$$renderer.push(`<!----> Register`);
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
//#region src/routes/events/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const dateFormatter = new Intl.DateTimeFormat("en-GB", {
			weekday: "long",
			day: "numeric",
			month: "long"
		});
		const timeFormatter = new Intl.DateTimeFormat("en-GB", {
			hour: "numeric",
			minute: "2-digit"
		});
		const startDate = derived(() => dateFormatter.format(new Date(data.event.startsAt)));
		const startTime = derived(() => timeFormatter.format(new Date(data.event.startsAt)));
		const endTime = derived(() => data.event.endsAt ? timeFormatter.format(new Date(data.event.endsAt)) : null);
		const hero = derived(() => ({
			eyebrow: data.event.eventType,
			title: data.event.title,
			tagline: `${startDate()} · ${startTime()}${endTime() ? ` – ${endTime()}` : ""}`,
			image: data.event.posterImage ?? "image9.webp",
			imageAlt: data.event.title
		}));
		head("1pckhrw", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.event.title)} | Gifa Restaurant &amp; Lounge</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.event.description ?? `${data.event.title} at Gifa Restaurant & Lounge — ${startDate()}.`)}/>`);
		});
		Page_hero($$renderer, { hero: hero() });
		$$renderer.push(`<!----> <section class="py-16"><div class="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start"><div><h2 class="font-heading text-2xl font-semibold">About this event</h2> <div class="mt-6 flex flex-col gap-3 text-sm text-muted-foreground"><p class="flex items-center gap-2">`);
		Calendar_days($$renderer, { class: "size-4 shrink-0 text-primary" });
		$$renderer.push(`<!----> ${escape_html(startDate())}</p> <p class="flex items-center gap-2">`);
		Clock($$renderer, { class: "size-4 shrink-0 text-primary" });
		$$renderer.push(`<!----> ${escape_html(startTime())}${escape_html(endTime() ? ` – ${endTime()}` : "")}</p> `);
		if (data.event.ticketUrl) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", data.event.ticketUrl)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-primary hover:underline">`);
			Ticket($$renderer, { class: "size-4 shrink-0" });
			$$renderer.push(`<!----> Tickets / RSVP link</a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		if (data.event.description) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="mt-6 text-muted-foreground">${escape_html(data.event.description)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.event.bookingNote) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-champagne mt-6 italic">${escape_html(data.event.bookingNote)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 class="font-heading text-2xl font-semibold">Register</h2> <p class="mt-2 text-sm text-muted-foreground">Let us know you're coming and we'll have a spot ready.</p> <div class="mt-6">`);
		EventRegistrationForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div></div></section>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-I4FrYP8g.js.map
