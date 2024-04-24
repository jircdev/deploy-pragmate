System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/reactive@1.1.4/model", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
  _export({
    Toasts: void 0,
    ToastTypes: void 0,
    IToast: void 0,
    toast: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_3 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["pragmate-ui", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/toast');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 182626329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toasts = Toasts;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _model = require("./model");
          var _toast = require("./toast");
          /*bundle*/
          function Toasts({
            position = {
              bottom: '1rem',
              right: '1rem'
            },
            className,
            ...props
          }) {
            const [items, setItems] = _react.default.useState([]);
            (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), 'current.toast.changed');
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `pui-toast__container`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1270696975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toast = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Toast extends _model.ReactiveModel {
            #current;
            get current() {
              return this.#current;
            }
            set current(newValue) {
              this.#current = newValue;
              this.triggerEvent('current.toast.changed');
            }
            constructor() {
              super();
              this.#current = [];
            }
            #generateUniqueId() {
              return crypto.getRandomValues(new Uint8Array(16)).toString();
            }
            #add(type, message, duration) {
              const newToast = {
                id: this.#generateUniqueId(),
                message,
                type,
                duration
              };
              this.#current = [...this.#current, newToast];
              this.triggerEvent('current.toast.changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.triggerEvent('current.toast.changed');
            }
            success(message, duration) {
              return this.#add('success', message, duration);
            }
            error(message, duration) {
              return this.#add('error', message, duration);
            }
            warning(message, duration) {
              return this.#add('warning', message, duration);
            }
            info(message, duration) {
              return this.#add('info', message, duration);
            }
            loading(message, duration) {
              return this.#add('loading', message, duration);
            }
          }
          /*bundle*/
          const toast = exports.toast = new Toast();
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 2244319811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _react = require("react");
          var _model = require("./model");
          var _icons = require("pragmate-ui/icons");
          const DEFAULT_DURATION = 3000;
          const ANIMATION_MARGIN = 300;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (toastRef.current) {
                toastRef.current.classList.add('enter');
              }
              return () => {
                if (toastRef.current) toastRef.current.classList.remove('enter');
              };
            }, [toastRef.current]);
            _react.default.useEffect(() => {
              duration = duration ?? DEFAULT_DURATION;
              setTimeout(() => {
                toastRef.current.classList.remove('enter');
                toastRef.current.classList.add('exit');
              }, duration);
              const timeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => clearTimeout(timeout);
            }, [duration, id]);
            const icons = {
              error: 'triangle-exclamation',
              success: 'tickCircle',
              info: 'infoCircle',
              loading: 'refreshCircle',
              warning: 'warning'
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: 'icon'
            }), _react.default.createElement("p", {
              className: 'message'
            }, message));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Toasts",
        "name": "Toasts"
      }, {
        "im": "./model",
        "from": "ToastTypes",
        "name": "ToastTypes"
      }, {
        "im": "./model",
        "from": "IToast",
        "name": "IToast"
      }, {
        "im": "./model",
        "from": "toast",
        "name": "toast"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Toasts') && _export("Toasts", Toasts = require ? require('./index').Toasts : value);
        (require || prop === 'ToastTypes') && _export("ToastTypes", ToastTypes = require ? require('./model').ToastTypes : value);
        (require || prop === 'IToast') && _export("IToast", IToast = require ? require('./model').IToast : value);
        (require || prop === 'toast') && _export("toast", toast = require ? require('./model').toast : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX21vZGVsIiwiX3RvYXN0IiwiVG9hc3RzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImNsYXNzTmFtZSIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsInRvYXN0IiwiY3VycmVudCIsImVsZW1lbnRzIiwibWFwIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJUb2FzdCIsImtleSIsImlkIiwic3R5bGUiLCJSZWFjdGl2ZU1vZGVsIiwibmV3VmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlVW5pcXVlSWQiLCIjZ2VuZXJhdGVVbmlxdWVJZCIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsImFkZCIsIiNhZGQiLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiZXhwb3J0cyIsIl9pY29ucyIsIkRFRkFVTFRfRFVSQVRJT04iLCJBTklNQVRJT05fTUFSR0lOIiwidG9hc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25zIiwicmVmIiwiSWNvbiIsImljb24iXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9tb2RlbC50cyIsIi9jb2RlL3RzL3RvYXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9B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