import { a0 as bind_props, _ as spread_props, aa as props_id, T as attributes, F as derived, a4 as escape_html, V as ensure_array_like, X as attr } from '../../../../chunks/index-server.js-G-77DcSL.js';
import { u as createId, a as boxWith, l as attachRef, q as mergeProps, h as createBitsAttrs, n as boolToEmptyStrOrUndef, m as getDataOpenClosed, o as boolToStr } from '../../../../chunks/create-id.js-Pl6wo96w.js';
import { C as Chevron_down } from '../../../../chunks/chevron-down.js-B9MsoqDg.js';
import { c as cn, t as tv } from '../../../../chunks/button.js-CVHOzf19.js';
import { n as noop, R as RovingFocusGroup, a as afterTick } from '../../../../chunks/noop.js-BLOEitT-.js';
import { C as Context, w as watch, A as ARROW_RIGHT, b as ARROW_LEFT } from '../../../../chunks/is.js-LX4C4ueF.js';
import { i as DropdownMenuTriggerState, P as Portal, w as wrapArray, j as MenuContentState } from '../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import { c as Floating_layer_anchor, g as getFloatingContentCSSVars, P as Popper_layer_force_mount, a as Popper_layer } from '../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import { M as Menu, a as Menu_item, b as Menu_separator } from '../../../../chunks/menu.js-D-wpWomV.js';
import { s as selectItem } from '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/legacy-client.js-DyVQ66Cr.js';

//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menubar/menubar.svelte.js
var menubarAttrs = createBitsAttrs({
	component: "menubar",
	parts: [
		"root",
		"trigger",
		"content"
	]
});
var MenubarRootContext = new Context("Menubar.Root");
var MenubarMenuContext = new Context("Menubar.Menu");
var MenubarRootState = class MenubarRootState {
	static create(opts) {
		return MenubarRootContext.set(new MenubarRootState(opts));
	}
	opts;
	rovingFocusGroup;
	attachment;
	wasOpenedByKeyboard = false;
	triggerIds = [];
	/** Outgoing menu id when swapping to another top-level menu... skip exit animation wait only then */
	skipExitAnimationForMenuValue = null;
	valueToChangeHandler = /* @__PURE__ */ new Map();
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: menubarAttrs.trigger,
			loop: this.opts.loop,
			orientation: boxWith(() => "horizontal")
		});
	}
	/**
	* @param id - the id of the trigger to register
	* @returns - a function to de-register the trigger
	*/
	registerTrigger = (id) => {
		this.triggerIds.push(id);
		return () => {
			this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
		};
	};
	/**
	* @param value - the value of the menu to register
	* @param contentId - the content id to associate with the value
	* @returns - a function to de-register the menu
	*/
	registerMenu = (value, onOpenChange) => {
		this.valueToChangeHandler.set(value, onOpenChange);
		return () => {
			this.valueToChangeHandler.delete(value);
		};
	};
	updateValue = (value) => {
		const currValue = this.opts.value.current;
		const switchingMenus = Boolean(currValue && value && currValue !== value);
		if (switchingMenus) this.skipExitAnimationForMenuValue = currValue;
		const currHandler = this.valueToChangeHandler.get(currValue)?.current;
		const nextHandler = this.valueToChangeHandler.get(value)?.current;
		this.opts.value.current = value;
		if (currHandler && currValue !== value) currHandler(false);
		if (nextHandler) nextHandler(true);
		if (switchingMenus) afterTick(() => {
			this.skipExitAnimationForMenuValue = null;
		});
	};
	getTriggers = () => {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(menubarAttrs.selector("trigger")));
	};
	onMenuOpen = (id, triggerId) => {
		this.updateValue(id);
		this.rovingFocusGroup.setCurrentTabStopId(triggerId);
	};
	onMenuClose = () => {
		this.updateValue("");
	};
	onMenuToggle = (id) => {
		this.updateValue(this.opts.value.current ? "" : id);
	};
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "menubar",
		[menubarAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenubarMenuState = class MenubarMenuState {
	static create(opts) {
		return MenubarMenuContext.set(new MenubarMenuState(opts, MenubarRootContext.get()));
	}
	opts;
	root;
	#open = derived(() => this.root.opts.value.current === this.opts.value.current);
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	wasOpenedByKeyboard = false;
	triggerNode = null;
	#triggerId = derived(() => this.triggerNode?.id);
	get triggerId() {
		return this.#triggerId();
	}
	set triggerId($$value) {
		return this.#triggerId($$value);
	}
	#contentId = derived(() => this.contentNode?.id);
	get contentId() {
		return this.#contentId();
	}
	set contentId($$value) {
		return this.#contentId($$value);
	}
	contentNode = null;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		watch(() => this.open, () => {
			if (!this.open) this.wasOpenedByKeyboard = false;
		});
	}
	getTriggerNode() {
		return this.triggerNode;
	}
	toggleMenu() {
		this.root.onMenuToggle(this.opts.value.current);
	}
	openMenu() {
		this.root.onMenuOpen(this.opts.value.current, this.triggerNode?.id ?? "");
	}
};
var MenubarTriggerState = class MenubarTriggerState {
	static create(opts) {
		return new MenubarTriggerState(opts, MenubarMenuContext.get());
	}
	opts;
	menu;
	root;
	attachment;
	isFocused = false;
	#tabIndex = 0;
	constructor(opts, menu) {
		this.opts = opts;
		this.menu = menu;
		this.root = menu.root;
		this.attachment = attachRef(this.opts.ref, (v) => this.menu.triggerNode = v);
	}
	onpointerdown = (e) => {
		if (!this.opts.disabled.current && e.button === 0 && e.ctrlKey === false) {
			if (!this.menu.open) e.preventDefault();
			this.menu.toggleMenu();
		}
	};
	onpointerenter = () => {
		if (Boolean(this.root.opts.value.current) && !this.menu.open) {
			this.menu.openMenu();
			this.menu.getTriggerNode()?.focus();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === "Tab") return;
		if (e.key === "Enter" || e.key === " ") this.root.onMenuToggle(this.menu.opts.value.current);
		if (e.key === "ArrowDown") this.menu.openMenu();
		if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
			this.menu.wasOpenedByKeyboard = true;
			e.preventDefault();
		}
		this.root.rovingFocusGroup.handleKeydown(this.menu.getTriggerNode(), e);
	};
	onfocus = () => {
		this.isFocused = true;
	};
	onblur = () => {
		this.isFocused = false;
	};
	#props = derived(() => ({
		type: "button",
		role: "menuitem",
		id: this.opts.id.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.menu.open),
		"aria-controls": this.menu.open ? this.menu.contentId : void 0,
		"data-highlighted": this.isFocused ? "" : void 0,
		"data-state": getDataOpenClosed(this.menu.open),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-menu-value": this.menu.opts.value.current,
		disabled: this.opts.disabled.current ? true : void 0,
		tabindex: this.#tabIndex,
		[menubarAttrs.trigger]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onkeydown: this.onkeydown,
		onfocus: this.onfocus,
		onblur: this.onblur,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenubarContentState = class MenubarContentState {
	static create(opts) {
		return new MenubarContentState(opts, MenubarMenuContext.get());
	}
	opts;
	menu;
	root;
	attachment;
	constructor(opts, menu) {
		this.opts = opts;
		this.menu = menu;
		this.root = menu.root;
		this.attachment = attachRef(this.opts.ref, (v) => this.menu.contentNode = v);
	}
	onCloseAutoFocus = (e) => {
		this.opts.onCloseAutoFocus.current?.(e);
		if (e.defaultPrevented) return;
	};
	onFocusOutside = (e) => {
		const target = e.target;
		if (this.root.getTriggers().some((trigger) => trigger.contains(target))) e.preventDefault();
		this.opts.onFocusOutside.current(e);
	};
	onInteractOutside = (e) => {
		this.opts.onInteractOutside.current(e);
	};
	onOpenAutoFocus = (e) => {
		this.opts.onOpenAutoFocus.current(e);
		if (e.defaultPrevented) return;
		afterTick(() => this.opts.ref.current?.focus());
	};
	onkeydown = (e) => {
		if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
		const target = e.target;
		const targetIsSubTrigger = target.hasAttribute("data-menu-sub-trigger");
		const isKeydownInsideSubMenu = target.closest("[data-menu-content]") !== e.currentTarget;
		const isPrevKey = (this.root.opts.dir.current === "rtl" ? ARROW_RIGHT : ARROW_LEFT) === e.key;
		if (!isPrevKey && targetIsSubTrigger) return;
		if (isKeydownInsideSubMenu && isPrevKey) return;
		let candidates = this.root.getTriggers().filter((trigger) => !trigger.disabled).map((item) => ({
			value: item.getAttribute("data-menu-value"),
			triggerId: item.id ?? ""
		}));
		if (isPrevKey) candidates.reverse();
		const candidateValues = candidates.map(({ value }) => value);
		const openMenuValue = this.root.opts.value.current;
		if (!openMenuValue) return;
		const currentIndex = candidateValues.indexOf(openMenuValue);
		if (currentIndex === -1) return;
		candidates = this.root.opts.loop.current ? wrapArray(candidates, currentIndex + 1) : candidates.slice(currentIndex + 1);
		const [nextValue] = candidates;
		if (nextValue) {
			this.menu.root.onMenuOpen(nextValue.value, nextValue.triggerId);
			e.preventDefault();
		}
	};
	#props = derived(() => ({
		id: this.opts.id.current,
		"aria-labelledby": this.menu.triggerId,
		style: getFloatingContentCSSVars("menubar"),
		onkeydown: this.onkeydown,
		"data-menu-content": "",
		[menubarAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = {
		onCloseAutoFocus: this.onCloseAutoFocus,
		onFocusOutside: this.onFocusOutside,
		onInteractOutside: this.onInteractOutside,
		onOpenAutoFocus: this.onOpenAutoFocus
	};
};
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menubar/components/menubar.svelte
function Menubar$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), children, child, ref = null, value = "", dir = "ltr", loop = true, onValueChange = noop, $$slots, $$events, ...restProps } = $$props;
		const rootState = MenubarRootState.create({
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange?.(v);
			}),
			dir: boxWith(() => dir),
			loop: boxWith(() => loop),
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
			ref,
			value
		});
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menubar/components/menubar-menu.svelte
function Menubar_menu$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { value = createId(uid), onOpenChange = noop, $$slots, $$events, ...restProps } = $$props;
		const menuState = MenubarMenuState.create({
			value: boxWith(() => value),
			onOpenChange: boxWith(() => onOpenChange)
		});
		Menu($$renderer, spread_props([
			{
				open: menuState.open,
				onOpenChange: (open) => {
					if (!open) menuState.root.onMenuClose();
				},
				dir: menuState.root.opts.dir.current,
				_internal_variant: "menubar"
			},
			restProps,
			{ _internal_should_skip_exit_animation: () => menuState.root.skipExitAnimationForMenuValue === menuState.opts.value.current }
		]));
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menu/components/menu-content.svelte
function Menu_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), child, children, ref = null, loop = true, onInteractOutside = noop, onEscapeKeydown = noop, onCloseAutoFocus: onCloseAutoFocusProp = noop, forceMount = false, style, $$slots, $$events, ...restProps } = $$props;
		const contentState = MenuContentState.create({
			id: boxWith(() => id),
			loop: boxWith(() => loop),
			ref: boxWith(() => ref, (v) => ref = v),
			onCloseAutoFocus: boxWith(() => onCloseAutoFocusProp)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props, { style: { outline: "none" } }));
		function handleInteractOutside(e) {
			onInteractOutside(e);
			if (e.defaultPrevented) return;
			if (e.target && e.target instanceof Element) {
				const subContentSelector = `[${contentState.parentMenu.root.getBitsAttr("sub-content")}]`;
				if (e.target.closest(subContentSelector)) return;
			}
			contentState.parentMenu.onClose();
		}
		function handleEscapeKeydown(e) {
			onEscapeKeydown(e);
			if (e.defaultPrevented) return;
			contentState.parentMenu.onClose();
		}
		if (forceMount) {
			$$renderer.push("<!--[0-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: {
						outline: "none",
						...getFloatingContentCSSVars("menu")
					} }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer_force_mount($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						enabled: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus: true,
						loop,
						forceMount: true,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else if (!forceMount) {
			$$renderer.push("<!--[1-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: {
						outline: "none",
						...getFloatingContentCSSVars("menu")
					} }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						open: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus: true,
						loop,
						forceMount: false,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menubar/components/menubar-content.svelte
function Menubar_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { ref = null, interactOutsideBehavior = "close", id = createId(uid), onInteractOutside = noop, onFocusOutside = noop, onCloseAutoFocus = noop, onOpenAutoFocus = noop, $$slots, $$events, ...restProps } = $$props;
		const contentState = MenubarContentState.create({
			id: boxWith(() => id),
			interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
			ref: boxWith(() => ref, (v) => ref = v),
			onInteractOutside: boxWith(() => onInteractOutside),
			onFocusOutside: boxWith(() => onFocusOutside),
			onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
			onOpenAutoFocus: boxWith(() => onOpenAutoFocus)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Menu_content($$renderer, spread_props([
				mergedProps(),
				contentState.popperProps,
				{
					preventScroll: false,
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
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
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/menubar/components/menubar-trigger.svelte
function Menubar_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), disabled = false, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const triggerState = MenubarTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const dropdownTriggerState = DropdownMenuTriggerState.create(triggerState.opts);
		const triggerAttachment = attachRef((v) => dropdownTriggerState.parentMenu.triggerNode = v);
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props, { ...triggerAttachment }));
		Floating_layer_anchor($$renderer, {
			id,
			ref: triggerState.opts.ref,
			children: ($$renderer) => {
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
			}});
		bind_props($$props, { ref });
	});
}
tv({ base: "rounded-none px-4.5 py-2.5 text-sm font-medium transition-all hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-1 disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none" });
//#endregion
//#region src/lib/components/ui/menubar/menubar-portal.svelte
function Menubar_portal($$renderer, $$props) {
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
//#region src/lib/components/ui/menubar/menubar-content.svelte
function Menubar_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, sideOffset = 8, alignOffset = -4, align = "start", side = "bottom", portalProps, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Menubar_portal($$renderer, spread_props([portalProps, {
				children: ($$renderer) => {
					if (Menubar_content$1) {
						$$renderer.push("<!--[-->");
						Menubar_content$1($$renderer, spread_props([
							{
								"data-slot": "menubar-content",
								align,
								alignOffset,
								side,
								sideOffset,
								class: cn("z-50 min-w-36 origin-(--bits-menubar-content-transform-origin) overflow-hidden rounded-lg p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className)
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
//#region src/lib/components/ui/menubar/menubar-item.svelte
function Menubar_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, inset = void 0, variant = "default", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_item) {
				$$renderer.push("<!--[-->");
				Menu_item($$renderer, spread_props([
					{
						"data-slot": "menubar-item",
						"data-inset": inset,
						"data-variant": variant,
						class: cn("gap-2.5 rounded-none px-3 py-2 text-sm focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-3.5 data-[variant=destructive]:*:[svg]:text-destructive! group/menubar-item flex items-center", className)
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
//#region src/lib/components/ui/menubar/menubar-menu.svelte
function Menubar_menu($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Menubar_menu$1) {
		$$renderer.push("<!--[-->");
		Menubar_menu$1($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/menubar/menubar-separator.svelte
function Menubar_separator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_separator) {
				$$renderer.push("<!--[-->");
				Menu_separator($$renderer, spread_props([
					{
						"data-slot": "menubar-separator",
						class: cn("-mx-1.5 my-1.5 h-px bg-border/50 -mx-1 my-1 h-px", className)
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
//#region src/lib/components/ui/menubar/menubar-trigger.svelte
function Menubar_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menubar_trigger$1) {
				$$renderer.push("<!--[-->");
				Menubar_trigger$1($$renderer, spread_props([
					{
						"data-slot": "menubar-trigger",
						class: cn("rounded-none px-2 py-0.75 text-sm font-medium hover:bg-muted aria-expanded:bg-muted flex items-center outline-hidden select-none", className)
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
//#region src/lib/components/ui/menubar/menubar.svelte
function Menubar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menubar$1) {
				$$renderer.push("<!--[-->");
				Menubar$1($$renderer, spread_props([
					{
						"data-slot": "menubar",
						class: cn("h-10 rounded-none border p-1 flex items-center", className)
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
//#region src/routes/dashboard/admin-panel/+layout.svelte
function menu($$renderer, trigger = "", array = [{
	name: "",
	href: ""
}]) {
	if (Menubar_menu) {
		$$renderer.push("<!--[-->");
		Menubar_menu($$renderer, {
			children: ($$renderer) => {
				if (Menubar_trigger) {
					$$renderer.push("<!--[-->");
					Menubar_trigger($$renderer, {
						class: selectItem,
						children: ($$renderer) => {
							$$renderer.push(`<!---->${escape_html(trigger)} `);
							Chevron_down($$renderer, {});
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` <div>`);
				if (Menubar_content) {
					$$renderer.push("<!--[-->");
					Menubar_content($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!--[-->`);
							const each_array = ensure_array_like(array);
							for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
								let menu = each_array[$$index];
								if (Menubar_item) {
									$$renderer.push("<!--[-->");
									Menubar_item($$renderer, {
										class: selectItem,
										children: ($$renderer) => {
											$$renderer.push(`<a${attr("href", menu.href)} class="w-full">${escape_html(menu.name)}</a>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` `);
								if (Menubar_separator) {
									$$renderer.push("<!--[-->");
									Menubar_separator($$renderer, {});
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
				$$renderer.push(`</div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
function _layout($$renderer, $$props) {
	let { children } = $$props;
	let userManagement = [{
		name: "Users",
		href: "/dashboard/admin-panel/users"
	}, {
		name: "Roles",
		href: "/dashboard/admin-panel/roles"
	}];
	if (Menubar) {
		$$renderer.push("<!--[-->");
		Menubar($$renderer, {
			class: "sticky mb-8 bg-transparent",
			children: ($$renderer) => {
				menu($$renderer, "User Management", userManagement);
			},
			$$slots: { default: true }
		});
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
	$$renderer.push(` `);
	children?.($$renderer);
	$$renderer.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte.js-BKTz8y8H.js.map
