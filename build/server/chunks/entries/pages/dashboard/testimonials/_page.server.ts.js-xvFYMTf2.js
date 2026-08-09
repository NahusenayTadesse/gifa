import { r as db, G as testimonials, m as eq, C as user } from '../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-SufGfZGd.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-CHBDgIN6.js';
import { z as zod } from '../../../../chunks/adapters.js-Ocs0SWFL.js';
import { s as saveUploadedFile } from '../../../../chunks/upload.js-CnGDM66A.js';
import { o as object, n as number, j as file, d as string } from '../../../../chunks/auth.js-1j_Wga1v.js';

//#region src/routes/dashboard/testimonials/schema.ts
var paymentMethod = object({
	name: string("Name of Payment Method is required").min(2).max(50),
	position: string().optional(),
	testimonial: string(),
	avatar: file("Avatar is required").max(1e7)
});
var editPaymentMethod = object({
	id: number(),
	name: string("Name of Payment Method is required").min(2).max(50),
	position: string().optional(),
	testimonial: string(),
	avatar: file("Avatar is required").max(1e7).optional()
});
var deleteTestimonial = object({ id: number() });
//#endregion
//#region src/routes/dashboard/testimonials/+page.server.ts
var load = async () => {
	return {
		form: await superValidate(zod(paymentMethod)),
		editForm: await superValidate(zod(editPaymentMethod)),
		deleteForm: await superValidate(zod(deleteTestimonial)),
		allPaymentMethods: await db.select({
			id: testimonials.id,
			name: testimonials.name,
			position: testimonials.position,
			testimonial: testimonials.message,
			avatar: testimonials.avatar,
			createdBy: user.name,
			createdById: testimonials.createdBy
		}).from(testimonials).leftJoin(user, eq(user.id, testimonials.createdBy))
	};
};
var actions = {
	add: async ({ request, locals }) => {
		const form = await superValidate(request, zod(paymentMethod));
		if (!form.valid) return message(form, {
			type: "error",
			text: "Please check the form for Errors"
		}, { status: 400 });
		const { name, position, testimonial, avatar } = form.data;
		try {
			const avatarFile = await saveUploadedFile(avatar);
			await db.insert(testimonials).values({
				name,
				position,
				message: testimonial,
				avatar: avatarFile,
				createdBy: locals.user?.id
			});
			return message(form, {
				type: "success",
				text: "Testimonial Successfully Created"
			});
		} catch (err) {
			return message(form, {
				type: "error",
				text: "Error while creating testimonial."
			}, { status: 500 });
		}
	},
	edit: async ({ request, locals }) => {
		const form = await superValidate(request, zod(editPaymentMethod));
		if (!form.valid) return fail$1(400, { form });
		const { id, name, position, testimonial, avatar } = form.data;
		try {
			const avatarFile = avatar ? await saveUploadedFile(avatar) : void 0;
			await db.update(testimonials).set({
				name,
				position,
				message: testimonial,
				...avatarFile ? { avatar: avatarFile } : {},
				updatedBy: locals?.user?.id
			}).where(eq(testimonials.id, id));
			return message(form, {
				type: "success",
				text: "Testimonial Successfully Updated"
			});
		} catch (err) {
			return message(form, {
				type: "error",
				text: "Error while updating testimonial."
			}, { status: 500 });
		}
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(deleteTestimonial));
		if (!form.valid) return fail$1(400, { form });
		const { id } = form.data;
		try {
			await db.delete(testimonials).where(eq(testimonials.id, id));
			return message(form, {
				type: "success",
				text: "Testimonial Successfully Deleted"
			});
		} catch (err) {
			return message(form, {
				type: "error",
				text: "Error while deleting testimonial."
			}, { status: 500 });
		}
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-xvFYMTf2.js.map
