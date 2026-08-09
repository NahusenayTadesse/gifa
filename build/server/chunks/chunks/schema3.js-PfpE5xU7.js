import { o as object, n as number, d as string, e as email } from './auth.js-iJB6n9vL.js';

//#region src/routes/dashboard/admin-panel/users/[id]/schema.ts
var editUserSchema = object({
	email: email("Email is required"),
	name: string("Name is required").min(2).max(100),
	role: number()
});

export { editUserSchema as e };
//# sourceMappingURL=schema3.js-PfpE5xU7.js.map
