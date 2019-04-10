webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/TextInput */ "./components/styles/TextInput.js");
/* harmony import */ var _styles_ChatStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ChatStyles */ "./components/styles/ChatStyles.js");
/* harmony import */ var _Message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message.js */ "./components/Message.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Chat.js";

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







var Chatroom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chatroom, _React$Component);

  function Chatroom(props) {
    var _this;

    _classCallCheck(this, Chatroom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chatroom).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "slideChat", function () {
      var toggleChat = _this.state.isOpen ? false : true;

      _this.setState({
        isOpen: toggleChat
      });
    });

    _this.state = {
      chats: [{
        username: 'Perfect Day Reminders',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "Welcome to Perfect Day Reminders, if you have any questions please feel free to ask."),
        img: './static/img/perfectdayreminders.png'
      }],
      isOpen: false
    };
    _this.submitMessage = _this.submitMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Chatroom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToBot();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToBot();
    }
  }, {
    key: "scrollToBot",
    value: function scrollToBot() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.chats).scrollTop = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.chats).scrollHeight;
    }
  }, {
    key: "submitMessage",
    // addText = () => {
    //   this.setState({ inputText: e.target.value })
    // }
    value: function submitMessage(e) {
      var _this2 = this;

      e.preventDefault();
      this.setState({
        chats: this.state.chats.concat([{
          username: 'Username',
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.msg).value),
          img: './static/img/perfectdayreminders.png'
        }])
      }, function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this2.refs.msg).value = '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var username = 'Username';
      var chats = this.state.chats;
      var isOpen = this.state.isOpen;
      var tooShort = chats.length < 1;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ChatStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        open: isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        onClick: this.slideChat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Click Here", isOpen ? ' to Minimize' : ' for Support'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "chats",
        ref: "chats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, chats.map(function (chat) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          chat: chat,
          user: username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmit: function onSubmit(e) {
          return _this3.submitMessage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        ref: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: tooShort,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return Chatroom;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chatroom);

/***/ })

})
//# sourceMappingURL=index.js.02017c0d4b778124fb37.hot-update.js.map