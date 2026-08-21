import { r as db, D as user, m as eq, K as session, E as roles, L as permissions, J as rolePermissions } from '../../../../../../chunks/db.js-CPhQsSSC.js';
import { f as fail$1, s as superValidate, a as setError, m as message } from '../../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-BE73K9-j.js';
import { z as zod } from '../../../../../../chunks/adapters.js-Da1EWjvb.js';
import { s as setFlash } from '../../../../../../chunks/server.js-O2-ZHFi0.js';
import { e as editUserSchema } from '../../../../../../chunks/schema3.js-D6S30Fd7.js';
import { v as error } from '../../../../../../chunks/utils.js-D-kl_003.js';

//#region src/routes/dashboard/admin-panel/users/[id]/+page.server.ts
var load = async ({ params }) => {
	const { id } = params;
	const form = await superValidate(zod(editUserSchema));
	const singleUser = await db.select({
		id: user.id,
		name: user.name,
		email: user.email,
		roleId: user.roleId,
		role: roles.name,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt
	}).from(user).leftJoin(roles, eq(user.roleId, roles.id)).where(eq(user.id, id)).then((rows) => rows[0]);
	if (!singleUser) error(404, { message: "User not found" });
	return {
		singleUser,
		id,
		form,
		roleList: await db.select({
			value: roles.id,
			name: roles.name
		}).from(roles),
		permissionList: await db.select({
			id: permissions.id,
			name: permissions.name,
			description: permissions.description
		}).from(permissions).innerJoin(rolePermissions, eq(permissions.id, rolePermissions.permissionId)).where(eq(rolePermissions.roleId, singleUser.roleId))
	};
};
var actions = {
	editUser: async ({ request, cookies, locals, params }) => {
		const form = await superValidate(request, zod(editUserSchema));
		const { id } = params;
		if (!form.valid) {
			setFlash({
				type: "error",
				message: "Please check your form data."
			}, cookies);
			return fail$1(400, { form });
		}
		const { name, email, role } = form.data;
		try {
			const existingUser = await db.select().from(user).where(eq(user.email, email)).then((res) => res[0]);
			if (existingUser) {
				if (existingUser.id !== id) {
					setError(form, "email", "User with this email already exists, change your email.");
					return message(form, {
						type: "error",
						text: "User with this email already exists, change your email."
					}, { status: 400 });
				}
			}
			await db.update(user).set({
				name,
				email,
				roleId: role
			}).where(eq(user.id, id));
			await db.delete(session).where(eq(session.userId, id));
			setFlash({
				type: "success",
				message: "User Updated Successfully"
			}, cookies);
			return message(form, {
				type: "success",
				text: "User Updated Successfully"
			});
		} catch (err) {
			console.error("Failed to update user:", err);
			setFlash({
				type: "error",
				message: "Could not update user. Please try again."
			}, cookies);
			return message(form, {
				type: "error",
				text: "Could not update user. Please try again."
			});
		}
	},
	delete: async ({ cookies, params }) => {
		const { id } = params;
		try {
			if (!id) {
				setFlash({
					type: "error",
					message: "Unexpected Error: missing user id"
				}, cookies);
				return fail$1(400);
			}
			await db.delete(user).where(eq(user.id, id));
			setFlash({
				type: "success",
				message: "User Deleted Successfully!"
			}, cookies);
		} catch (err) {
			console.error("Error deleting user:", err);
			setFlash({
				type: "error",
				message: "Could not delete user. Please try again."
			}, cookies);
			return fail$1(500);
		}
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DPvZ6XFn.js.map
