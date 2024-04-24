System.register(["react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["framer-motion","11.0.25"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep)],
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

// .beyond/uimport/temp/framer-motion.11.0.25.js
var framer_motion_11_0_25_exports = {};
__export(framer_motion_11_0_25_exports, {
  AcceleratedAnimation: () => AcceleratedAnimation,
  AnimatePresence: () => AnimatePresence,
  AnimateSharedLayout: () => AnimateSharedLayout,
  DeprecatedLayoutGroupContext: () => DeprecatedLayoutGroupContext,
  DragControls: () => DragControls,
  FlatTree: () => FlatTree,
  LayoutGroup: () => LayoutGroup,
  LayoutGroupContext: () => LayoutGroupContext,
  LazyMotion: () => LazyMotion,
  MotionConfig: () => MotionConfig,
  MotionConfigContext: () => MotionConfigContext,
  MotionContext: () => MotionContext,
  MotionGlobalConfig: () => MotionGlobalConfig,
  MotionValue: () => MotionValue,
  PresenceContext: () => PresenceContext,
  Reorder: () => Reorder,
  SwitchLayoutGroupContext: () => SwitchLayoutGroupContext,
  VisualElement: () => VisualElement,
  addPointerEvent: () => addPointerEvent,
  addPointerInfo: () => addPointerInfo,
  addScaleCorrector: () => addScaleCorrector,
  animate: () => animate,
  animateValue: () => animateValue,
  animateVisualElement: () => animateVisualElement,
  animationControls: () => animationControls,
  animations: () => animations,
  anticipate: () => anticipate,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  buildTransform: () => buildTransform,
  calcLength: () => calcLength,
  cancelFrame: () => cancelFrame,
  cancelSync: () => cancelSync,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  clamp: () => clamp,
  color: () => color,
  complex: () => complex,
  createBox: () => createBox,
  createDomMotionComponent: () => createDomMotionComponent,
  createMotionComponent: () => createMotionComponent,
  createScopedAnimate: () => createScopedAnimate,
  cubicBezier: () => cubicBezier,
  delay: () => delay,
  disableInstantTransitions: () => disableInstantTransitions,
  distance: () => distance,
  distance2D: () => distance2D,
  domAnimation: () => domAnimation,
  domMax: () => domMax,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  filterProps: () => filterProps,
  frame: () => frame,
  frameData: () => frameData,
  inView: () => inView,
  interpolate: () => interpolate,
  invariant: () => invariant,
  isBrowser: () => isBrowser,
  isDragActive: () => isDragActive,
  isMotionComponent: () => isMotionComponent,
  isMotionValue: () => isMotionValue,
  isValidMotionProp: () => isValidMotionProp,
  m: () => m,
  makeUseVisualState: () => makeUseVisualState,
  mirrorEasing: () => mirrorEasing,
  mix: () => mix,
  motion: () => motion,
  motionValue: () => motionValue,
  optimizedAppearDataAttribute: () => optimizedAppearDataAttribute,
  pipe: () => pipe,
  progress: () => progress,
  px: () => px,
  resolveMotionValue: () => resolveMotionValue,
  reverseEasing: () => reverseEasing,
  scroll: () => scroll,
  scrollInfo: () => scrollInfo,
  spring: () => spring,
  stagger: () => stagger,
  startOptimizedAppearAnimation: () => startOptimizedAppearAnimation,
  steps: () => steps,
  sync: () => sync,
  transform: () => transform,
  unwrapMotionComponent: () => unwrapMotionComponent,
  useAnimate: () => useAnimate,
  useAnimation: () => useAnimation,
  useAnimationControls: () => useAnimationControls,
  useAnimationFrame: () => useAnimationFrame,
  useCycle: () => useCycle,
  useDeprecatedAnimatedState: () => useAnimatedState,
  useDeprecatedInvertedScale: () => useInvertedScale,
  useDomEvent: () => useDomEvent,
  useDragControls: () => useDragControls,
  useElementScroll: () => useElementScroll,
  useForceUpdate: () => useForceUpdate,
  useInView: () => useInView,
  useInstantLayoutTransition: () => useInstantLayoutTransition,
  useInstantTransition: () => useInstantTransition,
  useIsPresent: () => useIsPresent,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect,
  useMotionTemplate: () => useMotionTemplate,
  useMotionValue: () => useMotionValue,
  useMotionValueEvent: () => useMotionValueEvent,
  usePresence: () => usePresence,
  useReducedMotion: () => useReducedMotion,
  useReducedMotionConfig: () => useReducedMotionConfig,
  useResetProjection: () => useResetProjection,
  useScroll: () => useScroll,
  useSpring: () => useSpring,
  useTime: () => useTime,
  useTransform: () => useTransform,
  useUnmountEffect: () => useUnmountEffect,
  useVelocity: () => useVelocity,
  useViewportScroll: () => useViewportScroll,
  useWillChange: () => useWillChange,
  visualElementStore: () => visualElementStore,
  warning: () => warning,
  wrap: () => wrap
});
module.exports = __toCommonJS(framer_motion_11_0_25_exports);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react = require("react@18.2.0");
var MotionConfigContext = (0, import_react.createContext)({
  transformPagePoint: p => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react2 = require("react@18.2.0");
var MotionContext = (0, import_react2.createContext)({});

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react3 = require("react@18.2.0");
var PresenceContext = (0, import_react3.createContext)(null);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react4 = require("react@18.2.0");
var useIsomorphicLayoutEffect = isBrowser ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react5 = require("react@18.2.0");
var LazyContext = (0, import_react5.createContext)({
  strict: false
});

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = str => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
var Queue = class {
  constructor() {
    this.order = [];
    this.scheduled = /* @__PURE__ */new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2)) {
      this.scheduled.add(process2);
      this.order.push(process2);
      return true;
    }
  }
  remove(process2) {
    const index = this.order.indexOf(process2);
    if (index !== -1) {
      this.order.splice(index, 1);
      this.scheduled.delete(process2);
    }
  }
  clear() {
    this.order.length = 0;
    this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue();
  let nextFrame = new Queue();
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    cancel: callback => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    process: frameData2 => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = thisFrame.order[i];
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
          callback(frameData2);
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  const processStep = stepId => {
    steps2[stepId].process(state);
  };
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame) wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = process2 => stepsOrder.forEach(key => steps2[key].cancel(process2));
  return {
    schedule,
    cancel,
    state,
    steps: steps2
  };
}

// node_modules/framer-motion/dist/es/frameloop/microtask.mjs
var {
  schedule: microtask,
  cancel: cancelMicrotask
} = createRenderBatcher(queueMicrotask, false);

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react6 = require("react@18.2.0");
function useVisualElement(Component2, visualState, props, createVisualElement2) {
  const {
    visualElement: parent
  } = (0, import_react6.useContext)(MotionContext);
  const lazyContext = (0, import_react6.useContext)(LazyContext);
  const presenceContext = (0, import_react6.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react6.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react6.useRef)();
  createVisualElement2 = createVisualElement2 || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement2) {
    visualElementRef.current = createVisualElement2(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  (0, import_react6.useInsertionEffect)(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  const wantsHandoff = (0, import_react6.useRef)(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement) return;
    microtask.postRender(visualElement.render);
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react6.useEffect)(() => {
    if (!visualElement) return;
    visualElement.updateFeatures();
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      wantsHandoff.current = false;
      window.HandoffComplete = true;
    }
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react7 = require("react@18.2.0");
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react7.useCallback)(instance => {
    instance && visualState.mount && visualState.mount(instance);
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(name => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const {
      initial,
      animate: animate2
    } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react8 = require("react@18.2.0");
function useCreateMotionContext(props) {
  const {
    initial,
    animate: animate2
  } = getCurrentTreeVariants(props, (0, import_react8.useContext)(MotionContext));
  return (0, import_react8.useMemo)(() => ({
    initial,
    animate: animate2
  }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: props => featureProps[key].some(name => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react9 = require("react@18.2.0");
var LayoutGroupContext = (0, import_react9.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react10 = require("react@18.2.0");
var SwitchLayoutGroupContext = (0, import_react10.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
var React = __toESM(require("react@18.2.0"), 0);
var import_react11 = require("react@18.2.0");
function createMotionComponent({
  preloadedFeatures: preloadedFeatures2,
  createVisualElement: createVisualElement2,
  useRender,
  useVisualState: useVisualState2,
  Component: Component2
}) {
  preloadedFeatures2 && loadFeatures(preloadedFeatures2);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react11.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const {
      isStatic
    } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement2);
      const initialLayoutGroupConfig = (0, import_react11.useContext)(SwitchLayoutGroupContext);
      const isStrict = (0, import_react11.useContext)(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout2 = context.visualElement.loadFeatures(configAndProps, isStrict, preloadedFeatures2, initialLayoutGroupConfig);
      }
    }
    return React.createElement(MotionContext.Provider, {
      value: context
    }, MeasureLayout2 && context.visualElement ? React.createElement(MeasureLayout2, {
      visualElement: context.visualElement,
      ...configAndProps
    }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
  }
  const ForwardRefComponent = (0, import_react11.forwardRef)(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({
  layoutId
}) {
  const layoutGroupId = (0, import_react11.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (typeof Component2 !== "string" || Component2.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component2) > -1 || /[A-Z]/u.test(Component2)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, {
  layout: layout2,
  layoutId
}) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = value => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform2, {
  enableHardwareAcceleration = true,
  allowTransformNone = true
}, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform2[key] !== void 0) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform2[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform2.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = token => key => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var startsAsVariableToken = checkStringStartsWith("var(--");
var isCSSVariableToken = value => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken) return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => {
  if (v > max) return max;
  if (v < min) return min;
  return v;
};

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
var alpha = {
  ...number,
  transform: v => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = v => Math.round(v * 1e5) / 1e5;
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function isString(v) {
  return typeof v === "string";
}

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  backgroundPositionX: px,
  backgroundPositionY: px,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const {
    style,
    vars,
    transform: transform2,
    transformOrigin
  } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      if (!transformIsNone) continue;
      if (value !== (valueType.default || 0)) transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react12 = require("react@18.2.0");
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({
  transformTemplate
}, visualState, isStatic) {
  return (0, import_react12.useMemo)(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = key => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  shouldForward = key => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const {
    attrs,
    style,
    dimensions
  } = state;
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0) attrs.x = attrX;
  if (attrY !== void 0) attrs.y = attrY;
  if (attrScale !== void 0) attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = tag => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react13 = require("react@18.2.0");
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = (0, import_react13.useMemo)(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: {
        ...state.style
      }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = {
      ...rawStyles,
      ...visualProps.style
    };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react14 = require("react@18.2.0");
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, ref, {
    latestValues
  }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = Component2 !== import_react14.Fragment ? {
      ...filteredProps,
      ...visualProps,
      ref
    } : {};
    const {
      children
    } = props;
    const renderedChildren = (0, import_react14.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react14.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, {
  style,
  vars
}, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  var _a;
  const {
    style
  } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react15 = require("react@18.2.0");
function useConstant(init) {
  const ref = (0, import_react15.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = v => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = v => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = v => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react16 = require("react@18.2.0");
function makeState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3,
  createRenderState,
  onMount
}, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = instance => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = config => (props, isStatic) => {
  const context = (0, import_react16.useContext)(MotionContext);
  const presenceContext = (0, import_react16.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let {
    initial,
    animate: animate2
  } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0) initial = context.initial;
    if (animate2 === void 0) animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(definition => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const {
        transitionEnd,
        transition,
        ...target
      } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = any => any;

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var {
  schedule: frame,
  cancel: cancelFrame,
  state: frameData,
  steps
} = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, {
      renderState,
      latestValues
    }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(() => {
        buildSVGAttrs(renderState, latestValues, {
          enableHardwareAcceleration: false
        }, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, {
  forwardMotionProps = false
}, preloadedFeatures2, createVisualElement2) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures: preloadedFeatures2,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement2,
    Component: Component2
  };
}

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = {
  passive: true
}) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = event => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = handler => {
  return event => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => v => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal) openHorizontal();
      if (openVertical) openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive()) return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      props[callbackName](event, info);
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler) return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      if (this.isPressing) return;
      this.removeEndListeners();
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd()) return;
        const {
          onTap,
          onTapCancel,
          globalTapTarget
        } = this.node.getProps();
        !globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = keydownEvent => {
        if (keydownEvent.key !== "Enter" || this.isPressing) return;
        const handleKeyup = keyupEvent => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const {
              onTap
            } = this.node.getProps();
            if (onTap) onTap(event, info);
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing) return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const {
      onTapStart,
      whileTap
    } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      onTapStart(event, info);
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel
    } = this.node.getProps();
    if (onTapCancel) onTapCancel(event, info);
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(props.onTapStart || props["onPointerStart"])
    });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */new WeakMap();
var observers = /* @__PURE__ */new WeakMap();
var fireObserverCallback = entry => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = entries => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({
  root,
  ...options
}) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
      root,
      ...options
    });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const {
      viewport = {}
    } = this.node.getProps();
    const {
      root,
      margin: rootMargin,
      amount = "some",
      once
    } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = entry => {
      const {
        isIntersecting
      } = entry;
      if (this.isInView === isIntersecting) return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const {
        onViewportEnter,
        onViewportLeave
      } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") return;
    const {
      props,
      prevProps
    } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
};
function hasViewportOptionChanged({
  viewport = {}
}, {
  viewport: prevViewport = {}
} = {}) {
  return name => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = seconds => seconds * 1e3;
var millisecondsToSeconds = milliseconds => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = target => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, {
  keyframes: keyframes2
}) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({
  when,
  delay: _delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  repeat,
  repeatType,
  repeatDelay,
  from,
  elapsed,
  ...transition
}) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull = value => value !== null;
function getFinalKeyframe(keyframes2, {
  repeat,
  repeatType = "loop"
}, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}

// node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: newTime => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = v => /^0[^.\s]+$/u.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = v => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token) return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
var isNumOrPxType = v => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, {
  transform: transform2
}) => {
  if (transform2 === "none" || !transform2) return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/u);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/u);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter(key => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  width: ({
    x
  }, {
    paddingLeft = "0",
    paddingRight = "0"
  }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({
    y
  }, {
    paddingTop = "0",
    paddingBottom = "0"
  }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, {
    top
  }) => parseFloat(top),
  left: (_bbox, {
    left
  }) => parseFloat(left),
  bottom: ({
    y
  }, {
    top
  }) => parseFloat(top) + (y.max - y.min),
  right: ({
    x
  }, {
    left
  }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = v => type => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: v => v === "auto",
  parse: v => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = v => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter(resolver => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map(resolver => resolver.element));
    const transformsToRestore = /* @__PURE__ */new Map();
    elementsToMeasure.forEach(element => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length) return;
      transformsToRestore.set(element, removeNonTranslationalTransform(element));
      element.render();
    });
    resolversToMeasure.forEach(resolver => resolver.measureInitialState());
    elementsToMeasure.forEach(element => {
      element.render();
    });
    resolversToMeasure.forEach(resolver => resolver.measureEndState());
    resolversToMeasure.forEach(resolver => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach(resolver => resolver.complete());
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach(resolver => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.isComplete = false;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.isScheduled = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.isScheduled = true;
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const {
      unresolvedKeyframes,
      name,
      element,
      motionValue: motionValue2
    } = this;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null) {
        if (i === 0) {
          const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
          const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
          if (currentValue !== void 0) {
            unresolvedKeyframes[0] = currentValue;
          } else if (element && name) {
            const valueAsRead = element.readValue(name, finalKeyframe);
            if (valueAsRead !== void 0 && valueAsRead !== null) {
              unresolvedKeyframes[0] = valueAsRead;
            }
          }
          if (unresolvedKeyframes[0] === void 0) {
            unresolvedKeyframes[0] = finalKeyframe;
          }
          if (motionValue2 && currentValue === void 0) {
            motionValue2.set(unresolvedKeyframes[0]);
          }
        } else {
          unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
      }
    }
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    this.isComplete = true;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
    toResolve.delete(this);
  }
  cancel() {
    if (!this.isComplete) {
      this.isScheduled = false;
      toResolve.delete(this);
    }
  }
  resume() {
    if (!this.isComplete) this.scheduleResolve();
  }
};

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => v => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => v => {
  if (!isString(v)) return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = v => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: v => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, parsedValue => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return {
    values,
    split,
    indexes,
    types
  };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const {
    split,
    types
  } = analyseComplexValue(source);
  const numSections = split.length;
  return v => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = v => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2) return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = key => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    if (typeof unresolvedKeyframes[i] === "string" && unresolvedKeyframes[i] !== "none" && unresolvedKeyframes[i] !== "0") {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.owner, true);
  }
  readKeyframes() {
    const {
      unresolvedKeyframes,
      element,
      name
    } = this;
    if (!element.current) return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      const keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string" && isCSSVariableToken(keyframe)) {
        const resolved = getVariableValue(keyframe, element.current);
        if (resolved !== void 0) {
          unresolvedKeyframes[i] = resolved;
        }
      }
    }
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return this.resolveNoneKeyframes();
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType) return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes,
      name
    } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const {
      element,
      unresolvedKeyframes,
      name
    } = this;
    if (!element.current) return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    var _a;
    const {
      element,
      name,
      unresolvedKeyframes
    } = this;
    if (!element.current) return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null) {
      this.finalKeyframe = finalKeyframe;
    }
    if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0) result = callback();
    return result;
  };
}

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex") return false;
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1) return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current) return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) return false;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || type === "spring" && velocity;
}

// node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var BaseAnimation = class {
  constructor({
    autoplay = true,
    delay: delay2 = 0,
    type = "keyframes",
    repeat = 0,
    repeatDelay = 0,
    repeatType = "loop",
    ...options
  }) {
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.options = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      ...options
    };
    this.updateFinishedPromise();
  }
  get resolved() {
    if (!this._resolved && !this.hasAttemptedResolve) {
      flushKeyframeResolvers();
    }
    return this._resolved;
  }
  onKeyframesResolved(keyframes2, finalKeyframe) {
    this.hasAttemptedResolve = true;
    const {
      name,
      type,
      velocity,
      delay: delay2,
      onComplete,
      onUpdate,
      isGenerator
    } = this.options;
    if (!isGenerator && !canAnimate(keyframes2, name, type, velocity)) {
      if (instantAnimationState.current || !delay2) {
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
        this.resolveFinishedPromise();
        return;
      } else {
        this.options.duration = 0;
      }
    }
    const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
    if (resolvedAnimation === false) return;
    this._resolved = {
      keyframes: keyframes2,
      finalKeyframe,
      ...resolvedAnimation
    };
    this.onPostResolved();
  }
  onPostResolved() {}
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(resolve => {
      this.resolveFinishedPromise = resolve;
    });
  }
};

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some(key => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({
  keyframes: keyframes2,
  restDelta,
  restSpeed,
  ...options
}) {
  const origin = keyframes2[0];
  const target = keyframes2[keyframes2.length - 1];
  const state = {
    done: false,
    value: origin
  };
  const {
    stiffness,
    damping,
    mass,
    duration,
    velocity,
    isResolvedFromDuration
  } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = t => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: t => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({
  keyframes: keyframes2,
  velocity = 0,
  power = 0.8,
  timeConstant = 325,
  bounceDamping = 10,
  bounceStiffness = 500,
  modifyTarget,
  min,
  max,
  restDelta = 0.5,
  restSpeed
}) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = v => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = v => {
    if (min === void 0) return max;
    if (max === void 0) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - origin;
  const calcDelta = t => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: t => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return noop;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = ease2 => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = easing => p => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = p => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = p => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = definition => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha: alpha2
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = v => colorTypes.find(type => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  invariant(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = {
    ...fromRGBA
  };
  return v => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/utils/mix/complex.mjs
function mixImmediate(a, b) {
  return p => p > 0 ? b : a;
}
function mixNumber2(a, b) {
  return p => mixNumber(a, b, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return p => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = {
    ...a,
    ...b
  };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  const orderedOrigin = [];
  const pointers = {
    color: 0,
    var: 0,
    number: 0
  };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/framer-motion/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber(from, to, p);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, {
  clamp: isClamp = true,
  ease: ease2,
  mixer
} = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1) return () => output[0];
  if (inputLength === 2 && input[0] === input[1]) return () => output[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = v => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({
  duration = 300,
  keyframes: keyframeValues,
  times,
  ease: ease2 = "easeInOut"
}) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: t => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var frameloopDriver = update => {
  const passTimestamp = ({
    timestamp
  }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
var generators = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
var percentToProgress = percent2 => percent2 / 100;
var MainThreadAnimation = class extends BaseAnimation {
  constructor({
    KeyframeResolver: KeyframeResolver$1 = KeyframeResolver,
    ...options
  }) {
    super(options);
    this.holdTime = null;
    this.startTime = null;
    this.cancelTime = null;
    this.currentTime = 0;
    this.playbackSpeed = 1;
    this.pendingPlayState = "running";
    this.state = "idle";
    const {
      name,
      motionValue: motionValue2,
      keyframes: keyframes2
    } = this.options;
    const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    if (name && motionValue2 && motionValue2.owner) {
      this.resolver = motionValue2.owner.resolveKeyframes(keyframes2, onResolved, name, motionValue2);
    } else {
      this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2);
    }
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes$1) {
    const {
      type = "keyframes",
      repeat = 0,
      repeatDelay = 0,
      repeatType,
      velocity = 0
    } = this.options;
    const generatorFactory = generators[type] || keyframes;
    let mapPercentToKeyframes;
    let mirroredGenerator;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      if (true) {
        invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
      }
      mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({
      ...this.options,
      keyframes: keyframes$1
    });
    if (repeatType === "mirror") {
      mirroredGenerator = generatorFactory({
        ...this.options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const {
      calculatedDuration
    } = generator;
    const resolvedDuration = calculatedDuration + repeatDelay;
    const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    return {
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      calculatedDuration,
      resolvedDuration,
      totalDuration
    };
  }
  onPostResolved() {
    const {
      autoplay = true
    } = this.options;
    this.play();
    if (this.pendingPlayState === "paused" || !autoplay) {
      this.pause();
    } else {
      this.state = this.pendingPlayState;
    }
  }
  tick(timestamp, sample = false) {
    const {
      resolved
    } = this;
    if (!resolved) {
      const {
        keyframes: keyframes3
      } = this.options;
      return {
        done: true,
        value: keyframes3[keyframes3.length - 1]
      };
    }
    const {
      finalKeyframe,
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      keyframes: keyframes2,
      calculatedDuration,
      totalDuration,
      resolvedDuration
    } = resolved;
    if (this.startTime === null) return generator.next(0);
    const {
      delay: delay2,
      repeat,
      repeatType,
      repeatDelay,
      onUpdate
    } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
    const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? {
      done: false,
      value: keyframes2[0]
    } : frameGenerator.next(elapsed);
    if (mapPercentToKeyframes) {
      state.value = mapPercentToKeyframes(state.value);
    }
    let {
      done
    } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && finalKeyframe !== void 0) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  get duration() {
    const {
      resolved
    } = this;
    return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.holdTime !== null || this.speed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.speed;
    }
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (!this.resolver.isScheduled) {
      this.resolver.resume();
    }
    if (!this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const {
      driver = frameloopDriver,
      onPlay
    } = this.options;
    if (!this.driver) {
      this.driver = driver(timestamp => this.tick(timestamp));
    }
    onPlay && onPlay();
    const now2 = this.driver.now();
    if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime || this.state === "finished") {
      this.startTime = now2;
    }
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.cancelTime = this.startTime;
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    var _a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused";
    this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle") return;
    this.teardown();
    const {
      onStop
    } = this.options;
    onStop && onStop();
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.pendingPlayState = this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.teardown();
    this.state = "finished";
    const {
      onComplete
    } = this.options;
    onComplete && onComplete();
  }
  cancel() {
    if (this.cancelTime !== null) {
      this.tick(this.cancelTime);
    }
    this.teardown();
    this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    this.startTime = this.cancelTime = null;
    this.resolver.cancel();
  }
  stopDriver() {
    if (!this.driver) return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(time2) {
    this.startTime = 0;
    return this.tick(time2, true);
  }
};
function animateValue(options) {
  return new MainThreadAnimation(options);
}

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = easing => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing) return void 0;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function animateStyle(element, valueName, keyframes2, {
  delay: delay2 = 0,
  duration = 300,
  repeat = 0,
  repeatType = "loop",
  ease: ease2,
  times
} = {}) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times) keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2);
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var acceleratedValues = /* @__PURE__ */new Set(["opacity", "clipPath", "filter", "transform"]);
var sampleDelta = 10;
var maxDuration2 = 2e4;
function requiresPregeneratedKeyframes(options) {
  return options.type === "spring" || options.name === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
  const sampleAnimation = new MainThreadAnimation({
    ...options,
    keyframes: keyframes2,
    repeat: 0,
    delay: 0,
    isGenerator: true
  });
  let state = {
    done: false,
    value: keyframes2[0]
  };
  const pregeneratedKeyframes = [];
  let t = 0;
  while (!state.done && t < maxDuration2) {
    state = sampleAnimation.sample(t);
    pregeneratedKeyframes.push(state.value);
    t += sampleDelta;
  }
  return {
    times: void 0,
    keyframes: pregeneratedKeyframes,
    duration: t - sampleDelta,
    ease: "linear"
  };
}
var AcceleratedAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    const {
      name,
      motionValue: motionValue2,
      keyframes: keyframes2
    } = this.options;
    this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2);
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes2, finalKeyframe) {
    var _a;
    let {
      duration = 300,
      times,
      ease: ease2,
      type,
      motionValue: motionValue2,
      name
    } = this.options;
    if (!((_a = motionValue2.owner) === null || _a === void 0 ? void 0 : _a.current)) {
      return false;
    }
    if (requiresPregeneratedKeyframes(this.options)) {
      const {
        onComplete,
        onUpdate,
        motionValue: motionValue3,
        ...options
      } = this.options;
      const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
      keyframes2 = pregeneratedAnimation.keyframes;
      if (keyframes2.length === 1) {
        keyframes2[1] = keyframes2[0];
      }
      duration = pregeneratedAnimation.duration;
      times = pregeneratedAnimation.times;
      ease2 = pregeneratedAnimation.ease;
      type = "keyframes";
    }
    const animation = animateStyle(motionValue2.owner.current, name, keyframes2, {
      ...this.options,
      duration,
      times,
      ease: ease2
    });
    animation.startTime = time.now();
    if (this.pendingTimeline) {
      animation.timeline = this.pendingTimeline;
      this.pendingTimeline = void 0;
    } else {
      animation.onfinish = () => {
        const {
          onComplete
        } = this.options;
        motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.cancel();
        this.resolveFinishedPromise();
      };
    }
    return {
      animation,
      duration,
      times,
      type,
      ease: ease2,
      keyframes: keyframes2
    };
  }
  get duration() {
    const {
      resolved
    } = this;
    if (!resolved) return 0;
    const {
      duration
    } = resolved;
    return millisecondsToSeconds(duration);
  }
  get time() {
    const {
      resolved
    } = this;
    if (!resolved) return 0;
    const {
      animation
    } = resolved;
    return millisecondsToSeconds(animation.currentTime || 0);
  }
  set time(newTime) {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.currentTime = secondsToMilliseconds(newTime);
  }
  get speed() {
    const {
      resolved
    } = this;
    if (!resolved) return 1;
    const {
      animation
    } = resolved;
    return animation.playbackRate;
  }
  set speed(newSpeed) {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.playbackRate = newSpeed;
  }
  get state() {
    const {
      resolved
    } = this;
    if (!resolved) return "idle";
    const {
      animation
    } = resolved;
    return animation.playState;
  }
  attachTimeline(timeline) {
    if (!this._resolved) {
      this.pendingTimeline = timeline;
    } else {
      const {
        resolved
      } = this;
      if (!resolved) return noop;
      const {
        animation
      } = resolved;
      animation.timeline = timeline;
      animation.onfinish = null;
    }
    return noop;
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    if (animation.playState === "finished") {
      this.updateFinishedPromise();
    }
    animation.play();
  }
  pause() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.pause();
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle") return;
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation,
      keyframes: keyframes2,
      duration,
      type,
      ease: ease2,
      times
    } = resolved;
    if (animation.playState === "idle" || animation.playState === "finished") {
      return;
    }
    if (this.time) {
      const {
        motionValue: motionValue2,
        onUpdate,
        onComplete,
        ...options
      } = this.options;
      const sampleAnimation = new MainThreadAnimation({
        ...options,
        keyframes: keyframes2,
        duration,
        type,
        ease: ease2,
        times,
        isGenerator: true
      });
      const sampleTime = secondsToMilliseconds(this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    }
    this.cancel();
  }
  complete() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    resolved.animation.finish();
  }
  cancel() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    resolved.animation.cancel();
  }
  static supports(options) {
    const {
      motionValue: motionValue2,
      name,
      repeatDelay,
      repeatType,
      damping,
      type
    } = options;
    return supportsWaapi() && name && acceleratedValues.has(name) && motionValue2 && motionValue2.owner && motionValue2.owner.current instanceof HTMLElement && !motionValue2.owner.getProps().onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }
};

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => onComplete => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let {
    elapsed = 0
  } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  let options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: v => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    options = {
      ...options,
      ...getDefaultTransition(name, options)
    };
  }
  if (options.duration) {
    options.duration = secondsToMilliseconds(options.duration);
  }
  if (options.repeatDelay) {
    options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
  }
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false) {
    options.duration = 0;
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
    shouldSkip = true;
    options.duration = 0;
    options.delay = 0;
  }
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  if (!isHandoff && AcceleratedAnimation.supports(options)) {
    return new AcceleratedAnimation(options);
  } else {
    return new MainThreadAnimation(options);
  }
};

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = value => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  constructor(init, options = {}) {
    this.version = "11.0.25";
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  start(startAnimation) {
    this.stop();
    return new Promise(resolve => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let {
    transitionEnd = {},
    transition = {},
    ...target
  } = resolved || {};
  target = {
    ...target,
    ...transitionEnd
  };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({
  protectedKeys,
  needsAnimating
}, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, {
  delay: delay2 = 0,
  transitionOverride,
  type
} = {}) {
  var _a;
  let {
    transition = visualElement.getDefaultTransition(),
    transitionEnd,
    ...target
  } = targetAndTransition;
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride) transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      elapsed: 0,
      ...getValueTransition(transition || {}, key)
    };
    let isHandoff = false;
    if (window.HandoffAppearAnimations) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        const elapsed = window.HandoffAppearAnimations(appearId, key);
        if (elapsed !== null) {
          valueTransition.elapsed = elapsed;
          isHandoff = true;
        }
      }
    }
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
      type: false
    } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
        animation.then(() => willChange.remove(key));
      }
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
  let {
    transition = visualElement.getDefaultTransition() || {}
  } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const {
    when
  } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map(variant => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    frame.postRender(() => {
      visualElement.notify("AnimationComplete", definition);
    });
  });
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return animations2 => Promise.all(animations2.map(({
    animation,
    options
  }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = type => (acc, definition) => {
    var _a;
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    if (resolved) {
      const {
        transition,
        transitionEnd,
        ...target
      } = resolved;
      acc = {
        ...acc,
        ...target,
        ...transitionEnd
      };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = {
        ...encounteredKeys
      };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false) resolvedValues = {};
      const {
        prevResolvedValues = {}
      } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = key => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2) motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key)) continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = {
          ...encounteredKeys,
          ...resolvedValues
        };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
        animations2.push(...definitionList.map(animation => ({
          animation,
          options: {
            type
          }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach(key => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2) motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget === void 0 ? null : fallbackTarget;
      });
      animations2.push({
        animation: fallbackAnimation
      });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    var _a;
    if (state[type].isActive === isActive) return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(child => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const {
      animate: animate2
    } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate2)) {
      this.unmount = animate2.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: animate2
    } = this.node.getProps();
    const {
      animate: prevAnimate
    } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: isPresent2,
      onExitComplete
    } = this.node.presenceContext;
    const {
      isPresent: prevIsPresent
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2);
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const {
      register
    } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, {
    transformPagePoint,
    contextWindow,
    dragSnapToOrigin = false
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      const {
        point: point3
      } = info2;
      const {
        timestamp: timestamp2
      } = frameData;
      this.history.push({
        ...point3,
        timestamp: timestamp2
      });
      const {
        onStart,
        onMove
      } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const {
        onEnd,
        onSessionEnd,
        resumeAnimation
      } = this.handlers;
      if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event)) return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const {
      point: point2
    } = initialInfo;
    const {
      timestamp
    } = frameData;
    this.history = [{
      ...point2,
      timestamp
    }];
    const {
      onSessionStart
    } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo({
  point: point2
}, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point2, {
  min,
  max
}, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mixNumber(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mixNumber(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, {
  top,
  left,
  bottom,
  right
}) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return {
    min,
    max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({
  min: 0,
  max: 0
});
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({
  top,
  left,
  right,
  bottom
}) {
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertBoxToBoundingBox({
  x,
  y
}) {
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2) return point2;
  const topLeft = transformPoint2({
    x: point2.left,
    y: point2.top
  });
  const bottomRight = transformPoint2({
    x: point2.right,
    y: point2.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({
  scale: scale2,
  scaleX,
  scaleY
}) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, {
  x,
  y
}) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength) return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const instance = node.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale2) {
  if (Number.isInteger(scale2)) return scale2;
  return scale2 > 1.0000000000001 || scale2 < 0.999999999999 ? scale2 : 1;
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const {
    scroll: scroll2
  } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({
  current
}) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, {
    snapToCursor = false
  } = {}) {
    const {
      presenceContext
    } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false) return;
    const onSessionStart = event => {
      const {
        dragSnapToOrigin: dragSnapToOrigin2
      } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      const {
        drag: drag2,
        dragPropagation,
        onDragStart
      } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock) this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock) return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis(axis => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const {
            projection
          } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) onDragStart(event, info);
      const {
        animationState
      } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock) return;
      const {
        offset
      } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis(axis => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const {
      dragSnapToOrigin
    } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    const {
      velocity
    } = info;
    this.startAnimation(velocity);
    const {
      onDragEnd
    } = this.getProps();
    if (onDragEnd) onDragEnd(event, info);
  }
  cancel() {
    this.isDragging = false;
    const {
      projection,
      animationState
    } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const {
      dragPropagation
    } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const {
      drag: drag2
    } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const {
      dragConstraints,
      dragElastic
    } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(axis => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: constraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!constraints || !isRefObject(constraints)) return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const {
      projection
    } = this.visualElement;
    if (!projection || !projection.layout) return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const {
      drag: drag2,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis(axis => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement));
  }
  stopAnimation() {
    eachAxis(axis => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis(axis => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  getAxisMotionValue(axis) {
    const dragKey = "_drag" + axis.toUpperCase();
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point2) {
    eachAxis(axis => {
      const {
        drag: drag2
      } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection)) return;
      const {
        projection
      } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const {
          min,
          max
        } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mixNumber(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: drag2,
      dragConstraints
    } = this.getProps();
    const {
      projection
    } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    const boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(axis => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({
          min: latest,
          max: latest
        }, this.constraints[axis]);
      }
    });
    const {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(axis => {
      if (!shouldDrag(axis, drag2, null)) return;
      const axisValue = this.getAxisMotionValue(axis);
      const {
        min,
        max
      } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", event => {
      const {
        drag: drag2,
        dragListener = true
      } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const {
        dragConstraints
      } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const {
      projection
    } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({
      delta,
      hasLayoutChanged
    }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis(axis => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2) return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const {
      drag: drag2 = false,
      dragDirectionLock = false,
      dragPropagation = false,
      dragConstraints = false,
      dragElastic = defaultElastic,
      dragMomentum = true
    } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const {
      dragControls
    } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = handler => (event, info) => {
  if (handler) {
    handler(event, info);
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart,
      onPanStart,
      onPan,
      onPanEnd
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) onPanEnd(event, info);
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", event => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react17 = require("react@18.2.0");
function usePresence() {
  const context = (0, import_react17.useContext)(PresenceContext);
  if (context === null) return [true, null];
  const {
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  const id4 = (0, import_react17.useId)();
  (0, import_react17.useEffect)(() => register(id4), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id4);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react17.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target) return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, {
    treeScale,
    projectionDelta
  }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5) return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react18 = __toESM(require("react@18.2.0"), 0);
var MeasureLayoutWithContext = class extends import_react18.default.Component {
  componentDidMount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    const {
      projection
    } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group) layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      layoutDependency,
      visualElement,
      drag: drag2,
      isPresent: isPresent2
    } = this.props;
    const projection = visualElement.projection;
    if (!projection) return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      projection
    } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup: promoteContext
    } = this.props;
    const {
      projection
    } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const {
      safeToRemove
    } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react18.useContext)(LayoutGroupContext);
  return import_react18.default.createElement(MeasureLayoutWithContext, {
    ...props,
    layoutGroup,
    switchLayoutGroup: (0, import_react18.useContext)(SwitchLayoutGroupContext),
    isPresent: isPresent2,
    safeToRemove
  });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = value => typeof value === "string" ? parseFloat(value) : value;
var isPx = value => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return p => {
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function boxEqualsRounded(a, b) {
  return Math.round(a.x.min) === Math.round(b.x.min) && Math.round(a.x.max) === Math.round(b.x.max) && Math.round(a.y.min) === Math.round(b.y.min) && Math.round(a.y.max) === Math.round(b.y.max);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex(member => node === member);
    if (indexOfNode === 0) return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const {
        crossfade
      } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(node => {
      const {
        options,
        resumingFrom
      } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach(node => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const {
      rotate,
      rotateX,
      rotateY,
      skewX,
      skewY
    } = latestTransform;
    if (rotate) transform2 += `rotate(${rotate}deg) `;
    if (rotateX) transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY) transform2 += `rotateY(${rotateY}deg) `;
    if (skewX) transform2 += `skewX(${skewX}deg) `;
    if (skewY) transform2 += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({
    timestamp
  }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = {
  visibility: "hidden"
};
var animationTarget = 1e3;
var id2 = 0;
var projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const {
    latestValues
  } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function createProjectionNode({
  attachResizeListener,
  defaultParent,
  measureScroll,
  checkIsScrollRoot,
  resetTransform
}) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = /* @__PURE__ */new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const {
        layoutId,
        layout: layout2,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({
          delta,
          hasLayoutChanged,
          hasRelativeTargetChanged,
          layout: newLayout
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const {
            onLayoutAnimationStart,
            onLayoutAnimationComplete
          } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const {
        visualElement
      } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const {
        layoutId,
        layout: layout2
      } = this.options;
      if (layoutId === void 0 && !layout2) return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      if (window.HandoffCancelAllAnimations) {
        window.HandoffCancelAllAnimations();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      steps.update.process(frameData);
      steps.preRender.process(frameData);
      steps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(() => this.update());
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance) return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement
      } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      if (!resetTransform) return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return createBox();
      const box = visualElement.measureViewportBox();
      const {
        scroll: scroll2
      } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.offset.x);
        translateAxis(box.y, scroll2.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const {
          scroll: scroll2,
          options
        } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const {
              scroll: rootScroll
            } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent) return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget);
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      if (!this.layout || !(layout2 || layoutId)) return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta) return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      projectionFrameData.resolvedTargetDeltas++;
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId)) return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const {
        target
      } = lead;
      if (!target) {
        if (this.projectionTransform) {
          this.projectionDelta = createDelta();
          this.projectionTransform = "none";
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.scheduleRender && this.options.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = {
        ...this.latestValues
      };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = latest => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget) prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: latest => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout: layout2,
        latestValues
      } = lead;
      if (!targetWithTransforms || !target || !layout2) return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset,
      transition,
      preserveFollowOpacity
    } = {}) {
      const stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition) this.setOptions({
        transition
      });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return;
      let hasDistortingTransform = false;
      const {
        latestValues
      } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform) return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG) return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const {
        x,
        y
      } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0) continue;
        const {
          correct,
          applyTo
        } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(node => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const {
      layoutBox: layout2,
      measuredBox: measuredLayout
    } = node.layout;
    const {
      animationType
    } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const {
          snapshot: parentSnapshot,
          layout: parentLayout
        } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const {
      onExitComplete
    } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  projectionFrameData.totalNodes++;
  if (!node.parent) return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const {
    visualElement
  } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = string => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: instance => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: instance => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = {
  current: null
};
var hasReducedMotionListener = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const {
    willChange
  } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (true) {
        warnOnce(nextValue.version === "11.0.25", `Attempting to mix Framer Motion versions ${nextValue.version} with 11.0.25 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0) element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */new WeakMap();

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = v => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var numVariantProps = variantProps.length;
function getClosestProjectingNode(visualElement) {
  if (!visualElement) return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
var VisualElement = class {
  constructor({
    parent,
    props,
    presenceContext,
    reducedMotionConfig,
    blockInitialAnimation,
    visualState
  }, options = {}) {
    this.resolveKeyframes = (keyframes2, onComplete, name, value) => {
      return new this.KeyframeResolver(keyframes2, onComplete, name, value, this);
    };
    this.current = null;
    this.children = /* @__PURE__ */new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current) return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => frame.render(this.render, false, true);
    const {
      latestValues,
      renderState
    } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = props.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const {
      willChange,
      ...initialMotionValues
    } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent) this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach(remove => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", latestValue => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
      if (value.owner) value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({
    children,
    ...renderedProps
  }, isStrict, preloadedFeatures2, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout2;
    if (preloadedFeatures2 && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const {
        isEnabled,
        Feature: FeatureConstructor,
        ProjectionNode,
        MeasureLayout: MeasureLayoutComponent
      } = featureDefinitions[name];
      if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout2 = MeasureLayoutComponent;
        }
      }
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, getClosestProjectingNode(this.parent));
      const {
        layoutId,
        layout: layout2,
        drag: drag2,
        dragConstraints,
        layoutScroll,
        layoutRoot
      } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout2;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update();
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : void 0;
    }
    if (!this.isControllingVariants) {
      const context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key, target) {
    var _a;
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a, _b;
    const {
      initial
    } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_b = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom)) === null || _b === void 0 ? void 0 : _b[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target)) return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, {
    vars,
    style
  }) {
    delete vars[key];
    delete style[key];
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, {
    transformPagePoint
  }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children
    } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", latest => {
        if (this.current) this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps, this);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react19 = require("react@18.2.0");
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== import_react19.Fragment,
    enableHardwareAcceleration: true
  });
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
var motion = /* @__PURE__ */createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, preloadedFeatures, createDomVisualElement));
function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, {
    forwardMotionProps: false
  }, preloadedFeatures, createDomVisualElement));
}

// node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
var m = createMotionProxy(createDomMotionConfig);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react20 = require("react@18.2.0");
function useIsMounted() {
  const isMounted = (0, import_react20.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react21 = require("react@18.2.0");
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react21.useState)(0);
  const forceRender = (0, import_react21.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react21.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React2 = __toESM(require("react@18.2.0"), 0);
var import_react22 = require("react@18.2.0");
var PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function PopChild({
  children,
  isPresent: isPresent2
}) {
  const id4 = (0, import_react22.useId)();
  const ref = (0, import_react22.useRef)(null);
  const size = (0, import_react22.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const {
    nonce
  } = (0, import_react22.useContext)(MotionConfigContext);
  (0, import_react22.useInsertionEffect)(() => {
    const {
      width,
      height,
      top,
      left
    } = size.current;
    if (isPresent2 || !ref.current || !width || !height) return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    if (nonce) style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return React2.createElement(PopChildMeasure, {
    isPresent: isPresent2,
    childRef: ref,
    sizeRef: size
  }, React2.cloneElement(children, {
    ref
  }));
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React3 = __toESM(require("react@18.2.0"), 0);
var import_react23 = require("react@18.2.0");
var PresenceChild = ({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  custom,
  presenceAffectsLayout,
  mode
}) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = (0, import_react23.useId)();
  const context = (0, import_react23.useMemo)(() => ({
    id: id4,
    initial,
    isPresent: isPresent2,
    custom,
    onExitComplete: childId => {
      presenceChildren.set(childId, true);
      for (const isComplete of presenceChildren.values()) {
        if (!isComplete) return;
      }
      onExitComplete && onExitComplete();
    },
    register: childId => {
      presenceChildren.set(childId, false);
      return () => presenceChildren.delete(childId);
    }
  }), presenceAffectsLayout ? void 0 : [isPresent2]);
  (0, import_react23.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React3.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = React3.createElement(PopChild, {
      isPresent: isPresent2
    }, children);
  }
  return React3.createElement(PresenceContext.Provider, {
    value: context
  }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */new Map();
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react24 = require("react@18.2.0");
function useUnmountEffect(callback) {
  return (0, import_react24.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var React4 = __toESM(require("react@18.2.0"), 0);
var import_react25 = require("react@18.2.0");
var getChildKey = child => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach(child => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  import_react25.Children.forEach(children, child => {
    if ((0, import_react25.isValidElement)(child)) filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({
  children,
  custom,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true,
  mode = "sync"
}) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const forceRender = (0, import_react25.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exitingChildren = (0, import_react25.useRef)( /* @__PURE__ */new Map()).current;
  const presentChildren = (0, import_react25.useRef)(childrenToRender);
  const allChildren = (0, import_react25.useRef)( /* @__PURE__ */new Map()).current;
  const isInitialRender = (0, import_react25.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exitingChildren.clear();
  });
  if (isInitialRender.current) {
    return React4.createElement(React4.Fragment, null, childrenToRender.map(child => React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      initial: initial ? void 0 : false,
      presenceAffectsLayout,
      mode
    }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
      exitingChildren.set(key, void 0);
    }
  }
  if (mode === "wait" && exitingChildren.size) {
    childrenToRender = [];
  }
  exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1) return;
    const child = allChildren.get(key);
    if (!child) return;
    const insertionIndex = presentKeys.indexOf(key);
    let exitingComponent = component;
    if (!exitingComponent) {
      const onExit = () => {
        exitingChildren.delete(key);
        const leftOverKeys = Array.from(allChildren.keys()).filter(childKey => !targetKeys.includes(childKey));
        leftOverKeys.forEach(leftOverKey => allChildren.delete(leftOverKey));
        presentChildren.current = filteredChildren.filter(presentChild => {
          const presentChildKey = getChildKey(presentChild);
          return presentChildKey === key || leftOverKeys.includes(presentChildKey);
        });
        if (!exitingChildren.size) {
          if (isMounted.current === false) return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      exitingComponent = React4.createElement(PresenceChild, {
        key: getChildKey(child),
        isPresent: false,
        onExitComplete: onExit,
        custom,
        presenceAffectsLayout,
        mode
      }, child);
      exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  });
  childrenToRender = childrenToRender.map(child => {
    const key = child.key;
    return exitingChildren.has(key) ? child : React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      presenceAffectsLayout,
      mode
    }, child);
  });
  if (mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return React4.createElement(React4.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map(child => (0, import_react25.cloneElement)(child)));
};

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var React5 = __toESM(require("react@18.2.0"), 0);
var import_react26 = require("react@18.2.0");
function MotionConfig({
  children,
  isValidProp,
  ...config
}) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = {
    ...(0, import_react26.useContext)(MotionConfigContext),
    ...config
  };
  config.isStatic = useConstant(() => config.isStatic);
  const context = (0, import_react26.useMemo)(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return React5.createElement(MotionConfigContext.Provider, {
    value: context
  }, children);
}

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var React6 = __toESM(require("react@18.2.0"), 0);
var import_react27 = require("react@18.2.0");
function LazyMotion({
  children,
  features,
  strict = false
}) {
  const [, setIsLoaded] = (0, import_react27.useState)(!isLazyBundle(features));
  const loadedRenderer = (0, import_react27.useRef)(void 0);
  if (!isLazyBundle(features)) {
    const {
      renderer,
      ...loadedFeatures
    } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  (0, import_react27.useEffect)(() => {
    if (isLazyBundle(features)) {
      features().then(({
        renderer,
        ...loadedFeatures
      }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return React6.createElement(LazyContext.Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict
    }
  }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react28 = require("react@18.2.0");
var DeprecatedLayoutGroupContext = (0, import_react28.createContext)(null);

// node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = node => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */new Set();
  const subscriptions = /* @__PURE__ */new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: node => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: node => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var React7 = __toESM(require("react@18.2.0"), 0);
var import_react29 = require("react@18.2.0");
var shouldInheritGroup = inherit => inherit === true;
var shouldInheritId = inherit => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({
  children,
  id: id4,
  inherit = true
}) => {
  const layoutGroupContext = (0, import_react29.useContext)(LayoutGroupContext);
  const deprecatedLayoutGroupContext = (0, import_react29.useContext)(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = (0, import_react29.useRef)(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id4 = id4 ? upstreamId + "-" + id4 : upstreamId;
    }
    context.current = {
      id: id4,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = (0, import_react29.useMemo)(() => ({
    ...context.current,
    forceRender
  }), [key]);
  return React7.createElement(LayoutGroupContext.Provider, {
    value: memoizedContext
  }, children);
};

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react30 = require("react@18.2.0");
var ReorderContext = (0, import_react30.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity) return order;
  const index = order.findIndex(item2 => item2.value === value);
  if (index === -1) return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem) return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var React8 = __toESM(require("react@18.2.0"), 0);
var import_react31 = require("react@18.2.0");
function ReorderGroup({
  children,
  as = "ul",
  axis = "y",
  onReorder,
  values,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const order = [];
  const isReordering = (0, import_react31.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex(entry => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({
          value,
          layout: layout2[axis]
        });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current) return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter(value => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react31.useEffect)(() => {
    isReordering.current = false;
  });
  return React8.createElement(Component2, {
    ...props,
    ref: externalRef,
    ignoreStrict: true
  }, React8.createElement(ReorderContext.Provider, {
    value: context
  }, children));
}
var Group = (0, import_react31.forwardRef)(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react32 = require("react@18.2.0");
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const {
    isStatic
  } = (0, import_react32.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react32.useState)(initial);
    (0, import_react32.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = v => {
  return v && typeof v === "object" && v.mix;
};
var getMixer2 = v => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.update(updateValue, false, true);
    const subscriptions = values.map(v => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach(unsubscribe => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var React9 = __toESM(require("react@18.2.0"), 0);
var import_react33 = require("react@18.2.0");
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({
  children,
  style = {},
  value,
  as = "li",
  onDrag,
  layout: layout2 = true,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const context = (0, import_react33.useContext)(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const {
    axis,
    registerItem,
    updateOrder
  } = context;
  return React9.createElement(Component2, {
    drag: axis,
    ...props,
    dragSnapToOrigin: true,
    style: {
      ...style,
      x: point2.x,
      y: point2.y,
      zIndex
    },
    layout: layout2,
    onDrag: (event, gesturePoint) => {
      const {
        velocity
      } = gesturePoint;
      velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
      onDrag && onDrag(event, gesturePoint);
    },
    onLayoutMeasure: measured => registerItem(value, measured),
    ref: externalRef,
    ignoreStrict: true
  }, children);
}
var Item = (0, import_react33.forwardRef)(ReorderItem);

// node_modules/framer-motion/dist/es/components/Reorder/index.mjs
var Reorder = {
  Group,
  Item
};

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react34 = require("react@18.2.0");
function useSpring(source, config = {}) {
  const {
    isStatic
  } = (0, import_react34.useContext)(MotionConfigContext);
  const activeSpringAnimation = (0, import_react34.useRef)(null);
  const value = useMotionValue(isMotionValue(source) ? source.get() : source);
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  (0, import_react34.useInsertionEffect)(() => {
    return value.attach((v, set) => {
      if (isStatic) return set(v);
      const animation = activeSpringAnimation.current;
      if (animation && animation.time === 0) {
        animation.sample(frameData.delta);
      }
      stopAnimation2();
      activeSpringAnimation.current = animateValue({
        keyframes: [value.get(), v],
        velocity: value.getVelocity(),
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01,
        ...config,
        onUpdate: set
      });
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", v => value.set(parseFloat(v)));
    }
  }, [value]);
  return value;
}

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react35 = require("react@18.2.0");
function useMotionValueEvent(value, event, callback) {
  (0, import_react35.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}

// node_modules/framer-motion/dist/es/value/use-velocity.mjs
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  const updateVelocity = () => {
    const latest = value.getVelocity();
    velocity.set(latest);
    if (latest) frame.update(updateVelocity);
  };
  useMotionValueEvent(value, "change", () => {
    frame.update(updateVelocity, false, true);
  });
  return velocity;
}

// node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
function resolveElements(elements, scope, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    let root = document;
    if (scope) {
      invariant(Boolean(scope.current), "Scope provided, but no element detected.");
      root = scope.current;
    }
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = root.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = root.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const {
      inlineSize,
      blockSize
    } = borderBoxSize[0];
    return {
      width: inlineSize,
      height: blockSize
    };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({
  target,
  contentRect,
  borderBoxSize
}) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach(handler => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined") return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer) createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach(element => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach(element => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach(callback => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler) createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/index.mjs
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time2) {
  const axis = info[axisName];
  const {
    length,
    position
  } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time2 - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time2) {
  updateAxisInfo(element, "x", info, time2);
  updateAxisInfo(element, "y", info, time2);
  info.time = time2;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
  const inset = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const {
        x,
        y
      } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset2 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
  x: 0,
  y: 0
};
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
    width: target.clientWidth,
    height: target.clientHeight
  };
}
function resolveOffsets(container, info, options) {
  const {
    offset: offsetDefinition = ScrollOffset.All
  } = options;
  const {
    target = container,
    axis = "y"
  } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? {
    width: container.scrollWidth,
    height: container.scrollHeight
  } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition));
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
  if (true) {
    if (container && target && target !== container) {
      warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
    }
  }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: () => measure(element, options.target, info),
    update: time2 => {
      updateScrollInfo(element, info, time2);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */new WeakMap();
var resizeListeners = /* @__PURE__ */new WeakMap();
var onScrollHandlers = /* @__PURE__ */new WeakMap();
var getEventTarget = element => element === document.documentElement ? window : element;
function scrollInfo(onScroll, {
  container = document.documentElement,
  ...options
} = {}) {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) handler.measure();
    };
    const updateAll = () => {
      for (const handler of containerHandlers) {
        handler.update(frameData.timestamp);
      }
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers) handler.notify();
    };
    const listener2 = () => {
      frame.read(measureAll, false, true);
      frame.read(updateAll, false, true);
      frame.update(notifyAll2, false, true);
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, {
      passive: true
    });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, {
      passive: true
    });
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers) return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size) return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
  };
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react36 = require("react@18.2.0");
function refWarning(name, ref) {
  warning(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({
  container,
  target,
  layoutEffect = true,
  ...options
} = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : import_react36.useEffect;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scrollInfo(({
      x,
      y
    }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, [container, target, JSON.stringify(options.offset)]);
  return values;
}

// node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (true) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({
    container: ref
  });
}

// node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (true) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react37 = require("react@18.2.0");
function useAnimationFrame(callback) {
  const initialTimestamp = (0, import_react37.useRef)(0);
  const {
    isStatic
  } = (0, import_react37.useContext)(MotionConfigContext);
  (0, import_react37.useEffect)(() => {
    if (isStatic) return;
    const provideTimeSinceStart = ({
      timestamp,
      delta
    }) => {
      if (!initialTimestamp.current) initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}

// node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time2 = useMotionValue(0);
  useAnimationFrame(t => time2.set(t));
  return time2;
}

// node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.members = [];
    this.transforms = /* @__PURE__ */new Set();
  }
  add(name) {
    let memberName;
    if (transformProps.has(name)) {
      this.transforms.add(name);
      memberName = "transform";
    } else if (!name.startsWith("origin") && !isCSSVariableName(name) && name !== "willChange") {
      memberName = camelToDash(name);
    }
    if (memberName) {
      addUniqueItem(this.members, memberName);
      this.update();
    }
  }
  remove(name) {
    if (transformProps.has(name)) {
      this.transforms.delete(name);
      if (!this.transforms.size) {
        removeItem(this.members, "transform");
      }
    } else {
      removeItem(this.members, camelToDash(name));
    }
    this.update();
  }
  update() {
    this.set(this.members.length ? this.members.join(", ") : "auto");
  }
};
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react38 = require("react@18.2.0");
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = (0, import_react38.useState)(prefersReducedMotion.current);
  if (true) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react39 = require("react@18.2.0");
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const {
    reducedMotion
  } = (0, import_react39.useContext)(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function stopAnimation(visualElement) {
  visualElement.values.forEach(value => value.stop());
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach(key => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach(child => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach(visualElement => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(visualElement => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach(visualElement => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const {
      currentTime
    } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.update(onFrame, true);
  return () => cancelFrame(onFrame);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs
var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

// node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = class {
  constructor(animations2) {
    this.animations = animations2.filter(Boolean);
  }
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline) {
    const cancelAll = this.animations.map(animation => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        animation.attachTimeline(timeline);
      } else {
        animation.pause();
        return observeTimeline(progress2 => {
          animation.time = animation.duration * progress2;
        }, timeline);
      }
    });
    return () => {
      cancelAll.forEach((cancelTimeline, i) => {
        if (cancelTimeline) cancelTimeline();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time2) {
    this.setAll("time", time2);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach(controls => controls[methodName]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  stop() {
    this.runAll("stop");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
  node.mount(element);
  visualElementStore.set(element, node);
}

// node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100) {
  const generator = spring({
    keyframes: [0, scale2],
    ...options
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: progress2 => generator.next(duration * progress2).value / scale2,
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, {
  defaultTransition = {},
  ...sequenceTransition
} = {}, scope) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */new Map();
  const sequences = /* @__PURE__ */new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration3 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numElements = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const {
        delay: delay2 = 0,
        times = defaultOffset(valueKeyframesAsList),
        type = "keyframes",
        ...remainingTransition
      } = valueTransition;
      let {
        ease: ease2 = defaultTransition.ease || "easeOut",
        duration
      } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numElements) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      if (numKeyframes <= 2 && type === "spring") {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = {
          ...remainingTransition
        };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      const targetTime = startTime + duration;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration3 = Math.max(calculatedDelay + duration, maxDuration3);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const elements = resolveElements(subject, scope, elementCache);
      const numElements = elements.length;
      for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const element = elements[elementIndex];
        const subjectSequence = getSubjectSequence(element, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), elementIndex, numElements);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration3;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const {
          at,
          value,
          easing
        } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition[key] ? {
    ...transition,
    ...transition[key]
  } : {
    ...transition
  };
}
var isNumber = keyframe => typeof keyframe === "number";
var isNumberKeyframesArray = keyframes2 => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    if (!visualElementStore.has(element)) {
      createVisualElement(element);
    }
    const visualElement = visualElementStore.get(element);
    const transition = {
      ...options
    };
    if (typeof transition.delay === "function") {
      transition.delay = transition.delay(i, numElements);
    }
    animations2.push(...animateTarget(visualElement, {
      ...keyframes2,
      transition
    }, {}));
  }
  return new GroupPlaybackControls(animations2);
}
var isSequence = value => Array.isArray(value) && Array.isArray(value[0]);
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope);
  animationDefinitions.forEach(({
    keyframes: keyframes2,
    transition
  }, subject) => {
    let animation;
    if (isMotionValue(subject)) {
      animation = animateSingleValue(subject, keyframes2.default, transition.default);
    } else {
      animation = animateElements(subject, keyframes2, transition);
    }
    animations2.push(animation);
  });
  return new GroupPlaybackControls(animations2);
}
var createScopedAnimate = scope => {
  function scopedAnimate(valueOrElementOrSequence, keyframes2, options) {
    let animation;
    if (isSequence(valueOrElementOrSequence)) {
      animation = animateSequence(valueOrElementOrSequence, keyframes2, scope);
    } else if (isDOMKeyframes(keyframes2)) {
      animation = animateElements(valueOrElementOrSequence, keyframes2, options, scope);
    } else {
      animation = animateSingleValue(valueOrElementOrSequence, keyframes2, options);
    }
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
};
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    animations: []
  }));
  const animate2 = useConstant(() => createScopedAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach(animation => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react40 = require("react@18.2.0");
function useCycle(...items) {
  const index = (0, import_react40.useRef)(0);
  const [item, setItem] = (0, import_react40.useState)(items[index.current]);
  const runCycle = (0, import_react40.useCallback)(next => {
    index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }, [items.length, ...items]);
  return [item, runCycle];
}

// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, {
  root,
  margin: rootMargin,
  amount = "some"
} = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */new WeakMap();
  const onIntersectionChange = entries => {
    entries.forEach(entry => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd)) return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach(element => observer2.observe(element));
  return () => observer2.disconnect();
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react41 = require("react@18.2.0");
function useInView(ref, {
  root,
  margin,
  amount,
  once = false
} = {}) {
  const [isInView, setInView] = (0, import_react41.useState)(false);
  (0, import_react41.useEffect)(() => {
    if (!ref.current || once && isInView) return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */new Set();
  }
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  start(event, options) {
    this.componentControls.forEach(controls => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react42 = require("react@18.2.0");
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react42.useEffect)(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current) return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react43 = require("react@18.2.0");
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = (0, import_react43.useRef)();
  (0, import_react43.useEffect)(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current) return;
      instantAnimationState.current = false;
    }));
  }, [forcedRenderCount]);
  return callback => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  instantAnimationState.current = false;
}

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var React10 = __toESM(require("react@18.2.0"), 0);
function useResetProjection() {
  const reset = React10.useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  }, []);
  return reset;
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (id4, value) => `${id4}: ${value}`;

// node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */new Map();

// node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
var handoffFrameTime;
function handoffOptimizedAppearAnimation(elementId, valueName, _value, _frame) {
  const optimisedValueName = transformProps.has(valueName) ? "transform" : valueName;
  const storeId = appearStoreId(elementId, optimisedValueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const {
    animation,
    startTime
  } = optimisedAnimation;
  const cancelAnimation = () => {
    appearAnimationStore.delete(storeId);
    try {
      animation.cancel();
    } catch (error) {}
  };
  if (startTime === null || window.HandoffComplete) {
    cancelAnimation();
    return null;
  } else {
    if (handoffFrameTime === void 0) {
      handoffFrameTime = performance.now();
    }
    return handoffFrameTime - startTime || 0;
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
var startFrameTime;
var readyAnimation;
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  if (window.HandoffComplete) {
    window.HandoffAppearAnimations = void 0;
    return;
  }
  const id4 = element.dataset[optimizedAppearDataId];
  if (!id4) return;
  window.HandoffAppearAnimations = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id4, name);
  if (!readyAnimation) {
    readyAnimation = animateStyle(element, name, [keyframes2[0], keyframes2[0]], {
      duration: 1e4,
      ease: "linear"
    });
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
    if (!window.HandoffCancelAllAnimations) {
      window.HandoffCancelAllAnimations = () => {
        appearAnimationStore.forEach(({
          animation
        }) => {
          animation.cancel();
        });
        appearAnimationStore.clear();
        window.HandoffCancelAllAnimations = void 0;
      };
    }
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = animateStyle(element, name, keyframes2, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady) onReady(appearAnimation);
  };
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react44 = require("react@18.2.0");
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  build() {}
  measureInstanceViewportBox() {
    return createBox();
  }
  resetTransform() {}
  restoreTransform() {}
  removeValueFromRenderState() {}
  renderInstance() {}
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = (0, import_react44.useState)(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {},
      visualState,
      presenceContext: null
    }, {
      initialState
    });
  });
  (0, import_react44.useEffect)(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  (0, import_react44.useEffect)(() => {
    element.update({
      onUpdate: v => {
        setAnimationState({
          ...v
        });
      }
    }, null);
  }, [setAnimationState, element]);
  const startAnimation = useConstant(() => animationDefinition => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react45 = require("react@18.2.0");
var maxScale = 1e5;
var invertScale = scale2 => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const {
    visualElement
  } = (0, import_react45.useContext)(MotionContext);
  invariant(!!(scale2 || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return {
    scaleX,
    scaleY
  };
}

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var React11 = __toESM(require("react@18.2.0"), 0);
var id3 = 0;
var AnimateSharedLayout = ({
  children
}) => {
  React11.useEffect(() => {
    invariant(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return React11.createElement(LayoutGroup, {
    id: useConstant(() => `asl-${id3++}`)
  }, children);
};

// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scrollTimelineFallback({
  source,
  axis = "y"
}) {
  const currentTime = {
    value: 0
  };
  const cancel = scrollInfo(info => {
    currentTime.value = info[axis].progress * 100;
  }, {
    container: source,
    axis
  });
  return {
    currentTime,
    cancel
  };
}
var timelineCache = /* @__PURE__ */new Map();
function getTimeline({
  source = document.documentElement,
  axis = "y"
} = {}) {
  if (!timelineCache.has(source)) {
    timelineCache.set(source, {});
  }
  const elementCache = timelineCache.get(source);
  if (!elementCache[axis]) {
    elementCache[axis] = supportsScrollTimeline() ? new ScrollTimeline({
      source,
      axis
    }) : scrollTimelineFallback({
      source,
      axis
    });
  }
  return elementCache[axis];
}
function scroll(onScroll, options) {
  const timeline = getTimeline(options);
  if (typeof onScroll === "function") {
    return observeTimeline(onScroll, timeline);
  } else {
    return onScroll.attachTimeline(timeline);
  }
}

// node_modules/framer-motion/dist/es/animation/utils/stagger.mjs
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, {
  startDelay = 0,
  from = 0,
  ease: ease2
} = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease2) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease2);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}

// node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var sync = frame;
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = process2 => cancelFrame(process2);
  return acc;
}, {});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZyYW1lci1tb3Rpb24uMTEuMC4yNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db25maWdDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWlzb21vcnBoaWMtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXp5Q29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY2FtZWwtdG8tZGFzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2RhdGEtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9HbG9iYWxDb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvcmVuZGVyLXN0ZXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvYmF0Y2hlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9taWNyb3Rhc2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtcmVmLW9iamVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtbW90aW9uLXJlZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kZWZpbml0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sb2FkLWZlYXR1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvbG93ZXJjYXNlLWVsZW1lbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtY29ycmVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1mb3JjZWQtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL3VuaXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWludC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtc3R5bGVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3VzZS1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3RyYW5zZm9ybS1vcmlnaW4ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3BhdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2J1aWxkLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2NhbWVsLWNhc2UtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3JlbmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3NjcmFwZS1tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jcmVhdGUtY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvdXRpbHMvaXMtcHJpbWFyeS1wb2ludGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2V2ZW50LWluZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLXBvaW50ZXItZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9sb2NrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL0ZlYXR1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9ob3Zlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2ZvY3VzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtbm9kZS1vci1jaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90aW1lLWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvZGVmYXVsdC10cmFuc2l0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy90cmFuc2l0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL2dldC1maW5hbC1rZXlmcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9zeW5jLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy16ZXJvLXZhbHVlLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZXJyb3JzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtbnVtZXJpY2FsLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY3NzLXZhcmlhYmxlcy1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy91bml0LWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3Rlc3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3R5cGUtYXV0by5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvcmdiYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hzbGEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2ZpbHRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGVmYXVsdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2FuaW1hdGFibGUtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL21ha2Utbm9uZS1hbmltYXRhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21lbW8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtYW5pbWF0YWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvdXRpbHMvY2FuLWFuaW1hdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL0Jhc2VBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy92ZWxvY2l0eS1wZXItc2Vjb25kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvdXRpbHMvdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvZmluZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2luZXJ0aWEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY3ViaWMtYmV6aWVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL21vZGlmaWVycy9taXJyb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL3JldmVyc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvbWFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcHJvZ3Jlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvbnVtYmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaHNsYS10by1yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L2NvbG9yLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L2NvbXBsZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pbnRlcnBvbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZmlsbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZGVmYXVsdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2tleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2NhbGMtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL2RyaXZlcnMvZHJpdmVyLWZyYW1lbG9vcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvTWFpblRocmVhZEFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9pcy1iZXppZXItZGVmaW5pdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvZWFzaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvQWNjZWxlcmF0ZWRBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy9tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9hcnJheS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3N1YnNjcmlwdGlvbi1tYW5hZ2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd2Fybi1vbmNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9hbmltYXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9leGl0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9kaXN0YW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9QYW5TZXNzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1jYWxjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9jb25zdHJhaW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvbW9kZWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9lYWNoLWF4aXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2hhcy10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWFwcGx5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9tZWFzdXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZ2V0LWNvbnRleHQtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9WaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL3VzZS1wcmVzZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJvcmRlci1yYWRpdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3gtc2hhZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC9NZWFzdXJlTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9hbmltYXRpb24vbWl4LXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29weS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtcmVtb3ZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc2hhcmVkL3N0YWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9kZWJ1Zy9yZWNvcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvc2luZ2xlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2NyZWF0ZS1wcm9qZWN0aW9uLW5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvRG9jdW1lbnRQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9IVE1MUHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZHJhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZmluZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvSFRNTFZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL1NWR1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLW1pbmltYWwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXMtbW91bnRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1mb3JjZS11cGRhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTW90aW9uQ29uZmlnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXp5TW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9EZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUmVvcmRlckNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvdXRpbHMvY2hlY2stcmVvcmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9Hcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0l0ZW0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWF4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi10ZW1wbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zcHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtbW90aW9uLXZhbHVlLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9yZXNvbHZlLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9wcmVzZXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLWVsZW1lbnQtc2Nyb2xsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvc2Nyb2xsL3VzZS12aWV3cG9ydC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtYW5pbWF0aW9uLWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24tY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL2FuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9zdXBwb3J0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9Hcm91cFBsYXliYWNrQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvY3JlYXRlLWdlbmVyYXRvci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd3JhcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9nZXQtZWFzaW5nLWZvci1zZWdtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvc29ydC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWN5Y2xlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbi12aWV3Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91c2UtZHJhZy1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91c2UtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLXJlc2V0LXByb2plY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3N0YWdnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvaW5kZXgtbGVnYWN5Lm1qcyJdLCJuYW1lcyI6WyJmcmFtZXJfbW90aW9uXzExXzBfMjVfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWNjZWxlcmF0ZWRBbmltYXRpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlU2hhcmVkTGF5b3V0IiwiRGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsIkRyYWdDb250cm9scyIsIkZsYXRUcmVlIiwiTGF5b3V0R3JvdXAiLCJMYXlvdXRHcm91cENvbnRleHQiLCJMYXp5TW90aW9uIiwiTW90aW9uQ29uZmlnIiwiTW90aW9uQ29uZmlnQ29udGV4dCIsIk1vdGlvbkNvbnRleHQiLCJNb3Rpb25HbG9iYWxDb25maWciLCJNb3Rpb25WYWx1ZSIsIlByZXNlbmNlQ29udGV4dCIsIlJlb3JkZXIiLCJTd2l0Y2hMYXlvdXRHcm91cENvbnRleHQiLCJWaXN1YWxFbGVtZW50IiwiYWRkUG9pbnRlckV2ZW50IiwiYWRkUG9pbnRlckluZm8iLCJhZGRTY2FsZUNvcnJlY3RvciIsImFuaW1hdGUiLCJhbmltYXRlVmFsdWUiLCJhbmltYXRlVmlzdWFsRWxlbWVudCIsImFuaW1hdGlvbkNvbnRyb2xzIiwiYW5pbWF0aW9ucyIsImFudGljaXBhdGUiLCJiYWNrSW4iLCJiYWNrSW5PdXQiLCJiYWNrT3V0IiwiYnVpbGRUcmFuc2Zvcm0iLCJjYWxjTGVuZ3RoIiwiY2FuY2VsRnJhbWUiLCJjYW5jZWxTeW5jIiwiY2lyY0luIiwiY2lyY0luT3V0IiwiY2lyY091dCIsImNsYW1wIiwiY29sb3IiLCJjb21wbGV4IiwiY3JlYXRlQm94IiwiY3JlYXRlRG9tTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlU2NvcGVkQW5pbWF0ZSIsImN1YmljQmV6aWVyIiwiZGVsYXkiLCJkaXNhYmxlSW5zdGFudFRyYW5zaXRpb25zIiwiZGlzdGFuY2UiLCJkaXN0YW5jZTJEIiwiZG9tQW5pbWF0aW9uIiwiZG9tTWF4IiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImZpbHRlclByb3BzIiwiZnJhbWUiLCJmcmFtZURhdGEiLCJpblZpZXciLCJpbnRlcnBvbGF0ZSIsImludmFyaWFudCIsImlzQnJvd3NlciIsImlzRHJhZ0FjdGl2ZSIsImlzTW90aW9uQ29tcG9uZW50IiwiaXNNb3Rpb25WYWx1ZSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwibSIsIm1ha2VVc2VWaXN1YWxTdGF0ZSIsIm1pcnJvckVhc2luZyIsIm1peCIsIm1vdGlvbiIsIm1vdGlvblZhbHVlIiwib3B0aW1pemVkQXBwZWFyRGF0YUF0dHJpYnV0ZSIsInBpcGUiLCJwcm9ncmVzcyIsInB4IiwicmVzb2x2ZU1vdGlvblZhbHVlIiwicmV2ZXJzZUVhc2luZyIsInNjcm9sbCIsInNjcm9sbEluZm8iLCJzcHJpbmciLCJzdGFnZ2VyIiwic3RhcnRPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJzdGVwcyIsInN5bmMiLCJ0cmFuc2Zvcm0iLCJ1bndyYXBNb3Rpb25Db21wb25lbnQiLCJ1c2VBbmltYXRlIiwidXNlQW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uQ29udHJvbHMiLCJ1c2VBbmltYXRpb25GcmFtZSIsInVzZUN5Y2xlIiwidXNlRGVwcmVjYXRlZEFuaW1hdGVkU3RhdGUiLCJ1c2VBbmltYXRlZFN0YXRlIiwidXNlRGVwcmVjYXRlZEludmVydGVkU2NhbGUiLCJ1c2VJbnZlcnRlZFNjYWxlIiwidXNlRG9tRXZlbnQiLCJ1c2VEcmFnQ29udHJvbHMiLCJ1c2VFbGVtZW50U2Nyb2xsIiwidXNlRm9yY2VVcGRhdGUiLCJ1c2VJblZpZXciLCJ1c2VJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVzZUluc3RhbnRUcmFuc2l0aW9uIiwidXNlSXNQcmVzZW50IiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlUHJlc2VuY2UiLCJ1c2VSZWR1Y2VkTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbkNvbmZpZyIsInVzZVJlc2V0UHJvamVjdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRpbWUiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VVbm1vdW50RWZmZWN0IiwidXNlVmVsb2NpdHkiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVdpbGxDaGFuZ2UiLCJ2aXN1YWxFbGVtZW50U3RvcmUiLCJ3YXJuaW5nIiwid3JhcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInRyYW5zZm9ybVBhZ2VQb2ludCIsInAiLCJpc1N0YXRpYyIsInJlZHVjZWRNb3Rpb24iLCJpbXBvcnRfcmVhY3QyIiwiaW1wb3J0X3JlYWN0MyIsImRvY3VtZW50IiwiaW1wb3J0X3JlYWN0NCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImltcG9ydF9yZWFjdDUiLCJMYXp5Q29udGV4dCIsInN0cmljdCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwic2tpcEFuaW1hdGlvbnMiLCJ1c2VNYW51YWxUaW1pbmciLCJRdWV1ZSIsImNvbnN0cnVjdG9yIiwib3JkZXIiLCJzY2hlZHVsZWQiLCJTZXQiLCJhZGQiLCJwcm9jZXNzMiIsImhhcyIsInB1c2giLCJyZW1vdmUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWxldGUiLCJjbGVhciIsImxlbmd0aCIsImNyZWF0ZVJlbmRlclN0ZXAiLCJydW5OZXh0RnJhbWUiLCJ0aGlzRnJhbWUiLCJuZXh0RnJhbWUiLCJudW1Ub1J1biIsImlzUHJvY2Vzc2luZyIsImZsdXNoTmV4dEZyYW1lIiwidG9LZWVwQWxpdmUiLCJXZWFrU2V0Iiwic3RlcCIsInNjaGVkdWxlIiwiY2FsbGJhY2siLCJrZWVwQWxpdmUiLCJpbW1lZGlhdGUiLCJhZGRUb0N1cnJlbnRGcmFtZSIsInF1ZXVlIiwiY2FuY2VsIiwicHJvY2VzcyIsImZyYW1lRGF0YTIiLCJpIiwic3RlcHNPcmRlciIsIm1heEVsYXBzZWQiLCJjcmVhdGVSZW5kZXJCYXRjaGVyIiwic2NoZWR1bGVOZXh0QmF0Y2giLCJhbGxvd0tlZXBBbGl2ZSIsInVzZURlZmF1bHRFbGFwc2VkIiwic3RhdGUiLCJkZWx0YSIsInRpbWVzdGFtcCIsInN0ZXBzMiIsInJlZHVjZSIsImFjYyIsImtleSIsInByb2Nlc3NTdGVwIiwic3RlcElkIiwicHJvY2Vzc0JhdGNoIiwicGVyZm9ybWFuY2UiLCJub3ciLCJNYXRoIiwibWF4IiwibWluIiwiZm9yRWFjaCIsIndha2UiLCJtaWNyb3Rhc2siLCJjYW5jZWxNaWNyb3Rhc2siLCJxdWV1ZU1pY3JvdGFzayIsImltcG9ydF9yZWFjdDYiLCJ1c2VWaXN1YWxFbGVtZW50IiwiQ29tcG9uZW50MiIsInZpc3VhbFN0YXRlIiwicHJvcHMiLCJjcmVhdGVWaXN1YWxFbGVtZW50MiIsInZpc3VhbEVsZW1lbnQiLCJwYXJlbnQiLCJ1c2VDb250ZXh0IiwibGF6eUNvbnRleHQiLCJwcmVzZW5jZUNvbnRleHQiLCJyZWR1Y2VkTW90aW9uQ29uZmlnIiwidmlzdWFsRWxlbWVudFJlZiIsInVzZVJlZiIsInJlbmRlcmVyIiwiY3VycmVudCIsImJsb2NrSW5pdGlhbEFuaW1hdGlvbiIsImluaXRpYWwiLCJ1c2VJbnNlcnRpb25FZmZlY3QiLCJ1cGRhdGUiLCJ3YW50c0hhbmRvZmYiLCJCb29sZWFuIiwid2luZG93IiwiSGFuZG9mZkNvbXBsZXRlIiwicG9zdFJlbmRlciIsInJlbmRlciIsImFuaW1hdGlvblN0YXRlIiwiYW5pbWF0ZUNoYW5nZXMiLCJ1cGRhdGVGZWF0dXJlcyIsImlzUmVmT2JqZWN0IiwicmVmIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0NyIsInVzZU1vdGlvblJlZiIsImV4dGVybmFsUmVmIiwidXNlQ2FsbGJhY2siLCJpbnN0YW5jZSIsIm1vdW50IiwidW5tb3VudCIsImlzVmFyaWFudExhYmVsIiwidiIsIkFycmF5IiwiaXNBcnJheSIsImlzQW5pbWF0aW9uQ29udHJvbHMiLCJzdGFydCIsInZhcmlhbnRQcmlvcml0eU9yZGVyIiwidmFyaWFudFByb3BzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzIiwic29tZSIsIm5hbWUiLCJpc1ZhcmlhbnROb2RlIiwidmFyaWFudHMiLCJnZXRDdXJyZW50VHJlZVZhcmlhbnRzIiwiY29udGV4dCIsImFuaW1hdGUyIiwiaW5oZXJpdCIsImltcG9ydF9yZWFjdDgiLCJ1c2VDcmVhdGVNb3Rpb25Db250ZXh0IiwidXNlTWVtbyIsInZhcmlhbnRMYWJlbHNBc0RlcGVuZGVuY3kiLCJwcm9wIiwiam9pbiIsImZlYXR1cmVQcm9wcyIsImFuaW1hdGlvbiIsImV4aXQiLCJkcmFnIiwiZm9jdXMiLCJob3ZlciIsInRhcCIsInBhbiIsImxheW91dCIsImZlYXR1cmVEZWZpbml0aW9ucyIsImlzRW5hYmxlZCIsImxvYWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0OSIsImltcG9ydF9yZWFjdDEwIiwibW90aW9uQ29tcG9uZW50U3ltYm9sIiwiU3ltYm9sIiwiZm9yIiwiUmVhY3QiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0MTEiLCJwcmVsb2FkZWRGZWF0dXJlcyIsInByZWxvYWRlZEZlYXR1cmVzMiIsImNyZWF0ZVZpc3VhbEVsZW1lbnQiLCJ1c2VSZW5kZXIiLCJ1c2VWaXN1YWxTdGF0ZSIsInVzZVZpc3VhbFN0YXRlMiIsIkNvbXBvbmVudCIsIk1vdGlvbkNvbXBvbmVudCIsIk1lYXN1cmVMYXlvdXQyIiwiY29uZmlnQW5kUHJvcHMiLCJsYXlvdXRJZCIsInVzZUxheW91dElkIiwiaW5pdGlhbExheW91dEdyb3VwQ29uZmlnIiwiaXNTdHJpY3QiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkZvcndhcmRSZWZDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwibGF5b3V0R3JvdXBJZCIsImlkIiwiY3JlYXRlTW90aW9uUHJveHkiLCJjcmVhdGVDb25maWciLCJjdXN0b20iLCJjdXN0b21Nb3Rpb25Db21wb25lbnRDb25maWciLCJQcm94eSIsImNvbXBvbmVudENhY2hlIiwiTWFwIiwiZ2V0IiwiX3RhcmdldCIsInNldCIsImxvd2VyY2FzZVNWR0VsZW1lbnRzIiwiaXNTVkdDb21wb25lbnQiLCJpbmNsdWRlcyIsInRlc3QiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiYXNzaWduIiwidHJhbnNmb3JtUHJvcE9yZGVyIiwidHJhbnNmb3JtUHJvcHMiLCJpc0ZvcmNlZE1vdGlvblZhbHVlIiwibGF5b3V0MiIsInN0YXJ0c1dpdGgiLCJnZXRWZWxvY2l0eSIsInRyYW5zbGF0ZUFsaWFzIiwieCIsInkiLCJ6IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJudW1UcmFuc2Zvcm1zIiwidHJhbnNmb3JtMiIsImVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwiYWxsb3dUcmFuc2Zvcm1Ob25lIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidHJhbnNmb3JtVGVtcGxhdGUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJ0cmFuc2Zvcm1OYW1lIiwidHJpbSIsImNoZWNrU3RyaW5nU3RhcnRzV2l0aCIsInRva2VuIiwiaXNDU1NWYXJpYWJsZU5hbWUiLCJzdGFydHNBc1ZhcmlhYmxlVG9rZW4iLCJpc0NTU1ZhcmlhYmxlVG9rZW4iLCJzdGFydHNXaXRoVG9rZW4iLCJzaW5nbGVDc3NWYXJpYWJsZVJlZ2V4Iiwic3BsaXQiLCJnZXRWYWx1ZUFzVHlwZSIsInR5cGUiLCJudW1iZXIiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJhbHBoYSIsInNjYWxlIiwiZGVmYXVsdCIsInNhbml0aXplIiwicm91bmQiLCJmbG9hdFJlZ2V4IiwiY29sb3JSZWdleCIsInNpbmdsZUNvbG9yUmVnZXgiLCJpc1N0cmluZyIsImNyZWF0ZVVuaXRUeXBlIiwidW5pdCIsImVuZHNXaXRoIiwiZGVncmVlcyIsInBlcmNlbnQiLCJ2aCIsInZ3IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwiaW50IiwibnVtYmVyVmFsdWVUeXBlcyIsImJvcmRlcldpZHRoIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJyYWRpdXMiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0Iiwic2l6ZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0Iiwicm90YXRlIiwicm90YXRlWCIsInJvdGF0ZVkiLCJyb3RhdGVaIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tldyIsInNrZXdYIiwic2tld1kiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJwZXJzcGVjdGl2ZSIsIm9wYWNpdHkiLCJvcmlnaW5YIiwib3JpZ2luWSIsIm9yaWdpbloiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSIsIm51bU9jdGF2ZXMiLCJidWlsZEhUTUxTdHlsZXMiLCJsYXRlc3RWYWx1ZXMiLCJvcHRpb25zIiwic3R5bGUiLCJ2YXJzIiwidHJhbnNmb3JtT3JpZ2luIiwiaGFzVHJhbnNmb3JtMiIsImhhc1RyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybUlzTm9uZSIsInZhbHVlVHlwZSIsInZhbHVlQXNUeXBlIiwiY3JlYXRlSHRtbFJlbmRlclN0YXRlIiwiaW1wb3J0X3JlYWN0MTIiLCJjb3B5UmF3VmFsdWVzT25seSIsInRhcmdldCIsInNvdXJjZSIsInVzZUluaXRpYWxNb3Rpb25WYWx1ZXMiLCJ1c2VTdHlsZSIsInN0eWxlUHJvcCIsInVzZUhUTUxQcm9wcyIsImh0bWxQcm9wcyIsImRyYWdMaXN0ZW5lciIsImRyYWdnYWJsZSIsInVzZXJTZWxlY3QiLCJXZWJraXRVc2VyU2VsZWN0IiwiV2Via2l0VG91Y2hDYWxsb3V0IiwidG91Y2hBY3Rpb24iLCJ0YWJJbmRleCIsIm9uVGFwIiwib25UYXBTdGFydCIsIndoaWxlVGFwIiwidmFsaWRNb3Rpb25Qcm9wcyIsInNob3VsZEZvcndhcmQiLCJsb2FkRXh0ZXJuYWxJc1ZhbGlkUHJvcCIsImlzVmFsaWRQcm9wIiwiX2EiLCJpc0RvbSIsImZvcndhcmRNb3Rpb25Qcm9wcyIsImZpbHRlcmVkUHJvcHMiLCJ2YWx1ZXMiLCJjYWxjT3JpZ2luIiwib3JpZ2luIiwib2Zmc2V0IiwiY2FsY1NWR1RyYW5zZm9ybU9yaWdpbiIsImRpbWVuc2lvbnMiLCJweE9yaWdpblgiLCJweE9yaWdpblkiLCJkYXNoS2V5cyIsImFycmF5IiwiY2FtZWxLZXlzIiwiYnVpbGRTVkdQYXRoIiwiYXR0cnMiLCJzcGFjaW5nIiwidXNlRGFzaENhc2UiLCJwYXRoTGVuZ3RoIiwia2V5czIiLCJwYXRoU3BhY2luZyIsImJ1aWxkU1ZHQXR0cnMiLCJhdHRyWCIsImF0dHJZIiwiYXR0clNjYWxlIiwicGF0aE9mZnNldCIsImxhdGVzdCIsImlzU1ZHVGFnMiIsInZpZXdCb3giLCJjcmVhdGVTdmdSZW5kZXJTdGF0ZSIsImlzU1ZHVGFnIiwidGFnIiwiaW1wb3J0X3JlYWN0MTMiLCJ1c2VTVkdQcm9wcyIsIl9pc1N0YXRpYyIsInZpc3VhbFByb3BzIiwicmF3U3R5bGVzIiwiaW1wb3J0X3JlYWN0MTQiLCJjcmVhdGVVc2VSZW5kZXIiLCJ1c2VWaXN1YWxQcm9wcyIsImVsZW1lbnRQcm9wcyIsIkZyYWdtZW50IiwiY2hpbGRyZW4iLCJyZW5kZXJlZENoaWxkcmVuIiwicmVuZGVySFRNTCIsImVsZW1lbnQiLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsInJlbmRlclN0YXRlIiwiX3N0eWxlUHJvcCIsInNldEF0dHJpYnV0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsInByZXZQcm9wcyIsIm5ld1ZhbHVlcyIsImdldFZhbHVlIiwibGl2ZVN0eWxlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwiY3VycmVudFZhbHVlcyIsImN1cnJlbnRWZWxvY2l0eSIsImltcG9ydF9yZWFjdDE1IiwidXNlQ29uc3RhbnQiLCJpbml0IiwiaXNLZXlmcmFtZXNUYXJnZXQiLCJpc0N1c3RvbVZhbHVlIiwidG9WYWx1ZSIsInJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXMiLCJ1bndyYXBwZWRWYWx1ZSIsImltcG9ydF9yZWFjdDE2IiwibWFrZVN0YXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMyIsImNyZWF0ZVJlbmRlclN0YXRlIiwib25Nb3VudCIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJjb25maWciLCJtYWtlIiwic2NyYXBlTW90aW9uVmFsdWVzIiwibW90aW9uVmFsdWVzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzJDEiLCJpc1ZhcmlhbnROb2RlJDEiLCJpc0luaXRpYWxBbmltYXRpb25CbG9ja2VkIiwidmFyaWFudFRvU2V0IiwibGlzdCIsInJlc29sdmVkIiwidHJhbnNpdGlvbkVuZCIsInRyYW5zaXRpb24iLCJ2YWx1ZVRhcmdldCIsIm5vb3AiLCJhbnkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdmdNb3Rpb25Db25maWciLCJyZWFkIiwiZ2V0QkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImUiLCJ0YWdOYW1lIiwiaHRtbE1vdGlvbkNvbmZpZyIsImNyZWF0ZURvbU1vdGlvbkNvbmZpZyIsImJhc2VDb25maWciLCJhZGREb21FdmVudCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJwYXNzaXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1ByaW1hcnlQb2ludGVyIiwiZXZlbnQiLCJwb2ludGVyVHlwZSIsImJ1dHRvbiIsImlzUHJpbWFyeSIsImV4dHJhY3RFdmVudEluZm8iLCJwb2ludFR5cGUiLCJwb2ludCIsImNvbWJpbmVGdW5jdGlvbnMiLCJhIiwiYiIsInRyYW5zZm9ybWVycyIsImNyZWF0ZUxvY2siLCJsb2NrIiwib3BlbkxvY2siLCJnbG9iYWxIb3Jpem9udGFsTG9jayIsImdsb2JhbFZlcnRpY2FsTG9jayIsImdldEdsb2JhbExvY2siLCJkcmFnMiIsIm9wZW5Ib3Jpem9udGFsIiwib3BlblZlcnRpY2FsIiwib3Blbkdlc3R1cmVMb2NrIiwiRmVhdHVyZSIsIm5vZGUiLCJpc01vdW50ZWQiLCJhZGRIb3ZlckV2ZW50IiwiaXNBY3RpdmUiLCJjYWxsYmFja05hbWUiLCJoYW5kbGVFdmVudCIsImluZm8iLCJnZXRQcm9wcyIsIndoaWxlSG92ZXIiLCJzZXRBY3RpdmUiLCJIb3Zlckdlc3R1cmUiLCJGb2N1c0dlc3R1cmUiLCJhcmd1bWVudHMiLCJvbkZvY3VzIiwiaXNGb2N1c1Zpc2libGUiLCJtYXRjaGVzIiwib25CbHVyIiwiaXNOb2RlT3JDaGlsZCIsImNoaWxkIiwicGFyZW50RWxlbWVudCIsImZpcmVTeW50aGV0aWNQb2ludGVyRXZlbnQiLCJzeW50aGV0aWNQb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJQcmVzc0dlc3R1cmUiLCJyZW1vdmVTdGFydExpc3RlbmVycyIsInJlbW92ZUVuZExpc3RlbmVycyIsInJlbW92ZUFjY2Vzc2libGVMaXN0ZW5lcnMiLCJzdGFydFBvaW50ZXJQcmVzcyIsInN0YXJ0RXZlbnQiLCJzdGFydEluZm8iLCJpc1ByZXNzaW5nIiwiZW5kUG9pbnRlclByZXNzIiwiZW5kRXZlbnQiLCJlbmRJbmZvIiwiY2hlY2tQcmVzc0VuZCIsIm9uVGFwQ2FuY2VsIiwiZ2xvYmFsVGFwVGFyZ2V0IiwicmVtb3ZlUG9pbnRlclVwTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyQ2FuY2VsTGlzdGVuZXIiLCJjYW5jZWxFdmVudCIsImNhbmNlbEluZm8iLCJjYW5jZWxQcmVzcyIsInN0YXJ0UHJlc3MiLCJzdGFydEFjY2Vzc2libGVQcmVzcyIsImhhbmRsZUtleWRvd24iLCJrZXlkb3duRXZlbnQiLCJoYW5kbGVLZXl1cCIsImtleXVwRXZlbnQiLCJyZW1vdmVLZXlkb3duTGlzdGVuZXIiLCJoYW5kbGVCbHVyIiwicmVtb3ZlQmx1ckxpc3RlbmVyIiwicmVtb3ZlUG9pbnRlckxpc3RlbmVyIiwicmVtb3ZlRm9jdXNMaXN0ZW5lciIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiV2Vha01hcCIsIm9ic2VydmVycyIsImZpcmVPYnNlcnZlckNhbGxiYWNrIiwiZW50cnkiLCJmaXJlQWxsT2JzZXJ2ZXJDYWxsYmFja3MiLCJlbnRyaWVzIiwiaW5pdEludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImxvb2t1cFJvb3QiLCJyb290T2JzZXJ2ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZUludGVyc2VjdGlvbiIsInJvb3RJbnRlcmVzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkTmFtZXMiLCJhbGwiLCJJblZpZXdGZWF0dXJlIiwiaGFzRW50ZXJlZFZpZXciLCJpc0luVmlldyIsInN0YXJ0T2JzZXJ2ZXIiLCJ2aWV3cG9ydCIsInJvb3RNYXJnaW4iLCJhbW91bnQiLCJvbmNlIiwidGhyZXNob2xkIiwib25JbnRlcnNlY3Rpb25VcGRhdGUiLCJpc0ludGVyc2VjdGluZyIsIm9uVmlld3BvcnRFbnRlciIsIm9uVmlld3BvcnRMZWF2ZSIsImhhc09wdGlvbnNDaGFuZ2VkIiwiaGFzVmlld3BvcnRPcHRpb25DaGFuZ2VkIiwicHJldlZpZXdwb3J0IiwiZ2VzdHVyZUFuaW1hdGlvbnMiLCJzaGFsbG93Q29tcGFyZSIsIm5leHQiLCJwcmV2IiwicHJldkxlbmd0aCIsImdldEN1cnJlbnQiLCJ2ZWxvY2l0eSIsInJlc29sdmVWYXJpYW50Iiwic2Vjb25kc1RvTWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVuZGVyRGFtcGVkU3ByaW5nIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJlc3RTcGVlZCIsImNyaXRpY2FsbHlEYW1wZWRTcHJpbmciLCJzcXJ0Iiwia2V5ZnJhbWVzVHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImdldERlZmF1bHRUcmFuc2l0aW9uIiwidmFsdWVLZXkiLCJrZXlmcmFtZXMiLCJrZXlmcmFtZXMyIiwiaXNUcmFuc2l0aW9uRGVmaW5lZCIsIndoZW4iLCJfZGVsYXkiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsInJlcGVhdCIsInJlcGVhdFR5cGUiLCJyZXBlYXREZWxheSIsImZyb20iLCJlbGFwc2VkIiwia2V5cyIsImdldFZhbHVlVHJhbnNpdGlvbiIsImluc3RhbnRBbmltYXRpb25TdGF0ZSIsImlzTm90TnVsbCIsImdldEZpbmFsS2V5ZnJhbWUiLCJmaW5hbEtleWZyYW1lIiwicmVzb2x2ZWRLZXlmcmFtZXMiLCJmaWx0ZXIiLCJjbGVhclRpbWUiLCJ0aW1lIiwibmV3VGltZSIsImlzWmVyb1ZhbHVlU3RyaW5nIiwiaXNOb25lIiwiY2hlY2siLCJtZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsImlzTnVtZXJpY2FsU3RyaW5nIiwic3BsaXRDU1NWYXJpYWJsZVJlZ2V4IiwicGFyc2VDU1NWYXJpYWJsZSIsIm1hdGNoIiwiZXhlYyIsInRva2VuMSIsInRva2VuMiIsImZhbGxiYWNrIiwibWF4RGVwdGgiLCJnZXRWYXJpYWJsZVZhbHVlIiwiZGVwdGgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW1tZWQiLCJwb3NpdGlvbmFsS2V5cyIsImlzTnVtT3JQeFR5cGUiLCJnZXRQb3NGcm9tTWF0cml4IiwibWF0cml4IiwicG9zIiwiZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCIsInBvczIiLCJwb3MzIiwiX2Jib3giLCJtYXRyaXgzZCIsInRyYW5zZm9ybUtleXMiLCJub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyIsInJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0iLCJyZW1vdmVkVHJhbnNmb3JtcyIsInBvc2l0aW9uYWxWYWx1ZXMiLCJ0ZXN0VmFsdWVUeXBlIiwiYXV0byIsImRpbWVuc2lvblZhbHVlVHlwZXMiLCJmaW5kRGltZW5zaW9uVmFsdWVUeXBlIiwiZmluZCIsInRvUmVzb2x2ZSIsImlzU2NoZWR1bGVkIiwiYW55TmVlZHNNZWFzdXJlbWVudCIsIm1lYXN1cmVBbGxLZXlmcmFtZXMiLCJyZXNvbHZlcnNUb01lYXN1cmUiLCJyZXNvbHZlciIsIm5lZWRzTWVhc3VyZW1lbnQiLCJlbGVtZW50c1RvTWVhc3VyZSIsIm1hcCIsInRyYW5zZm9ybXNUb1Jlc3RvcmUiLCJtZWFzdXJlSW5pdGlhbFN0YXRlIiwibWVhc3VyZUVuZFN0YXRlIiwic3VzcGVuZGVkU2Nyb2xsWSIsInNjcm9sbFRvIiwiY29tcGxldGUiLCJyZWFkQWxsS2V5ZnJhbWVzIiwicmVhZEtleWZyYW1lcyIsImZsdXNoS2V5ZnJhbWVSZXNvbHZlcnMiLCJLZXlmcmFtZVJlc29sdmVyIiwidW5yZXNvbHZlZEtleWZyYW1lcyIsIm9uQ29tcGxldGUiLCJtb3Rpb25WYWx1ZTIiLCJpc0FzeW5jIiwiaXNDb21wbGV0ZSIsInNjaGVkdWxlUmVzb2x2ZSIsInJlc29sdmVLZXlmcmFtZXMiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZUFzUmVhZCIsInJlYWRWYWx1ZSIsInNldEZpbmFsS2V5ZnJhbWUiLCJyZW5kZXJFbmRTdHlsZXMiLCJyZXN1bWUiLCJpc0NvbG9yU3RyaW5nIiwidGVzdFByb3AiLCJzcGxpdENvbG9yIiwiYU5hbWUiLCJiTmFtZSIsImNOYW1lIiwiYyIsImFscGhhMiIsImNsYW1wUmdiVW5pdCIsInJnYlVuaXQiLCJyZ2JhIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEkMSIsInBhcnNlSGV4IiwiciIsImciLCJwYXJzZUludCIsImhleCIsImhzbGEiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiX2IiLCJpc05hTiIsIk5VTUJFUl9UT0tFTiIsIkNPTE9SX1RPS0VOIiwiVkFSX1RPS0VOIiwiVkFSX0ZVTkNUSU9OX1RPS0VOIiwiU1BMSVRfVE9LRU4iLCJjb21wbGV4UmVnZXgiLCJhbmFseXNlQ29tcGxleFZhbHVlIiwib3JpZ2luYWxWYWx1ZSIsInRvU3RyaW5nIiwiaW5kZXhlcyIsInZhciIsInR5cGVzIiwidG9rZW5pc2VkIiwicGFyc2VkVmFsdWUiLCJwYXJzZUNvbXBsZXhWYWx1ZSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwibnVtU2VjdGlvbnMiLCJvdXRwdXQiLCJjb252ZXJ0TnVtYmVyc1RvWmVybyIsImdldEFuaW1hdGFibGVOb25lIiwicGFyc2VkIiwidHJhbnNmb3JtZXIiLCJtYXhEZWZhdWx0cyIsImFwcGx5RGVmYXVsdEZpbHRlciIsInNsaWNlIiwibnVtYmVyMiIsImRlZmF1bHRWYWx1ZSIsImZ1bmN0aW9uUmVnZXgiLCJmdW5jdGlvbnMiLCJkZWZhdWx0VmFsdWVUeXBlcyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsImZpbGwiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwiV2Via2l0RmlsdGVyIiwiZ2V0RGVmYXVsdFZhbHVlVHlwZSIsImdldEFuaW1hdGFibGVOb25lMiIsImRlZmF1bHRWYWx1ZVR5cGUiLCJtYWtlTm9uZUtleWZyYW1lc0FuaW1hdGFibGUiLCJub25lS2V5ZnJhbWVJbmRleGVzIiwiYW5pbWF0YWJsZVRlbXBsYXRlIiwibm9uZUluZGV4IiwiRE9NS2V5ZnJhbWVzUmVzb2x2ZXIiLCJvd25lciIsImtleWZyYW1lIiwicmVzb2x2ZU5vbmVLZXlmcmFtZXMiLCJvcmlnaW5UeXBlIiwidGFyZ2V0VHlwZSIsInBhZ2VZT2Zmc2V0IiwibWVhc3VyZWRPcmlnaW4iLCJtZWFzdXJlVmlld3BvcnRCb3giLCJtZWFzdXJlS2V5ZnJhbWUiLCJqdW1wIiwiZmluYWxLZXlmcmFtZUluZGV4IiwidW5zZXRUcmFuc2Zvcm1OYW1lIiwidW5zZXRUcmFuc2Zvcm1WYWx1ZSIsIm1lbW8iLCJyZXN1bHQiLCJpc0FuaW1hdGFibGUiLCJoYXNLZXlmcmFtZXNDaGFuZ2VkIiwiY2FuQW5pbWF0ZSIsIm9yaWdpbktleWZyYW1lIiwidGFyZ2V0S2V5ZnJhbWUiLCJpc09yaWdpbkFuaW1hdGFibGUiLCJpc1RhcmdldEFuaW1hdGFibGUiLCJCYXNlQW5pbWF0aW9uIiwiYXV0b3BsYXkiLCJkZWxheTIiLCJpc1N0b3BwZWQiLCJoYXNBdHRlbXB0ZWRSZXNvbHZlIiwidXBkYXRlRmluaXNoZWRQcm9taXNlIiwiX3Jlc29sdmVkIiwib25LZXlmcmFtZXNSZXNvbHZlZCIsIm9uVXBkYXRlIiwiaXNHZW5lcmF0b3IiLCJyZXNvbHZlRmluaXNoZWRQcm9taXNlIiwicmVzb2x2ZWRBbmltYXRpb24iLCJpbml0UGxheWJhY2siLCJvblBvc3RSZXNvbHZlZCIsInRoZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiY3VycmVudEZpbmlzaGVkUHJvbWlzZSIsIlByb21pc2UiLCJ2ZWxvY2l0eVBlclNlY29uZCIsImZyYW1lRHVyYXRpb24iLCJ2ZWxvY2l0eVNhbXBsZUR1cmF0aW9uIiwiY2FsY0dlbmVyYXRvclZlbG9jaXR5IiwicmVzb2x2ZVZhbHVlIiwidCIsInByZXZUIiwic2FmZU1pbiIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJtaW5EYW1waW5nIiwibWF4RGFtcGluZyIsImZpbmRTcHJpbmciLCJib3VuY2UiLCJtYXNzIiwiZW52ZWxvcGUiLCJkZXJpdmF0aXZlIiwiZGFtcGluZ1JhdGlvIiwidW5kYW1wZWRGcmVxMiIsImV4cG9uZW50aWFsRGVjYXkiLCJjYWxjQW5ndWxhckZyZXEiLCJleHAiLCJkIiwicG93IiwiZiIsImZhY3RvciIsImluaXRpYWxHdWVzcyIsInVuZGFtcGVkRnJlcSIsImFwcHJveGltYXRlUm9vdCIsInJvb3RJdGVyYXRpb25zIiwiZHVyYXRpb25LZXlzIiwicGh5c2ljc0tleXMiLCJpc1NwcmluZ1R5cGUiLCJnZXRTcHJpbmdPcHRpb25zIiwic3ByaW5nT3B0aW9ucyIsImlzUmVzb2x2ZWRGcm9tRHVyYXRpb24iLCJkZXJpdmVkIiwicmVzdERlbHRhIiwiZG9uZSIsImluaXRpYWxWZWxvY2l0eSIsImluaXRpYWxEZWx0YSIsInVuZGFtcGVkQW5ndWxhckZyZXEiLCJpc0dyYW51bGFyU2NhbGUiLCJhYnMiLCJyZXNvbHZlU3ByaW5nIiwiYW5ndWxhckZyZXEiLCJzaW4iLCJjb3MiLCJkYW1wZWRBbmd1bGFyRnJlcSIsImZyZXFGb3JUIiwic2luaCIsImNvc2giLCJjYWxjdWxhdGVkRHVyYXRpb24iLCJpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQiLCJpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkIiwiaW5lcnRpYSIsInBvd2VyIiwidGltZUNvbnN0YW50IiwiYm91bmNlRGFtcGluZyIsImJvdW5jZVN0aWZmbmVzcyIsIm1vZGlmeVRhcmdldCIsImlzT3V0T2ZCb3VuZHMiLCJuZWFyZXN0Qm91bmRhcnkiLCJhbXBsaXR1ZGUiLCJpZGVhbCIsImNhbGNEZWx0YSIsImNhbGNMYXRlc3QiLCJhcHBseUZyaWN0aW9uIiwidGltZVJlYWNoZWRCb3VuZGFyeSIsInNwcmluZyQxIiwiY2hlY2tDYXRjaEJvdW5kYXJ5IiwiaGFzVXBkYXRlZEZyYW1lIiwiY2FsY0JlemllciIsImExIiwiYTIiLCJzdWJkaXZpc2lvblByZWNpc2lvbiIsInN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyIsImJpbmFyeVN1YmRpdmlkZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsIm1ZMSIsIm1ZMiIsImdldFRGb3JYIiwiYVgiLCJpc0Vhc2luZ0FycmF5IiwiZWFzZTIiLCJlYXNpbmciLCJhY29zIiwiZWFzaW5nTG9va3VwIiwibGluZWFyIiwiZWFzaW5nRGVmaW5pdGlvblRvRnVuY3Rpb24iLCJ4MSIsInkxIiwieDIiLCJ5MiIsInRvIiwidG9Gcm9tRGlmZmVyZW5jZSIsIm1peE51bWJlciIsInByb2dyZXNzMiIsImh1ZVRvUmdiIiwicSIsImhzbGFUb1JnYmEiLCJtaXhMaW5lYXJDb2xvciIsImZyb21FeHBvIiwiZXhwbyIsImNvbG9yVHlwZXMiLCJnZXRDb2xvclR5cGUiLCJhc1JHQkEiLCJjb2xvcjIiLCJtb2RlbCIsIm1peENvbG9yIiwiZnJvbVJHQkEiLCJ0b1JHQkEiLCJibGVuZGVkIiwibWl4SW1tZWRpYXRlIiwibWl4TnVtYmVyMiIsImdldE1peGVyIiwibWl4Q29tcGxleCIsIm1peEFycmF5IiwibWl4T2JqZWN0IiwibnVtVmFsdWVzIiwiYmxlbmRWYWx1ZSIsIm1hdGNoT3JkZXIiLCJvcmRlcmVkT3JpZ2luIiwicG9pbnRlcnMiLCJvcmlnaW5JbmRleCIsIm9yaWdpblZhbHVlIiwidGVtcGxhdGUiLCJvcmlnaW5TdGF0cyIsInRhcmdldFN0YXRzIiwiY2FuSW50ZXJwb2xhdGUiLCJtaXhlciIsImNyZWF0ZU1peGVycyIsImN1c3RvbU1peGVyIiwibWl4ZXJzIiwibWl4ZXJGYWN0b3J5IiwibnVtTWl4ZXJzIiwiZWFzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImlzQ2xhbXAiLCJpbnB1dExlbmd0aCIsInJldmVyc2UiLCJpbnRlcnBvbGF0b3IiLCJwcm9ncmVzc0luUmFuZ2UiLCJmaWxsT2Zmc2V0IiwicmVtYWluaW5nIiwib2Zmc2V0UHJvZ3Jlc3MiLCJkZWZhdWx0T2Zmc2V0IiwiYXJyIiwiY29udmVydE9mZnNldFRvVGltZXMiLCJvIiwiZGVmYXVsdEVhc2luZyIsImtleWZyYW1lVmFsdWVzIiwidGltZXMiLCJlYXNpbmdGdW5jdGlvbnMiLCJhYnNvbHV0ZVRpbWVzIiwibWFwVGltZVRvS2V5ZnJhbWUiLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsImdlbmVyYXRvciIsInRpbWVTdGVwIiwiSW5maW5pdHkiLCJmcmFtZWxvb3BEcml2ZXIiLCJwYXNzVGltZXN0YW1wIiwic3RvcCIsImdlbmVyYXRvcnMiLCJkZWNheSIsInR3ZWVuIiwicGVyY2VudFRvUHJvZ3Jlc3MiLCJwZXJjZW50MiIsIk1haW5UaHJlYWRBbmltYXRpb24iLCJLZXlmcmFtZVJlc29sdmVyJDEiLCJob2xkVGltZSIsInN0YXJ0VGltZSIsImNhbmNlbFRpbWUiLCJjdXJyZW50VGltZSIsInBsYXliYWNrU3BlZWQiLCJwZW5kaW5nUGxheVN0YXRlIiwib25SZXNvbHZlZCIsImtleWZyYW1lcyQxIiwiZ2VuZXJhdG9yRmFjdG9yeSIsIm1hcFBlcmNlbnRUb0tleWZyYW1lcyIsIm1pcnJvcmVkR2VuZXJhdG9yIiwicmVzb2x2ZWREdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJwbGF5IiwicGF1c2UiLCJ0aWNrIiwic2FtcGxlIiwia2V5ZnJhbWVzMyIsInNwZWVkIiwidGltZVdpdGhvdXREZWxheSIsImlzSW5EZWxheVBoYXNlIiwiZnJhbWVHZW5lcmF0b3IiLCJjdXJyZW50SXRlcmF0aW9uIiwiZmxvb3IiLCJpdGVyYXRpb25Qcm9ncmVzcyIsImlzT2RkSXRlcmF0aW9uIiwiaXNBbmltYXRpb25GaW5pc2hlZCIsImZpbmlzaCIsImRyaXZlciIsIm5ld1NwZWVkIiwiaGFzQ2hhbmdlZCIsIm9uUGxheSIsIm5vdzIiLCJ0ZWFyZG93biIsIm9uU3RvcCIsInN0b3BEcml2ZXIiLCJ0aW1lMiIsImlzQmV6aWVyRGVmaW5pdGlvbiIsImlzV2FhcGlTdXBwb3J0ZWRFYXNpbmciLCJzdXBwb3J0ZWRXYWFwaUVhc2luZyIsImV2ZXJ5IiwiY3ViaWNCZXppZXJBc1N0cmluZyIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwiYW5pbWF0ZVN0eWxlIiwidmFsdWVOYW1lIiwia2V5ZnJhbWVPcHRpb25zIiwiaXRlcmF0aW9ucyIsImRpcmVjdGlvbiIsInN1cHBvcnRzV2FhcGkiLCJFbGVtZW50IiwiYWNjZWxlcmF0ZWRWYWx1ZXMiLCJzYW1wbGVEZWx0YSIsIm1heER1cmF0aW9uMiIsInJlcXVpcmVzUHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwicHJlZ2VuZXJhdGVLZXlmcmFtZXMiLCJzYW1wbGVBbmltYXRpb24iLCJwcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJtb3Rpb25WYWx1ZTMiLCJwcmVnZW5lcmF0ZWRBbmltYXRpb24iLCJwZW5kaW5nVGltZWxpbmUiLCJ0aW1lbGluZSIsIm9uZmluaXNoIiwicGxheWJhY2tSYXRlIiwicGxheVN0YXRlIiwiYXR0YWNoVGltZWxpbmUiLCJzYW1wbGVUaW1lIiwic2V0V2l0aFZlbG9jaXR5Iiwic3VwcG9ydHMiLCJIVE1MRWxlbWVudCIsImFuaW1hdGVNb3Rpb25WYWx1ZSIsImlzSGFuZG9mZiIsInZhbHVlVHJhbnNpdGlvbiIsInNob3VsZFNraXAiLCJpc1dpbGxDaGFuZ2VNb3Rpb25WYWx1ZSIsImFkZFVuaXF1ZUl0ZW0iLCJpdGVtIiwicmVtb3ZlSXRlbSIsIm1vdmVJdGVtIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlN1YnNjcmlwdGlvbk1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwibm90aWZ5IiwibnVtU3Vic2NyaXB0aW9ucyIsImdldFNpemUiLCJ3YXJuZWQiLCJ3YXJuT25jZSIsImNvbmRpdGlvbiIsIk1BWF9WRUxPQ0lUWV9ERUxUQSIsImlzRmxvYXQiLCJjb2xsZWN0TW90aW9uVmFsdWVzIiwidmVyc2lvbiIsImNhblRyYWNrVmVsb2NpdHkiLCJldmVudHMiLCJ1cGRhdGVBbmROb3RpZnkiLCJ1cGRhdGVkQXQiLCJzZXRQcmV2RnJhbWVWYWx1ZSIsInNldEN1cnJlbnQiLCJjaGFuZ2UiLCJyZW5kZXJSZXF1ZXN0IiwiaGFzQW5pbWF0ZWQiLCJwcmV2RnJhbWVWYWx1ZSIsInByZXZVcGRhdGVkQXQiLCJvbkNoYW5nZSIsInN1YnNjcmlwdGlvbiIsIm9uIiwidW5zdWJzY3JpYmUiLCJjbGVhckxpc3RlbmVycyIsImV2ZW50TWFuYWdlcnMiLCJhdHRhY2giLCJwYXNzaXZlRWZmZWN0Iiwic3RvcFBhc3NpdmVFZmZlY3QiLCJlbmRBbmltYXRpb24iLCJnZXRQcmV2aW91cyIsInN0YXJ0QW5pbWF0aW9uIiwiYW5pbWF0aW9uU3RhcnQiLCJhbmltYXRpb25Db21wbGV0ZSIsImNsZWFyQW5pbWF0aW9uIiwiYW5pbWF0aW9uQ2FuY2VsIiwiaXNBbmltYXRpbmciLCJkZXN0cm95Iiwic2V0TW90aW9uVmFsdWUiLCJoYXNWYWx1ZSIsImFkZFZhbHVlIiwic2V0VGFyZ2V0Iiwic2hvdWxkQmxvY2tBbmltYXRpb24iLCJwcm90ZWN0ZWRLZXlzIiwibmVlZHNBbmltYXRpbmciLCJzaG91bGRCbG9jayIsImFuaW1hdGVUYXJnZXQiLCJ0YXJnZXRBbmRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbk92ZXJyaWRlIiwid2lsbENoYW5nZSIsImFuaW1hdGlvbnMyIiwiYW5pbWF0aW9uVHlwZVN0YXRlIiwiZ2V0U3RhdGUiLCJIYW5kb2ZmQXBwZWFyQW5pbWF0aW9ucyIsImFwcGVhcklkIiwic2hvdWxkUmVkdWNlTW90aW9uIiwiYW5pbWF0ZVZhcmlhbnQiLCJ2YXJpYW50IiwiZ2V0QW5pbWF0aW9uIiwiZ2V0Q2hpbGRBbmltYXRpb25zIiwidmFyaWFudENoaWxkcmVuIiwiZm9yd2FyZERlbGF5IiwiYW5pbWF0ZUNoaWxkcmVuIiwiZmlyc3QiLCJsYXN0IiwibWF4U3RhZ2dlckR1cmF0aW9uIiwiZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24iLCJzb3J0Iiwic29ydEJ5VHJlZU9yZGVyIiwic29ydE5vZGVQb3NpdGlvbiIsInJlc29sdmVkRGVmaW5pdGlvbiIsInJldmVyc2VQcmlvcml0eU9yZGVyIiwibnVtQW5pbWF0aW9uVHlwZXMiLCJhbmltYXRlTGlzdCIsImNyZWF0ZUFuaW1hdGlvblN0YXRlIiwiY3JlYXRlU3RhdGUiLCJpc0luaXRpYWxSZW5kZXIiLCJidWlsZFJlc29sdmVkVHlwZVZhbHVlcyIsInNldEFuaW1hdGVGdW5jdGlvbiIsIm1ha2VBbmltYXRvciIsImNoYW5nZWRBY3RpdmVUeXBlIiwiZ2V0VmFyaWFudENvbnRleHQiLCJyZW1vdmVkS2V5cyIsImVuY291bnRlcmVkS2V5cyIsInJlbW92ZWRWYXJpYW50SW5kZXgiLCJ0eXBlU3RhdGUiLCJwcm9wSXNWYXJpYW50IiwiYWN0aXZlRGVsdGEiLCJpc0luaGVyaXRlZCIsIm1hbnVhbGx5QW5pbWF0ZU9uTW91bnQiLCJwcmV2UHJvcCIsInZhcmlhbnREaWRDaGFuZ2UiLCJjaGVja1ZhcmlhbnRzRGlkQ2hhbmdlIiwic2hvdWxkQW5pbWF0ZVR5cGUiLCJoYW5kbGVkUmVtb3ZlZFZhbHVlcyIsImRlZmluaXRpb25MaXN0IiwicmVzb2x2ZWRWYWx1ZXMiLCJwcmV2UmVzb2x2ZWRWYWx1ZXMiLCJhbGxLZXlzIiwibWFya1RvQW5pbWF0ZSIsInZhbHVlSGFzQ2hhbmdlZCIsImZhbGxiYWNrQW5pbWF0aW9uIiwiZmFsbGJhY2tUYXJnZXQiLCJnZXRCYXNlVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZSIsIl9hMiIsImNyZWF0ZVR5cGVTdGF0ZSIsIndoaWxlSW5WaWV3Iiwid2hpbGVEcmFnIiwid2hpbGVGb2N1cyIsIkFuaW1hdGlvbkZlYXR1cmUiLCJ1cGRhdGVBbmltYXRpb25Db250cm9sc1N1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInByZXZBbmltYXRlIiwiRXhpdEFuaW1hdGlvbkZlYXR1cmUiLCJpc1ByZXNlbnQiLCJpc1ByZXNlbnQyIiwib25FeGl0Q29tcGxldGUiLCJwcmV2SXNQcmVzZW50IiwicHJldlByZXNlbmNlQ29udGV4dCIsImV4aXRBbmltYXRpb24iLCJyZWdpc3RlciIsInhEZWx0YSIsInlEZWx0YSIsIlBhblNlc3Npb24iLCJoYW5kbGVycyIsImNvbnRleHRXaW5kb3ciLCJkcmFnU25hcFRvT3JpZ2luIiwibGFzdE1vdmVFdmVudCIsImxhc3RNb3ZlRXZlbnRJbmZvIiwidXBkYXRlUG9pbnQiLCJpbmZvMiIsImdldFBhbkluZm8iLCJoaXN0b3J5IiwiaXNQYW5TdGFydGVkIiwiaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQiLCJwb2ludDMiLCJ0aW1lc3RhbXAyIiwib25TdGFydCIsIm9uTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiZXZlbnQyIiwidHJhbnNmb3JtUG9pbnQiLCJoYW5kbGVQb2ludGVyVXAiLCJlbmQiLCJvbkVuZCIsIm9uU2Vzc2lvbkVuZCIsInJlc3VtZUFuaW1hdGlvbiIsInBhbkluZm8iLCJpbml0aWFsSW5mbyIsInBvaW50MiIsIm9uU2Vzc2lvblN0YXJ0IiwicmVtb3ZlTGlzdGVuZXJzIiwidXBkYXRlSGFuZGxlcnMiLCJzdWJ0cmFjdFBvaW50IiwibGFzdERldmljZVBvaW50Iiwic3RhcnREZXZpY2VQb2ludCIsImdldFZlbG9jaXR5MiIsInRpbWVEZWx0YSIsInRpbWVzdGFtcGVkUG9pbnQiLCJsYXN0UG9pbnQiLCJheGlzIiwiaXNOZWFyIiwibWF4RGlzdGFuY2UiLCJjYWxjQXhpc0RlbHRhIiwib3JpZ2luUG9pbnQiLCJ0cmFuc2xhdGUiLCJjYWxjQm94RGVsdGEiLCJjYWxjUmVsYXRpdmVBeGlzIiwicmVsYXRpdmUiLCJjYWxjUmVsYXRpdmVCb3giLCJjYWxjUmVsYXRpdmVBeGlzUG9zaXRpb24iLCJjYWxjUmVsYXRpdmVQb3NpdGlvbiIsImFwcGx5Q29uc3RyYWludHMiLCJlbGFzdGljIiwiY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzIiwiY2FsY1JlbGF0aXZlQ29uc3RyYWludHMiLCJsYXlvdXRCb3giLCJjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMiLCJsYXlvdXRBeGlzIiwiY29uc3RyYWludHNBeGlzIiwiY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMiLCJjb25zdHJhaW50c0JveCIsImNhbGNPcmlnaW4yIiwic291cmNlTGVuZ3RoIiwidGFyZ2V0TGVuZ3RoIiwicmViYXNlQXhpc0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHMiLCJyZWxhdGl2ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdEVsYXN0aWMiLCJyZXNvbHZlRHJhZ0VsYXN0aWMiLCJkcmFnRWxhc3RpYyIsInJlc29sdmVBeGlzRWxhc3RpYyIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJyZXNvbHZlUG9pbnRFbGFzdGljIiwibGFiZWwiLCJjcmVhdGVBeGlzRGVsdGEiLCJjcmVhdGVEZWx0YSIsImNyZWF0ZUF4aXMiLCJlYWNoQXhpcyIsImNvbnZlcnRCb3VuZGluZ0JveFRvQm94IiwiY29udmVydEJveFRvQm91bmRpbmdCb3giLCJ0cmFuc2Zvcm1Cb3hQb2ludHMiLCJ0cmFuc2Zvcm1Qb2ludDIiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJpc0lkZW50aXR5U2NhbGUiLCJzY2FsZTIiLCJoYXNTY2FsZSIsImhhc1RyYW5zZm9ybSIsImhhczJEVHJhbnNsYXRlIiwiaXMyRFRyYW5zbGF0ZSIsInNjYWxlUG9pbnQiLCJkaXN0YW5jZUZyb21PcmlnaW4iLCJzY2FsZWQiLCJhcHBseVBvaW50RGVsdGEiLCJib3hTY2FsZSIsImFwcGx5QXhpc0RlbHRhIiwiYXBwbHlCb3hEZWx0YSIsImJveCIsImFwcGx5VHJlZURlbHRhcyIsInRyZWVTY2FsZSIsInRyZWVQYXRoIiwiaXNTaGFyZWRUcmFuc2l0aW9uIiwidHJlZUxlbmd0aCIsInByb2plY3Rpb25EZWx0YSIsImRpc3BsYXkiLCJsYXlvdXRTY3JvbGwiLCJ0cmFuc2Zvcm1Cb3giLCJzbmFwVG9EZWZhdWx0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNsYXRlQXhpcyIsImRpc3RhbmNlMiIsInRyYW5zZm9ybUF4aXMiLCJ0cmFuc2Zvcm1zIiwic2NhbGVLZXkiLCJvcmlnaW5LZXkiLCJheGlzT3JpZ2luIiwieEtleXMiLCJ5S2V5cyIsIm1lYXN1cmVQYWdlQm94Iiwicm9vdFByb2plY3Rpb25Ob2RlMiIsInZpZXdwb3J0Qm94Iiwic2Nyb2xsMiIsImdldENvbnRleHRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJlbGVtZW50RHJhZ0NvbnRyb2xzIiwiVmlzdWFsRWxlbWVudERyYWdDb250cm9scyIsIm9wZW5HbG9iYWxMb2NrIiwiaXNEcmFnZ2luZyIsImN1cnJlbnREaXJlY3Rpb24iLCJoYXNNdXRhdGVkQ29uc3RyYWludHMiLCJvcmlnaW5FdmVudCIsInNuYXBUb0N1cnNvciIsImRyYWdTbmFwVG9PcmlnaW4yIiwicGF1c2VBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwiZHJhZ1Byb3BhZ2F0aW9uIiwib25EcmFnU3RhcnQiLCJyZXNvbHZlQ29uc3RyYWludHMiLCJpc0FuaW1hdGlvbkJsb2NrZWQiLCJnZXRBeGlzTW90aW9uVmFsdWUiLCJtZWFzdXJlZEF4aXMiLCJkcmFnRGlyZWN0aW9uTG9jayIsIm9uRGlyZWN0aW9uTG9jayIsIm9uRHJhZyIsImdldEN1cnJlbnREaXJlY3Rpb24iLCJ1cGRhdGVBeGlzIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJwYW5TZXNzaW9uIiwiZ2V0VHJhbnNmb3JtUGFnZVBvaW50Iiwib25EcmFnRW5kIiwiX3BvaW50Iiwic2hvdWxkRHJhZyIsImF4aXNWYWx1ZSIsImRyYWdDb25zdHJhaW50cyIsIm1lYXN1cmUiLCJwcmV2Q29uc3RyYWludHMiLCJyZXNvbHZlUmVmQ29uc3RyYWludHMiLCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJjb25zdHJhaW50c0VsZW1lbnQiLCJtZWFzdXJlZENvbnN0cmFpbnRzIiwidXNlckNvbnN0cmFpbnRzIiwiZHJhZ01vbWVudHVtIiwiZHJhZ1RyYW5zaXRpb24iLCJvbkRyYWdUcmFuc2l0aW9uRW5kIiwibW9tZW50dW1BbmltYXRpb25zIiwiaW5lcnRpYTIiLCJzdGFydEF4aXNWYWx1ZUFuaW1hdGlvbiIsImRyYWdLZXkiLCJleHRlcm5hbE1vdGlvblZhbHVlIiwic2NhbGVQb3NpdGlvbldpdGhpbkNvbnN0cmFpbnRzIiwiYm94UHJvZ3Jlc3MiLCJ1cGRhdGVTY3JvbGwiLCJ1cGRhdGVMYXlvdXQiLCJhZGRMaXN0ZW5lcnMiLCJzdG9wUG9pbnRlckxpc3RlbmVyIiwibWVhc3VyZURyYWdDb25zdHJhaW50cyIsInN0b3BNZWFzdXJlTGF5b3V0TGlzdGVuZXIiLCJzdG9wUmVzaXplTGlzdGVuZXIiLCJzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIiLCJoYXNMYXlvdXRDaGFuZ2VkIiwibG9ja1RocmVzaG9sZCIsIkRyYWdHZXN0dXJlIiwicmVtb3ZlR3JvdXBDb250cm9scyIsImNvbnRyb2xzIiwiZHJhZ0NvbnRyb2xzIiwiYXN5bmNIYW5kbGVyIiwiUGFuR2VzdHVyZSIsInJlbW92ZVBvaW50ZXJEb3duTGlzdGVuZXIiLCJvblBvaW50ZXJEb3duIiwicG9pbnRlckRvd25FdmVudCIsInNlc3Npb24iLCJjcmVhdGVQYW5IYW5kbGVycyIsIm9uUGFuU2Vzc2lvblN0YXJ0Iiwib25QYW5TdGFydCIsIm9uUGFuIiwib25QYW5FbmQiLCJpbXBvcnRfcmVhY3QxNyIsImlkNCIsInVzZUlkIiwic2FmZVRvUmVtb3ZlIiwiZ2xvYmFsUHJvamVjdGlvblN0YXRlIiwiaGFzQW5pbWF0ZWRTaW5jZVJlc2l6ZSIsImhhc0V2ZXJVcGRhdGVkIiwicGl4ZWxzVG9QZXJjZW50IiwicGl4ZWxzIiwiY29ycmVjdEJvcmRlclJhZGl1cyIsImNvcnJlY3QiLCJjb3JyZWN0Qm94U2hhZG93Iiwib3JpZ2luYWwiLCJzaGFkb3ciLCJ4U2NhbGUiLCJ5U2NhbGUiLCJhdmVyYWdlU2NhbGUiLCJpbXBvcnRfcmVhY3QxOCIsIk1lYXN1cmVMYXlvdXRXaXRoQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwibGF5b3V0R3JvdXAiLCJzd2l0Y2hMYXlvdXRHcm91cCIsImRlZmF1bHRTY2FsZUNvcnJlY3RvcnMiLCJncm91cCIsImRpZFVwZGF0ZSIsInNldE9wdGlvbnMiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsImxheW91dERlcGVuZGVuY3kiLCJ3aWxsVXBkYXRlIiwicHJvbW90ZSIsInJlbGVnYXRlIiwic3RhY2siLCJnZXRTdGFjayIsIm1lbWJlcnMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjdXJyZW50QW5pbWF0aW9uIiwiaXNMZWFkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJwcm9tb3RlQ29udGV4dCIsInNjaGVkdWxlQ2hlY2tBZnRlclVubW91bnQiLCJkZXJlZ2lzdGVyIiwiTWVhc3VyZUxheW91dCIsImFwcGx5VG8iLCJib3hTaGFkb3ciLCJib3JkZXJzIiwibnVtQm9yZGVycyIsImFzTnVtYmVyIiwiaXNQeCIsIm1peFZhbHVlcyIsImZvbGxvdyIsImxlYWQiLCJzaG91bGRDcm9zc2ZhZGVPcGFjaXR5IiwiaXNPbmx5TWVtYmVyIiwiZWFzZUNyb3NzZmFkZUluIiwib3BhY2l0eUV4aXQiLCJlYXNlQ3Jvc3NmYWRlT3V0IiwiYm9yZGVyTGFiZWwiLCJmb2xsb3dSYWRpdXMiLCJnZXRSYWRpdXMiLCJsZWFkUmFkaXVzIiwiY2FuTWl4IiwicmFkaXVzTmFtZSIsImNvbXByZXNzIiwiY29weUF4aXNJbnRvIiwib3JpZ2luQXhpcyIsImNvcHlCb3hJbnRvIiwib3JpZ2luQm94IiwicmVtb3ZlUG9pbnREZWx0YSIsInJlbW92ZUF4aXNEZWx0YSIsInNvdXJjZUF4aXMiLCJyZWxhdGl2ZVByb2dyZXNzIiwicmVtb3ZlQXhpc1RyYW5zZm9ybXMiLCJ4S2V5czIiLCJ5S2V5czIiLCJyZW1vdmVCb3hUcmFuc2Zvcm1zIiwic291cmNlQm94IiwiaXNBeGlzRGVsdGFaZXJvIiwiaXNEZWx0YVplcm8iLCJib3hFcXVhbHMiLCJib3hFcXVhbHNSb3VuZGVkIiwiYXNwZWN0UmF0aW8iLCJOb2RlU3RhY2siLCJzY2hlZHVsZVJlbmRlciIsInByZXZMZWFkIiwiaW5kZXhPZk5vZGUiLCJmaW5kSW5kZXgiLCJtZW1iZXIiLCJwcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJzaG93IiwicmVzdW1lRnJvbSIsInByZXNlcnZlT3BhY2l0eSIsInNuYXBzaG90IiwiYW5pbWF0aW9uVmFsdWVzIiwiaXNVcGRhdGluZyIsImlzTGF5b3V0RGlydHkiLCJjcm9zc2ZhZGUiLCJoaWRlIiwiZXhpdEFuaW1hdGlvbkNvbXBsZXRlIiwicmVzdW1pbmdGcm9tIiwicmVtb3ZlTGVhZFNuYXBzaG90IiwiYnVpbGRQcm9qZWN0aW9uVHJhbnNmb3JtIiwibGF0ZXN0VHJhbnNmb3JtIiwieFRyYW5zbGF0ZSIsInlUcmFuc2xhdGUiLCJ6VHJhbnNsYXRlIiwiZWxlbWVudFNjYWxlWCIsImVsZW1lbnRTY2FsZVkiLCJjb21wYXJlQnlEZXB0aCIsImlzRGlydHkiLCJ0aW1lb3V0IiwiY2hlY2tFbGFwc2VkIiwicmVjb3JkIiwiZGF0YSIsIk1vdGlvbkRlYnVnIiwiaXNTVkdFbGVtZW50IiwiU1ZHRWxlbWVudCIsImFuaW1hdGVTaW5nbGVWYWx1ZSIsIm1vdGlvblZhbHVlJDEiLCJ0cmFuc2Zvcm1BeGVzIiwiaGlkZGVuVmlzaWJpbGl0eSIsInZpc2liaWxpdHkiLCJhbmltYXRpb25UYXJnZXQiLCJpZDIiLCJwcm9qZWN0aW9uRnJhbWVEYXRhIiwidG90YWxOb2RlcyIsInJlc29sdmVkVGFyZ2V0RGVsdGFzIiwicmVjYWxjdWxhdGVkUHJvamVjdGlvbiIsInJlc2V0RGlzdG9ydGluZ1RyYW5zZm9ybSIsInNoYXJlZEFuaW1hdGlvblZhbHVlcyIsInNldFN0YXRpY1ZhbHVlIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJhdHRhY2hSZXNpemVMaXN0ZW5lciIsImRlZmF1bHRQYXJlbnQiLCJtZWFzdXJlU2Nyb2xsIiwiY2hlY2tJc1Njcm9sbFJvb3QiLCJyZXNldFRyYW5zZm9ybSIsIlByb2plY3Rpb25Ob2RlIiwiYW5pbWF0aW9uSWQiLCJpc1RyZWVBbmltYXRpbmciLCJpc1Byb2plY3Rpb25EaXJ0eSIsImlzU2hhcmVkUHJvamVjdGlvbkRpcnR5IiwiaXNUcmFuc2Zvcm1EaXJ0eSIsInVwZGF0ZU1hbnVhbGx5QmxvY2tlZCIsInVwZGF0ZUJsb2NrZWRCeVJlc2l6ZSIsImlzU1ZHIiwibmVlZHNSZXNldCIsInNob3VsZFJlc2V0VHJhbnNmb3JtIiwiZXZlbnRIYW5kbGVycyIsImhhc1RyZWVBbmltYXRlZCIsInVwZGF0ZVNjaGVkdWxlZCIsInByb2plY3Rpb25VcGRhdGVTY2hlZHVsZWQiLCJjaGVja1VwZGF0ZUZhaWxlZCIsImNsZWFyQWxsU25hcHNob3RzIiwidXBkYXRlUHJvamVjdGlvbiIsIm5vZGVzIiwicHJvcGFnYXRlRGlydHlOb2RlcyIsInJlc29sdmVUYXJnZXREZWx0YSIsImNhbGNQcm9qZWN0aW9uIiwiY2xlYW5EaXJ0eU5vZGVzIiwiaGFzUHJvamVjdGVkIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uUHJvZ3Jlc3MiLCJzaGFyZWROb2RlcyIsInBhdGgiLCJub3RpZnlMaXN0ZW5lcnMiLCJhcmdzIiwic3Vic2NyaXB0aW9uTWFuYWdlciIsImhhc0xpc3RlbmVycyIsImNhbmNlbERlbGF5IiwicmVzaXplVW5ibG9ja1VwZGF0ZSIsImZpbmlzaEFuaW1hdGlvbiIsInJlZ2lzdGVyU2hhcmVkTm9kZSIsImhhc1JlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsIm5ld0xheW91dCIsImlzVHJlZUFuaW1hdGlvbkJsb2NrZWQiLCJyZWxhdGl2ZVRhcmdldCIsImxheW91dFRyYW5zaXRpb24iLCJkZWZhdWx0TGF5b3V0VHJhbnNpdGlvbiIsIm9uTGF5b3V0QW5pbWF0aW9uU3RhcnQiLCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlIiwidGFyZ2V0Q2hhbmdlZCIsInRhcmdldExheW91dCIsImhhc09ubHlSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJsYXlvdXRSb290Iiwic2V0QW5pbWF0aW9uT3JpZ2luIiwiYW5pbWF0aW9uT3B0aW9ucyIsImJsb2NrVXBkYXRlIiwidW5ibG9ja1VwZGF0ZSIsImlzVXBkYXRlQmxvY2tlZCIsInN0YXJ0VXBkYXRlIiwicmVzZXRTa2V3QW5kUm90YXRpb24iLCJnZXRUcmFuc2Zvcm1UZW1wbGF0ZSIsInNob3VsZE5vdGlmeUxpc3RlbmVycyIsInByZXZUcmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidXBkYXRlU25hcHNob3QiLCJ1cGRhdGVXYXNCbG9ja2VkIiwiY2xlYXJNZWFzdXJlbWVudHMiLCJjbGVhcklzTGF5b3V0RGlydHkiLCJIYW5kb2ZmQ2FuY2VsQWxsQW5pbWF0aW9ucyIsInJlc2V0VHJhbnNmb3JtU3R5bGUiLCJub3RpZnlMYXlvdXRVcGRhdGUiLCJwcmVSZW5kZXIiLCJjbGVhclNuYXBzaG90IiwicmVtb3ZlTGVhZFNuYXBzaG90cyIsInNjaGVkdWxlVXBkYXRlUHJvamVjdGlvbiIsImFsd2F5c01lYXN1cmVMYXlvdXQiLCJwcmV2TGF5b3V0IiwibGF5b3V0Q29ycmVjdGVkIiwicGhhc2UiLCJpc1Jvb3QiLCJpc1Jlc2V0UmVxdWVzdGVkIiwiaGFzUHJvamVjdGlvbiIsInRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ0cmFuc2Zvcm1UZW1wbGF0ZUhhc0NoYW5nZWQiLCJyZW1vdmVUcmFuc2Zvcm0iLCJwYWdlQm94IiwicmVtb3ZlRWxlbWVudFNjcm9sbCIsInJvdW5kQm94IiwibWVhc3VyZWRCb3giLCJib3hXaXRob3V0U2Nyb2xsIiwicm9vdFNjcm9sbCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtT25seSIsIndpdGhUcmFuc2Zvcm1zIiwiYm94V2l0aG91dFRyYW5zZm9ybSIsIm5vZGVCb3giLCJzZXRUYXJnZXREZWx0YSIsInRhcmdldERlbHRhIiwiZm9yY2VSZWxhdGl2ZVBhcmVudFRvUmVzb2x2ZVRhcmdldCIsInJlbGF0aXZlUGFyZW50IiwicmVzb2x2ZWRSZWxhdGl2ZVRhcmdldEF0IiwiZm9yY2VSZWNhbGN1bGF0aW9uIiwiZ2V0TGVhZCIsImlzU2hhcmVkIiwiY2FuU2tpcCIsImF0dGVtcHRUb1Jlc29sdmVSZWxhdGl2ZVRhcmdldCIsImdldENsb3Nlc3RQcm9qZWN0aW5nUGFyZW50IiwicmVsYXRpdmVUYXJnZXRPcmlnaW4iLCJ0YXJnZXRXaXRoVHJhbnNmb3JtcyIsImlzUHJvamVjdGluZyIsInBlbmRpbmdBbmltYXRpb24iLCJwcmV2VHJlZVNjYWxlWCIsInByZXZUcmVlU2NhbGVZIiwicHJvamVjdGlvblRyYW5zZm9ybSIsInByb2plY3Rpb25EZWx0YVdpdGhUcmFuc2Zvcm0iLCJwcmV2UHJvamVjdGlvblRyYW5zZm9ybSIsIm5vdGlmeUFsbDIiLCJzbmFwc2hvdExhdGVzdFZhbHVlcyIsIm1peGVkVmFsdWVzIiwicmVsYXRpdmVMYXlvdXQiLCJzbmFwc2hvdFNvdXJjZSIsImxheW91dFNvdXJjZSIsImlzU2hhcmVkTGF5b3V0QW5pbWF0aW9uIiwiaGFzT3BhY2l0eUNyb3NzZmFkZSIsInByZXZSZWxhdGl2ZVRhcmdldCIsIm1peFRhcmdldERlbHRhIiwibWl4QXhpc0RlbHRhIiwibWl4Qm94IiwiY29tcGxldGVBbmltYXRpb24iLCJhcHBseVRyYW5zZm9ybXNUb1RhcmdldCIsInNob3VsZEFuaW1hdGVQb3NpdGlvbk9ubHkiLCJhbmltYXRpb25UeXBlIiwieExlbmd0aCIsInlMZW5ndGgiLCJpbml0aWFsUHJvbW90aW9uQ29uZmlnIiwic2hvdWxkUHJlc2VydmVGb2xsb3dPcGFjaXR5IiwiZ2V0UHJldkxlYWQiLCJoYXNEaXN0b3J0aW5nVHJhbnNmb3JtIiwicmVzZXRWYWx1ZXMiLCJzdHlsZXMiLCJwb2ludGVyRXZlbnRzIiwiZW1wdHlTdHlsZXMiLCJ2YWx1ZXNUb1JlbmRlciIsImNvcnJlY3RlZCIsIm51bSIsInJlc2V0VHJlZSIsIm1lYXN1cmVkTGF5b3V0IiwiYXhpc1NuYXBzaG90IiwibGF5b3V0RGVsdGEiLCJ2aXN1YWxEZWx0YSIsInBhcmVudFNuYXBzaG90IiwicGFyZW50TGF5b3V0IiwicmVsYXRpdmVTbmFwc2hvdCIsIm9uQmVmb3JlTGF5b3V0TWVhc3VyZSIsIm1peEF4aXMiLCJ1c2VyQWdlbnRDb250YWlucyIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJvdW5kUG9pbnQiLCJyb3VuZEF4aXMiLCJEb2N1bWVudFByb2plY3Rpb25Ob2RlIiwibm90aWZ5MiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicm9vdFByb2plY3Rpb25Ob2RlIiwiSFRNTFByb2plY3Rpb25Ob2RlIiwiZG9jdW1lbnROb2RlIiwicG9zaXRpb24iLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImhhc1JlZHVjZWRNb3Rpb25MaXN0ZW5lciIsImluaXRQcmVmZXJzUmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtb3Rpb25NZWRpYVF1ZXJ5Iiwic2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJuZXh0VmFsdWUiLCJwcmV2VmFsdWUiLCJleGlzdGluZ1ZhbHVlIiwibGF0ZXN0VmFsdWUiLCJnZXRTdGF0aWNWYWx1ZSIsInJlbW92ZVZhbHVlIiwidmFsdWVUeXBlcyIsImZpbmRWYWx1ZVR5cGUiLCJmZWF0dXJlTmFtZXMiLCJudW1GZWF0dXJlcyIsInByb3BFdmVudEhhbmRsZXJzIiwibnVtVmFyaWFudFByb3BzIiwiZ2V0Q2xvc2VzdFByb2plY3RpbmdOb2RlIiwiYWxsb3dQcm9qZWN0aW9uIiwidmFsdWVTdWJzY3JpcHRpb25zIiwicHJldk1vdGlvblZhbHVlcyIsInByb3BFdmVudFN1YnNjcmlwdGlvbnMiLCJub3RpZnlVcGRhdGUiLCJ0cmlnZ2VyQnVpbGQiLCJyZW5kZXJJbnN0YW5jZSIsImJhc2VUYXJnZXQiLCJpbml0aWFsVmFsdWVzIiwiaW5pdGlhbE1vdGlvblZhbHVlcyIsIl9wcm9wcyIsIl9wcmV2UHJvcHMiLCJfdmlzdWFsRWxlbWVudCIsInJlbW92ZUZyb21WYXJpYW50VHJlZSIsImFkZFZhcmlhbnRDaGlsZCIsImJpbmRUb01vdGlvblZhbHVlIiwidmFsdWVJc1RyYW5zZm9ybSIsInJlbW92ZU9uQ2hhbmdlIiwicmVtb3ZlT25SZW5kZXJSZXF1ZXN0Iiwib3RoZXIiLCJzb3J0SW5zdGFuY2VOb2RlUG9zaXRpb24iLCJyZW5kZXJlZFByb3BzIiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsInN0cmljdE1lc3NhZ2UiLCJpZ25vcmVTdHJpY3QiLCJGZWF0dXJlQ29uc3RydWN0b3IiLCJNZWFzdXJlTGF5b3V0Q29tcG9uZW50IiwiZmVhdHVyZSIsImJ1aWxkIiwibWVhc3VyZUluc3RhbmNlVmlld3BvcnRCb3giLCJsaXN0ZW5lciIsImhhbmRsZUNoaWxkTW90aW9uVmFsdWUiLCJnZXRWYXJpYW50IiwiZ2V0Q2xvc2VzdFZhcmlhbnROb2RlIiwic3RhcnRBdFBhcmVudCIsImNvbnRleHQyIiwiY2xvc2VzdFZhcmlhbnROb2RlIiwicmVtb3ZlVmFsdWVGcm9tUmVuZGVyU3RhdGUiLCJnZXRCYXNlVGFyZ2V0RnJvbVByb3BzIiwicmVhZFZhbHVlRnJvbUluc3RhbmNlIiwic2V0QmFzZVRhcmdldCIsInZhbHVlRnJvbUluaXRpYWwiLCJET01WaXN1YWxFbGVtZW50IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJnZXRDb21wdXRlZFN0eWxlMiIsIkhUTUxWaXN1YWxFbGVtZW50IiwiZGVmYXVsdFR5cGUiLCJjb21wdXRlZFN0eWxlIiwiY2hpbGRTdWJzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsIlNWR1Zpc3VhbEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpbXBvcnRfcmVhY3QxOSIsImNyZWF0ZURvbVZpc3VhbEVsZW1lbnQiLCJpbXBvcnRfcmVhY3QyMCIsInVzZUlzTW91bnRlZCIsImltcG9ydF9yZWFjdDIxIiwiZm9yY2VkUmVuZGVyQ291bnQiLCJzZXRGb3JjZWRSZW5kZXJDb3VudCIsInVzZVN0YXRlIiwiZm9yY2VSZW5kZXIiLCJkZWZlcnJlZEZvcmNlUmVuZGVyIiwiUmVhY3QyIiwiaW1wb3J0X3JlYWN0MjIiLCJQb3BDaGlsZE1lYXN1cmUiLCJjaGlsZFJlZiIsInNpemVSZWYiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJQb3BDaGlsZCIsIm5vbmNlIiwiZGF0YXNldCIsIm1vdGlvblBvcElkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVtb3ZlQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJSZWFjdDMiLCJpbXBvcnRfcmVhY3QyMyIsIlByZXNlbmNlQ2hpbGQiLCJwcmVzZW5jZUFmZmVjdHNMYXlvdXQiLCJtb2RlIiwicHJlc2VuY2VDaGlsZHJlbiIsIm5ld0NoaWxkcmVuTWFwIiwiY2hpbGRJZCIsIl8iLCJpbXBvcnRfcmVhY3QyNCIsIlJlYWN0NCIsImltcG9ydF9yZWFjdDI1IiwiZ2V0Q2hpbGRLZXkiLCJ1cGRhdGVDaGlsZExvb2t1cCIsImFsbENoaWxkcmVuIiwib25seUVsZW1lbnRzIiwiZmlsdGVyZWQiLCJDaGlsZHJlbiIsImlzVmFsaWRFbGVtZW50IiwiZXhpdEJlZm9yZUVudGVyIiwiZmlsdGVyZWRDaGlsZHJlbiIsImNoaWxkcmVuVG9SZW5kZXIiLCJleGl0aW5nQ2hpbGRyZW4iLCJwcmVzZW50Q2hpbGRyZW4iLCJwcmVzZW50S2V5cyIsInRhcmdldEtleXMiLCJudW1QcmVzZW50IiwiY29tcG9uZW50IiwiaW5zZXJ0aW9uSW5kZXgiLCJleGl0aW5nQ29tcG9uZW50Iiwib25FeGl0IiwibGVmdE92ZXJLZXlzIiwiY2hpbGRLZXkiLCJsZWZ0T3ZlcktleSIsInByZXNlbnRDaGlsZCIsInByZXNlbnRDaGlsZEtleSIsIlJlYWN0NSIsImltcG9ydF9yZWFjdDI2IiwiUmVhY3Q2IiwiaW1wb3J0X3JlYWN0MjciLCJzZXRJc0xvYWRlZCIsImlzTGF6eUJ1bmRsZSIsImxvYWRlZFJlbmRlcmVyIiwibG9hZGVkRmVhdHVyZXMiLCJpbXBvcnRfcmVhY3QyOCIsIm5vZGVHcm91cCIsImRpcnR5QWxsIiwiZGlydHkiLCJSZWFjdDciLCJpbXBvcnRfcmVhY3QyOSIsInNob3VsZEluaGVyaXRHcm91cCIsInNob3VsZEluaGVyaXRJZCIsImxheW91dEdyb3VwQ29udGV4dCIsImRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJ1cHN0cmVhbUlkIiwibWVtb2l6ZWRDb250ZXh0IiwiaW1wb3J0X3JlYWN0MzAiLCJSZW9yZGVyQ29udGV4dCIsImNoZWNrUmVvcmRlciIsIml0ZW0yIiwibmV4dE9mZnNldCIsIm5leHRJdGVtIiwibmV4dExheW91dCIsIm5leHRJdGVtQ2VudGVyIiwiUmVhY3Q4IiwiaW1wb3J0X3JlYWN0MzEiLCJSZW9yZGVyR3JvdXAiLCJhcyIsIm9uUmVvcmRlciIsImlzUmVvcmRlcmluZyIsInJlZ2lzdGVySXRlbSIsImlkeCIsImNvbXBhcmVNaW4iLCJ1cGRhdGVPcmRlciIsIm5ld09yZGVyIiwiR3JvdXAiLCJpbXBvcnRfcmVhY3QzMiIsInNldExhdGVzdCIsImlzQ3VzdG9tVmFsdWVUeXBlIiwiZ2V0TWl4ZXIyIiwidXNlSW1tZWRpYXRlIiwiYXJnT2Zmc2V0IiwiaW5wdXRWYWx1ZSIsImlucHV0UmFuZ2UiLCJvdXRwdXRSYW5nZSIsInVzZUNvbWJpbmVNb3Rpb25WYWx1ZXMiLCJjb21iaW5lVmFsdWVzIiwidXBkYXRlVmFsdWUiLCJzY2hlZHVsZVVwZGF0ZSIsInVzZUNvbXB1dGVkIiwiY29tcHV0ZSIsImlucHV0UmFuZ2VPclRyYW5zZm9ybWVyIiwidXNlTGlzdFRyYW5zZm9ybSIsIlJlYWN0OSIsImltcG9ydF9yZWFjdDMzIiwidXNlRGVmYXVsdE1vdGlvblZhbHVlIiwiUmVvcmRlckl0ZW0iLCJsYXRlc3RYIiwibGF0ZXN0WSIsImdlc3R1cmVQb2ludCIsIm9uTGF5b3V0TWVhc3VyZSIsIm1lYXN1cmVkIiwiSXRlbSIsImZyYWdtZW50cyIsIm51bUZyYWdtZW50cyIsImJ1aWxkVmFsdWUiLCJpbXBvcnRfcmVhY3QzNCIsImFjdGl2ZVNwcmluZ0FuaW1hdGlvbiIsInN0b3BBbmltYXRpb24yIiwiaW1wb3J0X3JlYWN0MzUiLCJ1cGRhdGVWZWxvY2l0eSIsInJlc29sdmVFbGVtZW50cyIsImVsZW1lbnRzIiwic2NvcGUiLCJzZWxlY3RvckNhY2hlIiwicXVlcnlTZWxlY3RvckFsbCIsInJlc2l6ZUhhbmRsZXJzIiwib2JzZXJ2ZXIiLCJnZXRFbGVtZW50U2l6ZSIsImJvcmRlckJveFNpemUiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwibm90aWZ5VGFyZ2V0IiwiY29udGVudFJlY3QiLCJjb250ZW50U2l6ZSIsIm5vdGlmeUFsbCIsImNyZWF0ZVJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVFbGVtZW50IiwiZWxlbWVudEhhbmRsZXJzIiwid2luZG93Q2FsbGJhY2tzIiwid2luZG93UmVzaXplSGFuZGxlciIsImNyZWF0ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZXNpemVXaW5kb3ciLCJyZXNpemUiLCJtYXhFbGFwc2VkMiIsImNyZWF0ZUF4aXNJbmZvIiwic2Nyb2xsTGVuZ3RoIiwidGFyZ2V0T2Zmc2V0IiwiY29udGFpbmVyTGVuZ3RoIiwiY3JlYXRlU2Nyb2xsSW5mbyIsInVwZGF0ZUF4aXNJbmZvIiwiYXhpc05hbWUiLCJwcmV2VGltZSIsInVwZGF0ZVNjcm9sbEluZm8iLCJjYWxjSW5zZXQiLCJjb250YWluZXIiLCJpbnNldCIsIm9mZnNldFBhcmVudCIsInN2Z0JvdW5kaW5nQm94IiwicGFyZW50Qm91bmRpbmdCb3giLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJzdmciLCJwYXJlbnROb2RlIiwiU2Nyb2xsT2Zmc2V0IiwiRW50ZXIiLCJFeGl0IiwiQW55IiwiQWxsIiwibmFtZWRFZGdlcyIsImNlbnRlciIsInJlc29sdmVFZGdlIiwiZWRnZSIsImFzTnVtYmVyMiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZGVmYXVsdE9mZnNldDIiLCJyZXNvbHZlT2Zmc2V0IiwidGFyZ2V0SW5zZXQiLCJvZmZzZXREZWZpbml0aW9uIiwidGFyZ2V0UG9pbnQiLCJjb250YWluZXJQb2ludCIsImdldFRhcmdldFNpemUiLCJyZXNvbHZlT2Zmc2V0cyIsImxlbmd0aExhYmVsIiwidGFyZ2V0U2l6ZSIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiY29udGFpbmVyU2l6ZSIsIm51bU9mZnNldHMiLCJpbnRlcnBvbGF0b3JPZmZzZXRzIiwiY3JlYXRlT25TY3JvbGxIYW5kbGVyIiwib25TY3JvbGwiLCJzY3JvbGxMaXN0ZW5lcnMiLCJyZXNpemVMaXN0ZW5lcnMiLCJvblNjcm9sbEhhbmRsZXJzIiwiZ2V0RXZlbnRUYXJnZXQiLCJjb250YWluZXJIYW5kbGVycyIsImNvbnRhaW5lckhhbmRsZXIiLCJtZWFzdXJlQWxsIiwidXBkYXRlQWxsIiwibGlzdGVuZXIyIiwiY3VycmVudEhhbmRsZXJzIiwic2Nyb2xsTGlzdGVuZXIiLCJpbXBvcnRfcmVhY3QzNiIsInJlZldhcm5pbmciLCJjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFhQcm9ncmVzcyIsInNjcm9sbFlQcm9ncmVzcyIsImxheW91dEVmZmVjdCIsInVzZUxpZmVjeWNsZUVmZmVjdCIsImltcG9ydF9yZWFjdDM3IiwiaW5pdGlhbFRpbWVzdGFtcCIsInByb3ZpZGVUaW1lU2luY2VTdGFydCIsIldpbGxDaGFuZ2VNb3Rpb25WYWx1ZSIsIm1lbWJlck5hbWUiLCJpbXBvcnRfcmVhY3QzOCIsImltcG9ydF9yZWFjdDM5IiwicmVkdWNlZE1vdGlvblByZWZlcmVuY2UiLCJzZXRWYXJpYW50cyIsInZhcmlhbnRMYWJlbHMiLCJyZXZlcnNlZExhYmVscyIsInNldFZhbHVlcyIsImhhc01vdW50ZWQiLCJzdWJzY3JpYmVycyIsIm9ic2VydmVUaW1lbGluZSIsInByZXZQcm9ncmVzcyIsIm9uRnJhbWUiLCJwZXJjZW50YWdlIiwic3VwcG9ydHNTY3JvbGxUaW1lbGluZSIsIlNjcm9sbFRpbWVsaW5lIiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjYXRjaCIsImdldEFsbCIsInByb3BOYW1lIiwic2V0QWxsIiwibmV3VmFsdWUiLCJjYW5jZWxBbGwiLCJjYW5jZWxUaW1lbGluZSIsInJ1bkFsbCIsIm1ldGhvZE5hbWUiLCJpc0RPTUtleWZyYW1lcyIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsImNhbGNOZXh0VGltZSIsImxhYmVscyIsInJhbmdlU2l6ZSIsImdldEVhc2luZ0ZvclNlZ21lbnQiLCJlcmFzZUtleWZyYW1lcyIsInNlcXVlbmNlIiwiZW5kVGltZSIsImF0IiwiYWRkS2V5ZnJhbWVzIiwiY29tcGFyZUJ5VGltZSIsImRlZmF1bHRTZWdtZW50RWFzaW5nIiwiY3JlYXRlQW5pbWF0aW9uc0Zyb21TZXF1ZW5jZSIsImRlZmF1bHRUcmFuc2l0aW9uIiwic2VxdWVuY2VUcmFuc2l0aW9uIiwiZGVmYXVsdER1cmF0aW9uIiwiYW5pbWF0aW9uRGVmaW5pdGlvbnMiLCJzZXF1ZW5jZXMiLCJlbGVtZW50Q2FjaGUiLCJ0aW1lTGFiZWxzIiwic2VnbWVudCIsInN1YmplY3QiLCJtYXhEdXJhdGlvbjMiLCJyZXNvbHZlVmFsdWVTZXF1ZW5jZSIsInZhbHVlS2V5ZnJhbWVzIiwidmFsdWVTZXF1ZW5jZSIsImVsZW1lbnRJbmRleCIsIm51bUVsZW1lbnRzIiwidmFsdWVLZXlmcmFtZXNBc0xpc3QiLCJrZXlmcmFtZXNBc0xpc3QiLCJyZW1haW5pbmdUcmFuc2l0aW9uIiwiY2FsY3VsYXRlZERlbGF5IiwibnVtS2V5ZnJhbWVzIiwiYWJzb2x1dGVEZWx0YSIsImlzTnVtYmVyS2V5ZnJhbWVzQXJyYXkiLCJzcHJpbmdUcmFuc2l0aW9uIiwic3ByaW5nRWFzaW5nIiwidGFyZ2V0VGltZSIsInJlbWFpbmRlciIsInVuc2hpZnQiLCJzdWJqZWN0U2VxdWVuY2UiLCJnZXRTdWJqZWN0U2VxdWVuY2UiLCJnZXRWYWx1ZVNlcXVlbmNlIiwiZ2V0VmFsdWVUcmFuc2l0aW9uMiIsInZhbHVlU2VxdWVuY2VzIiwidmFsdWVPZmZzZXQiLCJ2YWx1ZUVhc2luZyIsImlzTnVtYmVyIiwiYW5pbWF0ZUVsZW1lbnRzIiwiZWxlbWVudE9yU2VsZWN0b3IiLCJpc1NlcXVlbmNlIiwiYW5pbWF0ZVNlcXVlbmNlIiwic2NvcGVkQW5pbWF0ZSIsInZhbHVlT3JFbGVtZW50T3JTZXF1ZW5jZSIsImltcG9ydF9yZWFjdDQwIiwiaXRlbXMiLCJzZXRJdGVtIiwicnVuQ3ljbGUiLCJ0aHJlc2hvbGRzIiwiYWN0aXZlSW50ZXJzZWN0aW9ucyIsIm9uSW50ZXJzZWN0aW9uQ2hhbmdlIiwibmV3T25FbmQiLCJvYnNlcnZlcjIiLCJkaXNjb25uZWN0IiwiaW1wb3J0X3JlYWN0NDEiLCJzZXRJblZpZXciLCJvbkVudGVyIiwiY29tcG9uZW50Q29udHJvbHMiLCJuYXRpdmVFdmVudCIsImNyZWF0ZURyYWdDb250cm9scyIsImltcG9ydF9yZWFjdDQyIiwic3RhcnRUcmFuc2l0aW9uIiwiaW1wb3J0X3JlYWN0NDMiLCJmb3JjZVVwZGF0ZSIsInN0YXJ0SW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1bmxvY2tPbkZyYW1lUmVmIiwiUmVhY3QxMCIsInJlc2V0IiwiYXBwZWFyU3RvcmVJZCIsImFwcGVhckFuaW1hdGlvblN0b3JlIiwiaGFuZG9mZkZyYW1lVGltZSIsImhhbmRvZmZPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJlbGVtZW50SWQiLCJfdmFsdWUiLCJfZnJhbWUiLCJvcHRpbWlzZWRWYWx1ZU5hbWUiLCJzdG9yZUlkIiwib3B0aW1pc2VkQW5pbWF0aW9uIiwiY2FuY2VsQW5pbWF0aW9uIiwiZXJyb3IiLCJzdGFydEZyYW1lVGltZSIsInJlYWR5QW5pbWF0aW9uIiwib25SZWFkeSIsImFwcGVhckFuaW1hdGlvbiIsInJlYWR5IiwiaW1wb3J0X3JlYWN0NDQiLCJjcmVhdGVPYmplY3QiLCJTdGF0ZVZpc3VhbEVsZW1lbnQiLCJyZXN0b3JlVHJhbnNmb3JtIiwiX3N0YXRlIiwiaW5pdGlhbFN0YXRlIiwic2V0QW5pbWF0aW9uU3RhdGUiLCJhbmltYXRpb25EZWZpbml0aW9uIiwiaW1wb3J0X3JlYWN0NDUiLCJtYXhTY2FsZSIsImludmVydFNjYWxlIiwiaGFzV2FybmVkIiwicGFyZW50U2NhbGVYIiwicGFyZW50U2NhbGVZIiwiUmVhY3QxMSIsImlkMyIsInNjcm9sbFRpbWVsaW5lRmFsbGJhY2siLCJ0aW1lbGluZUNhY2hlIiwiZ2V0VGltZWxpbmUiLCJnZXRPcmlnaW5JbmRleCIsInRvdGFsIiwibGFzdEluZGV4Iiwic3RhcnREZWxheSIsIm1heERlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsNkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw2QkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFB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RUFDL0IsTUFBTTB0QixRQUFBLEdBQVc0a0MsV0FBQSxDQUFZdHlELE9BQU87RUFDcEMsSUFBSSxPQUFPK25ELFFBQUEsS0FBYSxZQUFZO0lBQ2hDLE9BQU9tQyxlQUFBLENBQWdCbkMsUUFBQSxFQUFVcjZCLFFBQVE7RUFDN0MsT0FDSztJQUNELE9BQU9xNkIsUUFBQSxDQUFTajZCLGNBQUEsQ0FBZUosUUFBUTtFQUMzQztBQUNKOzs7QUMvQkEsU0FBUzZrQyxlQUFlbGdELElBQUEsRUFBTW1nRCxLQUFBLEVBQU87RUFDakMsSUFBSW5nRCxJQUFBLEtBQVMsU0FBUztJQUNsQixPQUFPO0VBQ1gsT0FDSztJQUNELE1BQU1vZ0QsU0FBQSxHQUFZRCxLQUFBLEdBQVE7SUFDMUIsT0FBT25nRCxJQUFBLEtBQVMsU0FBU29nRCxTQUFBLEdBQVlBLFNBQUEsR0FBWTtFQUNyRDtBQUNKO0FBQ0EsU0FBU25wRSxRQUFRZ29CLFFBQUEsR0FBVyxLQUFLO0VBQUVvaEQsVUFBQSxHQUFhO0VBQUdyZ0QsSUFBQSxHQUFPO0VBQUdkLElBQUEsRUFBQWdUO0FBQUssSUFBSSxDQUFDLEdBQUc7RUFDdEUsT0FBTyxDQUFDMTBCLENBQUEsRUFBRzJpRSxLQUFBLEtBQVU7SUFDakIsTUFBTTVqQyxTQUFBLEdBQVksT0FBT3ZjLElBQUEsS0FBUyxXQUFXQSxJQUFBLEdBQU9rZ0QsY0FBQSxDQUFlbGdELElBQUEsRUFBTW1nRCxLQUFLO0lBQzlFLE1BQU0zMEIsU0FBQSxHQUFXN3NDLElBQUEsQ0FBS3l3QixHQUFBLENBQUltTixTQUFBLEdBQVkvK0IsQ0FBQztJQUN2QyxJQUFJZ3VCLE1BQUEsR0FBUXZNLFFBQUEsR0FBV3VzQixTQUFBO0lBQ3ZCLElBQUl0WixLQUFBLEVBQU07TUFDTixNQUFNb3VDLFFBQUEsR0FBV0gsS0FBQSxHQUFRbGhELFFBQUE7TUFDekIsTUFBTXFXLGNBQUEsR0FBaUIvQywwQkFBQSxDQUEyQkwsS0FBSTtNQUN0RDFHLE1BQUEsR0FBUThKLGNBQUEsQ0FBZTlKLE1BQUEsR0FBUTgwQyxRQUFRLElBQUlBLFFBQUE7SUFDL0M7SUFDQSxPQUFPRCxVQUFBLEdBQWE3MEMsTUFBQTtFQUN4QjtBQUNKOzs7QUNmQSxJQUFNcDBCLElBQUEsR0FBTzVCLEtBQUE7QUFNYixJQUFNdEIsVUFBQSxHQUFhdUosVUFBQSxDQUFXVSxNQUFBLENBQU8sQ0FBQ0MsR0FBQSxFQUFLQyxHQUFBLEtBQVE7RUFDL0NELEdBQUEsQ0FBSUMsR0FBQSxJQUFRMUMsUUFBQSxJQUFZMUgsV0FBQSxDQUFZMEgsUUFBTztFQUMzQyxPQUFPeUMsR0FBQTtBQUNYLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvLi4vLi4vcHVibGljL3ByYWdtYXRlLXVpL3NyYy9vdXQifQ==