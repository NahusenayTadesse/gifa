import { U as head, a0 as bind_props, ac as store_get, af as unsubscribe_stores } from '../../../../../../chunks/index-server.js-CFhxFuri.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-BScGU3JW.js';
import { P as Plus } from '../../../../../../chunks/plus.js-Dh6l4MVl.js';
import { B as Button } from '../../../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { d as superForm } from '../../../../../../chunks/client2.js-fgFBQkZh.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-CCE9GXl8.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-Dr2Ub319.js';
import { C as Card, b as Card_header, c as Card_title, a as Card_content } from '../../../../../../chunks/card.js-CBH4NVhi.js';
import { a as add } from '../../../../../../chunks/schema4.js-Bd2f--6J.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../../../chunks/popover.js-HGTt93TX.js';
import '../../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-DEzvbNS6.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../../chunks/internal2.js-CD2yIDC5.js';
import '../../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../../../chunks/forms.js-DNL_Auze.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-BEW9-n6n.js';
import '../../../../../../chunks/auth.js-Dz0kDMeZ.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-DqGthl3g.js';
import 'node:buffer';
import 'url';
import 'net';
import 'tls';
import 'timers';
import 'events';
import 'stream';
import 'buffer';
import 'string_decoder';
import 'process';
import 'crypto';
import 'zlib';
import 'util';
import 'node:events';
import '../../../../../../chunks/dist4.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';

//#region src/routes/dashboard/admin-panel/users/add-users/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, delayed, allErrors, capture, restore} = superForm(data.form, {
			taintedMessage: () => {
				return new Promise((resolve) => {
					resolve(window.confirm("Do you want to leave?\nChanges you made may not be saved."));
				});
			},
			validators: zodClient(add)
		});
		const snapshot = {
			capture,
			restore
		};
		head("1msq1ji", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Add User</title>`);
			});
		});
		if (Card) {
			$$renderer.push("<!--[-->");
			Card($$renderer, {
				class: "flex w-full flex-col gap-4 lg:w-lg",
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
											$$renderer.push(`<!---->Add New User`);
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
								$$renderer.push(`<form action="?/add" id="main" class="flex flex-col gap-4" method="post">`);
								Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Name",
									form,
									errors,
									type: "text",
									name: "name",
									placeholder: "Enter the name of new user",
									required: true
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Email",
									form,
									type: "email",
									errors,
									name: "email",
									placeholder: "Enter the email of new admin user",
									required: true
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									label: "Password",
									form,
									errors,
									name: "password",
									placeholder: "Enter password",
									required: true,
									type: "password"
								});
								$$renderer.push(`<!----> `);
								InputComp($$renderer, {
									form,
									errors,
									name: "role",
									type: "select",
									label: "Role",
									items: data?.allRoles,
									required: true
								});
								$$renderer.push(`<!----> `);
								Button($$renderer, {
									type: "submit",
									class: "mt-4",
									form: "main",
									children: ($$renderer) => {
										if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
											$$renderer.push("<!--[0-->");
											LoadingBtn($$renderer, { name: "Adding New User" });
										} else {
											$$renderer.push("<!--[-1-->");
											Plus($$renderer, { class: "h-4 w-4" });
											$$renderer.push(`<!----> Add User`);
										}
										$$renderer.push(`<!--]-->`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----></form>`);
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
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-D7ATzAeE.js.map
