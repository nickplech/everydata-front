webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/SVG.js":
/*!***************************!*\
  !*** ./components/SVG.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SVG.js";


var SVG = function SVG(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    display: 'flex',
    fontFamily: 'sans-serif'
  } : _ref$style,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#000' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '50px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '50px' : _ref$height,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 38 34' : _ref$viewBox;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    height: height,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon ".concat(className || ''),
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M19.0675 0C8.5371 0 0 7.092 0 15.8401c0 5.5527 3.4417 10.4345 8.6471 13.2632.0083.0091.0221.0182.0434.0277.8433.3798.41 1.6817-.5651 2.8751-.742.9083-2.1668 1.8444-1.6251 1.8444.8667 0 2.7535-.4018 3.94-1.0597 1.7586-.9752 2.9897-1.8141 4.5758-1.469l-.0013-.0035a22.867 22.867 0 0 0 4.0527.3619c10.5309 0 19.0676-7.0916 19.0676-15.8401C38.1351 7.0921 29.5984 0 19.0675 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SVG);

/***/ }),

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
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVG */ "./components/SVG.js");
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



 // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
          component = _this$props.component,
          children = _this$props.children;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component) : children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Previous, {
        isActive: displayPrevious,
        goToPreviousStep: function goToPreviousStep() {
          return _this.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Next, {
        isActive: displayNext,
        goToNextStep: function goToNextStep() {
          return _this.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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
        style: {
          float: 'right'
        },
        onClick: function onClick() {
          return _this2.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SVG__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));
    }
  }]);

  return Previous;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // class Submit extends React.Component {
//   render() {
//     const { isActive } = this.props
//     if (isActive === false) return null
//     return <SickButton type="submit">Submit</SickButton>
//   }
// }




/***/ })

})
//# sourceMappingURL=signup.js.483e11a3a8ede1c0c062.hot-update.js.map