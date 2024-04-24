System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@beyond-js/reactive/model.1.1.4.js
var model_1_1_4_exports = {};
__export(model_1_1_4_exports, {
  ReactiveModel: () => ReactiveModel,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_1_4_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.4/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3956740744,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      schema;
      #isReactive = true;
      get isReactive() {
        return this.#isReactive;
      }
      fetching;
      fetched = false;
      processing = false;
      ready = false;
      processed = false;
      localdb = false;
      properties;
      loaded = false;
      constructor() {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
      }
      reactiveProps(props) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `__${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get() {
            if (!this.hasOwnProperty(privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set(newVal) {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change") => this.trigger(event);
      set(properties) {
        let props = Object.keys(properties);
        let updated = false;
        try {
          Object.keys(properties).forEach(prop => {
            const sameObject = typeof properties[prop] === "object" && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
            if (this[prop] === properties[prop] || sameObject) return;
            const descriptor = Object.getOwnPropertyDescriptor(this, prop);
            if (descriptor?.set) {
              return;
            }
            this[prop] = properties[prop];
            updated = true;
          });
        } catch (e) {
          throw new Error(`Error setting properties: ${e}`);
        } finally {
          if (updated) this.triggerEvent();
        }
      }
      getProperties() {
        const props = {};
        const properties = this.properties || this.skeleton;
        properties.forEach(property => {
          if (typeof property === "object") {
            if (!property.hasOwnProperty("name")) return;
            const collection = property;
            if (collection.type === "collection") {
              props[property.name] = this[property.name].items.map(item => item.getProperties());
              return;
            }
            props[property.name] = this[property.name];
          }
          let name = property;
          props[name] = this[name];
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./property", {
  hash: 3124326805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defineReactiveProp = defineReactiveProp;
    exports.reactiveProps = reactiveProps2;
    function _defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          if (newVal === target[privatePropKey]) return;
          target[privatePropKey] = newVal;
          target.triggerEvent();
        },
        enumerable: true,
        configurable: true
      });
    }
    function reactiveProps2(props) {
      return function (target) {
        const targetProto = "prototype" in target ? target.prototype : target;
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          defineReactiveProp(targetProto, propKey, initialValue);
        }
      };
    }
    function defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          target.setReactiveProp(propKey, newVal);
        },
        enumerable: true,
        configurable: true
      });
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./property",
  "from": "reactiveProps",
  "name": "reactiveProps"
}];
var ReactiveModel, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "reactiveProps") && (reactiveProps = require2 ? require2("./property").reactiveProps : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMS4xLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcHJvcGVydHkudHMiXSwibmFtZXMiOlsibW9kZWxfMV8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUmVhY3RpdmVNb2RlbCIsIl9fYmV5b25kX3BrZyIsImhtciIsInJlYWN0aXZlUHJvcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2V2ZW50cyIsInJlcXVpcmUyIiwiUmVhY3RpdmVNb2RlbDIiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldCIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsInRyaWdnZXIiLCJrZXlzIiwidXBkYXRlZCIsImZvckVhY2giLCJwcm9wIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJnZXRQcm9wZXJ0aWVzIiwic2tlbGV0b24iLCJwcm9wZXJ0eSIsImNvbGxlY3Rpb24iLCJ0eXBlIiwibmFtZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJyZWFjdGl2ZVByb3BzMiIsInRhcmdldFByb3RvIiwicHJvdG90eXBlIiwic2V0UmVhY3RpdmVQcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUyxPQUFBLEdBQUFDLFFBQUE7SUE4QmlCLE1BQWdCQyxjQUFBLFNBQXlCRixPQUFBLENBQUFHLE1BQUEsQ0FBTTtNQUNyREMsTUFBQTtNQUNWLENBQUFDLFVBQUEsR0FBdUI7TUFDdkIsSUFBSUEsV0FBQSxFQUFVO1FBQ2IsT0FBTyxLQUFLLENBQUFBLFVBQUE7TUFDYjtNQUlBQyxRQUFBO01BQ0FDLE9BQUEsR0FBbUI7TUFDbkJDLFVBQUEsR0FBc0I7TUFDdEJDLEtBQUEsR0FBaUI7TUFDakJDLFNBQUEsR0FBcUI7TUFDWEMsT0FBQSxHQUFVO01BQ1ZDLFVBQUE7TUFDVkMsTUFBQSxHQUFrQjtNQUVsQkMsWUFBQTtRQUNDLE1BQUs7UUFDTCxLQUFLbEIsYUFBQSxDQUFzQixDQUFDLFlBQVksV0FBVyxjQUFjLGFBQWEsVUFBVSxPQUFPLENBQUM7TUFDakc7TUFFVUEsY0FBaUJtQixLQUFBLEVBQXFCO1FBQy9DLFdBQVdDLE9BQUEsSUFBV0QsS0FBQSxFQUFPO1VBQzVCLE1BQU1FLFVBQUEsR0FBYUMsTUFB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RDtJQUNEO0lBRU0sU0FBVUUsbUJBQXNCZ0MsTUFBQSxFQUEwQnRDLE9BQUEsRUFBa0JJLFlBQUEsRUFBd0I7TUFDekcsTUFBTUcsY0FBQSxHQUFpQixLQUFLQyxNQUFBLENBQU9SLE9BQU87TUFFMUNFLE1BQUEsQ0FBT08sY0FBQSxDQUFlNkIsTUFBQSxFQUFRdEMsT0FBQSxFQUFTO1FBQ3RDVSxJQUFBLEVBQUc7VUFDRixJQUFJLENBQUM0QixNQUFBLENBQU8zQixjQUFBLENBQWVKLGNBQWMsR0FBRztZQUMzQytCLE1BQUEsQ0FBTy9CLGNBQUEsSUFBa0JILFlBQUE7O1VBRTFCLE9BQU9rQyxNQUFBLENBQU8vQixjQUFBO1FBQ2Y7UUFDQUssSUFBSUMsTUFBQSxFQUFrQjtVQUNyQnlCLE1BQUEsQ0FBT0ksZUFBQSxDQUFnQjFDLE9BQUEsRUFBU2EsTUFBTTtRQUN2QztRQUNBRSxVQUFBLEVBQVk7UUFDWkMsWUFBQSxFQUFjO09BQ2Q7SUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLy4uLy4uL3B1YmxpYy9wcmFnbWF0ZS11aS9zcmMvb3V0In0=