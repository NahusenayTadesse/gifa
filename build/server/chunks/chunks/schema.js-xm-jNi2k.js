import { o as object, f as array, d as string } from './auth.js-iJB6n9vL.js';

//#region src/routes/dashboard/admin-panel/roles/[id]/schema.ts
var editRoleSchema = object({
	name: string().min(1, "Role name is required").max(100, "Role name must be under 100 characters"),
	description: string().min(1, "Role description is required").max(500, "Role description must be under 500 characters"),
	permissions: array(string().min(1)).nonempty("At least one permission must be selected")
});

export { editRoleSchema as e };
//# sourceMappingURL=schema.js-xm-jNi2k.js.map
