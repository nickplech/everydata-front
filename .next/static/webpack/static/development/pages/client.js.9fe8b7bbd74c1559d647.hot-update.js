webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Timer.js";


var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Timer__Div",
  componentId: "sc-1i1rbud-0"
})(["grid-row:1;grid-column:1;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Timer__Input",
  componentId: "sc-1i1rbud-1"
})(["display:inline-flex;cursor:pointer;position:relative;width:50px;height:25px;"]);
var hourOptions = [{
  value: '1',
  label: '1'
}, {
  value: '2',
  label: '2'
}, {
  value: '3',
  label: '3'
}, {
  value: '4',
  label: '4'
}, {
  value: '5',
  label: '5'
}, {
  value: '6',
  label: '6'
}, {
  value: '7',
  label: '7'
}, {
  value: '8',
  label: '8'
}, {
  value: '9',
  label: '9'
}, {
  value: '10',
  label: '10'
}, {
  value: '11',
  label: '11'
}, {
  value: '12',
  label: '12'
}];
var minOptions = [{
  value: '00',
  label: '00'
}, {
  value: '15',
  label: '15'
}, {
  value: '30',
  label: '30'
}, {
  value: '45',
  label: '45'
}];

var Timer = function Timer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, hourOptions.map(function (hour) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
      key: hour.value,
      readOnly: true,
      name: "time",
      onClick: props.saveTime,
      value: hour.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  }), minOptions.map(function (min) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
      key: min.value,
      readOnly: true,
      name: "time",
      onClick: props.saveTime,
      value: min.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

})
//# sourceMappingURL=client.js.9fe8b7bbd74c1559d647.hot-update.js.map