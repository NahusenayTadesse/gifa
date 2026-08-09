import { o as object, g as number, d as string, e as email } from './auth.js-CigcsaCA.js';

//#region src/routes/dashboard/admin-panel/users/add-users/schema.ts
var add = object({
	name: string("Name is Required").min(2).max(100),
	email: email("Email is Required"),
	password: string("Password is required!"),
	role: number("Role is required!")
});

export { add as a };
//# sourceMappingURL=schema4.js-Cam4JC7g.js.map
