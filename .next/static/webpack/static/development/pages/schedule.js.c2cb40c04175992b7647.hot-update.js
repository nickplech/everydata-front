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
})(["display:grid;grid-template-columns:1fr;grid-auto-rows:30px;grid-gap:1px;width:100%;border-bottom:1px solid grey;margin-top:90px;height:75vh;overflow-y:scroll;overscroll-behavior:contain;.timeCell{display:flex;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid grey;border-left:5px solid lightblue;background:rgba(240,240,240,0.4);color:grey;}"]);
var DUMMY_DATA = [{
  time: 6,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 7,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 8,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 9,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 10,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 11,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 12,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 1,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 2,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 3,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 4,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 5,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 6,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 7,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 8,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 9,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 10,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 11,
  am: false,
  pm: true,
  q2: 15,
  q3: 30,
  q4: 45
}, {
  time: 12,
  am: true,
  q2: 15,
  q3: 30,
  q4: 45,
  pm: false
}];

var SingleDay = function SingleDay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('MMMM D, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, DUMMY_DATA.map(function (timeblock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "timeCell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, timeblock.time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "timeCell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, timeblock.q2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "timeCell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, timeblock.q3), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "timeCell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, timeblock.q4));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);

/***/ })

})
//# sourceMappingURL=schedule.js.c2cb40c04175992b7647.hot-update.js.map