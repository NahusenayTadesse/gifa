import { r as db, D as roles, H as countDistinct, I as rolePermissions, C as user, o as and, m as eq } from '../../../../../../chunks/db.js-DqGthl3g.js';
import { s as superValidate } from '../../../../../../chunks/client2.js-BrZUAIoh.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-SaiAi5EC.js';
import { z as zod } from '../../../../../../chunks/adapters.js-DZdKSGWy.js';
import { e as editRoleSchema } from '../../../../../../chunks/schema.js-Bg30kTKO.js';
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

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CuEEAUg7.js.map
