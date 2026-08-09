import { o as object, d as string } from './auth.js-iJB6n9vL.js';

//#region src/routes/dashboard/admin-panel/roles/add-roles/schema.ts
var createRoleSchema = object({
	name: string().min(1, "Role name is required").max(100, "Role name must be under 100 characters"),
	description: string().min(1, "Role description is required").max(500, "Role description must be under 500 characters")
});

export { createRoleSchema as c };
//# sourceMappingURL=schema2.js-BpjVOfSG.js.map
