import { r as db, C as user, D as roles, m as eq } from '../../chunks/db.js-DqGthl3g.js';
import { g as getSettings, a as getActiveAnnouncements } from '../../chunks/content.js-Dj82eJqF.js';

//#region src/routes/+layout.server.ts
/**
* The footer shows contact details on every page.
*
* `roleName` is also resolved here because the dashboard guard and the login
* redirect both read it from `parent()`.
*/
var load = async ({ locals }) => {
	const userId = locals.user?.id;
	const [settings, announcements, account] = await Promise.all([
		getSettings(),
		getActiveAnnouncements(),
		userId ? db.select({
			roleName: roles.name,
			legacyRole: user.role
		}).from(user).leftJoin(roles, eq(roles.id, user.roleId)).where(eq(user.id, userId)).limit(1).then((rows) => rows.at(0)) : void 0
	]);
	return {
		settings,
		announcements,
		roleName: account?.roleName ?? account?.legacyRole ?? void 0
	};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _layout_server_ts as _ };
//# sourceMappingURL=_layout.server.ts.js-m1o8_e3-.js.map
