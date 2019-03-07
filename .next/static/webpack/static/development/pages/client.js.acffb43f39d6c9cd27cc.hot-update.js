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
/* harmony import */ var react_timekeeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-timekeeper */ "./node_modules/react-timekeeper/lib/index.js");
/* harmony import */ var react_timekeeper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_timekeeper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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




var StyledPicka = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
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
      }, this.state.displayTimepicker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timekeeper__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ })

})
//# sourceMappingURL=client.js.acffb43f39d6c9cd27cc.hot-update.js.map