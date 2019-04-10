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
})(["display:flex;grid-row:1;grid-column:2;.hour{background:rgba(10,20,40,1);}.min{background:rgba(10,20,140,1);}"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Timer__Input",
  componentId: "sc-1i1rbud-1"
})(["border:none;border-radius:50%;align-items:center;outline:none;text-align:center;color:white;display:flex;flex-flow:row wrap;cursor:pointer;position:relative;width:35px;height:35px;margin:5px 2px;&:hover{transform:scale(1.1);}&:disabled{opacity:0.4;}"]);
var hourOptions = [{
  value: '1:00',
  label: '1'
}, {
  value: '2:00',
  label: '2'
}, {
  value: '3:00',
  label: '3'
}, {
  value: '4:00',
  label: '4'
}, {
  value: '5:00',
  label: '5'
}, {
  value: '6:00',
  label: '6'
}, {
  value: '7:00',
  label: '7'
}, {
  value: '8:00',
  label: '8'
}, {
  value: '9:00',
  label: '9'
}, {
  value: '10:00',
  label: '10'
}, {
  value: '11:00',
  label: '11'
}, {
  value: '12:00',
  label: '12'
}];
var minOptions = [{
  value: '00'
}, {
  value: '15'
}, {
  value: '30'
}, {
  value: '45'
}];

var Timer = function Timer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, hourOptions.map(function (hour) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
      className: "hour",
      key: hour.value,
      readOnly: true,
      name: hour.value,
      onClick: props.saveTime,
      value: hour.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }), minOptions.map(function (min) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
      disabled: props.time.length < 4,
      className: "min",
      key: min.value,
      readOnly: true,
      name: "minutes",
      onClick: props.saveTimeMin,
      value: min.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

})
//# sourceMappingURL=client.js.f81d8859bd936154291a.hot-update.js.map