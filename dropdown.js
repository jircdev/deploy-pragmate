System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@11.0.25", "pragmate-ui@0.1.1/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownContainer, DropdownItem, DropdownMenu, DropdownToggle, useDropdownContext, Dropdown, IDropdownProps, IDropdownItemProps, __beyond_pkg, hmr;
  _export({
    DropdownContainer: void 0,
    DropdownItem: void 0,
    DropdownMenu: void 0,
    DropdownToggle: void 0,
    useDropdownContext: void 0,
    Dropdown: void 0,
    IDropdownProps: void 0,
    IDropdownItemProps: void 0
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
    }, function (_pragmateUi011Components) {
      dependency_4 = _pragmateUi011Components;
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
          "vspecifier": "pragmate-ui@0.1.1/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/dropdown');
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./components/animated-div
      *****************************************/
      ims.set('./components/animated-div', {
        hash: 3710179444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            className
          } = {
            children: null,
            className: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./components/container
      **************************************/

      ims.set('./components/container', {
        hash: 2857049605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownContainer = DropdownContainer;
          var _react = require("react");
          var _context = require("../context");
          var _useClickContainer = require("../hooks/use-click-container");
          /*bundle*/
          function DropdownContainer({
            children,
            className
          }) {
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              ref
            } = (0, _useClickContainer.useClickContainer)({
              toggleMenu,
              setToggleMenu
            });
            const cls = `pui-dropdown-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 401369526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownItem = DropdownItem;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DropdownItem(props) {
            const {
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              tag = _components.Link
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === 'function') await onClick(event);
              setToggleMenu(false);
            };
            const Control = tag ?? 'div';
            const cls = `pui-dropdown-menu__item${className ? ` ${className}` : ''}`;
            const properties = Object.assign({}, props);
            const toDelete = ['children', 'className', 'onClick', 'tag', 'id'];
            toDelete.forEach(key => delete properties[key]);
            return _react.default.createElement(Control, {
              className: cls,
              onClick: handleClick,
              ...properties
            }, children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/menu
      *********************************/

      ims.set('./components/menu', {
        hash: 388409793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownMenu = DropdownMenu;
          var _react = require("react");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          /*bundle*/
          function DropdownMenu(props) {
            const {
              toggleMenu
            } = (0, _context.useDropdownContext)();
            if (!toggleMenu) return null;
            let cls = `pui-dropdown-menu  pui-dropdown-menu--opened`;
            return _react.default.createElement(_animatedDiv.AnimatedDiv, {
              className: cls
            }, props.children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/toggle
      ***********************************/

      ims.set('./components/toggle', {
        hash: 2994452618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("../context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `pui-dropdown__toggle${className ? ` ${className}` : ''}`;
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const onClick = event => {
              event.stopPropagation();
              setToggleMenu(!toggleMenu);
            };
            return React.createElement("div", {
              onClick: onClick,
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3904183137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDropdownContext = exports.DropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = exports.DropdownContext = _react.default.createContext(null);
          /*bundle */
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/use-click-container
      *******************************************/

      ims.set('./hooks/use-click-container', {
        hash: 3079559365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer({
            toggleMenu,
            setToggleMenu
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const onClick = event => {
                const {
                  current
                } = ref;
                const {
                  target,
                  currentTarget
                } = event;
                const path = event.composedPath ? event.composedPath() : [];
                const pathTarget = path.length > 0 ? path[0] : null;
                const isSameNode = current === target || current === currentTarget || pathTarget === current;
                const isAChildren = current?.contains(pathTarget);
                if (toggleMenu && !isSameNode && !isAChildren) setToggleMenu(false);
              };
              globalThis.document.addEventListener('click', onClick);
              return () => globalThis.document.removeEventListener('click', onClick);
            }, [toggleMenu]);
            return {
              ref
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1134357420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _context = require("./context");
          var _container = require("./components/container");
          /*bundle*/
          function Dropdown({
            children,
            className
          }) {
            const [toggleMenu, setToggleMenu] = _react.default.useState(false);
            const value = {
              toggleMenu,
              setToggleMenu
            };
            return _react.default.createElement(_context.DropdownContext.Provider, {
              value: value
            }, _react.default.createElement(_container.DropdownContainer, {
              className: className
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2479703114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/container",
        "from": "DropdownContainer",
        "name": "DropdownContainer"
      }, {
        "im": "./components/item",
        "from": "DropdownItem",
        "name": "DropdownItem"
      }, {
        "im": "./components/menu",
        "from": "DropdownMenu",
        "name": "DropdownMenu"
      }, {
        "im": "./components/toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }, {
        "im": "./context",
        "from": "useDropdownContext",
        "name": "useDropdownContext"
      }, {
        "im": "./index",
        "from": "Dropdown",
        "name": "Dropdown"
      }, {
        "im": "./types",
        "from": "IDropdownProps",
        "name": "IDropdownProps"
      }, {
        "im": "./types",
        "from": "IDropdownItemProps",
        "name": "IDropdownItemProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownContainer') && _export("DropdownContainer", DropdownContainer = require ? require('./components/container').DropdownContainer : value);
        (require || prop === 'DropdownItem') && _export("DropdownItem", DropdownItem = require ? require('./components/item').DropdownItem : value);
        (require || prop === 'DropdownMenu') && _export("DropdownMenu", DropdownMenu = require ? require('./components/menu').DropdownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./components/toggle').DropdownToggle : value);
        (require || prop === 'useDropdownContext') && _export("useDropdownContext", useDropdownContext = require ? require('./context').useDropdownContext : value);
        (require || prop === 'Dropdown') && _export("Dropdown", Dropdown = require ? require('./index').Dropdown : value);
        (require || prop === 'IDropdownProps') && _export("IDropdownProps", IDropdownProps = require ? require('./types').IDropdownProps : value);
        (require || prop === 'IDropdownItemProps') && _export("IDropdownItemProps", IDropdownItemProps = require ? require('./types').IDropdownItemProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ5IiwiZXhpdCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX3VzZUNsaWNrQ29udGFpbmVyIiwiRHJvcGRvd25Db250YWluZXIiLCJ0b2dnbGVNZW51Iiwic2V0VG9nZ2xlTWVudSIsInVzZURyb3Bkb3duQ29udGV4dCIsInJlZiIsInVzZUNsaWNrQ29udGFpbmVyIiwiY2xzIiwiZGVmYXVsdCIsIl9jb21wb25lbnRzIiwiRHJvcGRvd25JdGVtIiwicHJvcHMiLCJvbkNsaWNrIiwidGFnIiwiTGluayIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJDb250cm9sIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRvRGVsZXRlIiwiZm9yRWFjaCIsImtleSIsIl9hbmltYXRlZERpdiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicGF0aFRhcmdldCIsImxlbmd0aCIsImlzU2FtZU5vZGUiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfY29udGFpbmVyIiwiRHJvcGRvd24iLCJ1c2VTdGF0ZSIsInZhbHVlIiwiUHJvdmlkZXIiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvY29tcG9uZW50cy9jb250YWluZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvaXRlbS50c3giLCIvdHMvY29tcG9uZW50cy9tZW51LnRzeCIsIi90cy9jb21wb25lbnRzL3RvZ2dsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaG9va3MvdXNlLWNsaWNrLWNvbnRhaW5lci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUyxJQUErQjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxTQUFTLEVBQUU7VUFBRSxDQUFFO1lBQ2hILE9BQ0NMLEtBQUEsQ0FBQU0sYUFBQSxDQUFDSixhQUFBLENBQUFLLE1BQU0sQ0FBQ0MsR0FBRztjQUNWSCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJJLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RILE9BQU8sRUFBRTs7WUFDVCxHQUVBTixRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQVksTUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLFFBQUEsR0FBQWhC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