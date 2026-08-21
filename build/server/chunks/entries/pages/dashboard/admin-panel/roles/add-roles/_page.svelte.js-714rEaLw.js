import { Y as head, a0 as bind_props, ac as store_get, af as unsubscribe_stores } from '../../../../../../chunks/index-server.js-G-77DcSL.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-D9ih9EPq.js';
import { P as Plus } from '../../../../../../chunks/plus.js-Dpb43_E6.js';
import { B as Button } from '../../../../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { d as superForm } from '../../../../../../chunks/client2.js-ccjA_ZCz.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-Da1EWjvb.js';
import { c as createRoleSchema } from '../../../../../../chunks/schema2.js-CcZfCp-P.js';
import { F as FormCard } from '../../../../../../chunks/FormCard.js-7Ia794lK.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../../chunks/client.js-BE73K9-j.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../../chunks/internal2.js-BgJqRNF-.js';
import '../../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../../../../chunks/forms.js-D03WpUL4.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-DhsAxxq-.js';
import '../../../../../../chunks/auth.js-CzaJ0OJC.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-CPhQsSSC.js';
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
import '../../../../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';
import '../../../../../../chunks/card.js-DuOddC8W.js';

//#region src/routes/dashboard/admin-panel/roles/add-roles/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, delayed, capture, restore, allErrors } = superForm(data.form, {
			dataType: "json",
			validators: zodClient(createRoleSchema),
			onError: toastOnError
		});
		const snapshot = {
			capture,
			restore
		};
		head("1ckc1g2", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Add New Role</title>`);
			});
		});
		FormCard($$renderer, {
			title: "Add New Role",
			children: ($$renderer) => {
				$$renderer.push(`<form action="?/add" id="main" class="flex flex-col gap-4" method="POST">`);
				Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					label: "Name",
					name: "name",
					type: "text",
					form,
					errors,
					placeholder: "Enter Role Name"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					label: "Description",
					name: "description",
					type: "textarea",
					form,
					errors,
					placeholder: "Enter Role Description"
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					class: "mt-4",
					form: "main",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Adding Role" });
						} else {
							$$renderer.push("<!--[-1-->");
							Plus($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Add Role`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-714rEaLw.js.map
