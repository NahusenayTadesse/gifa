import { r as db, c as count, E as enquiries, m as eq } from '../../../chunks/db.js-DqGthl3g.js';
import { z as redirect } from '../../../chunks/utils.js-D-kl_003.js';

//#region src/routes/dashboard/+layout.server.ts
var load = async ({ locals, depends }) => {
	if (!locals.user) return redirect(302, "/login");
	depends("app:messages");
	const messageNumber = await db.select({ count: count() }).from(enquiries).where(eq(enquiries.seen, false)).then((rows) => rows[0]?.count ?? 0);
	return {
		name: locals.user.name,
		messageNumber
	};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _layout_server_ts as _ };
//# sourceMappingURL=_layout.server.ts.js-Bk-lPd80.js.map
