webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CallToAction.js";


var GradientDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CallToAction__GradientDiv",
  componentId: "sc-1eyjrc-0"
})(["display:flex;font-family:'Monteserrat',sans-serif;background-color:#33c5ff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%2333c5ff'/%3E%3Cstop offset='1' stop-color='%231cffe8'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2331ccff'/%3E%3Cstop offset='1' stop-color='%2312f5fc'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%232fd2ff'/%3E%3Cstop offset='1' stop-color='%2308d3f8'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%232dd9ff'/%3E%3Cstop offset='1' stop-color='%230aaaea'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%232be0ff'/%3E%3Cstop offset='1' stop-color='%230c85db'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%2329e8ff'/%3E%3Cstop offset='1' stop-color='%230e64cb'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%2326efff'/%3E%3Cstop offset='1' stop-color='%231048bc'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%2324f6ff'/%3E%3Cstop offset='1' stop-color='%231230ae'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2322feff'/%3E%3Cstop offset='1' stop-color='%23131ca0'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2320fff8'/%3E%3Cstop offset='1' stop-color='%231c1392'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%231efff0'/%3E%3Cstop offset='1' stop-color='%232a1484'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%231cffe8'/%3E%3Cstop offset='1' stop-color='%23341477'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E\");background-size:cover;flex-flow:column;background-position:center;justify-content:center;align-items:center;min-height:230px;.title{color:white;margin:0;font-size:16px;}.sub{color:white;margin:0;margin-bottom:15px;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "CallToAction__StyledButton",
  componentId: "sc-1eyjrc-1"
})(["display:flex;padding:20px 0px;align-items:center;justify-content:center;background:white;color:gray;border:none;border-radius:40px;width:250px;text-transform:uppercase;font-size:16px;box-shadow:2px 3px 2px 2px rgba(0,0,0,0.2);cursor:pointer;&:active{outline:none;box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);}&:focus{outline:none;}"]);

var CallToAction = function CallToAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GradientDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Hold On to Your Wallet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Try Perfect Day Reminders On Us + No Credit Card Required!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Start Your Free Trial"));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ })

})
//# sourceMappingURL=index.js.fe4aac3940469d81dafb.hot-update.js.map