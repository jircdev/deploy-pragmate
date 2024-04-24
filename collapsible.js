System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    Item: void 0,
    Container: void 0,
    Accordion: void 0,
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    CollapsibleContainer: void 0
  });
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
          "vspecifier": "pragmate-ui@0.1.1/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 3055160805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccordionContext = exports.Accordion = void 0;
          exports.Container = Container;
          exports.Header = Header;
          exports.Item = Item;
          exports.useAccordionContext = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const AccordionContext = exports.AccordionContext = _react.default.createContext({});
          const useAccordionContext = () => _react.default.useContext(AccordionContext);
          exports.useAccordionContext = useAccordionContext;
          /*bundle */
          function Header({
            disabled,
            children,
            index
          }) {
            const {
              setOpened,
              opened
            } = useAccordionContext();
            const onClick = event => {
              event.stopPropagation();
              event.currentTarget.classList.toggle('accordion-item__header-icon--opened');
              setOpened(index === opened ? false : index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return _react.default.createElement("header", {
              ...attrs,
              className: 'accordion-item__header'
            }, children, _react.default.createElement("div", {
              className: 'accordion-item__header-icon'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'chevronRight',
              className: 'circle'
            })));
          }
          /*bundle */
          function Item({
            disabled,
            children,
            title,
            index
          }) {
            const {
              opened
            } = useAccordionContext();
            let cls = `accordion-item${index === opened ? ` accordion-item--opened` : ``}`;
            if (disabled) cls += ` accordion-item--disabled`;
            return _react.default.createElement("article", {
              className: cls
            }, title && _react.default.createElement(Header, {
              disabled: disabled,
              index: index
            }, title), _react.default.createElement("div", {
              className: 'accordion-item__content'
            }, children));
          }
          /*bundle */
          function Container({
            children,
            active = 0
          }) {
            const [opened, setOpened] = _react.default.useState(active);
            const onChange = event => {};
            const value = {
              onChange,
              opened,
              setOpened
            };
            _react.default.useEffect(() => setOpened(active), [active]);
            const output = _react.default.Children.map(children, (child, index) => {
              return _react.default.cloneElement(child, {
                index
              });
            });
            return _react.default.createElement(AccordionContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: 'accordion'
            }, output));
          }
          /*bundle */
          const Accordion = exports.Accordion = {
            Header,
            Item,
            Container
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 878084793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4042704803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1351256156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function CollapsibleHeader({
            children,
            className,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (onToggle) await onToggle(!open);
              setOpen(!open);
            };
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            if (toggleTitle) {
              attrs.onClick = onClick;
            }
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: 'collapsible__header-content'
            }, children), _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              className: clsButton,
              icon: 'left'
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 939190616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./accordion",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./accordion",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./accordion",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./accordion",
        "from": "Accordion",
        "name": "Accordion"
      }, {
        "im": "./content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./index",
        "from": "CollapsibleContainer",
        "name": "CollapsibleContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./accordion').Header : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./accordion').Item : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./accordion').Container : value);
        (require || prop === 'Accordion') && _export("Accordion", Accordion = require ? require('./accordion').Accordion : value);
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./header').CollapsibleHeader : value);
        (require || prop === 'CollapsibleContainer') && _export("CollapsibleContainer", CollapsibleContainer = require ? require('./index').CollapsibleContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImNsb25lRWxlbWVudCIsIlByb3ZpZGVyIiwiQWNjb3JkaW9uIiwiX2NvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvcGVuIiwidXNlQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0b2dnbGVUaXRsZSIsInNldE9wZW4iLCJvblRvZ2dsZSIsImNsc0J1dHRvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2FjY29yZGlvbi50c3giLCIvdHMvY29udGVudC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFB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