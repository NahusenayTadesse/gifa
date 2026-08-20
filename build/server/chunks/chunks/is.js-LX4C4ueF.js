import { S as hasContext, M as getContext, E as setContext, F as derived } from './index-server.js-G-77DcSL.js';
import { c as createSubscriber } from './index-server2.js-BPx0mTfA.js';

//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = void 0;
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/internal/utils/dom.js
/**
* Handles getting the active element in a document or shadow root.
* If the active element is within a shadow root, it will traverse the shadow root
* to find the active element.
* If not, it will return the active element in the document.
*
* @param document A document or shadow root to get the active element from.
* @returns The active element in the document or shadow root.
*/
function getActiveElement(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/active-element/active-element.svelte.js
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber();
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement(this.#document);
	}
};
new ActiveElement();
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/internal/utils/is.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/extract/extract.svelte.js
function extract(value, defaultValue) {
	if (isFunction(value)) {
		const gotten = value();
		if (gotten === void 0) return defaultValue;
		return gotten;
	}
	if (value === void 0) return defaultValue;
	return value;
}
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/context/context.js
var Context = class {
	#name;
	#key;
	/**
	* @param name The name of the context.
	* This is used for generating the context key and error messages.
	*/
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	* The key used to get and set the context.
	*
	* It is not recommended to use this value directly.
	* Instead, use the methods provided by this class.
	*/
	get key() {
		return this.#key;
	}
	/**
	* Checks whether this has been set in the context of a parent component.
	*
	* Must be called during component initialisation.
	*/
	exists() {
		return hasContext(this.#key);
	}
	/**
	* Retrieves the context that belongs to the closest parent component.
	*
	* Must be called during component initialisation.
	*
	* @throws An error if the context does not exist.
	*/
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	* Retrieves the context that belongs to the closest parent component,
	* or the given fallback value if the context does not exist.
	*
	* Must be called during component initialisation.
	*/
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	* Associates the given value with the current component and returns it.
	*
	* Must be called during component initialisation.
	*/
	set(context) {
		return setContext(this.#key, context);
	}
};
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/use-debounce/use-debounce.svelte.js
function useDebounce(callback, wait) {
	let context = null;
	const wait$ = derived(() => extract(wait, 250));
	function debounced(...args) {
		if (context) {
			if (context.timeout) clearTimeout(context.timeout);
		} else {
			let resolve;
			let reject;
			context = {
				timeout: null,
				runner: null,
				promise: new Promise((res, rej) => {
					resolve = res;
					reject = rej;
				}),
				resolve,
				reject
			};
		}
		context.runner = async () => {
			if (!context) return;
			const ctx = context;
			context = null;
			try {
				ctx.resolve(await callback.apply(this, args));
			} catch (error) {
				ctx.reject(error);
			}
		};
		context.timeout = setTimeout(context.runner, wait$());
		return context.promise;
	}
	debounced.cancel = async () => {
		if (!context || context.timeout === null) {
			await new Promise((resolve) => setTimeout(resolve, 0));
			if (!context || context.timeout === null) return;
		}
		clearTimeout(context.timeout);
		context.reject("Cancelled");
		context = null;
	};
	debounced.runScheduledNow = async () => {
		if (!context || !context.timeout) {
			await new Promise((resolve) => setTimeout(resolve, 0));
			if (!context || !context.timeout) return;
		}
		clearTimeout(context.timeout);
		context.timeout = null;
		await context.runner?.();
	};
	Object.defineProperty(debounced, "pending", {
		enumerable: true,
		get() {
			return !!context?.timeout;
		}
	});
	return debounced;
}
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/watch/watch.svelte.js
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}
function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/internal/utils/get.js
function get(value) {
	if (isFunction(value)) return value();
	return value;
}
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = false;
	#options;
	#node;
	#window;
	#width = derived(() => {
		this.#subscribe()?.();
		return this.getSize().width;
	});
	#height = derived(() => {
		this.#subscribe()?.();
		return this.getSize().height;
	});
	#subscribe = derived(() => {
		const node$ = get(this.#node);
		if (!node$) return;
		return createSubscriber();
	});
	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		const element = get(this.#node);
		if (!element || !this.#window) return;
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: offsetWidth,
			height: offsetHeight
		};
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return {
			width: offsetWidth - paddingWidth - borderWidth,
			height: offsetHeight - paddingHeight - borderHeight
		};
	}
	getSize() {
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}
	get current() {
		this.#subscribe()?.();
		return this.getSize();
	}
	get width() {
		return this.#width();
	}
	get height() {
		return this.#height();
	}
};
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/is-mounted/is-mounted.svelte.js
var IsMounted = class {
	#isMounted = false;
	constructor() {}
	get current() {
		return this.#isMounted;
	}
};
//#endregion
//#region node_modules/.pnpm/runed@0.35.1_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_svelte@5.56.8_@typ_aba0cccc213dc9caebecdbcf62c9bfdb/node_modules/runed/dist/utilities/previous/previous.svelte.js
var Previous = class {
	#previousCallback = () => void 0;
	#previous = derived(() => this.#previousCallback());
	constructor(getter, initialValue) {
		let actualPrevious = void 0;
		if (initialValue !== void 0) actualPrevious = initialValue;
		this.#previousCallback = () => {
			try {
				return actualPrevious;
			} finally {
				actualPrevious = getter();
			}
		};
	}
	get current() {
		return this.#previous();
	}
};
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ENTER = "Enter";
var HOME = "Home";
var PAGE_DOWN = "PageDown";
var PAGE_UP = "PageUp";
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/internal/is.js
var isBrowser = typeof document !== "undefined";
var isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isElement(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isTouch(e) {
	return e.pointerType === "touch";
}
function isFocusVisible(element) {
	return element.matches(":focus-visible");
}
function isNotNull(value) {
	return value !== null;
}
/**
* Determines if the provided object is a valid `HTMLInputElement` with
* a `select` method available.
*/
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}

export { ARROW_RIGHT as A, Context as C, ENTER as E, HOME as H, IsMounted as I, PAGE_UP as P, ARROW_DOWN as a, ARROW_LEFT as b, ARROW_UP as c, isBrowser as d, isIOS as e, isElement as f, PAGE_DOWN as g, isElementOrSVGElement as h, isHTMLElement as i, isSelectableInput as j, ElementSize as k, isNotNull as l, isFocusVisible as m, isTouch as n, Previous as o, useDebounce as u, watch as w };
//# sourceMappingURL=is.js-LX4C4ueF.js.map
