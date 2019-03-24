webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SlideDown.js":
/*!*********************************!*\
  !*** ./components/SlideDown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slidedown */ "./node_modules/react-slidedown/lib/slidedown.js");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SlideDown.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleSlide @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LOCAL_STATE_QUERY = gql(_templateObject());
var TOGGLE_SLIDE_MUTATION = gql(_templateObject2());
var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SlideDown__Wrap",
  componentId: "sc-2x2b9z-0"
})([".react-slidedown{height:0;transition-property:none;transition-duration:0.5s;transition-timing-function:ease-in-out;}.react-slidedown.transitioning{overflow-y:hidden;}.react-slidedown.closed{display:none;}"]);

var MyDropdown = function MyDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slidedown__WEBPACK_IMPORTED_MODULE_1__["SlideDown"], {
    className: 'my-dropdown-slidedown',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.open ? props.children : null));
};

/* harmony default export */ __webpack_exports__["default"] = (MyDropdown);

/***/ })

})
//# sourceMappingURL=_app.js.9b97a54e6dd32088431c.hot-update.js.map