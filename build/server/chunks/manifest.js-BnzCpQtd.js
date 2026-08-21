const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["WhatsApp Video 2026-08-20 at 10.10.04 PM.mp4","coffee.webp","hero.webp","image1.webp","image10.webp","image11.webp","image12.webp","image13.webp","image14.webp","image15.webp","image16.webp","image17.webp","image18.webp","image19.webp","image2.webp","image3.webp","image4.webp","image5.webp","image6.webp","image7.webp","image8.webp","image9.webp","logo-icon.webp","logo.webp","robots.txt"]),
	mimeTypes: {".mp4":"video/mp4",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.7shjkW_C.js",app:"_app/immutable/entry/app.CqE85dF2.js",imports:["_app/immutable/entry/start.7shjkW_C.js","_app/immutable/chunks/Bp8Sxz8G.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/entry/app.CqE85dF2.js","_app/immutable/chunks/B-rfjnbT.js","_app/immutable/chunks/HclGiUj8.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-C6y-nXUC.js')),
			__memo(() => import('./nodes/1.js-CKO9s4gG.js')),
			__memo(() => import('./nodes/2.js-60zD9M6i.js')),
			__memo(() => import('./nodes/3.js-CUqw1loi.js')),
			__memo(() => import('./nodes/4.js-CQNlr5M8.js')),
			__memo(() => import('./nodes/5.js-DWDi4iMa.js')),
			__memo(() => import('./nodes/6.js-B-CetXcf.js')),
			__memo(() => import('./nodes/7.js-BJsWWHtk.js')),
			__memo(() => import('./nodes/8.js-DVOLsoLy.js')),
			__memo(() => import('./nodes/9.js-CPpFsvLy.js')),
			__memo(() => import('./nodes/10.js-BtJb-y2n.js')),
			__memo(() => import('./nodes/11.js-rQSZFFvq.js')),
			__memo(() => import('./nodes/12.js-BE3zkvCr.js')),
			__memo(() => import('./nodes/13.js-CYIFFLnN.js')),
			__memo(() => import('./nodes/14.js-CUPk0mKT.js')),
			__memo(() => import('./nodes/15.js-B3zRO08I.js')),
			__memo(() => import('./nodes/16.js--PZN0NDI.js')),
			__memo(() => import('./nodes/17.js-DqNx4yog.js')),
			__memo(() => import('./nodes/18.js-DsRgRNSS.js')),
			__memo(() => import('./nodes/19.js-CbL8akNI.js')),
			__memo(() => import('./nodes/20.js-C1up5fNd.js')),
			__memo(() => import('./nodes/21.js-aqWEuniB.js')),
			__memo(() => import('./nodes/22.js-BwrPxbNr.js')),
			__memo(() => import('./nodes/23.js-D3RRSd_f.js')),
			__memo(() => import('./nodes/24.js-cHsTtyHe.js')),
			__memo(() => import('./nodes/25.js-VaK0FRBi.js')),
			__memo(() => import('./nodes/26.js-COaE0Bai.js')),
			__memo(() => import('./nodes/27.js-BPOXWylm.js')),
			__memo(() => import('./nodes/28.js-BVLNOhDa.js')),
			__memo(() => import('./nodes/29.js-C-PHn-9B.js')),
			__memo(() => import('./nodes/30.js-DSK7eOO3.js')),
			__memo(() => import('./nodes/31.js-DW2HkHEu.js')),
			__memo(() => import('./nodes/32.js-rSwsCV6E.js')),
			__memo(() => import('./nodes/33.js-BMyaJdgc.js')),
			__memo(() => import('./nodes/34.js-Cpy_fVVw.js')),
			__memo(() => import('./nodes/35.js-CjTbMivO.js')),
			__memo(() => import('./nodes/36.js-b4JgEVOL.js')),
			__memo(() => import('./nodes/37.js-Cf-SSOn1.js')),
			__memo(() => import('./nodes/38.js-DhgtfpH2.js')),
			__memo(() => import('./nodes/39.js-CPqg7BfJ.js')),
			__memo(() => import('./nodes/40.js-Cb74TmRG.js'))
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
//# sourceMappingURL=manifest.js-BnzCpQtd.js.map
