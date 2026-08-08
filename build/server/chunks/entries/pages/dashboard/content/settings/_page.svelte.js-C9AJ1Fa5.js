import { U as head, ac as store_get, af as unsubscribe_stores } from '../../../../../chunks/index-server.js-CFhxFuri.js';
import { I as InputComp } from '../../../../../chunks/InputComp.js-BqojA_86.js';
import { S as Save } from '../../../../../chunks/save.js-DlyDISKU.js';
import { B as Button } from '../../../../../chunks/button.js-tGj5Lmrq.js';
import { L as LoadingBtn } from '../../../../../chunks/LoadingBtn.js-CAww63Xj.js';
import { d as superForm } from '../../../../../chunks/client2.js-iA4z0kVm.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-C4xvWha9.js';
import { E as Errors } from '../../../../../chunks/Errors.js-CCE9GXl8.js';
import { F as FormCard } from '../../../../../chunks/FormCard.js-Bo1RPpWA.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/create-id.js-BocO_oFE.js';
import '../../../../../chunks/Icon.js-BJJlMSR3.js';
import '../../../../../chunks/badge-check.js-DyQIjrrk.js';
import '../../../../../chunks/minus.js-CdYgHBTQ.js';
import '../../../../../chunks/chevron-down.js-DwTHaDWI.js';
import '../../../../../chunks/chevron-right.js-CoPqOygK.js';
import '../../../../../chunks/chevrons-up-down.js-C3kjs0G8.js';
import '../../../../../chunks/circle-alert.js-CajxpVk3.js';
import '../../../../../chunks/image.js-D8rxvsAA.js';
import '../../../../../chunks/loader.js-CAX0l8lx.js';
import '../../../../../chunks/command.js-CgGlfGDc.js';
import '../../../../../chunks/input.js-BuyvpeQU.js';
import '../../../../../chunks/noop.js-vWrzhrAx.js';
import '../../../../../chunks/is.js-D78pHSN-.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/scroll-lock.js-CnssTBHz.js';
import '../../../../../chunks/legacy-client.js-D1o7JnSw.js';
import '../../../../../chunks/dialog-content.js-CMqDFcw2.js';
import '../../../../../chunks/x.js-Ban1Odu2.js';
import '../../../../../chunks/popover.js-HGTt93TX.js';
import '../../../../../chunks/popper-layer-force-mount.js-DfYxVoOz.js';
import '../../../../../chunks/safe-polygon.svelte.js-DH4wuF2L.js';
import '../../../../../chunks/label.js-DJ_DCSg-.js';
import '../../../../../chunks/scroll-area.js-ZxpPU0l1.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/SelectComp.js-DwcVRGdr.js';
import '../../../../../chunks/select.js-Dy4k-kF2.js';
import '../../../../../chunks/chevron-up.js-DW_r37Xs.js';
import '../../../../../chunks/hidden-input.js-BoSau6pe.js';
import '../../../../../chunks/checkbox2.js-ZirzxI5t.js';
import '../../../../../chunks/checkbox.js-Bl0jTWJn.js';
import 'browser-image-compression';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-BnJirwUv.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-Dcs4_6jL.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-DWqFh_5z.js';
import '../../../../../chunks/card.js-CBH4NVhi.js';

//#region src/routes/dashboard/content/settings/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, allErrors, delayed} = superForm(data.form, { resetForm: false });
		head("1p59j5v", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Site Settings | Dashboard</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div><h1 class="font-heading text-2xl font-bold">Site Settings</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">Contact details, socials and the homepage hero copy. These appear in the footer, the
			Contact page and the top of the Home page.</p></div> `);
		FormCard($$renderer, {
			title: "Contact details",
			description: "Changes go live as soon as you save.",
			children: ($$renderer) => {
				$$renderer.push(`<form method="post" action="?/save" id="settings" class="flex flex-col gap-2">`);
				Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Phone",
					name: "phone",
					type: "text",
					placeholder: "07950 786579"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Email",
					name: "email",
					type: "text",
					placeholder: "gifalounge@gmail.com"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Address",
					name: "address",
					type: "text",
					placeholder: "513 Seven Sisters Road, London N15 6EP"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Instagram URL",
					name: "instagramUrl",
					type: "text"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Facebook URL",
					name: "facebookUrl",
					type: "text"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Just Eat delivery URL",
					name: "justEatUrl",
					type: "text"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Delivery available",
					name: "deliveryEnabled",
					type: "checkboxSingle",
					placeholder: "Show delivery links on the site"
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Homepage hero heading",
					name: "heroHeading",
					type: "text",
					placeholder: "Eritrean & Ethiopian, served the way it's meant to be — together."
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Homepage hero subheading",
					name: "heroSub",
					type: "textarea",
					rows: 3
				});
				$$renderer.push(`<!----> `);
				InputComp($$renderer, {
					form,
					errors,
					label: "Footer paragraph",
					name: "footerBlurb",
					type: "textarea",
					rows: 4
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					type: "submit",
					form: "settings",
					class: "mt-4",
					children: ($$renderer) => {
						if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
							$$renderer.push("<!--[0-->");
							LoadingBtn($$renderer, { name: "Saving" });
						} else {
							$$renderer.push("<!--[-1-->");
							Save($$renderer, { class: "size-4" });
							$$renderer.push(`<!----> Save Settings`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></form>`);
			}});
		$$renderer.push(`<!----></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-C9AJ1Fa5.js.map
