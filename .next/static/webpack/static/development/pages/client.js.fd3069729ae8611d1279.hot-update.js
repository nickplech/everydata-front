webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/DaySelector.js":
/*!***********************************!*\
  !*** ./components/DaySelector.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActualDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActualDay */ "./components/ActualDay.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/DaySelector.js";





var ButtonRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DaySelector__ButtonRow",
  componentId: "pruyuv-0"
})(["display:flex;width:100%;height:50px;align-items:center;justify-content:space-evenly;"]);
var RemIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DaySelector__RemIcon",
  componentId: "pruyuv-1"
})(["display:flex;padding:20px;background:blueviolet;border-radius:50%;"]);
var DateSelector = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DaySelector__DateSelector",
  componentId: "pruyuv-2"
})(["grid-row:2;margin:0 20px;border-radius:8px 8px 8px 8px;position:relative;display:grid;width:245px;height:100%;grid-template-columns:1;grid-template-rows:35px 30px 1fr;box-shadow:0 0 5px 3px rgba(0,0,0,0.1);background:white;.month{width:100%;display:grid;height:35px;background:rgba(20,110,220,1);grid-row:1;border-radius:8px 8px 0 0;align-content:center;align-items:center;justify-content:center;color:white;}"]);
var Day = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DaySelector__Day",
  componentId: "pruyuv-3"
})(["display:flex;grid-row:3;flex-flow:row wrap;align-content:flex-start;justify-content:center;"]);
var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DaySelector__StyledDiv",
  componentId: "pruyuv-4"
})(["display:flex;color:lightslategray;margin:2px 1px;grid-row:2;justify-content:space-around;background:transparent;p{margin:0 0px;}"]);
var today = new Date();
var twoWeeks = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addWeeks"])(today, 2);
var result = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDay"])(today, twoWeeks);
var fixedArray = result.splice(-1, 1);
var oneWeek = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addWeeks"])(today, 1);
var dayNameResult = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDay"])(today, oneWeek);
var fixedOneWeek = dayNameResult.splice(-1, 1);

var DaySelector = function DaySelector() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateSelector, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(today, 'MMMM')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, dayNameResult.map(function (weekDayName) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: weekDayName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " ", Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(weekDayName, 'dd'));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Day, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, result.map(function (day) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActualDay__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: day,
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(day, 'D'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DaySelector);

/***/ })

})
//# sourceMappingURL=client.js.fd3069729ae8611d1279.hot-update.js.map