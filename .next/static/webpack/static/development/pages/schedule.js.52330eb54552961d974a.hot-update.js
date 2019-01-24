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
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:white;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;.parent{display:flex;flex-flow:column;position:absolute;right:0px;align-items:flex-end;border-radius:25px 25px 0 0;text-align:center;padding-right:20px;height:80px;width:100%;background:lightgreen;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(100,100,240,1);font-size:20px;}.sideDate{display:flex;margin:0;font-family:'Montserrat',sans-serif;font-size:30px;line-height:30px;padding-top:10px;}"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__DayGrid",
  componentId: "sc-1099gq1-1"
})(["display:grid;position:relative;grid-template-columns:60px 1fr;position:absolute;grid-auto-rows:30px;border-radius:0px 0 25px 0;grid-gap:1px;width:70%;right:0px;margin-top:80px;height:75vh;overflow-y:scroll;overscroll-behavior:contain;.timeCell{display:grid;grid-column:1/3;margin-top:2px;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid white;border-radius:20px 0 0 20px;background:rgba(100,100,240,0.2);color:grey;&:hover{opacity:0.5;}}.lower{display:grid;grid-column:2/3;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid white;background:rgba(243,241,244,1);color:grey;&:hover{opacity:0.5;}}"]);
var DUMMY_DATA = [{
  time: 8,
  am: true,
  q2: 815,
  q3: 830,
  q4: 845
}, {
  time: 9,
  am: true,
  q2: 915,
  q3: 930,
  q4: 945
}, {
  time: 10,
  am: true,
  q2: 1015,
  q3: 1030,
  q4: 1045
}, {
  time: 11,
  am: true,
  q2: 1115,
  q3: 1130,
  q4: 1145
}, {
  time: 12,
  am: false,
  pm: true,
  q2: 1215,
  q3: 1230,
  q4: 1245
}, {
  time: 1,
  am: false,
  pm: true,
  q2: 115,
  q3: 130,
  q4: 145
}, {
  time: 2,
  am: false,
  pm: true,
  q2: 215,
  q3: 230,
  q4: 245
}, {
  time: 3,
  am: false,
  pm: true,
  q2: 315,
  q3: 330,
  q4: 345
}, {
  time: 4,
  am: false,
  pm: true,
  q2: 415,
  q3: 430,
  q4: 445
}, {
  time: 5,
  am: false,
  pm: true,
  q2: 515,
  q3: 530,
  q4: 545
}, {
  time: 6,
  am: false,
  pm: true,
  q2: 615,
  q3: 630,
  q4: 645
}, {
  time: 7,
  am: false,
  pm: true,
  q2: 715,
  q3: 730,
  q4: 745
}, {
  time: 8,
  am: false,
  pm: true,
  q2: 815,
  q3: 830,
  q4: 845
}, {
  time: 9,
  am: false,
  pm: true,
  q2: 915,
  q3: 930,
  q4: 945
}];

var SingleDay = function SingleDay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('MMMM D, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(props.date.toString()).format('dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, DUMMY_DATA.map(function (timeblock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "timeCell number",
      value: timeblock.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q2,
      key: timeblock.q2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q3,
      key: timeblock.q3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q4,
      key: timeblock.q4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);

/***/ })

})
//# sourceMappingURL=schedule.js.52330eb54552961d974a.hot-update.js.map