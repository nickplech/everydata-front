webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/TabParent.js":
/*!*********************************!*\
  !*** ./components/TabParent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UpdateUserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateUserProfile */ "./components/UpdateUserProfile.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubscriptionManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubscriptionManagement */ "./components/SubscriptionManagement.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UpdateScheduleSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateScheduleSettings */ "./components/UpdateScheduleSettings.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/TabParent.js";








var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabParent__Styled",
  componentId: "sc-1tmt3av-0"
})(["text-align:left;max-width:", ";margin:0 auto;padding:2rem;padding-top:0;"], function (props) {
  return props.theme.innerWidth;
});

var TabParent = function TabParent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me,
        error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: {
        id: 'tab1'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"].Tab, {
      id: "tab1",
      title: "Profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: me.id,
      cellPhone: me.cellPhone,
      email: me.email,
      businessName: me.businessName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"].Tab, {
      id: "tab2",
      title: "Schedule",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateScheduleSettings__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"].Tab, {
      id: "tab3",
      title: "Subscription",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubscriptionManagement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabParent);

/***/ })

})
//# sourceMappingURL=account.js.d0e861ef2c512dfb8d1a.hot-update.js.map