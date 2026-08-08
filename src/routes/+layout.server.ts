import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { getSettings, getActiveAnnouncements } from '$lib/server/content';
import { roles, user } from '$lib/server/db/schema';
import type { LayoutServerLoad } from './$types';

/**
 * The footer shows contact details on every page.
 *
 * `roleName` is also resolved here because the dashboard guard and the login
 * redirect both read it from `parent()`.
 */
export const load: LayoutServerLoad = async ({ locals }) => {
	const userId = locals.user?.id;

	const [settings, announcements, account] = await Promise.all([
		getSettings(),
		getActiveAnnouncements(),
		userId
			? db
					.select({ roleName: roles.name, legacyRole: user.role })
					.from(user)
					.leftJoin(roles, eq(roles.id, user.roleId))
					.where(eq(user.id, userId))
					.limit(1)
					.then((rows) => rows.at(0))
			: undefined
	]);

	return {
		settings,
		announcements,
		// `roleId` is the normalised source; `user.role` is the better-auth column.
		roleName: account?.roleName ?? account?.legacyRole ?? undefined
	};
};
