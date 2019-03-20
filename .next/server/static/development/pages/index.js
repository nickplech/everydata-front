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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SEARCH_CLIENTS_QUERY($searchTerm: String!) {\n    clients(\n      orderBy: updatedAt_DESC\n      where: {\n        OR: [\n          { firstName_contains: $searchTerm }\n          { lastName_contains: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      image\n      firstName\n      lastName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SEARCH_CLIENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "AutoComplete__Img",
  componentId: "jdm8bj-0"
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: routeToClient,
        itemToString: function itemToString(client) {
          return client === null ? '' : client.lastName + ',' + ' ' + client.firstName;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
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
              lineNumber: 82
            },
            __self: this
          }));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
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
              lineNumber: 100
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
            src: item.image,
            alt: item.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }), item.lastName, ", ", item.firstName);
        }), !_this2.state.clients.length && !_this2.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDownItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
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

/***/ "./components/Boxes.js":
/*!*****************************!*\
  !*** ./components/Boxes.js ***!
  \*****************************/
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
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Boxes.js";



var StyledBoxes = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Boxes__StyledBoxes",
  componentId: "f3id5x-0"
})(["display:flex;justify-content:center;align-items:center;height:130vh;width:100vw;.c-hero-flex__item{flex-grow:1;background:#ccc;display:flex;align-items:center;justify-content:center;background-size:cover;box-shadow:inset 0 0 0 100vmax rgba(0,0,0,0.3);transition:0.2s all;&:hover{flex-grow:2;box-shadow:inset 0 0 0 100vmax rgba(20,0,100,0.5);}&:nth-child(3){background:url('../static/img/doc.jpg') no-repeat center center;text-decoration:none;}&:nth-child(2){background:url('../static/img/fitness-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(1){background:url('../static/img/spa-appointment-reminders.jpg') no-repeat center center;text-decoration:none;}&:nth-child(4){background:url('../static/img/realestate.jpg') no-repeat center center;text-decoration:none;}}.c-hero-flex__title{text-transform:uppercase;letter-spacing:0.075em;color:rgb(255,255,255);transition:0.2s all;font-size:18px;opacity:0.8;background-color:transparent;border:2px solid white;border-radius:0px;margin:0;font-family:'Montserrat',sans-serif;font-weight:200;padding-left:10px;padding-right:10px;}@media (min-width:960px){display:flex;justify-content:center;align-items:center;height:400px;}@media (max-width:960px){flex-flow:column nowrap;.c-hero-flex__item{width:100%;}}@media (min-width:961px){.c-hero-flex__item{height:100%;text-decoration:none;}}"]);

var Boxes = function Boxes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/spa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Spa & Beauty"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/fitness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Fitness Instruction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/medical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Health Care"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/realestate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "c-hero-flex__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "c-hero-flex__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Real Estate"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Boxes);

/***/ }),

/***/ "./components/CalendarStats.js":
/*!*************************************!*\
  !*** ./components/CalendarStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "react-calendar/dist/entry.nostyle");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CalendarStats.js";

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






var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "CalendarStats__StatsDisplay",
  componentId: "sc-3vgek8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);width:100%;height:100%;border:5px solid white;border-radius:25px 25px 25px 25px;box-shadow:1px 1px 2px 3px rgba(0,0,0,0.05);z-index:10;.react-calendar{width:356px;border-radius:20px;max-width:100%;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);height:295px;background:white;margin:5px auto;font-family:Montserrat,Helvetica,sans-serif;line-height:1.125em;}.react-calendar,.react-calendar *,.react-calendar *:before,.react-calendar *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.react-calendar button{margin:0;border:0;outline:none;}.react-calendar button:enabled:hover{cursor:pointer;}.react-calendar__navigation{height:60px;margin-bottom:0.5em;}.react-calendar__navigation button{min-width:44px;background:none;font-size:20px;background-color:rgba(20,110,240,1);color:white;&:first-child{border-radius:18px 0 0 0;}&:last-child{border-radius:0 16px 0 0;}&:nth-child(2){border-radius:0;}&:nth-child(3){border-radius:0;}&:nth-child(4){border-radius:0;}}.react-calendar__navigation button:enabled:hover,.react-calendar__navigation button:enabled:focus{background-color:#e6e6e6;}.react-calendar__navigation button[disabled]{background-color:rgba(20,110,240,0.1);}.react-calendar__month-view__weekdays{text-align:center;text-decoration:none;font-size:0.75em;font-weight:800;}.react-calendar__month-view__weekdays__weekday{padding:1em 0;}.react-calendar__month-view__weekNumbers{font-weight:bold;}.react-calendar__month-view__weekNumbers .react-calendar__tile{display:flex;align-items:center;justify-content:center;font-size:0.75em;padding:calc(0.75em / 0.75) calc(0.5em / 0.75);}.react-calendar__month-view__days__day--weekend{color:rgba(240,10,10,0.8);font-weight:800;}.react-calendar__month-view__days__day--neighboringMonth{color:#969696;}.react-calendar__year-view .react-calendar__tile,.react-calendar__decade-view .react-calendar__tile,.react-calendar__century-view .react-calendar__tile{padding:2em 0.5em;}.react-calendar__tile{max-width:100%;text-align:center;padding:0.75em 0.5em;background:none;}.react-calendar__tile:disabled{background-color:#f0f0f0;}.react-calendar__tile:enabled:hover,.react-calendar__tile:enabled:focus{background-color:#e6e6e6;}.react-calendar__tile--hasActive{background:rgba(20,110,240,1);color:white;}.react-calendar__tile--hasActive:enabled:hover,.react-calendar__tile--hasActive:enabled:focus{background:#a9d4ff;}.react-calendar__tile--active{background:rgba(20,110,240,1);color:white;}.react-calendar__tile--active:enabled:hover,.react-calendar__tile--active:enabled:focus{background:#1087ff;}.react-calendar--selectRange .react-calendar__tile--hover{background-color:rgba(100,100,240,1);color:white;}abbr{text-decoration:none;}"]);

var CalendarStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarStats, _React$Component);

  function CalendarStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: date_fns__WEBPACK_IMPORTED_MODULE_1___default.a.startOfDay(new Date()) // today: dateFns.startOfDay(new Date()),

    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (date) {
      return _this.setState({
        date: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeModalDate", function (date) {
      return _this.setState({
        date: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToday", function (date) {
      return _this.setState({
        date: date_fns__WEBPACK_IMPORTED_MODULE_1___default.a.startOfDay(new Date())
      });
    });

    return _this;
  }

  _createClass(CalendarStats, [{
    key: "render",
    value: function render() {
      var date = this.state.date;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "date",
        onChange: this.onChange,
        minDetail: "decade",
        value: date,
        calendarType: "US",
        returnValue: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleDay__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: date,
        handleToday: this.handleToday,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }));
    }
  }]);

  return CalendarStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarStats);

/***/ }),

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CallToAction.js";



var GradientDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CallToAction__GradientDiv",
  componentId: "sc-1eyjrc-0"
})(["display:flex;font-family:'Monteserrat',sans-serif;background-color:#33c5ff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%2333c5ff'/%3E%3Cstop offset='1' stop-color='%231cffe8'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%2331ccff'/%3E%3Cstop offset='1' stop-color='%2312f5fc'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%232fd2ff'/%3E%3Cstop offset='1' stop-color='%2308d3f8'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%232dd9ff'/%3E%3Cstop offset='1' stop-color='%230aaaea'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%232be0ff'/%3E%3Cstop offset='1' stop-color='%230c85db'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%2329e8ff'/%3E%3Cstop offset='1' stop-color='%230e64cb'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%2326efff'/%3E%3Cstop offset='1' stop-color='%231048bc'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%2324f6ff'/%3E%3Cstop offset='1' stop-color='%231230ae'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2322feff'/%3E%3Cstop offset='1' stop-color='%23131ca0'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2320fff8'/%3E%3Cstop offset='1' stop-color='%231c1392'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%231efff0'/%3E%3Cstop offset='1' stop-color='%232a1484'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%231cffe8'/%3E%3Cstop offset='1' stop-color='%23341477'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E\");background-size:cover;flex-flow:column;background-position:center;justify-content:center;align-items:center;min-height:230px;.title{color:white;margin:0;}.sub{color:white;margin:0;margin-bottom:15px;font-size:18px;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CallToAction__StyledButton",
  componentId: "sc-1eyjrc-1"
})(["display:flex;padding:20px 0px;align-items:center;justify-content:center;background:white;color:gray;border:none;border-radius:40px;width:250px;text-transform:uppercase;font-size:16px;box-shadow:2px 3px 2px 2px rgba(0,0,0,0.2);cursor:pointer;&:active{outline:none;box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);}&:focus{outline:none;}"]);

var CallToAction = function CallToAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GradientDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Hold On to Your Wallet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Try Perfect Day Reminders On Us + No Credit Card Required!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Start Your Free Trial")));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
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
        }, "Welcome to Perfect Day Reminders, if you have any questions please feel free to ask."),
        img: './static/img/perfectdayreminders.png'
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
          username: 'Nathan',
          content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.msg).value),
          img: './static/img/perfectdayreminders.png'
        }])
      }, function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this2.refs.msg).value = '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var username = 'Nathan';
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

/***/ "./components/ClientSearch.js":
/*!************************************!*\
  !*** ./components/ClientSearch.js ***!
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoComplete */ "./components/AutoComplete.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ClientSearch.js";

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








var InputDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "ClientSearch__InputDiv",
  componentId: "sc-176btmj-0"
})(["border:2px solid rgba(20,110,240,1);border-radius:5px;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img.withConfig({
  displayName: "ClientSearch__Img",
  componentId: "sc-176btmj-1"
})(["border-radius:50%;width:40px;height:40px;"]);

var ClientSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(ClientSearch, _Component);

  function ClientSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClientSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClientSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      clients: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(
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
                  query: _AutoComplete__WEBPACK_IMPORTED_MODULE_4__["SEARCH_CLIENTS_QUERY"],
                  variables: {
                    searchTerm: e.target.value,
                    userId: _this.props.id
                  }
                });

              case 4:
                res = _context.sent;
                console.log(res);

                _this.setState({
                  clients: res.data.clients,
                  loading: false
                });

              case 7:
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

  _createClass(ClientSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(downshift__WEBPACK_IMPORTED_MODULE_2__["resetIdCounter"])();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["SearchStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_2___default.a, {
        itemToString: function itemToString(client) {
          return client === null ? '' : client.lastName + ',' + ' ' + client.firstName;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, function (client) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputDiv, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
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
              lineNumber: 60
            },
            __self: this
          })));
        }), isOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDown"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
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
              lineNumber: 79
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
            src: item.image,
            alt: item.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }), item.lastName, ", ", item.firstName);
        }), !_this2.state.clients.length && !_this2.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__["DropDownItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, " Nothing Found for ", inputValue)));
      }));
    }
  }]);

  return ClientSearch;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ClientSearch);

/***/ }),

/***/ "./components/DoDisplay.js":
/*!*********************************!*\
  !*** ./components/DoDisplay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/FooterStyles */ "./components/styles/FooterStyles.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Footer.js";




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Privacy Policy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/terms",
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
  }, "Terms of Use"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Copyright \xA9 Perfect Day Reminders LLC 2016-2018")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Hero.js";



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-1vorxnl-0"
})(["position:relative;overflow-x:hidden;"]);
var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__StyledHero",
  componentId: "sc-1vorxnl-1"
})(["display:grid;grid-template-columns:1fr 1fr;height:800px;width:100%;background-image:linear-gradient( 180deg,rgb(255,255,255),rgb(245,245,250) );background:linear-gradient(180deg,#fff,#f4f3fa);overflow-x:hidden;z-index:0;&:after{top:-121px;display:block;position:absolute;content:'';left:-50px;right:-50px;height:700px;-webkit-transform:rotateZ(-5.4deg);transform:rotateZ(-5.4deg);z-index:0;margin:0;padding:0;overflow:hidden;background:linear-gradient( 270deg,rgba(37,222,162,1),#27aee1,#0f7ffeff );z-index:0;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Left",
  componentId: "sc-1vorxnl-2"
})(["font-family:'Montserrat',sans-serif;z-index:5;margin-top:300px;.confirmation{color:white;}p{position:relative;margin:0;display:block;max-width:700px;z-index:5;color:white;font-size:1.5rem;padding-left:20%;}.title{position:relative;display:block;margin-bottom:0px;color:white;font-weight:600;padding-left:20%;line-height:2.8rem;font-size:2.7rem;}"]);
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__Screen",
  componentId: "sc-1vorxnl-3"
})(["position:relative;display:block;top:75px;height:660px;width:auto;z-index:3;"]);
var HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Hero__HeroButton",
  componentId: "sc-1vorxnl-4"
})(["display:inline-block;background:transparent;border:2px solid white;margin-left:20%;padding:8px 12px;margin-top:15px;color:white;border-radius:5px;font-size:18px;cursor:pointer;&:hover{transition:0.2s;transform:scale(1.05);color:white;outline:none;}&:active{transform:scale(1);outline:none;}"]);
var SecondButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Hero__SecondButton",
  componentId: "sc-1vorxnl-5"
})(["display:inline-block;background:rgba(100,100,220,1);border:2px solid rgba(100,100,220,1);margin-left:25px;padding:8px 12px;width:200px;margin-top:15px;color:white;border-radius:5px;font-size:18px;cursor:pointer;&:hover{transition:0.2s;transform:scale(1.05);color:white;outline:none;}&:active{transform:scale(1);outline:none;}"]);

var Hero = function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Confidence Through ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "confirmation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Confirmation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Your Business' best option for effortlessly reducing \"no-shows\" & improving daily work flow. Start sending appointment reminders immediately with no credit card required for a free trial."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Start Your Free Trial")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Other Button")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screen, {
    src: "../static/img/placeit.png",
    alt: "perfect day reminders screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/HomePage.js":
/*!********************************!*\
  !*** ./components/HomePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero */ "./components/Hero.js");
/* harmony import */ var _PhoneDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneDisplay */ "./components/PhoneDisplay.js");
/* harmony import */ var _Boxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Boxes */ "./components/Boxes.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Info */ "./components/Info.js");
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _IconMorph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconMorph */ "./components/IconMorph.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/HomePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconMorph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Boxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CallToAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/IconMorph.js":
/*!*********************************!*\
  !*** ./components/IconMorph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "popmotion");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(popmotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flubber */ "flubber");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flubber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/IconMorph.js";

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






var StyledBody = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "IconMorph__StyledBody",
  componentId: "llhb40-0"
})(["height:400px;padding-bottom:100px;padding-top:50px;flex-flow:column;justify-content:stretch;align-items:center;display:flex;background:#f4f3fa;svg{margin-left:20px;}.lead{font-family:'Montserrat',sans-serif;font-size:2.2rem;line-height:3.2rem;max-width:900px;text-align:center;font-weight:200;margin-top:0;}button{display:flex;border:none;text-align:center;width:auto;overflow:visible;background:transparent;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;outline:none;color:white;padding:15px 20px;cursor:pointer;color:rgb(70,200,120);font-size:3.5rem;font-family:'Montserrat',sans-serif;font-weight:200;}"]);
var paths = {
  bell: 'M50.74,135.05a101.47,101.47,0,0,1,68.16-95.89,33.82,33.82,0,1,1,66.8,0,101.47,101.47,0,0,1,68,95.89V236.53l50.74,33.82v16.91H0V270.35l50.74-33.82ZM186,304.18a33.82,33.82,0,0,1-67.65,0Z',
  plane: 'M187.57,0C291.16,0,375.13,67.75,375.13,151.32c0,33.35-13.41,64.17-36.07,89.17l34.85,86.65L226.21,297.46c-15.43.42-32.72,4.16-50,4.61-2,.05-3.92.08-5.86.08C69.88,302.15,0,233.3,0,151.32,0,67.75,84,0,187.57,0',
  heart: 'M313.31,0a34.81,34.81,0,0,1,34.81,34.81V243.69a34.81,34.81,0,0,1-34.81,34.81H34.81A34.81,34.81,0,0,1,0,243.69V34.81A34.91,34.91,0,0,1,34.81,0ZM237.25,158.4l110.88,85.29V208.88L259,141l89.12-71.37V34.81L174.06,174.06,0,34.81V69.63L89.12,141,0,208.88v34.81L110.88,158.4l63.18,50.48Z'
};
var text = {
  first: 'Refreshingly Simple Text Message Appointment Reminders',
  second: 'Calendar',
  third: 'Perfect Collection of business tools to help you grow'
};
var pathIds = Object.keys(paths);

var morphTransition = function morphTransition(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["tween"])({
    from: 0,
    to: 1
  }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(from, to));
};

var Icon = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.path(pathIds.reduce(function (config, id) {
  config[id] = {
    d: paths[id],
    transition: morphTransition
  };
  return config;
}, {}));
var NextButton = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.button({
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.9
  }
});

var IconMorph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconMorph, _React$Component);

  function IconMorph() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconMorph);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconMorph)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pathIndex: 0,
      buttonText: text.first
    });

    _defineProperty(_assertThisInitialized(_this), "gotoNext", function () {
      var pathIndex = _this.state.pathIndex;
      var nextIndex = pathIndex + 1;

      _this.setState({
        pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
      });
    });

    return _this;
  }

  _createClass(IconMorph, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "60",
        height: "60",
        viewBox: "0 0 375.13 327.15",
        fill: "rgba(70, 200, 150,.9)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        pose: pathIds[this.state.pathIndex],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextButton, {
        onClick: this.gotoNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, this.state.buttonText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Take control of your business' schedule and communicate with your clients in the most ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "relevant"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "effective"), " way possible."));
    }
  }]);

  return IconMorph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IconMorph);

/***/ }),

/***/ "./components/Info.js":
/*!****************************!*\
  !*** ./components/Info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Info.js";


var SectionWhite = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Info__SectionWhite",
  componentId: "io375g-0"
})(["min-height:400px;background:white;width:100%;"]);

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWhite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default, OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL_QUERY", function() { return OPEN_MODAL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ClientSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClientSearch */ "./components/ClientSearch.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Modal.js";

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_REASON_QUERY($id: ID!) {\n    reason(id: $id) {\n      id\n      name\n      color\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleModal @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    openModal @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var OPEN_MODAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var SINGLE_REASON_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());
var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "sc-105rmtf-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);z-index:990;"]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Modal__Modall",
  componentId: "sc-105rmtf-1"
})(["background-color:#fff;border-radius:25px;display:grid;grid-template-rows:1fr 55px;grid-template-columns:1fr;position:absolute;align-items:flex-start;width:500px;height:500px;padding:15px 25px;z-index:999;box-shadow:1px 1px 5px 3px rgba(0,0,0,0.3);"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.select.withConfig({
  displayName: "Modal__StyledInput",
  componentId: "sc-105rmtf-2"
})(["width:100%;background:rgba(20,110,240,0.5);margin:20px 0;border:none;font-size:2rem;font-weight:700;color:white;outline:none;"]);
var StyledTextArea = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.textarea.withConfig({
  displayName: "Modal__StyledTextArea",
  componentId: "sc-105rmtf-3"
})(["padding:5px;width:100%;background:transparent;font-size:2rem;outline:none;resize:none;border:2px solid rgba(220,220,220,1);&:focus{outline:none;}"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Modal__Date",
  componentId: "sc-105rmtf-4"
})(["grid-column:1;grid-row:1;justify-content:flex-end;border-radius:25px 25px 0 0;overflow:hidden;height:100%;padding:5px 20px 0px 20px;p{margin:0;font-family:'Montserrat',sans-serif;color:", ";display:block;padding:0px 0px;font-size:2.2rem;position:relative;}h3{margin:0;}"], function (props) {
  return props.theme.blue;
});
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button.withConfig({
  displayName: "Modal__Cancel",
  componentId: "sc-105rmtf-5"
})(["background-color:#fff;border-radius:20px;display:grid;grid-row:2;margin-left:25px;position:absolute;left:0;align-items:center;height:60%;background:rgba(220,100,120,1);color:white;width:100px;cursor:pointer;border:none;transition:0.3s;font-size:18px;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;transform:scale(1.1);}"]);
var Save = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button.withConfig({
  displayName: "Modal__Save",
  componentId: "sc-105rmtf-6"
})(["background-color:#fff;border:none;border-radius:20px;display:grid;right:0;grid-row:2;cursor:pointer;position:absolute;align-items:center;width:100px;height:60%;background:rgba(20,200,120,1);color:white;font-size:18px;margin-right:25px;transition:0.3s;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;transform:scale(1.1);}"]); // const SAMPLE = ['Fraxel', 'Hair']

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selection: [],
      reason: '',
      date: '',
      startTime: '',
      length: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    // handleSearch = () => {
    //   debounce(async (e, client) => {
    //     console.log('Searching...')
    //     this.setState({ loading: true })
    //     const res = await client.query({
    //       query: SEARCH_CLIENTS_QUERY,
    //       variables: { searchTerm: e.target.value },
    //     })
    //     this.setState({
    //       clients: res.data.clients,
    //       loading: false,
    //     })
    //   }, 350)
    // }
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: TOGGLE_MODAL_MUTATION,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, function (toggleModal) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: OPEN_MODAL_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, function (_ref) {
          var data = _ref.data;

          if (!data.openModal) {
            return null;
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackDrop, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modall, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                var res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return createAppointment();

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
                return _ref2.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Date, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(_this2.props.date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, _this2.props.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClientSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
            name: "reason",
            type: "select",
            multiple: false,
            value: _this2.state.reason,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }, _this2.props.reasons.map(function (reason, i) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: reason.name,
              key: reason.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              },
              __self: this
            }, reason.name);
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "note",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "Notes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Cancel, {
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Save, {
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, "Save"))));
        });
      });
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./components/Phone.js":
/*!*****************************!*\
  !*** ./components/Phone.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Phone.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MainPhone = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Phone__MainPhone",
  componentId: "v8wj01-0"
})([".main-phone{display:grid;grid-template-columns:1fr;grid-template-rows:190px 125px 45px 1fr;background-image:url('../static/img/bg-phone2.png');bottom:0%;width:425px;min-height:550px;z-index:4;background-repeat:no-repeat;background-size:cover;background-position:center top;padding-left:35px;margin:0 auto;}.med-text1{grid-row:2/3;height:auto;width:270px;top:35%;left:35px;z-index:5;}.med-text2{margin-left:245px;grid-row:3/4;height:auto;width:110px;top:97%;left:283px;z-index:5;}.med-text3{grid-row:4/5;height:auto;width:270px;top:66%;left:35px;z-index:5;}"]);
var PhoneSlide = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  exit: {
    y: '0%'
  },
  enter: {
    y: '0%',
    beforeChildren: true,
    staggerChildren: 500
  }
});
var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub2 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});
var Bub3 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
});

var Phone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Phone, _React$Component);

  function Phone() {
    _classCallCheck(this, Phone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Phone).apply(this, arguments));
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainPhone, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhoneSlide, {
        initialPose: "exit",
        pose: "enter",
        className: "main-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
        key: "bub1",
        id: "i1",
        className: "med-text1",
        src: "../static/img/medical-reminder.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
        key: "bub2",
        id: "i2",
        className: "med-text2",
        src: "../static/img/confirm2.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
        key: "bub3",
        id: "i3",
        className: "med-text3",
        src: "../static/img/confirmrem.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })));
    }
  }]);

  return Phone;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Phone);

/***/ }),

/***/ "./components/PhoneDisplay.js":
/*!************************************!*\
  !*** ./components/PhoneDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Phone */ "./components/Phone.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/PhoneDisplay.js";



var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__StyledHero",
  componentId: "zfw8n7-0"
})(["display:grid;grid-template-columns:1fr 1fr;width:100%;position:relative;min-height:440px;padding-top:0px;background-color:#611acc;background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238e55e8' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\");background-attachment:fixed;overflow-x:hidden;z-index:0;&:after{position:absolute;content:'';width:100%;height:100px;background:#f4f3fa;z-index:4;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__Left",
  componentId: "zfw8n7-1"
})(["z-index:5;padding-left:25px;p{position:relative;display:block;max-width:600px;z-index:5;}"]);

var PhoneDisplay = function PhoneDisplay() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Phone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneDisplay);

/***/ }),

/***/ "./components/Schedule.js":
/*!********************************!*\
  !*** ./components/Schedule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendarStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarStats */ "./components/CalendarStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Schedule.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CalendarLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Schedule__CalendarLayout",
  componentId: "sc-1ji72tf-0"
})(["display:grid;grid-template-columns:375px minmax(420px,1fr);grid-template-rows:1fr;height:calc(100% - 140px);width:100%;position:absolute;padding-left:10px;padding-right:10px;top:125px;grid-column-gap:8px;bottom:0;z-index:-1;"]);

var Schedule =
/*#__PURE__*/
function (_Component) {
  _inherits(Schedule, _Component);

  function Schedule() {
    _classCallCheck(this, Schedule);

    return _possibleConstructorReturn(this, _getPrototypeOf(Schedule).apply(this, arguments));
  }

  _createClass(Schedule, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalendarStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return Schedule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./components/SingleDay.js":
/*!*********************************!*\
  !*** ./components/SingleDay.js ***!
  \*********************************/
/*! exports provided: default, ALL_REASONS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REASONS_QUERY", function() { return ALL_REASONS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_timeSlots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/timeSlots */ "./lib/timeSlots.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SingleDay.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_REASONS_QUERY {\n    reasons(orderBy: name_ASC) {\n      id\n      name\n      color\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var ALL_REASONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var TodayButton = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 1.05
  }
});
var TopBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__TopBlock",
  componentId: "sc-1099gq1-0"
})(["display:grid;grid-column:2;grid-row:1/3;width:100%;height:100%;background:rgba(240,240,240,1);"]);
var DayView = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__DayView",
  componentId: "sc-1099gq1-1"
})(["position:relative;display:grid;grid-row:1/3;grid-column:2/3;width:100%;height:100%;background-color:white;box-shadow:0 1px 5px 3px rgba(0,0,0,0.05);border:5px solid white;border-radius:20px 20px 25px 25px;z-index:-1;.parent{display:flex;flex-flow:column;position:absolute;right:0px;align-items:flex-end;border-radius:15px 15px 0 0;text-align:center;padding-right:20px;margin-top:1px;height:65px;width:100%;background:rgba(20,110,240,1);}.todayButton{justify-content:center;position:absolute;display:flex;border-radius:5px;background:white;left:15px;border-top:13px solid red;top:10px;box-shadow:0 1px 1px 2px rgba(0,0,0,0.2);width:48px;height:45px;cursor:pointer;z-index:50;&:before{content:'TODAY';color:white;position:absolute;font-size:9px;top:-14.8px;}}.date{display:flex;text-transform:uppercase;margin:0;color:rgba(230,230,230,0.8);font-size:14px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.sideDate{display:flex;color:white;margin:0;font-family:'Montserrat',sans-serif;font-size:26px;line-height:26px;padding-top:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);
var DayGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__DayGrid",
  componentId: "sc-1099gq1-2"
})(["display:grid;position:relative;grid-template-columns:75px 1fr;position:absolute;grid-auto-rows:22px;border-radius:0px 0 25px 0;grid-gap:1px;width:100%;right:0px;margin-top:67px;height:75vh;overflow-y:scroll;overscroll-behavior:contain;"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "SingleDay__StyledInput",
  componentId: "sc-1099gq1-3"
})(["display:grid;grid-column:1;text-align:left;font-weight:800;height:100%;background:transparent;border:none;opacity:1;cursor:pointer;color:white;&:focus{outline:none;}"]);
var TimeCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__TimeCell",
  componentId: "sc-1099gq1-4"
})(["display:grid;border-left:none;grid-column:2/3;align-items:center;border-bottom:none;border:0px solid rgba(243,241,244,1);background:rgba(243,241,244,1);cursor:pointer;&:nth-child(4n + 2){display:grid;grid-column:1/3;align-items:center;border:0px solid rgba(20,110,240,0.65);border-radius:20px 0 0 20px;background:rgba(20,110,240,0.65);color:grey;border-right:none;}&:hover{opacity:0.5;}.number{display:grid;font-size:14px;align-self:center;justify-content:flex-start;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]);

var SingleDay =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleDay, _Component);

  function SingleDay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SingleDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SingleDay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedTime: '',
      today: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfDay"])(new Date())
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (e) {
      _this.setState({
        selectedTime: e.target.value
      });
    });

    return _this;
  }

  _createClass(SingleDay, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var date = this.props.date;
      var today = this.state.today;
      var time = this.state.selectedTime;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
        query: ALL_REASONS_QUERY,
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "parent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodayButton, {
          onClick: _this2.props.handleToday,
          className: "todayButton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(today, 'ddd')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sideDate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, 'dddd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayGrid, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBlock, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }), _lib_timeSlots__WEBPACK_IMPORTED_MODULE_7__["Data_15"].map(function (timeblock, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
            key: i,
            mutation: _Modal__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_MODAL_MUTATION"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, function (toggleModal) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeCell, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 227
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, {
              onDoubleClick: toggleModal,
              key: timeblock.time,
              className: "number",
              value: timeblock.time,
              onClick: _this2.update,
              readOnly: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              },
              __self: this
            }, timeblock.display));
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
          date: date,
          time: time,
          reasons: data.reasons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }));
      });
    }
  }]);

  return SingleDay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);


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

/***/ "./components/styles/ChatStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ChatStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var StyledChat = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ChatStyles__StyledChat",
  componentId: "sc-10ypusy-0"
})(["transform:translateY(93.5%);transition:all 0.5s;", ";width:340px;height:600px;background-color:rgba(0,0,0,0.7);border-radius:5px 5px 0 0;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,0.3);position:fixed;margin:0;z-index:999;right:20px;bottom:0;p{margin:0;display:inline-block;}h3{font-family:'Montserrat',sans-serif;background-color:rgba(30,228,148,0.7);color:#fff;margin:0;height:40px;font-weight:300;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;}.chats{box-sizing:border-box;padding:0 20px;margin:10px 0 0;height:510px;overflow-y:scroll;}.chat{background:rgba(255,255,255,0.8);position:relative;padding:5px 13px;font-size:14px;border-radius:10px;list-style:none;float:left;clear:both;margin:10px 0;max-width:200px;}img{width:20px;height:20px;border-radius:50%;position:absolute;top:-10px;left:0px;}.right{float:right;clear:both;}a{text-decoration:none;color:#3498db;}"], function (props) {
  return props.open && "transform: translateY(0);";
});
/* harmony default export */ __webpack_exports__["default"] = (StyledChat);

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
})(["position:relative;input{width:100%;height:100%;padding:10px;border:0;border-radius:5px;font-size:2rem;outline:none;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/FooterStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/FooterStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FooterStyles",
  componentId: "qh0lx9-0"
})(["width:100%;position:relative;bottom:0;background:rgba(10,10,10,0.8);color:", ";margin:0;padding:0;padding-top:55px;display:flex;flex-flow:column;align-items:center;justify-self:center;font-size:0.9rem;height:250px;a{color:", ";font-size:1.3rem;}@media (max-width:700px){font-size:11px;padding:20px 10px;}@media (max-width:1300px){justify-content:center;font-size:0.8rem;}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterStyles);

/***/ }),

/***/ "./components/styles/TextInput.js":
/*!****************************************!*\
  !*** ./components/styles/TextInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TextInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TextStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TextStyles",
  componentId: "euzuxt-0"
})([".chat{background:rgba(255,255,255,0.8);position:relative;padding:5px 13px;font-size:14px;border-radius:10px;list-style:none;float:left;clear:both;margin:10px 0;max-width:200px;}img{width:25px;height:25px;border-radius:50%;position:absolute;top:-10px;left:-10px;}.right{float:right;clear:both;}a{text-decoration:none;color:#3498db;}"]);
/* harmony default export */ __webpack_exports__["default"] = (TextStyles);

/***/ }),

/***/ "./lib/timeSlots.js":
/*!**************************!*\
  !*** ./lib/timeSlots.js ***!
  \**************************/
/*! exports provided: Data_15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data_15", function() { return Data_15; });
var Data_15 = [{
  time: '7:00 am',
  display: '7:00 am'
}, {
  time: '7:15 am',
  display: ''
}, {
  time: '7:30 am',
  display: ''
}, {
  time: '7:45 am',
  display: ''
}, {
  time: '8:00 am',
  display: '8:00 am'
}, {
  time: '8:15 am',
  display: ''
}, {
  time: '8:30 am',
  display: ''
}, {
  time: '8:45 am',
  display: ''
}, {
  time: '9:00 am',
  display: '9:00 am'
}, {
  time: '9:15 am',
  display: ''
}, {
  time: '9:30 am',
  display: ''
}, {
  time: '9:45 am',
  display: ''
}, {
  time: '10:00 am',
  display: '10:00 am'
}, {
  time: '10:15 am',
  display: ''
}, {
  time: '10:30 am',
  display: ''
}, {
  time: '10:45 am',
  display: ''
}, {
  time: '11:00 am',
  display: '11:00 am'
}, {
  time: '11:15 am',
  display: ''
}, {
  time: '11:30 am',
  display: ''
}, {
  time: '11:45 am',
  display: ''
}, {
  time: '12:00 pm',
  display: '12:00 pm'
}, {
  time: '12:15 pm',
  display: ''
}, {
  time: '12:30 pm',
  display: ''
}, {
  time: '12:45 pm',
  display: ''
}, {
  time: '1:00 pm',
  display: '1:00 pm'
}, {
  time: '1:15 pm',
  display: ''
}, {
  time: '1:30 pm',
  display: ''
}, {
  time: '1:45 pm',
  display: ''
}, {
  time: '2:00 pm',
  display: '2:00 pm'
}, {
  time: '2:15 pm',
  display: ''
}, {
  time: '2:30 pm',
  display: ''
}, {
  time: '2:45 pm',
  display: ''
}, {
  time: '3:00 pm',
  display: '3:00 pm'
}, {
  time: '3:15 pm',
  display: ''
}, {
  time: '3:30 pm',
  display: ''
}, {
  time: '3:45 pm',
  display: ''
}, {
  time: '4:00 pm',
  display: '4:00 pm'
}, {
  time: '4:15 pm',
  display: ''
}, {
  time: '4:30 pm',
  display: ''
}, {
  time: '4:45 pm',
  display: ''
}, {
  time: '5:00 pm',
  display: '5:00 pm'
}, {
  time: '5:15 pm',
  display: ''
}, {
  time: '5:30 pm',
  display: ''
}, {
  time: '5:45 pm',
  display: ''
}, {
  time: '6:00 pm',
  display: '6:00 pm'
}, {
  time: '6:15 pm',
  display: ''
}, {
  time: '6:30 pm',
  display: ''
}, {
  time: '6:45 pm',
  display: ''
}, {
  time: '7:00 pm',
  display: '7:00 pm'
}, {
  time: '7:15 pm',
  display: ''
}, {
  time: '7:30 pm',
  display: ''
}, {
  time: '7:45 pm',
  display: ''
}, {
  time: '8:00 pm',
  display: '8:00 pm'
}, {
  time: '8:15 pm',
  display: ''
}, {
  time: '8:30 pm',
  display: ''
}, {
  time: '8:45 pm',
  display: ''
}, {
  time: '9:00 pm',
  display: '9:00 pm'
}, {
  time: '9:15 pm',
  display: ''
}, {
  time: '9:30 pm',
  display: ''
}, {
  time: '9:45 pm',
  display: ''
}];


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DoDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DoDisplay */ "./components/DoDisplay.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/index.js";




var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DoDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Schedule__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "flubber":
/*!**************************!*\
  !*** external "flubber" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flubber");

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

/***/ "popmotion":
/*!****************************!*\
  !*** external "popmotion" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("popmotion");

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

/***/ "react-calendar/dist/entry.nostyle":
/*!****************************************************!*\
  !*** external "react-calendar/dist/entry.nostyle" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-calendar/dist/entry.nostyle");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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
//# sourceMappingURL=index.js.map