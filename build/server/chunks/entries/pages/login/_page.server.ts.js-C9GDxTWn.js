import { s as superValidate, m as message, a as setError } from '../../../chunks/client2.js-ASiNbvEC.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/client.js-PQFg6ATt.js';
import { z as zod } from '../../../chunks/adapters.js-CwAUwTBz.js';
import { A as APIError } from '../../../chunks/error.js-DzWUU7VP.js';
import { a as auth, o as object, d as string, e as email } from '../../../chunks/auth.js-CCGW_diT.js';
import { r as redirect$1 } from '../../../chunks/server.js-O2-ZHFi0.js';

//#region src/routes/login/schema.ts
var loginSchema = object({
	email: email({ error: "Invalid email address" }),
	password: string().min(8, { error: "Password must be at least 8 characters" })
});
//#endregion
//#region src/routes/login/+page.server.ts
var load = async ({ locals }) => {
	if (locals.user) return redirect$1(302, "/dashboard");
	return { form: await superValidate(zod(loginSchema)) };
};
var actions = { login: async (event) => {
	const form = await superValidate(event.request, zod(loginSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form"
	}, { status: 400 });
	const { email, password } = form.data;
	try {
		if (!(await auth.api.signInEmail({ body: {
			email,
			password
		} })).user) {
			setError(form, "email", "Invalid email or password");
			setError(form, "password", "Invalid email or password");
			return message(form, {
				type: "error",
				text: "An error occurred while logging in"
			}, { status: 401 });
		}
	} catch (error) {
		if (error instanceof APIError) return message(form, {
			type: "error",
			text: error?.message
		}, { status: 401 });
		return message(form, {
			type: "error",
			text: "Login Failed"
		}, { status: 500 });
	}
	return redirect$1(302, "/dashboard", {
		type: "success",
		message: "Signed in successfully"
	}, event.cookies);
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-C9GDxTWn.js.map
