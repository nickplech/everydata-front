webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/TextWindow.js":
/*!**********************************!*\
  !*** ./components/TextWindow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ClientStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ClientStats */ "./components/ClientStats.js");
/* harmony import */ var _components_ReviewMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReviewMessage */ "./components/ReviewMessage.js");
/* harmony import */ var _components_SingleClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SingleClient */ "./components/SingleClient.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/TextWindow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SingleClientStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "TextWindow__SingleClientStyles",
  componentId: "sc-1q1q93p-0"
})(["display:grid;grid-template-columns:270px minmax(420px,1fr);grid-template-rows:minmax(300px,1fr) 260px;height:calc(100% - 140px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:125px;grid-column-gap:8px;bottom:0;z-index:-1;"]);

var TextWindow =
/*#__PURE__*/
function (_Component) {
  _inherits(TextWindow, _Component);

  function TextWindow() {
    _classCallCheck(this, TextWindow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextWindow).apply(this, arguments));
  }

  _createClass(TextWindow, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleClientStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ClientStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleClient__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReviewMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }));
    }
  }]);

  return TextWindow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextWindow);

/***/ })

})
//# sourceMappingURL=client.js.cec442b0a9ebc99a0b42.hot-update.js.map