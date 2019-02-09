webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/MessageList.js":
/*!***********************************!*\
  !*** ./components/MessageList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/MessageList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Lister = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MessageList__Lister",
  componentId: "sc-1k725i1-0"
})(["position:absolute;display:flex;flex-flow:column;padding-bottom:20px;box-sizing:border-box;padding-left:6px;width:calc(100% - 330px);height:calc(100% - 450px);overflow-y:scroll;background:white;.message{display:flex;align-content:center;margin:0px 30px;padding:0px;border-bottom:1.5px solid rgba(220,220,220,0.4);}.message-text{align-self:center;background:rgba(220,220,220,0.8);font-family:'Montserrat',sans-serif;color:black;display:block;font-size:12px;padding:10px 14px;margin:12px 0;border-radius:8px;width:50%;height:80%;max-width:600px;min-width:300px;}"]);
var DUMMY_DATA = [{
  senderId: 'perborgen',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}, {
  senderId: 'janedoe',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}, {
  senderId: 'janedoe',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}, {
  senderId: 'janedoe',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}, {
  senderId: 'janedoe',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}, {
  senderId: 'janedoe',
  text: 'This is the office of Dr. Plechas confirming your appt at 4:00 pm - Mon, Sep 26. Please reply "Confirm" or "Cancel". Questions? Call 7149537373'
}];

var MessageList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList() {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageList).apply(this, arguments));
  }

  _createClass(MessageList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lister, {
        className: "message-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, DUMMY_DATA.map(function (message, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "message",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "message-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, message.text));
      }));
    }
  }]);

  return MessageList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MessageList);

/***/ })

})
//# sourceMappingURL=client.js.e819f9859d52965d2183.hot-update.js.map