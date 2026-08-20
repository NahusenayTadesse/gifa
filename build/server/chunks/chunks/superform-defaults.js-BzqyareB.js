import { a as toast } from './toast-state.svelte.js-Cb1MUG65.js';

//#region src/lib/superform-defaults.ts
/**
* Shared `onError` for every `superForm()` call. Superforms' own default for
* an error result (a network drop, a genuine 500, anything not raised via
* our own `message(form, { type: 'error' }, ...)`) is to rethrow it — the
* user's left staring at a stuck submit button with no explanation. This
* shows a toast instead, everywhere, without having to write it per form.
*/
function toastOnError() {
	toast.error("Something went wrong. Please try again.");
}

export { toastOnError as t };
//# sourceMappingURL=superform-defaults.js-BzqyareB.js.map
