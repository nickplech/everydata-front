webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/ReviewMessage.js":
/*!*************************************!*\
  !*** ./components/ReviewMessage.js ***!
  \*************************************/
/*! exports provided: default, TEXT_TEMPLATES_QUERY, SEND_TEXT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TEMPLATES_QUERY", function() { return TEXT_TEMPLATES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_TEXT_MUTATION", function() { return SEND_TEXT_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DaySelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DaySelector */ "./components/DaySelector.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimePicker */ "./components/TimePicker.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ReviewMessage.js";

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query TEXT_TEMPLATES_QUERY {\n    textTemplates {\n      id\n      name\n      content\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SEND_TEXT_MUTATION(\n    $to: String!\n    $text: String!\n    $client: ID!\n    $user: ID!\n  ) {\n    createTextReminder(to: $to, text: $text, client: $client, user: $user) {\n      id\n      user {\n        id\n      }\n      text\n      client {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SEND_TEXT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TEXT_TEMPLATES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var Back = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "ReviewMessage__Back",
  componentId: "sc-1kkiazb-0"
})(["display:grid;grid-template-columns:300px 1fr;grid-template-rows:70px 1fr;align-items:flex-end;width:100%;height:100%;padding:20px 20px;z-index:5;border-radius:20px;border:5px solid white;box-shadow:1px 0 4px 2px rgba(0,0,0,0.1);background-color:rgba(240,240,240,1);"]); // const CharCount = styled.div`
//   display: block;
//   font-size: 11px;
//   bottom: 70px;
//   right: 40px;
//   position: absolute;
//   z-index: 10px;
// `

var MessageEdit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "ReviewMessage__MessageEdit",
  componentId: "sc-1kkiazb-1"
})(["grid-column:2;grid-row:2;position:relative;z-index:6;width:100%;padding:10px;height:100%;border-radius:10px;font-size:2rem;resize:none;border:none;box-shadow:0 0 4px 3px rgba(0,0,0,0.05);&:focus{outline:none;}"]);
var Send = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ReviewMessage__Send",
  componentId: "sc-1kkiazb-2"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:none;width:75px;font-size:2rem;height:75px;font-size:1.8rem;border-radius:50%;outline:none;cursor:pointer;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);&:active{box-shadow:none;}&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);}"]);

var ReviewMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(ReviewMessage, _Component);

  function ReviewMessage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReviewMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReviewMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      time: '8:00 am',
      date: '',
      text: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleDate", function (e) {
      _this.setState({
        date: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleText", function (e, message) {
      _this.setState({
        text: message
      });
    });

    return _this;
  }

  _createClass(ReviewMessage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var time = this.state.time;
      var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(this.state.date, 'ddd, MMM Do');
      var text = this.state.text;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        var business = me.businessName.toString();
        var phone = me.cellPhone.toString();
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
          query: TEXT_TEMPLATES_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data;
          var defaultTemplate = data.textTemplates[0];
          var message = defaultTemplate.content.replace('<business>', business).replace('<phone>', phone).replace('<time>', time).replace('<date>', date);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
            mutation: SEND_TEXT_MUTATION,
            variables: {
              to: _this2.props.cellPhone,
              text: _this2.state.text,
              client: _this2.props.id,
              user: me.id
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, function (createTextReminder, _ref3) {
            var error = _ref3.error,
                loading = _ref3.loading,
                called = _ref3.called;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Back, {
              onSubmit:
              /*#__PURE__*/
              function () {
                var _ref4 = _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                  var res;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          e.preventDefault();
                          _context.next = 3;
                          return createTextReminder();

                        case 3:
                          res = _context.sent;
                          console.log(res);

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }(),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }, !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submitted, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              },
              __self: this
            }, "Appointment Reminder Successfully Sent For Delivery"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DaySelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
              handleDate: _this2.handleDate,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MessageEdit, {
              readOnly: true,
              max: 160,
              name: "text",
              type: "text",
              onChange: _this2.handleText(message),
              value: _this2.state.text,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Send, {
              type: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            }, "Send")));
          });
        });
      });
    }
  }]);

  return ReviewMessage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReviewMessage);


/***/ })

})
//# sourceMappingURL=client.js.cb9049f795157364260e.hot-update.js.map