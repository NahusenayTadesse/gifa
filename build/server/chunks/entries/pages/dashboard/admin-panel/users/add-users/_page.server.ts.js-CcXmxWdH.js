import { r as db, D as user, m as eq, E as roles } from '../../../../../../chunks/db.js-CPhQsSSC.js';
import { s as superValidate, m as message } from '../../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-BE73K9-j.js';
import { z as zod } from '../../../../../../chunks/adapters.js-Da1EWjvb.js';
import { A as APIError } from '../../../../../../chunks/error.js-DzWUU7VP.js';
import { a as auth } from '../../../../../../chunks/auth.js-CzaJ0OJC.js';
import { a as add } from '../../../../../../chunks/schema4.js-D2qy_KTP.js';

//#region src/routes/dashboard/admin-panel/users/add-users/+page.server.ts
var load = async () => {
	return {
		form: await superValidate(zod(add)),
		allRoles: await db.select({
			value: roles.id,
			name: roles.name
		}).from(roles)
	};
};
var actions = { add: async (event) => {
	const form = await superValidate(event.request, zod(add));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form"
	}, { status: 400 });
	const { name, email, password, role } = form.data;
	try {
		await db.transaction(async (tx) => {
			const newCustomer = await auth.api.createUser({ body: {
				email,
				password,
				name,
				role: role === 1 ? "admin" : "user"
			} });
			await tx.update(user).set({ roleId: role }).where(eq(user.id, newCustomer?.user.id));
		});
		return message(form, {
			type: "success",
			text: "User Added Successful!"
		});
	} catch (error) {
		console.error(error);
		if (error instanceof APIError) return message(form, {
			type: "error",
			text: error?.message
		}, { status: 500 });
		return message(form, {
			type: "error",
			text: "Failed to add user"
		}, { status: 500 });
	}
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-CcXmxWdH.js.map
