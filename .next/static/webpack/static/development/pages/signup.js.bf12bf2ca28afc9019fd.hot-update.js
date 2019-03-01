webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Step.js":
/*!****************************!*\
  !*** ./components/Step.js ***!
  \****************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Step.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _getPrototypeOf(Step).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          isActive = _this$props.isActive,
          displayPrevious = _this$props.displayPrevious,
          displayNext = _this$props.displayNext,
          displaySubmit = _this$props.displaySubmit,
          component = _this$props.component,
          children = _this$props.children;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component) : children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Previous, {
        isActive: displayPrevious,
        goToPreviousStep: function goToPreviousStep() {
          return _this.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Next, {
        isActive: displayNext,
        goToNextStep: function goToNextStep() {
          return _this.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submit, {
        isActive: displaySubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Step;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Next =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Next, _React$Component2);

  function Next() {
    _classCallCheck(this, Next);

    return _possibleConstructorReturn(this, _getPrototypeOf(Next).apply(this, arguments));
  }

  _createClass(Next, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isActive = this.props.isActive;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: function onClick() {
          return _this2.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Next");
    }
  }]);

  return Next;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Previous =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Previous, _React$Component3);

  function Previous() {
    _classCallCheck(this, Previous);

    return _possibleConstructorReturn(this, _getPrototypeOf(Previous).apply(this, arguments));
  }

  _createClass(Previous, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var isActive = this.props.isActive;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: function onClick() {
          return _this3.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Previous");
    }
  }]);

  return Previous;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Submit =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Submit, _React$Component4);

  function Submit() {
    _classCallCheck(this, Submit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Submit).apply(this, arguments));
  }

  _createClass(Submit, [{
    key: "render",
    value: function render() {
      var isActive = this.props.isActive;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Submit");
    }
  }]);

  return Submit;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=signup.js.bf12bf2ca28afc9019fd.hot-update.js.map