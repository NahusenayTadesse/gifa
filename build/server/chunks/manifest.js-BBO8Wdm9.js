const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coffee.webp","hero.webp","image1.webp","image10.webp","image11.webp","image12.webp","image13.webp","image14.webp","image2.webp","image3.webp","image4.webp","image5.webp","image6.webp","image7.webp","image8.webp","image9.webp","logo-icon.webp","logo.webp","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CpET25Po.js",app:"_app/immutable/entry/app.Bs17y3iW.js",imports:["_app/immutable/entry/start.CpET25Po.js","_app/immutable/chunks/fyXp6n0X.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/entry/app.Bs17y3iW.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/chunks/HclGiUj8.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-BR9YoD_4.js')),
			__memo(() => import('./nodes/1.js-D6iP4ubD.js')),
			__memo(() => import('./nodes/2.js-BO3jvTCK.js')),
			__memo(() => import('./nodes/3.js-CQPy6ixt.js')),
			__memo(() => import('./nodes/4.js-COdADCtx.js')),
			__memo(() => import('./nodes/5.js-BBetpciK.js')),
			__memo(() => import('./nodes/6.js-BtF1T_LU.js')),
			__memo(() => import('./nodes/7.js-CmDyBcqr.js')),
			__memo(() => import('./nodes/8.js-CCFEpj1s.js')),
			__memo(() => import('./nodes/9.js-CoD9cZRC.js')),
			__memo(() => import('./nodes/10.js-hCie9oJD.js')),
			__memo(() => import('./nodes/11.js-CqO3nGVN.js')),
			__memo(() => import('./nodes/12.js-DcKQcILT.js')),
			__memo(() => import('./nodes/13.js-BBb46vwp.js')),
			__memo(() => import('./nodes/14.js-DxxXsCZ5.js')),
			__memo(() => import('./nodes/15.js-AOpOs3XF.js')),
			__memo(() => import('./nodes/16.js-CLO0pBcY.js')),
			__memo(() => import('./nodes/17.js-C_wfDv5r.js')),
			__memo(() => import('./nodes/18.js-CkldQSh4.js')),
			__memo(() => import('./nodes/19.js-BaGG-15-.js')),
			__memo(() => import('./nodes/20.js-BlwDCdcy.js')),
			__memo(() => import('./nodes/21.js-B7hOBBFr.js')),
			__memo(() => import('./nodes/22.js-kVcnqMam.js')),
			__memo(() => import('./nodes/23.js-Cww-wg-t.js')),
			__memo(() => import('./nodes/24.js-yPeJgmj_.js')),
			__memo(() => import('./nodes/25.js-C8VwS5xA.js')),
			__memo(() => import('./nodes/26.js-CnDTE530.js')),
			__memo(() => import('./nodes/27.js-ClkLxkbY.js')),
			__memo(() => import('./nodes/28.js-CJhtEmwy.js')),
			__memo(() => import('./nodes/29.js-CVXss_vd.js')),
			__memo(() => import('./nodes/30.js-D5C-R_Ry.js')),
			__memo(() => import('./nodes/31.js-DO6TKZHR.js')),
			__memo(() => import('./nodes/32.js-DdLfELtt.js')),
			__memo(() => import('./nodes/33.js-CkCFUSTo.js')),
			__memo(() => import('./nodes/34.js-DCayHdIc.js')),
			__memo(() => import('./nodes/35.js-CsLxEWvp.js')),
			__memo(() => import('./nodes/36.js-CLQ3MXqY.js')),
			__memo(() => import('./nodes/37.js-8QWYssSM.js')),
			__memo(() => import('./nodes/38.js-BoASeLia.js')),
			__memo(() => import('./nodes/39.js-D4cEv7_s.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/book",
				pattern: /^\/book\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel",
				pattern: /^\/dashboard\/admin-panel\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles",
				pattern: /^\/dashboard\/admin-panel\/roles\/?$/,
				params: [],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles/add-roles",
				pattern: /^\/dashboard\/admin-panel\/roles\/add-roles\/?$/,
				params: [],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/roles/[id]",
				pattern: /^\/dashboard\/admin-panel\/roles\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,5,], errors: [1,3,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users",
				pattern: /^\/dashboard\/admin-panel\/users\/?$/,
				params: [],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users/add-users",
				pattern: /^\/dashboard\/admin-panel\/users\/add-users\/?$/,
				params: [],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/dashboard/admin-panel/users/[id]",
				pattern: /^\/dashboard\/admin-panel\/users\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,6,], errors: [1,3,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/dashboard/bookings",
				pattern: /^\/dashboard\/bookings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/dashboard/content/announcements",
				pattern: /^\/dashboard\/content\/announcements\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/dashboard/content/events",
				pattern: /^\/dashboard\/content\/events\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/dashboard/content/faqs",
				pattern: /^\/dashboard\/content\/faqs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/dashboard/content/gallery",
				pattern: /^\/dashboard\/content\/gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/dashboard/content/heroes",
				pattern: /^\/dashboard\/content\/heroes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/dashboard/content/menu-categories",
				pattern: /^\/dashboard\/content\/menu-categories\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/dashboard/content/menu-items",
				pattern: /^\/dashboard\/content\/menu-items\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/dashboard/content/opening-hours",
				pattern: /^\/dashboard\/content\/opening-hours\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/dashboard/content/settings",
				pattern: /^\/dashboard\/content\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/dashboard/enquiries",
				pattern: /^\/dashboard\/enquiries\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/dashboard/event-registrations",
				pattern: /^\/dashboard\/event-registrations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/dashboard/testimonials",
				pattern: /^\/dashboard\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/events/[slug]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/files/[name=filename]",
				pattern: /^\/files\/([^/]+?)\/?$/,
				params: [{"name":"name","matcher":"filename","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/files/_name_filename_/_server.ts.js-D5DdIEYQ.js'))
			},
			{
				id: "/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/private-hire",
				pattern: /^\/private-hire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: filename } = await import ('./entries/matchers/filename.js-tAFpakQ_.js');
			return { filename };
		},
		server_assets: {}
	}
}
})();

export { manifest as m };
//# sourceMappingURL=manifest.js-BBO8Wdm9.js.map
