System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/reactive@1.1.4/model", "react-dom@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ContextMenuContainer, ContextMenuManager, ContextMenu, ContextItem, __beyond_pkg, hmr;
  _export({
    ContextMenuContainer: void 0,
    ContextMenuManager: void 0,
    ContextMenu: void 0,
    ContextItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReactive114Model) {
      dependency_2 = _beyondJsReactive114Model;
    }, function (_reactDom) {
      dependency_3 = _reactDom;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.1.1/context-menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['react-dom', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/context-menu');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 648905027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuContainer = ContextMenuContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ContextMenuContainer({
            children
          }) {
            const [showContextMenu, toggleContextMenu] = _react.default.useState();
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              toggleContextMenu({
                x: event.clientX,
                y: event.clientY
              });
            };
            const closeContextMenu = () => toggleContextMenu(null);
            return _react.default.createElement(_context.ContextMenuContext.Provider, {
              value: {
                closeContextMenu,
                opened: !!showContextMenu,
                position: showContextMenu
              }
            }, _react.default.createElement("span", {
              className: 'context-menu__container',
              onClick: onClick
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./context-menu
      ******************************/

      ims.set('./context-menu', {
        hash: 3144112597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuManager = exports.ContextMenu = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ContextMenu extends _model.ReactiveModel {
            _event;
            constructor() {
              super();
              this._event = null;
              this.init();
            }
            get event() {
              return this._event;
            }
            get currentTarget() {
              return this._event?.currentTarget || null;
            }
            get target() {
              return this._event?.target || null;
            }
            init() {
              globalThis.oncontextmenu = event => {
                this._event = event;
                const target = event.target; // Assuming target is always an HTMLElement
                const parentContext = target.closest('[data-context]');
                if (target.dataset.context || parentContext) {
                  event.preventDefault();
                  event.stopPropagation();
                  const contextEvent = target.dataset.context || parentContext?.dataset.context;
                  this.triggerEvent('closed');
                  if (contextEvent) {
                    this.triggerEvent(`fired.${contextEvent}`);
                  }
                  return;
                }
                if (target.classList.contains('ds-context-menu') || target.closest('.ds-context-menu')) {
                  this.triggerEvent('closed');
                }
              };
            }
          }
          exports.ContextMenu = ContextMenu;
          /*bundle */
          const ContextMenuManager = exports.ContextMenuManager = new ContextMenu();
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1787625806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContextMenuContext = exports.ContextMenuContext = void 0;
          var _react = require("react");
          const ContextMenuContext = exports.ContextMenuContext = _react.default.createContext({});
          const useContextMenuContext = () => _react.default.useContext(ContextMenuContext);
          exports.useContextMenuContext = useContextMenuContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 57201254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenu = ContextMenu;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ContextMenu({
            className,
            unmount,
            children
          }) {
            const container = document.createElement('span');
            const ref = (0, _react.useRef)(null);
            const {
              opened,
              position
            } = (0, _context.useContextMenuContext)();
            const close = () => {
              document.removeEventListener('click', close);
              unmount(false);
            };
            (0, _react.useEffect)(() => {
              const body = document.querySelector('body');
              if (!body) return;
              document.addEventListener('click', close);
              body.appendChild(container);
              const refCurrent = ref.current;
              if (!refCurrent) return;
              const {
                offsetWidth,
                offsetHeight
              } = refCurrent;
              const tWidth = offsetWidth + position.x;
              const tHeight = offsetHeight + position.y;
              if (tWidth > globalThis.innerWidth) {
                refCurrent.style.left = `${position.x - offsetWidth}px`;
              }
              if (tHeight > globalThis.innerHeight) {
                refCurrent.style.top = `${position.y - offsetHeight}px`;
              }
              return () => {
                document.removeEventListener('click', close);
                container.remove();
              };
            }, [position?.x, position?.y]);
            if (!opened) {
              return null;
            }
            const styles = {
              position: 'absolute',
              top: `${position.y}px`,
              left: `${position.x}px`
            };
            const cls = `pui-context-menu ${className || ''}`;
            return _react.default.createElement("div", {
              style: styles,
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2629990627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextItem = ContextItem;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle */
          function ContextItem({
            onClick,
            icon,
            label
          }) {
            const {
              closeContextMenu
            } = (0, _context.useContextMenuContext)();
            const onClickEvent = async event => {
              event.stopPropagation();
              await onClick(event);
              closeContextMenu();
            };
            return _react.default.createElement("li", {
              onClick: onClickEvent
            }, icon ? _react.default.createElement(_icons.Icon, {
              icon: icon
            }) : _react.default.createElement("span", null), label);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ContextMenuContainer",
        "name": "ContextMenuContainer"
      }, {
        "im": "./context-menu",
        "from": "ContextMenuManager",
        "name": "ContextMenuManager"
      }, {
        "im": "./index",
        "from": "ContextMenu",
        "name": "ContextMenu"
      }, {
        "im": "./item",
        "from": "ContextItem",
        "name": "ContextItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ContextMenuContainer') && _export("ContextMenuContainer", ContextMenuContainer = require ? require('./container').ContextMenuContainer : value);
        (require || prop === 'ContextMenuManager') && _export("ContextMenuManager", ContextMenuManager = require ? require('./context-menu').ContextMenuManager : value);
        (require || prop === 'ContextMenu') && _export("ContextMenu", ContextMenu = require ? require('./index').ContextMenu : value);
        (require || prop === 'ContextItem') && _export("ContextItem", ContextItem = require ? require('./item').ContextItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJDb250ZXh0TWVudUNvbnRhaW5lciIsImNoaWxkcmVuIiwic2hvd0NvbnRleHRNZW51IiwidG9nZ2xlQ29udGV4dE1lbnUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJjbG9zZUNvbnRleHRNZW51IiwiY3JlYXRlRWxlbWVudCIsIkNvbnRleHRNZW51Q29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvcGVuZWQiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIl9tb2RlbCIsIkNvbnRleHRNZW51IiwiUmVhY3RpdmVNb2RlbCIsIl9ldmVudCIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJnbG9iYWxUaGlzIiwib25jb250ZXh0bWVudSIsInBhcmVudENvbnRleHQiLCJjbG9zZXN0IiwiZGF0YXNldCIsImNvbnRleHQiLCJjb250ZXh0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImV4cG9ydHMiLCJDb250ZXh0TWVudU1hbmFnZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dE1lbnVDb250ZXh0IiwidXNlQ29udGV4dCIsInVubW91bnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInJlZiIsInVzZVJlZiIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUVmZmVjdCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwicmVmQ3VycmVudCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInRXaWR0aCIsInRIZWlnaHQiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJsZWZ0IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJyZW1vdmUiLCJzdHlsZXMiLCJjbHMiLCJfaWNvbnMiLCJDb250ZXh0SXRlbSIsImljb24iLCJsYWJlbCIsIm9uQ2xpY2tFdmVudCIsIkljb24iXSwic291cmNlcyI6WyIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9jb250ZXh0LW1lbnUudHMiLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVUsU0FDUkUsb0JBQW9CQSxDQUFDO1lBQUVDO1VBQVEsQ0FBRTtZQUN6QyxNQUFNLENBQUNDLGVBQWUsRUFBRUMsaUJBQWlCLENBQUMsR0FBR04sTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsRUFBbUM7WUFFOUYsTUFBTUMsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0Qk4saUJBQWlCLENBQUM7Z0JBQUVPLENBQUMsRUFBRUgsS0FBSyxDQUFDSSxPQUFPO2dCQUFFQyxDQUFDLEVBQUVMLEtBQUssQ0FBQ007Y0FBTyxDQUFFLENBQUM7WUFDMUQsQ0FBQztZQUVELE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1YLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUN0RCxPQUNDTixNQUFBLENBQUFPLE9BQUEsQ0FBQVcsYUFBQSxDQUFDaEIsUUFBQSxDQUFBaUIsa0JBQWtCLENBQUNDLFFBQVE7Y0FDM0JDLEtBQUssRUFBRTtnQkFDTkosZ0JBQWdCO2dCQUNoQkssTUFBTSxFQUFFLENBQUMsQ0FBQ2pCLGVBQWU7Z0JBQ3pCa0IsUUFBUSxFQUFFbEI7O1lB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QUs7Z0JBQ1hiLFFBQVEsQ0FBQ0ksbUJBQW1CLENBQUMsT0FBTyxFQUFFRCxLQUFLLENBQUM7Z0JBQzVDSixTQUFTLENBQUNzQixNQUFNLEVBQUU7Y0FDbkIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDaEQsUUFBUSxFQUFFVixDQUFDLEVBQUVVLFFBQVEsRUFBRVIsQ0FBQyxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDTyxNQUFNLEVBQUU7Y0FDWixPQUFPLElBQUk7O1lBR1osTUFBTWtELE1BQU0sR0FBd0I7Y0FDbkNqRCxRQUFRLEVBQUUsVUFBVTtjQUNwQitDLEdBQUcsRUFBRSxHQUFHL0MsUUFBUSxDQUFDUixDQUFDLElBQUk7Y0FDdEJxRCxJQUFJLEVBQUUsR0FBRzdDLFFBQVEsQ0FBQ1YsQ0FBQzthQUNuQjtZQUVELE1BQU00RCxHQUFHLEdBQUcsb0JBQW9CakQsU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUNqRCxPQUNDeEIsTUFBQSxDQUFBTyxPQUFBLENBQUFXLGFBQUE7Y0FBS2lELEtBQUssRUFBRUssTUFBTTtjQUFFckIsR0FBRyxFQUFFQSxHQUFHO2NBQUUzQixTQUFTLEVBQUVpRDtZQUFHLEdBQzFDckUsUUFBUSxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBT087VUFBVyxTQUFVMEUsV0FBV0EsQ0FBQztZQUFFbEUsT0FBTztZQUFFbUUsSUFBSTtZQUFFQztVQUFLLENBQW9CO1lBQ2pGLE1BQU07Y0FBRTVEO1lBQWdCLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUE0QyxxQkFBcUIsR0FBRTtZQUNwRCxNQUFNZ0MsWUFBWSxHQUFHLE1BQU1wRSxLQUFLLElBQUc7Y0FDbENBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1GLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO2NBQ3BCTyxnQkFBZ0IsRUFBRTtZQUNuQixDQUFDO1lBQ0QsT0FDQ2pCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBVyxhQUFBO2NBQUlULE9BQU8sRUFBRXFFO1lBQVksR0FDdkJGLElBQUksR0FBRzVFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBVyxhQUFBLENBQUN3RCxNQUFBLENBQUFLLElBQUk7Y0FBQ0gsSUFBSSxFQUFFQTtZQUFJLEVBQUksR0FBRzVFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBVyxhQUFBLGNBQVEsRUFDdEMyRCxLQUFLLENBQ0Y7VUFFUCIsImlnbm9yZUxpc3QiOltdfQ==