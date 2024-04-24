System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "perfect-scrollbar@1.5.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ScrollContainer, __beyond_pkg, hmr;
  _export("ScrollContainer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_perfectScrollbar2) {
      dependency_3 = _perfectScrollbar2;
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
          "vspecifier": "pragmate-ui@0.1.1/perfect-scrollbar"
        },
        "type": "code",
        "name": "perfect-scrollbar"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['perfect-scrollbar', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/perfect-scrollbar');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 1893022313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ScrollContainer = ScrollContainer;
          var _react = require("react");
          var _perfectScrollbar = require("perfect-scrollbar");
          /*bundle*/ /**
                      * It's a React component that uses the PerfectScrollbar library to create a scrollbar that can be
                      * customized with CSS.
                      * @param {props} props - props
                      * @returns A function that returns a JSX.Element
                      */
          function ScrollContainer(props) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const control = ref.current;
              const scrollbar = new _perfectScrollbar.default(control, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
              });
              const handleOnScrollY = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const handleOnScrollX = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const {
                onScrollY,
                onScrollX
              } = props;
              if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
              if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
              return () => {
                scrollbar.destroy();
                if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
                if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
              };
            }, []);
            let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ScrollContainer",
        "name": "ScrollContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ScrollContainer') && _export("ScrollContainer", ScrollContainer = require ? require('./container').ScrollContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiZGVmYXVsdCIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwiaGFuZGxlT25TY3JvbGxZIiwiZXZlbnQiLCJvblNjcm9sbFkiLCJoYW5kbGVPblNjcm9sbFgiLCJvblNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvY29kZS90cy9jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBT0EsSUFBQUMsaUJBQUEsR0FBQUQsT0FBQTtVQWVPLFdBTlA7Ozs7OztVQU1pQixTQUNSRSxlQUFlQSxDQUFDQyxLQUFZO1lBQ25DLE1BQU1DLEdBQUcsR0FBcUMsSUFBQUwsTUFBQSxDQUFBTSxNQUFNLEVBQUMsSUFBSSxDQUFDO1lBRTFELElBQUFOLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLE1BQW1CO2NBQzNCLE1BQU1DLE9BQU8sR0FBbUJILEdBQUcsQ0FBQ0ksT0FBTztjQUUzQyxNQUFNQyxTQUFTLEdBQXFCLElBQUlSLGlCQUFBLENBQUFTLE9BQWdCLENBQUNILE9BQU8sRUFBRTtnQkFDaEVJLFVBQVUsRUFBRSxDQUFDO2dCQUNiQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsa0JBQWtCLEVBQUU7ZUFDckIsQ0FBQztjQUNGLE1BQU1DLGVBQWUsR0FBSUMsS0FBSyxJQUFVO2dCQUN0Q1osS0FBSyxDQUFDYSxTQUFTLENBQUNELEtBQUssRUFBRVIsT0FBTyxFQUFFRSxTQUFTLENBQUM7Y0FDNUMsQ0FBQztjQUVELE1BQU1RLGVBQWUsR0FBSUYsS0FBSyxJQUFVO2dCQUN0Q1osS0FBSyxDQUFDYSxTQUFTLENBQUNELEtBQUssRUFBRVIsT0FBTyxFQUFFRSxTQUFTLENBQUM7Y0FDNUMsQ0FBQztjQUNELE1BQU07Z0JBQUVPLFNBQVM7Z0JBQUVFO2NBQVMsQ0FBRSxHQUFHZixLQUFLO2NBQ3RDLElBQUlhLFNBQVMsRUFBRVQsT0FBTyxDQUFDWSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUVMLGVBQWUsQ0FBQztjQUN2RSxJQUFJSSxTQUFTLEVBQUVYLE9BQU8sQ0FBQ1ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFRixlQUFlLENBQUM7Y0FDdkUsT0FBTyxNQUFLO2dCQUNWUixTQUFTLENBQUNXLE9BQU8sRUFBRTtnQkFFbkIsSUFBSUosU0FBUyxFQUFFWixHQUFHLENBQUNJLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsYUFBYSxFQUFFTCxTQUFTLENBQUM7Z0JBQ3hFLElBQUlFLFNBQVMsRUFDWGQsR0FBRyxDQUFDSSxPQUFPLENBQUNhLG1CQUFtQixDQUFDLGFBQWEsRUFBRUosZUFBZSxDQUFDO2NBQ25FLENBQUM7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSUssR0FBRyxHQUFXbkIsS0FBSyxDQUFDb0IsU0FBUyxHQUM3Qiw0QkFBNEJwQixLQUFLLENBQUNvQixTQUFTLEVBQUUsR0FDN0MsMEJBQTBCO1lBQzlCLE9BQ0V4QixNQUFBLENBQUFXLE9BQUEsQ0FBQWMsYUFBQTtjQUFLcEIsR0FBRyxFQUFFQSxHQUFHO2NBQUVtQixTQUFTLEVBQUVEO1lBQUcsR0FDMUJuQixLQUFLLENBQUNzQixRQUFRLENBQ1g7VUFFViIsImlnbm9yZUxpc3QiOltdfQ==