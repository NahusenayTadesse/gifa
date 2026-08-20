import { r as db, E as roles, m as eq, I as countDistinct, J as rolePermissions, D as user, o as and } from '../../../../../../chunks/db.js-CPhQsSSC.js';
import { f as fail$1, s as superValidate, m as message, a as setError } from '../../../../../../chunks/client2.js-ASiNbvEC.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-PQFg6ATt.js';
import { z as zod } from '../../../../../../chunks/adapters.js-CwAUwTBz.js';
import { e as editRoleSchema } from '../../../../../../chunks/schema.js-vvkHpxhv.js';
import { s as setFlash } from '../../../../../../chunks/server.js-O2-ZHFi0.js';
import { v as error } from '../../../../../../chunks/utils.js-D-kl_003.js';

//#region src/routes/dashboard/admin-panel/roles/[id]/+page.server.ts
var load = async ({ params }) => {
	const { id } = params;
	const form = await superValidate(zod(editRoleSchema));
	const singleUser = await db.select({
		id: roles.id,
		name: roles.name,
		description: roles.description,
		userCount: countDistinct(user.id),
		permissionsCount: countDistinct(rolePermissions.id)
	}).from(roles).leftJoin(user, and(eq(user.roleId, roles.id))).leftJoin(rolePermissions, eq(rolePermissions.roleId, roles.id)).groupBy(roles.id).where(eq(roles.id, Number(id))).then((rows) => rows[0]);
	if (!singleUser) return error(404, { message: "Role not found" });
	return {
		singleUser,
		id,
		form,
		userList: await db.select({
			id: user.id,
			email: user.email,
			name: user.name
		}).from(user).where(eq(user.roleId, Number(id)))
	};
};
var actions = {
	edit: async ({ request, params }) => {
		const { id } = params;
		const form = await superValidate(request, zod(editRoleSchema));
		if (!form.valid) return message(form, {
			type: "error",
			text: "Please check the form for Errors"
		});
		const { name, description } = form.data;
		try {
			await db.update(roles).set({
				name,
				description
			}).where(eq(roles.id, Number(id)));
			return message(form, {
				type: "success",
				text: "Role updated successfully."
			});
		} catch (err) {
			if (err.code === "ER_DUP_ENTRY") return setError(form, "name", "Role updated already exists.");
			console.error("Failed to update role:", err);
			return message(form, {
				type: "error",
				text: "Could not update role. Please try again."
			});
		}
	},
	delete: async ({ params, cookies }) => {
		const { id } = params;
		try {
			await db.delete(roles).where(eq(roles.id, Number(id)));
			setFlash({
				type: "success",
				message: "Role Deleted Successfully!"
			}, cookies);
		} catch (err) {
			console.error("Failed to delete role:", err);
			setFlash({
				type: "error",
				message: "Could not delete role. Please try again."
			}, cookies);
			return fail$1(400);
		}
	}
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DF_0YEDK.js.map
