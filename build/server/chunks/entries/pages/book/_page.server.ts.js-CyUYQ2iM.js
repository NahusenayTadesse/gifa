import { r as db, F as bookings } from '../../../chunks/db.js-DqGthl3g.js';
import { g as getSettings, b as getHero } from '../../../chunks/content.js-Dj82eJqF.js';
import { s as superValidate, m as message } from '../../../chunks/client2.js-fgFBQkZh.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-DEzvbNS6.js';
import { z as zod } from '../../../chunks/adapters.js-Dr2Ub319.js';
import { a as adminBookingTemplate, c as customerBookingTemplate, s as sendEmail } from '../../../chunks/email.js-D0krVvnu.js';
import { o as object, d as string, n as number, e as email, l as literal } from '../../../chunks/auth.js-Dz0kDMeZ.js';

//#region src/routes/book/schema.ts
var bookingSchema = object({
	name: string("Your name is required").min(2, "Name is too short").max(120),
	phone: string("A phone number is required").min(6, "Phone number is too short").max(32),
	email: email("Please enter a valid email").optional().or(literal("")),
	bookingDate: string("Please pick a date"),
	bookingTime: string("Please pick a time"),
	partySize: number("Party size is required").int().min(1).max(30),
	occasion: string().max(60).optional(),
	notes: string().max(600).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: string().max(0, "Submission rejected").optional()
});
//#endregion
//#region src/routes/book/+page.server.ts
/** Short human code like GF-8K2M, easy to read back over the phone. */
var generateReference = () => {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let code = "";
	for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * 32)];
	return `GF-${code}`;
};
var load = async () => {
	const [hero, form] = await Promise.all([getHero("book"), superValidate(zod(bookingSchema))]);
	return {
		hero,
		form
	};
};
var actions = { book: async ({ request }) => {
	const form = await superValidate(request, zod(bookingSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const { name, phone, email, bookingDate, bookingTime, partySize, occasion, notes, website } = form.data;
	if (website) return message(form, {
		type: "success",
		text: "Thanks — we've got your request. We'll confirm by phone or email shortly."
	});
	const today = /* @__PURE__ */ new Date();
	today.setHours(0, 0, 0, 0);
	const requested = new Date(bookingDate);
	const maxDate = new Date(today);
	maxDate.setDate(maxDate.getDate() + 90);
	if (requested < today || requested > maxDate) return message(form, {
		type: "error",
		text: "Please choose a date within the next 90 days."
	}, { status: 400 });
	if (partySize > 12) return message(form, {
		type: "error",
		text: "For groups over 12 we'll look after you better through private hire — head to the Private Hire page to enquire."
	});
	const reference = generateReference();
	try {
		await db.insert(bookings).values({
			reference,
			name,
			phone,
			email: email || void 0,
			partySize,
			bookingDate,
			bookingTime,
			occasion,
			notes,
			source: "website"
		});
	} catch (err) {
		console.error("Failed to save booking:", err);
		return message(form, {
			type: "error",
			text: "We could not save your request. Please call us instead."
		}, { status: 500 });
	}
	try {
		const settings = await getSettings();
		const notify = adminBookingTemplate({
			reference,
			name,
			phone,
			email: email || void 0,
			partySize,
			bookingDate,
			bookingTime,
			occasion,
			notes
		});
		const receipt = customerBookingTemplate({
			reference,
			name,
			bookingDate,
			bookingTime,
			partySize
		});
		await Promise.all([settings?.email ? sendEmail(settings.email, notify.subject, notify.html) : void 0, email ? sendEmail(email, receipt.subject, receipt.html) : void 0]);
	} catch (err) {
		console.error("Booking notification failed:", err);
	}
	return message(form, {
		type: "success",
		text: `Thanks — we've got your request (ref ${reference}). We'll confirm by phone or email shortly. If you need a table in the next couple of hours, please call us on 07950 786579 so we can sort it straight away.`
	});
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CyUYQ2iM.js.map
