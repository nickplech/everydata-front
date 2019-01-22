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
  heart: 'M350,35.1h-18.4V29.66A29.75,29.75,0,0,0,301.91,0h-.44a29.75,29.75,0,0,0-29.66,29.66V35.1h-164V29.66A29.75,29.75,0,0,0,78.13,0h-.44A29.75,29.75,0,0,0,48,29.66V35.1H29.66A29.75,29.75,0,0,0,0,64.76V348.32A29.75,29.75,0,0,0,29.66,378H350a29.75,29.75,0,0,0,29.66-29.66V64.76A29.75,29.75,0,0,0,350,35.1Zm-66.29-5.44a17.81,17.81,0,0,1,17.79-17.79h.44a17.83,17.83,0,0,1,17.79,17.79V82.42a17.83,17.83,0,0,1-17.79,17.79h-.44a17.81,17.81,0,0,1-17.79-17.79Zm-223.78,0A17.81,17.81,0,0,1,77.69,11.86h.44A17.83,17.83,0,0,1,95.93,29.66V82.42a17.83,17.83,0,0,1-17.79,17.79h-.44A17.81,17.81,0,0,1,59.9,82.42ZM350,354.25H29.66a6,6,0,0,1-5.93-5.93V139.83H355.9V348.32A6,6,0,0,1,350,354.25Z',
  bookmark: 'M357,0H102C73.95,0,51,22.95,51,51v408l178.5-76.5L408,459V51C408,22.95,385.05,0,357,0z'
};
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
    scale: 0.8
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
      pathIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gotoNext", function () {
      var pathIndex = _this.state.pathIndex;
      var nextIndex = pathIndex + 1;

      _this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
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
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0  375.13 327.15",
        fill: "rgb(70, 200, 120)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        pose: pathIds[this.state.pathIndex],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextButton, {
        onClick: this.gotoNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Refreshingly Simple Text Message Appointment Reminders"));
    }
  }]);

  return IconMorph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IconMorph);

/***/ })

})
//# sourceMappingURL=index.js.462dcfc64734ae27baba.hot-update.js.map