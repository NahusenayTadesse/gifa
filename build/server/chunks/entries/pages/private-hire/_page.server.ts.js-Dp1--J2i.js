import { r as db, E as enquiries } from '../../../chunks/db.js-DqGthl3g.js';
import { g as getSettings, b as getHero, k as getPrivateHireExamples, l as listGalleryByContext } from '../../../chunks/content.js-Dj82eJqF.js';
import { s as superValidate, m as message } from '../../../chunks/client2.js-BrZUAIoh.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-SaiAi5EC.js';
import { z as zod } from '../../../chunks/adapters.js-DZdKSGWy.js';
import { b as adminEnquiryTemplate, d as customerEnquiryTemplate, s as sendEmail } from '../../../chunks/email.js-D0krVvnu.js';
import { o as object, d as string, n as number, e as email } from '../../../chunks/auth.js-CigcsaCA.js';

//#region src/routes/private-hire/schema.ts
var privateHireSchema = object({
	name: string("Your name is required").min(2, "Name is too short").max(120),
	phone: string().max(32).optional(),
	email: email("A valid email address is required"),
	eventDate: string().optional(),
	guests: number().int().min(1).max(500).optional(),
	eventType: string().max(80).optional(),
	message: string().max(2e3).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: string().max(0, "Submission rejected").optional()
});
//#endregion
//#region src/routes/private-hire/+page.server.ts
var load = async () => {
	const [hero, examples, gallery, form] = await Promise.all([
		getHero("private-hire"),
		getPrivateHireExamples(),
		listGalleryByContext("event"),
		superValidate(zod(privateHireSchema))
	]);
	return {
		hero,
		examples,
		gallery: gallery.map((image) => ({
			src: image.src,
			alt: image.altText,
			caption: image.caption
		})),
		form
	};
};
var actions = { enquire: async ({ request }) => {
	const form = await superValidate(request, zod(privateHireSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const { name, phone, email, eventDate, guests, eventType, message: body, website } = form.data;
	if (website) return message(form, {
		type: "success",
		text: "Thanks — we will be in touch shortly."
	});
	try {
		await db.insert(enquiries).values({
			type: "private_hire",
			name,
			phone,
			email,
			eventDate: eventDate || void 0,
			guests,
			eventType,
			message: body
		});
	} catch (err) {
		console.error("Failed to save private hire enquiry:", err);
		return message(form, {
			type: "error",
			text: "We could not save your enquiry. Please try again."
		}, { status: 500 });
	}
	try {
		const settings = await getSettings();
		const notify = adminEnquiryTemplate({
			type: "private_hire",
			name,
			phone,
			email,
			message: body,
			eventDate,
			guests,
			eventType
		});
		const receipt = customerEnquiryTemplate(name);
		await Promise.all([settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : void 0, sendEmail(email, receipt.subject, receipt.html)]);
	} catch (err) {
		console.error("Private hire notification failed:", err);
	}
	return message(form, {
		type: "success",
		text: "Thanks — we've got your enquiry. We'll build a quote and get back to you shortly."
	});
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-Dp1--J2i.js.map
