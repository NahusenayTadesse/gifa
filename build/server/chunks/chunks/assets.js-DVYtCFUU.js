//#region src/lib/assets.ts
/**
* Resolves a stored asset reference to its URL.
*
* Every database-backed image is a bare filename served by the `/files`
* endpoint, so uploading a replacement through the dashboard is all it takes to
* change what the site shows. Absolute URLs pass through for externally hosted
* assets such as partner logos.
*/
var assetUrl = (path) => {
	if (!path) return "";
	return path.startsWith("http") ? path : `/files/${path}`;
};

export { assetUrl as a };
//# sourceMappingURL=assets.js-DVYtCFUU.js.map
