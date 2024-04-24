System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Empty, __beyond_pkg, hmr;
  _export("Empty", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_3 = _pragmateUi011Icons;
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
          "vspecifier": "pragmate-ui@0.1.1/empty"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 1254695097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Empty(props) {
            const cls = `${props.className ?? ''} pui-empty-section`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "content"
            }, props.icon && _react.default.createElement(_icons.Icon, {
              className: "pui-empty__icon",
              icon: props.icon
            }), props.text && _react.default.createElement("h3", null, props.text), props.children && props.children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./empty",
        "from": "Empty",
        "name": "Empty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Empty') && _export("Empty", Empty = require ? require('./empty').Empty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiRW1wdHkiLCJwcm9wcyIsImNscyIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiaWNvbiIsIkljb24iLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvdHMvZW1wdHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFRTztVQUFVLFNBQ1JFLEtBQUtBLENBQUNDLEtBQWE7WUFDM0IsTUFBTUMsR0FBRyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsb0JBQW9CO1lBRXhELE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtGLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQkwsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0YsU0FBUyxFQUFDO1lBQVMsR0FDdEJGLEtBQUssQ0FBQ0ssSUFBSSxJQUFJVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixNQUFBLENBQUFRLElBQUk7Y0FBQ0osU0FBUyxFQUFDLGlCQUFpQjtjQUFDRyxJQUFJLEVBQUVMLEtBQUssQ0FBQ0s7WUFBSSxFQUFJLEVBQ3BFTCxLQUFLLENBQUNPLElBQUksSUFBSVgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxJQUFJLENBQU0sRUFDbkNQLEtBQUssQ0FBQ1EsUUFBUSxJQUFJUixLQUFLLENBQUNRLFFBQVEsQ0FDNUIsQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119