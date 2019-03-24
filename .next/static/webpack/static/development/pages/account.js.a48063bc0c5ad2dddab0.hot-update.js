webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/SlideDown.js":
/*!*********************************!*\
  !*** ./components/SlideDown.js ***!
  \*********************************/
/*! exports provided: default, OPEN_SLIDE_QUERY, TOGGLE_SLIDE_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SLIDE_QUERY", function() { return OPEN_SLIDE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_SLIDE_MUTATION", function() { return TOGGLE_SLIDE_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slidedown */ "./node_modules/react-slidedown/lib/slidedown.js");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SlideDown.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleSlide @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    openSlide @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var OPEN_SLIDE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_SLIDE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SlideDown__Wrap",
  componentId: "sc-2x2b9z-0"
})([".react-slidedown{height:0;transition-property:none;transition-duration:0.5s;transition-timing-function:ease-in-out;}.react-slidedown.transitioning{overflow-y:hidden;}.react-slidedown.closed{display:none;}"]);

var MyDropdown = function MyDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: OPEN_SLIDE_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slidedown__WEBPACK_IMPORTED_MODULE_1__["SlideDown"], {
      className: 'my-dropdown-slidedown',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, data.open ? props.children : null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDropdown);


/***/ })

})
//# sourceMappingURL=account.js.a48063bc0c5ad2dddab0.hot-update.js.map