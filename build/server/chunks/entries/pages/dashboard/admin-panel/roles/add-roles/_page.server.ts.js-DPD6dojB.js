import { r as db, E as roles } from '../../../../../../chunks/db.js-CPhQsSSC.js';
import { s as superValidate, m as message, a as setError } from '../../../../../../chunks/client2.js-ccjA_ZCz.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-BE73K9-j.js';
import { z as zod } from '../../../../../../chunks/adapters.js-Da1EWjvb.js';
import { c as createRoleSchema } from '../../../../../../chunks/schema2.js-CcZfCp-P.js';

//#region src/routes/dashboard/admin-panel/roles/add-roles/+page.server.ts
var load = async () => {
	return { form: await superValidate(zod(createRoleSchema)) };
};
var actions = { add: async ({ request }) => {
	const form = await superValidate(request, zod(createRoleSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for Errors"
	});
	const { name, description } = form.data;
	try {
		await db.insert(roles).values({
			name,
			description
		});
		return message(form, {
			type: "success",
			text: "Role added successfully."
		});
	} catch (err) {
		if (err.code === "ER_DUP_ENTRY") return setError(form, "name", "Role Name already exists.");
		console.error("Failed to add role:", err);
		return message(form, {
			type: "error",
			text: "Could not add role. Please try again."
		});
	}
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-DPD6dojB.js.map
