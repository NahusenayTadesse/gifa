import { b as private_env } from './shared-server.js-D6HhUxAQ.js';
import nodemailer from 'nodemailer';

//#region src/lib/server/email.ts
var transporter = nodemailer.createTransport({
	host: private_env.SMTP_HOST,
	port: Number(private_env.SMTP_PORT),
	secure: true,
	auth: {
		user: private_env.SMTP_USER,
		pass: private_env.SMTP_PASSWORD
	}
});
/** Sends an HTML email from the Gifa Lounge mailbox. */
var sendEmail = async (to, subject, html) => {
	await transporter.sendMail({
		from: `"${BRAND_NAME}" <${private_env.SMTP_USER}>`,
		to,
		subject,
		html
	});
};
var BRAND_NAME = "Gifa Restaurant & Lounge";
var BRAND_URL = "https://gifalounge.com";
var BRAND_LOGO = "https://gifalounge.com/logo.png";
var BRAND_PRIMARY = "#c9973a";
var BRAND_PRIMARY_DARK = "#241f3a";
var BRAND_HEADER_BG = `${BRAND_PRIMARY_DARK}; background-image: linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DARK} 100%)`;
/** Notifies the Gifa inbox that a visitor submitted the contact or private-hire form. */
var adminEnquiryTemplate = (data) => ({
	subject: data.type === "private_hire" ? `🎉 New private hire enquiry from ${data.name}` : `📩 New contact message from ${data.name}`,
	html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <h2 style="color: white; margin: 0;">
                    ${data.type === "private_hire" ? "New Private Hire Enquiry" : "New Contact Message"}
                </h2>
            </div>
            <div style="padding: 20px;">
                <p><strong>Name:</strong> ${data.name}</p>
                ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
                ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
                ${data.eventDate ? `<p><strong>Event date:</strong> ${data.eventDate}</p>` : ""}
                ${data.guests ? `<p><strong>Approx. guests:</strong> ${data.guests}</p>` : ""}
                ${data.eventType ? `<p><strong>Type of event:</strong> ${data.eventType}</p>` : ""}
                <div style="margin-top: 15px;">
                    <strong>Message:</strong>
                    <div style="background: #f9f9f9; padding: 15px; margin-top: 5px; border-radius: 5px;">
                        ${data.message || "<i>No message provided</i>"}
                    </div>
                </div>
            </div>
            <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                ${BRAND_NAME} — website enquiry
            </div>
        </div>
    `
});
/** Confirms to the visitor that their message arrived. */
var customerEnquiryTemplate = (name) => ({
	subject: `We received your message — ${BRAND_NAME}`,
	html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 20px;">Message received</h1>
            </div>
            <div style="padding: 20px; color: #333;">
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to <strong>${BRAND_NAME}</strong>. We'll get back to you shortly.</p>
                <p>If it's urgent, call us on 07950 786579.</p>
            </div>
            <div style="background: #f9f9f9; padding: 15px; text-align: center; color: #777; font-size: 12px;">
                ${BRAND_NAME} | <a href="${BRAND_URL}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${BRAND_URL}</a>
            </div>
        </div>
    `
});
/** Notifies the restaurant that a table has been requested. */
var adminBookingTemplate = (data) => ({
	subject: `🍽️ Table request ${data.reference} — ${data.name}, ${data.partySize} guests`,
	html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <h2 style="color: white; margin: 0;">New Table Request</h2>
            </div>
            <div style="padding: 20px;">
                <p><strong>Reference:</strong> ${data.reference}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
                <p><strong>Date:</strong> ${data.bookingDate} at ${data.bookingTime}</p>
                <p><strong>Party size:</strong> ${data.partySize}</p>
                ${data.occasion ? `<p><strong>Occasion:</strong> ${data.occasion}</p>` : ""}
                ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
            </div>
        </div>
    `
});
/** Notifies the restaurant that a guest has registered for an event. */
var adminEventRegistrationTemplate = (data) => ({
	subject: `🎉 New registration for ${data.eventTitle} — ${data.name}, ${data.guests} guest${data.guests === 1 ? "" : "s"}`,
	html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <h2 style="color: white; margin: 0;">New Event Registration</h2>
            </div>
            <div style="padding: 20px;">
                <p><strong>Event:</strong> ${data.eventTitle}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
                <p><strong>Guests:</strong> ${data.guests}</p>
                ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
            </div>
        </div>
    `
});
/** Confirms to the guest that their event registration was received. */
var customerEventRegistrationTemplate = (data) => ({
	subject: `You're on the list — ${data.eventTitle}`,
	html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" width="80" style="display: block; margin: 0 auto 10px;">
                <h1 style="color: white; margin: 0; font-size: 20px;">Registration received</h1>
            </div>
            <div style="padding: 20px; color: #333;">
                <p>Hi <strong>${data.name}</strong>,</p>
                <p>
                    You're on the list for <strong>${data.eventTitle}</strong> on
                    <strong>${data.startsAt.toLocaleString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
		hour: "numeric",
		minute: "2-digit"
	})}</strong>,
                    for <strong>${data.guests} guest${data.guests === 1 ? "" : "s"}</strong>.
                </p>
                <p>Any questions before then? Call us on <strong>07950 786579</strong>.</p>
            </div>
            <div style="background: #f9f9f9; padding: 15px; text-align: center; color: #777; font-size: 12px;">
                ${BRAND_NAME} | 513 Seven Sisters Road, London N15 6EP
            </div>
        </div>
    `
});
/** Confirms to the guest that their request was received (not yet a confirmed table). */
var customerBookingTemplate = (data) => ({
	subject: `We've got your table request — ${BRAND_NAME}`,
	html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; border: 1px solid #eee;">
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" width="80" style="display: block; margin: 0 auto 10px;">
                <h1 style="color: white; margin: 0; font-size: 20px;">Request received</h1>
            </div>
            <div style="padding: 20px; color: #333;">
                <p>Hi <strong>${data.name}</strong>,</p>
                <p>
                    Thanks — we've got your request for <strong>${data.partySize} guests</strong> on
                    <strong>${data.bookingDate} at ${data.bookingTime}</strong> (ref ${data.reference}).
                </p>
                <p>We'll confirm by phone or email shortly. If you need a table in the next couple of
                hours, please call us on <strong>07950 786579</strong> so we can sort it straight away.</p>
            </div>
            <div style="background: #f9f9f9; padding: 15px; text-align: center; color: #777; font-size: 12px;">
                ${BRAND_NAME} | 513 Seven Sisters Road, London N15 6EP
            </div>
        </div>
    `
});

export { adminBookingTemplate as a, adminEnquiryTemplate as b, customerBookingTemplate as c, customerEnquiryTemplate as d, adminEventRegistrationTemplate as e, customerEventRegistrationTemplate as f, sendEmail as s };
//# sourceMappingURL=email.js-D0krVvnu.js.map
