System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "swiper@10.3.0", "swiper@10.3.0/modules", "@beyond-js/reactive@1.1.4/model", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_swiper) {
      dependency_3 = _swiper;
    }, function (_swiper1030Modules) {
      dependency_4 = _swiper1030Modules;
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
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
          "vspecifier": "pragmate-ui@0.1.1/swiper"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['swiper', dependency_3], ['swiper/modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/swiper');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./components/footer
      ***********************************/
      ims.set('./components/footer', {
        hash: 4152585320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var _react = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return _react.default.createElement(_react.default.Fragment, null, !controller?.swiper.isEnd && _react.default.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), _react.default.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/navigation
      ***************************************/

      ims.set('./components/navigation', {
        hash: 1445369557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function SwiperNavigation() {
            const {
              controller,
              navigation,
              refs: {
                prev,
                next
              }
            } = (0, _context.useSwiperContext)();
            if (!navigation) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: prev,
              icon: 'left',
              variant: 'primary',
              className: 'swiper__navigation-btn swiper-button-prev',
              onClick: controller?.prevSlide
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'right',
              ref: next,
              variant: 'primary',
              onClick: controller?.nextSlide,
              className: 'swiper__navigation-btn  swiper-button-next'
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/pagination
      ***************************************/

      ims.set('./components/pagination', {
        hash: 2024338772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var _react = require("react");
          var _context = require("../context");
          function Pagination() {
            const {
              pagination,
              refs
            } = (0, _context.useSwiperContext)();
            if (!pagination) return null;
            return _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 522084440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var _react = require("react");
          const SwiperContext = exports.SwiperContext = _react.default.createContext({});
          const useSwiperContext = () => _react.default.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4094575603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var _react = require("react");
          var _footer = require("./components/footer");
          var _navigation = require("./components/navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          var _pagination = require("./components/pagination");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              pagination,
              footer,
              navigation,
              children
            } = props;
            const {
              refs,
              state
            } = (0, _useSwiper.useSwiperSlider)(props);
            const {
              controller
            } = state;
            const contextValue = {
              footer,
              pagination,
              controller,
              navigation,
              refs
            };
            const cls = `swiper-container swiper ${props.className ? `${props.className} pui-swiper-slider` : 'pui-swiper-slider'};`;
            return _react.default.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              ref: refs.container,
              className: cls
            }, _react.default.createElement(_slide.SlideItems, {
              items: children
            }), _react.default.createElement(_pagination.Pagination, null), _react.default.createElement(_footer.SwiperFooter, null), _react.default.createElement(_navigation.SwiperNavigation, null)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./interfaces/swiper-props
      *****************************************/

      ims.set('./interfaces/swiper-props', {
        hash: 1706774564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/index
      *****************************/

      ims.set('./slide/index', {
        hash: 721733334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var _react = require("react");
          var _slide = require("./slide");
          function SlideItems({
            items
          }) {
            const slides = items.map((slide, index) => _react.default.createElement(_slide.Slide, {
              key: index
            }, slide));
            return _react.default.createElement("div", {
              className: "swiper-wrapper"
            }, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2855517027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var _react = require("react");
          function Slide({
            children
          }) {
            return _react.default.createElement("div", {
              className: "swiper-slide"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
        hash: 1264338741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _modules = require("swiper/modules");
          var _model = require("@beyond-js/reactive/model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _model.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              let specs = {
                slidesPerView: props.slidesPerView ?? 1,
                modules: [_modules.Navigation, _modules.Pagination],
                ...props
              };
              Object.keys(specs).forEach(key => {
                if (['children'].includes(key)) delete specs[key];
              });
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? 'bullets',
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === 'function') props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === 'function') props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === 'function') props.slideTo(slideTo);
              this.#swiper.on('slideChange', () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            nextSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onNext) this.#props.onNext();else this.#swiper?.slideNext(500, false);
            };
            prevSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onPrev) this.#props.onPrev();else this.#swiper?.slidePrev(500, false);
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /*********************************
      INTERNAL MODULE: ./state/interface
      *********************************/

      ims.set('./state/interface', {
        hash: 3704574833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 1144974160,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var _react = require("react");
          var _controller = require("./state/controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: _react.default.useRef(),
              container: _react.default.useRef(),
              pagination: _react.default.useRef(),
              prev: _react.default.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => console.log(99, {
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.on('change', onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.off('change', onChange);
            }, []);
            _react.default.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            return {
              refs,
              state,
              prev,
              container
            };
          };
          exports.useSwiperSlider = useSwiperSlider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SwiperSlider",
        "name": "SwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SwiperSlider') && _export("SwiperSlider", SwiperSlider = require ? require('./index').SwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3dpcGVyRm9vdGVyIiwicHJvcHMiLCJmb290ZXIiLCJjb250cm9sbGVyIiwicmVmcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJzd2lwZXIiLCJpc0VuZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmdW5jdGlvbk5leHQiLCJyZWYiLCJwYWdpbmF0aW9uIiwibmV4dCIsIl9pY29ucyIsIl9jb250ZXh0IiwiU3dpcGVyTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwcmV2IiwidXNlU3dpcGVyQ29udGV4dCIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsIlBhZ2luYXRpb24iLCJTd2lwZXJDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvb3RlciIsIl9uYXZpZ2F0aW9uIiwiX3NsaWRlIiwiX3VzZVN3aXBlciIsIl9wYWdpbmF0aW9uIiwiU3dpcGVyU2xpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVN3aXBlclNsaWRlciIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiLCJTbGlkZUl0ZW1zIiwiaXRlbXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInNsaWRlcyIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJTbGlkZSIsImtleSIsIlN3aXBlciIsIl9tb2R1bGVzIiwiX21vZGVsIiwiU3dpcGVyQ2FzdGVkIiwiQ29udHJvbGxlciIsIlJlYWN0aXZlTW9kZWwiLCJvbkVuZCIsInNldFN3aXBlciIsImVsZW1lbnQiLCJzcGVjcyIsInNsaWRlc1BlclZpZXciLCJtb2R1bGVzIiwiTmF2aWdhdGlvbiIsImtleXMiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwid2FybiIsImVsIiwiY3VycmVudCIsImNsaWNrYWJsZSIsInR5cGUiLCJ0eXBlUGFnaW5hdGlvbiIsImR5bmFtaWNCdWxsZXRzIiwibmV4dEVsIiwicHJldkVsIiwiYWN0aXZlU2xpZGUiLCJzbGlkZVRvIiwicGFyc2VJbnQiLCJzbGlkZU5leHQiLCJzbGlkZVByZXYiLCJvbiIsInRyaWdnZXJFdmVudCIsIm9uTmV4dCIsIm9uUHJldiIsIl9jb250cm9sbGVyIiwidXNlUmVmIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwibG9nIiwicmVhZHkiLCJsYXN0SW5kZXgiLCJkZXN0cm95ZWQiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCIvdHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvc3dpcGVyLXByb3BzLnRzIiwiL3RzL3NsaWRlL2luZGV4LnRzeCIsIi90cy9zbGlkZS9zbGlkZS50c3giLCIvdHMvc3RhdGUvY29udHJvbGxlci50cyIsIi9pbnRlcmZhY2UudHMiLCIvdHMvdXNlLXN3aXBlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ00sU0FBVUMsWUFBWUEsQ0FBQ0MsS0FBSztZQUNqQyxNQUFNO2NBQUNDLE1BQU07Y0FBRUMsVUFBVTtjQUFFQztZQUFJLENBQUMsR0FBR0gsS0FBSztZQUN4QyxJQUFJLENBQUNDLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFFeEIsT0FDQ0osTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUFFLFFBQUEsUUFDRSxDQUFDSixVQUFVLEVB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