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
        username: 'James Saif',
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "Welcome to Universal Dialers, if you have any questions please feel free to ask."),
        img: './favicon.png'
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
    value: function submitMessage(e) {
      var _this2 = this;

      e.preventDefault();
      this.setState({
        chats: this.state.chats.concat([{
          username: 'James',
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.msg).value),
          img: './favicon.png'
        }])
      }, function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this2.refs.msg).value = '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var username = 'James';
      var chats = this.state.chats;
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ChatStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        open: isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        onClick: this.slideChat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Click Here", isOpen ? ' to Minimize' : ' for Support'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "chats",
        ref: "chats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, chats.map(function (chat) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          chat: chat,
          user: username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmit: function onSubmit(e) {
          return _this3.submitMessage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        ref: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return Chatroom;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chatroom);

/***/ }),

/***/ "./components/DoDisplay.js":
/*!*********************************!*\
  !*** ./components/DoDisplay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage */ "./components/HomePage.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/DoDisplay.js";






var DoDisplay = function DoDisplay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DoDisplay);

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_TextStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/TextStyles */ "./components/styles/TextStyles.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Message.js";



var Message = function Message(_ref) {
  var chat = _ref.chat,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_TextStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "chat ".concat(user === chat.username ? 'right' : 'left'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, user !== chat.username && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: chat.img,
    alt: "".concat(chat.username, "'s profile pic"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), chat.content));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/styles/ChatStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ChatStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var StyledChat = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ChatStyles__StyledChat",
  componentId: "sc-10ypusy-0"
})(["transform:translateY(93.5%);transition:all 0.5s;", ";width:340px;height:600px;background-color:rgba(0,0,0,0.7);border-radius:5px 5px 0 0;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,0.3);position:fixed;margin:0;z-index:999;right:20px;bottom:0;p{margin:0;display:inline-block;}h3{font-family:'Montserrat',sans-serif;background-color:rgba(30,228,148,0.7);color:#fff;margin:0;height:40px;font-weight:300;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;}.chats{box-sizing:border-box;padding:0 20px;margin:10px 0 0;height:510px;overflow-y:scroll;}.chat{background:rgba(255,255,255,0.8);position:relative;padding:5px 13px;font-size:14px;border-radius:10px;list-style:none;float:left;clear:both;margin:10px 0;max-width:200px;}img{width:20px;height:20px;border-radius:50%;position:absolute;top:-10px;left:0px;}.right{float:right;clear:both;}a{text-decoration:none;color:#3498db;}"], function (props) {
  return props.open && "transform: translateY(0);";
});
/* harmony default export */ __webpack_exports__["default"] = (StyledChat);

/***/ }),

/***/ "./components/styles/TextInput.js":
/*!****************************************!*\
  !*** ./components/styles/TextInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "TextInput",
  componentId: "sc-1ar41k8-0"
})(["width:100%;display:flex;flex-direction:row;input{background:rgba(255,255,255,0.5);outline:0;border:2px solid #1ee494;padding:0 5px;height:40px;width:290px;color:white;box-sizing:border-box;font-size:14px;height:40px;background:rgba(30,228,148,0.7);display:flex;align-items:center;}button{background:transparent;border:1px solid #1ee494;height:30px;width:70px;font-size:14px;box-sizing:border-box;cursor:pointer;transition:all 0.3s ease;justify-content:center;height:40px;width:80px;color:white;background:rgba(30,228,148,0.7);display:flex;flex-direction:row;align-items:center;&:focus{outline:none;}&:hover{background:#1ee494;color:#fff;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./components/styles/TextStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/TextStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TextStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TextStyles",
  componentId: "euzuxt-0"
})([".chat{background:rgba(255,255,255,0.8);position:relative;padding:5px 13px;font-size:14px;border-radius:10px;list-style:none;float:left;clear:both;margin:10px 0;max-width:200px;}img{width:25px;height:25px;border-radius:50%;position:absolute;top:-10px;left:-10px;}.right{float:right;clear:both;}a{text-decoration:none;color:#3498db;}"]);
/* harmony default export */ __webpack_exports__["default"] = (TextStyles);

/***/ })

})
//# sourceMappingURL=index.js.eda8461a969166c980d7.hot-update.js.map