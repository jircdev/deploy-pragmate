System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CheckboxGroup, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
    Checkbox: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
    Input: void 0,
    Radio: void 0,
    Select: void 0,
    OptionSelect: void 0,
    Switch: void 0,
    Textarea: void 0
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
          "vspecifier": "pragmate-ui@0.1.1/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/form');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 4232336252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxGroup = CheckboxGroup;
          var _react = require("react");
          var _index = require("./index");
          /*bundle*/
          function CheckboxGroup(props) {
            const {
              options
            } = props;
            const output = options.map((option, index) => {
              const key = `${option.name}-${index}`;
              const {
                label,
                ...rest
              } = option;
              return _react.default.createElement(_index.Checkbox, {
                key: key,
                label: label,
                ...rest
              });
            });
            const directions = {
              column: 'column',
              row: 'row'
            };
            const direction = props.direction ?? `row`;
            const cls = `pui-checkbox-group pui-checkbox-group--${directions[direction]}`; // `pui-checkbox-group $;
            return _react.default.createElement("div", {
              className: cls
            }, props.label && _react.default.createElement("span", {
              className: 'pui-label'
            }, props.label), _react.default.createElement("div", {
              className: 'pui-group__items-container'
            }, output));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 2430323307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var _react = require("react");
          /*bundle*/
          const Checkbox = exports.Checkbox = (0, _react.forwardRef)(function (props, ref) {
            const {
              checked,
              disabled,
              className,
              onChange,
              label
            } = props;
            const [value, setValue] = (0, _react.useState)(!!checked);
            (0, _react.useEffect)(() => {
              setValue(!!checked);
            }, [checked]);
            const handleChange = event => {
              event.stopPropagation();
              setValue(!value);
              onChange && onChange(event);
            };
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const name = props.name ?? 'pui-checkbox--name';
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const handleClick = event => event.stopPropagation();
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: value,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: 'pui-checkbox--label',
              htmlFor: id
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              viewBox: '0 0 12 9'
            }, _react.default.createElement("polyline", {
              points: '1 5 4 8 11 1'
            }))), _react.default.createElement("span", null, label)));
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./form
      **********************/

      ims.set('./form', {
        hash: 278710587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps
            }, props.children);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/date
      ***************************************/

      ims.set('./input/components/date', {
        hash: 4016619854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Date = Date;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Date() {
            const {
              input,
              props,
              icon,
              isDate
            } = (0, _context.useInputContext)();
            if (!isDate) return null;
            const iconValue = icon ? icon : 'calendar';
            const showPicker = () => {
              if (props.disabled) return;
              input.current.showPicker();
            };
            return _react.default.createElement(_icons.Icon, {
              key: 'icon',
              icon: iconValue,
              className: 'pui-input__icon',
              onClick: showPicker
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/error
      ****************************************/

      ims.set('./input/components/error', {
        hash: 534355326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          /*bundle*/
          function Error({
            show,
            message,
            className,
            children
          }) {
            if (!show) return null;
            const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
            return _react.default.createElement("span", {
              className: cls
            }, message, " ", children);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./input/components/icon-container
      *************************************************/

      ims.set('./input/components/icon-container', {
        hash: 168038464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconContainer = IconContainer;
          var _react = require("react");
          var _password = require("./password");
          var _context = require("../context");
          var _date = require("./date");
          var _icon = require("./icon");
          function IconContainer() {
            const {
              props
            } = (0, _context.useInputContext)();
            const types = {
              password: _password.Password,
              date: _date.Date,
              default: null,
              month: _date.Date,
              week: _date.Date,
              'datetime-local': _date.Date
            };
            const output = [];
            if (!!types[props.type]) {
              const Control = types[props.type];
              output.push(_react.default.createElement(Control, {
                key: "control"
              }));
            }
            ;
            if (!!props.icon) {
              output.push(_react.default.createElement(_icon.Icon, {
                key: "icon"
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
          ;
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/icon
      ***************************************/

      ims.set('./input/components/icon', {
        hash: 2806631327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icon = Icon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Icon() {
            const {
              props: {
                icon
              },
              isDate
            } = (0, _context.useInputContext)();
            if (!icon || isDate) return null;
            return _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "input-icon"
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/label
      ****************************************/

      ims.set('./input/components/label', {
        hash: 789869850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("../context");
          /*bundle */
          function Label({
            required,
            position,
            children
          } = {}) {
            const {
              name,
              id
            } = (0, _context.useInputContext)();
            const variants = {
              floating: 'floating-label',
              right: 'pui-input__label--right',
              bottom: 'pui-input__label--bottom',
              'bottom-right': 'pui-input__label--bottom-right'
            };
            let cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;
            if (required) cls += ' is-required';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: id ?? name,
              className: cls
            }, _react.default.createElement("span", {
              className: 'label-content'
            }, " ", children)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./input/components/password
      *******************************************/

      ims.set('./input/components/password', {
        hash: 1440208605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Password = Password;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Password() {
            const {
              state,
              setState
            } = (0, _context.useInputContext)();
            const changeType = event => {
              event.stopPropagation();
              setState({
                ...state,
                type: state.type === "password" ? "text" : "password"
              });
            };
            const attrs = {
              className: "icon-eye",
              onClick: changeType,
              icon: state.type === "password" ? "eye" : "eye-slash"
            };
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 902539138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = exports.InputContext = React.createContext({});
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/control
      *******************************/

      ims.set('./input/control', {
        hash: 1459325288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlSelector = ControlSelector;
          var _react = require("react");
          var _context = require("./context");
          var _internalProps = require("./internal-props");
          var _iconContainer = require("./components/icon-container");
          function ControlSelector() {
            const {
              setState,
              state,
              value,
              setValue,
              props: {
                name,
                id,
                placeholder
              },
              props,
              input
            } = (0, _context.useInputContext)();
            let properties = {
              ...props
            };
            (0, _react.useEffect)(() => {
              setValue(props.value);
            }, [props.value]);
            _internalProps.internalProps.forEach(prop => delete properties[prop]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const currentValue = event.currentTarget.value;
              setValue(currentValue);
              setState({
                ...state,
                _hasError: false,
                value: currentValue
              });
            };
            const attrs = {
              id: id ?? name,
              placeholder: placeholder ?? '',
              value: value ?? ''
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
              onInvalid: event => {
                const {
                  target
                } = event;
                if (target.validity.valueMissing) {
                  target.setCustomValidity('Please enter your name');
                }
                console.log('is invalid', name, event);
              },
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              type: state.type,
              ...attrs
            }), _react.default.createElement(_iconContainer.IconContainer, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 3108496707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _context = require("./context");
          var _label = require("./components/label");
          var _control = require("./control");
          var _error = require("./components/error");
          /*bundle*/ /**
                      *
                      * @param props
                      *
                      * 1. pattern property + existing error.
                      * 2. Controlled Input where the implementer defines the error.
                      * 3. Automated Input with multiple validations and error management.
                      *
                      * @returns
                      */
          function Input(props) {
            const {
              hasError,
              errorMessage,
              variant,
              className,
              label,
              children,
              icon,
              type
            } = props;
            const [value, setValue] = _react.default.useState(props.value ?? '');
            const [state, setState] = (0, _react.useState)({
              type
            });
            const input = (0, _react.useRef)(null);
            let cls = `pui-input${className ? ` ${className}` : ''}`;
            const dates = ['date', 'week', 'month', 'time', 'datetime-local'];
            const isDate = dates.includes(props.type);
            if (isDate) cls += ' pui-input--date';
            if (!!icon) cls += ' pui-input--icon';
            if (!!icon && variant === 'floating') cls += ' icon__floating';
            if (props.type === 'password') cls += ' pui-input--password';
            const variants = {
              unstyled: 'pui-input--unstyled',
              floating: 'pui-input--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            const providerValue = {
              props,
              state,
              setState,
              value,
              setValue,
              input,
              icon,
              isDate
            };
            const labelSpecs = {
              required: props.required
            };
            const attrs = {};
            /**
             * todo: review it.
             */
            if (variant === 'floating') labelSpecs.position = variant;
            if (variant !== 'unstyled') attrs.className = cls;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: providerValue
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_control.ControlSelector, null), children, label && _react.default.createElement(_label.Label, {
              ...labelSpecs
            }, label), errorMessage && _react.default.createElement(_error.Error, {
              show: !!hasError,
              message: errorMessage
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/interfaces/index
      ****************************************/

      ims.set('./input/interfaces/index', {
        hash: 239822135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
        }
      });

      /**************************************
      INTERNAL MODULE: ./input/internal-props
      **************************************/

      ims.set('./input/internal-props', {
        hash: 3254431444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.internalProps = void 0;
          /**
           * Internal props of the input component.
           * This array is used to filter the props passed to the input component.
           */
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type'];
        }
      });

      /*******************************
      INTERNAL MODULE: ./model/manager
      *******************************/

      ims.set('./model/manager', {
        hash: 3171752923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectorManager = void 0;
          class SelectorManager {
            static #instance;
            #selector;
            get selector() {
              return this.#selector;
            }
            constructor(selector) {}
            validate() {}
            static get(selector) {
              if (!this.#instance) {
                this.#instance = new SelectorManager(selector);
              }
              return this.#instance;
            }
          }
          exports.SelectorManager = SelectorManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 679055454,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)();
            const onClick = event => {
              event.stopPropagation();
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ''}`;
            return _react.default.createElement("label", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: 'radio',
              onChange: onClick
            }), properties.label && _react.default.createElement("span", null, properties.label));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./select/index
      ******************************/

      ims.set('./select/index', {
        hash: 912006739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _option = require("./option");
          /*bundle */
          function Select(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            delete attributes.options;
            const value = ![undefined, null].includes(props.value) ?? '';
            let output = [];
            if (props.options) {
              props.options.forEach((item, key) => {
                output.push(_react.default.createElement(_option.OptionSelect, {
                  ...item,
                  key: key
                }));
              });
            }
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const cls = `pui-input-select`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              htmlFor: id
            }, props.label), _react.default.createElement("select", {
              className: cls,
              ...attributes
            }, output, children));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./select/option
      *******************************/

      ims.set('./select/option', {
        hash: 2324332836,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionSelect = OptionSelect;
          var _react = require("react");
          /*bundle */
          function OptionSelect(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            return _react.default.createElement("option", {
              ...attributes
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 1859698391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = Switch;
          var _react = require("react");
          /* bundle */
          function Switch(props) {
            const {
              checked,
              onChange,
              variant = 'primary',
              disabled,
              size = 'md',
              className
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(checked);
            _react.default.useEffect(() => {
              if (isChecked === checked) return;
              setIsChecked(checked);
            }, [checked]);
            const handleChange = event => {
              event.stopPropagation();
              setIsChecked(event.currentTarget.checked);
              onChange && onChange(event);
            };
            let classNameSwitch = `pui-element-switch ${className ? className : ''}`;
            classNameSwitch += disabled ? ' disabled' : '';
            let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
            cls += variant ? ` ${variant}` : '';
            cls += size ? ` ${size}` : '';
            const properties = {
              ...props
            };
            ['className', 'checked', 'onChange', 'variant', 'size', "id"].forEach(prop => {
              delete properties[prop];
            });
            const id = props.id ?? props.name ?? "pui-element-switch";
            return _react.default.createElement("div", {
              className: classNameSwitch
            }, _react.default.createElement("input", {
              className: 'pui-element-switch__checkbox',
              id: id,
              type: 'checkbox',
              checked: isChecked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: cls,
              htmlFor: id
            }, _react.default.createElement("span", {
              className: `label__btn--slider`
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./textarea/counter
      **********************************/

      ims.set('./textarea/counter', {
        hash: 1510952168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaCounter = TextareaCounter;
          var _react = require("react");
          function TextareaCounter({
            counter,
            length,
            maxlength
          }) {
            if (!counter) return null;
            let cls = 'pui-textarea-counter';
            if (maxlength && length > maxlength - 15) {
              cls += length > maxlength - 5 ? ' pui-textarea-counter--danger' : ' pui-textarea-counter--warning';
            }
            return _react.default.createElement("span", {
              className: cls
            }, length ?? 0);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/error
      ********************************/

      ims.set('./textarea/error', {
        hash: 2150596302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaError = TextareaError;
          var _react = require("react");
          function TextareaError({
            state,
            hasError,
            errorMessage,
            value
          }) {
            if (!state._hasError && !hasError) return null;
            if (hasError || value !== '') errorMessage = errorMessage ? errorMessage : state.errorMessage;
            return _react.default.createElement("span", {
              className: 'pui-element-input-error'
            }, errorMessage);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/index
      ********************************/

      ims.set('./textarea/index', {
        hash: 1061580412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _error = require("./error");
          var _counter = require("./counter");
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, _react.useRef)();
            const {
              counter,
              errorMessage,
              value = ''
            } = props;
            const [state, setState] = (0, _react.useState)({
              value,
              errorMessage
            });
            const checkSize = () => {
              const {
                scrollHeight,
                offsetHeight
              } = input.current;
              if (scrollHeight > offsetHeight) {
                input.current.style.height = `${scrollHeight}px`;
              }
            };
            /**
             * If the textarea is created with a value, the height needs to be checked
             */
            _react.default.useEffect(checkSize, [value]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              setState({
                ...state,
                _hasError: false,
                value: event.target.value
              });
            };
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'counter', 'errorMessage', 'children', 'label'].forEach(prop => delete properties[prop]);
            let clsLabel = '';
            if (props.required) cls += ' is-required';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: value,
              placeholder: props.placeholder ?? ' '
            }), props.children, _react.default.createElement(_error.TextareaError, {
              state: state,
              hasError: props.hasError,
              value: value,
              errorMessage: props.errorMessage
            }), props.label && _react.default.createElement("label", {
              className: clsLabel,
              htmlFor: props.id
            }, props.label), _react.default.createElement(_counter.TextareaCounter, {
              length: input?.current?.value.length,
              maxlength: props.maxLength,
              counter: counter
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/types
      ********************************/

      ims.set('./textarea/types', {
        hash: 3944418147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./checkbox/group",
        "from": "CheckboxGroup",
        "name": "CheckboxGroup"
      }, {
        "im": "./checkbox/index",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input/components/error",
        "from": "Error",
        "name": "Error"
      }, {
        "im": "./input/components/label",
        "from": "Label",
        "name": "Label"
      }, {
        "im": "./input/index",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./select/index",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./select/option",
        "from": "OptionSelect",
        "name": "OptionSelect"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea/index",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CheckboxGroup') && _export("CheckboxGroup", CheckboxGroup = require ? require('./checkbox/group').CheckboxGroup : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox/index').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Error') && _export("Error", Error = require ? require('./input/components/error').Error : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./input/components/label').Label : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input/index').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select/index').Select : value);
        (require || prop === 'OptionSelect') && _export("OptionSelect", OptionSelect = require ? require('./select/option').OptionSelect : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea/index').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInR5cGUiLCJodG1sRm9yIiwidmlld0JveCIsInBvaW50cyIsIkZvcm0iLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJfaWNvbnMiLCJfY29udGV4dCIsIkRhdGUiLCJpbnB1dCIsImljb24iLCJpc0RhdGUiLCJ1c2VJbnB1dENvbnRleHQiLCJpY29uVmFsdWUiLCJzaG93UGlja2VyIiwiY3VycmVudCIsIkljb24iLCJFcnJvciIsInNob3ciLCJtZXNzYWdlIiwiX3Bhc3N3b3JkIiwiX2RhdGUiLCJfaWNvbiIsIkljb25Db250YWluZXIiLCJ0eXBlcyIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJkYXRlIiwibW9udGgiLCJ3ZWVrIiwiQ29udHJvbCIsInB1c2giLCJGcmFnbWVudCIsIkxhYmVsIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsInZhcmlhbnRzIiwiZmxvYXRpbmciLCJyaWdodCIsImJvdHRvbSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFuZ2VUeXBlIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJJbnB1dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnRlcm5hbFByb3BzIiwiX2ljb25Db250YWluZXIiLCJDb250cm9sU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsImludGVybmFsUHJvcHMiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiX2hhc0Vycm9yIiwib25JbnZhbGlkIiwidGFyZ2V0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJzZXRDdXN0b21WYWxpZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlUmVmIiwiZGF0ZXMiLCJpbmNsdWRlcyIsInVuc3R5bGVkIiwicHJvdmlkZXJWYWx1ZSIsImxhYmVsU3BlY3MiLCJQcm92aWRlciIsIlNlbGVjdG9yTWFuYWdlciIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsInZhbGlkYXRlIiwiZ2V0IiwiUmFkaW8iLCJfb3B0aW9uIiwiU2VsZWN0IiwiYXR0cmlidXRlcyIsInVuZGVmaW5lZCIsIml0ZW0iLCJPcHRpb25TZWxlY3QiLCJTd2l0Y2giLCJzaXplIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiY2xhc3NOYW1lU3dpdGNoIiwiVGV4dGFyZWFDb3VudGVyIiwiY291bnRlciIsImxlbmd0aCIsIm1heGxlbmd0aCIsIlRleHRhcmVhRXJyb3IiLCJfY291bnRlciIsIlRleHRhcmVhIiwiY2hlY2tTaXplIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsYUFBYUEsQ0FB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