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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MainPhone = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Phone__MainPhone",
  componentId: "v8wj01-0"
})([".main-phone{display:grid;grid-template-columns:1fr;grid-template-rows:190px 125px 45px 1fr;background-image:url('../static/img/bg-phone2.png');bottom:0%;width:425px;min-height:550px;z-index:4;background-repeat:no-repeat;background-size:cover;background-position:center top;padding-left:35px;margin:0 auto;}.med-text1{grid-row:2/3;height:auto;width:270px;top:35%;left:35px;z-index:5;}.med-text2{margin-left:245px;grid-row:3/4;height:auto;width:110px;top:97%;left:283px;z-index:5;}.med-text3{grid-row:4/5;height:auto;width:270px;top:66%;left:35px;z-index:5;}"]);
var PhoneSlide = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  exit: {
    y: '50%'
  },
  enter: {
    y: '0%',
    beforeChildren: true,
    staggerChildren: 200
  },
  transition: {
    y: {
      type: 'tween',
      ease: 'linear'
    },
    default: {
      duration: 3000
    }
  }
}); // opacity: 1,
// delay: 300,
// transition: {
//   y: { type: 'spring', stiffness: 1000, damping: 15 },
//   default: { duration: 500 },

var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
  exit: {
    opacity: 0,
    scale: 0.7
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub2 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
  exit: {
    opacity: 0,
    scale: 0.7
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub3 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
  exit: {
    opacity: 0,
    scale: 0.7
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});

var Phone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    _classCallCheck(this, Phone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Phone).apply(this, arguments));
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainPhone, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneSlide, {
        initialPose: "exit",
        pose: "enter",
        className: "main-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
        key: "bub1",
        id: "i1",
        className: "med-text1",
        src: "../static/img/medical-reminder.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
        key: "bub2",
        id: "i2",
        className: "med-text2",
        src: "../static/img/confirm2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
        key: "bub3",
        id: "i3",
        className: "med-text3",
        src: "../static/img/confirmrem.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
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
//# sourceMappingURL=index.js.79c0404a6e34a5686b08.hot-update.js.map