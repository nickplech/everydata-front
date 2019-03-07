webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/StepList.js":
/*!********************************!*\
  !*** ./components/StepList.js ***!
  \********************************/
/*! exports provided: StepList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepList", function() { return StepList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var StepList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StepList, _React$Component);

  function StepList(props) {
    var _this;

    _classCallCheck(this, StepList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "goToPreviousStep", function () {
      _this.setState({
        currentStep: _this.state.currentStep - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToNextStep", function () {
      if (_this.props.firstName < 1) {
        throw new Error("Please enter your first name");
      } else _this.setState({
        currentStep: _this.state.currentStep + 1
      });
    });

    _this.state = {
      currentStep: 0,
      totalSteps: _this.props.children.length - 1
    };
    return _this;
  }

  _createClass(StepList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child, index) {
        var _this2$state = _this2.state,
            currentStep = _this2$state.currentStep,
            totalSteps = _this2$state.totalSteps;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          isActive: index === currentStep,
          displayPrevious: currentStep > 0,
          displayNext: currentStep < totalSteps,
          // displaySubmit: currentStep === totalSteps,
          goToPreviousStep: function goToPreviousStep() {
            return _this2.goToPreviousStep();
          },
          goToNextStep: function goToNextStep() {
            return _this2.goToNextStep();
          }
        });
      });
      return children;
    }
  }]);

  return StepList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=signup.js.5bf6355a01646579acde.hot-update.js.map