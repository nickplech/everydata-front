webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/SubscriptionManagement.js":
/*!**********************************************!*\
  !*** ./components/SubscriptionManagement.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TakeMyMoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TakeMyMoney */ "./components/TakeMyMoney.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SubscriptionManagement.js";







var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SubscriptionManagement__Inner",
  componentId: "sc-2xkqcy-0"
})(["text-align:center;max-width:", ";margin:0 auto;padding:2rem 0;padding-top:0;.dates{font-family:montserrat,sans-serif;text-transform:uppercase;opacity:0.5;&:focus{opacity:1;}&:active{opacity:1;}}.button{margin:0 20px;}"], function (props) {
  return props.theme.innerWidth;
});
var ORDER_DATA = [{
  title: 'Express Account',
  id: '1',
  price: 2999
}, {
  title: 'Classic Account',
  id: 'plan_Ea8mmCdhMNHxxk',
  price: 3999
}, {
  title: 'HIPAA Compliant',
  id: '3',
  price: 1000
}];

var handleClick = function handleClick(e) {
  e.preventDefault();
};

var SubscriptionManagement = function SubscriptionManagement() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, ORDER_DATA.map(function (buttons, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: i,
        email: me.email,
        businessName: me.businessName,
        title: buttons.title,
        price: buttons.price,
        plan: buttons.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "button",
        onClick: handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, buttons.title));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionManagement);

/***/ })

})
//# sourceMappingURL=account.js.14222f28fbc70b46b754.hot-update.js.map