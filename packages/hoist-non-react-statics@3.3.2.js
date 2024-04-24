System.register(["react-is@16.13.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react-is","16.13.1"],["hoist-non-react-statics","3.3.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react-is@16.13.1', dep)],
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

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
    "use strict";

    var reactIs = require("react-is@16.13.1");
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  }
});

// .beyond/uimport/hoist-non-react-statics.3.3.2.js
var hoist_non_react_statics_3_3_2_exports = {};
__export(hoist_non_react_statics_3_3_2_exports, {
  default: () => hoist_non_react_statics_3_3_2_default
});
module.exports = __toCommonJS(hoist_non_react_statics_3_3_2_exports);
__reExport(hoist_non_react_statics_3_3_2_exports, __toESM(require_hoist_non_react_statics_cjs()), module.exports);
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var hoist_non_react_statics_3_3_2_default = import_hoist_non_react_statics.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy4zLjMuMi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX2hvaXN0X25vbl9yZWFjdF9zdGF0aWNzX2NqcyIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJleHBvcnRzIiwibW9kdWxlMiIsInJlYWN0SXMiLCJyZXF1aXJlIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImNhbGxlZSIsImFyZ3VtZW50cyIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsInJlbmRlciIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJGb3J3YXJkUmVmIiwiTWVtbyIsImdldFN0YXRpY3MiLCJjb21wb25lbnQiLCJpc01lbW8iLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50Iiwia2V5cyIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwiaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3NfM18zXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImhvaXN0X25vbl9yZWFjdF9zdGF0aWNzXzNfM18yX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9ob2lzdF9ub25fcmVhY3Rfc3RhdGljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUEsR0FBQUMsVUFBQTtFQUFBLDBFQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQTs7SUFFQSxJQUFJQyxPQUFBLEdBQVVDLE9BQUEsQ0FBUTtJQU10QixJQUFJQyxhQUFBLEdBQWdCO01BQ2xCQyxpQkFBQSxFQUFtQjtNQUNuQkMsV0FBQSxFQUFhO01BQ2JDLFlBQUEsRUFBYztNQUNkQyxZQUFBLEVBQWM7TUFDZEMsV0FBQSxFQUFhO01BQ2JDLGVBQUEsRUFBaUI7TUFDakJDLHdCQUFBLEVBQTBCO01BQzFCQyx3QkFBQSxFQUEwQjtNQUMxQkMsTUFBQSxFQUFRO01BQ1JDLFNBQUEsRUFBVztNQUNYQyxJQUFBLEVBQU07SUFDUjtJQUNBLElBQUlDLGFBQUEsR0FBZ0I7TUFDbEJDLElBQUEsRUFBTTtNQUNOQyxNQUFBLEVBQVE7TUFDUkMsU0FBQSxFQUFXO01BQ1hDLE1BQUEsRUFBUTtNQUNSQyxNQUFBLEVBQVE7TUFDUkMsU0FBQSxFQUFXO01BQ1hDLEtBQUEsRUFBTztJQUNUO0lBQ0EsSUFBSUMsbUJBQUEsR0FBc0I7TUFDeEIsWUFBWTtNQUNaQyxNQUFBLEVBQVE7TUFDUmpCLFlBQUEsRUFBYztNQUNkQyxXQUFBLEVBQWE7TUFDYkssU0FBQSxFQUFXO0lBQ2I7SUFDQSxJQUFJWSxZQUFBLEdBQWU7TUFDakIsWUFBWTtNQUNaQyxPQUFBLEVBQVM7TUFDVG5CLFlBQUEsRUFBYztNQUNkQyxXQUFBLEVBQWE7TUFDYkssU0FBQSxFQUFXO01BQ1hDLElBQUEsRUFBTTtJQUNSO0lBQ0EsSUFBSWEsWUFBQSxHQUFlLENBQUM7SUFDcEJBLFlBQUEsQ0FBYTFCLE9BQUEsQ0FBUTJCLFVBQUEsSUFBY0wsbUJBQUE7SUFDbkNJLFlBQUEsQ0FBYTFCLE9BQUEsQ0FBUTRCLElBQUEsSUFBUUosWUFBQTtJQUU3QixTQUFTSyxXQUFXQyxTQUFBLEVBQVc7TUFFN0IsSUFBSTlCLE9BQUEsQ0FBUStCLE1BQUEsQ0FBT0QsU0FBUyxHQUFHO1FBQzdCLE9BQU9OLFlBQUE7TUFDVDtNQUdBLE9BQU9FLFlBQUEsQ0FBYUksU0FBQSxDQUFVLGdCQUFnQjVCLGFBQUE7SUFDaEQ7SUFFQSxJQUFJOEIsY0FBQSxHQUFpQkMsTUFBQSxDQUFPRCxjQUFBO0lBQzVCLElBQUlFLG1CQUFBLEdBQXNCRCxNQUFBLENBQU9DLG1CQUFBO0lBQ2pDLElBQUlDLHFCQUFBLEdBQXdCRixNQUFBLENBQU9FLHFCQUFBO0lBQ25DLElBQUlDLHdCQUFBLEdBQTJCSCxNQUFBLENBQU9HLHdCQUFBO0lBQ3RDLElBQUlDLGNBQUEsR0FBaUJKLE1BQUEsQ0FBT0ksY0FBQTtJQUM1QixJQUFJQyxlQUFBLEdBQWtCTCxNQUFBLENBQU9oQixTQUFBO0lBQzdCLFNBQVNzQixxQkFBcUJDLGVBQUEsRUFBaUJDLGVBQUEsRUFBaUJDLFNBQUEsRUFBVztNQUN6RSxJQUFJLE9BQU9ELGVBQUEsS0FBb0IsVUFBVTtRQUV2QyxJQUFJSCxlQUFBLEVBQWlCO1VBQ25CLElBQUlLLGtCQUFBLEdBQXFCTixjQUFBLENBQWVJLGVBQWU7VUFFdkQsSUFBSUUsa0JBQUEsSUFBc0JBLGtCQUFBLEtBQXVCTCxlQUFBLEVBQWlCO1lBQ2hFQyxvQkFBQSxDQUFxQkMsZUFBQSxFQUFpQkcsa0JBQUEsRUFBb0JELFNBQVM7VUFDckU7UUFDRjtRQUVBLElBQUlFLElBQUEsR0FBT1YsbUJBQUEsQ0FBb0JPLGVBQWU7UUFFOUMsSUFBSU4scUJBQUEsRUFBdUI7VUFDekJTLElBQUEsR0FBT0EsSUFBQSxDQUFLQyxNQUFBLENBQU9WLHFCQUFBLENBQXNCTSxlQUFlLENBQUM7UUFDM0Q7UUFFQSxJQUFJSyxhQUFBLEdBQWdCakIsVUFBQSxDQUFXVyxlQUFlO1FBQzlDLElBQUlPLGFBQUEsR0FBZ0JsQixVQUFBLENBQVdZLGVBQWU7UUFFOUMsU0FBU08sQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUosSUFBQSxDQUFLNUIsTUFBQSxFQUFRLEVBQUVnQyxDQUFBLEVBQUc7VUFDcEMsSUFBSUMsR0FBQSxHQUFNTCxJQUFBLENBQUtJLENBQUE7VUFFZixJQUFJLENBQUNsQyxhQUFBLENBQWNtQyxHQUFBLEtBQVEsRUFBRVAsU0FBQSxJQUFhQSxTQUFBLENBQVVPLEdBQUEsTUFBUyxFQUFFRixhQUFBLElBQWlCQSxhQUFBLENBQWNFLEdBQUEsTUFBUyxFQUFFSCxhQUFBLElBQWlCQSxhQUFBLENBQWNHLEdBQUEsSUFBTztZQUM3SSxJQUFJQyxVQUFBLEdBQWFkLHdCQUFBLENBQXlCSyxlQUFBLEVBQWlCUSxHQUFHO1lBRTlELElBQUk7Y0FFRmpCLGNBQUEsQ0FBZVEsZUFBQSxFQUFpQlMsR0FBQSxFQUFLQyxVQUFVO1lBQ2pELFNBQVNDLENBQUEsRUFBUCxDQUFXO1VBQ2Y7UUFDRjtNQUNGO01BRUEsT0FBT1gsZUFBQTtJQUNUO0lBRUF6QyxPQUFBLENBQU9ELE9BQUEsR0FBVXlDLG9CQUFBO0VBQUE7QUFBQTs7O0FDdEdqQixJQUFBYSxxQ0FBQTtBQUFBQyxRQUFBLENBQUFELHFDQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQTFELE9BQUEsR0FBQTJELFlBQUEsQ0FBQUwscUNBQUE7QUFBQU0sVUFBQSxDQUFBTixxQ0FBQSxFQUFjTyxPQUFBLENBQUFoRSxtQ0FBQSxLQUFkNkQsTUFBQSxDQUFBMUQsT0FBQTtBQUVBLElBQUE4RCw4QkFBQSxHQUFxQkQsT0FBQSxDQUFBaEUsbUNBQUE7QUFDckIsSUFBTzRELHFDQUFBLEdBQVFLLDhCQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8uLi8uLi9wdWJsaWMvcHJhZ21hdGUtdWkvZG9jcy9vdXQifQ==