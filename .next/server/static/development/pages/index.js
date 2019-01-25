module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Boxes.js":
/*!*****************************!*\
  !*** ./components/Boxes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Boxes.js";



var StyledBoxes = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Boxes__StyledBoxes",
  componentId: "f3id5x-0"
})(["display:flex;justify-content:center;align-items:center;height:130vh;width:100vw;.c-hero-flex__item{flex-grow:1;background:#ccc;display:flex;align-items:center;justify-content:center;background-size:cover;box-shadow:inset 0 0 0 100vmax rgba(0,0,0,0.3);transition:0.2s all;&:hover{flex-grow:2;box-shadow:inset 0 0 0 100vmax rgba(20,0,100,0.5);}&:nth-child(3){background:url('../static/img/doc.jpg') no-repeat center center;text-decoration:none;}&:nth-child(2){background:url('../static/img/fitness-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(1){background:url('../static/img/spa-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(4){background:url('../static/img/realestate.jpg') no-repeat center center;text-decoration:none;}}.c-hero-flex__title{text-transform:uppercase;letter-spacing:0.075em;color:rgb(255,255,255);transition:0.2s all;font-size:18px;opacity:0.8;background-color:transparent;border:2px solid white;border-radius:0px;margin:0;font-family:'Montserrat',sans-serif;font-weight:200;padding-left:10px;padding-right:10px;}@media (min-width:960px){display:flex;justify-content:center;align-items:center;height:400px;}@media (max-width:960px){flex-flow:column nowrap;.c-hero-flex__item{width:100%;}}@media (min-width:961px){.c-hero-flex__item{height:100%;text-decoration:none;}}"]);

var Boxes = function Boxes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/spa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Spa & Beauty"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/fitness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Fitness Instruction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/medical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Health Care"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/realestate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Real Estate"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Boxes);

/***/ }),

/***/ "./components/CalendarStats.js":
/*!*************************************!*\
  !*** ./components/CalendarStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "react-calendar/dist/entry.nostyle");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CalendarStats.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // const SINGLE_DAY_MUTATION = gql`
//   mutation SINGLE_DAY_MUTATION($day: DateTime!) {
//     changeDay(day: $day) {
//       date
//     }
//   }
// `

var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "CalendarStats__StatsDisplay",
  componentId: "sc-3vgek8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);width:100%;height:100%;border:5px solid white;border-radius:25px 25px 25px 25px;box-shadow:1px 1px 2px 3px rgba(0,0,0,0.05);.react-calendar{width:365px;border-radius:15px;max-width:100%;box-shadow:0px 1px 1px 1px rgba(20,20,20,0.1);max-height:300px;background:white;border:1px solid rgba(20,20,20,0.1);font-family:Arial,Helvetica,sans-serif;line-height:1.125em;}.react-calendar,.react-calendar *,.react-calendar *:before,.react-calendar *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.react-calendar button{margin:0;border:0;outline:none;}.react-calendar button:enabled:hover{cursor:pointer;}.react-calendar__navigation{height:60px;margin-bottom:0.5em;}.react-calendar__navigation button{min-width:44px;background:none;font-size:20px;background-color:rgba(100,100,240,1);border-radius:15px 15px 0 0;color:white;&:first-child{border-radius:15px 0 0 0;}&:last-child{border-radius:0 15px 0 0;}&:nth-child(2){border-radius:0;}&:nth-child(3){border-radius:0;}&:nth-child(4){border-radius:0;}}.react-calendar__navigation button:enabled:hover,.react-calendar__navigation button:enabled:focus{background-color:#e6e6e6;}.react-calendar__navigation button[disabled]{background-color:rgba(100,100,240,0.1);}.react-calendar__month-view__weekdays{text-align:center;text-transform:uppercase;font-weight:bold;font-size:0.75em;}.react-calendar__month-view__weekdays__weekday{padding:2em 0;}.react-calendar__month-view__weekNumbers{font-weight:bold;}.react-calendar__month-view__weekNumbers .react-calendar__tile{display:flex;align-items:center;justify-content:center;font-size:0.75em;padding:calc(0.75em / 0.75) calc(0.5em / 0.75);}.react-calendar__month-view__days__day--weekend{color:red;}.react-calendar__month-view__days__day--neighboringMonth{color:#969696;}.react-calendar__year-view .react-calendar__tile,.react-calendar__decade-view .react-calendar__tile,.react-calendar__century-view .react-calendar__tile{padding:2em 0.5em;}.react-calendar__tile{max-width:100%;text-align:center;padding:0.75em 0.5em;background:none;}.react-calendar__tile:disabled{background-color:#f0f0f0;}.react-calendar__tile:enabled:hover,.react-calendar__tile:enabled:focus{background-color:#e6e6e6;}.react-calendar__tile--hasActive{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--hasActive:enabled:hover,.react-calendar__tile--hasActive:enabled:focus{background:#a9d4ff;}.react-calendar__tile--active{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--active:enabled:hover,.react-calendar__tile--active:enabled:focus{background:#1087ff;}.react-calendar--selectRange .react-calendar__tile--hover{background-color:rgba(100,100,240,1);color:white;}"]);

var CalendarStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarStats, _React$Component);

  function CalendarStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      date: new Date()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (date) {
      return _this.setState({
        date: date
      });
    });

    return _this;
  }

  _createClass(CalendarStats, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "date",
        onChange: this.onChange,
        minDetail: "decade",
        value: this.state.date,
        calendarType: "US",
        returnValue: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleDay__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: this.state.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }));
    }
  }]);

  return CalendarStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarStats);

/***/ }),

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CallToAction.js";


var GradientDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CallToAction__GradientDiv",
  componentId: "sc-1eyjrc-0"
})(["display:flex;background-color:#33c5ff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%2333c5ff'/%3E%3Cstop offset='1' stop-color='%231cffe8'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2331ccff'/%3E%3Cstop offset='1' stop-color='%2312f5fc'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%232fd2ff'/%3E%3Cstop offset='1' stop-color='%2308d3f8'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%232dd9ff'/%3E%3Cstop offset='1' stop-color='%230aaaea'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%232be0ff'/%3E%3Cstop offset='1' stop-color='%230c85db'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%2329e8ff'/%3E%3Cstop offset='1' stop-color='%230e64cb'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%2326efff'/%3E%3Cstop offset='1' stop-color='%231048bc'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%2324f6ff'/%3E%3Cstop offset='1' stop-color='%231230ae'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2322feff'/%3E%3Cstop offset='1' stop-color='%23131ca0'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2320fff8'/%3E%3Cstop offset='1' stop-color='%231c1392'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%231efff0'/%3E%3Cstop offset='1' stop-color='%232a1484'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%231cffe8'/%3E%3Cstop offset='1' stop-color='%23341477'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E\");background-size:cover;background-position:center;justify-content:center;align-items:center;height:200px;"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CallToAction__StyledButton",
  componentId: "sc-1eyjrc-1"
})(["display:flex;padding:20px 0px;align-items:center;justify-content:center;background:white;color:gray;border:none;border-radius:40px;width:250px;text-transform:uppercase;font-size:16px;box-shadow:2px 3px 2px 2px rgba(0,0,0,0.2);cursor:pointer;&:active{outline:none;box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);}&:focus{outline:none;}"]);

var CallToAction = function CallToAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GradientDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Start Your Free Trial"));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/DoDisplay.js":
/*!*********************************!*\
  !*** ./components/DoDisplay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage */ "./components/HomePage.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/DoDisplay.js";





var DoDisplay = function DoDisplay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DoDisplay);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/FooterStyles */ "./components/styles/FooterStyles.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Footer.js";




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Privacy Policy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/terms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Terms of Use"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Copyright \xA9 Perfect Day Reminders LLC 2016-2018")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Hero.js";


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-1vorxnl-0"
})(["position:relative;overflow-x:hidden;"]);
var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__StyledHero",
  componentId: "sc-1vorxnl-1"
})(["display:grid;grid-template-columns:1fr 1fr;height:800px;width:100%;background-image:linear-gradient( 180deg,rgb(255,255,255),rgb(245,245,250) );background:linear-gradient(180deg,#fff,#f4f3fa);overflow-x:hidden;z-index:0;&:after{top:-121px;display:block;position:absolute;content:'';left:-50px;right:-50px;height:700px;-webkit-transform:rotateZ(-5.4deg);transform:rotateZ(-5.4deg);z-index:0;margin:0;padding:0;overflow:hidden;background:linear-gradient( 270deg,rgba(37,222,162,1),#27aee1,#0f7ffeff );z-index:0;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Left",
  componentId: "sc-1vorxnl-2"
})(["font-family:'Montserrat',sans-serif;z-index:5;margin-top:300px;.confirmation{color:white;}p{position:relative;margin:0;display:block;max-width:700px;z-index:5;color:white;font-size:1.5rem;padding-left:20%;}.title{position:relative;display:block;margin-bottom:0px;color:white;font-weight:600;padding-left:20%;line-height:2.8rem;font-size:2.7rem;}"]);
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__Screen",
  componentId: "sc-1vorxnl-3"
})(["position:relative;display:block;top:75px;height:660px;width:auto;z-index:3;"]);
var HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Hero__HeroButton",
  componentId: "sc-1vorxnl-4"
})(["display:inline-block;background:transparent;border:2px solid white;margin-left:20%;padding:8px 12px;margin-top:15px;color:white;border-radius:5px;font-size:18px;cursor:pointer;&:hover{border-color:yellow;color:yellow;}"]);
var SecondButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Hero__SecondButton",
  componentId: "sc-1vorxnl-5"
})(["display:inline-block;background:rgba(100,100,220,1);border:3px solid rgba(100,100,220,1);margin-left:25px;padding:8px 12px;margin-top:15px;color:white;border-radius:5px;font-size:18px;cursor:pointer;&:hover{border-color:yellow;color:yellow;}"]);

var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Confidence Through ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "confirmation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Confirmation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Effortlessly reduce \"No-Shows\" & improve daily work flow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Start Your Free Trial"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Start Your Free Trial")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screen, {
    src: "../static/img/placeit.png",
    alt: "perfect day reminders screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/HomePage.js":
/*!********************************!*\
  !*** ./components/HomePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero */ "./components/Hero.js");
/* harmony import */ var _PhoneDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneDisplay */ "./components/PhoneDisplay.js");
/* harmony import */ var _Boxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Boxes */ "./components/Boxes.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info */ "./components/Info.js");
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _IconMorph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconMorph */ "./components/IconMorph.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/HomePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconMorph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Boxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CallToAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/IconMorph.js":
/*!*********************************!*\
  !*** ./components/IconMorph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "popmotion");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(popmotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flubber */ "flubber");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flubber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/IconMorph.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledBody = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "IconMorph__StyledBody",
  componentId: "llhb40-0"
})(["height:30vh;padding-bottom:100px;padding-top:50px;flex-flow:column;justify-content:stretch;align-items:center;display:flex;background:#f4f3fa;svg{margin-left:20px;}.lead{font-family:'Montserrat',sans-serif;font-size:2.2rem;line-height:3.2rem;max-width:900px;text-align:center;font-weight:200;margin-top:0;}button{display:flex;border:none;text-align:center;width:auto;overflow:visible;background:transparent;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;outline:none;color:white;padding:15px 20px;cursor:pointer;color:rgb(70,200,120);font-size:3.5rem;font-family:'Montserrat',sans-serif;font-weight:200;}"]);
var paths = {
  bell: 'M50.74,135.05a101.47,101.47,0,0,1,68.16-95.89,33.82,33.82,0,1,1,66.8,0,101.47,101.47,0,0,1,68,95.89V236.53l50.74,33.82v16.91H0V270.35l50.74-33.82ZM186,304.18a33.82,33.82,0,0,1-67.65,0Z',
  plane: 'M187.57,0C291.16,0,375.13,67.75,375.13,151.32c0,33.35-13.41,64.17-36.07,89.17l34.85,86.65L226.21,297.46c-15.43.42-32.72,4.16-50,4.61-2,.05-3.92.08-5.86.08C69.88,302.15,0,233.3,0,151.32,0,67.75,84,0,187.57,0',
  heart: 'M313.31,0a34.81,34.81,0,0,1,34.81,34.81V243.69a34.81,34.81,0,0,1-34.81,34.81H34.81A34.81,34.81,0,0,1,0,243.69V34.81A34.91,34.91,0,0,1,34.81,0ZM237.25,158.4l110.88,85.29V208.88L259,141l89.12-71.37V34.81L174.06,174.06,0,34.81V69.63L89.12,141,0,208.88v34.81L110.88,158.4l63.18,50.48Z'
};
var text = {
  first: 'Refreshingly Simple Text Message Appointment Reminders',
  second: 'Calendar',
  third: 'Perfect Collection of business tools to help you grow'
};
var pathIds = Object.keys(paths);

var morphTransition = function morphTransition(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["tween"])({
    from: 0,
    to: 1
  }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(from, to));
};

var Icon = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.path(pathIds.reduce(function (config, id) {
  config[id] = {
    d: paths[id],
    transition: morphTransition
  };
  return config;
}, {}));
var NextButton = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.button({
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.9
  }
});

var IconMorph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconMorph, _React$Component);

  function IconMorph() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconMorph);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconMorph)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pathIndex: 0,
      buttonText: text.first
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gotoNext", function () {
      var pathIndex = _this.state.pathIndex;
      var nextIndex = pathIndex + 1;

      _this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
      });
    });

    return _this;
  }

  _createClass(IconMorph, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "60",
        height: "60",
        viewBox: "0 0 375.13 327.15",
        fill: "rgba(70, 200, 150,.9)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        pose: pathIds[this.state.pathIndex],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextButton, {
        onClick: this.gotoNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, this.state.buttonText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Take control of your business' schedule and communicate with your clients in the most ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "relevant"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "effective"), " way possible."));
    }
  }]);

  return IconMorph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IconMorph);

/***/ }),

/***/ "./components/Info.js":
/*!****************************!*\
  !*** ./components/Info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Info.js";


var SectionWhite = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Info__SectionWhite",
  componentId: "io375g-0"
})(["min-height:400px;background:white;width:100%;"]);

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWhite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Phone.js":
/*!*****************************!*\
  !*** ./components/Phone.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Phone.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MainPhone = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Phone__MainPhone",
  componentId: "v8wj01-0"
})([".main-phone{display:grid;grid-template-columns:1fr;grid-template-rows:190px 125px 45px 1fr;background-image:url('../static/img/bg-phone2.png');bottom:0%;width:425px;min-height:550px;z-index:4;background-repeat:no-repeat;background-size:cover;background-position:center top;padding-left:35px;margin:0 auto;}.med-text1{grid-row:2/3;height:auto;width:270px;top:35%;left:35px;z-index:5;}.med-text2{margin-left:245px;grid-row:3/4;height:auto;width:110px;top:97%;left:283px;z-index:5;}.med-text3{grid-row:4/5;height:auto;width:270px;top:66%;left:35px;z-index:5;}"]);
var PhoneSlide = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  exit: {
    y: '0%'
  },
  enter: {
    y: '0%',
    beforeChildren: true,
    staggerChildren: 500
  }
});
var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub2 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub3 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});

var Phone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    _classCallCheck(this, Phone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Phone).apply(this, arguments));
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainPhone, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneSlide, {
        initialPose: "exit",
        pose: "enter",
        className: "main-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
        key: "bub1",
        id: "i1",
        className: "med-text1",
        src: "../static/img/medical-reminder.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
        key: "bub2",
        id: "i2",
        className: "med-text2",
        src: "../static/img/confirm2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
        key: "bub3",
        id: "i3",
        className: "med-text3",
        src: "../static/img/confirmrem.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })));
    }
  }]);

  return Phone;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Phone);

/***/ }),

/***/ "./components/PhoneDisplay.js":
/*!************************************!*\
  !*** ./components/PhoneDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Phone */ "./components/Phone.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/PhoneDisplay.js";



var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__StyledHero",
  componentId: "zfw8n7-0"
})(["display:grid;grid-template-columns:1fr 1fr;width:100%;position:relative;min-height:440px;padding-top:0px;background-color:#611acc;background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238e55e8' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:fixed;overflow-x:hidden;z-index:0;&:after{position:absolute;content:'';width:100%;height:100px;background:#f4f3fa;z-index:4;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__Left",
  componentId: "zfw8n7-1"
})(["z-index:5;padding-left:25px;p{position:relative;display:block;max-width:600px;z-index:5;}"]);

var PhoneDisplay = function PhoneDisplay() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Phone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneDisplay);

/***/ }),

/***/ "./components/Schedule.js":
/*!********************************!*\
  !*** ./components/Schedule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendarStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarStats */ "./components/CalendarStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Schedule.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CalendarLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Schedule__CalendarLayout",
  componentId: "sc-1ji72tf-0"
})(["display:grid;grid-template-columns:375px minmax(420px,1fr);grid-template-rows:1fr;height:calc(100% - 140px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:125px;grid-column-gap:8px;bottom:0;z-index:-1;"]);

var Schedule =
/*#__PURE__*/
function (_Component) {
  _inherits(Schedule, _Component);

  function Schedule() {
    _classCallCheck(this, Schedule);

    return _possibleConstructorReturn(this, _getPrototypeOf(Schedule).apply(this, arguments));
  }

  _createClass(Schedule, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return Schedule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./components/SingleDay.js":
/*!*********************************!*\
  !*** ./components/SingleDay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleDay.js";





var Gear = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  press: {
    scale: 1.1
  }
});
var DayView = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__DayView",
  componentId: "sc-1099gq1-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:white;box-shadow:0 1px 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:20px 20px 25px 25px;z-index:-1;.parent{display:flex;flex-flow:column;position:absolute;right:0px;align-items:flex-end;border-radius:15px 15px 0 0;text-align:center;padding-right:20px;margin-top:1px;height:60px;width:100%;background:rgba(100,100,240,1);}.gear{position:absolute;display:flex;left:10px;top:10px;width:25px;height:25px;cursor:pointer;z-index:50;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(230,230,230,0.8);font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.sideDate{display:flex;color:white;margin:0;font-family:'Montserrat',sans-serif;font-size:26px;line-height:26px;padding-top:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__DayGrid",
  componentId: "sc-1099gq1-1"
})(["display:grid;position:relative;grid-template-columns:60px 1fr;position:absolute;grid-auto-rows:25px;border-radius:0px 0 25px 0;grid-gap:2px;width:100%;right:0px;margin-top:63px;height:75vh;overflow-y:scroll;overscroll-behavior:contain;.timeCell{display:grid;grid-column:1/3;padding-left:15px;align-items:center;border-bottom:none;border-top:1px solid white;border-radius:20px 0 0 20px;background:rgba(100,100,240,0.2);color:grey;&:hover{opacity:0.5;}}.lower{display:grid;grid-column:2/3;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid white;background:rgba(243,241,244,1);color:grey;&:hover{opacity:0.5;}}.number{display:grid;font-size:12px;align-self:center;justify-content:flex-start;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DATA = [{
  time: 6,
  am: true,
  q2: 615,
  q3: 630,
  q4: 645,
  display: '6 am'
}, {
  time: 7,
  am: true,
  q2: 715,
  q3: 730,
  q4: 745,
  display: '7 am'
}, {
  time: 8,
  am: true,
  q2: 815,
  q3: 830,
  q4: 845,
  display: '8 am'
}, {
  time: 9,
  am: true,
  q2: 915,
  q3: 930,
  q4: 945,
  display: '9 am'
}, {
  time: 10,
  am: true,
  q2: 1015,
  q3: 1030,
  q4: 1045,
  display: '10 am'
}, {
  time: 11,
  am: true,
  q2: 1115,
  q3: 1130,
  q4: 1145,
  display: '11 am'
}, {
  time: 12,
  am: false,
  pm: true,
  q2: 1215,
  q3: 1230,
  q4: 1245,
  display: '12 pm'
}, {
  time: 1,
  am: false,
  pm: true,
  q2: 115,
  q3: 130,
  q4: 145,
  display: '1 pm'
}, {
  time: 2,
  am: false,
  pm: true,
  q2: 215,
  q3: 230,
  q4: 245,
  display: '2 pm'
}, {
  time: 3,
  am: false,
  pm: true,
  q2: 315,
  q3: 330,
  q4: 345,
  display: '3 pm'
}, {
  time: 4,
  am: false,
  pm: true,
  q2: 415,
  q3: 430,
  q4: 445,
  display: '4 pm'
}, {
  time: 5,
  am: false,
  pm: true,
  q2: 515,
  q3: 530,
  q4: 545,
  display: '5 pm'
}, {
  time: 6,
  am: false,
  pm: true,
  q2: 615,
  q3: 630,
  q4: 645,
  display: '6 pm'
}, {
  time: 7,
  am: false,
  pm: true,
  q2: 715,
  q3: 730,
  q4: 745,
  display: '7 pm'
}, {
  time: 8,
  am: false,
  pm: true,
  q2: 815,
  q3: 830,
  q4: 845,
  display: '8 pm'
}, {
  time: 9,
  am: false,
  pm: true,
  q2: 915,
  q3: 930,
  q4: 945,
  display: '9 pm'
}];

var SingleDay = function SingleDay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: 'calendarsettings' // query: { id: this.props.id },

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
    className: "gear",
    src: "../static/img/gear.png",
    alt: "edit schedule settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(props.date.toString()).format('MMMM D, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(props.date.toString()).format('dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, DATA.map(function (timeblock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "timeCell number",
      value: timeblock.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, timeblock.display), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q2,
      key: timeblock.q2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q3,
      key: timeblock.q3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q4,
      key: timeblock.q4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      businessName\n      permissions\n      # orders {\n      #   id\n      # }\n      cart {\n        id\n        quantity\n        client {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/styles/FooterStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/FooterStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FooterStyles",
  componentId: "qh0lx9-0"
})(["width:100%;position:relative;bottom:0;background:rgba(10,10,10,0.8);color:", ";margin:0;padding:0;padding-top:55px;display:flex;flex-flow:column;align-items:center;justify-self:center;font-size:0.9rem;height:250px;a{color:", ";font-size:1.3rem;}@media (max-width:700px){font-size:11px;padding:20px 10px;}@media (max-width:1300px){justify-content:center;font-size:0.8rem;}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterStyles);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DoDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DoDisplay */ "./components/DoDisplay.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/index.js";




var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DoDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "flubber":
/*!**************************!*\
  !*** external "flubber" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flubber");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "popmotion":
/*!****************************!*\
  !*** external "popmotion" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("popmotion");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-calendar/dist/entry.nostyle":
/*!****************************************************!*\
  !*** external "react-calendar/dist/entry.nostyle" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-calendar/dist/entry.nostyle");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map