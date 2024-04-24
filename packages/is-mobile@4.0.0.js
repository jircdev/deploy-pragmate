System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-mobile","4.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/is-mobile/index.js
var require_is_mobile = __commonJS({
  "node_modules/is-mobile/index.js"(exports, module2) {
    "use strict";

    module2.exports = isMobile;
    module2.exports.isMobile = isMobile;
    module2.exports.default = isMobile;
    var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var notMobileRE = /CrOS/;
    var tabletRE = /android|ipad|playbook|silk/i;
    function isMobile(opts) {
      if (!opts) opts = {};
      let ua = opts.ua;
      if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;
      if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
        ua = ua.headers["user-agent"];
      }
      if (typeof ua !== "string") return false;
      let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
      if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
        result = true;
      }
      return result;
    }
  }
});

// .beyond/uimport/is-mobile.4.0.0.js
var is_mobile_4_0_0_exports = {};
__export(is_mobile_4_0_0_exports, {
  default: () => is_mobile_4_0_0_default
});
module.exports = __toCommonJS(is_mobile_4_0_0_exports);
__reExport(is_mobile_4_0_0_exports, __toESM(require_is_mobile()), module.exports);
var import_is_mobile = __toESM(require_is_mobile());
var is_mobile_4_0_0_default = import_is_mobile.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pcy1tb2JpbGUvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvaXMtbW9iaWxlLjQuMC4wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfaXNfbW9iaWxlIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9pcy1tb2JpbGUvaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImlzTW9iaWxlIiwiZGVmYXVsdCIsIm1vYmlsZVJFIiwibm90TW9iaWxlUkUiLCJ0YWJsZXRSRSIsIm9wdHMiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJyZXN1bHQiLCJ0ZXN0IiwidGFibGV0IiwiZmVhdHVyZURldGVjdCIsIm1heFRvdWNoUG9pbnRzIiwiaW5kZXhPZiIsImlzX21vYmlsZV80XzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJpc19tb2JpbGVfNF8wXzBfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X2lzX21vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUJBQUEsR0FBQUMsVUFBQTtFQUFBLGlDQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQTs7SUFFQUEsT0FBQSxDQUFPRCxPQUFBLEdBQVVFLFFBQUE7SUFDakJELE9BQUEsQ0FBT0QsT0FBQSxDQUFRRSxRQUFBLEdBQVdBLFFBQUE7SUFDMUJELE9BQUEsQ0FBT0QsT0FBQSxDQUFRRyxPQUFBLEdBQVVELFFBQUE7SUFFekIsSUFBTUUsUUFBQSxHQUFXO0lBQ2pCLElBQU1DLFdBQUEsR0FBYztJQUVwQixJQUFNQyxRQUFBLEdBQVc7SUFFakIsU0FBU0osU0FBVUssSUFBQSxFQUFNO01BQ3ZCLElBQUksQ0FBQ0EsSUFBQSxFQUFNQSxJQUFBLEdBQU8sQ0FBQztNQUNuQixJQUFJQyxFQUFBLEdBQUtELElBQUEsQ0FBS0MsRUFBQTtNQUNkLElBQUksQ0FBQ0EsRUFBQSxJQUFNLE9BQU9DLFNBQUEsS0FBYyxhQUFhRCxFQUFBLEdBQUtDLFNBQUEsQ0FBVUMsU0FBQTtNQUM1RCxJQUFJRixFQUFBLElBQU1BLEVBQUEsQ0FBR0csT0FBQSxJQUFXLE9BQU9ILEVBQUEsQ0FBR0csT0FBQSxDQUFRLGtCQUFrQixVQUFVO1FBQ3BFSCxFQUFBLEdBQUtBLEVBQUEsQ0FBR0csT0FBQSxDQUFRO01BQ2xCO01BQ0EsSUFBSSxPQUFPSCxFQUFBLEtBQU8sVUFBVSxPQUFPO01BRW5DLElBQUlJLE1BQUEsR0FDRFIsUUFBQSxDQUFTUyxJQUFBLENBQUtMLEVBQUUsS0FBSyxDQUFDSCxXQUFBLENBQVlRLElBQUEsQ0FBS0wsRUFBRSxLQUN6QyxDQUFDLENBQUNELElBQUEsQ0FBS08sTUFBQSxJQUFVUixRQUFBLENBQVNPLElBQUEsQ0FBS0wsRUFBRTtNQUVwQyxJQUNFLENBQUNJLE1BQUEsSUFDREwsSUFBQSxDQUFLTyxNQUFBLElBQ0xQLElBQUEsQ0FBS1EsYUFBQSxJQUNMTixTQUFBLElBQ0FBLFNBQUEsQ0FBVU8sY0FBQSxHQUFpQixLQUMzQlIsRUFBQSxDQUFHUyxPQUFBLENBQVEsV0FBVyxNQUFNLE1BQzVCVCxFQUFBLENBQUdTLE9BQUEsQ0FBUSxRQUFRLE1BQU0sSUFDekI7UUFDQUwsTUFBQSxHQUFTO01BQ1g7TUFFQSxPQUFPQSxNQUFBO0lBQ1Q7RUFBQTtBQUFBOzs7QUNyQ0EsSUFBQU0sdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBZixPQUFBLEVBQUFBLENBQUEsS0FBQWlCO0FBQUE7QUFBQUMsTUFBQSxDQUFBckIsT0FBQSxHQUFBc0IsWUFBQSxDQUFBSix1QkFBQTtBQUFBSyxVQUFBLENBQUFMLHVCQUFBLEVBQWNNLE9BQUEsQ0FBQTNCLGlCQUFBLEtBQWR3QixNQUFBLENBQUFyQixPQUFBO0FBRUEsSUFBQXlCLGdCQUFBLEdBQXFCRCxPQUFBLENBQUEzQixpQkFBQTtBQUNyQixJQUFPdUIsdUJBQUEsR0FBUUssZ0JBQUEsQ0FBQXRCLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9hcHAvb3V0In0=