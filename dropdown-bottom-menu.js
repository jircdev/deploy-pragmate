System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownBottomMenu, __beyond_pkg, hmr;
  _export("DropdownBottomMenu", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi011Image) {
      dependency_3 = _pragmateUi011Image;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
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
          "vspecifier": "pragmate-ui@0.1.1/dropdown-bottom-menu"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/dropdown-bottom-menu');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2794062376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownBottomMenu = DropdownBottomMenu;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _list = require("./list");
          /*bundle*/
          function DropdownBottomMenu({
            handleClick,
            show,
            items,
            children,
            isImage,
            title
          }) {
            const cls = show ? "pull-down-menu" : "pull-down-menu pull-down-menu__hide";
            const isItems = !!items && Array.isArray(items);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: cls
            }, (title || isImage) && _react.default.createElement("header", null, isImage && _react.default.createElement("div", {
              className: "image-menu"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/dummy.svg`,
              alt: " "
            })), title && _react.default.createElement("span", null, title)), isItems && _react.default.createElement(_list.MenuList, {
              items: items
            }), children), show && _react.default.createElement("div", {
              onClick: handleClick,
              className: "background-black"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4263323519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const MenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            return _react.default.createElement("li", {
              className: "pull-down-menu__item"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("a", {
              href: link
            }, title));
          };
          exports.MenuItem = MenuItem;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 3770438484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuList = void 0;
          var _react = require("react");
          var _item = require("./item");
          const MenuList = ({
            items
          }) => {
            const output = items.map(item => _react.default.createElement(_item.MenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "pull-down-menu__list"
            }, output);
          };
          exports.MenuList = MenuList;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DropdownBottomMenu",
        "name": "DropdownBottomMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownBottomMenu') && _export("DropdownBottomMenu", DropdownBottomMenu = require ? require('./index').DropdownBottomMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ltYWdlIiwiX2xpc3QiLCJEcm9wZG93bkJvdHRvbU1lbnUiLCJoYW5kbGVDbGljayIsInNob3ciLCJpdGVtcyIsImNoaWxkcmVuIiwiaXNJbWFnZSIsInRpdGxlIiwiY2xzIiwiaXNJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwiTWVudUxpc3QiLCJvbkNsaWNrIiwiX2ljb25zIiwiTWVudUl0ZW0iLCJpdGVtIiwibGluayIsImljb24iLCJJY29uIiwiaHJlZiIsImV4cG9ydHMiLCJfaXRlbSIsIm91dHB1dCIsIm1hcCIsImtleSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2l0ZW0udHN4IiwiL2NvZGUvdHMvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsU0FBVUcsa0JBQWtCQSxDQUFDO1lBQzVDQyxXQUFXO1lBQ1hDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEM7VUFBSyxDQUNOO1lBQ0MsTUFBTUMsR0FBRyxHQUFXTCxJQUFJLEdBQ3BCLGdCQUFnQixHQUNoQixxQ0FBcUM7WUFDekMsTUFBTU0sT0FBTyxHQUFZLENBQUMsQ0FBQ0wsS0FBSyxJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDO1lBQ3hELE9BQ0VQLE1BQUEsQ0FBQWUsT0FBQSxDQUFBQyxhQUFBLENBQUFo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