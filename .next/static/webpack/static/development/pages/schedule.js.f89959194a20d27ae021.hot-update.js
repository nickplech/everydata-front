webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./components/SingleDay.js":
/*!*********************************!*\
  !*** ./components/SingleDay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleDay.js";



var DayView = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__DayView",
  componentId: "sc-1099gq1-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:transparent;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;.parent{display:flex;flex-flow:column;position:absolute;right:5px;align-items:flex-end;text-align:center;padding-right:10px;height:80px;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(100,120,220,1);font-size:20px;}.sideDate{display:flex;margin:0;font-family:'Montserrat',sans-serif;font-size:30px;line-height:30px;padding-top:10px;}"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__DayGrid",
  componentId: "sc-1099gq1-1"
})(["display:grid;grid-template-columns:1fr;grid-auto-rows:25px;grid-gap:1px;width:100%;border-left:3px solid blue;margin-top:20px;height:95%;overflow-y:scroll;overscroll-behavior:contain;.timeCell{display:flex;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid grey;color:grey;}"]);
var DUMMY_DATA = [{
  time: 6,
  am: true
}, {
  time: 7,
  am: true
}, {
  time: 8,
  am: true
}, {
  time: 9,
  am: true
}, {
  time: 10,
  am: true
}, {
  time: 11,
  am: true
}, {
  time: 12,
  am: false,
  pm: true
}, {
  time: 1,
  am: false,
  pm: true
}];

var SingleDay = function SingleDay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('MMMM D, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, DUMMY_DATA.map(function (timeblock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "timeCell",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, timeblock.time);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);

/***/ })

})
//# sourceMappingURL=schedule.js.f89959194a20d27ae021.hot-update.js.map