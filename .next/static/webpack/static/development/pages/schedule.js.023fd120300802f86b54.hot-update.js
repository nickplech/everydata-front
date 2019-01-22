webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./components/CalendarDayHour.js":
/*!***************************************!*\
  !*** ./components/CalendarDayHour.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayz */ "./node_modules/dayz/dist/dayz.js");
/* harmony import */ var dayz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CalendarDayHour.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StyledDayz = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CalendarDayHour__StyledDayz",
  componentId: "ntzlwl-0"
})([".dayz{width:100%;height:100%;box-sizing:border-box;display:flex;flex-wrap:nowrap;flex-direction:column;align-items:stretch;}.dayz.x-labels{height:30px;align-items:center;display:flex;flex-direction:row;}.dayz.x-labels.day-label{display:flex;flex-grow:1;flex-basis:1px;padding-left:8px;}.dayz.body{flex-grow:1;display:flex;flex-direction:row;position:relative;}.dayz.body.y-labels{position:absolute;width:100%;height:100%;width:60px;display:flex;flex-direction:column;width:100%;}.dayz.body.y-labels.all-day,.dayz.body.y-labels.hour{width:100%;flex:1;display:flex;justify-content:center;flex-direction:column;text-indent:8px;text-align:left;border-bottom:1px solid #b6b6b6;}.dayz.body.y-labels.all-day{flex-grow:0;}.dayz.body.days{flex:1;display:flex;flex-direction:row;position:relative;box-sizing:border-box;border-top:1px solid #b6b6b6;border-left:1px solid #b6b6b6;}.dayz.day{border-right:1px solid #b6b6b6;border-bottom:1px solid #b6b6b6;box-sizing:border-box;}.dayz.day.event > *{height:100%;}.dayz.day.highlight{background-color:#ececec;}.dayz.month.event.stack-1,.dayz.week.all-day.event.stack-1,.dayz.day.all-day.event.stack-1{margin-top:20px;}.dayz.month.event.stack-2,.dayz.week.all-day.event.stack-2,.dayz.day.all-day.event.stack-2{margin-top:40px;}.dayz.month.event.stack-3,.dayz.week.all-day.event.stack-3,.dayz.day.all-day.event.stack-3{margin-top:60px;}.dayz.month.event.stack-4,.dayz.week.all-day.event.stack-4,.dayz.day.all-day.event.stack-4{margin-top:80px;}.dayz.month.event.stack-5,.dayz.week.all-day.event.stack-5,.dayz.day.all-day.event.stack-5{margin-top:100px;}.dayz.month.event.stack-6,.dayz.week.all-day.event.stack-6,.dayz.day.all-day.event.stack-6{margin-top:120px;}.dayz.month.event.stack-7,.dayz.week.all-day.event.stack-7,.dayz.day.all-day.event.stack-7{margin-top:140px;}.dayz.month.event.stack-8,.dayz.week.all-day.event.stack-8,.dayz.day.all-day.event.stack-8{margin-top:160px;}.dayz.month.event.stack-9,.dayz.week.all-day.event.stack-9,.dayz.day.all-day.event.stack-9{margin-top:180px;}.dayz.week.x-labels,.dayz.day.x-labels{padding-left:60px;}.dayz.week.days,.dayz.day.days{margin-left:60px;}.dayz.week.day,.dayz.day.day{width:100%;display:flex;flex-direction:column;}.dayz.week.day.all-day,.dayz.day.day.all-day{flex:1;flex-grow:0;}.dayz.week.day.all-day.event,.dayz.day.day.all-day.event{height:20px;}.dayz.week.day.events,.dayz.day.day.events{flex:1;position:relative;}.dayz.week.day.events.event.span-1,.dayz.day.day.events.event.span-1{width:100%;position:absolute;}.dayz.week.day.label,.dayz.day.day.label{display:none;}.dayz.week.events.day.event.span-1{width:14.28571%;}.dayz.month.days{display:grid;grid-auto-rows:1fr;grid-template-columns:repeat(7,minmax(4rem,1fr));}.dayz.month.days.day.label{text-align:right;padding:5px;}.dayz.month.days.day.event{height:20px;}.dayz.month.days.day.event.span-1.evbody > div{text-overflow:ellipsis;white-space:nowrap;width:100%;overflow:hidden;}.dayz.month.days.day.outside{background-color:#f2f2f2;}.dayz.event{background:#dddddd;color:#2b2b2b;box-sizing:border-box;position:relative;border:1px solid #b6b6b6;border-radius:4px;}.dayz.event.color-1.evbody{background:#4d4d4d;color:white;}.dayz.event.color-2.evbody{background:#5da5da;color:black;}.dayz.event.color-3.evbody{background:#faa43a;color:white;}.dayz.event.color-4.evbody{background:#60bd68;color:black;}.dayz.event.color-5.evbody{background:#f17cb0;color:black;}.dayz.event.color-6.evbody{background:#b2912f;color:white;}.dayz.event.color-7.evbody{background:#b276b2;color:white;}.dayz.event.color-8.evbody{background:#decf3f;color:black;}.dayz.event.color-9.evbody{background:#f15854;color:white;}.dayz.event.color-10.evbody{background:#f5deb3;color:black;}.dayz.event.span-1{z-index:1;width:calc(100% + 1px -1px);}.dayz.event.span-1.is-continued{width:calc(100% + -11px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-1.is-continuation{width:calc(100% + -11px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-1.is-continued.is-continuation{width:calc(100% + -21px);}.dayz.event.span-2{z-index:1;width:calc(200% + 2px -1px);}.dayz.event.span-2.is-continued{width:calc(200% + -10px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-2.is-continuation{width:calc(200% + -10px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-2.is-continued.is-continuation{width:calc(200% + -20px);}.dayz.event.span-3{z-index:1;width:calc(300% + 3px -1px);}.dayz.event.span-3.is-continued{width:calc(300% + -9px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-3.is-continuation{width:calc(300% + -9px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-3.is-continued.is-continuation{width:calc(300% + -19px);}.dayz.event.span-4{z-index:1;width:calc(400% + 4px -1px);}.dayz.event.span-4.is-continued{width:calc(400% + -8px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-4.is-continuation{width:calc(400% + -8px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-4.is-continued.is-continuation{width:calc(400% + -18px);}.dayz.event.span-5{z-index:1;width:calc(500% + 5px -1px);}.dayz.event.span-5.is-continued{width:calc(500% + -7px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-5.is-continuation{width:calc(500% + -7px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-5.is-continued.is-continuation{width:calc(500% + -17px);}.dayz.event.span-6{z-index:1;width:calc(600% + 6px -1px);}.dayz.event.span-6.is-continued{width:calc(600% + -6px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-6.is-continuation{width:calc(600% + -6px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-6.is-continued.is-continuation{width:calc(600% + -16px);}.dayz.event.span-7{z-index:1;width:calc(700% + 7px -1px);}.dayz.event.span-7.is-continued{width:calc(700% + -5px);border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.span-7.is-continuation{width:calc(700% + -5px);border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.span-7.is-continued.is-continuation{width:calc(700% + -15px);}.dayz.event.is-resizable::before,.dayz.event.is-resizable::after{content:' ';height:3px;border:1px solid black;right:15%;left:15%;display:block;position:absolute;border-radius:5px;visibility:hidden;cursor:ns-resize;}.dayz.event.is-resizable.color-1.evbody:before,.dayz.event.is-resizable.color-1.evbody:after{background-color:#272727;}.dayz.event.is-resizable.color-2.evbody:before,.dayz.event.is-resizable.color-2.evbody:after{background-color:#2c80bf;}.dayz.event.is-resizable.color-3.evbody:before,.dayz.event.is-resizable.color-3.evbody:after{background-color:#e27f06;}.dayz.event.is-resizable.color-4.evbody:before,.dayz.event.is-resizable.color-4.evbody:after{background-color:#3d9345;}.dayz.event.is-resizable.color-5.evbody:before,.dayz.event.is-resizable.color-5.evbody:after{background-color:#ea3786;}.dayz.event.is-resizable.color-6.evbody:before,.dayz.event.is-resizable.color-6.evbody:after{background-color:#75601f;}.dayz.event.is-resizable.color-7.evbody:before,.dayz.event.is-resizable.color-7.evbody:after{background-color:#8d4f8d;}.dayz.event.is-resizable.color-8.evbody:before,.dayz.event.is-resizable.color-8.evbody:after{background-color:#b2a41f;}.dayz.event.is-resizable.color-9.evbody:before,.dayz.event.is-resizable.color-9.evbody:after{background-color:#e61813;}.dayz.event.is-resizable.color-10.evbody:before,.dayz.event.is-resizable.color-10.evbody:after{background-color:#ecc16f;}.dayz.event.is-resizable:before{top:-px;}.dayz.event.is-resizable:after{bottom:-px;}.dayz.event.is-resizable.is-resizing:before,.dayz.event.is-resizable.is-resizing:after,.dayz.event.is-resizable:hover:before,.dayz.event.is-resizable:hover:after{visibility:visible;}.dayz.event.evbody{padding-left:0.4rem;height:100%;overflow:hidden;}.dayz.event.is-continued{border-top-right-radius:0;border-bottom-right-radius:0;}.dayz.event.is-continued::after{content:'';display:block;width:0;height:0;border-style:solid;position:absolute;-moz-transform:scale(0.9999);border-width:10px 0 10px 10px;border-color:transparent transparent transparent #dddddd;right:-0px;top:-px;}.dayz.event.is-continued.color-1::after{border-color:transparent transparent transparent #4d4d4d;}.dayz.event.is-continued.color-2::after{border-color:transparent transparent transparent #5da5da;}.dayz.event.is-continued.color-3::after{border-color:transparent transparent transparent #faa43a;}.dayz.event.is-continued.color-4::after{border-color:transparent transparent transparent #60bd68;}.dayz.event.is-continued.color-5::after{border-color:transparent transparent transparent #f17cb0;}.dayz.event.is-continued.color-6::after{border-color:transparent transparent transparent #b2912f;}.dayz.event.is-continued.color-7::after{border-color:transparent transparent transparent #b276b2;}.dayz.event.is-continued.color-8::after{border-color:transparent transparent transparent #decf3f;}.dayz.event.is-continued.color-9::after{border-color:transparent transparent transparent #f15854;}.dayz.event.is-continued.color-10::after{border-color:transparent transparent transparent #f5deb3;}.dayz.event.is-continuation{margin-left:10px;border-top-left-radius:0;border-bottom-left-radius:0;}.dayz.event.is-continuation::before{content:'';display:block;width:0;height:0;border-style:solid;position:absolute;-moz-transform:scale(0.9999);border-width:10px 10px 10px 0;border-color:transparent #dddddd transparent transparent;left:-0px;bottom:-px;}.dayz.event.is-continuation.color-1::before{border-color:transparent #4d4d4d transparent transparent;}.dayz.event.is-continuation.color-2::before{border-color:transparent #5da5da transparent transparent;}.dayz.event.is-continuation.color-3::before{border-color:transparent #faa43a transparent transparent;}.dayz.event.is-continuation.color-4::before{border-color:transparent #60bd68 transparent transparent;}.dayz.event.is-continuation.color-5::before{border-color:transparent #f17cb0 transparent transparent;}.dayz.event.is-continuation.color-6::before{border-color:transparent #b2912f transparent transparent;}.dayz.event.is-continuation.color-7::before{border-color:transparent #b276b2 transparent transparent;}.dayz.event.is-continuation.color-8::before{border-color:transparent #decf3f transparent transparent;}.dayz.event.is-continuation.color-9::before{border-color:transparent #f15854 transparent transparent;}.dayz.event.is-continuation.color-10::before{border-color:transparent #f5deb3 transparent transparent;}"]); // would come from a network request in a "real" app

var EVENTS = new dayz__WEBPACK_IMPORTED_MODULE_1___default.a.EventsCollection([{
  content: 'A short event',
  range: moment__WEBPACK_IMPORTED_MODULE_3___default.a.range(date.clone(), date.clone().add(1, 'day'))
}, {
  content: 'Two Hours ~ 8-10',
  range: moment__WEBPACK_IMPORTED_MODULE_3___default.a.range(date.clone().hour(8), date.clone().hour(10))
}, {
  content: 'A Longer Event',
  range: moment__WEBPACK_IMPORTED_MODULE_3___default.a.range(date.clone().subtract(2, 'days'), date.clone().add(8, 'days'))
}]);

var CalendarDayHour =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarDayHour, _React$Component);

  function CalendarDayHour() {
    _classCallCheck(this, CalendarDayHour);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarDayHour).apply(this, arguments));
  }

  _createClass(CalendarDayHour, [{
    key: "render",
    value: function render() {
      var date = this.state.date;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDayz, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dayz__WEBPACK_IMPORTED_MODULE_1___default.a, {
        display: "day",
        date: date,
        events: EVENTS,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }));
    }
  }]);

  return CalendarDayHour;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarDayHour);

/***/ }),

/***/ "./components/DayCalendar.js":
/*!***********************************!*\
  !*** ./components/DayCalendar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CalendarDayHour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarDayHour */ "./components/CalendarDayHour.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/DayCalendar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DayView = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DayCalendar__DayView",
  componentId: "sc-190uf98-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:transparent;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DayCalendar__DayGrid",
  componentId: "sc-190uf98-1"
})(["display:grid;grid-template-columns:1fr;width:100%;border:none;height:80vh;overflow-y:scroll;overscroll-behavior:contain;"]);

var DayCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(DayCalendar, _Component);

  function DayCalendar() {
    _classCallCheck(this, DayCalendar);

    return _possibleConstructorReturn(this, _getPrototypeOf(DayCalendar).apply(this, arguments));
  }

  _createClass(DayCalendar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarDayHour__WEBPACK_IMPORTED_MODULE_3__["default"], {
        date: this.state.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })));
    }
  }]);

  return DayCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DayCalendar);

/***/ }),

/***/ "./node_modules/dayz/dist/dayz.js":
/*!****************************************!*\
  !*** ./node_modules/dayz/dist/dayz.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"), __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")) :
  undefined;
}(this, (function (momentRange,ReactDOM,moment,React,PropTypes) { 'use strict';

  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  const moment$1 = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); // an event duration describes how an event is displayed.
  // A event may be split into one or more durations in order to be split across week boundaries


  class EventDuration {
    constructor(layout, event, displayRange) {
      this.layout = layout;
      this.event = event;
      this.stack = 0;
      this.displayRange = displayRange;
      this.startsBefore = event.start.isBefore(displayRange.start);
      this.endsAfter = event.end.isAfter(displayRange.end);

      if (this.layout.isDisplayingAsMonth) {
        this.range = moment$1.range(moment$1.max(displayRange.start, event.start.startOf('day')), moment$1.min(displayRange.end, event.end.endOf('day')));
      } else {
        this.range = moment$1.range(moment$1.max(displayRange.start, event.start), moment$1.min(displayRange.end, event.end));
      }

      this.span = Math.max(1, Math.ceil(this.range.end.diff(this.range.start, 'day', true)));
    }

    isEditing() {
      return this.first && this.event.isEditing();
    }

    startsOnWeek() {
      return 0 === this.event.start.weekday();
    }

    adjustEventTime(startOrEnd, position, height) {
      if (position < 0 || position > height) {
        return;
      }

      const time = this.event[startOrEnd].startOf('day').add(this.layout.displayHours[0], 'hours').add(this.layout.minutesInDay() * (position / height), 'minutes');

      const _this$event$get = this.event.get('resizable'),
            step = _this$event$get.step;

      if (step) {
        const rounded = Math.round(time.minute() / step) * step;
        time.minute(rounded).second(0);
      }

      this.event.emit('change');
    }

    inlineStyles() {
      if ('month' === this.layout.displayingAs() || !this.event.isSingleDay()) {
        return {};
      }

      let _this$event$daysMinut = this.event.daysMinuteRange(),
          start = _this$event$daysMinut.start,
          end = _this$event$daysMinut.end;

      const startOffset = this.layout.displayHours[0] * 60;
      const endOffset = this.layout.displayHours[1] * 60;
      start = Math.max(start - startOffset, 0);
      end = Math.min(end, endOffset) - startOffset;
      const inday = this.layout.minutesInDay();
      const top = `${(start / inday * 100).toFixed(2)}%`;
      const bottom = `${(100 - end / inday * 100).toFixed(2)}%`;
      return {
        top,
        bottom
      };
    }

    isResizable() {
      return this.layout.displayingAs() !== 'month' && this.event.get('resizable');
    }

    key() {
      return this.displayRange.start.format('YYYYMMDD') + this.event.key;
    }

    setIsResizing(val) {
      this.isResizing = val;
    }

    classNames() {
      const classes = ['event', `span-${this.span}`];

      if (this.event.colorIndex) {
        classes.push(`color-${this.event.colorIndex}`);
      }

      if (this.isResizing) classes.push('is-resizing');
      if (this.startsBefore) classes.push('is-continuation');
      if (this.endsAfter) classes.push('is-continued');
      if (this.stack) classes.push(`stack-${this.stack}`);
      if (this.isEditing()) classes.push('is-editing');
      if (this.isResizable()) classes.push('is-resizable');

      if (this.event.className) {
        classes.push(this.event.className);
      }

      return classes.join(' ');
    }

  }

  var C = {
    eventHeight: 20 // px

  };

  const moment$2 = momentRange.extendMoment(moment);

  const Emitter = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");

  let EVENT_COUNTER = 1;
  class Event {
    constructor(attributes) {
      this.attributes = attributes;
      this.isEvent = true;
      EVENT_COUNTER += 1;
      this.key = EVENT_COUNTER;

      if (!this.attributes.range) {
        throw new Error('Must provide range');
      }
    }

    render() {
      if (this.attributes.render) {
        return this.attributes.render({
          event: this
        });
      }

      return this.defaultRenderImplementation();
    }

    defaultRenderImplementation() {
      return React.createElement('div', {}, this.attributes.content || this.attributes.range.start.format('MMM DD YYYY'));
    }

    get(key) {
      return this.attributes[key];
    }

    set(attributes, options) {
      let changed = false;

      for (const key in attributes) {
        // eslint-disable-line no-restricted-syntax
        if (this.attributes[key] !== attributes[key]) {
          changed = true;
          break;
        }
      }

      if (!changed) {
        return;
      }

      Object.assign(this.attributes, attributes);
      this.emitChangeEvent(options);
    }

    isEditing() {
      return !!this.attributes.editing;
    }

    setEditing(isEditing) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (isEditing !== this.isEditing()) {
        this.attributes.editing = isEditing;
      }

      this.emitChangeEvent(options);
    }

    emitChangeEvent() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.collection) {
        this.collection.emit('change', this);
      }

      if (!options || !options.silent) {
        this.emit('change', this);
      }
    }

    range() {
      return this.attributes.range.clone();
    }

    isSingleDay() {
      return 24 > this.attributes.range.end.diff(this.attributes.range.start, 'hours');
    }

    daysMinuteRange() {
      const startOfDay = this.attributes.range.start.clone().startOf('day');
      return {
        start: this.attributes.range.start.diff(startOfDay, 'minute'),
        end: this.attributes.range.end.diff(startOfDay, 'minute')
      };
    }

    get content() {
      return this.attributes.content;
    }

    get start() {
      return this.attributes.range.start;
    }

    get end() {
      return this.attributes.range.end;
    }

    get colorIndex() {
      return this.attributes.colorIndex || 0;
    }

    get className() {
      return this.attributes.className || '';
    }

    remove() {
      this.collection.remove(this);
      this.isDeleted = true;
      this.emit('change');
    }

  }
  Object.assign(Event.prototype, Emitter.prototype);

  const Emitter$1 = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");

  const lc = event => event.attributes.range.start.diff(event.attributes.range.end);

  const sortEvents = (eventA, eventB) => {
    const a = lc(eventA);
    const b = lc(eventB);
    return a < b ? -1 : a > b ? 1 : 0; // eslint-disable-line no-nested-ternary
  };

  class EventsCollection {
    constructor() {
      let events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.events = [];

      for (let i = 0, length = events.length; i < length; i += 1) {
        this.add(events[i], {
          silent: true
        });
      }
    }

    add(eventAttrs) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const event = eventAttrs instanceof Event ? eventAttrs : new Event(eventAttrs);
      event.collection = this;
      this.events.push(event);

      if (!options.silent) {
        this.emit('change');
      }

      return event;
    }

    forEach(fn) {
      this.events.sort(sortEvents).forEach(fn);
    }

    get length() {
      return this.events.length;
    }

    at(i) {
      return this.events[i];
    }

    remove(event) {
      const index = this.events.indexOf(event);

      if (-1 !== index) {
        this.events.splice(index, 1);
        this.emit('change');
      }
    }

  }
  EventsCollection.Event = Event;
  Object.assign(EventsCollection.prototype, Emitter$1.prototype);

  function cacheKey(day) {
    return day.format('YYYYMMDD');
  }

  function highlightedDaysFinder(days) {
    const highlighted = Object.create(null);
    days.forEach(d => {
      highlighted[cacheKey(moment$2(d))] = true;
    });
    return day => highlighted[cacheKey(day)] ? 'highlight' : false;
  } // a layout describes how the calendar is displayed.


  class Layout {
    constructor(options) {
      this.cache = Object.create(null);
      options.date = moment$2(options.date);
      Object.assign(this, options);
      const cacheMethod = 'day' === this.display ? 'addtoDaysCache' : 'calculateDurations';
      this.calculateRange();

      if (!this.isDisplayingAsMonth && !this.displayHours) {
        this.displayHours = this.hourRange();
      } else {
        this.displayHours = this.displayHours || [0, 24];
      }

      if (options.highlightDays) {
        this.isDayHighlighted = 'function' === typeof options.highlightDays ? options.highlightDays : highlightedDaysFinder(options.highlightDays);
      }

      let multiDayCount = 0;

      if (!this.events) {
        this.events = new EventsCollection();
      }

      const range = this.range;
      this.events.forEach(event => {
        // we only care about events that are in the range we were provided
        if (range.overlaps(event.range())) {
          this[cacheMethod](event);

          if (!event.isSingleDay()) {
            multiDayCount += 1;
          }
        }
      });
      this.multiDayCount = multiDayCount;
      this.calculateStacking();
    }

    calculateRange() {
      if (this.range) {
        return;
      }

      this.range = moment$2.range(moment$2(this.date).startOf(this.display), moment$2(this.date).endOf(this.display));

      if (this.isDisplayingAsMonth) {
        this.range.start.subtract(this.range.start.weekday(), 'days');
        this.range.end.add(6 - this.range.end.weekday(), 'days');
      }
    }

    minutesInDay() {
      return (this.displayHours[1] - this.displayHours[0]) * 60;
    }

    propsForDayContainer(_ref) {
      let day = _ref.day,
          position = _ref.position;
      const classes = ['day'];

      if (this.isDateOutsideRange(day)) {
        classes.push('outside');
      }

      const higlight = this.isDayHighlighted(day, this);

      if (higlight) {
        classes.push(higlight);
      }

      const handlers = {};
      Object.keys(this.dayEventHandlers || {}).forEach(k => {
        handlers[k] = ev => this.dayEventHandlers[k](day, ev);
      });
      return _objectSpread({
        className: classes.join(' '),
        'data-date': cacheKey(day),
        style: {
          order: position
        }
      }, handlers);
    }

    propsForAllDayEventContainer() {
      const style = this.multiDayCount ? {
        flexBasis: this.multiDayCount * C.eventHeight
      } : {
        display: 'none'
      };
      return {
        className: 'all-day',
        style
      };
    }

    hourRange() {
      const range = [7, 19];
      Array.from(this.range.by('days')).forEach(day => {
        this.forDay(day).forEach(duration => {
          range[0] = Math.min(duration.event.start.hour(), range[0]);
          range[1] = Math.max(duration.event.end.hour(), range[1]);
        });
      });
      range[1] += 1;
      return range;
    }

    getEventsForWeek(start) {
      const day = start.clone();
      const weeklyEvents = [];

      for (let i = 0; i < 7; i++) {
        const durations = this.forDay(day);

        for (let li = 0, length = durations.length; li < length; li += 1) {
          weeklyEvents.push(durations[li]);
        }

        day.add(1, 'day');
      }

      const minLong = range => moment$2.max(start, range.start).diff(moment$2.min(day, range.end), 'minutes');

      return weeklyEvents.sort((al, bl) => {
        const a = minLong(al.event.range());
        const b = minLong(bl.event.range());
        return a === b ? 0 : a > b ? 1 : -1; // eslint-disable-line no-nested-ternary
      });
    }

    calculateStacking() {
      const firstOfWeek = this.range.start.clone().startOf('week');

      do {
        const weeklyEvents = this.getEventsForWeek(firstOfWeek);

        for (let durationIndex = 0; durationIndex < weeklyEvents.length; durationIndex++) {
          const duration = weeklyEvents[durationIndex]; // loop through each duration that is before this one

          let ceilingIndex = 0;

          for (let pi = durationIndex - 1; pi >= 0; pi--) {
            const prevDuration = weeklyEvents[pi];

            if (prevDuration.range.start.isSame(duration.range.start, 'd')) {
              ceilingIndex = pi + 1;
              break;
            }
          }

          for (let pi = ceilingIndex; pi < durationIndex; pi++) {
            const prevDuration = weeklyEvents[pi];

            if (duration.range.overlaps(prevDuration.range)) {
              duration.stack += 1;
            }
          }
        }

        firstOfWeek.add(7, 'day');
      } while (!firstOfWeek.isAfter(this.range.end));
    } // This is the default implementation.
    // It will be overwritten if highlightDays option is provided


    isDayHighlighted() {
      return false;
    }

    isDateOutsideRange(date) {
      return this.isDisplayingAsMonth && !this.date.isSame(date, 'month');
    }

    forDay(day) {
      return this.cache[cacheKey(day)] || [];
    } // a single day is easy, just add the event to that day


    addtoDaysCache(event) {
      const duration = new EventDuration(this, event, this.range);
      this.addToCache(this.range.start, duration);
    } // other durations must break at week boundaries, with indicators if they were/are continuing


    calculateDurations(event) {
      const end = moment$2.min(this.range.end, event.range().end);
      const start = moment$2.max(this.range.start, event.range().start).clone();

      do {
        const range = moment$2.range(start, start.clone().endOf('week'));
        const duration = new EventDuration(this, event, range);
        this.addToCache(start, duration); // go to first day of next week

        start.add(7 - start.weekday(), 'day');
      } while (!start.isAfter(end));
    }

    addToCache(date, duration) {
      let found = false;

      for (const key in this.cache) {
        // eslint-disable-line no-restricted-syntax
        if (this.cache[key].event === duration.event) {
          found = true;
          break;
        }
      }

      if (!found) {
        duration.first = true; // eslint-disable-line no-param-reassign
      }

      const dayCache = this.cache[cacheKey(date)] || (this.cache[cacheKey(date)] = []);
      dayCache.push(duration);
    }

    displayingAs() {
      return this.display;
    }

    get isDisplayingAsMonth() {
      return 'month' === this.display;
    }

  }

  const IsResizeClass = new RegExp('(\\s|^)event(\\s|$)');
  class Event$1 extends React.Component {
    constructor(props) {
      super(props);
      ['onClick', 'onDoubleClick', 'onDoubleClick', 'onDragStart'].forEach(ev => {
        this[ev] = this[ev].bind(this);
      });
    }

    onClick(ev) {
      if (!this.props.onClick) {
        return;
      }

      this.props.onClick(ev, this.props.duration.event);
      ev.stopPropagation();
    }

    onDoubleClick(ev) {
      if (!this.props.onDoubleClick) {
        return;
      }

      this.props.onDoubleClick(ev, this.props.duration.event);
      ev.stopPropagation();
    }

    onDragStart(ev) {
      if (!IsResizeClass.test(ev.target.className)) {
        return;
      }

      const bounds = ReactDOM.findDOMNode(this.refs.element).getBoundingClientRect();
      let resize;

      if (ev.clientY - bounds.top < 10) {
        resize = {
          type: 'start'
        };
      } else if (bounds.bottom - ev.clientY < 10) {
        resize = {
          type: 'end'
        };
      } else {
        return;
      }

      this.props.onDragStart(resize, this.props.duration);
    }

    render() {
      const body = React.createElement("div", {
        className: "evbody",
        onClick: this.onClick
      }, this.props.duration.event.render());
      const Edit = this.props.editComponent;
      const children = this.props.duration.isEditing() ? React.createElement(Edit, {
        event: this.props.duration.event
      }, body) : body;
      return React.createElement("div", {
        ref: "element",
        onMouseDown: this.onDragStart,
        style: this.props.duration.inlineStyles(),
        className: this.props.duration.classNames()
      }, children);
    }

  }
  Event$1.propTypes = {
    duration: PropTypes.instanceOf(EventDuration),
    editComponent: PropTypes.func,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func
  };

  const Label = (_ref) => {
    let day = _ref.day;
    return React.createElement("div", {
      className: "label"
    }, day.format('D'));
  };

  Label.propTypes = {
    day: PropTypes.object.isRequired
  };

  const IsDayClass = new RegExp('(\\s|^)(events|day|label)(\\s|$)');
  class Day extends React.Component {
    constructor() {
      super();
      this.state = {
        resize: false
      };
      ['onClick', 'onDoubleClick', 'onMouseMove', 'onMouseUp', 'onDragStart'].forEach(ev => {
        this[ev] = this[ev].bind(this);
      });
    }

    get boundingBox() {
      return ReactDOM.findDOMNode(this.refs.events || this.refs.root).getBoundingClientRect();
    }

    onClickHandler(ev, handler) {
      if (!handler || !IsDayClass.test(ev.target.className) || this.lastMouseUp && this.lastMouseUp < new Date().getMilliseconds() + 100) {
        return;
      }

      this.lastMouseUp = 0;
      const bounds = this.boundingBox;
      const perc = Math.max(0.0, (ev.clientY - bounds.top) / ev.target.offsetHeight);
      const hours = this.props.layout.displayHours[0] + this.props.layout.minutesInDay() * perc / 60;
      handler.call(this, ev, this.props.day.clone().startOf('day').add(hours, 'hour'));
    }

    onClick(ev) {
      this.onClickHandler(ev, this.props.handlers.onClick);
    }

    onDoubleClick(ev) {
      this.onClickHandler(ev, this.props.handlers.onDoubleClick);
    }

    onDragStart(resize, eventLayout) {
      eventLayout.setIsResizing(true);
      const bounds = this.boundingBox;
      Object.assign(resize, {
        eventLayout,
        height: bounds.height,
        top: bounds.top
      });
      this.setState({
        resize
      });
    }

    onMouseMove(ev) {
      if (!this.state.resize) {
        return;
      }

      const coord = ev.clientY - this.state.resize.top;
      this.state.resize.eventLayout.adjustEventTime(this.state.resize.type, coord, this.state.resize.height);
      this.forceUpdate();
    }

    onMouseUp(ev) {
      if (!this.state.resize) {
        return;
      }

      this.state.resize.eventLayout.setIsResizing(false);
      setTimeout(() => this.setState({
        resize: false
      }), 1);

      if (this.props.onEventResize) {
        this.props.onEventResize(ev, this.state.resize.eventLayout.event);
      }

      this.lastMouseUp = new Date().getMilliseconds();
    }

    renderEvents() {
      const asMonth = this.props.layout.isDisplayingAsMonth;
      const singleDayEvents = [];
      const allDayEvents = [];
      const onMouseMove = asMonth ? null : this.onMouseMove;
      this.props.layout.forDay(this.props.day).forEach(duration => {
        const event = React.createElement(Event$1, {
          duration: duration,
          key: duration.key(),
          day: this.props.day,
          parent: this,
          onDragStart: this.onDragStart,
          onClick: this.props.onEventClick,
          editComponent: this.props.editComponent,
          onDoubleClick: this.props.onEventDoubleClick
        });
        (duration.event.isSingleDay() ? singleDayEvents : allDayEvents).push(event);
      });
      const events = [];

      if (allDayEvents.length || !asMonth) {
        events.push(React.createElement("div", _extends({
          key: "allday"
        }, this.props.layout.propsForAllDayEventContainer()), allDayEvents));
      }

      if (singleDayEvents.length) {
        events.push(React.createElement("div", {
          key: "events",
          ref: "events",
          className: "events",
          onMouseMove: onMouseMove,
          onMouseUp: this.onMouseUp
        }, singleDayEvents));
      }

      return events;
    }

    render() {
      const props = this.props.layout.propsForDayContainer(this.props);
      return React.createElement("div", _extends({
        ref: "root"
      }, props, {
        onClick: this.onClick,
        onDoubleClick: this.onDoubleClick
      }), React.createElement(Label, {
        day: this.props.day,
        className: "label"
      }, this.props.day.format('D')), this.renderEvents());
    }

  }
  Day.propTypes = {
    day: PropTypes.object.isRequired,
    layout: PropTypes.instanceOf(Layout).isRequired,
    handlers: PropTypes.object,
    position: PropTypes.number.isRequired,
    highlight: PropTypes.func,
    onEventClick: PropTypes.func,
    onEventResize: PropTypes.func,
    editComponent: PropTypes.func,
    onEventDoubleClick: PropTypes.func
  };
  Day.defaultProps = {
    handlers: {}
  };

  class XLabels extends React.Component {
    get days() {
      const days = [];

      if ('day' === this.props.display) {
        days.push(moment(this.props.date));
      } else {
        const day = moment(this.props.date).startOf('week');

        for (let i = 0; i < 7; i += 1) {
          days.push(day.clone().add(i, 'day'));
        }
      }

      return days;
    }

    render() {
      const format = 'month' === this.props.display ? 'dddd' : 'ddd, MMM Do';
      return React.createElement("div", {
        className: "x-labels"
      }, this.days.map(day => React.createElement("div", {
        key: day.format('YYYYMMDD'),
        className: "day-label"
      }, day.format(format))));
    }

  }
  XLabels.propTypes = {
    display: PropTypes.oneOf(['month', 'week', 'day']),
    date: PropTypes.object.isRequired
  };

  class YLabels extends React.Component {
    get hours() {
      const _this$props$layout$di = _slicedToArray(this.props.layout.displayHours, 2),
            start = _this$props$layout$di[0],
            end = _this$props$layout$di[1];

      return Array(end - start).fill().map((_, i) => i + start);
    }

    renderLabels() {
      const day = moment$2();
      return this.hours.map(hour => React.createElement("div", {
        key: hour,
        className: "hour"
      }, day.hour(hour).format(this.props.timeFormat)));
    }

    render() {
      if ('month' === this.props.display) {
        return null;
      }

      return React.createElement("div", null, React.createElement("div", {
        className: "y-labels"
      }, React.createElement("div", this.props.layout.propsForAllDayEventContainer(), "All Day"), this.renderLabels()));
    }

  }
  YLabels.propTypes = {
    display: PropTypes.oneOf(['month', 'week', 'day']).isRequired,
    date: PropTypes.object.isRequired,
    layout: PropTypes.instanceOf(Layout).isRequired,
    timeFormat: PropTypes.string
  };
  YLabels.defaultProps = {
    timeFormat: 'ha'
  };

  class Dayz extends React.Component {
    constructor(props) {
      super(props);
      this.layoutFromProps();
    }

    componentDidUpdate(prevProps) {
      // don't calculate layout if update is due to state change
      if (prevProps !== this.props) {
        this.layoutFromProps();
        this.forceUpdate();
      }
    }

    componentWillUnmount() {
      this.detachEventBindings();
    }

    detachEventBindings() {
      if (this.props.events) {
        this.props.events.off('change', this.onEventAdd);
      }
    }

    onEventsChange() {
      this.forceUpdate();
    }

    layoutFromProps() {
      const props = this.props;

      if (this.props && props.events) {
        this.detachEventBindings();
        props.events.on('change', this.onEventsChange, this);
      }

      this.layout = new Layout(Object.assign({}, props));
    }

    get days() {
      return Array.from(this.layout.range.by('days'));
    }

    renderDays() {
      return this.days.map((day, index) => React.createElement(Day, {
        key: day.format('YYYYMMDD'),
        day: day,
        position: index,
        layout: this.layout,
        editComponent: this.props.editComponent,
        handlers: this.props.dayEventHandlers,
        eventHandlers: this.props.eventHandlers,
        onEventClick: this.props.onEventClick,
        onEventResize: this.props.onEventResize
      }));
    }

    render() {
      const classes = ['dayz', this.props.display];
      return React.createElement("div", {
        className: classes.join(' ')
      }, React.createElement(XLabels, {
        date: this.props.date,
        display: this.props.display
      }), React.createElement("div", {
        className: "body"
      }, React.createElement(YLabels, {
        layout: this.layout,
        display: this.props.display,
        date: this.props.date,
        timeFormat: this.props.timeFormat
      }), React.createElement("div", {
        className: "days"
      }, this.renderDays(), this.props.children)));
    }

  }
  Dayz.EventsCollection = EventsCollection;
  Dayz.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.instanceOf(EventsCollection),
    display: PropTypes.oneOf(['month', 'week', 'day']),
    timeFormat: PropTypes.string,
    displayHours: PropTypes.array,
    onEventClick: PropTypes.func,
    editComponent: PropTypes.func,
    onEventResize: PropTypes.func,
    dayEventHandlers: PropTypes.object,
    highlightDays: PropTypes.oneOfType([PropTypes.array, PropTypes.func])
  };
  Dayz.defaultProps = {
    display: 'month'
  };

  return Dayz;

})));


/***/ }),

/***/ "./node_modules/moment-range/dist/moment-range.js":
/*!********************************************************!*\
  !*** ./node_modules/moment-range/dist/moment-range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js")):undefined}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";var r=n(5)();t.exports=function(t){return t!==r&&null!==t}},function(t,e,n){"use strict";t.exports=n(18)()?Symbol:n(20)},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){return t.range=function(e,n){var r=this;return"string"==typeof e&&y.hasOwnProperty(e)?new h(t(r).startOf(e),t(r).endOf(e)):new h(e,n)},t.rangeFromInterval=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t();if(t.isMoment(r)||(r=t(r)),!r.isValid())throw new Error("Invalid date.");var o=r.clone().add(n,e),i=[];return i.push(t.min(r,o)),i.push(t.max(r,o)),new h(i)},t.rangeFromISOString=function(e){var n=a(e),r=t.parseZone(n[0]),o=t.parseZone(n[1]);return new h(r,o)},t.parseZoneRange=t.rangeFromISOString,t.fn.range=t.range,t.range.constructor=h,t.isRange=function(t){return t instanceof h},t.fn.within=function(t){return t.contains(this.toDate())},t}function a(t){return t.split("/")}Object.defineProperty(e,"__esModule",{value:!0}),e.DateRange=void 0;var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.extendMoment=u;var l=n(2),v=r(l),d=n(1),p=r(d),y={year:!0,quarter:!0,month:!0,week:!0,day:!0,hour:!0,minute:!0,second:!0},h=e.DateRange=function(){function t(e,n){i(this,t);var r=e,o=n;if(1===arguments.length||void 0===n)if("object"===(void 0===e?"undefined":c(e))&&2===e.length){var u=s(e,2);r=u[0],o=u[1]}else if("string"==typeof e){var f=a(e),l=s(f,2);r=l[0],o=l[1]}this.start=r||0===r?(0,v.default)(r):(0,v.default)(-864e13),this.end=o||0===o?(0,v.default)(o):(0,v.default)(864e13)}return f(t,[{key:"adjacent",value:function(t){var e=this.start.isSame(t.end),n=this.end.isSame(t.start);return e&&t.start.valueOf()<=this.start.valueOf()||n&&t.end.valueOf()>=this.end.valueOf()}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{adjacent:!1};return this.overlaps(t,e)?new this.constructor(v.default.min(this.start,t.start),v.default.max(this.end,t.end)):null}},{key:"by",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeEnd:!1,step:1},n=this;return o({},p.default.iterator,function(){var r=e.step||1,o=Math.abs(n.start.diff(n.end,t))/r,i=e.excludeEnd||!1,u=0;return e.hasOwnProperty("exclusive")&&(i=e.exclusive),{next:function(){var e=n.start.clone().add(u*r,t),a=i?!(u<o):!(u<=o);return u++,{done:a,value:a?void 0:e}}}})}},{key:"byRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeEnd:!1,step:1},n=this,r=e.step||1,i=this.valueOf()/t.valueOf()/r,u=Math.floor(i),a=e.excludeEnd||!1,s=0;return e.hasOwnProperty("exclusive")&&(a=e.exclusive),o({},p.default.iterator,function(){return u===1/0?{done:!0}:{next:function(){var e=(0,v.default)(n.start.valueOf()+t.valueOf()*s*r),o=u===i&&a?!(s<u):!(s<=u);return s++,{done:o,value:o?void 0:e}}}})}},{key:"center",value:function(){var t=this.start.valueOf()+this.diff()/2;return(0,v.default)(t)}},{key:"clone",value:function(){return new this.constructor(this.start.clone(),this.end.clone())}},{key:"contains",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,excludeEnd:!1},r=this.start.valueOf(),o=this.end.valueOf(),i=e.valueOf(),u=e.valueOf(),a=n.excludeStart||!1,s=n.excludeEnd||!1;n.hasOwnProperty("exclusive")&&(a=s=n.exclusive),e instanceof t&&(i=e.start.valueOf(),u=e.end.valueOf());var c=r<i||r<=i&&!a,f=o>u||o>=u&&!s;return c&&f}},{key:"diff",value:function(t,e){return this.end.diff(this.start,t,e)}},{key:"duration",value:function(t,e){return this.diff(t,e)}},{key:"intersect",value:function(t){var e=this.start.valueOf(),n=this.end.valueOf(),r=t.start.valueOf(),o=t.end.valueOf(),i=e==n,u=r==o;if(i){var a=e;if(a==r||a==o)return null;if(a>r&&a<o)return this.clone()}else if(u){var s=r;if(s==e||s==n)return null;if(s>e&&s<n)return new this.constructor(s,s)}return e<=r&&r<n&&n<o?new this.constructor(r,n):r<e&&e<o&&o<=n?new this.constructor(e,o):r<e&&e<=n&&n<o?this.clone():e<=r&&r<=o&&o<=n?new this.constructor(r,o):null}},{key:"isEqual",value:function(t){return this.start.isSame(t.start)&&this.end.isSame(t.end)}},{key:"isSame",value:function(t){return this.isEqual(t)}},{key:"overlaps",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{adjacent:!1},n=null!==this.intersect(t);return e.adjacent&&!n?this.adjacent(t):n}},{key:"reverseBy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,step:1},n=this;return o({},p.default.iterator,function(){var r=e.step||1,o=Math.abs(n.start.diff(n.end,t))/r,i=e.excludeStart||!1,u=0;return e.hasOwnProperty("exclusive")&&(i=e.exclusive),{next:function(){var e=n.end.clone().subtract(u*r,t),a=i?!(u<o):!(u<=o);return u++,{done:a,value:a?void 0:e}}}})}},{key:"reverseByRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{excludeStart:!1,step:1},n=this,r=e.step||1,i=this.valueOf()/t.valueOf()/r,u=Math.floor(i),a=e.excludeStart||!1,s=0;return e.hasOwnProperty("exclusive")&&(a=e.exclusive),o({},p.default.iterator,function(){return u===1/0?{done:!0}:{next:function(){var e=(0,v.default)(n.end.valueOf()-t.valueOf()*s*r),o=u===i&&a?!(s<u):!(s<=u);return s++,{done:o,value:o?void 0:e}}}})}},{key:"snapTo",value:function(t){var e=this.clone();return e.start.isSame((0,v.default)(-864e13))||(e.start=e.start.startOf(t)),e.end.isSame((0,v.default)(864e13))||(e.end=e.end.endOf(t)),e}},{key:"subtract",value:function(t){var e=this.start.valueOf(),n=this.end.valueOf(),r=t.start.valueOf(),o=t.end.valueOf();return null===this.intersect(t)?[this]:r<=e&&e<n&&n<=o?[]:r<=e&&e<o&&o<n?[new this.constructor(o,n)]:e<r&&r<n&&n<=o?[new this.constructor(e,r)]:e<r&&r<o&&o<n?[new this.constructor(e,r),new this.constructor(o,n)]:e<r&&r<n&&o<n?[new this.constructor(e,r),new this.constructor(r,n)]:[]}},{key:"toDate",value:function(){return[this.start.toDate(),this.end.toDate()]}},{key:"toString",value:function(){return this.start.format()+"/"+this.end.format()}},{key:"valueOf",value:function(){return this.end.valueOf()-this.start.valueOf()}}]),t}()},function(t,e,n){"use strict";var r,o=n(6),i=n(13),u=n(9),a=n(15);r=t.exports=function(t,e){var n,r,u,s,c;return arguments.length<2||"string"!=typeof t?(s=e,e=t,t=null):s=arguments[2],null==t?(n=u=!0,r=!1):(n=a.call(t,"c"),r=a.call(t,"e"),u=a.call(t,"w")),c={value:e,configurable:n,enumerable:r,writable:u},s?o(i(s),c):c},r.gs=function(t,e,n){var r,s,c,f;return"string"!=typeof t?(c=n,n=e,e=t,t=null):c=arguments[3],null==e?e=void 0:u(e)?null==n?n=void 0:u(n)||(c=n,n=void 0):(c=e,e=n=void 0),null==t?(r=!0,s=!1):(r=a.call(t,"c"),s=a.call(t,"e")),f={get:e,set:n,configurable:r,enumerable:s},c?o(i(c),f):f}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";t.exports=n(7)()?Object.assign:n(8)},function(t,e,n){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var r=n(10),o=n(14),i=Math.max;t.exports=function(t,e){var n,u,a,s=i(arguments.length,2);for(t=Object(o(t)),a=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},u=1;u<s;++u)e=arguments[u],r(e).forEach(a);if(void 0!==n)throw n;return t}},function(t,e,n){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,n){"use strict";t.exports=n(11)()?Object.keys:n(12)},function(t,e,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,n){"use strict";var r=n(0),o=Object.keys;t.exports=function(t){return o(r(t)?Object(t):t)}},function(t,e,n){"use strict";var r=n(0),o=Array.prototype.forEach,i=Object.create,u=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=i(null);return o.call(arguments,function(t){r(t)&&u(Object(t),e)}),e}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){if(!r(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";t.exports=n(16)()?String.prototype.contains:n(17)},function(t,e,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(!0===r.contains("dwa")&&!1===r.contains("foo"))}},function(t,e,n){"use strict";var r=String.prototype.indexOf;t.exports=function(t){return r.call(this,t,arguments[1])>-1}},function(t,e,n){"use strict";var r={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!r[typeof Symbol.iterator]&&(!!r[typeof Symbol.toPrimitive]&&!!r[typeof Symbol.toStringTag])}},function(t,e,n){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,n){"use strict";var r,o,i,u,a=n(4),s=n(21),c=Object.create,f=Object.defineProperties,l=Object.defineProperty,v=Object.prototype,d=c(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),u=!0}catch(t){}}var p=function(){var t=c(null);return function(e){for(var n,r,o=0;t[e+(o||"")];)++o;return e+=o||"",t[e]=!0,n="@@"+e,l(v,n,a.gs(null,function(t){r||(r=!0,l(this,n,a(t)),r=!1)})),n}}();i=function(t){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var n;if(this instanceof t)throw new TypeError("Symbol is not a constructor");return u?r(e):(n=c(i.prototype),e=void 0===e?"":String(e),f(n,{__description__:a("",e),__name__:a("",p(e))}))},f(o,{for:a(function(t){return d[t]?d[t]:d[t]=o(String(t))}),keyFor:a(function(t){var e;s(t);for(e in d)if(d[e]===t)return e}),hasInstance:a("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:a("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:a("",r&&r.iterator||o("iterator")),match:a("",r&&r.match||o("match")),replace:a("",r&&r.replace||o("replace")),search:a("",r&&r.search||o("search")),species:a("",r&&r.species||o("species")),split:a("",r&&r.split||o("split")),toPrimitive:a("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:a("",r&&r.toStringTag||o("toStringTag")),unscopables:a("",r&&r.unscopables||o("unscopables"))}),f(i.prototype,{constructor:a(o),toString:a("",function(){return this.__name__})}),f(o.prototype,{toString:a(function(){return"Symbol ("+s(this).__description__+")"}),valueOf:a(function(){return s(this)})}),l(o.prototype,o.toPrimitive,a("",function(){var t=s(this);return"symbol"==typeof t?t:t.toString()})),l(o.prototype,o.toStringTag,a("c","Symbol")),l(i.prototype,o.toStringTag,a("c",o.prototype[o.toStringTag])),l(i.prototype,o.toPrimitive,a("c",o.prototype[o.toPrimitive]))},function(t,e,n){"use strict";var r=n(19);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a symbol");return t}}])});
//# sourceMappingURL=moment-range.js.map

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ })

})
//# sourceMappingURL=schedule.js.023fd120300802f86b54.hot-update.js.map