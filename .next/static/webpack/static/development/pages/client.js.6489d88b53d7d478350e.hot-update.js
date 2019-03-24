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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _DaySelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DaySelector */ "./components/DaySelector.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimePicker */ "./components/TimePicker.js");
/* harmony import */ var _Submitted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Submitted */ "./components/Submitted.js");
/* harmony import */ var _SingleClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SingleClient */ "./components/SingleClient.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");

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
  var data = _taggedTemplateLiteral(["\n  mutation SEND_TEXT_MUTATION(\n    $to: String!\n    $text: String!\n    $client: ID!\n    $user: ID!\n    $confirmationStatus: String!\n  ) {\n    createTextReminder(\n      to: $to\n      text: $text\n      client: $client\n      user: $user\n      confirmationStatus: $confirmationStatus\n    ) {\n      id\n      text\n      user {\n        id\n      }\n      client {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var SEND_TEXT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TEXT_TEMPLATES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "ReviewMessage__Form",
  componentId: "sc-1kkiazb-0"
})(["display:grid;grid-template-columns:280px 40px 1fr 100px;grid-template-rows:70px 1fr;align-items:flex-end;width:100%;height:100%;padding:20px 20px;z-index:5;border-radius:20px;border:5px solid white;box-shadow:1px 0 4px 2px rgba(0,0,0,0.1);background-color:rgba(240,240,240,1);"]);
var CharCount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ReviewMessage__CharCount",
  componentId: "sc-1kkiazb-1"
})(["font-size:11px;grid-column:3;grid-row:2;justify-self:flex-end;margin:2px 0;z-index:100;"]);
var Message = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "ReviewMessage__Message",
  componentId: "sc-1kkiazb-2"
})(["grid-column:3;grid-row:2;position:relative;z-index:6;margin:0 10px;font-family:'Montserrat',sans-serif;color:rgba(20,20,20,0.7);width:100%;min-width:250px;padding:10px;height:100%;line-height:22px;max-height:140px;border-radius:10px;font-size:1.5rem;resize:none;border:none;background:rgba(250,250,250,1);box-shadow:0 0 4px 3px rgba(0,0,0,0.05);&:focus{outline:none;}"]);
var Error = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReviewMessage__Error",
  componentId: "sc-1kkiazb-3"
})(["display:block;position:absolute;min-width:300px;width:30%;text-align:center;padding:10px;background:rgba(180,110,20,0.9);color:white;border-radius:5px;bottom:15px;box-shadow:0 16px 24px 2px rgba(0,0,0,0.1),0 6px 10px 5px rgba(0,0,0,0.1),0 8px 10px -5px rgba(0,0,0,0.2);right:20px;z-index:999;"]);
var Send = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ReviewMessage__Send",
  componentId: "sc-1kkiazb-4"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:none;width:75px;font-size:2rem;grid-column:4;grid-row:2;justify-self:flex-end;height:75px;font-size:1.8rem;border-radius:50%;outline:none;cursor:pointer;transition:0.1s;box-shadow:0 0 5px 3px rgba(0,0,0,0.1);&:active{box-shadow:none;}&[disabled]{opacity:0.5;}&:hover{transform:scale(1.1);}"]);

var MessageBody = function MessageBody() {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
        lineNumber: 149
      },
      __self: this
    }, function (_ref2) {
      var data = _ref2.data;
      var defaultTemplate = data.textTemplates[0].content.replace('<business>', business).replace('<phone>', phone);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewMessage, {
        seededMessage: defaultTemplate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      });
    });
  });
};

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
      text: _this.props.seededMessage,
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["addDays"])(new Date(), 3),
      message: 'Appointment Reminder has Been Sent'
    });

    _defineProperty(_assertThisInitialized(_this), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "saveDateToState", function (e) {
      _this.setState({
        date: e.target.value
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
      var textMessage = this.props.text.replace('<time>', time).replace('<date>', date);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
        mutation: SEND_TEXT_MUTATION,
        variables: {
          to: this.props.cellPhone.toString(),
          text: this.state.text,
          client: this.props.id,
          user: me.id,
          confirmationStatus: 'UNCONFIRMED'
        },
        refetchQueries: [{
          query: _SingleClient__WEBPACK_IMPORTED_MODULE_9__["ALL_CLIENTS_REMINDERS"],
          variables: {
            client: this.props.id
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, function (createTextReminder, _ref3) {
        var error = _ref3.error,
            loading = _ref3.loading,
            called = _ref3.called;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
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
              }, _callee);
            }));

            return function (_x) {
              return _ref4.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "Appointment Reminder Failed to Send. Please Try Again Shortly"), !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Submitted__WEBPACK_IMPORTED_MODULE_8__["default"], {
          message: _this2.state.message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DaySelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
          saveDateToState: _this2.saveDateToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, {
          readOnly: true,
          name: "text",
          value: textMessage,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharCount, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, defaultTemplate.length, " of 160"), defaultTemplate.length < 160 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Send, {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, "Send")));
      });
    }
  }]);

  return ReviewMessage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReviewMessage);


/***/ })

})
//# sourceMappingURL=client.js.6489d88b53d7d478350e.hot-update.js.map