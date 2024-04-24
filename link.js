System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Link, __beyond_pkg, hmr;
  _export("Link", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.1.1/link"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3979789248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                props.onClick(event);
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return _react.default.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Link",
        "name": "Link"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Link') && _export("Link", Link = require ? require('./index').Link : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsInByb3BzIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQ1JFLElBQUlBLENBQUM7WUFBRUMsSUFBSTtZQUFFLEdBQUdDO1VBQUssQ0FBaUQ7WUFDOUUsTUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNFLE1BQU0sS0FBSyxRQUFRO1lBRTVDLE1BQU1DLE9BQU8sR0FBSUMsS0FBMEMsSUFBVTtjQUNwRSxJQUFJLENBQUNILFVBQVUsRUFBRUcsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdkNELEtBQUssQ0FBQ0UsZUFBZSxFQUFFO2NBRXZCLElBQUlOLEtBQUssQ0FBQ0csT0FBTyxJQUFJLE9BQU9ILEtBQUssQ0FBQ0csT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDekRILEtBQUssQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUM7O2NBR3JCLENBQUNILFVBQVUsSUFBSUosUUFBQSxDQUFBVSxPQUFPLENBQUNDLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNVSxVQUFVLEdBQUc7Y0FBRSxHQUFHVDtZQUFLLENBQUU7WUFDL0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUNVLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJLE9BQU9GLFVBQVUsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFFNUQsT0FDQ2hCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLEdBQU9KLFVBQVU7Y0FBRVYsSUFBSSxFQUFFQSxJQUFJO2NBQUVJLE9BQU8sRUFBRUEsT0FBTztjQUFFRCxNQUFNLEVBQUVGLEtBQUssQ0FBQ0U7WUFBTSxHQUNuRUYsS0FBSyxDQUFDYyxRQUFRLENBQ1o7VUFFTiIsImlnbm9yZUxpc3QiOltdfQ==