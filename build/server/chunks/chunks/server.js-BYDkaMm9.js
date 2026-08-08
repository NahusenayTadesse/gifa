import { z as redirect } from './utils.js-D-kl_003.js';

//#region node_modules/.pnpm/sveltekit-flash-message@2.4.6_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_s_0eddf70d8480077dc90d3478148a7cba/node_modules/sveltekit-flash-message/dist/server.js
var cookieName = "flash";
var flashCookieOptions = {
	path: "/",
	maxAge: 120,
	httpOnly: false,
	sameSite: "strict"
};
function redirect$1(status, location, message, event) {
	switch (arguments.length) {
		case 2: return realRedirect(status, `${location}`);
		case 3: return realRedirect(303, status, location);
		case 4: return realRedirect(status, location, message);
		default: throw new Error("Invalid redirect arguments");
	}
}
function realRedirect(status, location, message, event) {
	if (!message) return redirect(status, location.toString());
	throw new Error("RequestEvent is required for redirecting with flash message");
}
/**
* Set the flash message without redirecting, for example when validation fails in a form action.
* @param {App.PageData['flash']} message The flash message.
* @param {RequestEvent} event The event for the form action or load function.
*/
function setFlash(message, event) {
	("cookies" in event ? event.cookies : event).set(cookieName, JSON.stringify(message), {
		...flashCookieOptions,
		path: flashCookieOptions.path
	});
}

export { redirect$1 as r, setFlash as s };
//# sourceMappingURL=server.js-BYDkaMm9.js.map
