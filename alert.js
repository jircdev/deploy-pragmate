System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, ITypes, IAlertTypes, __beyond_pkg, hmr;
  _export({
    Alert: void 0,
    ITypes: void 0,
    IAlertTypes: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.1.1/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2270589349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alert = Alert;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _content = require("./content");
          /*bundle*/
          function Alert({
            message,
            className,
            type,
            title,
            children,
            closable,
            onClose,
            icon
          }) {
            const [show, setShow] = _react.default.useState(true);
            if (!show || !message && !children) return null;
            const onClick = async event => {
              event.stopPropagation();
              if (onClose) await onClose();
              setShow(false);
            };
            let cls = `${className ? `${className} ` : ''} alert${type ? ` alert--${type}` : ''}`;
            cls = icon ? `${cls} alert--icon` : cls;
            const icons = {
              error: 'error',
              warning: 'circle-exclamation',
              success: 'circle-check',
              info: 'info'
            };
            const defaultIcon = icons[type ?? 'success'];
            const hasIcon = !!icon;
            const attributes = {
              className: cls
            };
            if (closable) attributes.onClick = onClick;
            return _react.default.createElement("div", {
              ...attributes
            }, icon && _react.default.createElement("section", null, _react.default.createElement(_icons.Icon, {
              icon: defaultIcon
            })), _react.default.createElement(_content.Content, {
              message: message,
              title: title,
              icon: hasIcon
            }, children), closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: onClick
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 205551790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          function Content({
            message,
            children,
            title,
            icon
          }) {
            let output = [];
            if (title) {
              output.push(_react.default.createElement("header", {
                key: "title",
                className: "alert__title"
              }, _react.default.createElement("h3", {
                className: "alert__title-span",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })));
            }
            if (message) {
              output.push(_react.default.createElement("span", {
                key: "message",
                dangerouslySetInnerHTML: {
                  __html: message
                }
              }));
            }
            const Control = icon ? 'section' : _react.default.Fragment;
            return _react.default.createElement(Control, null, output, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2963857065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ITypes = exports.IAlertTypes = void 0;
          /*bundle*/
          var ITypes;
          (function (ITypes) {
            ITypes["Error"] = "error";
            ITypes["Warning"] = "warning";
            ITypes["Success"] = "success";
            ITypes["Info"] = "info";
          })(ITypes || (exports.ITypes = ITypes = {}));
          /*bundle*/
          const IAlertTypes = exports.IAlertTypes = ITypes;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "Alert",
        "name": "Alert"
      }, {
        "im": "./types",
        "from": "ITypes",
        "name": "ITypes"
      }, {
        "im": "./types",
        "from": "IAlertTypes",
        "name": "IAlertTypes"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./alert').Alert : value);
        (require || prop === 'ITypes') && _export("ITypes", ITypes = require ? require('./types').ITypes : value);
        (require || prop === 'IAlertTypes') && _export("IAlertTypes", IAlertTypes = require ? require('./types').IAlertTypes : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJDb250ZW50IiwiSWNvbkJ1dHRvbiIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIklUeXBlcyIsImV4cG9ydHMiLCJJQWxlcnRUeXBlcyJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY29udGVudC50c3giLCIvdHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsU0FDUkcsS0FBS0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDLFNBQVM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUMsUUFBUTtZQUFFQyxPQUFPO1lBQUVDO1VBQUksQ0FBVTtZQUM1RixNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdkLE1BQUEsQ0FBQWUsT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFB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