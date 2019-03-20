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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clients */ "./components/Clients.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CLIENT_QUERY", function() { return _Clients__WEBPACK_IMPORTED_MODULE_6__["SINGLE_CLIENT_QUERY"]; });

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleClient.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_CLIENTS_REMINDERS($clientId: ID!) {\n    textReminders(clientId: $clientId, orderBy: createdAt_ASC) {\n      id\n      text\n      createdAt\n      updatedAt\n      user {\n        id\n      }\n      client {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ALL_CLIENTS_REMINDERS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var GridSub = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleClient__GridSub",
  componentId: "sc-4ocb50-0"
})(["display:grid;grid-column:2;grid-row:1;background-color:transparent;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;height:100%;width:100%;overscroll-behavior:contain;overflow:scroll;&:after{width:100%;position:fixed;display:flex;margin:0 auto;content:'Appointment Reminder Log';justify-content:center;line-height:28px;color:white;border-radius:20px 20px 0 0;padding:2px 10px;background:rgba(20,110,240,1);}"]);
var Lister = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleClient__Lister",
  componentId: "sc-4ocb50-1"
})(["position:relative;display:flex;flex-flow:column;box-sizing:border-box;padding-left:6px;overflow-y:scroll;background:white;"]);
var TextChunk = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleClient__TextChunk",
  componentId: "sc-4ocb50-2"
})(["display:flex;align-content:center;margin:0px 30px;padding:0px;border-top:1.5px solid rgba(220,220,220,0.4);&:first-child{margin-top:30px;border-top:none;}.message-text{align-self:center;background:rgba(220,220,220,0.8);font-family:'Montserrat',sans-serif;color:black;display:inline-flex;font-size:12px;padding:10px 14px;margin:30px 0;border-radius:8px;width:40%;height:80%;max-width:600px;min-width:300px;@media (min-width:1200px){font-size:13px;}}.confirmationStatus{display:inline-flex;}"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "SingleClient__P",
  componentId: "sc-4ocb50-3"
})(["font-size:12px;"]);

var SingleClient =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleClient, _Component);

  function SingleClient() {
    _classCallCheck(this, SingleClient);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleClient).apply(this, arguments));
  }

  _createClass(SingleClient, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridSub, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _Clients__WEBPACK_IMPORTED_MODULE_6__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "No Client Found for ", _this.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: ALL_CLIENTS_REMINDERS,
          variables: {
            clientId: _this.props.id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, "Client | ", client.firstName, " ", client.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lister, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, data.textReminders.map(function (message, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextChunk, {
              key: message.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "message-text",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, message.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "confirmationStatus",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: this
            }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(message.createdAt, 'MMMM Do, YYYY h:mm a'))));
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
//# sourceMappingURL=client.js.bee28fea402ba6ac8fbb.hot-update.js.map