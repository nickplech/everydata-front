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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AutoComplete.js":
/*!************************************!*\
  !*** ./components/AutoComplete.js ***!
  \************************************/
/*! exports provided: default, SEARCH_CLIENTS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CLIENTS_QUERY", function() { return SEARCH_CLIENTS_QUERY; });
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/AutoComplete.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var data = _taggedTemplateLiteral(["\n  query SEARCH_CLIENTS_QUERY($searchTerm: String!) {\n    clients(\n      orderBy: updatedAt_DESC\n      where: { AND: [{ fullName_contains: $searchTerm }] }\n    ) {\n      id\n      image\n      firstName\n      lastName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SEARCH_CLIENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "AutoComplete__Img",
  componentId: "p41n3x-0"
})(["border-radius:50%;width:40px;height:40px;"]);

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      clients: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(
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
        }, _callee);
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: routeToClient,
        itemToString: function itemToString(client) {
          return client === null ? '' : client.lastName + ',' + ' ' + client.firstName;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
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
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            type: 'search',
            placeholder: 'Search Contacts',
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
              lineNumber: 78
            },
            __self: this
          }));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, _this2.state.clients.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDownItem"], _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
            src: item.image,
            alt: item.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }), item.lastName, ", ", item.firstName);
        }), !_this2.state.clients.length && !_this2.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDownItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
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

/***/ "./components/Client.js":
/*!******************************!*\
  !*** ./components/Client.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DeleteClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteClient */ "./components/DeleteClient.js");
/* harmony import */ var _styles_ClientStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ClientStyles */ "./components/styles/ClientStyles.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Client.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Client =
/*#__PURE__*/
function (_Component) {
  _inherits(Client, _Component);

  function Client() {
    _classCallCheck(this, Client);

    return _possibleConstructorReturn(this, _getPrototypeOf(Client).apply(this, arguments));
  }

  _createClass(Client, [{
    key: "render",
    value: function render() {
      var client = this.props.client;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ClientStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/client',
          query: {
            id: client.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, client.lastName, ", ", client.firstName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, client.cellPhone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, client.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: 'update',
          query: {
            id: client.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteClient__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: this.props.user,
        firstName: client.firstName,
        lastName: client.lastName,
        id: client.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Delete", ' ')));
    }
  }]);

  return Client;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Client, "propTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});



/***/ }),

/***/ "./components/ClientStats.js":
/*!***********************************!*\
  !*** ./components/ClientStats.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleClient */ "./components/SingleClient.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/ClientStats.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "ClientStats__StatsDisplay",
  componentId: "sc-1lv57d8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(240,240,240,1);padding-left:5px;padding-top:5px;width:100%;height:100%;border:5px solid white;border-radius:25px;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);"]);
var Flexer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "ClientStats__Flexer",
  componentId: "sc-1lv57d8-1"
})(["display:flex;flex-flow:column;.gear{position:absolute;height:25px;width:25px;left:215px;margin-top:10px;}.center{font-family:'Open Sans',Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;width:250px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:2px 2px 3px 0 rgba(0,0,0,0.2);}.profile{width:100%;height:100%;text-align:center;}"]);
var ProfilePic = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "ClientStats__ProfilePic",
  componentId: "sc-1lv57d8-2"
})(["position:relative;width:100px;height:100px;margin:30px auto 0 auto;display:block;border-radius:50%;background:#f5e8df;box-shadow:0 0 8px 3px rgba(0,0,0,0.15);&:hover{cursor:pointer;}"]);
var Stat = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "ClientStats__Stat",
  componentId: "sc-1lv57d8-3"
})(["display:flex;font-size:18px;padding:0px 0 10px 0;flex-flow:column;color:white;justify-content:center;align-content:center;align-items:center;background:#3d5866;text-align:center;h5{display:flex;margin:10px auto 0 auto;}p{margin:0;padding:0;}"]);
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h2.withConfig({
  displayName: "ClientStats__StyledTitle",
  componentId: "sc-1lv57d8-4"
})(["margin-top:10px;margin-bottom:20px;display:block;text-align:center;font-size:19px;line-height:28px;padding:0 3px;color:rgba(30,110,240,1);"]);
var StyledSub = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "ClientStats__StyledSub",
  componentId: "sc-1lv57d8-5"
})(["margin:0;font-size:18px;font-weight:400;"]);
var Gear = react_pose__WEBPACK_IMPORTED_MODULE_5___default.a.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  press: {
    scale: 1.1
  }
});

var ClientStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClientStats, _React$Component);

  function ClientStats() {
    _classCallCheck(this, ClientStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClientStats).apply(this, arguments));
  }

  _createClass(ClientStats, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _SingleClient__WEBPACK_IMPORTED_MODULE_1__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "No Client Found for ", _this.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: _this.props.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
          className: "gear",
          src: "../static/img/gear.png",
          alt: "client update",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfilePic, {
          src: client.image,
          width: "100",
          height: "100",
          alt: "Client Profile Pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, client.firstName, " ", client.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stat, {
          className: "stats",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "Submission Recieved:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'M/D/YYYY'), " at", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'h:mm a')))))));
      }));
    }
  }]);

  return ClientStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientStats);

/***/ }),

/***/ "./components/Clients.js":
/*!*******************************!*\
  !*** ./components/Clients.js ***!
  \*******************************/
/*! exports provided: default, ALL_CLIENTS_QUERY, SINGLE_CLIENT_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CLIENTS_QUERY", function() { return ALL_CLIENTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CLIENT_QUERY", function() { return SINGLE_CLIENT_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Client */ "./components/Client.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Clients.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_CLIENTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    clients(first: $first, skip: $skip, orderBy: lastName_ASC) {\n      id\n      firstName\n      lastName\n      fullName\n      cellPhone\n      email\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_CLIENT_QUERY($id: ID!) {\n    client(id: $id) {\n      id\n      firstName\n      lastName\n      fullName\n      cellPhone\n      email\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SINGLE_CLIENT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var ALL_CLIENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Clients__List",
  componentId: "sc-1xmgz6b-0"
})(["display:grid;margin-top:50px;margin-bottom:50px;grid-template-rows:1fr 50vh 1fr;position:relative;z-index:0;"]);
var Clientlisting = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Clients__Clientlisting",
  componentId: "sc-1xmgz6b-1"
})(["display:grid;grid-template-columns:100%;grid-auto-rows:20px;background-color:rgba(20,20,100,0.1);max-width:100%;grid-gap:15px;margin-left:20px;margin-right:20px;margin-top:15px;margin-bottom:15px;padding-top:0px;overflow-y:scroll;padding-bottom:0px;border:1px solid rgba(0,0,0,0.2);"]);

var Clients =
/*#__PURE__*/
function (_Component) {
  _inherits(Clients, _Component);

  function Clients() {
    _classCallCheck(this, Clients);

    return _possibleConstructorReturn(this, _getPrototypeOf(Clients).apply(this, arguments));
  }

  _createClass(Clients, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: _User__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
          user: me.id,
          page: _this.props.page,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: ALL_CLIENTS_QUERY,
          variables: {
            skip: _this.props.page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"],
            first: 10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "Loading...");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, "Error: ", error.message);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Clientlisting, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, data.clients.map(function (client) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Client__WEBPACK_IMPORTED_MODULE_4__["default"], {
              user: me,
              client: client,
              key: client.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            });
          }));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
          user: me.id,
          page: _this.props.page,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }));
      }));
    }
  }]);

  return Clients;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Clients);


/***/ }),

/***/ "./components/DeleteClient.js":
/*!************************************!*\
  !*** ./components/DeleteClient.js ***!
  \************************************/
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
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Clients */ "./components/Clients.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/DeleteClient.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_CLIENT_MUTATION($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      firstName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var DELETE_CLIENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DeleteClient = function DeleteClient(props) {
  var firstName = props.firstName;
  var lastName = props.lastName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: DELETE_CLIENT_MUTATION,
    variables: {
      id: props.id,
      firstName: firstName
    },
    refetchQueries: [{
      query: _Clients__WEBPACK_IMPORTED_MODULE_3__["ALL_CLIENTS_QUERY"]
    }, {
      query: _AutoComplete__WEBPACK_IMPORTED_MODULE_5__["SEARCH_CLIENTS_QUERY"]
    }, {
      query: _Pagination__WEBPACK_IMPORTED_MODULE_4__["PAGINATION_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function (deleteClient, _ref) {
    var error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        if (confirm("Are you sure you want to delete ".concat(firstName, " ").concat(lastName))) {
          deleteClient().catch(function (err) {
            alert(err.message);
          });
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, props.children);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteClient);

/***/ }),

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
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "npw42t-0"
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
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Oops..."), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Oops..."), error.message.replace('GraphQL error: ', '').replace('A unique constraint would be violated on User. Details: Field name = cellPhone', 'This phone number is already in use! Please enter a new cellphone number')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
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











var Container = react_pose__WEBPACK_IMPORTED_MODULE_6___default.a.ul({
  notShut: {
    delayChildren: 200,
    staggerChildren: 60
  },
  shut: {
    delay: 300
  },
  initialPose: 'shut'
});
var P = react_pose__WEBPACK_IMPORTED_MODULE_6___default.a.li({
  notShut: {
    y: 0,
    opacity: 1
  },
  shut: {
    y: 20,
    opacity: 0
  }
});
var Content = react_pose__WEBPACK_IMPORTED_MODULE_6___default.a.div({
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
var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__StatsDisplay",
  componentId: "p6h6s4-0"
})(["position:relative;grid-column:1;grid-row:1;background:white;text-align:center;width:100%;height:100%;border-radius:5px 5px 5px 5px;box-shadow:1px 1px 2px 3px rgba(0,0,0,0.05);z-index:10;h3{border-radius:5px 5px 0px 0px;}.parent{display:flex;flex-flow:column;position:relative;right:0px;align-items:flex-start;border-radius:15px 15px 0 0;text-align:center;padding-left:20px;margin-top:1px;height:65px;width:100%;background:#3d5866;}.sideDate{display:flex;color:white;margin:0;font-family:'Montserrat',sans-serif;font-size:26px;line-height:26px;padding-top:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(230,230,230,0.8);font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DateLine = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__DateLine",
  componentId: "p6h6s4-1"
})(["font-family:'Montserrat',sans-serif;font-size:15px;line-height:16px;position:relative;.ago{font-size:11px;}"]);
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "InboxComponent__Name",
  componentId: "p6h6s4-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:280px;padding-left:20px;h4{margin:0;}"]);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "InboxComponent__Info",
  componentId: "p6h6s4-3"
})(["font-family:'Montserrat',sans-serif;position:relative;display:grid;grid-template-columns:1fr 40px;justify-items:flex-start;color:rgba(20,20,20,0.4);margin:0px 0;transition:0.2s;padding:10px 10px 10px 10px;background:transparent;border:none;border-bottom:1px solid rgba(20,110,220,0.2);width:100%;text-transform:uppercase;font-size:18px;outline:none;cursor:pointer;&:hover{padding-left:15px;}&:active{color:blue;}"]);
var Number = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__Number",
  componentId: "p6h6s4-4"
})(["display:flex;font-weight:700;padding-left:10px;float:right;"]);
var CalendarLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__CalendarLayout",
  componentId: "p6h6s4-5"
})(["display:grid;grid-template-columns:300px 1fr;grid-template-rows:1fr;height:calc(100vh - 100px);width:99%;position:absolute;padding-left:10px;padding-right:10px;margin:0 auto;top:85px;grid-column-gap:8px;grid-row-gap:8px;bottom:0;z-index:-1;"]);
var Nothing = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "InboxComponent__Nothing",
  componentId: "p6h6s4-6"
})(["display:block;font-size:20px;margin-top:125px;opacity:0.4;text-align:center;"]);
var StyledSubStatus = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__StyledSubStatus",
  componentId: "p6h6s4-7"
})(["display:grid;grid-column:2;background:rgba(200,200,200,0.1);box-shadow:0 0 5px 3px rgba(0,0,0,0.05);margin:0 auto;border-radius:5px 5px 5px 5px;z-index:-1;padding:10px 10px 10px 30px;height:100%;width:100%;position:absolute;overflow:scroll;overscroll-behavior:contain;ul{list-style:none;padding:0;}"]);
var ClientPill = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "InboxComponent__ClientPill",
  componentId: "p6h6s4-8"
})(["padding:10px 10px;display:flex;justify-content:center;align-items:center;max-width:600px;border-radius:5px;margin:10px 0px;min-height:50px;box-shadow:0 0 4px 2px rgba(0,0,0,0.1);cursor:pointer;transition:0.4s;&:hover{background:rgba(10,110,220,0.3);}&:active{box-shadow:none;}h5{font-size:16px;margin:5px;font-weight:400;font-family:'Montserrat',sans-serif;}span{font-weight:600;}.content{overflow:hidden;font-size:18px;border-radius:5px;background:rgba(240,240,240,1);color:black;min-width:330px;width:100%;margin-bottom:0px;}.content-wrapper{padding:20px 10px;}"]);

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
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
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
          lineNumber: 434
        },
        __self: this
      }, "Inbox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
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
            lineNumber: 447
          },
          __self: this
        }, function (_ref6) {
          var clientsConnection = _ref6.data.clientsConnection,
              loading = _ref6.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 449
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
              lineNumber: 452
            },
            __self: this
          }, "New", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 457
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
            lineNumber: 465
          },
          __self: this
        }, "Total Leads", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: _Pagination__WEBPACK_IMPORTED_MODULE_5__["PAGINATION_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }, function (_ref7) {
          var data = _ref7.data,
              loading = _ref7.loading,
              error = _ref7.error;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, "Loading...");
          var count = data.clientsConnection.aggregate.count;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 475
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
            lineNumber: 479
          },
          __self: this
        }, function (_ref8) {
          var clientsConnection = _ref8.data.clientsConnection,
              loading = _ref8.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 481
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
              lineNumber: 484
            },
            __self: this
          }, "Open", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 489
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
            lineNumber: 497
          },
          __self: this
        }, function (_ref9) {
          var clientsConnection = _ref9.data.clientsConnection,
              loading = _ref9.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 499
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
              lineNumber: 502
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 506
            },
            __self: this
          }, " Closed"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Number, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 507
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
          lineNumber: 519
        },
        __self: this
      }, function (updateClient, _ref10) {
        var loading = _ref10.loading,
            error = _ref10.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534
          },
          __self: this
        }, "loading...");
        if (_this2.state.loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          },
          __self: this
        }, "loading..."));
        if (_this2.state.clients.length < 1) return _this2.state.inbox ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 543
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544
          },
          __self: this
        }, "There are currently no ", _this2.state.inbox, " submissions")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          },
          __self: this
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubStatus, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
          pose: isOpen ? 'notShut' : 'shut',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 553
          },
          __self: this
        }, _this2.state.clients.map(function (client, i) {
          var id = client.id;
          if (client.seen === true) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
            key: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 559
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
              lineNumber: 560
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 567
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 568
            },
            __self: this
          }, client.fullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateLine, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 569
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["distanceInWordsToNow"])(client.createdAt, {
            addSuffix: true
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "ago",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 573
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'dddd MMMM Do, YYYY ')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
            className: "content",
            pose: open === i ? 'open' : 'closed',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 581
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "content-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 585
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 586
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 586
            },
            __self: this
          }, "First Name:"), " ", client.firstName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 587
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 587
            },
            __self: this
          }, "Last Name:"), "  ", client.lastName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 588
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 588
            },
            __self: this
          }, "Business:"), "  ", client.businessName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 589
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 589
            },
            __self: this
          }, "Phone:"), "  ", client.cellPhone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 590
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 590
            },
            __self: this
          }, "Email:"), "  ", client.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 591
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 592
            },
            __self: this
          }, " Submitted:"), " ", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'MMM Do, YYYY'), " at", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'h:mm a'))))));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(P, {
            key: id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 603
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
              lineNumber: 604
            },
            __self: this
          }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 611
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 612
            },
            __self: this
          }, client.fullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateLine, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 613
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["distanceInWordsToNow"])(client.createdAt, {
            addSuffix: true
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "ago",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 617
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'dddd MMMM Do, YYYY ')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
            className: "content",
            pose: open === i ? 'open' : 'closed',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 625
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "content-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 629
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 630
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 630
            },
            __self: this
          }, "First Name:"), " ", client.firstName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 631
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 631
            },
            __self: this
          }, "Last Name:"), "  ", client.lastName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 632
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 632
            },
            __self: this
          }, "Business:"), "  ", client.businessName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 633
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 633
            },
            __self: this
          }, "Phone:"), "  ", client.cellPhone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 634
            },
            __self: this
          }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 634
            },
            __self: this
          }, "Email:"), "  ", client.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 635
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 636
            },
            __self: this
          }, " Submitted:"), " ", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'MMM Do, YYYY'), " at", ' ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.createdAt, 'h:mm a'))))));
        })));
      }));
    }
  }]);

  return InboxComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InboxComponent);


/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default, PAGINATION_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _InboxComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InboxComponent */ "./components/InboxComponent.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    clientsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var Pagination = function Pagination(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: PAGINATION_QUERY,
    refetchQueries: [{
      query: _InboxComponent__WEBPACK_IMPORTED_MODULE_5__["INBOX_QUERY_TOTAL"],
      variables: {
        skip: props.page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"],
        first: 5
      }
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Loading...");
    var count = data.clientsConnection.aggregate.count;
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);
    var page = props.page;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: {
        pathname: 'inbox',
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "\u2190 Prev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "totes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Page ", props.page, " of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "totalPages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, pages)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: {
        pathname: 'inbox',
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "next",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Next \u2192")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);


/***/ }),

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/PleaseSignIn.js";





var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "PleaseSignIn__Paragraph",
  componentId: "sc-3g5gdn-0"
})(["padding-left:20px;"]);

var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default, SIGNIN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_MUTATION", function() { return SIGNIN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");

var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/SignIn.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      businessName\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var Margin = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "SignIn__Margin",
  componentId: "sc-1kb0r9l-0"
})(["margin:15px 25px;"]);
var StyledP = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p.withConfig({
  displayName: "SignIn__StyledP",
  componentId: "sc-1kb0r9l-1"
})(["margin-bottom:0;margin-top:20px;cursor:pointer;"]);

var SignIn =
/*#__PURE__*/
function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SignIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_this), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(SignIn, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Margin, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, function (signin, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                      return signin();

                    case 3:
                      _this2.setState({
                        email: '',
                        password: ''
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Admin Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "Email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Sign In"))));
      }));
    }
  }]);

  return SignIn;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignIn);


/***/ }),

/***/ "./components/SingleClient.js":
/*!************************************!*\
  !*** ./components/SingleClient.js ***!
  \************************************/
/*! exports provided: default, SINGLE_CLIENT_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Clients */ "./components/Clients.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SINGLE_CLIENT_QUERY", function() { return _Clients__WEBPACK_IMPORTED_MODULE_7__["SINGLE_CLIENT_QUERY"]; });

var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/SingleClient.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var GridSub = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SingleClient__GridSub",
  componentId: "ix5lrq-0"
})(["display:grid;background:#3d5866;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:25px;z-index:-1;height:100%;width:100%;position:relative;overflow:hidden;"]);
var Lister = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SingleClient__Lister",
  componentId: "ix5lrq-1"
})(["position:absolute;display:flex;flex-flow:column;width:100%;height:100%;box-sizing:border-box;padding-left:5px;padding-right:5px;background:white;overscroll-behavior:contain;overflow-y:scroll;"]);
var TextChunk = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SingleClient__TextChunk",
  componentId: "ix5lrq-2"
})(["display:flex;min-height:170px;border-top:1.5px solid rgba(220,220,220,0.4);padding-left:20px;&:first-child{margin-top:30px;border-top:none;}.message-text{background:rgba(220,220,220,0.8);font-family:'Montserrat',sans-serif;color:black;display:inline-flex;align-self:center;font-size:12px;padding:10px 14px;border-radius:10px;min-width:300px;max-width:600px;}.conf{display:inline-flex;padding:0 0 0 40px;justify-content:center;flex-direction:column;}"]);
var Nothing = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h2.withConfig({
  displayName: "SingleClient__Nothing",
  componentId: "ix5lrq-3"
})(["display:block;font-size:20px;margin:10px 0 0 25px;color:white;text-align:left;"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "SingleClient__P",
  componentId: "ix5lrq-4"
})(["font-size:10px;opacity:0.7;margin:0;"]);
var PU = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "SingleClient__PU",
  componentId: "ix5lrq-5"
})(["font-size:10px;margin:0;color:rgba(50,50,50,0.6);"]);
var PG = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "SingleClient__PG",
  componentId: "ix5lrq-6"
})(["font-size:10px;margin:0;color:rgba(10,180,10,0.8);"]);
var PR = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "SingleClient__PR",
  componentId: "ix5lrq-7"
})(["font-size:10px;margin:0;color:rgba(250,50,50,0.8);"]);
var Color = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.span.withConfig({
  displayName: "SingleClient__Color",
  componentId: "ix5lrq-8"
})(["color:rgba(210,210,240,1);"]);

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
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _Clients__WEBPACK_IMPORTED_MODULE_7__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "No Client Found for ", _this.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Submission | ", client.firstName, " ", client.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Name:"), " ", client.fullName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Phone:"), " ", client.cellPhone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nothing, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, "Email:"), " ", client.email)));
      }));
    }
  }]);

  return SingleClient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleClient);


/***/ }),

/***/ "./components/TextWindow.js":
/*!**********************************!*\
  !*** ./components/TextWindow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ClientStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ClientStats */ "./components/ClientStats.js");
/* harmony import */ var _components_SingleClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SingleClient */ "./components/SingleClient.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/TextWindow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SingleClientStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "TextWindow__SingleClientStyles",
  componentId: "sc-1tb4sqx-0"
})(["display:grid;grid-template-columns:270px minmax(420px,1fr);grid-template-rows:minmax(300px,1fr);height:calc(100vh - 80px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:65px;grid-column-gap:8px;bottom:0;z-index:-1;"]);

var TextWindow =
/*#__PURE__*/
function (_Component) {
  _inherits(TextWindow, _Component);

  function TextWindow() {
    _classCallCheck(this, TextWindow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextWindow).apply(this, arguments));
  }

  _createClass(TextWindow, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleClientStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ClientStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SingleClient__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    }
  }]);

  return TextWindow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextWindow);

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
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/User.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      firstName\n      lastName\n      cellPhone\n      businessName\n      permissions\n    }\n  }\n"]);

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
      lineNumber: 20
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

/***/ "./components/styles/ClientStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/ClientStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ClientStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ClientStyles",
  componentId: "sc-19w91tk-0"
})(["border:none;margin:1px 0px;background:white;height:30px;box-shadow:0,0,4px,2px rgba(0,0,0,0.1);&:hover{background:rgba(20,110,240,0.4);}img{width:100%;height:100px;object-fit:cover;}.buttonList{text-align:left;display:grid;width:100%;align-items:center;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));& > *{}}p,a{padding-left:10px;margin:0;}button{padding:2px 0;border-radius:5px;margin:0 10px;border:none;font-size:14px;cursor:pointer;&:focus{outline:none;}&:active{outline:none;}&:hover{background:rgba(220,10,20,0.5);}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ClientStyles);

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
  componentId: "sc-1ahz8xx-0"
})(["position:absolute;display:flex;flex-flow:column;width:100%;z-index:5;border:1px solid ", ";max-height:50vh;overflow-y:scroll;"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1ahz8xx-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;font-size:1.2rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
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
  componentId: "sc-1ahz8xx-2"
})(["position:relative;input{width:100%;height:100%;padding:10px;padding-left:20px;border:0;border-radius:5px;width:240px;font-size:1.4rem;outline:none;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


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
  componentId: "sc-1uy483z-0"
})(["box-shadow:0 16px 24px 2px rgba(0,0,0,0.1),0 6px 10px 5px rgba(0,0,0,0.1),0 8px 10px -5px rgba(0,0,0,0.2);background:white;z-index:999;padding:20px;margin:20px 0;margin-top:0px;font-size:1.5rem;line-height:1.5;font-weight:600;position:relative;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding-left:1rem;padding-top:0.7rem;padding-bottom:0.7rem;font-size:1.5rem;border-radius:5px;background:transparent;border:1px solid rgba(0,0,0,0.2);margin-top:0.8rem;&:focus{outline:0;border:2px solid rgba(20,110,220,0.5);}}button,input[type='submit']{width:auto;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;margin-top:1rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;margin-bottom:10px;content:'';display:block;background-image:linear-gradient( to right,#272ebd 0%,#0980cd 50%,#272ebd 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-4eic4r-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(3,auto);align-items:stretch;justify-content:center;align-content:center;height:50px;justify-self:center;font-size:10px;width:250px;border:1px solid ", ";border-radius:25px 25px 25px 25px;background:", ";& > *{margin:0 auto;padding:12px 14px;&:last-child{border-right:0;}&:nth-child(2){border-right:0;}}a{color:white;}a[aria-disabled='true']{color:", ";pointer-events:none;}.totes{background:white;}"], function (props) {
  return props.theme.lightblue;
}, function (props) {
  return props.theme.lightblue;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

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
  componentId: "sc-1wsx7o1-0"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:0;margin:0 auto;border-radius:5px;font-size:2rem;padding:0.5rem 1.2rem;font-size:1.8rem;display:inline-block;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);}&:active{box-shadow:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage, postsPerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsPerPage", function() { return postsPerPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 5;
var postsPerPage = 10;

/***/ }),

/***/ "./pages/client.js":
/*!*************************!*\
  !*** ./pages/client.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TextWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TextWindow */ "./components/TextWindow.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/pages/client.js";




var Client = function Client(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextWindow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/client.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/client.js */"./pages/client.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

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

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

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
//# sourceMappingURL=client.js.map