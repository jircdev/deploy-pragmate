System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@11.0.25"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, ListProps, __beyond_pkg, hmr;
  _export({
    List: void 0,
    ListProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
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
          "vspecifier": "pragmate-ui@0.1.1/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/list');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 397607482,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /**
           *
           */
          function DraggableList(props) {
            const [items, setItems] = _react.default.useState(props.items);
            const onReorder = items => {
              console.log(30, items);
              setItems(items);
              if (props.onReorder) props.onReorder(items);
            };
            const attrs = {
              as: props.as
            };
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              ...attrs,
              values: items,
              onReorder: onReorder
            }, items.map((item, idx) => {
              return _react.default.createElement(_framerMotion.Reorder.Item, {
                key: idx,
                value: item
              }, item);
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 93158181,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _draggable = require("./draggable");
          /*bundle */
          function List({
            items,
            ...props
          }) {
            const {
              className,
              children,
              index = 'id',
              specs,
              dragabble,
              childrenPosition = 'top',
              control,
              as = 'ul',
              container = 'ul'
            } = props;
            const Container = container;
            const Control = control;
            try {
              const output = items.map((item, idx) => {
                const element = _react.default.createElement(Control, {
                  key: item[index] || idx,
                  index: idx,
                  data: item,
                  item,
                  specs
                });
                return element;
              });
              if (dragabble) return _react.default.createElement(_draggable.DraggableList, {
                items: output,
                ...props
              });
              return _react.default.createElement(Container, {
                className: className
              }, childrenPosition === 'top' && children ? children : null, output, childrenPosition === 'bottom' && children ? children : null);
            } catch (e) {
              console.error(`invalid items in list0`, items);
            }
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3001830922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "List",
        "name": "List"
      }, {
        "im": "./types",
        "from": "ListProps",
        "name": "ListProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
        (require || prop === 'ListProps') && _export("ListProps", ListProps = require ? require('./types').ListProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJwcm9wcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvblJlb3JkZXIiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJhcyIsImNyZWF0ZUVsZW1lbnQiLCJSZW9yZGVyIiwiR3JvdXAiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiSXRlbSIsImtleSIsInZhbHVlIiwiX2RyYWdnYWJsZSIsIkxpc3QiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImluZGV4Iiwic3BlY3MiLCJkcmFnYWJibGUiLCJjaGlsZHJlblBvc2l0aW9uIiwiY29udHJvbCIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIkNvbnRyb2wiLCJvdXRwdXQiLCJlbGVtZW50IiwiZGF0YSIsImUiLCJlcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi90cy9kcmFnZ2FibGUudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUNBOzs7VUFHTSxTQUFVRSxhQUFhQSxDQUFDQyxLQUFLO1lBQ2xDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR04sTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFFckQsTUFBTUksU0FBUyxHQUFHSixLQUFLLElBQUc7Y0FDekJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRU4sS0FBSyxDQUFDO2NBQ3RCQyxRQUFRLENBQUNELEtBQUss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