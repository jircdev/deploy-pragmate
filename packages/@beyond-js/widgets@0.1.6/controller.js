System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.6/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.6/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/controller.0.1.6.js
var controller_0_1_6_exports = {};
__export(controller_0_1_6_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_0_1_6_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.6/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 2102509577,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      disconnect() {
        this.unmount();
      }
      async initialise() {
        if (!this.Widget) {
          throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
        }
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 2493003511,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 1515978368,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjAuMS42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvc3NyLnRzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXJfMF8xXzZfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVdpZGdldFJlbmRlcmVkIiwiSVdpZGdldFN0b3JlIiwiV2lkZ2V0QXR0cmlidXRlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIldpZGdldEF0dHJpYnV0ZXMyIiwiTWFwIiwid2lkZ2V0IiwiZXZlbnRzIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiX2NvbnRyb2xsZXIiLCJfYXR0cmlidXRlcyIsIl9idW5kbGUiLCJfc3R5bGVzIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlcjIiLCJzdG9yZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwic3R5bGVzIiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwidnNwZWNpZmllciIsImxpbmtzIiwiZWxlbWVudHMiLCJtYXAiLCJzdHlsZSIsImhyZWYiLCJpbml0aWFsaXNlZCIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJyZW5kZXIiLCJtb3VudCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInJlZnJlc2giLCJ1bm1vdW50IiwiI3JlZnJlc2giLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImluc3RhbmNlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJfcmVuZGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UyIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlcjIiLCJwYXJhbXMiLCJwdXNoIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLFlBQUEsRUFBQUEs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RUFFLFlBQVlpQixRQUFBLEVBQWlCO1FBQzVCLE9BQU87TUFDUjtNQVVBN0QsWUFBc0I7UUFBRUUsS0FBQTtRQUFPVDtNQUFNLEdBQWtEO1FBQ3RGLElBQUksQ0FBQ1MsS0FBQSxFQUFPO1VBQ1gsTUFBTTtZQUFFa0M7VUFBUyxJQUFLM0MsTUFBQTtVQUN0QixJQUFJLENBQUM4RCxPQUFBLENBQUFPLE9BQUEsQ0FBUVgsR0FBQSxDQUFJZixTQUFTLEdBQUcsTUFBTSxJQUFJTyxLQUFBLENBQU0sZ0JBQWdCUCxTQUFBLHFCQUE4QjtVQUMzRmxDLEtBQUEsR0FBUXFELE9BQUEsQ0FBQU8sT0FBQSxDQUFRVCxHQUFBLENBQUlqQixTQUFTOztRQUc5QixLQUFLLENBQUFnQixHQUFBLElBQVEsTUFBSztVQUNqQixNQUFNVyxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDckMsR0FBRTtRQUVGLEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2Y7O0lBQ0FmLE9BQUEsQ0FBQUwsb0JBQUEsR0FBQTBFLHFCQUFBOzs7Ozs7Ozs7Ozs7SUM5RUQsSUFBQTVDLFdBQUEsR0FBQXRCLFFBQUE7SUFDQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQWdCaUIsTUFDRjZFLHVCQUFBLFNBQStCdkQsV0FBQSxDQUFBOUIsb0JBQUEsQ0FBb0I7TUFDckQsQ0FBQXNDLE1BQUEsR0FBb0I7TUFDN0IsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFQXBCLFlBQXNCb0UsTUFBQSxFQUFzRDtRQUN4RSxNQUFNQSxNQUFNO1FBQ1osTUFBTWhELE1BQUEsR0FBUyxJQUFJTCxPQUFBLENBQUFNLGtCQUFBLENBQW1CLEtBQUtuQixLQUFBLENBQU1vQixVQUFVO1FBQzNERixNQUFBLENBQU9JLFFBQUEsQ0FBU3JCLE9BQUEsQ0FBUSxDQUFDO1VBQUN3QjtRQUFJLE1BQXdCLEtBQUssQ0FBQVAsTUFBQSxDQUFRaUQsSUFBQSxDQUFLMUMsSUFBSSxDQUFDO1FBRTdFLEtBQUssQ0FBQVAsTUFBQSxDQUFRa0QsT0FBQSxDQUFRLE9BQU8sS0FBS2xCLEdBQUEsZ0JBQW1CO01BQ3hEOztJQUdIakUsT0FBQSxDQUFBSixzQkFBQSxHQUFBb0YsdUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8uLi8uLi9wdWJsaWMvcHJhZ21hdGUtdWkvc3JjL291dCJ9