webpackHotUpdate("static/development/pages/hipaa.js",{

/***/ "./components/Accordian.js":
/*!*********************************!*\
  !*** ./components/Accordian.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Accordian.js";

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





var Content = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  closed: {
    height: 0
  },
  open: {
    height: 'auto'
  }
});
var StyledAccordian = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Accordian__StyledAccordian",
  componentId: "sc-186eyp4-0"
})(["display:flex;flex-flow:column;align-items:center;margin:0;padding:0;.plus{padding:3px 6px;border:2px solid white;border-radius:50%;}#root{display:flex;flex-direction:column;width:400px;color:white;font-family:'PT Sans',Helvetica,sans-serif;}h1{margin-bottom:20px;color:Black;text-align:center;}h2{margin:0;color:white;font-size:16px;width:50%;}.title{cursor:pointer;background-image:linear-gradient( -180deg,rgba(100,100,240,1) 0%,rgba(100,160,220,1) 300px );padding:10px 20px;border-bottom:1px solid rgba(100,100,240,1);}.content{overflow:hidden;font-size:18px;background:rgba(100,220,240,0.4);color:white;width:50%;}.content-wrapper{padding:20px 20px;}"]);
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

var Accordian =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordian, _React$Component);

  function Accordian() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Accordian);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accordian)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    return _this;
  }

  _createClass(Accordian, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAccordian, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Frequently Asked Questions"), data.map(function (_ref, i) {
        var title = _ref.title,
            content = _ref.content;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "title",
          key: i,
          onClick: function onClick() {
            return _this2.setState({
              open: open === i ? false : i
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "plus",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, open === i ? '- ' : '+ '), title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
          className: "content",
          pose: open === i ? 'open' : 'closed',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "content-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, content)));
      }));
    }
  }]);

  return Accordian;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Accordian);

/***/ })

})
//# sourceMappingURL=hipaa.js.5d27c018653d13c67c06.hot-update.js.map