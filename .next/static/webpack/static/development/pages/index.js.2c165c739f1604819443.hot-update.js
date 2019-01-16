webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Phone.js":
/*!*****************************!*\
  !*** ./components/Phone.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Phone.js";

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




var MainPhone = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Phone__MainPhone",
  componentId: "v8wj01-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:190px 125px 45px 1fr;background-image:url('../static/img/bg-phone2.png');bottom:0%;width:425px;min-height:550px;z-index:4;background-repeat:no-repeat;background-size:cover;background-position:center top;padding-left:35px;margin:0 auto;.main-phone{position:absolute;-webkit-animation-name:phone-slide;-webkit-animation-duration:1s;-webkit-animation-delay:1s;animation-name:phone-slide;animation-duration:1s;animation-delay:1s;animation-timing-function:ease;animation-fill-mode:forwards;visibility:hidden;}.med-text1{grid-row:2/3;height:auto;width:270px;top:35%;left:35px;z-index:5;}.med-text2{margin-left:245px;grid-row:3/4;height:auto;width:110px;top:97%;left:283px;z-index:5;}.med-text3{grid-row:4/5;height:auto;width:270px;top:66%;left:35px;z-index:5;}"]);
var Bubble = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 150
    }
  }
});
var Shade = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

var Phone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Phone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Phone)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isVisible: false
    });

    return _this;
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainPhone, {
        className: "main-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "i1",
        className: "med-text1",
        src: "../static/img/medical-reminder.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "i2",
        className: "med-text2",
        src: "../static/img/confirm2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "i3",
        className: "med-text3",
        src: "../static/img/confirmrem.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })));
    }
  }]);

  return Phone;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Phone);

/***/ })

})
//# sourceMappingURL=index.js.2c165c739f1604819443.hot-update.js.map