import { r as db, D as user, E as roles, J as rolePermissions, s as sql, m as eq } from '../../../../../chunks/db.js-CPhQsSSC.js';

//#region src/routes/dashboard/admin-panel/users/+page.server.ts
var load = async () => {
	return { userList: await db.select({
		id: user.id,
		name: user.name,
		email: user.email,
		role: roles.name,
		roleId: user.roleId,
		createdAt: user.createdAt,
		permissionsCount: sql`COUNT(DISTINCT ${rolePermissions.id})`
	}).from(user).leftJoin(roles, eq(roles.id, user.roleId)).leftJoin(rolePermissions, eq(rolePermissions.roleId, roles.id)).groupBy(user.id, user.name, user.email, roles.name, user.createdAt) };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-BQhkbTop.js.map
