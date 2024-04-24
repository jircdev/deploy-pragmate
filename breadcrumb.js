System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "uuid@9.0.0", "pragmate-ui@0.1.1/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_4 = _beyondJsReact18Widgets104Hooks;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi011Components) {
      dependency_6 = _pragmateUi011Components;
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
          "vspecifier": "pragmate-ui@0.1.1/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1443891483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uuid = require("uuid");
          var _item = require("./item");
          /* bundle */
          function BreadCrumb({
            items,
            separator,
            className,
            children,
            ...props
          }) {
            const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              index: index,
              separator: separator,
              link: link,
              label: label,
              currentRouting: currentRouting
            }));
            let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: 'breadcrumb'
            }, breadcrumbOutput), children && _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1761258708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Item({
            link,
            label,
            currentRouting,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = link === currentRouting ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';
            return _react.default.createElement("li", {
              key: `${link} ${label}`
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              href: link
            }, label, total > index + 1 && _react.default.createElement("span", {
              className: 'pui-breadcrumb__separator'
            }, separator)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3856179362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BreadCrumb",
        "name": "BreadCrumb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BreadCrumb') && _export("BreadCrumb", BreadCrumb = require ? require('./index').BreadCrumb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwidjQiLCJjbHMiLCJfY29tcG9uZW50cyIsImlzQ2hlY2tlZCIsIkxpbmsiLCJocmVmIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksS0FBQSxHQUFBSixPQUFBO1VBRU87VUFBWSxTQUFVSyxVQUFVQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUMsU0FBUztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDbEcsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUNiLFFBQUEsQ0FBQWMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztZQUVoRixJQUFBZixNQUFBLENBQUFnQixTQUFTLEVBQUMsQ0FBQ2pCLFFBQUEsQ0FBQWMsT0FBTyxDQUFDLEVBQUUsTUFBTUgsaUJBQWlCLENBQUNYLFFBQUEsQ0FBQWMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLE1BQU1FLEtBQUssR0FBR2IsS0FBSyxDQUFDYyxNQUFNO1lBQzFCLE1BQU1DLGdCQUFnQixHQUFHZixLQUFLLENBQUNnQixHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLElBQUksQ0FBQyxFQUFFQyxLQUFLLEtBQ3ZEMUIsTUFBQSxDQUFBYyxPQUFBLENBQUFhLGFBQUEsQ0FBQ3RCLEtBQUEsQ0FBQXVCLElBQUk7Y0FDSkMsR0FBRyxFQUFFLElBQUF6QixLQUFBLENBQUEwQixFQUFJLEdBQUU7Y0FDWFYsS0FBSyxFQUFFQSxLQUFLO2NBQ1pNLEtBQUssRUFBRUEsS0FBSztjQUNabEIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCaUIsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZELEtBQUssRUFBRUEsS0FBSztjQUNaWixjQUFjLEVBQUVBO1lBQWMsRUFFL0IsQ0FBQztZQUVGLElBQUltQixHQUFHLEdBQUcsNEJBQTRCdEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUV4RSxPQUNDVCxNQUFBLENBQUFjLE9BQUEsQ0FBQWEsYUFBQTtjQUFLbEIsU0FBUyxFQUFFc0IsR0FBRztjQUFBLEdBQU1wQjtZQUFLLEdBQzVCVyxnQkFBZ0IsQ0FBQ0QsTUFBTSxHQUFHLENBQUMsSUFBSXJCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBYSxhQUFBO2NBQUlsQixTQUFTLEVBQUM7WUFBWSxHQUFFYSxnQkFBZ0IsQ0FBTSxFQUNqRlosUUFBUSxJQUFJVixNQUFBLENBQUFjLE9BQUEsQ0FBQWEsYUFBQSxjQUFNakIsUUFBUSxDQUFPLENBQzdCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFWLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErQixXQUFBLEdBQUEvQixPQUFBO1VBR00sU0FBVTJCLElBQUlBLENBQUM7WUFBRUgsSUFBSTtZQUFFRCxLQUFLO1lBQUVaLGNBQWM7WUFBRWMsS0FBSztZQUFFTixLQUFLO1lBQUVaLFNBQVMsR0FBRztVQUFHLENBQVM7WUFDekYsTUFBTXlCLFNBQVMsR0FBR1IsSUFBSSxLQUFLYixjQUFjLEdBQUcsNEJBQTRCLEdBQUcsbUJBQW1CO1lBRTlGLE9BQ0NaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBYSxhQUFBO2NBQUlFLEdBQUcsRUFBRSxHQUFHSixJQUFJLElBQUlELEtBQUs7WUFBRSxHQUMxQnhCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBYSxhQUFBLENBQUNLLFdBQUEsQ0FBQUUsSUFBSTtjQUFDekIsU0FBUyxFQUFFd0IsU0FBUztjQUFFRSxJQUFJLEVBQUVWO1lBQUksR0FDcENELEtBQUssRUFDTEosS0FBSyxHQUFHTSxLQUFLLEdBQUcsQ0FBQyxJQUFJMUIsTUFBQSxDQUFBYyxPQUFBLENBQUFhLGFBQUE7Y0FBTWxCLFNBQVMsRUFBQztZQUEyQixHQUFFRCxTQUFTLENBQVEsQ0FDOUUsQ0FDSDtVQUVQOzs7Ozs7Ozs7OztVQ2ZBOztVQUVBNEIsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119