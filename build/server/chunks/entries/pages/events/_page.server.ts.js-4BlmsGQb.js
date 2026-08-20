import { b as getHero, e as getUpcomingEvents } from '../../../chunks/content.js-DdRtddEa.js';

//#region src/routes/events/+page.server.ts
var load = async () => {
	const [hero, events] = await Promise.all([getHero("events"), getUpcomingEvents()]);
	return {
		hero,
		events
	};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-4BlmsGQb.js.map
