import { r as db, H as testimonials, m as eq, D as user } from '../../../../chunks/db.js-CPhQsSSC.js';
import { s as superValidate, f as fail$1, m as message } from '../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../chunks/client.js-BE73K9-j.js';
import { z as zod } from '../../../../chunks/adapters.js-Da1EWjvb.js';
import { s as saveUploadedFile } from '../../../../chunks/upload.js-BimPnVXC.js';
import { o as object, n as number, j as file, d as string } from '../../../../chunks/auth.js-CzaJ0OJC.js';

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
			const [result] = await db.update(testimonials).set({
				name,
				position,
				message: testimonial,
				...avatarFile ? { avatar: avatarFile } : {},
				updatedBy: locals?.user?.id
			}).where(eq(testimonials.id, id));
			if (result.affectedRows === 0) return message(form, {
				type: "error",
				text: "That testimonial no longer exists"
			}, { status: 404 });
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
			const [result] = await db.delete(testimonials).where(eq(testimonials.id, id));
			if (result.affectedRows === 0) return message(form, {
				type: "error",
				text: "That testimonial was already deleted"
			}, { status: 404 });
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
//# sourceMappingURL=_page.server.ts.js-DUpkoyrE.js.map
