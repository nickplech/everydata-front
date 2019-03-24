webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/SingleClient.js":
/*!************************************!*\
  !*** ./components/SingleClient.js ***!
  \************************************/
/*! exports provided: default, SINGLE_CLIENT_QUERY, ALL_CLIENTS_REMINDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CLIENTS_REMINDERS", function() { return ALL_CLIENTS_REMINDERS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Clients */ "./components/Clients.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CLIENT_QUERY", function() { return _Clients__WEBPACK_IMPORTED_MODULE_7__["SINGLE_CLIENT_QUERY"]; });

/* harmony import */ var _ScrollToBottomComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ScrollToBottomComponent */ "./components/ScrollToBottomComponent.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleClient.js";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_CLIENTS_REMINDERS($client: ID!) {\n    textReminders(client: $client, orderBy: createdAt_ASC) {\n      id\n      text\n      createdAt\n      updatedAt\n      confirmationStatus\n      user {\n        id\n      }\n      client {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var ALL_CLIENTS_REMINDERS = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var GridSub = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "SingleClient__GridSub",
  componentId: "sc-4ocb50-0"
})(["display:grid;grid-column:2;grid-row:1;background-color:white;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;height:100%;width:100%;position:relative;overflow:hidden;&:after{width:calc(100% - 300px);position:fixed;display:flex;margin:0 auto;content:'Appointment Reminder Log';justify-content:center;border-bottom:2px solid grey;line-height:28px;color:white;border-radius:20px 20px 0 0;padding:2px 10px;background:#3d5866;}"]);
var Lister = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "SingleClient__Lister",
  componentId: "sc-4ocb50-1"
})(["position:absolute;display:flex;flex-flow:column;width:100%;height:100%;box-sizing:border-box;padding-left:6px;background:white;overscroll-behavior:contain;overflow-y:scroll;"]);
var TextChunk = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "SingleClient__TextChunk",
  componentId: "sc-4ocb50-2"
})(["display:flex;height:140px;margin:0px 30px;padding:0px;border-top:1.5px solid rgba(220,220,220,0.4);&:first-child{margin-top:30px;border-top:none;}.message-text{align-self:center;background:rgba(220,220,220,0.8);font-family:'Montserrat',sans-serif;color:black;display:inline-flex;font-size:12px;padding:10px 14px;margin:30px 0;border-radius:10px;width:40%;max-width:600px;@media (min-width:1200px){font-size:13px;}}.confirmationStatus{display:inline-flex;justify-content:center;flex-direction:column;margin-left:10%;}"]);
var Nothing = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2.withConfig({
  displayName: "SingleClient__Nothing",
  componentId: "sc-4ocb50-3"
})(["display:block;font-size:20px;margin-top:150px;opacity:0.5;text-align:center;"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "SingleClient__P",
  componentId: "sc-4ocb50-4"
})(["font-size:10px;opacity:0.7;margin:0;"]);
var PU = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "SingleClient__PU",
  componentId: "sc-4ocb50-5"
})(["font-size:10px;margin:0;color:rgba(50,50,50,0.6);"]);
var PG = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "SingleClient__PG",
  componentId: "sc-4ocb50-6"
})(["font-size:10px;margin:0;color:rgba(10,150,10,0.6);"]);
var PR = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "SingleClient__PR",
  componentId: "sc-4ocb50-7"
})(["font-size:10px;margin:0;color:rgba(250,50,50,0.6);"]);

var SingleClient =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleClient, _Component);

  function SingleClient(props) {
    var _this;

    _classCallCheck(this, SingleClient);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleClient).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "scrollToBottom", function () {
      _this.myRef.current.scrollIntoView();
    });

    _this.myRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(SingleClient, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToBottom();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.myRef);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridSub, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _Clients__WEBPACK_IMPORTED_MODULE_7__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, "No Client Found for ", _this2.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: ALL_CLIENTS_REMINDERS,
          variables: {
            client: _this2.props.id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, "Loading...");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, "Error: ", error.message);
          if (data.textReminders.length < 1) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nothing, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "You Haven't Sent ", client.firstName, " Any Reminders Yet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToBottomComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            style: {
              float: 'left',
              clear: 'both'
            },
            ref: _this2.myRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }));
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, "Client | ", client.firstName, " ", client.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lister, {
            myRef: _this2.myRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, data.textReminders.map(function (message) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextChunk, {
              key: message.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "message-text",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            }, message.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "confirmationStatus",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198
              },
              __self: this
            }, message.confirmationStatus === 'UNCONFIRMED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PU, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              },
              __self: this
            }, message.confirmationStatus), message.confirmationStatus === 'CONFIRMED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PG, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              },
              __self: this
            }, message.confirmationStatus), message.confirmationStatus === 'CANCELED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PR, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: this
            }, message.confirmationStatus), message.updatedAt !== message.createdAt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: this
            }, "on", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(message.updatedAt, 'MMMM Do, YYYY h:mm a')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 220
              },
              __self: this
            }, "Sent:", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(message.createdAt, 'MMMM Do, YYYY h:mm a'))));
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToBottomComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            style: {
              float: 'left',
              clear: 'both'
            },
            ref: _this2.myRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }))));
        });
      }));
    }
  }]);

  return SingleClient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleClient);


/***/ })

})
//# sourceMappingURL=client.js.782a117e6fa01af10f15.hot-update.js.map