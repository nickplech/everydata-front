webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/TextDashboard.js":
/*!*************************************!*\
  !*** ./components/TextDashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _DayName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DayName */ "./components/DayName.js");
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimePicker */ "./components/TimePicker.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/TextDashboard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var StyledDashboard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__StyledDashboard",
  componentId: "sc-1ccjow0-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:3;grid-template-rows:1fr 80%;grid-template-columns:1fr;width:100%;height:100%;background-color:rgba(220,220,220,0.3);border-radius:25px;z-index:-1;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__Flex",
  componentId: "sc-1ccjow0-1"
})(["display:flex;justify-content:flex-end;.flexChild{display:flex;}"]);
var Flexer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__Flexer",
  componentId: "sc-1ccjow0-2"
})(["display:flex;flex-flow:column;.center{margin:0 20px;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "TextDashboard__Logo",
  componentId: "sc-1ccjow0-3"
})(["margin-top:15px;margin-right:15px;"]);
var ButtonRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__ButtonRow",
  componentId: "sc-1ccjow0-4"
})(["display:flex;width:100%;height:50px;align-items:center;justify-content:space-evenly;"]);
var RemIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__RemIcon",
  componentId: "sc-1ccjow0-5"
})(["display:flex;padding:20px;background:blueviolet;border-radius:50%;"]);
var DateSelector = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__DateSelector",
  componentId: "sc-1ccjow0-6"
})(["position:absolute;bottom:400px;right:16px;display:grid;width:89%;min-height:135px;grid-template-rows:35px 1fr;margin-top:75px;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:white;align-self:center;.month{width:100%;display:flex;height:35px;background:rgba(50,150,250,0.6);grid-row:1;align-content:center;align-items:center;justify-content:center;color:blueviolet;}"]);
var Day = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextDashboard__Day",
  componentId: "sc-1ccjow0-7"
})(["display:flex;grid-row:2;flex-flow:row wrap;align-content:center;justify-content:center;.days{display:flex;margin:3px;width:30px;height:30px;background:lightskyblue;outline:none;border:none;&:hover{background:lavender;}&:active{background:lavender;}}"]);

var TextDashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(TextDashboard, _Component);

  function TextDashboard() {
    _classCallCheck(this, TextDashboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextDashboard).apply(this, arguments));
  }

  _createClass(TextDashboard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDashboard, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
          className: "flexChild",
          src: "../static/img/perfectdayreminders.png",
          alt: "perfect day reminders",
          width: "100px",
          height: "100px",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateSelector, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "month",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "January"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Day, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Su",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Mo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Tu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "We",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Th",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Fr",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayName__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weekDay: "Sa",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "days",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })));
      });
    }
  }]);

  return TextDashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextDashboard);

/***/ })

})
//# sourceMappingURL=client.js.07fa75a4c7fe5c57ad38.hot-update.js.map