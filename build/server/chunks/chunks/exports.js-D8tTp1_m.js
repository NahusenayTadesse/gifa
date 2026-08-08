//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/utils/array.js
/**
* Removes nullish values from an array.
*
* @template T
* @param {Array<T>} arr
*/
function compact(arr) {
	return arr.filter(
		/** @returns {val is NonNullable<T>} */
		(val) => val != null
	);
}
//#endregion
//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/runtime/pathname.js
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
/** @param {string} pathname */
function has_data_suffix(pathname) {
	return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
/** @param {string} pathname */
function add_data_suffix(pathname) {
	if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
	return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
/** @param {string} pathname */
function strip_data_suffix(pathname) {
	if (pathname.endsWith(HTML_DATA_SUFFIX)) return pathname.slice(0, -16) + ".html";
	return pathname.slice(0, -12);
}
var ROUTE_SUFFIX = "/__route.js";
/**
* @param {string} pathname
* @returns {boolean}
*/
function has_resolution_suffix(pathname) {
	return pathname.endsWith(ROUTE_SUFFIX);
}
/**
* Convert a regular URL to a route to send to SvelteKit's server-side route resolution endpoint
* @param {string} pathname
* @returns {string}
*/
function add_resolution_suffix(pathname) {
	return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
/**
* @param {string} pathname
* @returns {string}
*/
function strip_resolution_suffix(pathname) {
	return pathname.slice(0, -11);
}
//#endregion
//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/runtime/telemetry/noop.js
/**
* @type {Span}
*/
var noop_span = {
	spanContext() {
		return noop_span_context;
	},
	setAttribute() {
		return this;
	},
	setAttributes() {
		return this;
	},
	addEvent() {
		return this;
	},
	setStatus() {
		return this;
	},
	updateName() {
		return this;
	},
	end() {
		return this;
	},
	isRecording() {
		return false;
	},
	recordException() {
		return this;
	},
	addLink() {
		return this;
	},
	addLinks() {
		return this;
	}
};
/**
* @type {SpanContext}
*/
var noop_span_context = {
	traceId: "",
	spanId: "",
	traceFlags: 0
};
//#endregion
//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/utils/hash.js
/**
* Hash using djb2
* @param {import('types').StrictBody[]} values
*/
function hash(...values) {
	let hash = 5381;
	for (const value of values) if (typeof value === "string") {
		let i = value.length;
		while (i) hash = hash * 33 ^ value.charCodeAt(--i);
	} else if (ArrayBuffer.isView(value)) {
		const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
		let i = buffer.length;
		while (i) hash = hash * 33 ^ buffer[--i];
	} else throw new TypeError("value must be a string or TypedArray");
	return (hash >>> 0).toString(36);
}
//#endregion
//#region node_modules/.pnpm/@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typescript-eslin_8beb2c28246d00e10cd9c2e84cec389d/node_modules/@sveltejs/kit/src/utils/exports.js
/**
* @param {Set<string>} expected
*/
function validator(expected) {
	/**
	* @param {any} module
	* @param {string} [file]
	*/
	function validate(module, file) {
		if (!module) return;
		for (const key in module) {
			if (key[0] === "_" || expected.has(key)) continue;
			const values = [...expected.values()];
			const hint = hint_for_supported_files(key, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
			throw new Error(`Invalid export '${key}'${file ? ` in ${file}` : ""} (${hint})`);
		}
	}
	return validate;
}
/**
* @param {string} key
* @param {string} ext
* @returns {string | void}
*/
function hint_for_supported_files(key, ext = ".js") {
	const supported_files = [];
	if (valid_layout_exports.has(key)) supported_files.push(`+layout${ext}`);
	if (valid_page_exports.has(key)) supported_files.push(`+page${ext}`);
	if (valid_layout_server_exports.has(key)) supported_files.push(`+layout.server${ext}`);
	if (valid_page_server_exports.has(key)) supported_files.push(`+page.server${ext}`);
	if (valid_server_exports.has(key)) supported_files.push(`+server${ext}`);
	if (supported_files.length > 0) return `'${key}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
}
var valid_layout_exports = /* @__PURE__ */ new Set([
	"load",
	"prerender",
	"csr",
	"ssr",
	"trailingSlash",
	"config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([
	...valid_layout_server_exports,
	"actions",
	"entries"
]);
var valid_server_exports = /* @__PURE__ */ new Set([
	"GET",
	"POST",
	"PATCH",
	"PUT",
	"DELETE",
	"OPTIONS",
	"HEAD",
	"fallback",
	"prerender",
	"trailingSlash",
	"config",
	"entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);

export { has_data_suffix as a, strip_data_suffix as b, add_data_suffix as c, add_resolution_suffix as d, validate_layout_exports as e, validate_page_server_exports as f, validate_page_exports as g, has_resolution_suffix as h, hash as i, compact as j, noop_span as n, strip_resolution_suffix as s, validate_layout_server_exports as v };
//# sourceMappingURL=exports.js-D8tTp1_m.js.map
