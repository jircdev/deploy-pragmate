System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/render.0.1.6.js
var render_0_1_6_exports = {};
__export(render_0_1_6_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});
module.exports = __toCommonJS(render_0_1_6_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = exports.attributes = new Attributes();
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = exports.instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = exports.prerender = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
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
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 2731121275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 2834037449,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 1538919774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = exports.widgets = new BeyondWidgets();
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIuMC4xLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2FuY2hvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9pbnN0YW5jZXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvcHJlcmVuZGVyZWQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY2hlY2tzdW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9jc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvZ2xvYmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldHMudHMiXSwibmFtZXMiOlsicmVuZGVyXzBfMV82X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJleW9uZFdpZGdldCIsIkdsb2JhbENTUyIsIklCZXlvbmRXaWRnZXRDb250cm9sbGVyIiwiSVdpZGdldFNwZWNzIiwiTm9kZVdpZGdldCIsIlN0eWxlc01hbmFnZXIiLCJXaWRnZXRDU1IiLCJfX2JleW9uZF9wa2ciLCJhdHRyaWJ1dGVzIiwiaG1yIiwicHJlcmVuZGVyIiwid2lkZ2V0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsInJvdXRpbmciLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiX2NvcmUiLCJyZXF1aXJlMiIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJ2YWx1ZXMiLCJNYXAiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiYXR0cmlidXRlczIiLCJfbm9kZSIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50IiwicGFyZW50MiIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsImhhcyIsIm5vZGUiLCJ3bm9kZSIsImNoaWxkcmVuIiwiTm9kZVdpZGdldDIiLCJwcmVyZW5kZXIyIiwic3NyIiwiZmluZCIsImVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJpYXR0cnMiLCJyZWR1Y2UiLCJwcmV2IiwiZ2V0IiwiX2F0dHJpYnV0ZXMiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwiI3NldCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJmb3JFYWNoIiwib24iLCJkZXN0cm95Iiwib2ZmIiwiX2RlZmF1bHQiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIldpZGdldENTUjIiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwiaG9sZGVycyIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCIjcmVuZGVyIiwic2l6ZSIsIkNvbnRyb2xsZXIiLCJsb2NhbE5hbWUiLCJsb2ciLCJkaXNjb25uZWN0IiwiYXR0cmlidXRlQ2hhbmdlZCIsIm9sZCIsIl9pbnN0YW5jZXMiLCJfc3IiLCJfY3NyIiwiX3NzciIsIl9zdHlsZXMiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0MiIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJvbmNvbnRyb2xsZXIiLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJfY2hlY2tzdW0iLCJfcmVuZGVyZXIiLCJyZW5kZXJlciIsImluaXRpYWxpc2VkIiwibGFuZ3VhZ2UiLCJtdWx0aWxhbmd1YWdlIiwibGFuZ3VhZ2UyIiwibG9jYWxTdG9yYWdlIiwiX19iZXlvbmRfbGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJzbGljZSIsInJlc291cmNlIiwia2V5IiwicGF0aG5hbWUiLCJzZWFyY2giLCJkZWZhdWx0IiwiY29tcHV0ZSIsImF0dHIiLCJzb3J0IiwiYSIsImIiLCJrIiwidiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiX3ByZXJlbmRlcmVkIiwibWFwIiwiZm91bmQiLCJsb2FkIiwiI2xvYWQiLCJwa2ciLCJjb25maWciLCJhdHRyczIiLCJHbG9iYWxDU1MyIiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJfbGluayIsIl9nbG9iYWwiLCJTdHlsZXNNYW5hZ2VyMiIsImV2ZW50cyIsImxpc3RlbmVyIiwiZ2xvYmFsY3NzIiwiY2hhbmdlZCIsIiNjaGFuZ2VkIiwicmVzb2x2ZWQiLCJrZXlzIiwiY2hlY2siLCJwcm9taXNlIiwicmVzb2x2ZSIsImN1cnJlbnRUYXJnZXQiLCJ3YXJuIiwicHVyZ2UiLCIjY2hlY2siLCJsb2FkZWQyIiwiI3B1cmdlIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJyZWZyZXNoIiwiI3JlZnJlc2giLCIjdXBkYXRlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJpdiIsInBhcnNlSW50IiwiX3dpZGdldCIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsInNwZWNzMiIsIm9ic2VydmVkQXR0cmlidXRlcyIsIndpZGdldHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWhCLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tBLE9BQU9pQixPQUFBLEtB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QVM7VUFFcEIsSUFBSSxLQUFLM0wsR0FBQSxDQUFJMkwsTUFBQSxDQUFNN00sSUFBSSxHQUFHO1VBRTFCNk0sTUFBQSxDQUFNaEosTUFBQSxHQUFTZ0osTUFBQSxDQUFNaEosTUFBQSxHQUFTZ0osTUFBQSxDQUFNaEosTUFBQSxHQUFTO1lBQUNDLEdBQUEsRUFBSztZQUFNdEMsR0FBQSxFQUFLO1lBQU9tRSxFQUFBLEVBQUk7VUFBSztVQUM5RSxNQUFNO1lBQUMzRixJQUFBO1lBQU02RDtVQUFNLElBQUlnSixNQUFBO1VBQ3ZCaEosTUFBQSxDQUFPQyxHQUFBLEdBQU0sT0FBT0QsTUFBQSxDQUFPQyxHQUFBLEtBQVEsWUFBWUQsTUFBQSxDQUFPQyxHQUFBLEdBQU07VUFFNUQsS0FBSzVELEdBQUEsQ0FBSUYsSUFBQSxFQUFNNk0sTUFBSztVQUdwQixJQUFJLE9BQU9sTyxPQUFBLEtBQVksVUFBVTtVQUVqQ0MsY0FBQSxDQUFlQyxNQUFBLENBQU9tQixJQUFBLEVBQU0sY0FBYzBNLE9BQUEsQ0FBQTlPLFlBQUEsQ0FBWTtZQUNsRCxXQUFXa1AsbUJBQUEsRUFBa0I7Y0FDekIsT0FBT0QsTUFBQSxDQUFNbEwsS0FBQSxHQUFRa0wsTUFBQSxDQUFNbEwsS0FBQSxHQUFRO1lBQ3ZDO1lBRUEzQyxZQUFBO2NBQ0ksTUFBTTZOLE1BQUs7WUFDZjtXQUNIO1FBQ0wsQ0FBQztNQUNMOztJQUdjLE1BQU1FLFFBQUEsR0FBT3RPLE9BQUEsQ0FBQUYsT0FBQSxHQUFrQixJQUFJb08sYUFBQSxDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvLi4vLi4vcHVibGljL3ByYWdtYXRlLXVpL3NyYy9vdXQifQ==