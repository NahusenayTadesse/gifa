import { d as building } from '../chunks/internal.js-Cfab1bYl.js';
import { a as auth, s as svelteKitHandler } from '../chunks/auth.js-Dz0kDMeZ.js';
import '../chunks/shared.js-4SMYzfPQ.js';
import '../chunks/uneval.js-CatQk29t.js';
import '../chunks/shared-server.js-D6HhUxAQ.js';
import '../chunks/utils.js-D-kl_003.js';
import '../chunks/routing.js-NQIFfGdk.js';
import '../chunks/internal2.js-CD2yIDC5.js';
import '../chunks/index-server.js-CFhxFuri.js';
import '../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../chunks/legacy-client.js-D1o7JnSw.js';
import '../chunks/db.js-DqGthl3g.js';
import 'node:buffer';
import 'url';
import 'net';
import 'tls';
import 'timers';
import 'events';
import 'stream';
import 'buffer';
import 'string_decoder';
import 'process';
import 'crypto';
import 'zlib';
import 'util';
import 'node:events';
import '../chunks/dist4.js-DHSx5JNT.js';
import '../chunks/error.js-DzWUU7VP.js';
import '../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';

//#region src/hooks.server.ts
var handleBetterAuth = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });
	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}
	return svelteKitHandler({
		event,
		resolve,
		auth,
		building
	});
};
var handle = handleBetterAuth;

export { handle };
//# sourceMappingURL=hooks.server.js-BG_dm3P8.js.map
