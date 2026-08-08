import { a as SvelteDate } from './index-server2.js-BPx0mTfA.js';

//#region src/lib/global.svelte.ts
var bgGradient = `bg-linear-to-r from-background  to-secondary`;
var selectItem = `hover:bg-gray-100 hover:shadow-md hover:scale-101 duration-300 transition-all ease-in-out dark:hover:bg-gray-900`;
var dropdownClass = `flex capitalize flex-row gap-2 ${selectItem}`;
function isMobile() {
	if (typeof window === "undefined") return false;
	return window.innerWidth <= 768;
}
var formatEthiopianDate = (date) => {
	if (!date) return "";
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	}).format(new SvelteDate(date));
};

export { bgGradient as b, dropdownClass as d, formatEthiopianDate as f, isMobile as i, selectItem as s };
//# sourceMappingURL=global.svelte.js-CK6uR_iK.js.map
