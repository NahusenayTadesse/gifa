import { S as Sun, a as Moon, s as setMode, r as resetMode } from './sun.js-D_GqxHtv.js';
import { b as buttonVariants } from './button.js-CVHOzf19.js';
import { D as Dropdown_menu, a as Dropdown_menu_trigger, b as Dropdown_menu_content, c as Dropdown_menu_item } from './dropdown-menu.js-Ybaq1Jon.js';

//#region src/lib/components/DarkMode.svelte
function DarkMode($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		if (Dropdown_menu) {
			$$renderer.push("<!--[-->");
			Dropdown_menu($$renderer, {
				children: ($$renderer) => {
					if (Dropdown_menu_trigger) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_trigger($$renderer, {
							class: buttonVariants({
								variant: "outline",
								size: "icon"
							}),
							children: ($$renderer) => {
								Sun($$renderer, { class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" });
								$$renderer.push(`<!----> `);
								Moon($$renderer, { class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100" });
								$$renderer.push(`<!----> <span class="sr-only">Toggle theme</span>`);
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
							align: "end",
							children: ($$renderer) => {
								if (Dropdown_menu_item) {
									$$renderer.push("<!--[-->");
									Dropdown_menu_item($$renderer, {
										onclick: () => setMode("light"),
										children: ($$renderer) => {
											$$renderer.push(`<!---->Light`);
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
										onclick: () => setMode("dark"),
										children: ($$renderer) => {
											$$renderer.push(`<!---->Dark`);
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
										onclick: () => resetMode(),
										children: ($$renderer) => {
											$$renderer.push(`<!---->System`);
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

export { DarkMode as D };
//# sourceMappingURL=DarkMode.js-DbTppBP8.js.map
