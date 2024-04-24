System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ProgressBar, __beyond_pkg, hmr;
  _export("ProgressBar", void 0);
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
          "vspecifier": "pragmate-ui@0.1.1/progress-bar"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/progress-bar');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1193690543,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          /* bundle */
          function ProgressBar(props) {
            const {
              value,
              maxValue = 100,
              variant = 'primary'
            } = props;
            const percentage = value / maxValue * 100;
            const cls = variant ? `progress-bar__progress ${variant}` : 'progress-bar__progress';
            return _react.default.createElement("div", {
              className: "pui-progress-bar"
            }, _react.default.createElement("span", {
              className: cls,
              style: {
                width: `${percentage}%`
              }
            }, value, "%"));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2062575629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ProgressBar",
        "name": "ProgressBar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ProgressBar') && _export("ProgressBar", ProgressBar = require ? require('./index').ProgressBar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZ3Jlc3NCYXIiLCJwcm9wcyIsInZhbHVlIiwibWF4VmFsdWUiLCJ2YXJpYW50IiwicGVyY2VudGFnZSIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBWSxTQUFVQyxXQUFXQSxDQUFDQyxLQUFhO1lBQ3JELE1BQU07Y0FBRUMsS0FBSztjQUFFQyxRQUFRLEdBQUcsR0FBRztjQUFFQyxPQUFPLEdBQUc7WUFBUyxDQUFFLEdBQUdILEtBQUs7WUFFNUQsTUFBTUksVUFBVSxHQUFJSCxLQUFLLEdBQUdDLFFBQVEsR0FBSSxHQUFHO1lBRTNDLE1BQU1HLEdBQUcsR0FBR0YsT0FBTyxHQUFHLDBCQUEwQkEsT0FBTyxFQUFFLEdBQUcsd0JBQXdCO1lBQ3BGLE9BQ0NOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ1gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFFSCxHQUFHO2NBQUVJLEtBQUssRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEdBQUdOLFVBQVU7Y0FBRztZQUFFLEdBQ3RESCxLQUFLLEUsSUFDQSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7O1VDZkE7O1VBRUFVLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FaLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==