import { r as db, F as enquiries } from '../../../chunks/db.js-CPhQsSSC.js';
import { g as getSettings, b as getHero, f as getOpeningHours } from '../../../chunks/content.js-DdRtddEa.js';
import { s as superValidate, m as message } from '../../../chunks/client2.js-ASiNbvEC.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-PQFg6ATt.js';
import { z as zod } from '../../../chunks/adapters.js-CwAUwTBz.js';
import { b as adminEnquiryTemplate, d as customerEnquiryTemplate, s as sendEmail } from '../../../chunks/email.js-D0krVvnu.js';
import { o as object, d as string, e as email } from '../../../chunks/auth.js-CCGW_diT.js';

//#region src/routes/contact/schema.ts
var contactSchema = object({
	name: string("Your name is required").min(2, "Name is too short").max(255),
	email: email("A valid email address is required"),
	phone: string().max(32, "Phone number is too long").optional(),
	subject: string("Subject is required").min(2, "Subject is too short").max(255),
	message: string("Message is required").min(10, "Please tell us a little more"),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: string().max(0, "Submission rejected").optional()
});
//#endregion
//#region src/routes/contact/+page.server.ts
/** Address, email and phone come from the shared settings row in the layout. */
var load = async () => {
	const [hero, hours, form] = await Promise.all([
		getHero("contact"),
		getOpeningHours(),
		superValidate(zod(contactSchema))
	]);
	return {
		hero,
		hours,
		form
	};
};
var actions = { contact: async ({ request }) => {
	const form = await superValidate(request, zod(contactSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const { name, email, phone, subject, message: body, website } = form.data;
	if (website) return message(form, {
		type: "success",
		text: "Thanks — we will be in touch shortly."
	});
	try {
		await db.insert(enquiries).values({
			type: "contact",
			name,
			email,
			phone,
			message: `${subject}\n\n${body}`
		});
	} catch {
		return message(form, {
			type: "error",
			text: "We could not save your message. Please try again."
		}, { status: 500 });
	}
	try {
		const settings = await getSettings();
		const notify = adminEnquiryTemplate({
			type: "contact",
			name,
			email,
			phone,
			message: body
		});
		const receipt = customerEnquiryTemplate(name);
		await Promise.all([settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : void 0, sendEmail(email, receipt.subject, receipt.html)]);
	} catch (err) {
		console.error("Contact form notification failed:", err);
	}
	return message(form, {
		type: "success",
		text: "Thank you — your message has been sent. We will get back to you shortly."
	});
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-D3prlfJh.js.map
