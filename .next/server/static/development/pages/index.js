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
})(["display:flex;justify-content:center;align-items:center;height:130vh;width:100vw;.c-hero-flex__item{flex-grow:1;background:#ccc;display:flex;align-items:center;justify-content:center;background-size:cover;box-shadow:inset 0 0 0 100vmax rgba(0,0,0,0.3);transition:0.2s all;&:hover{flex-grow:2;box-shadow:inset 0 0 0 100vmax rgba(20,0,100,0.5);}&:nth-child(3){background:url('../static/img/doc.jpg') no-repeat center center;text-decoration:none;}&:nth-child(2){background:url('../static/img/fitness-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(1){background:url('../static/img/spa-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(4){background:url('../static/img/realestate.jpg') no-repeat center center;text-decoration:none;}}.c-hero-flex__title{text-transform:uppercase;letter-spacing:0.075em;color:rgb(255,255,255);transition:0.2s all;font-size:18px;opacity:0.8;background-color:transparent;border:2px solid white;border-radius:0px;margin:0;padding-left:10px;padding-right:10px;}@media (min-width:960px){display:flex;justify-content:center;align-items:center;height:400px;}@media (max-width:960px){flex-flow:column nowrap;.c-hero-flex__item{width:100%;}}@media (min-width:961px){.c-hero-flex__item{height:100%;text-decoration:none;}}"]);

var Boxes = function Boxes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/spa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Spa & Beauty"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/fitness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Fitness Instruction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/medical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Health Care"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/realestate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Real Estate"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Boxes);

/***/ }),

/***/ "./components/CalendarDayHour.js":
/*!***************************************!*\
  !*** ./components/CalendarDayHour.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react'
// import Dayz from 'dayz'
// // could also import the sass if you have a loader at dayz/dayz.scss
// import styled from 'styled-components'
// import moment from 'moment'
// const StyledDayz = styled.div`
//   .dayz {
//     width: 100%;
//     height: 100%;
//     box-sizing: border-box;
//     display: flex;
//     flex-wrap: nowrap;
//     flex-direction: column;
//     align-items: stretch;
//   }
//   .dayz.x-labels {
//     height: 30px;
//     align-items: center;
//     display: flex;
//     flex-direction: row;
//   }
//   .dayz.x-labels.day-label {
//     display: flex;
//     flex-grow: 1;
//     flex-basis: 1px;
//     padding-left: 8px;
//   }
//   .dayz.body {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: row;
//     position: relative;
//   }
//   .dayz.body.y-labels {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     width: 60px;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//   }
//   .dayz.body.y-labels.all-day,
//   .dayz.body.y-labels.hour {
//     width: 100%;
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-indent: 8px;
//     text-align: left;
//     border-bottom: 1px solid #b6b6b6;
//   }
//   .dayz.body.y-labels.all-day {
//     flex-grow: 0;
//   }
//   .dayz.body.days {
//     flex: 1;
//     display: flex;
//     flex-direction: row;
//     position: relative;
//     box-sizing: border-box;
//     border-top: 1px solid #b6b6b6;
//     border-left: 1px solid #b6b6b6;
//   }
//   .dayz.day {
//     border-right: 1px solid #b6b6b6;
//     border-bottom: 1px solid #b6b6b6;
//     box-sizing: border-box;
//   }
//   .dayz.day.event > * {
//     height: 100%;
//   }
//   .dayz.day.highlight {
//     background-color: #ececec;
//   }
//   .dayz.month.event.stack-1,
//   .dayz.week.all-day.event.stack-1,
//   .dayz.day.all-day.event.stack-1 {
//     margin-top: 20px;
//   }
//   .dayz.month.event.stack-2,
//   .dayz.week.all-day.event.stack-2,
//   .dayz.day.all-day.event.stack-2 {
//     margin-top: 40px;
//   }
//   .dayz.month.event.stack-3,
//   .dayz.week.all-day.event.stack-3,
//   .dayz.day.all-day.event.stack-3 {
//     margin-top: 60px;
//   }
//   .dayz.month.event.stack-4,
//   .dayz.week.all-day.event.stack-4,
//   .dayz.day.all-day.event.stack-4 {
//     margin-top: 80px;
//   }
//   .dayz.month.event.stack-5,
//   .dayz.week.all-day.event.stack-5,
//   .dayz.day.all-day.event.stack-5 {
//     margin-top: 100px;
//   }
//   .dayz.month.event.stack-6,
//   .dayz.week.all-day.event.stack-6,
//   .dayz.day.all-day.event.stack-6 {
//     margin-top: 120px;
//   }
//   .dayz.month.event.stack-7,
//   .dayz.week.all-day.event.stack-7,
//   .dayz.day.all-day.event.stack-7 {
//     margin-top: 140px;
//   }
//   .dayz.month.event.stack-8,
//   .dayz.week.all-day.event.stack-8,
//   .dayz.day.all-day.event.stack-8 {
//     margin-top: 160px;
//   }
//   .dayz.month.event.stack-9,
//   .dayz.week.all-day.event.stack-9,
//   .dayz.day.all-day.event.stack-9 {
//     margin-top: 180px;
//   }
//   .dayz.week.x-labels,
//   .dayz.day.x-labels {
//     padding-left: 60px;
//   }
//   .dayz.week.days,
//   .dayz.day.days {
//     margin-left: 60px;
//   }
//   .dayz.week.day,
//   .dayz.day.day {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
//   .dayz.week.day.all-day,
//   .dayz.day.day.all-day {
//     flex: 1;
//     flex-grow: 0;
//   }
//   .dayz.week.day.all-day.event,
//   .dayz.day.day.all-day.event {
//     height: 20px;
//   }
//   .dayz.week.day.events,
//   .dayz.day.day.events {
//     flex: 1;
//     position: relative;
//   }
//   .dayz.week.day.events.event.span-1,
//   .dayz.day.day.events.event.span-1 {
//     width: 100%;
//     position: absolute;
//   }
//   .dayz.week.day.label,
//   .dayz.day.day.label {
//     display: none;
//   }
//   .dayz.week.events.day.event.span-1 {
//     width: 14.28571%;
//   }
//   .dayz.month.days {
//     display: grid;
//     grid-auto-rows: 1fr;
//     grid-template-columns: repeat(7, minmax(4rem, 1fr));
//   }
//   .dayz.month.days.day.label {
//     text-align: right;
//     padding: 5px;
//   }
//   .dayz.month.days.day.event {
//     height: 20px;
//   }
//   .dayz.month.days.day.event.span-1.evbody > div {
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     width: 100%;
//     overflow: hidden;
//   }
//   .dayz.month.days.day.outside {
//     background-color: #f2f2f2;
//   }
//   .dayz.event {
//     background: #dddddd;
//     color: #2b2b2b;
//     box-sizing: border-box;
//     position: relative;
//     border: 1px solid #b6b6b6;
//     border-radius: 4px;
//   }
//   .dayz.event.color-1.evbody {
//     background: #4d4d4d;
//     color: white;
//   }
//   .dayz.event.color-2.evbody {
//     background: #5da5da;
//     color: black;
//   }
//   .dayz.event.color-3.evbody {
//     background: #faa43a;
//     color: white;
//   }
//   .dayz.event.color-4.evbody {
//     background: #60bd68;
//     color: black;
//   }
//   .dayz.event.color-5.evbody {
//     background: #f17cb0;
//     color: black;
//   }
//   .dayz.event.color-6.evbody {
//     background: #b2912f;
//     color: white;
//   }
//   .dayz.event.color-7.evbody {
//     background: #b276b2;
//     color: white;
//   }
//   .dayz.event.color-8.evbody {
//     background: #decf3f;
//     color: black;
//   }
//   .dayz.event.color-9.evbody {
//     background: #f15854;
//     color: white;
//   }
//   .dayz.event.color-10.evbody {
//     background: #f5deb3;
//     color: black;
//   }
//   .dayz.event.span-1 {
//     z-index: 1;
//     width: calc(100% + 1px -1px);
//   }
//   .dayz.event.span-1.is-continued {
//     width: calc(100% + -11px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-1.is-continuation {
//     width: calc(100% + -11px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-1.is-continued.is-continuation {
//     width: calc(100% + -21px);
//   }
//   .dayz.event.span-2 {
//     z-index: 1;
//     width: calc(200% + 2px -1px);
//   }
//   .dayz.event.span-2.is-continued {
//     width: calc(200% + -10px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-2.is-continuation {
//     width: calc(200% + -10px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-2.is-continued.is-continuation {
//     width: calc(200% + -20px);
//   }
//   .dayz.event.span-3 {
//     z-index: 1;
//     width: calc(300% + 3px -1px);
//   }
//   .dayz.event.span-3.is-continued {
//     width: calc(300% + -9px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-3.is-continuation {
//     width: calc(300% + -9px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-3.is-continued.is-continuation {
//     width: calc(300% + -19px);
//   }
//   .dayz.event.span-4 {
//     z-index: 1;
//     width: calc(400% + 4px -1px);
//   }
//   .dayz.event.span-4.is-continued {
//     width: calc(400% + -8px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-4.is-continuation {
//     width: calc(400% + -8px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-4.is-continued.is-continuation {
//     width: calc(400% + -18px);
//   }
//   .dayz.event.span-5 {
//     z-index: 1;
//     width: calc(500% + 5px -1px);
//   }
//   .dayz.event.span-5.is-continued {
//     width: calc(500% + -7px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-5.is-continuation {
//     width: calc(500% + -7px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-5.is-continued.is-continuation {
//     width: calc(500% + -17px);
//   }
//   .dayz.event.span-6 {
//     z-index: 1;
//     width: calc(600% + 6px -1px);
//   }
//   .dayz.event.span-6.is-continued {
//     width: calc(600% + -6px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-6.is-continuation {
//     width: calc(600% + -6px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-6.is-continued.is-continuation {
//     width: calc(600% + -16px);
//   }
//   .dayz.event.span-7 {
//     z-index: 1;
//     width: calc(700% + 7px -1px);
//   }
//   .dayz.event.span-7.is-continued {
//     width: calc(700% + -5px);
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.span-7.is-continuation {
//     width: calc(700% + -5px);
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.span-7.is-continued.is-continuation {
//     width: calc(700% + -15px);
//   }
//   .dayz.event.is-resizable::before,
//   .dayz.event.is-resizable::after {
//     content: ' ';
//     height: 3px;
//     border: 1px solid black;
//     right: 15%;
//     left: 15%;
//     display: block;
//     position: absolute;
//     border-radius: 5px;
//     visibility: hidden;
//     cursor: ns-resize;
//   }
//   .dayz.event.is-resizable.color-1.evbody:before,
//   .dayz.event.is-resizable.color-1.evbody:after {
//     background-color: #272727;
//   }
//   .dayz.event.is-resizable.color-2.evbody:before,
//   .dayz.event.is-resizable.color-2.evbody:after {
//     background-color: #2c80bf;
//   }
//   .dayz.event.is-resizable.color-3.evbody:before,
//   .dayz.event.is-resizable.color-3.evbody:after {
//     background-color: #e27f06;
//   }
//   .dayz.event.is-resizable.color-4.evbody:before,
//   .dayz.event.is-resizable.color-4.evbody:after {
//     background-color: #3d9345;
//   }
//   .dayz.event.is-resizable.color-5.evbody:before,
//   .dayz.event.is-resizable.color-5.evbody:after {
//     background-color: #ea3786;
//   }
//   .dayz.event.is-resizable.color-6.evbody:before,
//   .dayz.event.is-resizable.color-6.evbody:after {
//     background-color: #75601f;
//   }
//   .dayz.event.is-resizable.color-7.evbody:before,
//   .dayz.event.is-resizable.color-7.evbody:after {
//     background-color: #8d4f8d;
//   }
//   .dayz.event.is-resizable.color-8.evbody:before,
//   .dayz.event.is-resizable.color-8.evbody:after {
//     background-color: #b2a41f;
//   }
//   .dayz.event.is-resizable.color-9.evbody:before,
//   .dayz.event.is-resizable.color-9.evbody:after {
//     background-color: #e61813;
//   }
//   .dayz.event.is-resizable.color-10.evbody:before,
//   .dayz.event.is-resizable.color-10.evbody:after {
//     background-color: #ecc16f;
//   }
//   .dayz.event.is-resizable:before {
//     top: -px;
//   }
//   .dayz.event.is-resizable:after {
//     bottom: -px;
//   }
//   .dayz.event.is-resizable.is-resizing:before,
//   .dayz.event.is-resizable.is-resizing:after,
//   .dayz.event.is-resizable:hover:before,
//   .dayz.event.is-resizable:hover:after {
//     visibility: visible;
//   }
//   .dayz.event.evbody {
//     padding-left: 0.4rem;
//     height: 100%;
//     overflow: hidden;
//   }
//   .dayz.event.is-continued {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }
//   .dayz.event.is-continued::after {
//     content: '';
//     display: block;
//     width: 0;
//     height: 0;
//     border-style: solid;
//     position: absolute;
//     -moz-transform: scale(0.9999);
//     border-width: 10px 0 10px 10px;
//     border-color: transparent transparent transparent #dddddd;
//     right: -0px;
//     top: -px;
//   }
//   .dayz.event.is-continued.color-1::after {
//     border-color: transparent transparent transparent #4d4d4d;
//   }
//   .dayz.event.is-continued.color-2::after {
//     border-color: transparent transparent transparent #5da5da;
//   }
//   .dayz.event.is-continued.color-3::after {
//     border-color: transparent transparent transparent #faa43a;
//   }
//   .dayz.event.is-continued.color-4::after {
//     border-color: transparent transparent transparent #60bd68;
//   }
//   .dayz.event.is-continued.color-5::after {
//     border-color: transparent transparent transparent #f17cb0;
//   }
//   .dayz.event.is-continued.color-6::after {
//     border-color: transparent transparent transparent #b2912f;
//   }
//   .dayz.event.is-continued.color-7::after {
//     border-color: transparent transparent transparent #b276b2;
//   }
//   .dayz.event.is-continued.color-8::after {
//     border-color: transparent transparent transparent #decf3f;
//   }
//   .dayz.event.is-continued.color-9::after {
//     border-color: transparent transparent transparent #f15854;
//   }
//   .dayz.event.is-continued.color-10::after {
//     border-color: transparent transparent transparent #f5deb3;
//   }
//   .dayz.event.is-continuation {
//     margin-left: 10px;
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }
//   .dayz.event.is-continuation::before {
//     content: '';
//     display: block;
//     width: 0;
//     height: 0;
//     border-style: solid;
//     position: absolute;
//     -moz-transform: scale(0.9999);
//     border-width: 10px 10px 10px 0;
//     border-color: transparent #dddddd transparent transparent;
//     left: -0px;
//     bottom: -px;
//   }
//   .dayz.event.is-continuation.color-1::before {
//     border-color: transparent #4d4d4d transparent transparent;
//   }
//   .dayz.event.is-continuation.color-2::before {
//     border-color: transparent #5da5da transparent transparent;
//   }
//   .dayz.event.is-continuation.color-3::before {
//     border-color: transparent #faa43a transparent transparent;
//   }
//   .dayz.event.is-continuation.color-4::before {
//     border-color: transparent #60bd68 transparent transparent;
//   }
//   .dayz.event.is-continuation.color-5::before {
//     border-color: transparent #f17cb0 transparent transparent;
//   }
//   .dayz.event.is-continuation.color-6::before {
//     border-color: transparent #b2912f transparent transparent;
//   }
//   .dayz.event.is-continuation.color-7::before {
//     border-color: transparent #b276b2 transparent transparent;
//   }
//   .dayz.event.is-continuation.color-8::before {
//     border-color: transparent #decf3f transparent transparent;
//   }
//   .dayz.event.is-continuation.color-9::before {
//     border-color: transparent #f15854 transparent transparent;
//   }
//   .dayz.event.is-continuation.color-10::before {
//     border-color: transparent #f5deb3 transparent transparent;
//   }
// `
// // would come from a network request in a "real" app
// const EVENTS = new Dayz.EventsCollection([
//   {
//     content: 'A short event',
//     range: moment.range(date.clone(), date.clone().add(1, 'day')),
//   },
//   {
//     content: 'Two Hours ~ 8-10',
//     range: moment.range(date.clone().hour(8), date.clone().hour(10)),
//   },
//   {
//     content: 'A Longer Event',
//     range: moment.range(
//       date.clone().subtract(2, 'days'),
//       date.clone().add(8, 'days'),
//     ),
//   },
// ])
// class CalendarDayHour extends React.Component {
//   render() {
//     const { date } = this.state
//     return (
//       <StyledDayz>
//         <Dayz display="day" date={date} events={EVENTS} />
//       </StyledDayz>
//     )
//   }
// }
// export default CalendarDayHour

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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "react-calendar/dist/entry.nostyle");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DayCalendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DayCalendar */ "./components/DayCalendar.js");
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

var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "CalendarStats__StatsDisplay",
  componentId: "sc-3vgek8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);padding-left:5px;padding-right:5px;padding-top:5px;width:100%;height:100%;border:5px solid white;border-radius:25px;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);.gear{position:relative;display:flex;left:215px;width:25px;height:25px;cursor:pointer;}.react-calendar{width:355px;border-radius:15px;max-width:100%;box-shadow:1px 1px 1px 1px rgba(20,20,20,0.1);max-height:300px;background:white;border:1px solid rgba(20,20,20,0.1);font-family:Arial,Helvetica,sans-serif;line-height:1.125em;}.react-calendar,.react-calendar *,.react-calendar *:before,.react-calendar *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.react-calendar button{margin:0;border:0;outline:none;}.react-calendar button:enabled:hover{cursor:pointer;}.react-calendar__navigation{height:54px;margin-bottom:0.5em;}.react-calendar__navigation button{min-width:44px;background:none;font-size:20px;background-color:rgba(100,100,240,1);border-radius:15px 15px 0 0;color:white;&:first-child{border-radius:15px 0 0 0;}&:last-child{border-radius:0 15px 0 0;}&:nth-child(2){border-radius:0;}&:nth-child(3){border-radius:0;}&:nth-child(4){border-radius:0;}}.react-calendar__navigation button:enabled:hover,.react-calendar__navigation button:enabled:focus{background-color:#e6e6e6;}.react-calendar__navigation button[disabled]{background-color:rgba(100,100,240,0.1);}.react-calendar__month-view__weekdays{text-align:center;text-transform:uppercase;font-weight:bold;font-size:0.75em;}.react-calendar__month-view__weekdays__weekday{padding:2em 0;}.react-calendar__month-view__weekNumbers{font-weight:bold;}.react-calendar__month-view__weekNumbers .react-calendar__tile{display:flex;align-items:center;justify-content:center;font-size:0.75em;padding:calc(0.75em / 0.75) calc(0.5em / 0.75);}.react-calendar__month-view__days__day--weekend{color:red;}.react-calendar__month-view__days__day--neighboringMonth{color:#969696;}.react-calendar__year-view .react-calendar__tile,.react-calendar__decade-view .react-calendar__tile,.react-calendar__century-view .react-calendar__tile{padding:2em 0.5em;}.react-calendar__tile{max-width:100%;text-align:center;padding:0.75em 0.5em;background:none;}.react-calendar__tile:disabled{background-color:#f0f0f0;}.react-calendar__tile:enabled:hover,.react-calendar__tile:enabled:focus{background-color:#e6e6e6;}.react-calendar__tile--hasActive{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--hasActive:enabled:hover,.react-calendar__tile--hasActive:enabled:focus{background:#a9d4ff;}.react-calendar__tile--active{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--active:enabled:hover,.react-calendar__tile--active:enabled:focus{background:#1087ff;}.react-calendar--selectRange .react-calendar__tile--hover{background-color:rgba(100,100,240,1);color:white;}"]);
var Flexer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "CalendarStats__Flexer",
  componentId: "sc-3vgek8-1"
})(["display:flex;flex-flow:column;"]);
var Stat = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "CalendarStats__Stat",
  componentId: "sc-3vgek8-2"
})(["font-size:12px;"]);
var StyledSub = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.p.withConfig({
  displayName: "CalendarStats__StyledSub",
  componentId: "sc-3vgek8-3"
})(["margin-top:0;font-size:14px;"]);
var Gear = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.img({
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
      // return (
      // <Mutation
      //   mutation={SINGLE_DAY_MUTATION}
      //   variables={{
      //     date: this.state.day,
      //   }}
      // >
      //   {({ data }) => {
      //     if (!data.day) return <p>No Day Found for {this.props.day}</p>
      //     const date = data.day
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onChange: this.onChange,
        minDetail: "decade",
        value: this.state.date,
        calendarType: "US",
        returnValue: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: 'calendarsettings',
          query: {
            id: this.props.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
        className: "gear",
        src: "../static/img/gear.png",
        alt: "edit schedule settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stat, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }))))); //     )
      //   }}
      // </Mutation>
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
})(["display:flex;background-color:#33c5ff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%2333c5ff'/%3E%3Cstop offset='1' stop-color='%231cffe8'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2331ccff'/%3E%3Cstop offset='1' stop-color='%2312f5fc'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%232fd2ff'/%3E%3Cstop offset='1' stop-color='%2308d3f8'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%232dd9ff'/%3E%3Cstop offset='1' stop-color='%230aaaea'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%232be0ff'/%3E%3Cstop offset='1' stop-color='%230c85db'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%2329e8ff'/%3E%3Cstop offset='1' stop-color='%230e64cb'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%2326efff'/%3E%3Cstop offset='1' stop-color='%231048bc'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%2324f6ff'/%3E%3Cstop offset='1' stop-color='%231230ae'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2322feff'/%3E%3Cstop offset='1' stop-color='%23131ca0'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2320fff8'/%3E%3Cstop offset='1' stop-color='%231c1392'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%231efff0'/%3E%3Cstop offset='1' stop-color='%232a1484'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%231cffe8'/%3E%3Cstop offset='1' stop-color='%23341477'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E\");background-size:cover;background-position:center;height:200px;"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CallToAction__StyledButton",
  componentId: "sc-1eyjrc-1"
})(["display:flex;padding:10px 0px;align-items:center;justify-content:center;margin:0 auto;margin-top:75px;margin-bottom:75px;background:white;color:gray;border:none;border-radius:25px;width:200px;text-transform:uppercase;font-size:14px;"]);

var CallToAction = function CallToAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GradientDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Start Your Free Trial"));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/Client.js":
/*!******************************!*\
  !*** ./components/Client.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DeleteClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteClient */ "./components/DeleteClient.js");
/* harmony import */ var _styles_ClientStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ClientStyles */ "./components/styles/ClientStyles.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Client.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Client =
/*#__PURE__*/
function (_Component) {
  _inherits(Client, _Component);

  function Client() {
    _classCallCheck(this, Client);

    return _possibleConstructorReturn(this, _getPrototypeOf(Client).apply(this, arguments));
  }

  _createClass(Client, [{
    key: "render",
    value: function render() {
      var client = this.props.client;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ClientStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/client',
          query: {
            id: client.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, client.lastName, ", ", client.firstName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, client.cellPhone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(client.birthDay, 'MMMM d, YYYY', {
        awareOfUnicodeTokens: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: 'update',
          query: {
            id: client.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteClient__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: client.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Delete ")));
    }
  }]);

  return Client;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Client, "propTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});



/***/ }),

/***/ "./components/Clients.js":
/*!*******************************!*\
  !*** ./components/Clients.js ***!
  \*******************************/
/*! exports provided: default, ALL_CLIENTS_QUERY, SINGLE_CLIENT_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CLIENTS_QUERY", function() { return ALL_CLIENTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CLIENT_QUERY", function() { return SINGLE_CLIENT_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Client */ "./components/Client.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Clients.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query ALL_CLIENTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    clients(first: $first, skip: $skip, orderBy: lastName_ASC) {\n      id\n      firstName\n      lastName\n      cellPhone\n      birthDay\n      image\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_CLIENT_QUERY($id: ID!) {\n    client(where: { id: $id }) {\n      id\n      firstName\n      lastName\n      cellPhone\n      birthDay\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SINGLE_CLIENT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var ALL_CLIENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Clients__List",
  componentId: "sc-1jwta3s-0"
})(["display:grid;margin-top:50px;margin-bottom:50px;grid-template-rows:1fr 50vh 1fr;position:relative;z-index:0;"]);
var Clientlisting = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Clients__Clientlisting",
  componentId: "sc-1jwta3s-1"
})(["display:grid;grid-template-columns:100%;grid-auto-rows:20px;background-color:rgba(20,20,100,0.1);max-width:100%;grid-gap:10px;margin-left:20px;margin-right:20px;margin-top:15px;margin-bottom:15px;padding-right:10px;padding-left:10px;padding-top:0px;overflow-y:scroll;padding-bottom:0px;border:1px solid rgba(0,0,0,0.2);border-radius:5px;"]);

var Clients =
/*#__PURE__*/
function (_Component) {
  _inherits(Clients, _Component);

  function Clients() {
    _classCallCheck(this, Clients);

    return _possibleConstructorReturn(this, _getPrototypeOf(Clients).apply(this, arguments));
  }

  _createClass(Clients, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_CLIENTS_QUERY // fetchPolicy=
        ,
        variables: {
          skip: this.props.page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"],
          first: 19
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Clientlisting, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, data.clients.map(function (client) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Client__WEBPACK_IMPORTED_MODULE_4__["default"], {
            client: client,
            key: client.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
    }
  }]);

  return Clients;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Clients);


/***/ }),

/***/ "./components/DayCalendar.js":
/*!***********************************!*\
  !*** ./components/DayCalendar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CalendarDayHour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarDayHour */ "./components/CalendarDayHour.js");
/* harmony import */ var _CalendarDayHour__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CalendarDayHour__WEBPACK_IMPORTED_MODULE_3__);
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





var DayView = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DayCalendar__DayView",
  componentId: "sc-190uf98-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:transparent;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarDayHour__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

/***/ "./components/DeleteClient.js":
/*!************************************!*\
  !*** ./components/DeleteClient.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Clients */ "./components/Clients.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/DeleteClient.js";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_CLIENT_MUTATION($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      firstName\n      lastName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_CLIENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DeleteClient =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteClient, _Component);

  function DeleteClient() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteClient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteClient)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      var data = cache.readQuery({
        query: _Clients__WEBPACK_IMPORTED_MODULE_3__["ALL_CLIENTS_QUERY"]
      });
      console.log(data, payload);
      data.clients = data.clients.filter(function (client) {
        return client.id !== payload.data.deleteClient.id;
      });
      cache.writeQuery({
        query: _Clients__WEBPACK_IMPORTED_MODULE_3__["ALL_CLIENTS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteClient, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_CLIENT_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, function (deleteClient, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm("'Are you sure you want to delete ".concat(_this2.props.id, "'"))) {
              deleteClient().catch(function (err) {
                alert(err.message);
              });
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteClient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteClient);

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

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Oops!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Oops!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/FooterStyles */ "./components/styles/FooterStyles.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Footer.js";






var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Privacy Policy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/terms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Terms of Use"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
})(["display:grid;grid-template-columns:1fr 1fr;height:800px;width:100%;background-image:linear-gradient( 180deg,rgb(255,255,255),rgb(245,245,250) );background:linear-gradient(180deg,#fff,#f4f3fa);overflow-x:hidden;z-index:0;&:after{top:-121px;display:block;position:absolute;content:'';left:-50px;right:-50px;height:700px;-webkit-transform:rotateZ(-5.7deg);transform:rotateZ(-5.7deg);z-index:0;margin:0;padding:0;overflow:hidden;background:linear-gradient( 270deg,rgba(37,222,162,1),#27aee1,#0f7ffeff );z-index:0;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Left",
  componentId: "sc-1vorxnl-2"
})(["z-index:5;p{position:relative;display:block;max-width:600px;z-index:5;color:white;font-size:1.2rem;}.title{position:relative;display:block;color:white;font-weight:600;font-size:1.6rem;}"]);
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__Screen",
  componentId: "sc-1vorxnl-3"
})(["position:relative;display:block;top:75px;height:660px;width:auto;z-index:3;"]);

var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Making Every Day Perfect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Most appointment-based businesses are plauged with constant \"No-Shows\" which result in lost revenue and disruption to your daily schedule. We have simplified & perfected appointment reminders."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Effortlessly reduce \"No-Shows\" & improve daily work flow.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screen, {
    src: "../static/img/placeit.png",
    alt: "perfect day reminders screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Boxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CallToAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default, PAGINATION_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    clientsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var Pagination = function Pagination(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: PAGINATION_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Loading...");
    var count = data.clientsConnection.aggregate.count;
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_5__["perPage"]);
    var page = props.page;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: {
        pathname: 'clients',
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "\u2190 Prev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "totes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Page ", props.page, " of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "totalPages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, pages)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "totes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, count, " Clients Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: {
        pathname: 'clients',
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "next",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Next \u2192")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);


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
}); // opacity: 1,
// delay: 300,
// transition: {
//   y: { type: 'spring', stiffness: 1000, damping: 15 },
//   default: { duration: 500 },

var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.7
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
    scale: 0.7
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
    scale: 0.7
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
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneSlide, {
        initialPose: "exit",
        pose: "enter",
        className: "main-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
        key: "bub1",
        id: "i1",
        className: "med-text1",
        src: "../static/img/medical-reminder.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
        key: "bub2",
        id: "i2",
        className: "med-text2",
        src: "../static/img/confirm2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
        key: "bub3",
        id: "i3",
        className: "med-text3",
        src: "../static/img/confirmrem.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
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
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Phone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneDisplay);

/***/ }),

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/PleaseSignIn.js";





var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "PleaseSignIn__Paragraph",
  componentId: "zcvgkq-0"
})(["padding-left:20px;"]);

var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Please Sign In before Continuing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

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
})(["display:grid;grid-template-columns:375px minmax(420px,1fr);grid-template-rows:1fr 250px;height:calc(100% - 140px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:125px;grid-column-gap:8px;bottom:0;z-index:-1;"]);

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
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }
  }]);

  return Schedule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default, SIGNIN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_MUTATION", function() { return SIGNIN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SignIn.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      name\n      businessName\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var StyledP = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p.withConfig({
  displayName: "SignIn__StyledP",
  componentId: "sc-4ltl11-0"
})(["margin-bottom:0;margin-top:20px;cursor:pointer;"]);

var SignIn =
/*#__PURE__*/
function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      businessName: '',
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(SignIn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, function (signin, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signin();

                    case 3:
                      _this2.setState({
                        name: '',
                        businessName: '',
                        email: '',
                        password: ''
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Sign Into Your Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "Email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Sign In!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledP, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Forget Your Password?"))));
      });
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignIn);


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
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      businessName\n      permissions\n      cart {\n        id\n        quantity\n        client {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"]);

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
      lineNumber: 27
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

/***/ "./components/styles/ClientStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/ClientStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ClientStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ClientStyles",
  componentId: "hqsscu-0"
})(["img{width:100%;height:100px;object-fit:cover;}.buttonList{text-align:left;display:grid;width:100%;align-items:center;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));& > *{background:white;border:1px solid grey;font-size:1.3rem;&:hover{background:rgba(100,100,240,0.4);}}}p,a{padding-left:10px;}button{height:28px;max-width:100px;cursor:pointer;&:hover{background:rgba(100,100,240,0.4);}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ClientStyles);

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
})(["width:100%;background:rgba(10,10,10,0.8);color:", ";margin:0;padding:0;padding-top:55px;display:flex;flex-flow:column;align-items:center;justify-self:center;font-size:0.9rem;height:250px;.bottom{position:absolute;bottom:0;}a{color:", ";font-size:1.3rem;}@media (max-width:700px){font-size:11px;padding:20px 10px;}@media (max-width:1300px){justify-content:center;font-size:0.8rem;}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterStyles);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;margin:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding-left:1rem;padding-top:0.7rem;padding-bottom:0.7rem;font-size:1.5rem;border:1px solid black;border-radius:5px;margin-top:0.8rem;&:focus{outline:0;border-color:lightblue;}}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;margin-top:1rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;margin-bottom:10px;content:'';display:block;background-image:linear-gradient( to right,#272ebd 0%,#0980cd 50%,#272ebd 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.blue;
}, loading);
Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;justify-self:center;font-size:10px;width:340px;border:1px solid ", ";border-radius:0 0 0 0;background:", ";& > *{margin:0 auto;padding:5px 14px;&:last-child{border-right:0;}&:nth-child(2){border-right:0;}}a{color:white;}a[aria-disabled='true']{color:", ";pointer-events:none;}.totes{background:white;}"], function (props) {
  return props.theme.lightblue;
}, function (props) {
  return props.theme.lightblue;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "l04z44-0"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:0;margin:0 auto;border-radius:5px;font-size:2rem;padding:0.5rem 1.2rem;font-size:1.8rem;display:inline-block;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);}&:active{box-shadow:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 19;

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
/* harmony import */ var _components_Clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Clients */ "./components/Clients.js");
/* harmony import */ var _components_DoDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DoDisplay */ "./components/DoDisplay.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule */ "./pages/schedule.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/index.js";





var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DoDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_schedule__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/schedule.js":
/*!***************************!*\
  !*** ./pages/schedule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/schedule.js";




var Scheduler = function Scheduler(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scheduler);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

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