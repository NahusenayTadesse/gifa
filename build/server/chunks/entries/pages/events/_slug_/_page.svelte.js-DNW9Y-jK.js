import { Y as head, a4 as escape_html, X as attr, a3 as stringify, F as derived, ac as store_get, af as unsubscribe_stores } from '../../../../chunks/index-server.js-G-77DcSL.js';
import { I as InputComp } from '../../../../chunks/InputComp.js-CxBPygYN.js';
import { C as Calendar_days } from '../../../../chunks/calendar-days.js-BLalSm1t.js';
import { C as Circle_alert } from '../../../../chunks/circle-alert.js-xan0O7Rm.js';
import { C as Clock } from '../../../../chunks/clock.js-zAJpXbdq.js';
import { P as Party_popper } from '../../../../chunks/party-popper.js-DBPdNKhP.js';
import { T as Ticket } from '../../../../chunks/ticket.js-DrbbAo6D.js';
import { B as Button } from '../../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { I as Image_gallery } from '../../../../chunks/image-gallery.js-p5kCk2jm.js';
import { P as Page_hero } from '../../../../chunks/page-hero.js-wShaoZt0.js';
import { S as Section_heading } from '../../../../chunks/section-heading.js-BbSbdCg2.js';
import { d as superForm } from '../../../../chunks/client2.js-ASiNbvEC.js';
import { E as Errors } from '../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../chunks/superform-defaults.js-BzqyareB.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../chunks/command.js-Dz__iECm.js';
import '../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../chunks/label.js-THGsI54u.js';
import '../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-PQFg6ATt.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../chunks/internal2.js-DHV9U4Ai.js';
import '../../../../chunks/utils.js-D-kl_003.js';
import '../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../chunks/select.js-2ghzD58U.js';
import '../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../../chunks/GalleryLightbox.js-D11cBi9E.js';
import '../../../../chunks/dialog-description.js-B7R2haCG.js';
import '../../../../chunks/forms.js-BKs70KGI.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-MUgsUiLj.js';

//#region src/lib/forms/EventRegistrationForm.svelte
function EventRegistrationForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/register" } = $$props;
		const { form, errors, allErrors, delayed, message } = superForm(data, {
			resetForm: true,
			onError: toastOnError
		});
		{
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<form method="POST"${attr("action", action)} id="event-register" class="flex flex-col gap-2">`);
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
		const galleryImages = derived(() => data.gallery.map((photo) => ({
			src: photo.imageUrl,
			alt: data.event.title
		})));
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
			$$renderer.push(`<p class="mt-6 text-foreground italic">${escape_html(data.event.bookingNote)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 class="font-heading text-2xl font-semibold">Register</h2> <p class="mt-2 text-sm text-muted-foreground">Let us know you're coming and we'll have a spot ready.</p> <div class="mt-6">`);
		EventRegistrationForm($$renderer, { data: data.form });
		$$renderer.push(`<!----></div></div></div></section> `);
		if (data.gallery.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="pb-20"><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, { title: "Photos from this event" });
			$$renderer.push(`<!----></div> <div class="container mx-auto mt-12 px-4 sm:px-6">`);
			Image_gallery($$renderer, {
				images: galleryImages(),
				label: `${stringify(data.event.title)} photos`
			});
			$$renderer.push(`<!----></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-DNW9Y-jK.js.map
