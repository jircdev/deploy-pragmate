System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "react-select@5.8.0", "is-mobile@4.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_reactSelect2) {
      dependency_3 = _reactSelect2;
    }, function (_isMobile2) {
      dependency_4 = _isMobile2;
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
          "vspecifier": "pragmate-ui@0.1.1/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3], ['is-mobile', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2410935613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _reactSelect = require("react-select");
          var _useStyles = require("./use-styles");
          var _isMobile = require("is-mobile");
          var _mobileSelect = require("./mobile-select");
          /*bundle*/
          function ReactSelect(props) {
            let properties = {
              ...props
            };
            let {
              name
            } = props;
            const {
              ref
            } = (0, _useStyles.useStyles)();
            delete properties.onChange;
            let value = props.options.find(item => item.value === props.value);
            const onChange = ({
              label,
              value
            }) => {
              if (!props.onChange) return;
              const target = {
                value,
                name
              };
              props.onChange({
                target,
                currentTarget: {
                  ...target
                }
              });
            };
            if ((0, _isMobile.default)()) return _react.default.createElement(_mobileSelect.MobileSelect, {
              ...props
            });
            const attrs = {
              onChange,
              ...properties,
              value
            };
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, props.label && _react.default.createElement("label", null, props.label), _react.default.createElement(_reactSelect.default, {
              classNamePrefix: 'pui-react-select',
              ...attrs
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./mobile-select
      *******************************/

      ims.set('./mobile-select', {
        hash: 1683394978,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileSelect = MobileSelect;
          var _react = require("react");
          function MobileSelect({
            options,
            ...props
          }) {
            const output = options.map(({
              value,
              label
            }) => _react.default.createElement("option", {
              title: label,
              key: value,
              value: value
            }, label));
            return _react.default.createElement("div", {
              className: 'pui-mobile-select__container'
            }, _react.default.createElement("select", {
              title: 'select',
              ...props,
              className: 'pui-mobile-select'
            }, _react.default.createElement("option", {
              value: '',
              disabled: true,
              style: {
                display: 'none'
              }
            }, props.placeholder), output));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3933443758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            constructor({
              callback
            }) {
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  callback(mutation.addedNodes);
                });
              });
            }
            startObserving(targetNode) {
              if (!targetNode) return;
              const config = {
                childList: true
              };
              this.observer.observe(targetNode, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-styles
      ****************************/

      ims.set('./use-styles', {
        hash: 2902897892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStyles = useStyles;
          var _react = require("react");
          var _observer = require("./observer");
          function useStyles() {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!ref.current) return;
              const host = ref.current.getRootNode()?.host;
              if (!host) console.warn('is not inside a web component');
              if (!host.shadowRoot.insertedStyles) host.shadowRoot.insertedStyles = new Set();
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              // the callback name is used because it is the property parameter of the StyleObserver class
              const callback = nodes => {
                const insertedStyles = new Set();
                nodes.forEach(node => {
                  const styleContent = node?.textContent;
                  if (!(node instanceof HTMLStyleElement) || insertedStyles.has(styleContent)) return;
                  const clonedStyle = node.cloneNode(true);
                  host.shadowRoot.appendChild(clonedStyle);
                  insertedStyles.add(styleContent);
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              callback(headStyles);
              return () => styleObserver.stopObserving();
            }, [ref.current]);
            return {
              ref
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactSelect",
        "name": "ReactSelect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactSelect') && _export("ReactSelect", ReactSelect = require ? require('./index').ReactSelect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX3VzZVN0eWxlcyIsIl9pc01vYmlsZSIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2JpbGVTZWxlY3QiLCJhdHRycyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByZWZpeCIsIm91dHB1dCIsIm1hcCIsInRpdGxlIiwia2V5IiwiZGlzYWJsZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGFjZWhvbGRlciIsIlN0eWxlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiY2FsbGJhY2siLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZm9yRWFjaCIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIiwiX29ic2VydmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImhvc3QiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2hhZG93Um9vdCIsImluc2VydGVkU3R5bGVzIiwiU2V0IiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlcyIsIm5vZGUiLCJzdHlsZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJoYXMiLCJjbG9uZWRTdHlsZSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwic3R5bGVPYnNlcnZlciJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxVQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxhQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFVLFNBQ1JLLFdBQVdBLENBQUNDLEtBQUs7WUFDekIsSUFBSUMsVUFBVSxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzdCLElBQUk7Y0FBRUU7WUFBSSxDQUFFLEdBQUdGLEtBQUs7WUFDcEIsTUFBTTtjQUFFRztZQUFHLENBQUUsR0FBRyxJQUFBUCxVQUFBLENBQUFRLFNBQVMsR0FBRTtZQUMzQixPQUFPSCxVQUFVLENBQUNJLFFBQVE7WUFDMUIsSUFBSUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0gsS0FBSyxLQUFLTixLQUFLLENBQUNNLEtBQUssQ0FBQztZQUVsRSxNQUFNRCxRQUFRLEdBQUdBLENBQUM7Y0FBRUssS0FBSztjQUFFSjtZQUFLLENBQUUsS0FBSTtjQUNyQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssUUFBUSxFQUFFO2NBQ3JCLE1BQU1NLE1BQU0sR0FBRztnQkFBRUwsS0FBSztnQkFBRUo7Y0FBSSxDQUFFO2NBQzlCRixLQUFLLENBQUNLLFFBQVEsQ0FBQztnQkFBRU0sTUFBTTtnQkFBRUMsYUFBYSxFQUFFO2tCQUFFLEdBQUdEO2dCQUFNO2NBQUUsQ0FBRSxDQUFDO1lBQ3pELENBQUM7WUFFRCxJQUFJ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QUFJLENBQUM7WUFFOUJyRCxNQUFBLENBQUFvQixPQUFLLENBQUNrQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUM1QyxHQUFHLENBQUM2QyxPQUFPLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHOUMsR0FBRyxDQUFDNkMsT0FBTyxDQUFDRSxXQUFXLEVBQUUsRUFBRUQsSUFBSTtjQUM1QyxJQUFJLENBQUNBLElBQUksRUFBRUUsT0FBTyxDQUFDQyxJQUFJLENBQUMsK0JBQStCLENBQUM7Y0FDeEQsSUFBSSxDQUFDSCxJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxFQUFFTCxJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtjQUUvRSxNQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztjQUN4RTtjQUNBLE1BQU03QixRQUFRLEdBQUk4QixLQUErQixJQUFJO2dCQUNwRCxNQUFNTixjQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUNoQ0ssS0FBSyxDQUFDM0IsT0FBTyxDQUFDNEIsSUFBSSxJQUFHO2tCQUNwQixNQUFNQyxZQUFZLEdBQUdELElBQUksRUFBRUUsV0FBVztrQkFDdEMsSUFBSSxFQUFFRixJQUFJLFlBQVlHLGdCQUFnQixDQUFDLElBQUlWLGNBQWMsQ0FBQ1csR0FBRyxDQUFDSCxZQUFZLENBQUMsRUFBRTtrQkFFN0UsTUFBTUksV0FBVyxHQUFHTCxJQUFJLENBQUNNLFNBQVMsQ0FBQyxJQUFJLENBQUM7a0JBQ3hDbEIsSUFBSSxDQUFDSSxVQUFVLENBQUNlLFdBQVcsQ0FBQ0YsV0FBVyxDQUFDO2tCQUN4Q1osY0FBYyxDQUFDZSxHQUFHLENBQUNQLFlBQVksQ0FBQztnQkFDakMsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUVELE1BQU1RLGFBQWEsR0FBa0IsSUFBSXpCLFNBQUEsQ0FBQWxCLGFBQWEsQ0FBQztnQkFBRUc7Y0FBUSxDQUFFLENBQUM7Y0FDcEUsTUFBTVEsVUFBVSxHQUFvQm1CLFFBQVEsQ0FBQ0MsSUFBSTtjQUNqRFksYUFBYSxDQUFDakMsY0FBYyxDQUFDQyxVQUFVLENBQUM7Y0FDeENSLFFBQVEsQ0FBQzBCLFVBQVUsQ0FBQztjQUVwQixPQUFPLE1BQU1jLGFBQWEsQ0FBQzVCLGFBQWEsRUFBRTtZQUMzQyxDQUFDLEVBQUUsQ0FBQ3ZDLEdBQUcsQ0FBQzZDLE9BQU8sQ0FBQyxDQUFDO1lBRWpCLE9BQU87Y0FBRTdDO1lBQUcsQ0FBRTtVQUNmIiwiaWdub3JlTGlzdCI6W119