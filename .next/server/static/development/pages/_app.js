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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AutoComplete.js":
/*!************************************!*\
  !*** ./components/AutoComplete.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/AutoComplete.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SEARCH_CLIENTS_QUERY($searchTerm: String!) {\n    clients(\n      orderBy: updatedAt_DESC\n      where: {\n        OR: [\n          { firstName_contains: $searchTerm }\n          { lastName_contains: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      firstName\n      lastName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SEARCH_CLIENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

function routeToClient(client) {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
    pathname: '/client',
    query: {
      id: client.id
    }
  });
}

var AutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AutoComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      clients: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(
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

                _this.setState({
                  loading: true
                });

                _context.next = 4;
                return client.query({
                  query: SEARCH_CLIENTS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 4:
                res = _context.sent;

                _this.setState({
                  clients: res.data.clients,
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(downshift__WEBPACK_IMPORTED_MODULE_2__["resetIdCounter"])();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: routeToClient,
        itemToString: function itemToString(client) {
          return client === null ? '' : client.lastName + ',' + ' ' + client.firstName;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            type: 'search',
            placeholder: 'Search Clients',
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            spellCheck: false,
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, _this2.state.clients.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }), item.lastName, ", ", item.firstName);
        }), !_this2.state.clients.length && !_this2.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, " Nothing Found for ", inputValue)));
      }));
    }
  }]);

  return AutoComplete;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CartItem.js";





var ConfirmationStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "CartItem__ConfirmationStyles",
  componentId: "sc-1rm9l7o-0"
})(["padding:0rem 10px;margin:0 10px;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 10px;a{color:black;font-size:12px;padding:10px 0;&:hover{background:rgba(100,100,230,0.2);}}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  // first check if that item exists
  if (!cartItem.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "This Item has been removed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/client',
      query: {
        id: cartItem.client.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, cartItem.client.firstName, " ", cartItem.client.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: cartItem.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

CartItem.propTypes = {
  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InfoBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoBar */ "./components/InfoBar.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slider */ "./components/Slider.js");
/* harmony import */ var react_svg_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-svg-buttons */ "react-svg-buttons");
/* harmony import */ var react_svg_buttons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_svg_buttons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SignInNoDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SignInNoDisplay */ "./components/SignInNoDisplay.js");
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:1.5rem;margin-left:2rem;display:flex;align-self:center;justify-self:center;position:relative;z-index:0;a{padding:0rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}"], function (props) {
  return props.theme.blue;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:1px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;z-index:-2;}.sub-bar{display:grid;grid-template-columns:50px 295px 1fr;height:45px;align-self:center;border-bottom:1px solid ", ";opacity:1;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
var Plus = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Header__Plus",
  componentId: "sc-2cpreo-2"
})(["cursor:pointer;border:none;margin-top:3px;outline:none;"]);

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Perfect Day Reminders"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignInNoDisplay__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/addclient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plus, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_buttons__WEBPACK_IMPORTED_MODULE_8__["PlusButton"], {
        color: "rgba(100,100,200,1)",
        size: 35,
        thickness: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoComplete__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/InfoBar.js":
/*!*******************************!*\
  !*** ./components/InfoBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./components/Slider.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SuccessCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SuccessCount */ "./components/SuccessCount.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tab */ "./components/Tab.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/InfoBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var StyledBar = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "InfoBar__StyledBar",
  componentId: "ahoxrm-0"
})(["display:flex;position:relative;height:44px;width:100%;margin:0;opacity:1;.tab2{background:purple;height:44px;opacity:0.8;}.tab3{background:blue;height:44px;opacity:0.8;}button{width:150px;}"]);
var Confirmer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "InfoBar__Confirmer",
  componentId: "ahoxrm-1"
})(["display:flex;background:lightseagreen;justify-content:center;text-align:center;align-items:center;color:white;text-transform:uppercase;font-size:10px;padding:5px 20px;position:relative;cursor:pointer;.confirmations{display:inline-block;}"]);

var InfoBar =
/*#__PURE__*/
function (_Component) {
  _inherits(InfoBar, _Component);

  function InfoBar() {
    _classCallCheck(this, InfoBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfoBar).apply(this, arguments));
  }

  _createClass(InfoBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/bulk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "tab2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Bulk Sender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "tab3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Schedule",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: _Slider__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_CART_MUTATION"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, function (toggleCart) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Confirmer, {
            onClick: toggleCart,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "confirmations",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, "Confirmations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuccessCount__WEBPACK_IMPORTED_MODULE_5__["default"], {
            count: me.cart.reduce(function (tally, cartItem) {
              return tally + cartItem.quantity;
            }, 0),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }));
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }));
    }
  }]);

  return InfoBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InfoBar);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Meta.js";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Perfect Day Reminders"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Nav.js";






var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/clients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/hipaa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Hipaa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Sign In"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Page.js";

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
  var data = _taggedTemplateLiteral(["\n\t@font-face {\n\t\tfont-family: 'radnika_next';\n\t\tsrc: url('/static/radnikanext-medium-webfont.woff2')\n      format('woff2');\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t}\n\thtml {\n\t\tbox-sizing: border-box;\n\t\tfont-size: 10px;\n\n\t}\n\t*, *:before, *:after {\n\t\tbox-sizing: inherit;\n\t}\n\tbody {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tfont-size: 1.4rem;\n\t\tline-height: 2;\n\t\tfont-family: 'radnika_next';\n\n\t}\na {\ntext-decoration: none;\ncolor: ", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  red: '#FF0000',
  blue: 'rgba(100,100,230,1)',
  green: 'rgba(50,230,150,1)',
  lightblue: 'rgba(100,160,250,1)',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '100vw',
  innerWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:0rem 0 0 0;"], function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default, REMOVE_FROM_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART_MUTATION", function() { return REMOVE_FROM_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/RemoveFromCart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "emvtd6-0"
})(["font-size:1rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemoveFromCart, _React$Component);

  function RemoveFromCart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RemoveFromCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // 1. first read the cache
      var data = cache.readQuery({
        query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]
      }); // 2. remove that item from the cart

      var cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(function (cartItem) {
        return cartItem.id !== cartItemId;
      }); // 3. write it back to the cache

      cache.writeQuery({
        query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(RemoveFromCart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, function (removeFromCart, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            removeFromCart().catch(function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "\xD7");
      });
    }
  }]);

  return RemoveFromCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(RemoveFromCart, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired // This gets called as soon as we get a response back from the server after a mutation has been performed

});

/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);


/***/ }),

/***/ "./components/SignInNoDisplay.js":
/*!***************************************!*\
  !*** ./components/SignInNoDisplay.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SignInNoDisplay.js";




var SignInNoDisplay = function SignInNoDisplay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return null;
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SignInNoDisplay);

/***/ }),

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Signout.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Signout = function Signout() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Sign Out");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Slider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var ConfList = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Slider__ConfList",
  componentId: "sc-94qe3k-0"
})(["display:flex;font-family:'Montserrat',sans-serif;text-align:center;align-items:center;width:100%;.flexChild{display:block;align-content:center;justify-content:center;width:100%;color:white;}.scroll{height:300px;overflow-y:scroll;overscroll-behavior:contain;overflow-x:hidden;&::-webkit-scrollbar{display:none;}}.confirmed{background:rgba(100,190,90,0.9);}.canceled{background:rgba(200,80,90,0.9);}.unconfirmed{background:grey;}"]);

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        if (!me) return null;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: TOGGLE_CART_MUTATION,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, function (toggleCart) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
            query: LOCAL_STATE_QUERY,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, function (_ref2) {
            var data = _ref2.data;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
              open: data.cartOpen,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }, "calendar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              onClick: toggleCart,
              title: "close",
              className: "exy",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_5__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfList, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "confirmed",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            }, "Confirmed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'green'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            }, me.cart.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                },
                __self: this
              });
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "canceled",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            }, "Canceled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'red'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, me.cart.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                },
                __self: this
              });
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "unconfirmed",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            }, "Unconfirmed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'grey'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, me.cart.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              });
            })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }, "flash messages with date")));
          });
        });
      });
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slider);


/***/ }),

/***/ "./components/SuccessCount.js":
/*!************************************!*\
  !*** ./components/SuccessCount.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SuccessCount.js";



var AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "SuccessCount__AnimationStyles",
  componentId: "sc-1glbnt0-0"
})(["position:relative;.count{display:block;position:relative;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:rotateX(0.5turn);}"]);
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "SuccessCount__Dot",
  componentId: "sc-1glbnt0-1"
})(["background:white;display:inline-block;color:black;border-radius:50%;padding:0.3rem;line-height:2rem;min-width:2.8rem;margin-left:1rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);

var SuccessCount = function SuccessCount(_ref) {
  var count = _ref.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimationStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["TransitionGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 400,
      exit: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, count))));
};

/* harmony default export */ __webpack_exports__["default"] = (SuccessCount);

/***/ }),

/***/ "./components/Tab.js":
/*!***************************!*\
  !*** ./components/Tab.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Tab.js";


var Tabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tab__Tabs",
  componentId: "sc-1pyozuf-0"
})(["display:flex;padding:10px;min-width:150px;height:45px;justify-content:center;align-content:center;align-items:center;.textWhite{color:white;text-transform:uppercase;font-size:10px;}&:hover{background:rgba(240,240,240,0.3);}"]);

var Tab = function Tab(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tabs, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "textWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tab);

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
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      businessName\n      permissions\n      cart {\n        id\n        quantity\n        client {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"]);

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
      lineNumber: 27
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

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:40px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;max-width:700px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:90;display:grid;grid-template-rows:200px 400px auto;overflow-y:scroll;", ";header{margin-bottom:1rem;padding-bottom:1rem;}footer{border-top:5px solid ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:1fr;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;}.exy{cursor:pointer;opacity:0.7;outline:none;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:20;left:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "n5d97g-0"
})(["position:absolute;width:100%;z-index:5;border:1px solid ", ";max-height:50vh;overflow-y:scroll;"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "n5d97g-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;outline:none;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:1.5rem;z-index:0;position:relative;a,button{padding:0rem 2rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;z-index:5;cursor:pointer;&:after{height:2px;background:", ";content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:1.3rem;}@media (max-width:699px){&:after{height:0;background:none;content:'';width:0;position:absolute;transform:none;transition:none;left:50%;margin-top:1.3rem;}}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:flex-end;font-size:1.5rem;}"], function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "xv30qb-0"
})(["background:", ";color:white;display:block;text-align:center;padding:0px 5px;margin:0 auto;font-size:1.5rem;text-transform:uppercase;"], function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 19;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");





function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            var _cache$readQuery = cache.readQuery({
              query: _components_Slider__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STATE_QUERY"]
            }),
                cartOpen = _cache$readQuery.cartOpen;

            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "react-svg-buttons":
/*!************************************!*\
  !*** external "react-svg-buttons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg-buttons");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

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
//# sourceMappingURL=_app.js.map