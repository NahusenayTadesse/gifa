import { o as object, n as number, d as string, e as email } from './auth.js-Dz0kDMeZ.js';

//#region src/routes/dashboard/admin-panel/users/[id]/schema.ts
var editUserSchema = object({
	email: email("Email is required"),
	name: string("Name is required").min(2).max(100),
	role: number()
});

export { editUserSchema as e };
//# sourceMappingURL=schema3.js-CQXcjzgY.js.map
