webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Reason.js":
/*!******************************!*\
  !*** ./components/Reason.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DeleteReason__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteReason */ "./components/DeleteReason.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Reason.js";



var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Reason__Div",
  componentId: "sc-1sxtxxj-0"
})(["padding:3px 10px;margin:4px 5px;border-width:2px;border-style:solid;background:transparent;color:white;min-width:50px;text-align:center;cursor:pointer;border-radius:25px;list-style:none;transition:0.2s;&:hover{transform:scale(1.1);box-shadow:1px 1px 4px 3px rgba(0,0,0,0.1);}"]);

var Reason = function Reason(_ref) {
  var reason = _ref.reason;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    style: {
      background: "".concat(reason.color),
      color: reason.color === '#F8F8FF' && 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, reason.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteReason__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: reason.id,
    name: reason.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Reason);

/***/ })

})
//# sourceMappingURL=account.js.cfb37f7258a8c6c41bd5.hot-update.js.map