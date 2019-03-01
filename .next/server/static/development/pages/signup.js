module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:rgba(250,0,0,0.5);margin:2rem 0;border-left:5px solid rgba(220,0,0,0.7);p{margin:0;font-weight:100;color:white;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Oops..."), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Oops..."), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/SVG.js":
/*!***************************!*\
  !*** ./components/SVG.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SVG.js";


var BackButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SVG__BackButton",
  componentId: "sc-166xwtd-0"
})(["cursor:pointer;float:'left';position:absolute;transition:0.3s;bottom:-3px;&:hover{transform:scale(1.1);}"]);

var SVG = function SVG(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    display: 'flex',
    fontFamily: 'sans-serif'
  } : _ref$style,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'rgba(20,110,220,.2)' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '50px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '50px' : _ref$height,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 50 50' : _ref$viewBox;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    height: height,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon ".concat(className || ''),
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SVG);

/***/ }),

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default, SIGNUP_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StepList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepList */ "./components/StepList.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step */ "./components/Step.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-text-mask */ "react-text-mask");
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
var SignUpTitle = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h3.withConfig({
  displayName: "Signup__SignUpTitle",
  componentId: "sc-1bh7ije-0"
})(["@import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto');color:rgba(20,110,220,1);font-family:'Pacifico',cursive;font-size:46px;margin-bottom:10px;"]);
var StyledSignUpStepper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Signup__StyledSignUpStepper",
  componentId: "sc-1bh7ije-1"
})(["display:flex;align-items:center;flex-flow:column;"]);
var Submitted = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p.withConfig({
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
          lineNumber: 98
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading,
            called = _ref.called;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSignUpStepper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SignUpTitle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
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
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }), !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submitted, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Submitted! Welcome to Perfect Day Reminders, please log in to begin your Free Trial"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StepList__WEBPACK_IMPORTED_MODULE_4__["StepList"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "A Little About Your Business"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "firstName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "firstName",
          placeholder: "Account Holder's First Name",
          required: true,
          value: _this2.state.firstName.charAt(0).toUpperCase() + _this2.state.firstName.slice(1).trim(),
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "lastName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "lastName",
          placeholder: "Account Holder's Last Name",
          required: true,
          value: _this2.state.lastName.charAt(0).toUpperCase() + _this2.state.lastName.slice(1).trim(),
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "cellPhone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
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
            lineNumber: 175
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "businessName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
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
            lineNumber: 204
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "Choose Your Login Credentials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
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
            lineNumber: 221
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
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
            lineNumber: 233
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "confirmPassword",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
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
            lineNumber: 245
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "plan",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
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
            lineNumber: 257
          },
          __self: this
        }, ORDER_DATA.map(function (plans) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: plans.id,
            value: plans.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
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
            lineNumber: 276
          },
          __self: this
        }, "Sign Up!"))))));
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);


/***/ }),

/***/ "./components/Step.js":
/*!****************************!*\
  !*** ./components/Step.js ***!
  \****************************/
/*! exports provided: Step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVG */ "./components/SVG.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Step.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _getPrototypeOf(Step).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          isActive = _this$props.isActive,
          displayPrevious = _this$props.displayPrevious,
          displayNext = _this$props.displayNext,
          component = _this$props.component,
          children = _this$props.children;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component) : children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Previous, {
        isActive: displayPrevious,
        goToPreviousStep: function goToPreviousStep() {
          return _this.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Next, {
        isActive: displayNext,
        goToNextStep: function goToNextStep() {
          return _this.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    }
  }]);

  return Step;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Next =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Next, _React$Component2);

  function Next() {
    _classCallCheck(this, Next);

    return _possibleConstructorReturn(this, _getPrototypeOf(Next).apply(this, arguments));
  }

  _createClass(Next, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isActive = this.props.isActive;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          float: 'right'
        },
        onClick: function onClick() {
          return _this2.props.goToNextStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Next");
    }
  }]);

  return Next;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Previous =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Previous, _React$Component3);

  function Previous() {
    _classCallCheck(this, Previous);

    return _possibleConstructorReturn(this, _getPrototypeOf(Previous).apply(this, arguments));
  }

  _createClass(Previous, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var isActive = this.props.isActive;
      if (isActive === false) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.props.goToPreviousStep();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SVG__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));
    }
  }]);

  return Previous;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // class Submit extends React.Component {
//   render() {
//     const { isActive } = this.props
//     if (isActive === false) return null
//     return <SickButton type="submit">Submit</SickButton>
//   }
// }




/***/ }),

/***/ "./components/StepList.js":
/*!********************************!*\
  !*** ./components/StepList.js ***!
  \********************************/
/*! exports provided: StepList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepList", function() { return StepList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var StepList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StepList, _React$Component);

  function StepList(props) {
    var _this;

    _classCallCheck(this, StepList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "goToPreviousStep", function () {
      _this.setState({
        currentStep: _this.state.currentStep - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToNextStep", function () {
      _this.setState({
        currentStep: _this.state.currentStep + 1
      });
    });

    _this.state = {
      currentStep: 0,
      totalSteps: _this.props.children.length - 1
    };
    return _this;
  }

  _createClass(StepList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child, index) {
        var _this2$state = _this2.state,
            currentStep = _this2$state.currentStep,
            totalSteps = _this2$state.totalSteps;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          isActive: index === currentStep,
          displayPrevious: currentStep > 0,
          displayNext: currentStep < totalSteps,
          // displaySubmit: currentStep === totalSteps,
          goToPreviousStep: function goToPreviousStep() {
            return _this2.goToPreviousStep();
          },
          goToNextStep: function goToNextStep() {
            return _this2.goToNextStep();
          }
        });
      });
      return children;
    }
  }]);

  return StepList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      firstName\n      lastName\n      cellPhone\n      businessName\n      plan\n      permissions\n      orders {\n        id\n      }\n      appointments {\n        id\n      }\n      cart {\n        id\n        quantity\n        confirmationStatus\n        client {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 16px 24px 2px rgba(0,0,0,0.1),0 6px 10px 5px rgba(0,0,0,0.1),0 8px 10px -5px rgba(0,0,0,0.2);background:white;border:5px solid rgba(20,110,220,0.2);padding:20px;margin:20px 0;margin-top:0px;font-size:1.5rem;line-height:1.5;font-weight:600;position:relative;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding-left:1rem;padding-top:0.7rem;padding-bottom:0.7rem;font-size:1.5rem;border:none;background:transparent;border-bottom:2px solid rgba(20,110,220,1);margin-top:0.8rem;&:focus{outline:0;}}button,input[type='submit']{width:auto;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;margin-top:1rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;margin-bottom:10px;content:'';display:block;background-image:linear-gradient( to right,#272ebd 0%,#0980cd 50%,#272ebd 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "l04z44-0"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:0;margin:0 auto;border-radius:5px;font-size:2rem;padding:0.5rem 1.2rem;font-size:1.8rem;display:inline-block;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);}&:active{box-shadow:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Signup */ "./components/Signup.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/signup.js";



var BackGround = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signup__BackGround",
  componentId: "jf76qp-0"
})(["background:rgba(253,253,253,1);"]);

var SignupPage = function SignupPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackGround, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Signup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ 11:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-text-mask":
/*!**********************************!*\
  !*** external "react-text-mask" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map