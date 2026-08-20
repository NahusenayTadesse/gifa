import { Y as head, ac as store_get, af as unsubscribe_stores } from '../../../../../chunks/index-server.js-G-77DcSL.js';
import { I as InputComp } from '../../../../../chunks/InputComp.js-CxBPygYN.js';
import { S as Save } from '../../../../../chunks/save.js-BUv6pSbp.js';
import { B as Button } from '../../../../../chunks/button.js-CVHOzf19.js';
import { L as LoadingBtn } from '../../../../../chunks/LoadingBtn.js-BFpbCOtB.js';
import { d as superForm } from '../../../../../chunks/client2.js-ASiNbvEC.js';
import '../../../../../chunks/exports.js-D8tTp1_m.js';
import '../../../../../chunks/client.js-PQFg6ATt.js';
import { E as Errors } from '../../../../../chunks/Errors.js-DMvwSaSx.js';
import { t as toastOnError } from '../../../../../chunks/superform-defaults.js-BzqyareB.js';
import { F as FormCard } from '../../../../../chunks/FormCard.js-7Ia794lK.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/create-id.js-Pl6wo96w.js';
import '../../../../../chunks/toast-state.svelte.js-Cb1MUG65.js';
import '../../../../../chunks/Icon.js-DGpwHSC6.js';
import '../../../../../chunks/badge-check.js-Btq2tknP.js';
import '../../../../../chunks/minus.js-Ca5wYkhY.js';
import '../../../../../chunks/chevron-down.js-B9MsoqDg.js';
import '../../../../../chunks/chevron-right.js-CDa_K5Qm.js';
import '../../../../../chunks/chevrons-up-down.js-Br4EBbfD.js';
import '../../../../../chunks/circle-alert.js-xan0O7Rm.js';
import '../../../../../chunks/image.js-DhjcWPLt.js';
import '../../../../../chunks/loader.js-CJHbYKhD.js';
import '../../../../../chunks/command.js-Dz__iECm.js';
import '../../../../../chunks/input.js-CyJuxXk4.js';
import '../../../../../chunks/noop.js-BLOEitT-.js';
import '../../../../../chunks/is.js-LX4C4ueF.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/scroll-lock.js-B2UsFhK8.js';
import '../../../../../chunks/legacy-client.js-DyVQ66Cr.js';
import '../../../../../chunks/dialog-content.js-Bk31zkZ0.js';
import '../../../../../chunks/x.js-Bu-evnKT.js';
import '../../../../../chunks/popover.js-BLmiDDDH.js';
import '../../../../../chunks/popper-layer-force-mount.js-CoKhlOnV.js';
import '../../../../../chunks/safe-polygon.svelte.js-BKPwsnwE.js';
import '../../../../../chunks/label.js-THGsI54u.js';
import '../../../../../chunks/scroll-area.js-BbOAkcOe.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/SelectComp.js-CVTdP-yE.js';
import '../../../../../chunks/select.js-2ghzD58U.js';
import '../../../../../chunks/chevron-up.js-CYbksHm-.js';
import '../../../../../chunks/hidden-input.js-D1zU7m3S.js';
import '../../../../../chunks/checkbox2.js-CpHn3wjv.js';
import '../../../../../chunks/checkbox.js-C_O2KGSH.js';
import 'browser-image-compression';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/forms.js-BKs70KGI.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-MUgsUiLj.js';
import '../../../../../chunks/utils.js-D-kl_003.js';
import '../../../../../chunks/routing.js-NQIFfGdk.js';
import '../../../../../chunks/internal2.js-DHV9U4Ai.js';
import '../../../../../chunks/card.js-DuOddC8W.js';

//#region src/routes/dashboard/content/settings/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		const { form, errors, allErrors, delayed} = superForm(data.form, {
			resetForm: false,
			onError: toastOnError
		});
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
//# sourceMappingURL=_page.svelte.js-DYaNXqe7.js.map
