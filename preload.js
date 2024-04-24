System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Preload, __beyond_pkg, hmr;
  _export("Preload", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@0.1.1/preload"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/preload');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2002719117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          /*bundle */
          function Preload(props) {
            const {
              width,
              height,
              color,
              stopAnimation,
              radio
            } = props;
            return _react.default.createElement("span", {
              className: 'pui-preload',
              style: {
                width: width || '100%',
                height: height || '14px',
                background: color || '',
                borderRadius: radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Preload",
        "name": "Preload"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Preload') && _export("Preload", Preload = require ? require('./index').Preload : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJlbG9hZCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInN0b3BBbmltYXRpb24iLCJyYWRpbyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVVDLE9BQU9BLENBQUNDLEtBQUs7WUFDeEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxhQUFhO2NBQUVDO1lBQUssQ0FBRSxHQUFHTCxLQUFLO1lBRTVELE9BQ0NILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQ0NDLFNBQVMsRUFBQyxhQUFhO2NBQ3ZCQyxLQUFLLEVBQUU7Z0JBQ05SLEtBQUssRUFBRUEsS0FBSyxJQUFJLE1BQU07Z0JBQ3RCQyxNQUFNLEVBQUVBLE1BQU0sSUFBSSxNQUFNO2dCQUN4QlEsVUFBVSxFQUFFUCxLQUFLLElBQUksRUFBRTtnQkFDdkJRLFlBQVksRUFBRU4sS0FBSyxJQUFJOztZQUN2QixHQUVEUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxLQUFLLEVBQUU7Z0JBQUVHLE9BQU8sRUFBRVIsYUFBYSxHQUFHLE1BQU0sR0FBRztjQUFPO1lBQUUsRUFBSSxDQUN4RDtVQUVUIiwiaWdub3JlTGlzdCI6W119