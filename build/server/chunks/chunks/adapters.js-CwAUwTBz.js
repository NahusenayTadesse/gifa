import { b as __toESM, a as __commonJSMin } from './rolldown-runtime.js-B3lhT2nr.js';
import { c as createAdapter } from './client2.js-ASiNbvEC.js';
import { t as toJSONSchema, b as safeParseAsync, c as config } from './auth.js-CCGW_diT.js';

//#region node_modules/.pnpm/memoize-weak@1.0.2/node_modules/memoize-weak/lib/memoize.js
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function isPrimitive(value) {
		return typeof value !== "object" && typeof value !== "function" || value === null;
	}
	function MapTree() {
		this.childBranches = /* @__PURE__ */ new WeakMap();
		this.primitiveKeys = /* @__PURE__ */ new Map();
		this.hasValue = false;
		this.value = void 0;
	}
	MapTree.prototype.has = function has(key) {
		var keyObject = isPrimitive(key) ? this.primitiveKeys.get(key) : key;
		return keyObject ? this.childBranches.has(keyObject) : false;
	};
	MapTree.prototype.get = function get(key) {
		var keyObject = isPrimitive(key) ? this.primitiveKeys.get(key) : key;
		return keyObject ? this.childBranches.get(keyObject) : void 0;
	};
	MapTree.prototype.resolveBranch = function resolveBranch(key) {
		if (this.has(key)) return this.get(key);
		var newBranch = new MapTree();
		var keyObject = this.createKey(key);
		this.childBranches.set(keyObject, newBranch);
		return newBranch;
	};
	MapTree.prototype.setValue = function setValue(value) {
		this.hasValue = true;
		return this.value = value;
	};
	MapTree.prototype.createKey = function createKey(key) {
		if (isPrimitive(key)) {
			var keyObject = {};
			this.primitiveKeys.set(key, keyObject);
			return keyObject;
		}
		return key;
	};
	MapTree.prototype.clear = function clear() {
		if (arguments.length === 0) {
			this.childBranches = /* @__PURE__ */ new WeakMap();
			this.primitiveKeys.clear();
			this.hasValue = false;
			this.value = void 0;
		} else if (arguments.length === 1) {
			var key = arguments[0];
			if (isPrimitive(key)) {
				var keyObject = this.primitiveKeys.get(key);
				if (keyObject) {
					this.childBranches.delete(keyObject);
					this.primitiveKeys.delete(key);
				}
			} else this.childBranches.delete(key);
		} else {
			var childKey = arguments[0];
			if (this.has(childKey)) {
				var childBranch = this.get(childKey);
				childBranch.clear.apply(childBranch, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	module.exports = function memoize(fn) {
		var argsTree = new MapTree();
		function memoized() {
			var args = Array.prototype.slice.call(arguments);
			var argNode = args.reduce(function getBranch(parentBranch, arg) {
				return parentBranch.resolveBranch(arg);
			}, argsTree);
			if (argNode.hasValue) return argNode.value;
			var value = fn.apply(null, args);
			return argNode.setValue(value);
		}
		memoized.clear = argsTree.clear.bind(argsTree);
		return memoized;
	};
}));
var memoize = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_memoize();
})))())).default;
/**
* Joi Validation Object
* @typedef {object} JoiValidation
*/
/**
* Transformation Function - applied just before `convert()` returns and called as `function(object):object`
* @typedef {function} TransformFunction
*/
/**
* JSON Schema Object
* @typedef {object} JSONSchema
*/
//#endregion
//#region node_modules/.pnpm/typebox@1.3.9/node_modules/typebox/build/system/hashing/hash.mjs
var ByteMarker;
(function(ByteMarker) {
	ByteMarker[ByteMarker["Array"] = 0] = "Array";
	ByteMarker[ByteMarker["BigInt"] = 1] = "BigInt";
	ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
	ByteMarker[ByteMarker["Date"] = 3] = "Date";
	ByteMarker[ByteMarker["Constructor"] = 4] = "Constructor";
	ByteMarker[ByteMarker["Function"] = 5] = "Function";
	ByteMarker[ByteMarker["Null"] = 6] = "Null";
	ByteMarker[ByteMarker["Number"] = 7] = "Number";
	ByteMarker[ByteMarker["Object"] = 8] = "Object";
	ByteMarker[ByteMarker["RegExp"] = 9] = "RegExp";
	ByteMarker[ByteMarker["String"] = 10] = "String";
	ByteMarker[ByteMarker["Symbol"] = 11] = "Symbol";
	ByteMarker[ByteMarker["TypeArray"] = 12] = "TypeArray";
	ByteMarker[ByteMarker["Undefined"] = 13] = "Undefined";
})(ByteMarker || (ByteMarker = {}));
Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = /* @__PURE__ */ new Float64Array(1);
new DataView(F64.buffer);
new Uint8Array(F64.buffer);
new TextEncoder();
//#endregion
//#region node_modules/.pnpm/typebox@1.3.9/node_modules/typebox/build/type/script/token/internal/char.mjs
function Range(start, end) {
	return Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(start + i));
}
[...Range(97, 122), ...Range(65, 90)];
["0", ...Range(49, 57)];
//#endregion
//#region node_modules/.pnpm/sveltekit-superforms@2.30.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugin-svelte@7.2.0_sve_bdc7fd77fbc23b3e92570019ef3acb20/node_modules/sveltekit-superforms/dist/adapters/zod4.js
var defaultJSONSchemaOptions = {
	unrepresentable: "any",
	override: (ctx) => {
		const def = ctx.zodSchema._zod.def;
		if (def.type === "date") {
			ctx.jsonSchema.type = "integer";
			ctx.jsonSchema.format = "unix-time";
		} else if (def.type === "bigint") {
			ctx.jsonSchema.type = "string";
			ctx.jsonSchema.format = "bigint";
		} else if (def.type === "pipe") {
			const pipeDef = def;
			const inSchema = pipeDef.in;
			const outSchema = pipeDef.out;
			if (inSchema?._zod?.def.type === "string") {
				let currentSchema = outSchema;
				let isStringBool = false;
				while (currentSchema?._zod?.def) {
					const currentDef = currentSchema._zod.def;
					if (currentDef.type === "boolean") {
						isStringBool = true;
						break;
					} else if (currentDef.type === "transform") break;
					else if (currentDef.type === "pipe") currentSchema = currentDef.out;
					else break;
				}
				if (!isStringBool && outSchema?._zod?.def.type === "boolean") isStringBool = true;
				if (isStringBool) {
					ctx.jsonSchema.type = "string";
					ctx.jsonSchema.format = "stringbool";
				}
			}
		} else if (def.type === "set") {
			ctx.jsonSchema.type = "array";
			ctx.jsonSchema.uniqueItems = true;
			if ("default" in ctx.jsonSchema && ctx.jsonSchema.default instanceof Set) ctx.jsonSchema.default = Array.from(ctx.jsonSchema.default);
		} else if (def.type === "map") {
			ctx.jsonSchema.type = "array";
			ctx.jsonSchema.format = "map";
			if ("default" in ctx.jsonSchema && ctx.jsonSchema.default instanceof Map) ctx.jsonSchema.default = Array.from(ctx.jsonSchema.default);
		} else if (def.type === "default") {
			const innerDef = def.innerType._zod.def;
			if (innerDef.type === "set" && def.defaultValue instanceof Set) {
				ctx.jsonSchema.type = "array";
				ctx.jsonSchema.uniqueItems = true;
				ctx.jsonSchema.default = Array.from(def.defaultValue);
			} else if (innerDef.type === "map" && def.defaultValue instanceof Map) {
				ctx.jsonSchema.type = "array";
				ctx.jsonSchema.format = "map";
				ctx.jsonSchema.default = Array.from(def.defaultValue);
			}
		}
	}
};
var zodToJSONSchema = /* @__NO_SIDE_EFFECTS__ */ (schema, options) => {
	return toJSONSchema(schema, {
		...defaultJSONSchemaOptions,
		...options
	});
};
async function validate(schema, data, error) {
	if (error === void 0) {
		const zConfig = config();
		error = zConfig.customError ?? zConfig.localeError;
	}
	const result = await safeParseAsync(schema, data, { error });
	if (result.success) return {
		data: result.data,
		success: true
	};
	return {
		issues: result.error.issues.map(({ message, path }) => ({
			message,
			path
		})),
		success: false
	};
}
function _zod4(schema, options) {
	return /* @__PURE__ */ createAdapter({
		superFormValidationLibrary: "zod4",
		validate: async (data) => {
			return validate(schema, data, options?.error);
		},
		jsonSchema: options?.jsonSchema ?? /* @__PURE__ */ zodToJSONSchema(schema, options?.config),
		defaults: options?.defaults
	});
}
function _zod4Client(schema, options) {
	return {
		superFormValidationLibrary: "zod4",
		validate: async (data) => validate(schema, data, options?.error)
	};
}
var zod = /* @__PURE__ */ memoize(_zod4);
var zodClient = /* @__PURE__ */ memoize(_zod4Client);

export { zodClient as a, zod as z };
//# sourceMappingURL=adapters.js-CwAUwTBz.js.map
