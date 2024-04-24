System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/spinner", "pragmate-ui@0.1.1/ripple", "tippy.js@6.3.7", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, HtmlWrapper, Link, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    HtmlWrapper: void 0,
    Link: void 0,
    Spinner: void 0
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
    }, function (_pragmateUi011Spinner) {
      dependency_4 = _pragmateUi011Spinner;
    }, function (_pragmateUi011Ripple) {
      dependency_5 = _pragmateUi011Ripple;
    }, function (_tippyJs) {
      dependency_6 = _tippyJs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
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
          "vspecifier": "pragmate-ui@0.1.1/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/spinner', dependency_4], ['pragmate-ui/ripple', dependency_5], ['tippy.js', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 3592527677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ButtonGroup({
            orientation = 'row',
            children,
            ...props
          }) {
            const [selected, setSelected] = _react.default.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            let disabled = !!props.disabled;
            const childrenWithProps = _react.default.Children.map(children, (child, index) => {
              if (_react.default.isValidElement(child)) {
                return _react.default.cloneElement(child, {
                  index,
                  disabled
                }); // Passing the index as a prop
              }
            });
            return _react.default.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, _react.default.createElement("div", {
              className: cls
            }, childrenWithProps));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./button-group/context
      **************************************/

      ims.set('./button-group/context', {
        hash: 2338960457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useButtonGroupContext = exports.ButtonGroupContext = void 0;
          var _react = require("react");
          const ButtonGroupContext = exports.ButtonGroupContext = _react.default.createContext({});
          const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
          exports.useButtonGroupContext = useButtonGroupContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 872288252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 2984034171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          var _context = require("../button-group/context");
          const {
            forwardRef
          } = _react.default;
          /*bundle*/
          const Button = exports.Button = forwardRef((props, ref) => {
            const {
              className,
              onClick,
              data,
              label,
              title,
              children,
              icon,
              loading,
              block,
              index,
              fetching = false,
              variant = 'default',
              bordered = false,
              sizing = 'md',
              disabled = false,
              ...otherProps
            } = props;
            const context = _react.default.useContext(_context.ButtonGroupContext);
            const [processing, setProcessing] = _react.default.useState(fetching || loading);
            const refObject = _react.default.useRef(null);
            const combinedRef = instance => {
              refObject.current = instance;
              if (typeof ref === 'function') ref(instance);
              //@ts-ignore
              else if (ref) ref.current = instance;
            };
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = async event => {
              if (usingContext) {
                context.setSelected(index);
              }
              if (onClick && typeof onClick === 'function') {
                setProcessing(true);
                //@ts-ignore
                await onClick(event);
                setProcessing(false);
                return;
              }
            };
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(refObject.current);
              if (title) {
                (0, _tippy.default)(refObject.current);
              }
            }, [title]);
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (title) properties['data-tippy-content'] = title;
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pui-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            cls += block ? ' btn--block' : '';
            cls += sizing ? ` btn--${sizing}` : '';
            cls += loading || fetching || processing ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading || processing ? 'button-label--loading' : ''}`;
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            return _react.default.createElement("button", {
              ref: combinedRef,
              className: cls,
              onClick: onClickButton,
              disabled: loading || disabled || processing,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), label || children && _react.default.createElement("div", {
              className: clsLoading
            }, label || children), (loading || fetching || processing) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./button/interface
      **********************************/

      ims.set('./button/interface', {
        hash: 2774588843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./html-render
      *****************************/

      ims.set('./html-render', {
        hash: 1915531432,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlWrapper = HtmlWrapper;
          var _react = require("react");
          /*bundle*/
          function HtmlWrapper({
            children,
            tag = 'span',
            as = 'span'
          }) {
            const Control = as || tag;
            return _react.default.createElement(Control, {
              dangerouslySetInnerHTML: {
                __html: children
              }
            });
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 1920375694,
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
            const onClick = async event => {
              if (isExternal) return;
              event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                await props.onClick(event);
              }
              if (href) _routing.routing.pushState(href);
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

      /*************************
      INTERNAL MODULE: ./spinner
      *************************/

      ims.set('./spinner', {
        hash: 4243581074,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          const Component = (props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            size = size ? size : 'xs';
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = `${className ? `${className} ` : ''}pragmate-element-spinner spinner--${size}`;
            if (active) cls += ' is-active';
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: '30',
              style: style
            })));
          };
          /*bundle*/
          const Spinner = exports.Spinner = (0, _react.forwardRef)(Component);
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button-group/button-group",
        "from": "ButtonGroup",
        "name": "ButtonGroup"
      }, {
        "im": "./button/button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./html-render",
        "from": "HtmlWrapper",
        "name": "HtmlWrapper"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group/button-group').ButtonGroup : value);
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button/button').Button : value);
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-render').HtmlWrapper : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJjbHMiLCJkaXNhYmxlZCIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiX3RpcHB5IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZiIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImljb24iLCJsb2FkaW5nIiwiYmxvY2siLCJmZXRjaGluZyIsInZhcmlhbnQiLCJib3JkZXJlZCIsInNpemluZyIsIm90aGVyUHJvcHMiLCJjb250ZXh0IiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJyZWZPYmplY3QiLCJ1c2VSZWYiLCJjb21iaW5lZFJlZiIsImluc3RhbmNlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInVzZUVmZmVjdCIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyIiwidGFnIiwiYXMiLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHN4IiwiL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi90eXBlLnRzIiwiL3RzL2J1dHRvbi9idXR0b24udHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9odG1sLXJlbmRlci50c3giLCIvdHMvbGluay50c3giLCIvdHMvc3Bpbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLFdBQVdBLENBQUM7WUFBRUMsV0FBVyxHQUFHLEtBQUs7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUssQ0FBcUI7WUFDcEcsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFTSixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUN0RSxJQUFJSSxHQUFHLEdBQUcsa0JBQWtCO1lBQzVCQSxHQUFHLElBQUlQLFdBQVcsR0FBRyxxQkFBcUJBLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDNUQsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQ04s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