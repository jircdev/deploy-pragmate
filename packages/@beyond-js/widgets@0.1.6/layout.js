System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.6/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.6/render', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/layout.0.1.6.js
var layout_0_1_6_exports = {};
__export(layout_0_1_6_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_0_1_6_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.6/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
          const controller = element.controller;
          if (active && element !== this.#active) {
            this.#active = element;
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = exports.ssr = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQuMC4xLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2xheW91dC9fX3NvdXJjZXMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9zc3IudHMiXSwibmFtZXMiOlsibGF5b3V0XzBfMV82X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInNzciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVuZGVyIiwicmVxdWlyZTIiLCJfc3NyIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJsYXlvdXQiLCJhY3RpdmUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJwYWdlIiwib25zc3IiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvbWlzZXMiLCJwdXNoIiwiYmltcG9ydCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiUHJvbWlzZSIsImFsbCIsInJvdXRpbmciLCJsb2ciLCJjb250YWluZXIiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiaGFzIiwiI29uc3NyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJoaWVyYXJjaHkiLCJsb2NhbE5hbWUiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwiI3JlbmRlciIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImVsZW1lbnQyIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJjb250cm9sbGVyIiwic2hvdyIsImNvbnRyb2xsZXIyIiwiRXJyb3IiLCJoaWRkZW4iLCJoaWRlIiwiaHlkcmF0ZSIsIiNoeWRyYXRlIiwia2V5cyIsIiNzdGFydCIsImRvbmUiLCJvbiIsIm1haW4iLCJsYXlvdXRzIiwiZ2V0Iiwic3NyMiIsIkV2ZW50VGFyZ2V0IiwiZGF0YSIsInBhcmVudHMiLCJjb25jYXQiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDQSxJQUFBUSxPQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxJQUFBLEdBQUFELFFBQUE7SUFJQSxJQUFJRSxPQUFBO0lBRUpDLGNBQUEsQ0FBZUMsTUFBQSxDQUFPLDBCQUEwQixjQUFjQyxXQUFBLENBQVc7TUFDckUsQ0FBQUMsTUFBQTtNQUNBLENBQUFDLE1BQUE7TUFFQUMsa0JBQUEsRUFBaUI7UUFDYixLQUFLQyxZQUFBLENBQWE7VUFBQ0MsSUFBQSxFQUFNO1FBQU0sQ0FBQztRQUVoQyxNQUFNQyxPQUFBLEdBQVVBLENBQUEsS0FBSztVQUNqQixNQUFNQyxLQUFBLEdBQVFBLENBQUEsS0FBTSxLQUFLLENBQUFBLEtBQUEs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T0FBTyxLQUFLLENBQUFBLElBQUE7TUFDaEI7TUFHQSxDQUFBeUQsT0FBQTtNQUNBLElBQUlBLFFBQUEsRUFBTztRQUNQLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2hCO01BSUEsQ0FBQWhDLFNBQUEsR0FBdUI7TUFDdkIsSUFBSUEsVUFBQSxFQUFTO1FBQ1QsT0FBTyxLQUFLLENBQUFBLFNBQUE7TUFDaEI7TUFFQW9DLEtBQUtMLElBQUEsRUFBY3hELElBQUEsRUFBYTtRQUM1QixLQUFLLENBQUF3RCxJQUFBLEdBQVFBLElBQUE7UUFDYixLQUFLLENBQUF4RCxJQUFBLEdBQVFBLElBQUEsQ0FBS3dCLE9BQUE7UUFDbEIsS0FBSyxDQUFBaUMsT0FBQSxHQUFXekQsSUFBQSxDQUFLOEQsT0FBQTtRQUVyQk4sSUFBQSxJQUFRLEtBQUssQ0FBQS9CLFNBQUEsQ0FBV3JCLElBQUEsQ0FBS29ELElBQUk7UUFDakN4RCxJQUFBLENBQUs4RCxPQUFBLEtBQVksS0FBSyxDQUFBckMsU0FBQSxHQUFhLEtBQUssQ0FBQUEsU0FBQSxDQUFXc0MsTUFBQSxDQUFPL0QsSUFBQSxDQUFLOEQsT0FBTztRQUN0RSxLQUFLLENBQUFyQyxTQUFBLENBQVdyQixJQUFBLENBQUtKLElBQUEsQ0FBS3dCLE9BQU87UUFFakMsTUFBTXdDLEtBQUEsR0FBUSxJQUFJQyxLQUFBLENBQU0sVUFBVTtRQUNsQyxLQUFLQyxhQUFBLENBQWNGLEtBQUs7TUFDNUI7TUFDSCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLy4uLy4uL3B1YmxpYy9wcmFnbWF0ZS11aS9zcmMvb3V0In0=