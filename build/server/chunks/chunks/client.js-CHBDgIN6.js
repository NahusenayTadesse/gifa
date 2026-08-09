import './shared.js-4SMYzfPQ.js';
import './exports.js-D8tTp1_m.js';
import './routing.js-NQIFfGdk.js';
import { J as index_server_exports, K as noop } from './index-server.js-CFhxFuri.js';
import './internal2.js-ujsGVL1P.js';
import './utils.js-D-kl_003.js';

var is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
var placeholder_url = "a:";
if (is_legacy) {
	({
		data: {},
		form: null,
		error: null,
		params: {},
		route: { id: null },
		state: {},
		status: -1,
		url: new URL(placeholder_url)
	});
}
//#endregion
//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/runtime/client/client.js
/** @import { RemoteFunctionDataNode, ServerNodesResponse, ServerRedirectNode } from 'types' */
/** @import { CacheEntry } from './remote-functions/cache.svelte.js' */
/** @import { Query } from './remote-functions/query/instance.svelte.js' */
/** @import { LiveQuery } from './remote-functions/query-live/instance.svelte.js' */
var { onMount, tick } = index_server_exports;
/** @type {Set<(navigation: import('@sveltejs/kit').AfterNavigate) => void>} */
var after_navigate_callbacks = /* @__PURE__ */ new Set();
/**
* @template {Function} T
* @param {Set<T>} callbacks
* @param {T} callback
*/
function add_navigation_callback(callbacks, callback) {
	onMount(() => {
		callbacks.add(callback);
		return () => {
			callbacks.delete(callback);
		};
	});
}
/**
* A lifecycle function that runs the supplied `callback` when the current component mounts, and also whenever we navigate to a URL.
*
* `afterNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
* @param {(navigation: import('@sveltejs/kit').AfterNavigate) => void} callback
* @returns {void}
*/
function afterNavigate(callback) {
	add_navigation_callback(after_navigate_callbacks, callback);
}
/**
* Allows you to navigate programmatically to a given route, with options such as keeping the current element focused.
* Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified `url`.
*
* For external URLs, use `window.location = url` instead of calling `goto(url)`.
*
* @param {string | URL} url Where to navigate to. Note that if you've set [`config.kit.paths.base`](https://svelte.dev/docs/kit/configuration#paths) and the URL is root-relative, you need to prepend the base path if you want to navigate within the app.
* @param {Object} [opts] Options related to the navigation
* @param {boolean} [opts.replaceState] If `true`, will replace the current `history` entry rather than creating a new one with `pushState`
* @param {boolean} [opts.noScroll] If `true`, the browser will maintain its scroll position rather than scrolling to the top of the page after navigation
* @param {boolean} [opts.keepFocus] If `true`, the currently focused element will retain focus after navigation. Otherwise, focus will be reset to the body
* @param {boolean} [opts.invalidateAll] If `true`, all `load` functions of the page will be rerun. See https://svelte.dev/docs/kit/load#rerunning-load-functions for more info on invalidation.
* @param {Array<string | URL | ((url: URL) => boolean)>} [opts.invalidate] Causes any load functions to re-run if they depend on one of the urls
* @param {App.PageState} [opts.state] An optional object that will be available as `page.state`
* @returns {Promise<void>}
*/
function goto(url, opts = {}) {
	throw new Error("Cannot call goto(...) on the server");
}
/**
* Causes all `load` and `query` functions belonging to the currently active page to re-run. Returns a `Promise` that resolves when the page is subsequently updated.
* @returns {Promise<void>}
*/
function invalidateAll() {
	throw new Error("Cannot call invalidateAll() on the server");
}
/**
* This action updates the `form` property of the current page with the given data and updates `page.status`.
* In case of an error, it redirects to the nearest error page.
* @template {Record<string, unknown> | undefined} Success
* @template {Record<string, unknown> | undefined} Failure
* @param {import('@sveltejs/kit').ActionResult<Success, Failure>} result
* @returns {Promise<void>}
*/
async function applyAction(result) {
	throw new Error("Cannot call applyAction(...) on the server");
}

export { applyAction as a, afterNavigate as b, goto as g, invalidateAll as i };
//# sourceMappingURL=client.js-CHBDgIN6.js.map
