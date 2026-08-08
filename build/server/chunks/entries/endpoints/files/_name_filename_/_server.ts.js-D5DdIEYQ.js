import { b as private_env } from '../../../../chunks/shared-server.js-D6HhUxAQ.js';
import { g as getCachedStats } from '../../../../chunks/fileCache.js-W5iGgqEZ.js';
import fs__default from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';

//#region src/routes/files/[name=filename]/+server.ts
var FILES_DIR = path.resolve(private_env.FILES_DIR ?? ".tempFiles");
if (!fs__default.existsSync(FILES_DIR)) fs__default.mkdirSync(FILES_DIR, { recursive: true });
var CACHE_TTL = {
	long: "public, max-age=86400",
	short: "public, max-age=600",
	none: "no-store"
};
function cacheControl(ext) {
	if ([
		"webp",
		"png",
		"jpg",
		"jpeg",
		"avif",
		"mp4",
		"webm",
		"mp3"
	].includes(ext)) return CACHE_TTL.long;
	if (["pdf", "txt"].includes(ext)) return CACHE_TTL.short;
	return CACHE_TTL.none;
}
function parseRange(header, size) {
	const match = header.match(/^bytes=(\d*)-(\d*)$/);
	if (!match) return null;
	let start = match[1] === "" ? NaN : Number(match[1]);
	let end = match[2] === "" ? NaN : Number(match[2]);
	if (isNaN(start) && isNaN(end)) return null;
	if (isNaN(start)) {
		start = Math.max(0, size - end);
		end = size - 1;
	} else if (isNaN(end)) end = size - 1;
	if (start > end || end >= size) return null;
	return {
		start,
		end
	};
}
var mimes = {
	txt: "text/plain",
	pdf: "application/pdf",
	webp: "image/webp",
	png: "image/png",
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
	avif: "image/avif",
	mp3: "audio/mpeg",
	webm: "video/webm",
	mp4: "video/mp4",
	lookup(s) {
		const ext = s.toLowerCase().split(".").at(-1);
		const type = ext ? this[ext] : void 0;
		return typeof type === "string" ? type : "application/octet-stream";
	}
};
async function GET({ params, request }) {
	const file_path = path.resolve(FILES_DIR, params.name);
	const relative = path.relative(FILES_DIR, file_path);
	if (relative.startsWith("..") || path.isAbsolute(relative)) return new Response("forbidden", { status: 403 });
	const stats = getCachedStats(file_path);
	if (!stats) return new Response("not found", { status: 404 });
	const ext = params.name.toLowerCase().split(".").at(-1) ?? "";
	const mimeType = mimes.lookup(params.name);
	const etag = `W/"${stats.size}-${stats.mtime.getTime()}"`;
	const lastMod = stats.mtime.toUTCString();
	if (request.headers.get("if-none-match") === etag) return new Response(null, { status: 304 });
	const ifModifiedSince = request.headers.get("if-modified-since");
	if (ifModifiedSince && new Date(ifModifiedSince) >= stats.mtime) return new Response(null, { status: 304 });
	const rangeHeader = request.headers.get("range");
	if (rangeHeader) {
		const range = parseRange(rangeHeader, stats.size);
		if (!range) return new Response("range not satisfiable", {
			status: 416,
			headers: { "Content-Range": `bytes */${stats.size}` }
		});
		const { start, end } = range;
		const stream = Readable.toWeb(fs__default.createReadStream(file_path, {
			start,
			end
		}), { strategy: new CountQueuingStrategy({ highWaterMark: 100 }) });
		return new Response(stream, {
			status: 206,
			headers: {
				"Content-Range": `bytes ${start}-${end}/${stats.size}`,
				"Content-Length": String(end - start + 1),
				"Content-Type": mimeType,
				"Accept-Ranges": "bytes",
				"Cache-Control": cacheControl(ext),
				"Last-Modified": lastMod,
				ETag: etag
			}
		});
	}
	const stream = Readable.toWeb(fs__default.createReadStream(file_path), { strategy: new CountQueuingStrategy({ highWaterMark: 100 }) });
	return new Response(stream, { headers: {
		"Content-Type": mimeType,
		"Content-Length": String(stats.size),
		"Cache-Control": cacheControl(ext),
		"Last-Modified": lastMod,
		"Accept-Ranges": "bytes",
		ETag: etag
	} });
}

export { GET };
//# sourceMappingURL=_server.ts.js-D5DdIEYQ.js.map
