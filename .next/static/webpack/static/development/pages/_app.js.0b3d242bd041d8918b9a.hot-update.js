webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CartItem.js";





var ConfirmationStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "CartItem__ConfirmationStyles",
  componentId: "sc-1rm9l7o-0"
})(["padding:0rem 0px;margin:0 10px;border-bottom:1px solid ", ";color:black;align-items:center;grid-template-columns:auto 10px;&:hover{background:rgba(100,100,230,0.2);}a{color:black;display:block;font-size:12px;padding:6px 0 0 0;cursor:pointer;}p{display:block;color:blue;margin:0;font-size:12px;line-height:10px;padding-bottom:12px;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // first check if that item exists
  if (!cartItem.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "This client has been deleted"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/client',
      query: {
        id: cartItem.client.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, cartItem.client.firstName, " ", cartItem.client.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, cartItem.time), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};

CartItem.propTypes = {
  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ })

})
//# sourceMappingURL=_app.js.0b3d242bd041d8918b9a.hot-update.js.map