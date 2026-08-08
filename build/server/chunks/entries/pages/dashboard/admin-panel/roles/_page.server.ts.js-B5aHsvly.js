import { r as db, D as roles, c as count, C as user, m as eq } from '../../../../../chunks/db.js-DqGthl3g.js';

//#region src/routes/dashboard/admin-panel/roles/+page.server.ts
var load = async () => {
	return { roleList: await db.select({
		id: roles.id,
		name: roles.name,
		description: roles.description,
		userCount: count(user.id),
		status: roles.isActive
	}).from(roles).leftJoin(user, eq(user.roleId, roles.id)).groupBy(roles.id) };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-B5aHsvly.js.map
