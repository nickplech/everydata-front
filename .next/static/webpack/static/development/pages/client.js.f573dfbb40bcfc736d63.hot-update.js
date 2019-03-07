webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/TimePicker.js":
/*!**********************************!*\
  !*** ./components/TimePicker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/TimePicker.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyledPicka = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TimePicker__StyledPicka",
  componentId: "sc-67o5tv-0"
})(["position:absolute;margin:0 15px;bottom:15px;left:250px;transform:scale(0.7);"]);

var TimePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));
    _this.state = {
      time: null,
      displayTimepicker: true
    };
    _this.handleTimeChange = _this.handleTimeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimePicker, [{
    key: "handleTimeChange",
    value: function handleTimeChange(newTime) {
      this.setState({
        time: newTime.formatted
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPicka, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.state.displayTimepicker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeKeeper, {
        time: this.state.time,
        onChange: this.handleTimeChange,
        config: {
          TIMEPICKER_BACKGROUND: 'transparent',
          CLOCK_WRAPPER_BACKGROUND: 'rgba(230,230,240,.4)',
          CLOCK_WRAPPER_MERIDIEM_COLOR: '#898989',
          CLOCK_WRAPPER_MERIDIEM_BACKGROUND_COLOR_SELECTED: 'rgba(100,100,240,1)',
          CLOCK_WRAPPER_MERIDIEM_TEXT_COLOR_SELECTED: 'white',
          CLOCK_HAND_ARM: 'rgba(100,100,240,1)',
          CLOCK_HAND_CIRCLE_BACKGROUND: 'rgba(100,100,240,1)',
          CLOCK_NUMBER_COLOR: '#999999',
          TIME_SELECTED_COLOR: 'rgba(100,100,240,1)'
        },
        switchToMinuteOnHourSelect: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }) : false);
    }
  }]);

  return TimePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TimePicker);

/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/create-react-class/index.js":
false,

/***/ "./node_modules/exenv/index.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/emptyObject.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/Prefixer.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/grabCursor.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/position.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/plugins/zoomCursor.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/prefixProps.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/calc.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/cursor.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flex.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxIE.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/flexboxOld.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/gradient.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/position.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/sizing.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/plugins/transition.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixAll.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/static/prefixProps.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/getBrowserInformation.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/getPrefixedKeyframes.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/getPrefixedValue.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedProperty.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/isPrefixedValue.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/joinPrefixedValue.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/sortPrefixedStyle.js":
false,

/***/ "./node_modules/inline-style-prefixer/lib/utils/unprefixProperty.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/radium/lib/append-important-to-each-value.js":
false,

/***/ "./node_modules/radium/lib/append-px-if-needed.js":
false,

/***/ "./node_modules/radium/lib/camel-case-props-to-dash-case.js":
false,

/***/ "./node_modules/radium/lib/components/style-root.js":
false,

/***/ "./node_modules/radium/lib/components/style-sheet.js":
false,

/***/ "./node_modules/radium/lib/components/style.js":
false,

/***/ "./node_modules/radium/lib/css-rule-set-to-string.js":
false,

/***/ "./node_modules/radium/lib/enhancer.js":
false,

/***/ "./node_modules/radium/lib/get-state-key.js":
false,

/***/ "./node_modules/radium/lib/get-state.js":
false,

/***/ "./node_modules/radium/lib/hash.js":
false,

/***/ "./node_modules/radium/lib/index.js":
false,

/***/ "./node_modules/radium/lib/keyframes.js":
false,

/***/ "./node_modules/radium/lib/map-object.js":
false,

/***/ "./node_modules/radium/lib/merge-styles.js":
false,

/***/ "./node_modules/radium/lib/plugins/check-props-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/index.js":
false,

/***/ "./node_modules/radium/lib/plugins/keyframes-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/merge-style-array-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/mouse-up-listener.js":
false,

/***/ "./node_modules/radium/lib/plugins/prefix-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/remove-nested-styles-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/resolve-interaction-styles-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/resolve-media-queries-plugin.js":
false,

/***/ "./node_modules/radium/lib/plugins/visited-plugin.js":
false,

/***/ "./node_modules/radium/lib/prefixer.js":
false,

/***/ "./node_modules/radium/lib/resolve-styles.js":
false,

/***/ "./node_modules/radium/lib/style-keeper.js":
false,

/***/ "./node_modules/raf/index.js":
false,

/***/ "./node_modules/raf/node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/react-motion/lib/Motion.js":
false,

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
false,

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
false,

/***/ "./node_modules/react-motion/lib/mapToZero.js":
false,

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
false,

/***/ "./node_modules/react-motion/lib/presets.js":
false,

/***/ "./node_modules/react-motion/lib/react-motion.js":
false,

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
false,

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
false,

/***/ "./node_modules/react-motion/lib/spring.js":
false,

/***/ "./node_modules/react-motion/lib/stepper.js":
false,

/***/ "./node_modules/react-motion/lib/stripStyle.js":
false,

/***/ "./node_modules/react-timekeeper/lib/components/Clock.js":
false,

/***/ "./node_modules/react-timekeeper/lib/components/ClockWrapper.js":
false,

/***/ "./node_modules/react-timekeeper/lib/components/Time.js":
false,

/***/ "./node_modules/react-timekeeper/lib/components/TimeDropdown.js":
false,

/***/ "./node_modules/react-timekeeper/lib/components/Timepicker.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/animations.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/compose-time.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/config.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/data.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/dom.js":
false,

/***/ "./node_modules/react-timekeeper/lib/helpers/parse-time.js":
false,

/***/ "./node_modules/react-timekeeper/lib/index.js":
false,

/***/ "./node_modules/webpack/buildin/amd-define.js":
false

})
//# sourceMappingURL=client.js.f573dfbb40bcfc736d63.hot-update.js.map