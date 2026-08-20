import { a3 as stringify, a4 as escape_html } from './index-server.js-G-77DcSL.js';
import { C as Card, b as Card_header, a as Card_content, c as Card_title, d as Card_description } from './card.js-DuOddC8W.js';

//#region src/lib/formComponents/FormCard.svelte
function FormCard($$renderer, $$props) {
	let { title, children, description = "", className = "" } = $$props;
	if (Card) {
		$$renderer.push("<!--[-->");
		Card($$renderer, {
			class: `flex w-full flex-col gap-4 lg:w-2xl ${stringify(className)}`,
			children: ($$renderer) => {
				if (Card_header) {
					$$renderer.push("<!--[-->");
					Card_header($$renderer, {
						children: ($$renderer) => {
							if (Card_title) {
								$$renderer.push("<!--[-->");
								Card_title($$renderer, {
									class: "text-2xl",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(title)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Card_description) {
								$$renderer.push("<!--[-->");
								Card_description($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(description)}`);
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
				if (Card_content) {
					$$renderer.push("<!--[-->");
					Card_content($$renderer, {
						children: ($$renderer) => {
							children?.($$renderer);
							$$renderer.push(`<!---->`);
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

export { FormCard as F };
//# sourceMappingURL=FormCard.js-7Ia794lK.js.map
