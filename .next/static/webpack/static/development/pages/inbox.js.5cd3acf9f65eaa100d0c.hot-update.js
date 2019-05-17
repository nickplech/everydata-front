webpackHotUpdate("static/development/pages/inbox.js",{

/***/ "./components/InboxComponent.js":
/*!**************************************!*\
  !*** ./components/InboxComponent.js ***!
  \**************************************/
/*! exports provided: default, INBOX_QUERY_TOTAL, INBOX_QUERY_OPEN, INBOX_QUERY_CLOSED, INBOX_QUERY_NEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INBOX_QUERY_TOTAL", function() { return INBOX_QUERY_TOTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INBOX_QUERY_OPEN", function() { return INBOX_QUERY_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INBOX_QUERY_CLOSED", function() { return INBOX_QUERY_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INBOX_QUERY_NEW", function() { return INBOX_QUERY_NEW; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/InboxComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_SEEN_MUTATION($id: ID!, $seen: Boolean) {\n    updateClient(id: $id, seen: $seen) {\n      id\n      seen\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  query INBOX_QUERY_TOTAL {\n    clients(orderBy: createdAt_DESC) {\n      id\n      fullName\n      firstName\n      lastName\n      businessName\n      cellPhone\n      email\n      seen\n      handled\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query NEW_TOTAL_QUERY($seen: Boolean) {\n    clientsConnection(where: { seen: $seen }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query CLOSED_TOTAL_QUERY($handled: Boolean) {\n    clientsConnection(where: { handled: $handled }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query OPEN_TOTAL_QUERY($handled: Boolean) {\n    clientsConnection(where: { handled: $handled }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query INBOX_QUERY_OPEN($handled: Boolean) {\n    clients(where: { handled: $handled }, orderBy: createdAt_DESC) {\n      id\n      fullName\n      firstName\n      lastName\n      businessName\n      cellPhone\n      email\n      seen\n      handled\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query INBOX_QUERY_CLOSED($handled: Boolean) {\n    clients(where: { handled: $handled }, orderBy: createdAt_DESC) {\n      id\n      fullName\n      cellPhone\n      firstName\n      lastName\n      businessName\n      email\n      seen\n      handled\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query INBOX_QUERY_NEW($seen: Boolean) {\n    clients(where: { seen: $seen }, orderBy: createdAt_DESC) {\n      id\n      fullName\n      firstName\n      lastName\n      businessName\n      cellPhone\n      email\n      seen\n      handled\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Container = react_pose__WEBPACK_IMPORTED_MODULE_6__["default"].ul({
  notShut: {
    delayChildren: 200,
    staggerChildren: 60
  },
  shut: {
    delay: 300
  },
  initialPose: 'shut'
});
var P = react_pose__WEBPACK_IMPORTED_MODULE_6__["default"].li({
  notShut: {
    y: 0,
    opacity: 1
  },
  shut: {
    y: 20,
    opacity: 0
  }
});
var Content = react_pose__WEBPACK_IMPORTED_MODULE_6__["default"].div({
  closed: {
    height: 0
  },
  open: {
    height: 'auto'
  }
});
var INBOX_QUERY_NEW = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());
var INBOX_QUERY_CLOSED = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2());
var INBOX_QUERY_OPEN = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject3());
var OPEN_TOTAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject4());
var CLOSED_TOTAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject5());
var NEW_TOTAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject6());
var INBOX_QUERY_TOTAL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject7());
var UPDATE_SEEN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject8());
var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InboxComponent__StatsDisplay",
  componentId: "p6h6s4-0"
})(["position:relative;grid-column:1;grid-row:1;background:white;text-align:center;width:100%;height:100%;border-radius:5px 5px 5px 5px;box-shadow:1px 1px 2px 3px rgba(0,0,0,0.05);z-index:10;h3{border-radius:5px 5px 0px 0px;}.parent{display:flex;flex-flow:column;position:relative;right:0px;align-items:flex-start;border-radius:15px 15px 0 0;text-align:center;padding-left:20px;margin-top:1px;height:65px;width:100%;background:#3d5866;}.sideDate{display:flex;color:white;margin:0;font-family:'Montserrat',sans-serif;font-size:26px;line-height:26px;padding-top:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(230,230,230,0.8);font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DateLine = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "InboxComponent__DateLine",
  componentId: "p6h6s4-1"
})(["font-family:'Montserrat',sans-serif;font-size:15px;line-height:16px;position:relative;.ago{font-size:11px;}"]);
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "InboxComponent__Name",
  componentId: "p6h6s4-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:280px;padding-left:20px;h4{margin:0;}"]);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "InboxComponent__Info",
  componentId: "p6h6s4-3"
})(["font-family:'Montserrat',sans-serif;position:relative;display:grid;grid-template-columns:1fr 40px;justify-items:flex-start;color:rgba(20,20,20,0.4);margin:0px 0;transition:0.2s;padding:10px 0 10px 10px;background:transparent;border:none;border-bottom:1px solid rgba(20,110,220,0.2);width:100%;text-transform:uppercase;font-size:18px;outline:none;cursor:pointer;&:hover{padding-left:15px;}&:active{color:blue;}"]);
var Number = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InboxComponent__Number",
  componentId: "p6h6s4-4"
})(["display:flex;font-weight:700;padding-left:10px;float:right;"]);
var CalendarLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InboxComponent__CalendarLayout",
  componentId: "p6h6s4-5"
})(["display:grid;grid-template-columns:300px 1fr;grid-template-rows:1fr;height:calc(100vh - 80px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:65px;grid-column-gap:8px;grid-row-gap:8px;bottom:0;z-index:-1;"]);
var Nothing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "InboxComponent__Nothing",
  componentId: "p6h6s4-6"
})(["display:block;font-size:20px;margin-top:125px;opacity:0.4;text-align:center;"]);
var StyledSubStatus = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InboxComponent__StyledSubStatus",
  componentId: "p6h6s4-7"
})(["display:grid;grid-column:2;background:rgba(200,200,200,0.1);box-shadow:0 0 5px 3px rgba(0,0,0,0.05);margin:0 auto;border-radius:5px 5px 5px 5px;z-index:-1;padding:10px 10px;height:100%;width:98%;position:absolute;overflow:scroll;overscroll-behavior:contain;ul{list-style:none;padding:0;}"]);
var ClientPill = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "InboxComponent__ClientPill",
  componentId: "p6h6s4-8"
})(["padding:10px 10px;display:flex;justify-content:center;align-items:center;max-width:600px;border-radius:5px;margin:10px 0px;min-height:50px;box-shadow:0 0 4px 2px rgba(0,0,0,0.1);cursor:pointer;transition:0.4s;&:hover{background:rgba(10,110,220,0.3);}&:active{box-shadow:none;}h5{font-size:16px;margin:5px;font-weight:400;font-family:'Montserrat',sans-serif;}.content{overflow:hidden;font-size:18px;border-radius:5px;background:rgba(240,240,240,0.9);color:black;min-width:330px;width:100%;margin-bottom:0px;}.content-wrapper{padding:20px 10px;}"]);

var InboxComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(InboxComponent, _Component);

  function InboxComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InboxComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InboxComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      clients: [],
      seen: '',
      open: false,
      inbox: '',
      isOpen: false,
      loading: false // componentDidMount() {
      //   setTimeout(this.toggle, 1000)
      // }

    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      return _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveToState",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Searching...');
                _context.next = 3;
                return _this.setState({
                  isOpen: false,
                  clients: [],
                  loading: true
                });

              case 3:
                _context.next = 5;
                return client.query({
                  query: INBOX_QUERY_TOTAL
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return _this.setState({
                  loading: false,
                  clients: res.data.clients,
                  inbox: 'total'
                });

              case 8:
                _context.next = 10;
                return _this.toggle();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "saveToState2",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('Searching...');
                _context2.next = 3;
                return _this.setState({
                  isOpen: false,
                  clients: [],
                  loading: true
                });

              case 3:
                _context2.next = 5;
                return client.query({
                  query: INBOX_QUERY_NEW,
                  variables: {
                    seen: false
                  }
                });

              case 5:
                res = _context2.sent;
                _context2.next = 8;
                return _this.setState({
                  loading: false,
                  clients: res.data.clients,
                  inbox: 'new'
                });

              case 8:
                _context2.next = 10;
                return _this.toggle();

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "saveToState3",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('Searching...');
                _context3.next = 3;
                return _this.setState({
                  isOpen: false,
                  clients: [],
                  loading: true
                });

              case 3:
                _context3.next = 5;
                return client.query({
                  query: INBOX_QUERY_OPEN,
                  variables: {
                    handled: false
                  }
                });

              case 5:
                res = _context3.sent;
                _context3.next = 8;
                return _this.setState({
                  loading: false,
                  clients: res.data.clients,
                  inbox: 'open'
                });

              case 8:
                _context3.next = 10;
                return _this.toggle();

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "saveToState4",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e, client) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('Searching...');
                _context4.next = 3;
                return _this.setState({
                  isOpen: false,
                  clients: [],
                  loading: true
                });

              case 3:
                _context4.next = 5;
                return client.query({
                  query: INBOX_QUERY_CLOSED,
                  variables: {
                    handled: true
                  }
                });

              case 5:
                res = _context4.sent;
                _context4.next = 8;
                return _this.setState({
                  loading: false,
                  clients: res.data.clients,
                  inbox: 'closed'
                });

              case 8:
                _context4.next = 10;
                return _this.toggle();

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "updateClient",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, i, updateClientMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.setState({
                  open: open === i ? false : i
                });

                _context5.next = 3;
                return _this.setState({
                  seen: id
                });

              case 3:
                console.log(_this.state.seen);
                _context5.next = 6;
                return updateClientMutation({
                  variables: {
                    id: _this.state.seen,
                    seen: true
                  }
                });

              case 6:
                res = _context5.sent;
                console.log(res);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10, _x11) {
        return _ref5.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(InboxComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalendarLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          color: 'white',
          margin: 0,
          background: 'rgba(20,110,240,1)',
          textTransform: 'uppercase'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "Inbox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: NEW_TOTAL_QUERY,
          variables: {
            seen: false
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, function (_ref6) {
          var clientsConnection = _ref6.data.clientsConnection,
              loading = _ref6.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 448
            },
            __self: this
          }, "loading...");
          if (!clientsConnection) return null;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
            value: _this2.state.inbox,
            onClick: function onClick(e) {
              return _this2.saveToState2(e, client);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 451
            },
            __self: this
          }, "New", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 456
            },
            __self: this
          }, clientsConnection.aggregate.count && clientsConnection.aggregate.count));
        }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
          value: _this2.state.inbox,
          onClick: function onClick(e) {
            return _this2.saveToState(e, client);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          },
          __self: this
        }, "Total Leads", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: _Pagination__WEBPACK_IMPORTED_MODULE_5__["PAGINATION_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, function (_ref7) {
          var data = _ref7.data,
              loading = _ref7.loading,
              error = _ref7.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 471
            },
            __self: this
          }, "Loading...");
          var count = data.clientsConnection.aggregate.count;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 474
            },
            __self: this
          }, count && count);
        }), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: OPEN_TOTAL_QUERY,
          variables: {
            handled: false
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, function (_ref8) {
          var clientsConnection = _ref8.data.clientsConnection,
              loading = _ref8.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 480
            },
            __self: this
          }, "loading...");
          if (!clientsConnection) return null;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
            value: _this2.state.inbox,
            onClick: function onClick(e) {
              return _this2.saveToState3(e, client);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 483
            },
            __self: this
          }, "Open", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 488
            },
            __self: this
          }, clientsConnection.aggregate.count && clientsConnection.aggregate.count));
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: CLOSED_TOTAL_QUERY,
          variables: {
            handled: true
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          },
          __self: this
        }, function (_ref9) {
          var clientsConnection = _ref9.data.clientsConnection,
              loading = _ref9.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 498
            },
            __self: this
          }, "loading...");
          if (!clientsConnection) return null;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
            value: _this2.state.inbox,
            onClick: function onClick(e) {
              return _this2.saveToState4(e, client);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 501
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 505
            },
            __self: this
          }, " Closed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 506
            },
            __self: this
          }, clientsConnection.aggregate.count && clientsConnection.aggregate.count));
        }));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
        mutation: UPDATE_SEEN_MUTATION,
        variables: {
          seen: true,
          id: this.state.seen
        },
        refetchQueries: [{
          query: NEW_TOTAL_QUERY,
          variables: {
            seen: false
          }
        }, {
          query: INBOX_QUERY_NEW,
          variables: {
            seen: false
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, function (updateClient, _ref10) {
        var loading = _ref10.loading,
            error = _ref10.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533
          },
          __self: this
        }, "loading...");
        if (_this2.state.loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          },
          __self: this
        }, "loading..."));
        if (_this2.state.clients.length < 1) return _this2.state.inbox ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 543
          },
          __self: this
        }, "There are currently no ", _this2.state.inbox, " submissions")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 551
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
          pose: isOpen ? 'notShut' : 'shut',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        }, _this2.state.clients.map(function (client, i) {
          var id = client.id;
          if (client.seen === true) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
            key: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 558
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClientPill, {
            onClick: function onClick() {
              return _this2.setState({
                open: open === i ? false : i
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 559
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 566
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 567
            },
            __self: this
          }, client.fullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateLine, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 568
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["distanceInWordsToNow"])(client.createdAt, {
            addSuffix: true
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "ago",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 572
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'dddd MMMM Do, YYYY ')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
            className: "content",
            pose: open === i ? 'open' : 'closed',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 580
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "content-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 584
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 585
            },
            __self: this
          }, "First Name: ", client.firstName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 586
            },
            __self: this
          }, "Last Name: ", client.lastName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 587
            },
            __self: this
          }, "Business: ", client.businessName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 588
            },
            __self: this
          }, "Phone: ", client.cellPhone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 589
            },
            __self: this
          }, "Email: ", client.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 590
            },
            __self: this
          }, "Form Submitted:", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'MMM Do, YYYY'), " at", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'h:mm a'))))));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
            key: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 602
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClientPill, {
            style: {
              background: 'rgba(20,220,110,.4'
            },
            onClick: function onClick() {
              return _this2.updateClient(id, i, updateClient);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 603
            },
            __self: this
          }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 610
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 611
            },
            __self: this
          }, client.fullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateLine, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 612
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["distanceInWordsToNow"])(client.createdAt, {
            addSuffix: true
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "ago",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 616
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'dddd MMMM Do, YYYY ')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
            className: "content",
            pose: open === i ? 'open' : 'closed',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 624
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "content-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 628
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 629
            },
            __self: this
          }, "First Name: ", client.firstName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 630
            },
            __self: this
          }, "Last Name: ", client.lastName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 631
            },
            __self: this
          }, "Business: ", client.businessName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 632
            },
            __self: this
          }, "Phone: ", client.cellPhone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 633
            },
            __self: this
          }, "Email: ", client.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 634
            },
            __self: this
          }, "Form Submitted:", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'MMM Do, YYYY'), " at", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'h:mm a'))))));
        })));
      }));
    }
  }]);

  return InboxComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InboxComponent);


/***/ })

})
//# sourceMappingURL=inbox.js.5cd3acf9f65eaa100d0c.hot-update.js.map