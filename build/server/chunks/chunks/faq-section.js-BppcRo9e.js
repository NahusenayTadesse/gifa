import { a2 as attr_class, a3 as stringify, a0 as bind_props, _ as spread_props, aa as props_id, T as attributes, F as derived, V as ensure_array_like, U as clsx$1, a4 as escape_html } from './index-server.js-G-77DcSL.js';
import { o as on } from './legacy-client.js-DyVQ66Cr.js';
import { u as createId, a as boxWith, q as mergeProps, l as attachRef, n as boolToEmptyStrOrUndef, h as createBitsAttrs, m as getDataOpenClosed, p as getDataTransitionAttrs, o as boolToStr } from './create-id.js-Pl6wo96w.js';
import { C as Chevron_down } from './chevron-down.js-B9MsoqDg.js';
import { C as Chevron_up } from './chevron-up.js-CYbksHm-.js';
import { c as cn } from './button.js-CVHOzf19.js';
import { n as noop, R as RovingFocusGroup, P as PresenceManager, a as afterTick } from './noop.js-BLOEitT-.js';
import { w as watch, C as Context } from './is.js-LX4C4ueF.js';
import { S as Section_heading } from './section-heading.js-BbSbdCg2.js';

//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/accordion.svelte.js
var accordionAttrs = createBitsAttrs({
	component: "accordion",
	parts: [
		"root",
		"trigger",
		"content",
		"item",
		"header"
	]
});
var AccordionRootContext = new Context("Accordion.Root");
var AccordionItemContext = new Context("Accordion.Item");
var AccordionBaseState = class {
	opts;
	rovingFocusGroup;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: accordionAttrs.trigger,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		[accordionAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionSingleState = class extends AccordionBaseState {
	opts;
	isMulti = false;
	constructor(opts) {
		super(opts);
		this.opts = opts;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.opts.value.current === item;
	}
	toggleItem(item) {
		this.opts.value.current = this.includesItem(item) ? "" : item;
	}
};
var AccordionMultiState = class extends AccordionBaseState {
	#value;
	isMulti = true;
	constructor(props) {
		super(props);
		this.#value = props.value;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.#value.current.includes(item);
	}
	toggleItem(item) {
		this.#value.current = this.includesItem(item) ? this.#value.current.filter((v) => v !== item) : [...this.#value.current, item];
	}
};
var AccordionRootState = class {
	static create(props) {
		const { type, ...rest } = props;
		const rootState = type === "single" ? new AccordionSingleState(rest) : new AccordionMultiState(rest);
		return AccordionRootContext.set(rootState);
	}
};
var AccordionItemState = class AccordionItemState {
	static create(props) {
		return AccordionItemContext.set(new AccordionItemState({
			...props,
			rootState: AccordionRootContext.get()
		}));
	}
	opts;
	root;
	#isActive = derived(() => this.root.includesItem(this.opts.value.current));
	get isActive() {
		return this.#isActive();
	}
	set isActive($$value) {
		return this.#isActive($$value);
	}
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	attachment;
	contentNode = null;
	contentPresence;
	constructor(opts) {
		this.opts = opts;
		this.root = opts.rootState;
		this.updateValue = this.updateValue.bind(this);
		this.attachment = attachRef(this.opts.ref);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: boxWith(() => this.isActive)
		});
	}
	updateValue() {
		this.root.toggleItem(this.opts.value.current);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.isActive),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		"data-orientation": this.root.opts.orientation.current,
		[accordionAttrs.item]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionTriggerState = class AccordionTriggerState {
	opts;
	itemState;
	#root;
	#isDisabled = derived(() => this.opts.disabled.current || this.itemState.opts.disabled.current || this.#root.opts.disabled.current);
	attachment;
	constructor(opts, itemState) {
		this.opts = opts;
		this.itemState = itemState;
		this.#root = itemState.root;
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionTriggerState(props, AccordionItemContext.get());
	}
	onclick(e) {
		if (this.#isDisabled() || e.button !== 0) {
			e.preventDefault();
			return;
		}
		this.itemState.updateValue();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.itemState.updateValue();
			return;
		}
		this.#root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		disabled: this.#isDisabled(),
		"aria-expanded": boolToStr(this.itemState.isActive),
		"aria-disabled": boolToStr(this.#isDisabled()),
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"data-state": getDataOpenClosed(this.itemState.isActive),
		"data-orientation": this.#root.opts.orientation.current,
		[accordionAttrs.trigger]: "",
		tabindex: this.opts.tabindex.current,
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
var AccordionContentState = class AccordionContentState {
	opts;
	item;
	attachment;
	#originalStyles = void 0;
	#isMountAnimationPrevented = false;
	#dimensions = {
		width: 0,
		height: 0
	};
	#open = derived(() => {
		if (this.opts.hiddenUntilFound.current) return this.item.isActive;
		return this.opts.forceMount.current || this.item.isActive;
	});
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.#isMountAnimationPrevented = this.item.isActive;
		this.attachment = attachRef(this.opts.ref, (v) => this.item.contentNode = v);
		watch.pre([() => this.opts.ref.current, () => this.opts.hiddenUntilFound.current], ([node, hiddenUntilFound]) => {
			if (!node || !hiddenUntilFound) return;
			const handleBeforeMatch = () => {
				if (this.item.isActive) return;
				requestAnimationFrame(() => {
					this.item.updateValue();
				});
			};
			return on(node, "beforematch", handleBeforeMatch);
		});
		watch([() => this.open, () => this.opts.ref.current], this.#updateDimensions);
	}
	static create(props) {
		return new AccordionContentState(props, AccordionItemContext.get());
	}
	#updateDimensions = ([_, node]) => {
		if (!node) return;
		afterTick(() => {
			const element = this.opts.ref.current;
			if (!element) return;
			this.#originalStyles ??= {
				transitionDuration: element.style.transitionDuration,
				animationName: element.style.animationName
			};
			element.style.transitionDuration = "0s";
			element.style.animationName = "none";
			const rect = element.getBoundingClientRect();
			this.#dimensions = {
				width: rect.width,
				height: rect.height
			};
			if (!this.#isMountAnimationPrevented && this.#originalStyles) {
				element.style.transitionDuration = this.#originalStyles.transitionDuration;
				element.style.animationName = this.#originalStyles.animationName;
			}
		});
	};
	get shouldRender() {
		return this.item.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.item.isActive }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		...getDataTransitionAttrs(this.item.contentPresence.transitionStatus),
		"data-disabled": boolToEmptyStrOrUndef(this.item.isDisabled),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.content]: "",
		style: {
			"--bits-accordion-content-height": `${this.#dimensions.height}px`,
			"--bits-accordion-content-width": `${this.#dimensions.width}px`
		},
		hidden: this.opts.hiddenUntilFound.current && !this.item.isActive ? "until-found" : void 0,
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
var AccordionHeaderState = class AccordionHeaderState {
	opts;
	item;
	attachment;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionHeaderState(props, AccordionItemContext.get());
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		"data-heading-level": this.opts.level.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.header]: "",
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
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion.svelte
function Accordion$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, children, child, type, value = void 0, ref = null, id = createId(uid), onValueChange = noop, loop = true, orientation = "vertical", $$slots, $$events, ...restProps } = $$props;
		function handleDefaultValue() {
			if (value !== void 0) return;
			value = type === "single" ? "" : [];
		}
		handleDefaultValue();
		watch.pre(() => value, () => {
			handleDefaultValue();
		});
		const rootState = AccordionRootState.create({
			type,
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			id: boxWith(() => id),
			disabled: boxWith(() => disabled),
			loop: boxWith(() => loop),
			orientation: boxWith(() => orientation),
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
			value,
			ref
		});
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-item.svelte
function Accordion_item$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const defaultId = createId(props_id($$renderer));
		let { id = defaultId, disabled = false, value = defaultId, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const itemState = AccordionItemState.create({
			value: boxWith(() => value),
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, itemState.props));
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-header.svelte
function Accordion_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), level = 2, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const headerState = AccordionHeaderState.create({
			id: boxWith(() => id),
			level: boxWith(() => level),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, headerState.props));
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-trigger.svelte
function Accordion_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, ref = null, id = createId(uid), tabindex = 0, children, child, $$slots, $$events, ...restProps } = $$props;
		const triggerState = AccordionTriggerState.create({
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			tabindex: boxWith(() => tabindex ?? 0),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({
				type: "button",
				...mergedProps()
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-content.svelte
function Accordion_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, ref = null, id = createId(uid), forceMount = false, children, hiddenUntilFound = false, $$slots, $$events, ...restProps } = $$props;
		const contentState = AccordionContentState.create({
			forceMount: boxWith(() => forceMount),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			hiddenUntilFound: boxWith(() => hiddenUntilFound)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...contentState.snippetProps
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
//#region src/lib/components/ui/accordion/accordion-content.svelte
function Accordion_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_content$1) {
				$$renderer.push("<!--[-->");
				Accordion_content$1($$renderer, spread_props([
					{
						"data-slot": "accordion-content",
						class: "text-sm data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden"
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
							$$renderer.push(`<div${attr_class(clsx$1(cn("pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className)))}>`);
							children?.($$renderer);
							$$renderer.push(`<!----></div>`);
						},
						$$slots: { default: true }
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
//#region src/lib/components/ui/accordion/accordion-item.svelte
function Accordion_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_item$1) {
				$$renderer.push("<!--[-->");
				Accordion_item$1($$renderer, spread_props([
					{
						"data-slot": "accordion-item",
						class: cn("not-last:border-b", className)
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
//#region src/lib/components/ui/accordion/accordion-trigger.svelte
function Accordion_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, level = 3, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_header) {
				$$renderer.push("<!--[-->");
				Accordion_header($$renderer, {
					level,
					class: "flex",
					children: ($$renderer) => {
						if (Accordion_trigger$1) {
							$$renderer.push("<!--[-->");
							Accordion_trigger$1($$renderer, spread_props([
								{
									"data-slot": "accordion-trigger",
									class: cn("gap-6 rounded-none py-4 text-left text-sm font-semibold hover:underline focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-3.5 **:data-[slot=accordion-trigger-icon]:text-muted-foreground group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", className)
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
										Chevron_down($$renderer, {
											"data-slot": "accordion-trigger-icon",
											class: "cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
										});
										$$renderer.push(`<!----> `);
										Chevron_up($$renderer, {
											"data-slot": "accordion-trigger-icon",
											class: "cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
										});
										$$renderer.push(`<!---->`);
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion.svelte
function Accordion($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion$1) {
				$$renderer.push("<!--[-->");
				Accordion$1($$renderer, spread_props([
					{
						"data-slot": "accordion",
						class: cn("cn-accordion flex w-full flex-col", className)
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
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
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
			value
		});
	});
}
//#endregion
//#region src/lib/components/faq-section.svelte
function Faq_section($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { faqs, title = "Frequently Asked Questions", eyebrow, subtitle, class: className = "atmosphere" } = $$props;
		if (faqs.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section${attr_class(`py-20 ${stringify(className)}`)}><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				title,
				eyebrow,
				subtitle
			});
			$$renderer.push(`<!----> <div class="border-gold/25 mx-auto mt-12 max-w-3xl border-t">`);
			Accordion($$renderer, {
				type: "single",
				class: "w-full",
				children: ($$renderer) => {
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(faqs);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let faq = each_array[$$index];
						Accordion_item($$renderer, {
							value: `item-${stringify(faq.id)}`,
							class: "border-gold/20",
							children: ($$renderer) => {
								Accordion_trigger($$renderer, {
									class: "font-heading text-left text-sm tracking-[0.08em] uppercase hover:text-gold-light",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(faq.question)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Accordion_content($$renderer, {
									class: "font-sans text-base text-muted-foreground",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(faq.answer)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!---->`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}

export { Faq_section as F };
//# sourceMappingURL=faq-section.js-BppcRo9e.js.map
