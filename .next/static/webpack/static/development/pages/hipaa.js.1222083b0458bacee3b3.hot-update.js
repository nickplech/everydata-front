webpackHotUpdate("static/development/pages/hipaa.js",{

/***/ "./components/HipaaCompliant.js":
/*!**************************************!*\
  !*** ./components/HipaaCompliant.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordian */ "./components/Accordian.js");
/* harmony import */ var _Accordian__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accordian__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/HipaaCompliant.js";


var data = [{
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}, {
  title: 'Frequently Asked Question',
  content: "It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to \"auto\" and reuse that."
}, {
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}, {
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}, {
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}, {
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}, {
  title: 'Frequently Asked Question',
  content: "height: 'auto'"
}];

var HipaaCompliant = function HipaaCompliant() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordian__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HipaaCompliant);

/***/ }),

/***/ "./pages/hipaa.js":
/*!************************!*\
  !*** ./pages/hipaa.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Accordian */ "./components/Accordian.js");
/* harmony import */ var _components_Accordian__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Accordian__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HipaaCompliant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HipaaCompliant */ "./components/HipaaCompliant.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/hipaa.js";




var Hipaa = function Hipaa(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HipaaCompliant__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hipaa);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hipaa")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=hipaa.js.1222083b0458bacee3b3.hot-update.js.map