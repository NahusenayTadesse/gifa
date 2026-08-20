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
		client: {start:"_app/immutable/entry/start.C5_IK81w.js",app:"_app/immutable/entry/app.Hn74EDts.js",imports:["_app/immutable/entry/start.C5_IK81w.js","_app/immutable/chunks/Bgmx4_U3.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/entry/app.Hn74EDts.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/chunks/HclGiUj8.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-BSU-xUSw.js')),
			__memo(() => import('./nodes/1.js-CyyT7Hsi.js')),
			__memo(() => import('./nodes/2.js-DVaQ-1ne.js')),
			__memo(() => import('./nodes/3.js-D_b0fQ9e.js')),
			__memo(() => import('./nodes/4.js-CQNlr5M8.js')),
			__memo(() => import('./nodes/5.js-DaNoK06B.js')),
			__memo(() => import('./nodes/6.js-CC5p3F0K.js')),
			__memo(() => import('./nodes/7.js-Ct5Lp8rF.js')),
			__memo(() => import('./nodes/8.js-DUEbz-Pl.js')),
			__memo(() => import('./nodes/9.js-CW7Awe2G.js')),
			__memo(() => import('./nodes/10.js-BKDM2qB7.js')),
			__memo(() => import('./nodes/11.js-f3iXCxjo.js')),
			__memo(() => import('./nodes/12.js-BE3zkvCr.js')),
			__memo(() => import('./nodes/13.js-f4gOnnEE.js')),
			__memo(() => import('./nodes/14.js-DMroU_J4.js')),
			__memo(() => import('./nodes/15.js-CG5e0BMc.js')),
			__memo(() => import('./nodes/16.js-7LMgwoE3.js')),
			__memo(() => import('./nodes/17.js-DhT9zNMn.js')),
			__memo(() => import('./nodes/18.js-BwBNxT6M.js')),
			__memo(() => import('./nodes/19.js-BkDotV4U.js')),
			__memo(() => import('./nodes/20.js-BXxvW32L.js')),
			__memo(() => import('./nodes/21.js-ByQnOj_Q.js')),
			__memo(() => import('./nodes/22.js-C6F-rRBv.js')),
			__memo(() => import('./nodes/23.js-DrlcGkT6.js')),
			__memo(() => import('./nodes/24.js-JxdFSYTI.js')),
			__memo(() => import('./nodes/25.js-CWAh-8bv.js')),
			__memo(() => import('./nodes/26.js-Bh8MUQCq.js')),
			__memo(() => import('./nodes/27.js-CvFBHQLl.js')),
			__memo(() => import('./nodes/28.js-DLObX_oL.js')),
			__memo(() => import('./nodes/29.js-DookY4NH.js')),
			__memo(() => import('./nodes/30.js-BzHpaKEU.js')),
			__memo(() => import('./nodes/31.js-BMGjXEhl.js')),
			__memo(() => import('./nodes/32.js-CB8LuEE-.js')),
			__memo(() => import('./nodes/33.js-BMyaJdgc.js')),
			__memo(() => import('./nodes/34.js-hZmKWKsi.js')),
			__memo(() => import('./nodes/35.js-CjTbMivO.js')),
			__memo(() => import('./nodes/36.js-b4JgEVOL.js')),
			__memo(() => import('./nodes/37.js-BMCaLvBE.js')),
			__memo(() => import('./nodes/38.js-BPjD4drA.js')),
			__memo(() => import('./nodes/39.js-vQA1SFM2.js')),
			__memo(() => import('./nodes/40.js-lVfeDoXV.js'))
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
				id: "/dashboard/content/event-gallery",
				pattern: /^\/dashboard\/content\/event-gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/dashboard/content/events",
				pattern: /^\/dashboard\/content\/events\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/dashboard/content/faqs",
				pattern: /^\/dashboard\/content\/faqs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/dashboard/content/gallery",
				pattern: /^\/dashboard\/content\/gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/dashboard/content/heroes",
				pattern: /^\/dashboard\/content\/heroes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/dashboard/content/menu-categories",
				pattern: /^\/dashboard\/content\/menu-categories\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/dashboard/content/menu-items",
				pattern: /^\/dashboard\/content\/menu-items\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/dashboard/content/opening-hours",
				pattern: /^\/dashboard\/content\/opening-hours\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/dashboard/content/settings",
				pattern: /^\/dashboard\/content\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/dashboard/enquiries",
				pattern: /^\/dashboard\/enquiries\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/dashboard/event-registrations",
				pattern: /^\/dashboard\/event-registrations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/dashboard/testimonials",
				pattern: /^\/dashboard\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/events/[slug]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/files/[name=filename]",
				pattern: /^\/files\/([^/]+?)\/?$/,
				params: [{"name":"name","matcher":"filename","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/files/_name_filename_/_server.ts.js-BPKsyrN2.js'))
			},
			{
				id: "/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/private-hire",
				pattern: /^\/private-hire\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/reset-password",
				pattern: /^\/reset-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
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
//# sourceMappingURL=manifest.js-CYXkA6X-.js.map
