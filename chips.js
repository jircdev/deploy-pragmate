System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.1/ripple", "tippy.js@6.3.7", "pragmate-ui@0.1.1/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi011Ripple) {
      dependency_3 = _pragmateUi011Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
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
          "vspecifier": "pragmate-ui@0.1.1/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/chips');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./chip
      **********************/
      ims.set('./chip', {
        hash: 2697446775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Chip(props) {
            const {
              type,
              className,
              title,
              children,
              icon
            } = props;
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
              if (title) (0, _tippy.default)(ref.current);
            }, [properties.onClick, title]);
            if (title) properties['data-tippy-content'] = title;
            const variant = props.variant || props.type || 'default';
            let cls = `pui-chip pui-chip--${variant}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            return _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, children, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3044580695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var _react = require("react");
          /*bundle*/
          function Chips(props) {
            const {
              children
            } = props;
            const properties = {
              ...props
            };
            ['items', 'type', 'variant'].forEach(key => delete properties[key]);
            // const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            const variant = props.variant || props.type || 'default';
            const cls = `pui-chip__container pui-chip__container--${variant}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            return _react.default.createElement("div", {
              ...properties
            }, _react.default.createElement("div", {
              className: 'content-chip'
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1245348787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./index",
        "from": "Chips",
        "name": "Chips"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'Chips') && _export("Chips", Chips = require ? require('./index').Chips : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl90aXBweSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwidmFyaWFudCIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJJY29uIiwiQ2hpcHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jaGlwLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBR087VUFBVSxTQUFVSSxJQUFJQSxDQUFDQyxLQUFpQjtZQUNoRCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsU0FBUztjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdMLEtBQUs7WUFDeEQsTUFBTU0sVUFBVSxHQUFHO2NBQUUsR0FBR047WUFBSyxDQUFFO1lBQy9CLE1BQU1PLEdBQUcsR0FBR2IsTUFBQSxDQUFBYyxPQUFLLENBQUNDLE1BQU0sQ0FBa0IsSUFBSSxDQUFDO1lBRS9DLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUNDLE9BQU8sQ0FB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