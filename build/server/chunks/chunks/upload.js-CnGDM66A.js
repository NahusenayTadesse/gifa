import { b as private_env } from './shared-server.js-D6HhUxAQ.js';
import { i as invalidateStatCache } from './fileCache.js-W5iGgqEZ.js';
import fs__default from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { randomUUID } from 'crypto';

//#region src/lib/server/upload.ts
var FILES_DIR = private_env.FILES_DIR ?? ".tempFiles";
if (!fs__default.existsSync(FILES_DIR)) fs__default.mkdirSync(FILES_DIR, { recursive: true });
/**
* Save an uploaded file and return the stored file name.
* @param file  File object coming from formData (has .name, .stream(), .type, etc.)
* @returns     The generated file name (with extension) that was written to disk
* @throws      If the write fails
*/
async function saveUploadedFile(file) {
	const ext = path.extname(file.name);
	const fileName = `${randomUUID()}${ext}`;
	const target = path.join(FILES_DIR, fileName);
	const webStream = file.stream();
	await pipeline(Readable.fromWeb(webStream), fs__default.createWriteStream(target));
	invalidateStatCache(path.resolve(FILES_DIR, target));
	return fileName;
}

export { saveUploadedFile as s };
//# sourceMappingURL=upload.js-CnGDM66A.js.map
