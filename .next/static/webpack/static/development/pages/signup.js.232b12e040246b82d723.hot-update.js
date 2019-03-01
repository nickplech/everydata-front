webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default, SIGNUP_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StepList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepList */ "./components/StepList.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./components/Step.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Signup.js";

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNUP_MUTATION(\n    $firstName: String!\n    $lastName: String!\n    $cellPhone: String!\n    $businessName: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n    $plan: String!\n  ) {\n    signup(\n      firstName: $firstName\n      lastName: $lastName\n      cellPhone: $cellPhone\n      businessName: $businessName\n      email: $email\n      password: $password\n      confirmPassword: $confirmPassword\n      plan: $plan\n    ) {\n      id\n      firstName\n      lastName\n      cellPhone\n      businessName\n      email\n      plan\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var SignUpTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "Signup__SignUpTitle",
  componentId: "sc-1bh7ije-0"
})(["@import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto');color:white;font-family:'Pacifico',cursive;font-size:36px;"]);
var StyledSignUpStepper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Signup__StyledSignUpStepper",
  componentId: "sc-1bh7ije-1"
})(["display:flex;align-items:center;flex-flow:column;"]);
var Submitted = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Signup__Submitted",
  componentId: "sc-1bh7ije-2"
})(["color:green;background:white;padding:15px 15px;border-left:5px solid green;"]);
var ORDER_DATA = [{
  title: 'Test Classic Account',
  id: 'plan_Ea8mmCdhMNHxxk',
  price: 3999
}, {
  title: 'Classic Account',
  id: 'plan_EW7xrpDzOE9d5I',
  price: 3999
}, {
  title: 'HIPAA Compliant',
  id: '3',
  price: 1000
}];

var Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      firstName: '',
      lastName: '',
      cellPhone: '',
      businessName: '',
      email: '',
      password: '',
      confirmPassword: '',
      plan: ''
    });

    _defineProperty(_assertThisInitialized(_this), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNUP_MUTATION,
        variables: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          cellPhone: this.state.cellPhone,
          businessName: this.state.businessName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          plan: this.state.plan
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_9__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading,
            called = _ref.called;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSignUpStepper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SignUpTitle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Create an Account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signup();

                    case 3:
                      _this2.setState({
                        firstName: '',
                        lastName: '',
                        cellPhone: '',
                        businessName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        plan: ''
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submitted, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Submitted! Welcome to Perfect Day Reminders, please log in to begin your Free Trial"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StepList__WEBPACK_IMPORTED_MODULE_4__["StepList"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "A Little About Your Business"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "firstName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "firstName",
          placeholder: "Account Holder's First Name",
          required: true,
          value: _this2.state.firstName,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "lastName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "lastName",
          placeholder: "Account Holder's Last Name",
          required: true,
          value: _this2.state.lastName,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        })), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "cellPhone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Cell Phone Number", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_11___default.a, {
          mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
          type: "text",
          id: "cellPhone",
          name: "cellPhone",
          placeholder: "Phone Number",
          autoComplete: "off",
          required: true,
          value: _this2.state.cellPhone,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "businessName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, "Business Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "businessName",
          placeholder: "Business Name",
          required: true,
          value: _this2.state.businessName,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, "Now Your Login Credentials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "Email",
          required: true,
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          required: true,
          minLength: 6,
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "confirmPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, "Confirm Your Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "confirmPassword",
          placeholder: "Confirm Password",
          value: _this2.state.confirmPassword,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "plan",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "Select Which Plan Works for You:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          style: {
            paddingTop: '3px',
            margin: '30px 0px'
          },
          type: "text",
          name: "plan",
          placeholder: "Appointment Type",
          autoComplete: "off",
          required: true,
          value: _this2.state.plan,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, ORDER_DATA.map(function (plans) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: plans.id,
            value: plans.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258
            },
            __self: this
          }, plans.title);
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            float: 'right'
          },
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "Sign Up!"))))));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);


/***/ })

})
//# sourceMappingURL=signup.js.232b12e040246b82d723.hot-update.js.map