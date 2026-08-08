import { U as head, T as attr, a2 as stringify, Z as ensure_array_like, X as attributes, Y as clsx$1, F as derived, a3 as attr_class, a4 as escape_html, S as hasContext, M as getContext, E as setContext, W as run, a5 as attr_style, $ as spread_props } from '../../chunks/index-server.js-CFhxFuri.js';
import { M as Mode_watcher, d as derivedMode } from '../../chunks/dist.js-B8Q2ktxz.js';
import { c as createSubscriber } from '../../chunks/index-server2.js-BPx0mTfA.js';
import { S as SonnerState, t as toastState, c as cn } from '../../chunks/toast-state.svelte.js-4DwG5KRJ.js';
import { p as page } from '../../chunks/state.js-HOf8s5SG.js';
import { I as Icon } from '../../chunks/Icon.js-BJJlMSR3.js';
import { P as Phone } from '../../chunks/phone.js-CEAre1dW.js';
import { S as Send } from '../../chunks/send.js--qxnzbPN.js';
import { X } from '../../chunks/x.js-Ban1Odu2.js';
import { B as Button } from '../../chunks/button.js-tGj5Lmrq.js';
import '../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../chunks/uneval.js-CatQk29t.js';
import '../../chunks/dist2.js-VGgxfEhX.js';
import '../../chunks/client.js-YG-tZQQh.js';
import '../../chunks/shared.js-4SMYzfPQ.js';
import '../../chunks/exports.js-D8tTp1_m.js';
import '../../chunks/routing.js-NQIFfGdk.js';
import '../../chunks/internal2.js-oxkMWBIz.js';
import '../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../chunks/utils.js-D-kl_003.js';

//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/Loader.svelte
var bars = Array(12).fill(0);
function Loader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { visible, class: className } = $$props;
		$$renderer.push(`<div${attr_class(clsx$1(["sonner-loading-wrapper", className].filter(Boolean).join(" ")))}${attr("data-visible", visible)}><div class="sonner-spinner"><!--[-->`);
		const each_array = ensure_array_like(bars);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			each_array[i];
			$$renderer.push(`<div class="sonner-loading-bar"></div>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region node_modules/.pnpm/runed@0.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = void 0;
//#endregion
//#region node_modules/.pnpm/runed@0.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/dom.js
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
//#region node_modules/.pnpm/runed@0.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/active-element/active-element.svelte.js
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
//#region node_modules/.pnpm/runed@0.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/context/context.js
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
var sonnerContext = new Context("<Toaster/>");
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/types.js
function isAction(action) {
	return action.label !== void 0;
}
var GAP$1 = 14;
var TIME_BEFORE_UNMOUNT = 200;
var DEFAULT_TOAST_CLASSES = {
	toast: "",
	title: "",
	description: "",
	loader: "",
	closeButton: "",
	cancelButton: "",
	actionButton: "",
	action: "",
	warning: "",
	error: "",
	success: "",
	default: "",
	info: "",
	loading: ""
};
function Toast($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { toast, index, expanded, invert: invertFromToaster, position, visibleToasts, expandByDefault, closeButton: closeButtonFromToaster, interacting, cancelButtonStyle = "", actionButtonStyle = "", duration: durationFromToaster, descriptionClass = "", classes: classesProp, unstyled = false, loadingIcon, successIcon, errorIcon, warningIcon, closeIcon, infoIcon, defaultRichColors = false, swipeDirections: swipeDirectionsProp, closeButtonAriaLabel, pauseWhenPageIsHidden, $$slots, $$events, ...restProps } = $$props;
		const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
		let mounted = false;
		let removed = false;
		let swiping = false;
		let swipeOut = false;
		let isSwiped = false;
		let offsetBeforeRemove = 0;
		let initialHeight = 0;
		toast.duration;
		let swipeOutDirection = null;
		const isFront = derived(() => index === 0);
		const isVisible = derived(() => index + 1 <= visibleToasts);
		const toastType = derived(() => toast.type);
		const dismissible = derived(() => toast.dismissible !== void 0 ? toast.dismissible !== false : toast.dismissable !== false);
		const toastClass = derived(() => toast.class || "");
		const toastDescriptionClass = derived(() => toast.descriptionClass || "");
		const heightIndex = derived(() => toastState.heights.findIndex((height) => height.toastId === toast.id) || 0);
		const closeButton = derived(() => toast.closeButton ?? closeButtonFromToaster);
		const coords = derived(() => position.split("-"));
		const toastsHeightBefore = derived(() => toastState.heights.reduce((prev, curr, reducerIndex) => {
			if (reducerIndex >= heightIndex()) return prev;
			return prev + curr.height;
		}, 0));
		const invert = derived(() => toast.invert || invertFromToaster);
		const disabled = derived(() => toastType() === "loading");
		const classes = derived(() => ({
			...defaultClasses,
			...classesProp
		}));
		const offset = derived(() => Math.round(heightIndex() * GAP$1 + toastsHeightBefore()));
		function deleteToast() {
			removed = true;
			offsetBeforeRemove = offset();
			toastState.removeHeight(toast.id);
			setTimeout(() => {
				toastState.remove(toast.id);
			}, TIME_BEFORE_UNMOUNT);
		}
		const icon = derived(() => {
			if (toast.icon) return toast.icon;
			if (toastType() === "success") return successIcon;
			if (toastType() === "error") return errorIcon;
			if (toastType() === "warning") return warningIcon;
			if (toastType() === "info") return infoIcon;
			if (toastType() === "loading") return loadingIcon;
			return null;
		});
		function LoadingIcon($$renderer) {
			if (loadingIcon) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div${attr_class(clsx$1(cn(classes()?.loader, toast?.classes?.loader, "sonner-loader")))}${attr("data-visible", toastType() === "loading")}>`);
				loadingIcon($$renderer);
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				Loader($$renderer, {
					class: cn(classes()?.loader, toast.classes?.loader),
					visible: toastType() === "loading"
				});
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<li${attr("tabindex", 0)}${attr_class(clsx$1(cn(restProps.class, toastClass(), classes()?.toast, toast?.classes?.toast, classes()?.[toastType()], toast?.classes?.[toastType()])))}${attr("aria-live", toast.important ? "assertive" : "polite")} aria-atomic="true" data-sonner-toast=""${attr("data-rich-colors", toast.richColors ?? defaultRichColors)}${attr("data-styled", !(toast.component || toast.unstyled || unstyled))}${attr("data-mounted", mounted)}${attr("data-promise", Boolean(toast.promise))}${attr("data-swiped", isSwiped)}${attr("data-removed", removed)}${attr("data-visible", isVisible())}${attr("data-y-position", coords()[0])}${attr("data-x-position", coords()[1])}${attr("data-index", index)}${attr("data-front", isFront())}${attr("data-swiping", swiping)}${attr("data-dismissible", dismissible())}${attr("data-type", toastType())}${attr("data-invert", invert())}${attr("data-swipe-out", swipeOut)}${attr("data-swipe-direction", swipeOutDirection)}${attr("data-expanded", Boolean(expanded || expandByDefault && mounted))}${attr_style(`${restProps.style} ${toast.style}`, {
			"--index": index,
			"--toasts-before": index,
			"--z-index": toastState.toasts.length - index,
			"--offset": `${removed ? offsetBeforeRemove : offset()}px`,
			"--initial-height": expandByDefault ? "auto" : `${initialHeight}px`
		})}>`);
		if (closeButton() && !toast.component && toastType() !== "loading" && closeIcon !== null) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button${attr("aria-label", closeButtonAriaLabel)}${attr("data-disabled", disabled())} data-close-button=""${attr_class(clsx$1(cn(classes()?.closeButton, toast?.classes?.closeButton)))}>`);
			closeIcon?.($$renderer);
			$$renderer.push(`<!----></button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (toast.component) {
			$$renderer.push("<!--[0-->");
			const Component = toast.component;
			if (Component) {
				$$renderer.push("<!--[-->");
				Component($$renderer, spread_props([toast.componentProps, { closeToast: deleteToast }]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		} else {
			$$renderer.push("<!--[-1-->");
			if ((toastType() || toast.icon || toast.promise) && toast.icon !== null && (icon() !== null || toast.icon)) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div data-icon=""${attr_class(clsx$1(cn(classes()?.icon, toast?.classes?.icon)))}>`);
				if (toast.promise || toastType() === "loading") {
					$$renderer.push("<!--[0-->");
					if (toast.icon) {
						$$renderer.push("<!--[0-->");
						if (toast.icon) {
							$$renderer.push("<!--[-->");
							toast.icon($$renderer, {});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					} else {
						$$renderer.push("<!--[-1-->");
						LoadingIcon($$renderer);
					}
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (toast.type !== "loading") {
					$$renderer.push("<!--[0-->");
					if (toast.icon) {
						$$renderer.push("<!--[0-->");
						if (toast.icon) {
							$$renderer.push("<!--[-->");
							toast.icon($$renderer, {});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					} else if (toastType() === "success") {
						$$renderer.push("<!--[1-->");
						successIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === "error") {
						$$renderer.push("<!--[2-->");
						errorIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === "warning") {
						$$renderer.push("<!--[3-->");
						warningIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else if (toastType() === "info") {
						$$renderer.push("<!--[4-->");
						infoIcon?.($$renderer);
						$$renderer.push(`<!---->`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div data-content=""${attr_class(clsx$1(cn(classes()?.content, toast?.classes?.content)))}><div data-title=""${attr_class(clsx$1(cn(classes()?.title, toast?.classes?.title)))}>`);
			if (toast.title) {
				$$renderer.push("<!--[0-->");
				if (typeof toast.title !== "string") {
					$$renderer.push("<!--[0-->");
					const Title = toast.title;
					if (Title) {
						$$renderer.push("<!--[-->");
						Title($$renderer, spread_props([toast.componentProps]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`${escape_html(toast.title)}`);
				}
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> `);
			if (toast.description) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div data-description=""${attr_class(clsx$1(cn(descriptionClass, toastDescriptionClass(), classes()?.description, toast.classes?.description)))}>`);
				if (typeof toast.description !== "string") {
					$$renderer.push("<!--[0-->");
					const Description = toast.description;
					if (Description) {
						$$renderer.push("<!--[-->");
						Description($$renderer, spread_props([toast.componentProps]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`${escape_html(toast.description)}`);
				}
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> `);
			if (toast.cancel) {
				$$renderer.push("<!--[0-->");
				if (typeof toast.cancel === "function") {
					$$renderer.push("<!--[0-->");
					if (toast.cancel) {
						$$renderer.push("<!--[-->");
						toast.cancel($$renderer, {});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else if (isAction(toast.cancel)) {
					$$renderer.push("<!--[1-->");
					$$renderer.push(`<button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx$1(cn(classes()?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (toast.action) {
				$$renderer.push("<!--[0-->");
				if (typeof toast.action === "function") {
					$$renderer.push("<!--[0-->");
					if (toast.action) {
						$$renderer.push("<!--[-->");
						toast.action($$renderer, {});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				} else if (isAction(toast.action)) {
					$$renderer.push("<!--[1-->");
					$$renderer.push(`<button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx$1(cn(classes()?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></li>`);
	});
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/icons/SuccessIcon.svelte
function SuccessIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/icons/ErrorIcon.svelte
function ErrorIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/icons/WarningIcon.svelte
function WarningIcon($$renderer) {
	$$renderer.push(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/icons/InfoIcon.svelte
function InfoIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/icons/CloseIcon.svelte
function CloseIcon($$renderer) {
	$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}
//#endregion
//#region node_modules/.pnpm/svelte-sonner@1.1.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-sonner/dist/Toaster.svelte
var VISIBLE_TOASTS_AMOUNT = 3;
var VIEWPORT_OFFSET = "24px";
var MOBILE_VIEWPORT_OFFSET = "16px";
var TOAST_LIFETIME = 4e3;
var TOAST_WIDTH = 356;
var GAP = 14;
var DARK = "dark";
var LIGHT = "light";
function getOffsetObject(defaultOffset, mobileOffset) {
	const styles = {};
	[defaultOffset, mobileOffset].forEach((offset, index) => {
		const isMobile = index === 1;
		const prefix = isMobile ? "--mobile-offset" : "--offset";
		const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
		function assignAll(offset) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((key) => {
				styles[`${prefix}-${key}`] = typeof offset === "number" ? `${offset}px` : offset;
			});
		}
		if (typeof offset === "number" || typeof offset === "string") assignAll(offset);
		else if (typeof offset === "object") [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((key) => {
			const value = offset[key];
			if (value === void 0) styles[`${prefix}-${key}`] = defaultValue;
			else styles[`${prefix}-${key}`] = typeof value === "number" ? `${value}px` : value;
		});
		else assignAll(defaultValue);
	});
	return styles;
}
function Toaster($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		function getInitialTheme(t) {
			if (t !== "system") return t;
			if (typeof window !== "undefined") {
				if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return DARK;
				return LIGHT;
			}
			return LIGHT;
		}
		let { invert = false, position = "bottom-right", hotkey = ["altKey", "KeyT"], expand = false, closeButton = false, offset = VIEWPORT_OFFSET, mobileOffset = MOBILE_VIEWPORT_OFFSET, theme = "light", richColors = false, duration = TOAST_LIFETIME, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions = {}, dir = "auto", gap = GAP, pauseWhenPageIsHidden = false, loadingIcon: loadingIconProp, successIcon: successIconProp, errorIcon: errorIconProp, warningIcon: warningIconProp, closeIcon: closeIconProp, infoIcon: infoIconProp, containerAriaLabel = "Notifications", class: className, closeButtonAriaLabel = "Close toast", onblur, onfocus, onmouseenter, onmousemove, onmouseleave, ondragend, onpointerdown, onpointerup, $$slots, $$events, ...restProps } = $$props;
		function getDocumentDirection() {
			if (dir !== "auto") return dir;
			if (typeof window === "undefined") return "ltr";
			if (typeof document === "undefined") return "ltr";
			const dirAttribute = document.documentElement.getAttribute("dir");
			if (dirAttribute === "auto" || !dirAttribute) {
				run(() => dir = window.getComputedStyle(document.documentElement).direction ?? "ltr");
				return dir;
			}
			run(() => dir = dirAttribute);
			return dirAttribute;
		}
		const possiblePositions = derived(() => Array.from(new Set([position, ...toastState.toasts.filter((toast) => toast.position).map((toast) => toast.position)].filter(Boolean))));
		let expanded = false;
		let interacting = false;
		let actualTheme = getInitialTheme(theme);
		const hotkeyLabel = derived(() => hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
		sonnerContext.set(new SonnerState());
		$$renderer.push(`<section${attr("aria-label", `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel())}`)}${attr("tabindex", -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-fvl82i">`);
		if (toastState.toasts.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(possiblePositions());
			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let position = each_array[index];
				const [y, x] = position.split("-");
				const offsetObject = getOffsetObject(offset, mobileOffset);
				$$renderer.push(`<ol${attributes({
					tabindex: -1,
					dir: getDocumentDirection(),
					class: clsx$1(className),
					"data-sonner-toaster": true,
					"data-sonner-theme": actualTheme,
					"data-y-position": y,
					"data-x-position": x,
					style: restProps.style,
					...restProps
				}, "svelte-fvl82i", void 0, {
					"--front-toast-height": `${toastState.heights[0]?.height}px`,
					"--width": `${TOAST_WIDTH}px`,
					"--gap": `${gap}px`,
					"--offset-top": offsetObject["--offset-top"],
					"--offset-right": offsetObject["--offset-right"],
					"--offset-bottom": offsetObject["--offset-bottom"],
					"--offset-left": offsetObject["--offset-left"],
					"--mobile-offset-top": offsetObject["--mobile-offset-top"],
					"--mobile-offset-right": offsetObject["--mobile-offset-right"],
					"--mobile-offset-bottom": offsetObject["--mobile-offset-bottom"],
					"--mobile-offset-left": offsetObject["--mobile-offset-left"]
				})}><!--[-->`);
				const each_array_1 = ensure_array_like(toastState.toasts.filter((toast) => !toast.position && index === 0 || toast.position === position));
				for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
					let toast = each_array_1[index];
					{
						function successIcon($$renderer) {
							if (successIconProp) {
								$$renderer.push("<!--[0-->");
								successIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (successIconProp !== null) {
								$$renderer.push("<!--[1-->");
								SuccessIcon($$renderer);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						function errorIcon($$renderer) {
							if (errorIconProp) {
								$$renderer.push("<!--[0-->");
								errorIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (errorIconProp !== null) {
								$$renderer.push("<!--[1-->");
								ErrorIcon($$renderer);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						function warningIcon($$renderer) {
							if (warningIconProp) {
								$$renderer.push("<!--[0-->");
								warningIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (warningIconProp !== null) {
								$$renderer.push("<!--[1-->");
								WarningIcon($$renderer);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						function infoIcon($$renderer) {
							if (infoIconProp) {
								$$renderer.push("<!--[0-->");
								infoIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (infoIconProp !== null) {
								$$renderer.push("<!--[1-->");
								InfoIcon($$renderer);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						function closeIcon($$renderer) {
							if (closeIconProp) {
								$$renderer.push("<!--[0-->");
								closeIconProp?.($$renderer);
								$$renderer.push(`<!---->`);
							} else if (closeIconProp !== null) {
								$$renderer.push("<!--[1-->");
								CloseIcon($$renderer);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]-->`);
						}
						Toast($$renderer, {
							index,
							toast,
							defaultRichColors: richColors,
							duration: toastOptions?.duration ?? duration,
							class: toastOptions?.class ?? "",
							descriptionClass: toastOptions?.descriptionClass || "",
							invert,
							visibleToasts,
							closeButton,
							interacting,
							position,
							style: toastOptions?.style ?? "",
							classes: toastOptions.classes || {},
							unstyled: toastOptions.unstyled ?? false,
							cancelButtonStyle: toastOptions?.cancelButtonStyle ?? "",
							actionButtonStyle: toastOptions?.actionButtonStyle ?? "",
							closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
							expandByDefault: expand,
							expanded,
							pauseWhenPageIsHidden,
							loadingIcon: loadingIconProp,
							successIcon,
							errorIcon,
							warningIcon,
							infoIcon,
							closeIcon,
							$$slots: {
								successIcon: true,
								errorIcon: true,
								warningIcon: true,
								infoIcon: true,
								closeIcon: true
							}
						});
					}
				}
				$$renderer.push(`<!--]--></ol>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section>`);
	});
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/menu.svelte
function Menu($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "menu" },
		props,
		{ iconNode: [
			["path", { "d": "M4 5h16" }],
			["path", { "d": "M4 12h16" }],
			["path", { "d": "M4 19h16" }]
		] }
	]));
}
//#endregion
//#region src/lib/nav-links.ts
/** Shared by the header and the footer so the two can never drift apart. */
var navLinks = [
	{
		href: "/",
		label: "Home"
	},
	{
		href: "/menu",
		label: "Menu"
	},
	{
		href: "/gallery",
		label: "Gallery"
	},
	{
		href: "/events",
		label: "Events"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/private-hire",
		label: "Private Hire"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
//#endregion
//#region src/lib/components/site-nav.svelte
function Site_nav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<header class="border-gold/15 bg-void/85 sticky top-0 z-50 border-b backdrop-blur-lg supports-[backdrop-filter]:bg-background/70"><nav class="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6"><a href="/" class="flex items-center gap-3.5"><img src="/logo.webp" alt="Gifa Lounge" class="border-gold size-10 shrink-0 rounded-full border object-cover"/> <span class="font-heading text-gold text-sm tracking-[0.32em] uppercase">Gifa <span class="text-foil">Lounge</span></span></a> <div class="hidden items-center gap-10 md:flex"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<a${attr("href", link.href)}${attr_class(`font-heading text-[11px] tracking-[0.24em] uppercase transition-colors hover:text-gold-light ${page.url.pathname === link.href ? "text-gold" : "text-cream/75"}`)}>${escape_html(link.label)}</a>`);
		}
		$$renderer.push(`<!--]--> <a href="/book" class="border-gold text-gold hover:bg-gold hover:text-void font-heading inline-flex items-center border px-6 py-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300">Reserve</a></div> <div class="flex items-center gap-1 md:hidden"><button class="text-gold p-2" aria-label="Toggle menu">`);
		$$renderer.push("<!--[-1-->");
		Menu($$renderer, { class: "size-6" });
		$$renderer.push(`<!--]--></button></div></nav> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></header>`);
	});
}
//#endregion
//#region src/lib/components/site-footer.svelte
function Site_footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { settings } = $$props;
		$$renderer.push(`<footer class="border-gold/15 bg-void border-t"><div class="container mx-auto px-4 py-20 sm:px-6"><div class="grid gap-12 md:grid-cols-4 md:gap-16"><div class="md:col-span-2"><a href="/" class="font-heading text-gold text-lg tracking-[0.28em] uppercase">Gifa Lounge</a> <p class="text-champagne mt-3 font-sans text-lg italic">a Habesha table, elegantly kept.</p> <p class="mt-4 max-w-sm font-sans text-[15px] text-cream/65">${escape_html(settings?.address)}</p> <p class="mt-2 max-w-sm font-sans text-[15px] text-cream/65">${escape_html(settings?.footerBlurb ?? "An Eritrean and Ethiopian restaurant and lounge on Seven Sisters Road.")}</p></div> <div><h3 class="font-heading text-gold mb-5 text-[10px] tracking-[0.3em] uppercase">Visit</h3> <ul class="grid gap-3"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", link.href)} class="font-sans text-[15px] text-cream/70 transition-colors hover:text-gold-light">${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></div> <div><h3 class="font-heading text-gold mb-5 text-[10px] tracking-[0.3em] uppercase">Find</h3> <ul class="grid gap-3 font-sans text-[15px] text-cream/70">`);
		if (settings?.email) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li><a${attr("href", `mailto:${stringify(settings.email)}`)} class="transition-colors hover:text-gold-light">${escape_html(settings.email)}</a></li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (settings?.phone) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li><a${attr("href", `tel:${stringify(settings.phone.replace(/\s/g, ""))}`)} class="transition-colors hover:text-gold-light">${escape_html(settings.phone)}</a></li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (settings?.instagramUrl) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li><a${attr("href", settings.instagramUrl)} target="_blank" rel="noreferrer noopener" class="transition-colors hover:text-gold-light">Instagram</a></li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (settings?.facebookUrl) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<li><a${attr("href", settings.facebookUrl)} target="_blank" rel="noreferrer noopener" class="transition-colors hover:text-gold-light">Facebook</a></li>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></ul></div></div> <div class="border-gold/15 mt-16 flex flex-col items-center justify-center gap-4 border-t pt-8 font-heading text-[10px] tracking-[0.24em] text-cream/50 uppercase sm:flex-row"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Gifa Lounge Limited · Made in London</p></div></div></footer>`);
	});
}
//#endregion
//#region src/lib/components/whatsapp-chat.svelte
function whatsappGlyph($$renderer, cls) {
	$$renderer.push(`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"${attr_class(clsx$1(cls), "svelte-1i7k9o3")}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.99 2.896 9.83 9.83 0 0 1 2.892 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"></path></svg>`);
}
function Whatsapp_chat($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { phones = [], email, countryCode = "251", businessName = "Gifa Lounge", greeting = "Hello! 👋 How can we help you today? Send us a message and our team will reply on WhatsApp.", replyTime = "Typically replies within an hour", quickReplies = [
			"I would like to place an order",
			"I need a price quote",
			"Where are you located?"
		], includePageContext = true } = $$props;
		/**
		* Settings store phones as free text ("+251 91 234 5678", "0911234567"),
		* but wa.me only accepts bare international digits.
		*/
		function toWaNumber(raw) {
			const trimmed = raw.trim();
			const digits = trimmed.replace(/\D/g, "");
			if (trimmed.startsWith("+")) return digits;
			if (digits.startsWith("00")) return digits.slice(2);
			if (digits.startsWith("0")) return countryCode + digits.slice(1);
			if (digits.startsWith(countryCode)) return digits;
			return countryCode + digits;
		}
		const lines = derived(() => (phones ?? []).filter((p) => p && p.replace(/\D/g, "").length >= 7).map((p) => ({
			label: p,
			number: toWaNumber(p)
		})));
		let open = false;
		let teasing = false;
		let selected = 0;
		let message = "";
		const active = derived(() => lines()[selected] ?? lines()[0]);
		const ready = derived(() => message.trim().length > 0 && Boolean(active()));
		const waUrl = derived(() => {
			if (!active()) return "#";
			const body = includePageContext ? `${message.trim()}\n\n— sent from ${page.url.origin}${page.url.pathname}` : message.trim();
			return `https://wa.me/${active().number}?text=${encodeURIComponent(body)}`;
		});
		function toggle() {
			open = !open;
			teasing = false;
			if (open) queueMicrotask(() => void 0);
		}
		if (lines().length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">`);
			if (open) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="chat-panel flex w-[calc(100vw-2rem)] max-w-sm flex-col border border-border bg-card shadow-2xl svelte-1i7k9o3"><header class="flex items-start gap-3 bg-primary px-4 py-4 text-primary-foreground"><span class="flex size-10 shrink-0 items-center justify-center bg-primary-foreground/15">`);
				whatsappGlyph($$renderer, "size-5");
				$$renderer.push(`<!----></span> <div class="min-w-0 flex-1"><p class="font-heading text-base leading-tight font-semibold">${escape_html(businessName)}</p> <p class="mt-1 flex items-center gap-1.5 text-xs text-primary-foreground/80"><span class="size-1.5 shrink-0 rounded-full bg-emerald-400"></span> ${escape_html(replyTime)}</p></div> `);
				Button($$renderer, {
					type: "button",
					onclick: () => open = false,
					"aria-label": "Close chat",
					class: "-mr-1 shrink-0 p-1 text-primary-foreground/70 transition-colors hover:text-primary-foreground",
					children: ($$renderer) => {
						X($$renderer, { class: "size-4" });
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></header> <div class="space-y-3 bg-muted/40 px-4 py-4"><div class="max-w-[85%] border border-border bg-card px-3 py-2 shadow-sm"><p class="text-sm leading-relaxed text-foreground">${escape_html(greeting)}</p></div> `);
				if (quickReplies.length) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="flex flex-wrap gap-1.5"><!--[-->`);
					const each_array = ensure_array_like(quickReplies);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let reply = each_array[$$index];
						Button($$renderer, {
							type: "button",
							onclick: () => {
								message = reply;
							},
							variant: "outline",
							size: "sm",
							class: "bg-white! dark:bg-black!",
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(reply)}`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]--></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div> `);
				if (lines().length > 1) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="flex flex-wrap items-center gap-1.5 border-t border-border px-4 py-3"><span class="mr-1 text-[0.65rem] tracking-widest text-muted-foreground uppercase">Send to</span> <!--[-->`);
					const each_array_1 = ensure_array_like(lines());
					for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
						let line = each_array_1[i];
						Button($$renderer, {
							type: "button",
							onclick: () => selected = i,
							"aria-pressed": selected === i,
							class: `border px-2 py-1 text-xs transition-colors ${selected === i ? "border-primary bg-primary text-background hover:bg-primary/90" : "border-border bg-transparent text-primary hover:text-background/90"}`,
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(line.label)}`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]--></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> <div class="border-t border-border p-3"><textarea rows="3" maxlength="1000" placeholder="Type your message…" aria-label="Your message" class="w-full resize-none border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30">`);
				const $$body = escape_html(message);
				if ($$body) $$renderer.push(`${$$body}`);
				$$renderer.push(`</textarea> <a${attr("href", ready() ? waUrl() : void 0)} target="_blank" rel="noreferrer noopener"${attr("aria-disabled", !ready())} class="mt-2 flex h-11 w-full items-center justify-center gap-2 bg-[#25D366] text-xs font-semibold tracking-widest text-white uppercase transition-all hover:bg-[#1eb355] aria-disabled:pointer-events-none aria-disabled:opacity-50">`);
				Send($$renderer, { class: "size-3.5" });
				$$renderer.push(`<!----> Send via WhatsApp</a> <p class="mt-2 text-center text-[0.65rem] text-muted-foreground">Opens WhatsApp with your message ready to send.</p></div> <div class="flex items-center justify-center gap-4 border-t border-border bg-muted/30 px-4 py-2.5 text-xs"><a${attr("href", `tel:${stringify(active().label.replace(/\s/g, ""))}`)} class="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">`);
				Phone($$renderer, { class: "size-3" });
				$$renderer.push(`<!----> Call us</a> `);
				if (email) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<span class="text-border">|</span> <a${attr("href", `mailto:${stringify(email)}`)} class="text-muted-foreground transition-colors hover:text-primary">Email us</a>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div></div>`);
			} else if (teasing) {
				$$renderer.push("<!--[1-->");
				Button($$renderer, {
					type: "button",
					onclick: toggle,
					class: "chat-teaser max-w-60 border border-border bg-card px-3 py-2 text-left text-sm text-foreground shadow-lg transition-colors hover:border-primary/40",
					children: ($$renderer) => {
						$$renderer.push(`<!---->Questions? Chat with us on WhatsApp 👋`);
					},
					$$slots: { default: true }
				});
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			Button($$renderer, {
				type: "button",
				onclick: toggle,
				"aria-expanded": open,
				"aria-label": open ? "Close chat" : "Chat with us on WhatsApp",
				class: "lift flex size-14 items-center justify-center bg-primary text-primary-foreground shadow-xl transition-colors hover:bg-primary/90",
				children: ($$renderer) => {
					if (open) {
						$$renderer.push("<!--[0-->");
						X($$renderer, { class: "size-6" });
					} else {
						$$renderer.push("<!--[-1-->");
						whatsappGlyph($$renderer, "size-7");
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/announcement-banner.svelte
function Announcement_banner($$renderer, $$props) {
	let { announcements = [] } = $$props;
	const levelClass = {
		info: "bg-primary text-primary-foreground",
		notice: "bg-secondary text-secondary-foreground",
		warning: "bg-destructive text-destructive-foreground"
	};
	$$renderer.push(`<!--[-->`);
	const each_array = ensure_array_like(announcements);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let announcement = each_array[$$index];
		$$renderer.push(`<div${attr_class(`${stringify(levelClass[announcement.level] ?? levelClass.info)} px-4 py-2 text-center text-sm`)}>${escape_html(announcement.message)}</div>`);
	}
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, data } = $$props;
		const isDashboard = derived(() => page.url.pathname === "/dashboard" || page.url.pathname.startsWith("/dashboard/"));
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.push(`<link rel="icon" href="/logo-icon.webp"/> <noscript>`);
			$$renderer.push(`<style>
			[data-reveal] {
				opacity: 1 !important;
				transform: none !important;
				filter: none !important;
			}
		</style>`);
			$$renderer.push(`</noscript>`);
		});
		Mode_watcher($$renderer, {});
		$$renderer.push(`<!----> `);
		Toaster($$renderer, {
			theme: isDashboard() ? derivedMode.current : "dark",
			richColors: true,
			closeButton: true,
			position: "top-right"
		});
		$$renderer.push(`<!----> `);
		if (isDashboard()) {
			$$renderer.push("<!--[0-->");
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="dark grain flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">`);
			Announcement_banner($$renderer, { announcements: data.announcements ?? [] });
			$$renderer.push(`<!----> `);
			Site_nav($$renderer);
			$$renderer.push(`<!----> <main class="flex-1"><!---->`);
			$$renderer.push(`<div class="enter-fade" style="--enter-duration: 500ms">`);
			children($$renderer);
			$$renderer.push(`<!----></div>`);
			$$renderer.push(`<!----></main> `);
			Site_footer($$renderer, { settings: data.settings });
			$$renderer.push(`<!----> `);
			Whatsapp_chat($$renderer, {
				phones: data.settings?.phone ? [data.settings.phone] : [],
				email: data.settings?.email ?? void 0,
				businessName: "Gifa Lounge",
				greeting: "Hello! 👋 Ask us about a table, private hire, or anything on the menu.",
				quickReplies: [
					"Book a table for tonight",
					"Do you take large groups?",
					"What are your opening hours?"
				]
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte.js-CnVWVah6.js.map
