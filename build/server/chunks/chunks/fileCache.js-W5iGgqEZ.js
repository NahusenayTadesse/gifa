import fs__default from 'node:fs';

//#region src/lib/server/fileCache.ts
var STAT_CACHE_MAX = 500;
var STAT_CACHE_TTL = 1e4;
var statCache = /* @__PURE__ */ new Map();
function getCachedStats(filePath) {
	const now = Date.now();
	const hit = statCache.get(filePath);
	if (hit && now - hit.ts < STAT_CACHE_TTL) return hit.stats;
	let stats;
	try {
		stats = fs__default.statSync(filePath);
	} catch {
		statCache.delete(filePath);
		return null;
	}
	if (statCache.size >= STAT_CACHE_MAX) statCache.delete(statCache.keys().next().value);
	statCache.set(filePath, {
		stats,
		ts: now
	});
	return stats;
}
/**
* Call this after uploading or deleting a file to evict the stale cache entry.
* @param absoluteFilePath — the fully resolved path to the file
*/
function invalidateStatCache(absoluteFilePath) {
	statCache.delete(absoluteFilePath);
}

export { getCachedStats as g, invalidateStatCache as i };
//# sourceMappingURL=fileCache.js-W5iGgqEZ.js.map
