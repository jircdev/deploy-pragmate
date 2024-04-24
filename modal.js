System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0,
    IModalProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_2 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_3 = _pragmateUi011Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.1.1/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 853535473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var React = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              centered,
              button = {}
            } = props;
            const close = async () => {
              setState({
                fetching: true
              });
              if (props.onConfirm) await props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const btnAttrs = {
              className: `btn btn-primary${props.className ? ` ${props.className}` : ''}`,
              disabled: state.fetching,
              label: props.buttonLabel || 'Confirm',
              onClick: close,
              ...button
            };
            let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: props.onClose
            }, React.createElement("div", {
              className: 'alert-dialog-content'
            }, title && React.createElement(_components.HtmlWrapper, null, title), text && React.createElement(_components.HtmlWrapper, null, text), props.children ? props.children : null), React.createElement("div", {
              className: 'pui-modal-actions'
            }, React.createElement(_components.Button, {
              ...btnAttrs
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 3024766841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
          var _icons = require("pragmate-ui/icons");
          const ModalContext = exports.ModalContext = (0, _react.createContext)({});
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: 'close-icon',
                onClick: close,
                "data-dismiss": 'modal',
                "aria-label": 'Close',
                key: 'dismiss-button',
                icon: 'close'
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(ModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*******************************
      INTERNAL MODULE: ./confirm/index
      *******************************/

      ims.set('./confirm/index', {
        hash: 479072307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("../modal");
          var _useActionProperties = require("./use-action-properties");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              onCancel,
              centered,
              onClose
            } = properties;
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            const handleClose = onClose ?? onCancel;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: handleClose
            }, React.createElement("div", {
              className: 'pui-confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", {
              className: 'pui-confirm-dialog-content__text'
            }, text), properties.children), React.createElement("div", {
              className: 'pui-actions'
            }, React.createElement(_components.Button, {
              ...cancelProps,
              ...disabled
            }), React.createElement(_components.Button, {
              ...disabled,
              ...confirmProps
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./confirm/use-action-properties
      ***********************************************/

      ims.set('./confirm/use-action-properties', {
        hash: 1336422196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActionProperties = useActionProperties;
          /**
           * useActionProperties function
           *
           * This function is designed to process and return action properties for the Button component
           * in the Pragmate UI library. It supports the current API structure of the Button component
           * while maintaining backward compatibility with an older configuration format.
           *
           * The function takes a `properties` object as an argument. If this object contains an `actions` property,
           * it directly returns the `confirm` and `cancel` actions defined within. This is aligned with the current API design.
           *
           * For backward compatibility, the function also handles the scenario where the `actions` property is not present.
           * In this case, it extracts and processes individual properties like `onCancel`, `onConfirm`, `btnConfirm`, and `btnCancel`
           * from the `properties` object. These are then used to construct and return `confirm` and `cancel` action objects
           * with appropriate labels, class names, variants, and onClick handlers.
           *
           * @param {object} properties - The properties object containing either a direct `actions` property
           *                              or individual properties for backward compatibility.
           * @returns An array containing two action objects: confirm and cancel.
           */
          function useActionProperties(properties, setState) {
            const onProcessConfirm = callback => {
              return async event => {
                event.stopPropagation();
                setState({
                  fetching: true
                });
                await callback();
                setState({
                  fetching: false
                });
              };
            };
            if (properties.actions) {
              const confirmProps = {
                ...properties.actions.confirm
              };
              const cancelProps = {
                ...properties.actions.cancel
              };
              if (!confirmProps.onClick && !properties.onConfirm) {
                throw new Error('ConfirmModal: No confirm function defined');
              }
              if (!cancelProps.onClick && !properties.onCancel) {
                throw new Error('ConfirmModal: No cancel function defined');
              }
              confirmProps.onClick = onProcessConfirm(confirmProps.onClick ?? properties.onConfirm);
              cancelProps.onClick = cancelProps.onClick ?? properties.onCancel;
              return [confirmProps, cancelProps];
            }
            const {
              onCancel,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            const defaultConfirm = {
              label: 'Confirm',
              variant: 'primary',
              onClick: onProcessConfirm(onConfirm)
            };
            const defaultCancel = {
              label: 'Cancel',
              variant: 'primary',
              onClick: onCancel,
              bordered: true
            };
            const actions = {
              confirm: typeof btnConfirm === 'object' ? {
                ...defaultConfirm,
                ...btnConfirm
              } : defaultConfirm,
              cancel: typeof btnCancel === 'object' ? {
                ...defaultCancel,
                ...btnCancel
              } : defaultCancel
            };
            return [actions.confirm, actions.cancel];
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 688066261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
          var React = _react;
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, _react.useState)({
              show: props?.show ?? false,
              closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            const close = async event => {
              if (event) event.stopPropagation();
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              globalThis.setTimeout(async () => {
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                const {
                  onClose
                } = props;
                if (!onClose || typeof onClose !== 'function') return;
                onClose(event);
              }, 200);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              if (!state.closeClicked) return;
              close(event);
            };
            const show = state.show;
            let cls = 'pui-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: 'modal-content-wrapper',
                className: 'modal-wrapper'
              }, React.createElement("div", {
                className: 'modal-content',
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: 'children-content'
              }))));
            }
            return React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/alert
      *****************************/

      ims.set('./types/alert', {
        hash: 418551076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./types/confirm
      *******************************/

      ims.set('./types/confirm', {
        hash: 4185920130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./types/modal-props
      ***********************************/

      ims.set('./types/modal-props', {
        hash: 1341912741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm/index",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }, {
        "im": "./types/modal-props",
        "from": "IModalProps",
        "name": "IModalProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm/index').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
        (require || prop === 'IModalProps') && _export("IModalProps", IModalProps = require ? require('./types/modal-props').IModalProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl91c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsIm9uQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjb25maXJtUHJvcHMiLCJjYW5jZWxQcm9wcyIsInVzZUFjdGlvblByb3BlcnRpZXMiLCJoYW5kbGVDbG9zZSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJjYW5jZWwiLCJFcnJvciIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInZhcmlhbnQiLCJkZWZhdWx0Q2FuY2VsIiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjbG9zZUJhY2tkcm9wIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4IiwiL2FsZXJ0LnRzIiwiL2NvbmZpcm0udHMiLCIvbW9kYWwtcHJvcHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsU0FDUkcsVUFBVUEsQ0FBQ0MsS0FBdUI7WUFDMUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQVEsQ0FBQztjQUFFQyxRQUFRLEVBQUU7WUFBSyxDQUFFLENBQUM7WUFDN0QsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQyxNQUFNLEdBQUc7WUFBRSxDQUFFLEdBQUdSLEtBQUs7WUFDcEQsTUFBTVMsS0FBSyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN4QlAsUUFBUSxDQUFDO2dCQUFFRSxRQUFRLEVBQUU7Y0FBSSxDQUFF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