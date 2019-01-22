webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IconMorph.js":
/*!*********************************!*\
  !*** ./components/IconMorph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flubber */ "./node_modules/flubber/build/flubber.min.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flubber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/IconMorph.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledBody = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "IconMorph__StyledBody",
  componentId: "llhb40-0"
})(["height:40vh;padding:100px 0;flex-flow:column;justify-content:stretch;align-items:center;display:flex;background:#f4f3fa;button{display:flex;border:none;margin-bottom:20px;width:auto;overflow:visible;background:transparent;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;outline:none;color:white;padding:15px 20px;cursor:pointer;color:rgb(70,200,120);font-size:2rem;font-family:'Montserrat',sans-serif;font-weight:400;}"]);
var paths = {
  plane: 'M187.57,0C291.16,0,375.13,67.75,375.13,151.32c0,33.35-13.41,64.17-36.07,89.17l34.85,86.65L226.21,297.46c-15.43.42-32.72,4.16-50,4.61-2,.05-3.92.08-5.86.08C69.88,302.15,0,233.3,0,151.32,0,67.75,84,0,187.57,0m0,41C106.76,41,41,90.51,41,151.32c0,62.6,55.57,109.8,129.28,109.8q2.38,0,4.78-.06c6.93-.18,14.5-1.12,22.52-2.12,8.87-1.1,18-2.24,27.49-2.5l4.64-.13,4.56.92,73.19,14.71L301,255.81,291.41,232l17.25-19c11.61-12.81,25.44-33.89,25.44-61.62C334.1,90.51,268.37,41,187.57,41Z',
  heart: 'M308.31,30.92H292.1v-4.8A26.2,26.2,0,0,0,266,0h-.39a26.2,26.2,0,0,0-26.13,26.13v4.8H95v-4.8A26.2,26.2,0,0,0,68.83,0h-.39A26.2,26.2,0,0,0,42.31,26.13v4.8H26.13A26.2,26.2,0,0,0,0,57.05v249.8A26.2,26.2,0,0,0,26.13,333H308.31a26.2,26.2,0,0,0,26.13-26.13V57.05A26.2,26.2,0,0,0,308.31,30.92Zm-58.4-4.8a15.69,15.69,0,0,1,15.68-15.68H266a15.71,15.71,0,0,1,15.68,15.68V72.61A15.71,15.71,0,0,1,266,88.28h-.39a15.69,15.69,0,0,1-15.68-15.68Zm-197.14,0A15.69,15.69,0,0,1,68.44,10.45h.39A15.71,15.71,0,0,1,84.51,26.13V72.61A15.71,15.71,0,0,1,68.83,88.28h-.39A15.69,15.69,0,0,1,52.77,72.61Zm255.54,286H26.13a5.3,5.3,0,0,1-5.23-5.23V123.19H313.53V306.86A5.3,5.3,0,0,1,308.31,312.08Z',
  bookmark: 'M357,0H102C73.95,0,51,22.95,51,51v408l178.5-76.5L408,459V51C408,22.95,385.05,0,357,0z'
};
var text = {
  first: 'Refreshingly Simple Text Message Appointment Reminders',
  second: 'Refreshingly Simple Text Message Appointment Reminders',
  third: 'Refreshingly Simple Text Message Appointment Reminders'
};
var textIds = Object.keys(text);
var pathIds = Object.keys(paths);

var morphTransition = function morphTransition(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["tween"])({
    from: 0,
    to: 1
  }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(from, to));
};

var Icon = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].path(pathIds.reduce(function (config, id) {
  config[id] = {
    d: paths[id],
    transition: morphTransition
  };
  return config;
}, {}));
var NextButton = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 0.9
  }
});

var IconMorph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconMorph, _React$Component);

  function IconMorph() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconMorph);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconMorph)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pathIndex: 0,
      buttonText: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gotoNext", function () {
      var pathIndex = _this.state.pathIndex;
      var nextIndex = pathIndex + 1;

      _this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextText", function () {
      var buttonText = _this.state.buttonText;
      var nextText = buttonText + 1;

      _this.setState({
        buttonText: nextText > textIds.length - 1 ? 0 : nextText
      });
    });

    return _this;
  }

  _createClass(IconMorph, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 375.13 327.15",
        fill: "rgb(70, 200, 120)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        pose: pathIds[this.state.pathIndex],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextButton, {
        onClick: this.gotoNext,
        onChange: this.nextText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.buttonText));
    }
  }]);

  return IconMorph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IconMorph);

/***/ })

})
//# sourceMappingURL=index.js.264cb0813de04f422616.hot-update.js.map