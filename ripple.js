System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, RippleEffect, __beyond_pkg, hmr;
  _export("RippleEffect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.1.1/ripple"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/ripple');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 702158720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RippleEffect = void 0;
          /*bundle*/
          class RippleEffect {
            elements;
            constructor(elements = undefined) {
              if (elements) this.add(elements);
            }
            add(elements) {
              this.elements = Array.isArray(elements) ? elements : [elements];
              this.elements.forEach(element => {
                element.classList.add('ripple');
                element.addEventListener('mousedown', this.onClick);
              });
            }
            addRippleEffect(ref) {
              this.add(ref);
            }
            onClick = event => {
              const rect = event.target.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              const ripple = document.createElement('span');
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              event.target.appendChild(ripple);
              setTimeout(() => {
                ripple.remove();
              }, 1000);
            };
            cleanup() {
              this.elements.forEach(element => {
                element.removeEventListener('mousedown', this.onClick);
              });
              this.elements = [];
            }
          }
          exports.RippleEffect = RippleEffect;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RippleEffect",
        "name": "RippleEffect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RippleEffect') && _export("RippleEffect", RippleEffect = require ? require('./index').RippleEffect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSaXBwbGVFZmZlY3QiLCJlbGVtZW50cyIsImNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGljayIsImFkZFJpcHBsZUVmZmVjdCIsInJlZiIsImV2ZW50IiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwicmlwcGxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhbnVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUFPQSxZQUFZO1lBQzNCQyxRQUFRO1lBRWhCQyxZQUFZRCxRQUFBLEdBQTRDRSxTQUFTO2NBQ2hFLElBQUlGLFFBQVEsRUFBRSxJQUFJLENBQUNHLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO1lBQ2pDO1lBRVFHLEdBQUdBLENBQUNILFFBQVE7Y0FDbkIsSUFBSSxDQUFDQSxRQUFRLEdBQUdJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTCxRQUFRLENBQUMsR0FBR0EsUUFBUSxHQUFHLENBQUNBLFFBQVEsQ0FBQztjQUMvRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxPQUFPLElBQUc7Z0JBQy9CQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDL0JJLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQ3BELENBQUMsQ0FBQztZQUNIO1lBRU9DLGVBQWVBLENBQUNDLEdBQVE7Y0FDOUIsSUFBSSxDQUFDVCxHQUFHLENBQUNTLEdBQUcsQ0FBQztZQUNkO1lBRVFGLE9BQU8sR0FBSUcsS0FBaUIsSUFBSTtjQUN2QyxNQUFNQyxJQUFJLEdBQUlELEtBQUssQ0FBQ0UsTUFBc0IsQ0FBQ0MscUJBQXFCLEVBQUU7Y0FDbEUsTUFBTUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxJQUFJO2NBQ25DLE1BQU1DLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxPQUFPLEdBQUdQLElBQUksQ0FBQ1EsR0FBRztjQUNsQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUM3Q0YsTUFBTSxDQUFDRyxLQUFLLENBQUNQLElBQUksR0FBRyxHQUFHRixDQUFDLElBQUk7Y0FDNUJNLE1BQU0sQ0FBQ0csS0FBSyxDQUFDSixHQUFHLEdBQUcsR0FBR0YsQ0FBQyxJQUFJO2NBQzFCUCxLQUFLLENBQUNFLE1BQXNCLENBQUNZLFdBQVcsQ0FBQ0osTUFBTSxDQUFDO2NBQ2pESyxVQUFVLENBQUMsTUFBSztnQkFDZkwsTUFBTSxDQUFDTSxNQUFNLEVBQUU7Y0FDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNULENBQUM7WUFFTUMsT0FBT0EsQ0FBQTtjQUNiLElBQUksQ0FBQzlCLFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxPQUFPLElBQUc7Z0JBQy9CQSxPQUFPLENBQUN3QixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDckIsT0FBTyxDQUFDO2NBQ3ZELENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQ1YsUUFBUSxHQUFHLEVBQUU7WUFDbkI7O1VBQ0FnQyxPQUFBLENBQUFqQyxZQUFBLEdBQUFBLFlBQUEiLCJpZ25vcmVMaXN0IjpbXX0=