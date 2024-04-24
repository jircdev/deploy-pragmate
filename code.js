System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
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
    }, function (_pragmateUi011Toast) {
      dependency_4 = _pragmateUi011Toast;
    }, function (_prismjs) {
      dependency_5 = _prismjs;
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
          "vspecifier": "pragmate-ui@0.1.1/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/toast', dependency_4], ['prismjs', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 4102986032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _useClick = require("./use-click");
          function Clipboard({
            text
          }) {
            const [ref, onClick] = (0, _useClick.useClick)();
            return _react.default.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_icons.IconButton, {
              title: 'copy',
              icon: 'copy'
            }), _react.default.createElement("span", {
              className: 'action-copied'
            }, "Copied"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 2123332791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var _react = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return _react.default.createElement("div", {
              className: 'code__box'
            }, _react.default.createElement("header", null, _react.default.createElement("div", {
              className: 'tab active'
            }, title), _react.default.createElement(_clipboard.Clipboard, {
              text: children
            })), _react.default.createElement("section", {
              className: 'box__code'
            }, _react.default.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 1110291450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var _react = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("pre", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            }), clipboard && _react.default.createElement(_clipboard.Clipboard, {
              text: children
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 1462049212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var _react = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return _react.default.createElement("code", {
              className: "inline__code"
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-click
      ***************************/

      ims.set('./use-click', {
        hash: 118304014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClick = useClick;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          function useClick() {
            const ref = _react.default.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              _toast.toast.info('copied');
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                window.setTimeout(() => {
                  span.classList.add('hide');
                  window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.log('some error', e);
              }
            };
            return [ref, onClick];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-box",
        "from": "CodeBox",
        "name": "CodeBox"
      }, {
        "im": "./code",
        "from": "Code",
        "name": "Code"
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VzZUNsaWNrIiwiQ2xpcGJvYXJkIiwidGV4dCIsInJlZiIsIm9uQ2xpY2siLCJ1c2VDbGljayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInRpdGxlIiwiaWNvbiIsIl9jb2RlIiwiX2NsaXBib2FyZCIsIkNvZGVCb3giLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiQ29kZSIsImNsaXBib2FyZCIsIlByaXNtIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIklubGluZUNvZGUiLCJfdG9hc3QiLCJ1c2VSZWYiLCJwb2x5ZmlsbCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ0b2FzdCIsImluZm8iLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiXSwic291cmNlcyI6WyIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLWJveC50c3giLCIvdHMvY29kZS50c3giLCIvdHMvaW5saW5lLnRzeCIsIi90cy91c2UtY2xpY2sudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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