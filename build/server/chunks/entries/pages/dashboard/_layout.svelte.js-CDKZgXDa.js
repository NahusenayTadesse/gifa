import { a0 as bind_props, E as setContext, F as derived, X as attributes, Y as clsx$1, a2 as stringify, $ as spread_props, M as getContext, T as attr, a3 as attr_class, Z as ensure_array_like, a4 as escape_html, aa as props_id } from '../../../chunks/index-server.js-CFhxFuri.js';
import { o as on } from '../../../chunks/legacy-client.js-D1o7JnSw.js';
import { M as MediaQuery } from '../../../chunks/index-server2.js-BPx0mTfA.js';
import { g as createBitsAttrs, v as createId, a as boxWith, k as attachRef, p as mergeProps, m as boolToEmptyStrOrUndef, l as getDataOpenClosed, n as boolToStr, o as getDataTransitionAttrs } from '../../../chunks/create-id.js-BocO_oFE.js';
import { g as goto } from '../../../chunks/client.js-SaiAi5EC.js';
import { p as page } from '../../../chunks/state.js-wKdfgGfb.js';
import { I as Icon } from '../../../chunks/Icon.js-BJJlMSR3.js';
import { C as Clock } from '../../../chunks/clock.js-T7Q4wrWD.js';
import { I as Image$1 } from '../../../chunks/image.js-D8rxvsAA.js';
import { M as Mail } from '../../../chunks/mail.js-D-0ALk7E.js';
import { D as DarkMode } from '../../../chunks/DarkMode.js-R3KtuXVK.js';
import { P as Party_popper } from '../../../chunks/party-popper.js-BLe8JzLN.js';
import { S as Search, C as Command, a as Command_input, b as Command_list, c as Command_empty, d as Command_group, e as Command_link_item } from '../../../chunks/command.js-CgGlfGDc.js';
import { T as Ticket } from '../../../chunks/ticket.js-BN3MB491.js';
import { U as Utensils_crossed } from '../../../chunks/utensils-crossed.js-DwvIhdDL.js';
import { X } from '../../../chunks/x.js-Ban1Odu2.js';
import { t as tv, c as cn, B as Button } from '../../../chunks/button.js-tGj5Lmrq.js';
import { n as noop, P as PresenceManager, a as afterTick } from '../../../chunks/noop.js-vWrzhrAx.js';
import '../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { C as Context, w as watch } from '../../../chunks/is.js-D78pHSN-.js';
import { P as Portal, m as DOMContext } from '../../../chunks/scroll-lock.js-CnssTBHz.js';
import { D as Dialog$1, a as Dialog_content$1, b as Dialog_close, d as Dialog_overlay, e as Dialog_title$1 } from '../../../chunks/dialog-content.js-CMqDFcw2.js';
import { D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../chunks/dialog.js-DUe6BEut.js';
import { D as Dialog_description } from '../../../chunks/dialog-description.js-DmqX_l-i.js';
import { T as Tooltip_provider } from '../../../chunks/tooltip.js-CBkZEv3A.js';
import { D as Dropdown_menu, a as Dropdown_menu_trigger, b as Dropdown_menu_content, d as Dropdown_menu_group, e as Dropdown_menu_label, f as Dropdown_menu_separator, c as Dropdown_menu_item } from '../../../chunks/dropdown-menu.js-BQPe1DBb.js';
import { b as bgGradient } from '../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../chunks/uneval.js-CatQk29t.js';
import '../../../chunks/exports.js-D8tTp1_m.js';
import '../../../chunks/routing.js-NQIFfGdk.js';
import '../../../chunks/internal2.js-CyvG6wSg.js';
import '../../../chunks/utils.js-D-kl_003.js';
import '../../../chunks/dist.js-B8Q2ktxz.js';
import '../../../chunks/dist2.js-VGgxfEhX.js';
import '../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../chunks/input.js-BuyvpeQU.js';
import '../../../chunks/loader.js-CAX0l8lx.js';
import '../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../chunks/menu.js-DIhxGpfS.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/calendar-check.svelte
function Calendar_check($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "calendar-check" },
		props,
		{ iconNode: [
			["path", { "d": "M8 2v3" }],
			["path", { "d": "M16 2v3" }],
			["rect", {
				"x": "3",
				"y": "3",
				"width": "18",
				"height": "18",
				"rx": "2"
			}],
			["path", { "d": "M3 9h18" }],
			["path", { "d": "m9 15 2 2 4-4" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/disc.svelte
function Disc($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "disc" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}], ["circle", {
			"cx": "12",
			"cy": "12",
			"r": "2"
		}]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/key-round.svelte
function Key_round($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "key-round" },
		props,
		{ iconNode: [["path", { "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", {
			"cx": "16.5",
			"cy": "7.5",
			"r": ".5",
			"fill": "currentColor"
		}]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/layout-dashboard.svelte
function Layout_dashboard($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "layout-dashboard" },
		props,
		{ iconNode: [
			["rect", {
				"width": "7",
				"height": "9",
				"x": "3",
				"y": "3",
				"rx": "1"
			}],
			["rect", {
				"width": "7",
				"height": "5",
				"x": "14",
				"y": "3",
				"rx": "1"
			}],
			["rect", {
				"width": "7",
				"height": "9",
				"x": "14",
				"y": "12",
				"rx": "1"
			}],
			["rect", {
				"width": "7",
				"height": "5",
				"x": "3",
				"y": "16",
				"rx": "1"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/layout-template.svelte
function Layout_template($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "layout-template" },
		props,
		{ iconNode: [
			["rect", {
				"width": "18",
				"height": "7",
				"x": "3",
				"y": "3",
				"rx": "1"
			}],
			["rect", {
				"width": "9",
				"height": "7",
				"x": "3",
				"y": "14",
				"rx": "1"
			}],
			["rect", {
				"width": "5",
				"height": "7",
				"x": "16",
				"y": "14",
				"rx": "1"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/log-out.svelte
function Log_out($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "log-out" },
		props,
		{ iconNode: [
			["path", { "d": "m16 17 5-5-5-5" }],
			["path", { "d": "M21 12H9" }],
			["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/megaphone.svelte
function Megaphone($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "megaphone" },
		props,
		{ iconNode: [
			["path", { "d": "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }],
			["path", { "d": "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }],
			["path", { "d": "M8 6v8" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/panel-left.svelte
function Panel_left($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "panel-left" },
		props,
		{ iconNode: [["rect", {
			"width": "18",
			"height": "18",
			"x": "3",
			"y": "3",
			"rx": "2"
		}], ["path", { "d": "M9 3v18" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/star.svelte
function Star($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "star" },
		props,
		{ iconNode: [["path", { "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/user-round-cog.svelte
function User_round_cog($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "user-round-cog" },
		props,
		{ iconNode: [
			["path", { "d": "m14.305 19.53.923-.382" }],
			["path", { "d": "m15.228 16.852-.923-.383" }],
			["path", { "d": "m16.852 15.228-.383-.923" }],
			["path", { "d": "m16.852 20.772-.383.924" }],
			["path", { "d": "m19.148 15.228.383-.923" }],
			["path", { "d": "m19.53 21.696-.382-.924" }],
			["path", { "d": "M2 21a8 8 0 0 1 10.434-7.62" }],
			["path", { "d": "m20.772 16.852.924-.383" }],
			["path", { "d": "m20.772 19.148.924.383" }],
			["circle", {
				"cx": "10",
				"cy": "8",
				"r": "5"
			}],
			["circle", {
				"cx": "18",
				"cy": "18",
				"r": "3"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/user.svelte
function User($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "user" },
		props,
		{ iconNode: [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", {
			"cx": "12",
			"cy": "7",
			"r": "4"
		}]] }
	]));
}
//#endregion
//#region src/lib/components/ui/sidebar/sidebar-content.svelte
function Sidebar_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "sidebar-content",
			"data-sidebar": "content",
			class: clsx$1(cn("no-scrollbar gap-2 [--radius:0] flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
});
var AvatarRootContext = new Context("Avatar.Root");
var AvatarRootState = class AvatarRootState {
	static create(opts) {
		return AvatarRootContext.set(new AvatarRootState(opts));
	}
	opts;
	domContext;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		this.loadImage = this.loadImage.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	loadImage(src, crossorigin, referrerPolicy) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let imageTimerId;
		const image = new Image();
		image.src = src;
		if (crossorigin !== void 0) image.crossOrigin = crossorigin;
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		this.opts.loadingStatus.current = "loading";
		image.onload = () => {
			imageTimerId = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = "loaded";
			}, this.opts.delayMs.current);
		};
		image.onerror = () => {
			this.opts.loadingStatus.current = "error";
		};
		return () => {
			if (!imageTimerId) return;
			this.domContext.clearTimeout(imageTimerId);
		};
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[avatarAttrs.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AvatarFallbackState = class AvatarFallbackState {
	static create(opts) {
		return new AvatarFallbackState(opts, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#style = derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return this.#style();
	}
	set style($$value) {
		return this.#style($$value);
	}
	#props = derived(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.fallback]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/avatar/components/avatar.svelte
function Avatar$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { delayMs = 0, loadingStatus = "loading", onLoadingStatusChange, child, children, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const rootState = AvatarRootState.create({
			delayMs: boxWith(() => delayMs),
			loadingStatus: boxWith(() => loadingStatus, (v) => {
				if (loadingStatus !== v) {
					loadingStatus = v;
					onLoadingStatusChange?.(v);
				}
			}),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			loadingStatus,
			ref
		});
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
function Avatar_fallback$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const fallbackState = AvatarFallbackState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, fallbackState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></span>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/collapsible/collapsible.svelte.js
var collapsibleAttrs = createBitsAttrs({
	component: "collapsible",
	parts: [
		"root",
		"content",
		"trigger"
	]
});
var CollapsibleRootContext = new Context("Collapsible.Root");
var CollapsibleRootState = class CollapsibleRootState {
	static create(opts) {
		return CollapsibleRootContext.set(new CollapsibleRootState(opts));
	}
	opts;
	attachment;
	contentNode = null;
	contentPresence;
	contentId = void 0;
	constructor(opts) {
		this.opts = opts;
		this.toggleOpen = this.toggleOpen.bind(this);
		this.attachment = attachRef(this.opts.ref);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.opts.open.current),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		[collapsibleAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CollapsibleContentState = class CollapsibleContentState {
	static create(opts) {
		return new CollapsibleContentState(opts, CollapsibleRootContext.get());
	}
	opts;
	root;
	attachment;
	#present = derived(() => {
		if (this.opts.hiddenUntilFound.current) return this.root.opts.open.current;
		return this.opts.forceMount.current || this.root.opts.open.current;
	});
	get present() {
		return this.#present();
	}
	set present($$value) {
		return this.#present($$value);
	}
	#originalStyles;
	#isMountAnimationPrevented = false;
	#width = 0;
	#height = 0;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.#isMountAnimationPrevented = root.opts.open.current;
		this.root.contentId = this.opts.id.current;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
		watch.pre(() => this.opts.id.current, (id) => {
			this.root.contentId = id;
		});
		watch.pre([() => this.opts.ref.current, () => this.opts.hiddenUntilFound.current], ([node, hiddenUntilFound]) => {
			if (!node || !hiddenUntilFound) return;
			const handleBeforeMatch = () => {
				if (this.root.opts.open.current) return;
				requestAnimationFrame(() => {
					this.root.opts.open.current = true;
				});
			};
			return on(node, "beforematch", handleBeforeMatch);
		});
		watch([() => this.opts.ref.current, () => this.present], ([node]) => {
			if (!node) return;
			afterTick(() => {
				if (!this.opts.ref.current) return;
				this.#originalStyles = this.#originalStyles || {
					transitionDuration: node.style.transitionDuration,
					animationName: node.style.animationName
				};
				node.style.transitionDuration = "0s";
				node.style.animationName = "none";
				const rect = node.getBoundingClientRect();
				this.#height = rect.height;
				this.#width = rect.width;
				if (!this.#isMountAnimationPrevented) {
					const { animationName, transitionDuration } = this.#originalStyles;
					node.style.transitionDuration = transitionDuration;
					node.style.animationName = animationName;
				}
			});
		});
	}
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: {
			"--bits-collapsible-content-height": this.#height ? `${this.#height}px` : void 0,
			"--bits-collapsible-content-width": this.#width ? `${this.#width}px` : void 0
		},
		hidden: this.opts.hiddenUntilFound.current && !this.root.opts.open.current ? "until-found" : void 0,
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		[collapsibleAttrs.content]: "",
		...this.opts.hiddenUntilFound.current && !this.shouldRender ? {} : { hidden: this.opts.hiddenUntilFound.current ? !this.shouldRender : this.opts.forceMount.current ? void 0 : !this.shouldRender },
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CollapsibleTriggerState = class CollapsibleTriggerState {
	static create(opts) {
		return new CollapsibleTriggerState(opts, CollapsibleRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		if (this.#isDisabled()) return;
		if (e.button !== 0) return e.preventDefault();
		this.root.toggleOpen();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.root.toggleOpen();
		}
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		type: "button",
		disabled: this.#isDisabled(),
		"aria-controls": this.root.contentId,
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		[collapsibleAttrs.trigger]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/collapsible/components/collapsible.svelte
function Collapsible$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, open = false, disabled = false, onOpenChange = noop, onOpenChangeComplete = noop, $$slots, $$events, ...restProps } = $$props;
		const rootState = CollapsibleRootState.create({
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			open
		});
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/collapsible/components/collapsible-content.svelte
function Collapsible_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, ref = null, forceMount = false, hiddenUntilFound = false, children, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const contentState = CollapsibleContentState.create({
			id: boxWith(() => id),
			forceMount: boxWith(() => forceMount),
			hiddenUntilFound: boxWith(() => hiddenUntilFound),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				...contentState.snippetProps,
				props: mergedProps()
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/collapsible/components/collapsible-trigger.svelte
function Collapsible_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), disabled = false, $$slots, $$events, ...restProps } = $$props;
		const triggerState = CollapsibleTriggerState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			disabled: boxWith(() => disabled)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/hooks/is-mobile.svelte.ts
var DEFAULT_MOBILE_BREAKPOINT = 768;
var IsMobile = class extends MediaQuery {
	constructor(breakpoint = DEFAULT_MOBILE_BREAKPOINT) {
		super(`max-width: ${breakpoint - 1}px`);
	}
};
//#endregion
//#region src/lib/components/ui/sidebar/constants.ts
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 3600 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
//#endregion
//#region src/lib/components/ui/sidebar/context.svelte.ts
var SidebarState = class {
	props;
	#open = derived(() => this.props.open());
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	openMobile = false;
	setOpen;
	#isMobile;
	#state = derived(() => this.open ? "expanded" : "collapsed");
	get state() {
		return this.#state();
	}
	set state($$value) {
		return this.#state($$value);
	}
	constructor(props) {
		this.setOpen = props.setOpen;
		this.#isMobile = new IsMobile();
		this.props = props;
	}
	get isMobile() {
		return this.#isMobile.current;
	}
	handleShortcutKeydown = (e) => {
		if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			this.toggle();
		}
	};
	setOpenMobile = (value) => {
		this.openMobile = value;
	};
	toggle = () => {
		return this.#isMobile.current ? this.openMobile = !this.openMobile : this.setOpen(!this.open);
	};
};
var SYMBOL_KEY = "scn-sidebar";
/**
* Instantiates a new `SidebarState` instance and sets it in the context.
*
* @param props The constructor props for the `SidebarState` class.
* @returns  The `SidebarState` instance.
*/
function setSidebar(props) {
	return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}
/**
* Retrieves the `SidebarState` instance from the context. This is a class instance,
* so you cannot destructure it.
* @returns The `SidebarState` instance.
*/
function useSidebar() {
	return getContext(Symbol.for(SYMBOL_KEY));
}
tv({
	base: "gap-2 rounded-none px-3 py-2 text-left text-sm ring-sidebar-ring transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-9 text-sm",
			sm: "h-8 text-xs",
			lg: "h-14 px-3 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
//#endregion
//#region src/lib/components/ui/sidebar/sidebar-provider.svelte
function Sidebar_provider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, open = true, onOpenChange = () => {}, class: className, style, children, $$slots, $$events, ...restProps } = $$props;
		setSidebar({
			open: () => open,
			setOpen: (value) => {
				open = value;
				onOpenChange(value);
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
			}
		});
		if (Tooltip_provider) {
			$$renderer.push("<!--[-->");
			Tooltip_provider($$renderer, {
				delayDuration: 0,
				children: ($$renderer) => {
					$$renderer.push(`<div${attributes({
						"data-slot": "sidebar-wrapper",
						style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH)}; --sidebar-width-icon: ${stringify(SIDEBAR_WIDTH_ICON)}; ${stringify(style)}`,
						class: clsx$1(cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className)),
						...restProps
					})}>`);
					children?.($$renderer);
					$$renderer.push(`<!----></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, {
			ref,
			open
		});
	});
}
//#endregion
//#region src/lib/components/ui/sidebar/sidebar-trigger.svelte
function Sidebar_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, onclick, $$slots, $$events, ...restProps } = $$props;
		const sidebar = useSidebar();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Button($$renderer, spread_props([
				{
					"data-sidebar": "trigger",
					"data-slot": "sidebar-trigger",
					variant: "ghost",
					size: "icon-sm",
					class: cn("cn-sidebar-trigger", className),
					type: "button",
					onclick: (e) => {
						onclick?.(e);
						sidebar.toggle();
					}
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						Panel_left($$renderer, {});
						$$renderer.push(`<!----> <span class="sr-only">Toggle Sidebar</span>`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-overlay.svelte
function Sheet_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_overlay) {
				$$renderer.push("<!--[-->");
				Dialog_overlay($$renderer, spread_props([
					{
						"data-slot": "sheet-overlay",
						class: cn("bg-black/20 supports-backdrop-filter:backdrop-blur-sm fixed inset-0 z-50", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-portal.svelte
function Sheet_portal($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Portal) {
		$$renderer.push("<!--[-->");
		Portal($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-content.svelte
function Sheet_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, side = "right", showCloseButton = true, portalProps, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Sheet_portal($$renderer, spread_props([portalProps, {
				children: ($$renderer) => {
					Sheet_overlay($$renderer, {});
					$$renderer.push(`<!----> `);
					if (Dialog_content$1) {
						$$renderer.push("<!--[-->");
						Dialog_content$1($$renderer, spread_props([
							{
								"data-slot": "sheet-content",
								"data-side": side,
								class: cn("fixed z-50 flex flex-col bg-popover bg-clip-padding text-sm text-popover-foreground shadow-md transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className)
							},
							restProps,
							{
								get ref() {
									return ref;
								},
								set ref($$value) {
									ref = $$value;
									$$settled = false;
								},
								children: ($$renderer) => {
									children?.($$renderer);
									$$renderer.push(`<!----> `);
									if (showCloseButton) {
										$$renderer.push("<!--[0-->");
										{
											function child($$renderer, { props }) {
												Button($$renderer, spread_props([
													{
														variant: "ghost",
														class: "absolute top-4 right-4 bg-secondary",
														size: "icon-sm"
													},
													props,
													{
														children: ($$renderer) => {
															X($$renderer, {});
															$$renderer.push(`<!----> <span class="sr-only">Close</span>`);
														},
														$$slots: { default: true }
													}
												]));
											}
											if (Dialog_close) {
												$$renderer.push("<!--[-->");
												Dialog_close($$renderer, {
													"data-slot": "sheet-close",
													child,
													$$slots: { child: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										}
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]-->`);
								},
								$$slots: { default: true }
							}
						]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-description.svelte
function Sheet_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_description) {
				$$renderer.push("<!--[-->");
				Dialog_description($$renderer, spread_props([
					{
						"data-slot": "sheet-description",
						class: cn("mt-0.5 text-sm leading-relaxed text-muted-foreground", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-header.svelte
function Sheet_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "sheet-header",
			class: clsx$1(cn("gap-1.5 p-8 flex flex-col", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-title.svelte
function Sheet_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog_title$1) {
				$$renderer.push("<!--[-->");
				Dialog_title$1($$renderer, spread_props([
					{
						"data-slot": "sheet-title",
						class: cn("font-heading text-lg font-semibold tracking-wider text-foreground uppercase", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/sheet/sheet.svelte
function Sheet($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog$1) {
				$$renderer.push("<!--[-->");
				Dialog$1($$renderer, spread_props([restProps, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					}
				}]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
//#endregion
//#region src/lib/components/ui/sidebar/sidebar.svelte
function Sidebar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, side = "left", variant = "sidebar", collapsible = "offcanvas", class: className, children, $$slots, $$events, ...restProps } = $$props;
		const sidebar = useSidebar();
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (collapsible === "none") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div${attributes({
					class: clsx$1(cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className)),
					...restProps
				})}>`);
				children?.($$renderer);
				$$renderer.push(`<!----></div>`);
			} else if (sidebar.isMobile) {
				$$renderer.push("<!--[1-->");
				var bind_get = () => sidebar.openMobile;
				var bind_set = (v) => sidebar.setOpenMobile(v);
				if (Sheet) {
					$$renderer.push("<!--[-->");
					Sheet($$renderer, spread_props([
						{
							get open() {
								return bind_get();
							},
							set open($$value) {
								bind_set($$value);
							}
						},
						restProps,
						{
							children: ($$renderer) => {
								if (Sheet_content) {
									$$renderer.push("<!--[-->");
									Sheet_content($$renderer, {
										"data-sidebar": "sidebar",
										"data-slot": "sidebar",
										"data-mobile": "true",
										class: cn("w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden", className),
										style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH_MOBILE)};`,
										side,
										get ref() {
											return ref;
										},
										set ref($$value) {
											ref = $$value;
											$$settled = false;
										},
										children: ($$renderer) => {
											if (Sheet_header) {
												$$renderer.push("<!--[-->");
												Sheet_header($$renderer, {
													class: "sr-only",
													children: ($$renderer) => {
														if (Sheet_title) {
															$$renderer.push("<!--[-->");
															Sheet_title($$renderer, {
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Sidebar`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
														$$renderer.push(` `);
														if (Sheet_description) {
															$$renderer.push("<!--[-->");
															Sheet_description($$renderer, {
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Displays the mobile sidebar.`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` <div class="flex h-full w-full flex-col">`);
											children?.($$renderer);
											$$renderer.push(`<!----></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="group peer hidden text-sidebar-foreground md:block"${attr("data-state", sidebar.state)}${attr("data-collapsible", sidebar.state === "collapsed" ? collapsible : "")}${attr("data-variant", variant)}${attr("data-side", side)} data-slot="sidebar"><div data-slot="sidebar-gap"${attr_class(clsx$1(cn("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")))}></div> <div${attributes({
					"data-slot": "sidebar-container",
					class: clsx$1(cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "start-0 group-data-[collapsible=offcanvas]:start-[calc(var(--sidebar-width)*-1)]" : "end-0 group-data-[collapsible=offcanvas]:end-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s", className)),
					...restProps
				})}><div data-sidebar="sidebar" data-slot="sidebar-inner" class="bg-sidebar group-data-[variant=floating]:rounded-none group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border flex size-full flex-col">`);
				children?.($$renderer);
				$$renderer.push(`<!----></div></div></div>`);
			}
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/collapsible/collapsible-content.svelte
function Collapsible_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Collapsible_content$1) {
				$$renderer.push("<!--[-->");
				Collapsible_content$1($$renderer, spread_props([
					{ "data-slot": "collapsible-content" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/collapsible/collapsible-trigger.svelte
function Collapsible_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Collapsible_trigger$1) {
				$$renderer.push("<!--[-->");
				Collapsible_trigger$1($$renderer, spread_props([
					{ "data-slot": "collapsible-trigger" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/collapsible/collapsible.svelte
function Collapsible($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Collapsible$1) {
				$$renderer.push("<!--[-->");
				Collapsible$1($$renderer, spread_props([
					{ "data-slot": "collapsible" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get open() {
							return open;
						},
						set open($$value) {
							open = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			open
		});
	});
}
//#endregion
//#region src/lib/components/NavMain.svelte
function NavMain($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { sections} = $$props;
		function isActive(url) {
			const p = page.url.pathname;
			if (url === "/dashboard") return p === "/dashboard";
			return p.startsWith(url) && p !== "/dashboard";
		}
		function isExact(url) {
			return page.url.pathname === url;
		}
		const formatCount = (count) => count > 99 ? "99+" : String(count);
		$$renderer.push(`<nav class="px-2"><!--[-->`);
		const each_array = ensure_array_like(sections);
		for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
			let { section, items } = each_array[$$index_2];
			$$renderer.push(`<div class="mb-1">`);
			if (section) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="px-3 pt-3 pb-1 text-[9px] font-medium tracking-widest text-muted-foreground/70 uppercase">${escape_html(section)}</div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array_1 = ensure_array_like(items);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_1[$$index_1];
				if (item.items) {
					$$renderer.push("<!--[0-->");
					{
						function child($$renderer, { props }) {
							$$renderer.push(`<div${attributes({ ...props })}><button${attr_class(clsx$1(cn("relative flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-colors duration-150", isActive(item.url) ? "bg-background font-medium text-foreground shadow-[inset_2px_0_0_hsl(var(--foreground))]" : "text-muted-foreground hover:bg-accent hover:text-foreground")))}>`);
							if (item.icon) {
								$$renderer.push("<!--[0-->");
								if (item.icon) {
									$$renderer.push("<!--[-->");
									item.icon($$renderer, { class: "h-3.75 w-3.75 shrink-0 opacity-70" });
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--> <span class="flex-1 text-left">${escape_html(item.title)}</span> `);
							if ((item.counter ?? 0) > 0) {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<span class="flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold">${escape_html(formatCount(item.counter ?? 0))}</span>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--> `);
							{
								function child($$renderer, { props }) {
									$$renderer.push(`<span${attributes({
										...props,
										class: "ml-0.5 rounded p-0.5 opacity-40 hover:opacity-70"
									})}><svg class="h-3 w-3 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2l4 4-4 4"></path></svg></span>`);
								}
								if (Collapsible_trigger) {
									$$renderer.push("<!--[-->");
									Collapsible_trigger($$renderer, spread_props([props, {
										child,
										$$slots: { child: true }
									}]));
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							}
							$$renderer.push(`</button> `);
							if (Collapsible_content) {
								$$renderer.push("<!--[-->");
								Collapsible_content($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<div class="mt-0.5 ml-[26px] border-l border-border/60 pb-1 pl-2.5"><!--[-->`);
										const each_array_2 = ensure_array_like(item.items ?? []);
										for (let $$index = 0, $$length = each_array_2.length; $$index < $$length; $$index++) {
											let sub = each_array_2[$$index];
											$$renderer.push(`<a${attr("href", sub.url)}${attr_class(clsx$1(cn("flex items-center gap-2 rounded-md px-2 py-[5px] text-[12px] no-underline transition-colors duration-150", isExact(sub.url) ? "bg-accent font-medium text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground")))}><span${attr_class(clsx$1(cn("h-1 w-1 shrink-0 rounded-full transition-colors", isExact(sub.url) ? "bg-foreground" : "bg-muted-foreground/50")))}></span> ${escape_html(sub.title)}</a>`);
										}
										$$renderer.push(`<!--]--></div>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(`</div>`);
						}
						if (Collapsible) {
							$$renderer.push("<!--[-->");
							Collapsible($$renderer, {
								open: isActive(item.url),
								class: "group/collapsible",
								child,
								$$slots: { child: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					}
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="relative"><a${attr("href", item.url)}${attr_class(clsx$1(cn("flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] no-underline transition-colors duration-150", isActive(item.url) ? "bg-background font-medium text-foreground shadow-[inset_2px_0_0_hsl(var(--foreground))]" : "text-muted-foreground hover:bg-accent hover:text-foreground")))}>`);
					if (item.icon) {
						$$renderer.push("<!--[0-->");
						if (item.icon) {
							$$renderer.push("<!--[-->");
							item.icon($$renderer, { class: "h-[15px] w-[15px] shrink-0 opacity-70" });
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> <span class="flex-1">${escape_html(item.title)}</span> `);
					if ((item.counter ?? 0) > 0) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<span class="flex h-4.5 min-w-4.5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold">${escape_html(formatCount(item.counter ?? 0))}</span>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></a></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></nav>`);
	});
}
//#endregion
//#region src/lib/components/app-sidebar.svelte
function App_sidebar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { messageNumber, $$slots, $$events, ...restProps } = $$props;
		const navigation = [
			{
				section: null,
				items: [
					{
						title: "Dashboard",
						url: "/dashboard",
						icon: Layout_dashboard
					},
					{
						title: "Bookings",
						url: "/dashboard/bookings",
						icon: Calendar_check
					},
					{
						title: "Enquiries",
						url: "/dashboard/enquiries",
						icon: Mail,
						counter: messageNumber
					},
					{
						title: "Event Registrations",
						url: "/dashboard/event-registrations",
						icon: Ticket
					}
				]
			},
			{
				section: "Website Content",
				items: [
					{
						title: "Menu",
						url: "/dashboard/content/menu-items",
						icon: Utensils_crossed,
						items: [{
							title: "Menu Items",
							url: "/dashboard/content/menu-items"
						}, {
							title: "Menu Categories",
							url: "/dashboard/content/menu-categories"
						}]
					},
					{
						title: "Gallery",
						url: "/dashboard/content/gallery",
						icon: Image$1
					},
					{
						title: "Events",
						url: "/dashboard/content/events",
						icon: Party_popper
					},
					{
						title: "Opening Hours",
						url: "/dashboard/content/opening-hours",
						icon: Clock
					},
					{
						title: "Announcements",
						url: "/dashboard/content/announcements",
						icon: Megaphone
					},
					{
						title: "Pages",
						url: "/dashboard/content/heroes",
						icon: Layout_template,
						items: [
							{
								title: "Page Banners",
								url: "/dashboard/content/heroes"
							},
							{
								title: "FAQs",
								url: "/dashboard/content/faqs"
							},
							{
								title: "Site Settings",
								url: "/dashboard/content/settings"
							}
						]
					},
					{
						title: "Reviews",
						url: "/dashboard/testimonials",
						icon: Star
					}
				]
			},
			{
				section: "Administration",
				items: [{
					title: "Admin Panel",
					url: "/dashboard/admin-panel",
					icon: User_round_cog,
					items: [{
						title: "Users",
						url: "/dashboard/admin-panel/users"
					}, {
						title: "Roles",
						url: "/dashboard/admin-panel/roles"
					}]
				}]
			}
		];
		useSidebar();
		if (Sidebar) {
			$$renderer.push("<!--[-->");
			Sidebar($$renderer, spread_props([
				{ collapsible: "offcanvas" },
				restProps,
				{
					children: ($$renderer) => {
						if (Sidebar_content) {
							$$renderer.push("<!--[-->");
							Sidebar_content($$renderer, {
								class: `z-[9999] flex h-full [scrollbar-width:thin] [scrollbar-color:hsl(var(--border))_transparent] flex-col
      overflow-y-scroll
      pt-0
      [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-border
      [&::-webkit-scrollbar-track]:bg-transparent
      ${stringify(bgGradient)}`,
								children: ($$renderer) => {
									$$renderer.push(`<div class="sticky top-0 z-10 border-b border-border/60 bg-sidebar px-4 py-4"><a href="/" title="Go to Website Home Page" class="flex flex-row flex-wrap gap-2" target="_blank"><img src="/logo.webp" alt="Logo" class="h-4 rounded-[1px]"/> <div><div class="text-[13px] font-medium tracking-tight text-foreground">Admin Panel</div> <div class="text-[10px] tracking-widest text-muted-foreground uppercase">Dashboard</div></div></a></div> <div class="flex-1 py-2">`);
									NavMain($$renderer, {
										sections: navigation
									});
									$$renderer.push(`<!----></div>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				}
			]));
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/lib/components/Search.svelte
function Search_1($$renderer) {
	let isOpen = false;
	let list = [
		{
			label: "Dashboard",
			path: "/dashboard"
		},
		{
			label: "Bookings",
			path: "/dashboard/bookings"
		},
		{
			label: "Enquiries",
			path: "/dashboard/enquiries"
		},
		{
			label: "Reviews",
			path: "/dashboard/testimonials"
		},
		{
			label: "Menu Items",
			path: "/dashboard/content/menu-items"
		},
		{
			label: "Menu Categories",
			path: "/dashboard/content/menu-categories"
		},
		{
			label: "Gallery",
			path: "/dashboard/content/gallery"
		},
		{
			label: "Events",
			path: "/dashboard/content/events"
		},
		{
			label: "Opening Hours",
			path: "/dashboard/content/opening-hours"
		},
		{
			label: "Announcements",
			path: "/dashboard/content/announcements"
		},
		{
			label: "Page Banners",
			path: "/dashboard/content/heroes"
		},
		{
			label: "FAQs",
			path: "/dashboard/content/faqs"
		},
		{
			label: "Site Settings",
			path: "/dashboard/content/settings"
		},
		{
			label: "Roles",
			path: "/dashboard/admin-panel/roles"
		},
		{
			label: "Add Roles",
			path: "/dashboard/admin-panel/roles/add-roles"
		},
		{
			label: "Users",
			path: "/dashboard/admin-panel/users"
		},
		{
			label: "Add Users",
			path: "/dashboard/admin-panel/users/add-users"
		}
	];
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		if (Dialog) {
			$$renderer.push("<!--[-->");
			Dialog($$renderer, {
				get open() {
					return isOpen;
				},
				set open($$value) {
					isOpen = $$value;
					$$settled = false;
				},
				children: ($$renderer) => {
					if (Dialog_trigger) {
						$$renderer.push("<!--[-->");
						Dialog_trigger($$renderer, {
							class: "w-auto px-4",
							title: "Search for Pages",
							children: ($$renderer) => {
								Search($$renderer, {});
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` `);
					if (Dialog_content) {
						$$renderer.push("<!--[-->");
						Dialog_content($$renderer, {
							class: "max-w-lg! gap-4 overflow-hidden",
							children: ($$renderer) => {
								if (Dialog_header) {
									$$renderer.push("<!--[-->");
									Dialog_header($$renderer, {
										children: ($$renderer) => {
											if (Dialog_title) {
												$$renderer.push("<!--[-->");
												Dialog_title($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->Search the whole site`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` `);
								if (Command) {
									$$renderer.push("<!--[-->");
									Command($$renderer, {
										class: "w-full min-w-0 rounded-lg border",
										children: ($$renderer) => {
											if (Command_input) {
												$$renderer.push("<!--[-->");
												Command_input($$renderer, { placeholder: "Type a page name..." });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Command_list) {
												$$renderer.push("<!--[-->");
												Command_list($$renderer, {
													children: ($$renderer) => {
														if (Command_empty) {
															$$renderer.push("<!--[-->");
															Command_empty($$renderer, {
																children: ($$renderer) => {
																	$$renderer.push(`<!---->No results found.`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
														$$renderer.push(` `);
														if (Command_group) {
															$$renderer.push("<!--[-->");
															Command_group($$renderer, {
																heading: "Pages",
																children: ($$renderer) => {
																	$$renderer.push(`<!--[-->`);
																	const each_array = ensure_array_like(list);
																	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
																		let item = each_array[$$index];
																		if (Command_link_item) {
																			$$renderer.push("<!--[-->");
																			Command_link_item($$renderer, {
																				href: item.path,
																				value: item.label,
																				onSelect: () => isOpen = false,
																				children: ($$renderer) => {
																					Disc($$renderer, {});
																					$$renderer.push(`<!----> ${escape_html(item.label)}`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push("<!--]-->");
																		} else {
																			$$renderer.push("<!--[!-->");
																			$$renderer.push("<!--]-->");
																		}
																	}
																	$$renderer.push(`<!--]-->`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
function Avatar_fallback($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Avatar_fallback$1) {
				$$renderer.push("<!--[-->");
				Avatar_fallback$1($$renderer, spread_props([
					{
						"data-slot": "avatar-fallback",
						class: cn("rounded-full bg-muted text-muted-foreground flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Avatar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, loadingStatus = "loading", size = "default", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Avatar$1) {
				$$renderer.push("<!--[-->");
				Avatar$1($$renderer, spread_props([
					{
						"data-slot": "avatar",
						"data-size": size,
						class: cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get loadingStatus() {
							return loadingStatus;
						},
						set loadingStatus($$value) {
							loadingStatus = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			loadingStatus
		});
	});
}
//#endregion
//#region src/lib/components/AvatarSettings.svelte
function AvatarSettings($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let deleting = false;
		if (Dropdown_menu) {
			$$renderer.push("<!--[-->");
			Dropdown_menu($$renderer, {
				children: ($$renderer) => {
					if (Dropdown_menu_trigger) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_trigger($$renderer, {
							children: ($$renderer) => {
								if (Avatar) {
									$$renderer.push("<!--[-->");
									Avatar($$renderer, {
										children: ($$renderer) => {
											if (Avatar_fallback) {
												$$renderer.push("<!--[-->");
												Avatar_fallback($$renderer, {
													class: "flex items-center justify-center  rounded-full border-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 font-medium text-white dark:from-indigo-800 dark:via-purple-700 dark:to-pink-800",
													children: ($$renderer) => {
														$$renderer.push(`<!---->${escape_html(data?.[0]?.toUpperCase() ?? "N")}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` `);
					if (Dropdown_menu_content) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_content($$renderer, {
							class: "p-2",
							children: ($$renderer) => {
								if (Dropdown_menu_group) {
									$$renderer.push("<!--[-->");
									Dropdown_menu_group($$renderer, {
										children: ($$renderer) => {
											if (Dropdown_menu_label) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_label($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->My Account`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: () => goto(),
													children: ($$renderer) => {
														User($$renderer, {});
														$$renderer.push(`<!----> My Account`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: () => goto(),
													children: ($$renderer) => {
														Key_round($$renderer, {});
														$$renderer.push(`<!----> Change Password`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<form method="post" action="/dashboard/?/logout"><button type="submit"${attr("disabled", deleting, true)} class="flex flex-row items-center justify-center gap-2">`);
														$$renderer.push("<!--[-1-->");
														Log_out($$renderer, { class: "" });
														$$renderer.push(`<!----> Logout`);
														$$renderer.push(`<!--]--></button></form>`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}
//#endregion
//#region src/routes/dashboard/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, data } = $$props;
		if (Sidebar_provider) {
			$$renderer.push("<!--[-->");
			Sidebar_provider($$renderer, {
				children: ($$renderer) => {
					App_sidebar($$renderer, { messageNumber: data?.messageNumber });
					$$renderer.push(`<!----> <main class="w-full min-w-0 px-2"><div class="absolute top-2 left-2 z-10 flex w-[95%] flex-row justify-between rounded-lg p-2 pr-4 align-middle shadow-lg backdrop-blur-md lg:sticky lg:w-full lg:pr-0">`);
					if (Sidebar_trigger) {
						$$renderer.push("<!--[-->");
						Sidebar_trigger($$renderer, { class: "rounded-lg bg-white p-4 dark:bg-black" });
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` <div class="flex flex-row items-center gap-4">`);
					Search_1($$renderer);
					$$renderer.push(`<!----> `);
					DarkMode($$renderer);
					$$renderer.push(`<!----> `);
					AvatarSettings($$renderer, { data: data?.name });
					$$renderer.push(`<!----></div></div> <div class="p-2 pt-24 pb-24 lg:pt-4 lg:pb-4">`);
					children?.($$renderer);
					$$renderer.push(`<!----></div></main>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	});
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte.js-CDKZgXDa.js.map
