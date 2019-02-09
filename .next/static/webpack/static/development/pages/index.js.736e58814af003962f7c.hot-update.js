webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleDay.js";





var Gear = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
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
var DayView = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__DayView",
  componentId: "sc-1099gq1-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:white;box-shadow:0 1px 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:20px 20px 25px 25px;z-index:-1;.parent{display:flex;flex-flow:column;position:absolute;right:0px;align-items:flex-end;border-radius:15px 15px 0 0;text-align:center;padding-right:20px;margin-top:1px;height:60px;width:100%;background:rgba(100,100,240,1);}.gear{position:absolute;display:flex;left:10px;top:10px;width:25px;height:25px;cursor:pointer;z-index:50;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(230,230,230,0.8);font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.sideDate{display:flex;color:white;margin:0;font-family:'Montserrat',sans-serif;font-size:26px;line-height:26px;padding-top:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__DayGrid",
  componentId: "sc-1099gq1-1"
})(["display:grid;position:relative;grid-template-columns:60px 1fr;position:absolute;grid-auto-rows:25px;border-radius:0px 0 25px 0;grid-gap:2px;width:100%;right:0px;margin-top:63px;height:75vh;overflow-y:scroll;overscroll-behavior:contain;.timeCell{display:grid;grid-column:1/3;padding-left:15px;align-items:center;border-bottom:none;border-top:1px solid white;border-radius:20px 0 0 20px;background:rgba(100,100,240,0.2);color:grey;&:hover{opacity:0.5;}}.lower{display:grid;grid-column:2/3;padding-left:5px;align-items:center;border-bottom:none;border-top:1px solid white;background:rgba(243,241,244,1);color:grey;&:hover{opacity:0.5;}}.number{display:grid;font-size:12px;align-self:center;justify-content:flex-start;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var TopBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SingleDay__TopBlock",
  componentId: "sc-1099gq1-2"
})(["display:grid;grid-column:2;width:100%;height:80px;background:black;margin-bottom:10px;"]);
var DATA = [{
  time: 6,
  q2: 615,
  q3: 630,
  q4: 645,
  key1: 152,
  key2: 252,
  main: 0,
  display: '6 am'
}, {
  time: 7,
  q2: 715,
  q3: 730,
  q4: 745,
  key1: 142,
  key2: 242,
  main: 1,
  display: '7 am'
}, {
  time: 8,
  q2: 815,
  q3: 830,
  q4: 845,
  key1: 132,
  key2: 232,
  main: 2,
  display: '8 am'
}, {
  time: 9,
  q2: 915,
  q3: 930,
  q4: 945,
  key1: 122,
  key2: 222,
  main: 3,
  display: '9 am'
}, {
  time: 10,
  main: 4,
  q2: 1015,
  q3: 1030,
  q4: 1045,
  key1: 162,
  key2: 262,
  display: '10 am'
}, {
  time: 11,
  main: 5,
  q2: 1115,
  q3: 1130,
  q4: 1145,
  key1: 172,
  key2: 272,
  display: '11 am'
}, {
  time: 12,
  q2: 1215,
  q3: 1230,
  q4: 1245,
  key1: 182,
  key2: 282,
  main: 6,
  display: '12 pm'
}, {
  time: 1,
  q2: 115,
  q3: 130,
  q4: 145,
  key1: 192,
  key2: 292,
  display: '1 pm',
  main: 7
}, {
  time: 2,
  q2: 215,
  q3: 230,
  q4: 245,
  key1: 1221,
  key2: 2221,
  main: 8,
  display: '2 pm'
}, {
  time: 3,
  q2: 315,
  q3: 330,
  q4: 345,
  key1: 1222,
  key2: 2222,
  main: 9,
  display: '3 pm'
}, {
  time: 4,
  q2: 415,
  q3: 430,
  q4: 445,
  key1: 1227,
  key2: 2227,
  main: 10,
  display: '4 pm'
}, {
  time: 5,
  q2: 515,
  q3: 530,
  q4: 545,
  key1: 12462,
  key2: 22342,
  main: 11,
  display: '5 pm'
}, {
  time: 6,
  q2: 615,
  q3: 630,
  q4: 645,
  key1: 122222,
  key2: 222332,
  main: 12,
  display: '6 pm'
}, {
  time: 7,
  q2: 715,
  q3: 730,
  q4: 745,
  key1: 122994,
  key2: 222745,
  main: 13,
  display: '7 pm'
}, {
  time: 8,
  q2: 815,
  q3: 830,
  q4: 845,
  key1: 122121,
  key2: 22298,
  main: 14,
  display: '8 pm'
}, {
  time: 9,
  q2: 915,
  q3: 930,
  q4: 945,
  key1: 122765,
  key2: 222654,
  main: 15,
  display: '9 pm'
}];

var SingleDay = function SingleDay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: 'calendarsettings' // query: { id: this.props.id },

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
    className: "gear",
    src: "../static/img/gear.png",
    alt: "edit schedule settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sideDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(props.date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(props.date, 'dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }), DATA.map(function (timeblock, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: timeblock.display,
      className: "timeCell number",
      value: timeblock.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, timeblock.display), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q2,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q3,
      key: timeblock.key1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lower",
      value: timeblock.q4,
      key: timeblock.key2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);

/***/ })

})
//# sourceMappingURL=index.js.736e58814af003962f7c.hot-update.js.map