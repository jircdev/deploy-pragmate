System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["swiper","10.3.0"]]);
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/swiper.10.3.0.js
var swiper_10_3_0_exports = {};
__export(swiper_10_3_0_exports, {
  Swiper: () => Swiper,
  default: () => swiper_10_3_0_default
});
module.exports = __toCommonJS(swiper_10_3_0_exports);

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {}
    try {
      delete object[key];
    } catch (e) {}
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map(a => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes2) ? classes2 : [classes2]));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach(event => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide2 => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";else if (activeIndex < previousIndex) dir = "prev";else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";else if (slideIndex < activeIndex) direction = "prev";else direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment);
}
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate2) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.swipeDirection === "next" && swiper.allowSlideNext || swiper.swipeDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(event.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
var dummyEventAttached = false;
function dummyEventListener() {}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach(prop => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map(point => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === "object") {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: false,
  userAgent: null,
  url: null,
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  autoHeight: false,
  setWrapperSize: false,
  virtualTranslate: false,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  watchOverflow: true,
  roundLengths: false,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  uniqueNavElements: true,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  grabCursor: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  rewind: false,
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  runCallbacksOnInit: true,
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: true,
      isEnd: false,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: swiper.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: true,
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter(className => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter(className => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute("style");
      wrapperEl.removeAttribute("style");
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module2) {
    if (Array.isArray(module2)) {
      module2.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module2);
    return Swiper;
  }
};
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// .beyond/uimport/temp/swiper.10.3.0.js
var swiper_10_3_0_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3N3aXBlci4xMC4zLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiXSwibmFtZXMiOlsic3dpcGVyXzEwXzNfMF9leHBvcnRzIiwiX19leHBvcnQiLCJTd2lwZXIiLCJkZWZhdWx0Iiwic3dpcGVyXzEwXzNfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzT2JqZWN0Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJleHRlbmQiLCJ0YXJnZXQiLCJzcmMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxlbmd0aCIsInNzckRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiaW1wb3J0Tm9kZSIsImxvY2F0aW9uIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsImhyZWYiLCJvcmlnaW4iLCJwYXRobmFtZSIsInByb3RvY29sIiwic2VhcmNoIiwiZ2V0RG9jdW1lbnQiLCJkb2MiLCJkb2N1bWVudCIsInNzcldpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJnZXRXaW5kb3ciLCJ3aW4iLCJ3aW5kb3ciLCJkZWxldGVQcm9wcyIsIm9iamVjdCIsImUiLCJuZXh0VGljayIsImRlbGF5Iiwibm93IiwiZ2V0Q29tcHV0ZWRTdHlsZTIiLCJlbCIsIndpbmRvdzIiLCJjdXJyZW50U3R5bGUiLCJnZXRUcmFuc2xhdGUiLCJheGlzIiwibWF0cml4IiwiY3VyVHJhbnNmb3JtIiwidHJhbnNmb3JtTWF0cml4IiwiY3VyU3R5bGUiLCJXZWJLaXRDU1NNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJzcGxpdCIsIm1hcCIsImEiLCJyZXBsYWNlIiwiam9pbiIsIk1velRyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJNc1RyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidG9TdHJpbmciLCJtNDEiLCJwYXJzZUZsb2F0IiwibTQyIiwiaXNPYmplY3QyIiwibyIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImlzTm9kZSIsIm5vZGUiLCJIVE1MRWxlbWVudCIsIm5vZGVUeXBlIiwiZXh0ZW5kMiIsInRvIiwiYXJndW1lbnRzIiwibm9FeHRlbmQiLCJpIiwibmV4dFNvdXJjZSIsImtleXNBcnJheSIsImZpbHRlciIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJsZW4iLCJuZXh0S2V5IiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfX3N3aXBlcl9fIiwic2V0Q1NTUHJvcGVydHkiLCJ2YXJOYW1lIiwidmFyVmFsdWUiLCJzZXRQcm9wZXJ0eSIsImFuaW1hdGVDU1NNb2RlU2Nyb2xsIiwiX3JlZiIsInN3aXBlciIsInRhcmdldFBvc2l0aW9uIiwic2lkZSIsInN0YXJ0UG9zaXRpb24iLCJ0cmFuc2xhdGUiLCJzdGFydFRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJzcGVlZCIsIndyYXBwZXJFbCIsInNjcm9sbFNuYXBUeXBlIiwiY3NzTW9kZUZyYW1lSUQiLCJkaXIiLCJpc091dE9mQm91bmQiLCJjdXJyZW50IiwiYW5pbWF0ZSIsImdldFRpbWUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJlYXNlUHJvZ3Jlc3MiLCJjb3MiLCJQSSIsImN1cnJlbnRQb3NpdGlvbiIsInNjcm9sbFRvIiwib3ZlcmZsb3ciLCJnZXRTbGlkZVRyYW5zZm9ybUVsIiwic2xpZGVFbCIsInNoYWRvd1Jvb3QiLCJlbGVtZW50Q2hpbGRyZW4iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJtYXRjaGVzIiwidGFnIiwiY2xhc3NlczIiLCJjbGFzc0xpc3QiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJlbGVtZW50T2Zmc2V0IiwiZG9jdW1lbnQyIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInNjcm9sbFRvcCIsInNjcm9sbFkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsWCIsInRvcCIsImxlZnQiLCJlbGVtZW50UHJldkFsbCIsInByZXZFbHMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldiIsInB1c2giLCJlbGVtZW50TmV4dEFsbCIsIm5leHRFbHMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJuZXh0IiwiZWxlbWVudFN0eWxlIiwicHJvcCIsImVsZW1lbnRJbmRleCIsImNoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwiZWxlbWVudFBhcmVudHMiLCJwYXJlbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRUcmFuc2l0aW9uRW5kIiwiZmlyZUNhbGxCYWNrIiwiZWxlbWVudE91dGVyU2l6ZSIsInNpemUiLCJpbmNsdWRlTWFyZ2lucyIsIm9mZnNldFdpZHRoIiwic3VwcG9ydCIsImNhbGNTdXBwb3J0Iiwic21vb3RoU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwiZ2V0U3VwcG9ydCIsImRldmljZUNhY2hlZCIsImNhbGNEZXZpY2UiLCJfdGVtcCIsInN1cHBvcnQyIiwicGxhdGZvcm0iLCJ1YSIsImRldmljZSIsImlvcyIsImFuZHJvaWQiLCJzY3JlZW5XaWR0aCIsIndpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaGVpZ2h0IiwibWF0Y2giLCJpcGFkIiwiaXBvZCIsImlwaG9uZSIsIndpbmRvd3MiLCJtYWNvcyIsImlQYWRTY3JlZW5zIiwib3MiLCJnZXREZXZpY2UiLCJvdmVycmlkZXMiLCJicm93c2VyIiwiY2FsY0Jyb3dzZXIiLCJuZWVkUGVyc3BlY3RpdmVGaXgiLCJpc1NhZmFyaSIsInRvTG93ZXJDYXNlIiwiU3RyaW5nIiwiaW5jbHVkZXMiLCJtYWpvciIsIm1pbm9yIiwibnVtIiwiTnVtYmVyIiwiaXNXZWJWaWV3IiwidGVzdCIsImdldEJyb3dzZXIiLCJSZXNpemUiLCJvbiIsImVtaXQiLCJvYnNlcnZlciIsImFuaW1hdGlvbkZyYW1lIiwicmVzaXplSGFuZGxlciIsImRlc3Ryb3llZCIsImluaXRpYWxpemVkIiwiY3JlYXRlT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIl9yZWYyIiwiY29udGVudEJveFNpemUiLCJjb250ZW50UmVjdCIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJvYnNlcnZlIiwicmVtb3ZlT2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIiLCJyZXNpemVPYnNlcnZlciIsIk9ic2VydmVyIiwiZXh0ZW5kUGFyYW1zIiwib2JzZXJ2ZXJzIiwiYXR0YWNoIiwib3B0aW9ucyIsIk9ic2VydmVyRnVuYyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJraXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiX19wcmV2ZW50T2JzZXJ2ZXJfXyIsIm9ic2VydmVyVXBkYXRlIiwib2JzZXJ2ZXJVcGRhdGUyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJpbml0Iiwib2JzZXJ2ZVBhcmVudHMiLCJjb250YWluZXJQYXJlbnRzIiwiaG9zdEVsIiwib2JzZXJ2ZVNsaWRlQ2hpbGRyZW4iLCJkZXN0cm95IiwiZGlzY29ubmVjdCIsInNwbGljZSIsImV2ZW50c0VtaXR0ZXIiLCJldmVudHMyIiwiaGFuZGxlciIsInByaW9yaXR5Iiwic2VsZiIsImV2ZW50c0xpc3RlbmVycyIsIm1ldGhvZCIsImV2ZW50Iiwib25jZSIsIm9uY2VIYW5kbGVyIiwib2ZmIiwiX19lbWl0dGVyUHJveHkiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJhcHBseSIsIm9uQW55IiwiZXZlbnRzQW55TGlzdGVuZXJzIiwib2ZmQW55IiwiaW5kZXgiLCJldmVudEhhbmRsZXIiLCJkYXRhIiwiY29udGV4dCIsIl9sZW4yIiwiX2tleTIiLCJldmVudHMiLCJ1bnNoaWZ0IiwiZXZlbnRzQXJyYXkiLCJ1cGRhdGVTaXplIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpc0hvcml6b250YWwiLCJpc1ZlcnRpY2FsIiwicGFyc2VJbnQiLCJpc05hTiIsImFzc2lnbiIsInVwZGF0ZVNsaWRlcyIsImdldERpcmVjdGlvbkxhYmVsIiwicHJvcGVydHkiLCJnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlIiwibGFiZWwiLCJzbGlkZXNFbCIsInN3aXBlclNpemUiLCJydGxUcmFuc2xhdGUiLCJydGwiLCJ3cm9uZ1JUTCIsImlzVmlydHVhbCIsInZpcnR1YWwiLCJlbmFibGVkIiwicHJldmlvdXNTbGlkZXNMZW5ndGgiLCJzbGlkZXMiLCJzbGlkZUNsYXNzIiwic2xpZGVzTGVuZ3RoIiwic25hcEdyaWQiLCJzbGlkZXNHcmlkIiwic2xpZGVzU2l6ZXNHcmlkIiwib2Zmc2V0QmVmb3JlIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwib2Zmc2V0QWZ0ZXIiLCJzbGlkZXNPZmZzZXRBZnRlciIsInByZXZpb3VzU25hcEdyaWRMZW5ndGgiLCJwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgiLCJzcGFjZUJldHdlZW4iLCJzbGlkZVBvc2l0aW9uIiwicHJldlNsaWRlU2l6ZSIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiY2VudGVyZWRTbGlkZXMiLCJjc3NNb2RlIiwiZ3JpZEVuYWJsZWQiLCJncmlkIiwicm93cyIsImluaXRTbGlkZXMiLCJzbGlkZVNpemUiLCJzaG91bGRSZXNldFNsaWRlU2l6ZSIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsInNsaWRlMiIsInVwZGF0ZVNsaWRlIiwic2xpZGVTdHlsZXMiLCJjdXJyZW50VHJhbnNmb3JtIiwiY3VycmVudFdlYktpdFRyYW5zZm9ybSIsInJvdW5kTGVuZ3RocyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwiZmxvb3IiLCJzd2lwZXJTbGlkZVNpemUiLCJhYnMiLCJzbGlkZXNQZXJHcm91cCIsInNsaWRlc1Blckdyb3VwU2tpcCIsImVmZmVjdCIsInNldFdyYXBwZXJTaXplIiwidXBkYXRlV3JhcHBlclNpemUiLCJuZXdTbGlkZXNHcmlkIiwic2xpZGVzR3JpZEl0ZW0iLCJsb29wIiwiZ3JvdXBzIiwiY2VpbCIsInNsaWRlc0JlZm9yZSIsInNsaWRlc0FmdGVyIiwiZ3JvdXBTaXplIiwiXyIsInNsaWRlSW5kZXgiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsImFsbFNsaWRlc1NpemUiLCJzbGlkZVNpemVWYWx1ZSIsIm1heFNuYXAiLCJzbmFwIiwiY2VudGVySW5zdWZmaWNpZW50U2xpZGVzIiwiYWxsU2xpZGVzT2Zmc2V0Iiwic25hcEluZGV4IiwiYWRkVG9TbmFwR3JpZCIsImFkZFRvU2xpZGVzR3JpZCIsInYiLCJ3YXRjaE92ZXJmbG93IiwiY2hlY2tPdmVyZmxvdyIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ1cGRhdGVTbGlkZXNPZmZzZXQiLCJiYWNrRmFjZUhpZGRlbkNsYXNzIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsImhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkIiwiY29udGFpbnMiLCJtYXhCYWNrZmFjZUhpZGRlblNsaWRlcyIsInJlbW92ZSIsInVwZGF0ZUF1dG9IZWlnaHQiLCJhY3RpdmVTbGlkZXMiLCJzZXRUcmFuc2l0aW9uIiwiZ2V0U2xpZGVCeUluZGV4IiwiZ2V0U2xpZGVJbmRleEJ5RGF0YSIsInZpc2libGVTbGlkZXMiLCJhY3RpdmVJbmRleCIsIm9mZnNldEhlaWdodCIsIm1pbnVzT2Zmc2V0IiwiaXNFbGVtZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInN3aXBlclNsaWRlT2Zmc2V0IiwiY3NzT3ZlcmZsb3dBZGp1c3RtZW50IiwidXBkYXRlU2xpZGVzUHJvZ3Jlc3MiLCJ0cmFuc2xhdGUyIiwib2Zmc2V0Q2VudGVyIiwic2xpZGVWaXNpYmxlQ2xhc3MiLCJ2aXNpYmxlU2xpZGVzSW5kZXhlcyIsInNsaWRlT2Zmc2V0Iiwic2xpZGVQcm9ncmVzcyIsIm1pblRyYW5zbGF0ZSIsIm9yaWdpbmFsU2xpZGVQcm9ncmVzcyIsInNsaWRlQmVmb3JlIiwic2xpZGVBZnRlciIsImlzVmlzaWJsZSIsIm9yaWdpbmFsUHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsIm11bHRpcGxpZXIiLCJ0cmFuc2xhdGVzRGlmZiIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJwcm9ncmVzc0xvb3AiLCJ3YXNCZWdpbm5pbmciLCJ3YXNFbmQiLCJpc0JlZ2lubmluZ1JvdW5kZWQiLCJpc0VuZFJvdW5kZWQiLCJmaXJzdFNsaWRlSW5kZXgiLCJsYXN0U2xpZGVJbmRleCIsImZpcnN0U2xpZGVUcmFuc2xhdGUiLCJsYXN0U2xpZGVUcmFuc2xhdGUiLCJ0cmFuc2xhdGVNYXgiLCJ0cmFuc2xhdGVBYnMiLCJhdXRvSGVpZ2h0IiwidXBkYXRlU2xpZGVzQ2xhc3NlcyIsImdldEZpbHRlcmVkU2xpZGUiLCJzbGlkZUFjdGl2ZUNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZVByZXZDbGFzcyIsImFjdGl2ZVNsaWRlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiZW1pdFNsaWRlc0NsYXNzZXMiLCJwcm9jZXNzTGF6eVByZWxvYWRlciIsImltYWdlRWwiLCJzbGlkZVNlbGVjdG9yIiwiY2xvc2VzdCIsImxhenlFbCIsImxhenlQcmVsb2FkZXJDbGFzcyIsInVubGF6eSIsInJlbW92ZUF0dHJpYnV0ZSIsInByZWxvYWQiLCJhbW91bnQiLCJsYXp5UHJlbG9hZFByZXZOZXh0Iiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJhY3RpdmVDb2x1bW4iLCJwcmVsb2FkQ29sdW1ucyIsImZyb20iLCJjb2x1bW4iLCJzbGlkZUluZGV4TGFzdEluVmlldyIsInJld2luZCIsInJlYWxJbmRleCIsImdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUiLCJub3JtYWxpemVTbGlkZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJuZXdBY3RpdmVJbmRleCIsInByZXZpb3VzSW5kZXgiLCJwcmV2aW91c1JlYWxJbmRleCIsInByZXZpb3VzU25hcEluZGV4IiwiZ2V0VmlydHVhbFJlYWxJbmRleCIsImFJbmRleCIsInJlYWxJbmRleDIiLCJza2lwIiwiZ2V0QXR0cmlidXRlIiwicnVuQ2FsbGJhY2tzT25Jbml0IiwidXBkYXRlQ2xpY2tlZFNsaWRlIiwicGF0aCIsInBhdGhFbCIsInNsaWRlRm91bmQiLCJjbGlja2VkU2xpZGUiLCJjbGlja2VkSW5kZXgiLCJzbGlkZVRvQ2xpY2tlZFNsaWRlIiwidXBkYXRlIiwiZ2V0U3dpcGVyVHJhbnNsYXRlIiwidmlydHVhbFRyYW5zbGF0ZSIsImN1cnJlbnRUcmFuc2xhdGUiLCJzZXRUcmFuc2xhdGUiLCJieUNvbnRyb2xsZXIiLCJ4IiwieSIsInoiLCJwcmV2aW91c1RyYW5zbGF0ZSIsIm5ld1Byb2dyZXNzIiwidHJhbnNsYXRlVG8iLCJydW5DYWxsYmFja3MiLCJ0cmFuc2xhdGVCb3VuZHMiLCJpbnRlcm5hbCIsImFuaW1hdGluZyIsInByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiIsIm1pblRyYW5zbGF0ZTIiLCJtYXhUcmFuc2xhdGUyIiwibmV3VHJhbnNsYXRlIiwiaXNIIiwiYmVoYXZpb3IiLCJvblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uRW5kMiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25FbWl0IiwiZGlyZWN0aW9uIiwic3RlcCIsInRyYW5zaXRpb25TdGFydCIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwic2xpZGVUbyIsImluaXRpYWwiLCJub3JtYWxpemVkVHJhbnNsYXRlIiwibm9ybWFsaXplZEdyaWQiLCJub3JtYWxpemVkR3JpZE5leHQiLCJhbGxvd1NsaWRlTmV4dCIsImFsbG93U2xpZGVQcmV2IiwidCIsIl9pbW1lZGlhdGVWaXJ0dWFsIiwiX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCIsImluaXRpYWxTbGlkZSIsIm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwic2xpZGVUb0xvb3AiLCJpbmRleEFzTnVtYmVyIiwibmV3SW5kZXgiLCJzbGlkZU5leHQiLCJwZXJHcm91cCIsInNsaWRlc1Blckdyb3VwQXV0byIsImluY3JlbWVudCIsImxvb3BQcmV2ZW50c1NsaWRpbmciLCJsb29wRml4IiwiX2NsaWVudExlZnQiLCJzbGlkZVByZXYiLCJub3JtYWxpemUiLCJ2YWwiLCJub3JtYWxpemVkU25hcEdyaWQiLCJwcmV2U25hcCIsInByZXZTbmFwSW5kZXgiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzbGlkZVJlc2V0Iiwic2xpZGVUb0Nsb3Nlc3QiLCJ0aHJlc2hvbGQiLCJjdXJyZW50U25hcCIsIm5leHRTbmFwIiwic2xpZGVUb0luZGV4IiwibG9vcGVkU2xpZGVzIiwiZ2V0U2xpZGVJbmRleCIsInNsaWRlIiwibG9vcENyZWF0ZSIsInNsaWRlUmVhbEluZGV4Iiwic2xpZGVUbzIiLCJzZXRUcmFuc2xhdGUyIiwiYWN0aXZlU2xpZGVJbmRleCIsImJ5TW91c2V3aGVlbCIsInByZXBlbmRTbGlkZXNJbmRleGVzIiwiYXBwZW5kU2xpZGVzSW5kZXhlcyIsImlzTmV4dCIsImlzUHJldiIsInNsaWRlc1ByZXBlbmRlZCIsInNsaWRlc0FwcGVuZGVkIiwic3dpcGVyTG9vcE1vdmVET00iLCJwcmVwZW5kIiwiYXBwZW5kIiwicmVjYWxjU2xpZGVzIiwiY3VycmVudFNsaWRlVHJhbnNsYXRlIiwibmV3U2xpZGVUcmFuc2xhdGUiLCJkaWZmIiwidG91Y2hlcyIsInRvdWNoRXZlbnRzRGF0YSIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwibG9vcFBhcmFtcyIsImMiLCJsb29wRGVzdHJveSIsIm5ld1NsaWRlc09yZGVyIiwic3dpcGVyU2xpZGVJbmRleCIsInNldEdyYWJDdXJzb3IiLCJtb3ZpbmciLCJzaW11bGF0ZVRvdWNoIiwiaXNMb2NrZWQiLCJ0b3VjaEV2ZW50c1RhcmdldCIsImN1cnNvciIsInVuc2V0R3JhYkN1cnNvciIsImdyYWJDdXJzb3IiLCJjbG9zZXN0RWxlbWVudCIsImJhc2UiLCJfX2Nsb3Nlc3RGcm9tIiwiYXNzaWduZWRTbG90IiwiZm91bmQiLCJnZXRSb290Tm9kZSIsIm9uVG91Y2hTdGFydCIsImV2Q2FjaGUiLCJwb2ludGVyVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXRFbCIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsInN3aXBpbmdDbGFzc0hhc1ZhbHVlIiwibm9Td2lwaW5nQ2xhc3MiLCJldmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJub1N3aXBpbmdTZWxlY3RvciIsImlzVGFyZ2V0U2hhZG93Iiwibm9Td2lwaW5nIiwiYWxsb3dDbGljayIsInN3aXBlSGFuZGxlciIsImN1cnJlbnRYIiwicGFnZVgiLCJjdXJyZW50WSIsInBhZ2VZIiwic3RhcnRYIiwic3RhcnRZIiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiaU9TRWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiaU9TRWRnZVN3aXBlVGhyZXNob2xkIiwiaW5uZXJXaWR0aCIsInByZXZlbnREZWZhdWx0IiwiYWxsb3dUb3VjaENhbGxiYWNrcyIsImlzU2Nyb2xsaW5nIiwic3RhcnRNb3ZpbmciLCJ0b3VjaFN0YXJ0VGltZSIsInN3aXBlRGlyZWN0aW9uIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJzaG91bGRQcmV2ZW50RGVmYXVsdCIsImFsbG93VG91Y2hNb3ZlIiwidG91Y2hTdGFydFByZXZlbnREZWZhdWx0IiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImZyZWVNb2RlIiwib25Ub3VjaE1vdmUiLCJwb2ludGVySW5kZXgiLCJmaW5kSW5kZXgiLCJjYWNoZWRFdiIsInBvaW50ZXJJZCIsInRhcmdldFRvdWNoIiwicHJldmVudGVkQnlOZXN0ZWRTd2lwZXIiLCJwcmV2WCIsInByZXZZIiwidG91Y2hSZWxlYXNlT25FZGdlcyIsInRhcmdldFRvdWNoZXMiLCJkaWZmWCIsImRpZmZZIiwic3FydCIsInRvdWNoQW5nbGUiLCJhdGFuMiIsInpvb20iLCJjYW5jZWxhYmxlIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwibmVzdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlc0RpZmYiLCJwcmV2aW91c1giLCJwcmV2aW91c1kiLCJvbmVXYXlNb3ZlbWVudCIsInRvdWNoUmF0aW8iLCJwcmV2VG91Y2hlc0RpcmVjdGlvbiIsInRvdWNoZXNEaXJlY3Rpb24iLCJpc0xvb3AiLCJhbGxvd0xvb3BGaXgiLCJzdGFydFRyYW5zbGF0ZSIsImV2dCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsImxvb3BGaXhlZCIsImRpc2FibGVQYXJlbnRTd2lwZXIiLCJyZXNpc3RhbmNlUmF0aW8iLCJyZXNpc3RhbmNlIiwiZm9sbG93RmluZ2VyIiwib25Ub3VjaEVuZCIsInR5cGUiLCJwcm9jZWVkIiwidG91Y2hFbmRUaW1lIiwidGltZURpZmYiLCJwYXRoVHJlZSIsImxhc3RDbGlja1RpbWUiLCJjdXJyZW50UG9zIiwic3RvcEluZGV4IiwiaW5jcmVtZW50MiIsInJld2luZEZpcnN0SW5kZXgiLCJyZXdpbmRMYXN0SW5kZXgiLCJyYXRpbyIsImxvbmdTd2lwZXNNcyIsImxvbmdTd2lwZXMiLCJsb25nU3dpcGVzUmF0aW8iLCJzaG9ydFN3aXBlcyIsImlzTmF2QnV0dG9uVGFyZ2V0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm9uUmVzaXplIiwic2V0QnJlYWtwb2ludCIsImlzVmlydHVhbExvb3AiLCJhdXRvcGxheSIsInJ1bm5pbmciLCJwYXVzZWQiLCJyZXNpemVUaW1lb3V0IiwicmVzdW1lIiwib25DbGljayIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJvblNjcm9sbCIsIm9uTG9hZCIsImR1bW15RXZlbnRBdHRhY2hlZCIsImR1bW15RXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJkb21NZXRob2QiLCJzd2lwZXJNZXRob2QiLCJwYXNzaXZlIiwidXBkYXRlT25XaW5kb3dSZXNpemUiLCJhdHRhY2hFdmVudHMiLCJiaW5kIiwiZGV0YWNoRXZlbnRzIiwiZXZlbnRzJDEiLCJpc0dyaWRFbmFibGVkIiwiYnJlYWtwb2ludHMyIiwiYnJlYWtwb2ludCIsImdldEJyZWFrcG9pbnQiLCJicmVha3BvaW50c0Jhc2UiLCJjdXJyZW50QnJlYWtwb2ludCIsImJyZWFrcG9pbnRPbmx5UGFyYW1zIiwiYnJlYWtwb2ludFBhcmFtcyIsIm9yaWdpbmFsUGFyYW1zIiwid2FzTXVsdGlSb3ciLCJpc011bHRpUm93Iiwid2FzRW5hYmxlZCIsImVtaXRDb250YWluZXJDbGFzc2VzIiwiZmlsbCIsIndhc01vZHVsZUVuYWJsZWQiLCJpc01vZHVsZUVuYWJsZWQiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZGlyZWN0aW9uQ2hhbmdlZCIsIm5lZWRzUmVMb29wIiwid2FzTG9vcCIsImNoYW5nZURpcmVjdGlvbiIsImlzRW5hYmxlZCIsImhhc0xvb3AiLCJjb250YWluZXJFbCIsImN1cnJlbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInBvaW50cyIsInBvaW50IiwibWluUmF0aW8iLCJzdWJzdHIiLCJ2YWx1ZSIsInNvcnQiLCJiIiwicHJlcGFyZUNsYXNzZXMiLCJwcmVmaXgiLCJyZXN1bHRDbGFzc2VzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJhZGRDbGFzc2VzIiwic3VmZml4ZXMiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NlcyIsIndhc0xvY2tlZCIsImxhc3RTbGlkZVJpZ2h0RWRnZSIsImNoZWNrT3ZlcmZsb3ckMSIsImRlZmF1bHRzIiwiY3JlYXRlRWxlbWVudHMiLCJ1cmwiLCJ1bmlxdWVOYXZFbGVtZW50cyIsInBhc3NpdmVMaXN0ZW5lcnMiLCJ3cmFwcGVyQ2xhc3MiLCJfZW1pdENsYXNzZXMiLCJtb2R1bGVFeHRlbmRQYXJhbXMiLCJhbGxNb2R1bGVzUGFyYW1zIiwibW9kdWxlUGFyYW1OYW1lIiwibW9kdWxlUGFyYW1zIiwiYXV0byIsInByb3RvdHlwZXMiLCJleHRlbmRlZERlZmF1bHRzIiwic3dpcGVycyIsIm5ld1BhcmFtcyIsIm1vZHVsZXMiLCJfX21vZHVsZXNfXyIsIm1vZCIsInN3aXBlclBhcmFtcyIsInBhc3NlZFBhcmFtcyIsImV2ZW50TmFtZSIsInZlbG9jaXR5IiwidHJ1bmMiLCJjbGlja1RpbWVvdXQiLCJ2ZWxvY2l0aWVzIiwiaW1hZ2VzVG9Mb2FkIiwiaW1hZ2VzTG9hZGVkIiwic2V0UHJvZ3Jlc3MiLCJjbHMiLCJjbGFzc05hbWUiLCJnZXRTbGlkZUNsYXNzZXMiLCJ1cGRhdGVzIiwidmlldyIsImV4YWN0Iiwic3B2IiwiYnJlYWtMb29wIiwic2xpZGVJblZpZXciLCJjb21wbGV0ZSIsInRyYW5zbGF0ZVZhbHVlIiwidHJhbnNsYXRlZCIsIm5ld0RpcmVjdGlvbiIsIm5lZWRVcGRhdGUiLCJjdXJyZW50RGlyZWN0aW9uIiwiY2hhbmdlTGFuZ3VhZ2VEaXJlY3Rpb24iLCJtb3VudCIsIm1vdW50ZWQiLCJwYXJlbnROb2RlIiwiZ2V0V3JhcHBlclNlbGVjdG9yIiwidHJpbSIsImdldFdyYXBwZXIiLCJyZXMiLCJzbGlkZVNsb3RzIiwibGF6eUVsZW1lbnRzIiwiZGVsZXRlSW5zdGFuY2UiLCJjbGVhblN0eWxlcyIsImV4dGVuZERlZmF1bHRzIiwibmV3RGVmYXVsdHMiLCJpbnN0YWxsTW9kdWxlIiwidXNlIiwibW9kdWxlMiIsIm0iLCJwcm90b3R5cGVHcm91cCIsInByb3RvTWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLHFCQUFBOzs7QUNZQSxTQUFTUSxTQUFTQyxHQUFBLEVBQUs7RUFDckIsT0FBT0EsR0FBQSxLQUFRLFFBQVEsT0FBT0EsR0FBQSxLQUFRLFlBQVksaUJBQWlCQSxHQUFBLElBQU9BLEdBQUEsQ0FBSUMsV0FBQSxLQUFnQkMsTUFBQTtBQUNoRztBQUNBLFNBQVNDLE9BQU9DLE1BQUEsRUFBUUMsR0FBQSxFQUFLO0VBQzNCLElBQUlELE1BQUEsS0FBVyxRQUFRO0lBQ3JCQSxNQUFBLEdBQVMsQ0FBQztFQUNaO0VBQ0EsSUFBSUMsR0FBQSxLQUFRLFFBQVE7SUFDbEJBLEdBQUEsR0FBTSxDQUFDO0VBQ1Q7RUFDQUgsTUFBQSxD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SUFDVDtJQUNBQSxNQUFBLENBQU9zMkIsYUFBQSxDQUFjRSxPQUFNO0lBQzNCLE9BQU94MkIsTUFBQTtFQUNUO0FBQ0Y7QUFDQVMsTUFBQSxDQUFPSSxJQUFBLENBQUsyeUIsVUFBVSxFQUFFMXlCLE9BQUEsQ0FBUTQxQixjQUFBLElBQWtCO0VBQ2hEajJCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLMnlCLFVBQUEsQ0FBV2tELGNBQUEsQ0FBZSxFQUFFNTFCLE9BQUEsQ0FBUTYxQixXQUFBLElBQWU7SUFDN0QzMkIsTUFBQSxDQUFPMkcsU0FBQSxDQUFVZ3dCLFdBQUEsSUFBZW5ELFVBQUEsQ0FBV2tELGNBQUEsRUFBZ0JDLFdBQUE7RUFDN0QsQ0FBQztBQUNILENBQUM7QUFDRDMyQixNQUFBLENBQU91MkIsR0FBQSxDQUFJLENBQUN0bUIsTUFBQSxFQUFRdUIsUUFBUSxDQUFDOzs7QUh4akg3QixJQUFPdFIscUJBQUEsR0FBUUYsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLy4uLy4uL3B1YmxpYy9wcmFnbWF0ZS11aS9zcmMvb3V0In0=