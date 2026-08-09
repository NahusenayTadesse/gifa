import { r as db, L as eventRegistrations } from '../../../../chunks/db.js-DqGthl3g.js';
import { h as getEventBySlug, g as getSettings } from '../../../../chunks/content.js-Dj82eJqF.js';
import { s as superValidate, m as message } from '../../../../chunks/client2.js-D5uIRlL3.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-bhqsBV9j.js';
import { z as zod } from '../../../../chunks/adapters.js-DWp5TMcY.js';
import { e as adminEventRegistrationTemplate, f as customerEventRegistrationTemplate, s as sendEmail } from '../../../../chunks/email.js-D0krVvnu.js';
import { v as error } from '../../../../chunks/utils.js-D-kl_003.js';
import { o as object, d as string, n as number, e as email } from '../../../../chunks/auth.js-DlYYXSox.js';

//#region src/routes/events/[slug]/schema.ts
var registrationSchema = object({
	name: string("Your name is required").min(2, "Name is too short").max(120),
	phone: string().max(32).optional(),
	email: email("A valid email address is required"),
	guests: number("Number of guests is required").int().min(1).max(20),
	notes: string().max(600).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: string().max(0, "Submission rejected").optional()
});
//#endregion
//#region src/routes/events/[slug]/+page.server.ts
var load = async ({ params }) => {
	const event = await getEventBySlug(params.slug);
	if (!event) error(404, "Event not found");
	return {
		event,
		form: await superValidate(zod(registrationSchema))
	};
};
var actions = { register: async ({ request, params }) => {
	const form = await superValidate(request, zod(registrationSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const event = await getEventBySlug(params.slug);
	if (!event) return message(form, {
		type: "error",
		text: "This event could not be found."
	}, { status: 404 });
	const { name, phone, email, guests, notes, website } = form.data;
	if (website) return message(form, {
		type: "success",
		text: "Thanks — you're on the list."
	});
	try {
		await db.insert(eventRegistrations).values({
			eventId: event.id,
			name,
			phone,
			email,
			guests,
			notes
		});
	} catch (err) {
		console.error("Failed to save event registration:", err);
		return message(form, {
			type: "error",
			text: "We could not save your registration. Please try again."
		}, { status: 500 });
	}
	try {
		const settings = await getSettings();
		const notify = adminEventRegistrationTemplate({
			eventTitle: event.title,
			name,
			phone,
			email,
			guests,
			notes
		});
		const receipt = customerEventRegistrationTemplate({
			eventTitle: event.title,
			name,
			startsAt: event.startsAt,
			guests
		});
		await Promise.all([settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : void 0, sendEmail(email, receipt.subject, receipt.html)]);
	} catch (err) {
		console.error("Event registration notification failed:", err);
	}
	return message(form, {
		type: "success",
		text: `Thanks, ${name} — you're registered for ${event.title}. A confirmation is on its way to your inbox.`
	});
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CeKB219Y.js.map
