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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bubble.js":
/*!******************************!*\
  !*** ./components/Bubble.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Bubble.js";


var Floater = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Bubble__Floater",
  componentId: "sc-1dcp2my-0"
})(["border-radius:50%;display:inline-block;background:rgba(20,110,240,1);position:absolute;z-index:5;height:152px;padding:5px;width:152px;transition:0.2s;&:hover{transform:scale(1.1);}.logo1{background-position:0 0;}.logo2{background-position:-154px 0;}.logo3{background-position:-308px 0;}.logo4{background-position:-462px 0;}.logo5{background-position:-616px 0;}.logo6{background-position:-770px 0;}.logo7{background-position:-924px 0;}.logo8{background-position:0 -154px;}.logo9{background-position:-154px -154px;}.logo10{background-position:-308px -154px;}.logo11{background-position:-462px -154px;}.logo12{background-position:-616px -154px;}.logo13{background-position:-770px -154px;}.logo14{background-position:-924px -154px;}.logo15{background-position:0 -308px;}.logo16{background-position:-154px -308px;}.logo17{background-position:-308px -308px;}.logo18{background-position:-462px -308px;}.logo19{background-position:-616px -308px;}.logo20{background-position:-770px -308px;}.logo21{background-position:-924px -308px;}.logo22{background-position:0 -462px;}.logo23{background-position:-154px -462px;}.logo24{background-position:-308px -462px;}.logo25{background-position:-462px -462px;}.logo26{background-position:-616px -462px;}.logo27{background-position:-770px -462px;}.logo28{background-position:-924px -462px;}.logo29{background-position:0 -616px;}.logo30{background-position:-154px -616px;}.logo31{background-position:-308px -616px;}.logo32{background-position:-462px -616px;}.logo33{background-position:-616px -616px;}"]);

var Bubble = function Bubble(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floater, {
    style: {
      transform: "translate(".concat(props.bubble.x, "px, ").concat(props.bubble.y, "px) scale(").concat(props.bubble.s, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, props.bubble.name);
};

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/CallToAction.js";




var GradientDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CallToAction__GradientDiv",
  componentId: "qnjix4-0"
})(["display:flex;font-family:'Monteserrat',sans-serif;background:rgba(20,110,240,1);flex-flow:column;justify-content:center;align-items:center;padding:50px 0;.title{color:white;margin:0;}.sub{color:white;margin:0;margin-bottom:15px;font-size:18px;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CallToAction__StyledButton",
  componentId: "qnjix4-1"
})(["display:flex;padding:15px 0px;align-items:center;justify-content:center;background:white;color:gray;border:none;border-radius:40px;width:250px;text-transform:uppercase;font-size:16px;font-weight:500;transition:0.3s;box-shadow:2px 3px 2px 2px rgba(0,0,0,0.2);cursor:pointer;&:hover{background:rgba(20,110,220,0.3);color:white;}&:active{outline:none;box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);}&:focus{outline:none;}"]);

var CallToAction = function CallToAction() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GradientDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Top-Teir US Business & Consumer Lists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Reach the Demographic of Your Choice with a Free Sample List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: _Modal__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_MODAL_MUTATION"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, function (toggleModal) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
      onClick: toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Click to Get Started");
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/CardTilt.js":
/*!********************************!*\
  !*** ./components/CardTilt.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/CardTilt.js";


var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CardTilt__Flex",
  componentId: "sc-118rbng-0"
})(["display:flex;li{@import url('https://fonts.googleapis.com/css?family=Audiowide|Orbitron|Rajdhani|VT323');color:white;font-size:16px;margin:2px 0 2px 15px;font-family:'VT323',monospace;}"]);
var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CardTilt__Wrap",
  componentId: "sc-118rbng-1"
})(["-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;background:rgba(221,224,226,0.6);padding:0 70px 100px 70px;.space{perspective:1500px;width:525px;}.card{position:relative;border-radius:8px;background:#32325d;width:625px;margin-left:40px;transform:rotate3d(0.5,0.866,0,15deg) rotate(-1deg);box-shadow:-27.1px 62.5px 125px -25px rgba(50,50,93,0.5),-16.2px 37.5px 75px -37.5px rgba(0,0,0,0.6);}.code-snippet{padding:15px 10px;}.card-shine{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient( to top right,rgba(255,255,255,0),rgba(255,255,255,0) 20%,rgba(255,255,255,0.5) 70%,#fff );pointer-events:none;opacity:0.2;}h4{@import url('https://fonts.googleapis.com/css?family=Audiowide|Orbitron|Rajdhani|VT323');color:white;font-size:18px;text-align:center;margin:2px 0 2px 0px;font-family:'VT323',monospace;}"]);
var dataFilters1 = ['Business Owners', 'Homeowners', 'Cell Phones or Landlines', 'Emails and Faxes', 'DNC and Suppressions', 'Net Worth Investors', 'Travel and Vacation'];
var dataFilters2 = ['Opportunity Seekers', 'Credit and Debt Data', 'Hispanic and African American ', 'Real Estate and Insurance Agents', 'Career and Financial', 'Instagram and Facebook', 'Interests, hobbies and Lifestyles'];

var CardTilt = function CardTilt() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-shine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-snippet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Select from Our Data Filters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, dataFilters1.map(function (filter) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: filter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, filter);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, dataFilters2.map(function (filter) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: filter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, filter);
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardTilt);

/***/ }),

/***/ "./components/DeletePost.js":
/*!**********************************!*\
  !*** ./components/DeletePost.js ***!
  \**********************************/
/*! exports provided: default, DELETE_POST_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_MUTATION", function() { return DELETE_POST_MUTATION; });
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
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/DeletePost.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_POST_MUTATION($id: ID!) {\n    deletePost(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var DELETE_POST_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "DeletePost__BigButton",
  componentId: "gz00w6-0"
})(["font-size:2rem;position:relative;text-align:right;background:none;border:0;outline:none;display:block;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var DeletePost =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeletePost, _React$Component);

  function DeletePost() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeletePost);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeletePost)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "update", function (cache, payload) {
      // 1. first read the cache
      var data = cache.readQuery({
        query: _SingleDay__WEBPACK_IMPORTED_MODULE_5__["ALL_POSTS_QUERY"]
      }); // 2. remove that item from the cart

      var postId = payload.data.deletePost.id;
      data.posts = data.posts.filter(function (post) {
        return post.id !== postId;
      }); // 3. write it back to the cache

      cache.writeQuery({
        query: _SingleDay__WEBPACK_IMPORTED_MODULE_5__["ALL_POSTS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeletePost, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_POST_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          deletePost: {
            __typename: 'Post',
            id: this.props.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, function (deletePost, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        // if (error) return <Error error={error} />
        if (!_this2.props.me) return null;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            if (confirm("Are you sure? This action will be final!")) {
              deletePost().catch(function (err) {
                alert(err.message);
              });
            }
          },
          title: "Delete Post",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "\xD7");
      });
    }
  }]);

  return DeletePost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DeletePost, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired // This gets called as soon as we get a response back from the server after a mutation has been performed

});

/* harmony default export */ __webpack_exports__["default"] = (DeletePost);


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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Footer.js";



var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Wrap",
  componentId: "ke0j0k-0"
})(["background:rgba(10,10,10,0.95);height:100%;bottom:0;position:relative;"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Grid",
  componentId: "ke0j0k-1"
})(["display:grid;grid-template-columns:250px 1fr;grid-template-rows:1fr 1fr;background:transparent;color:rgba(240,240,240,0.9);margin:0;padding:0;padding-top:10px;bottom:0;position:relative;font-size:0.9rem;height:250px;width:100%;&:nth-child(1){grid-row:1;grid-column:1;}&:nth-child(2){grid-row:1;grid-column:2;}@media (min-width:1000px){font-size:0.8rem;max-width:1000px;margin:0 auto;}"]);
var CopyrightZone = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__CopyrightZone",
  componentId: "ke0j0k-2"
})(["display:grid;grid-row:2;grid-column:1/3;text-align:center;width:100%;position:relative;top:-40px;background:transparent;font-size:11px;p{margin:0;}"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Column",
  componentId: "ke0j0k-3"
})(["align-content:flex-start;display:grid;color:rgba(240,240,240,0.9);border-right:1px solid rgba(240,240,240,0.2);margin:50px 0;padding-left:20px;&:nth-child(2){border-right:none;}p{font-size:14px;font-family:'Montserrat',sans-serif;}.phone{color:rgba(20,110,240,0.7);}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Footer__List",
  componentId: "ke0j0k-4"
})(["list-style:none;padding:0;a{font-family:'Montserrat',sans-serif;color:rgba(240,240,240,0.9);font-size:12px;&:hover{color:rgba(20,110,240,0.8);}}"]);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    style: {
      fontSize: '12px',
      margin: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.content);
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    content: "Site Index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Pricing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Privacy Policy"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    content: "Questions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "To reach a sales representative, please call", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone",
    href: "tel: 17144000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, ' ', "(714)400-0000"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CopyrightZone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Copyright \xA9 Everydata 2010-2019")))));
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
/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bubble */ "./components/Bubble.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Hero.js";

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





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-127ru9l-0"
})(["position:relative;overflow-x:hidden;"]);
var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__StyledHero",
  componentId: "sc-127ru9l-1"
})(["display:grid;position:relative;height:700px;width:100%;margin:0 auto;z-index:0;&:after{display:block;position:absolute;content:'';left:-50px;right:-50px;height:500px;-webkit-transform:rotateZ(-2deg);transform:rotateZ(-2deg);z-index:700;overflow-x:hidden;background:linear-gradient( 270deg,rgba(20,110,240,0.1),rgba(39,172,225,0.1),rgba(95,191,191,0.1) );z-index:0;}"]);
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__Buttons",
  componentId: "sc-127ru9l-2"
})(["z-index:25;display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__Button",
  componentId: "sc-127ru9l-3"
})(["padding:0px;height:505px;width:505px;margin:30px 35px;position:absolute;border:none;transition:0.2s;outline:none;cursor:pointer;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Hero__Logo",
  componentId: "sc-127ru9l-4"
})(["color:rgba(240,240,240,1);font-family:'Montserrat',sans-serif;text-align:center;font-size:11px;margin:0 auto;font-weight:700;"]); // const bubbles = [
//   { name: 'Business Owners', s: 0.6, x: 1134, y: 45 },
//   { name: 'Homeowners', s: 0.6, x: 2499, y: 79 },
//   { name: 'Cell Phones', s: 0.6, x: 795, y: 226 },
//   { name: 'Landlines', s: 0.6, x: 444, y: 193 },
//   { name: 'Emails', s: 0.8, x: 1303, y: 193 },
//   { name: 'Faxes', s: 0.8, x: 907, y: 88 },
//   { name: 'DNC', s: 0.8, x: 323, y: 60 },
//   { name: 'Suppressions', s: 0.8, x: 1929, y: 293 },
//   { name: 'Net Worth Investors', s: 0.8, x: 2135, y: 198 },
//   { name: 'Travel', s: 0.8, x: 2276, y: 82 },
//   { name: 'Vacation', s: 0.8, x: 2654, y: 182 },
//   { name: 'Opportunity Seekers', s: 0.8, x: 2783, y: 60 },
//   { name: 'Credit', x: 1519, y: 118 },
//   { name: 'Debt Data', x: 1071, y: 233 },
//   {
//     name: 'Hispanic',
//     x: 1773,
//     y: 148,
//   },
//   { name: 'African American', x: 624, y: 111 },
//   { name: 'Real Estate', x: 75, y: 103 },
//   { name: 'Insurance Agents', x: 1990, y: 75 },
// ]

var specs = [{
  s: 0.6,
  x: 1134,
  y: 45
}, {
  s: 0.6,
  x: 1620,
  y: 271
}, {
  s: 0.6,
  x: 1761,
  y: 372
}, {
  s: 0.6,
  x: 2499,
  y: 79
}, {
  s: 0.6,
  x: 2704,
  y: 334
}, {
  s: 0.6,
  x: 2271,
  y: 356
}, {
  s: 0.6,
  x: 795,
  y: 226
}, {
  s: 0.6,
  x: 276,
  y: 256
}, {
  s: 0.6,
  x: 1210,
  y: 365
}, {
  s: 0.6,
  x: 444,
  y: 193
}, {
  s: 0.6,
  x: 2545,
  y: 387
}, {
  s: 0.8,
  x: 1303,
  y: 193
}, {
  s: 0.8,
  x: 907,
  y: 88
}, {
  s: 0.8,
  x: 633,
  y: 320
}, {
  s: 0.8,
  x: 323,
  y: 60
}, {
  s: 0.8,
  x: 129,
  y: 357
}, {
  s: 0.8,
  x: 1440,
  y: 342
}, {
  s: 0.8,
  x: 1929,
  y: 293
}, {
  s: 0.8,
  x: 2135,
  y: 198
}, {
  s: 0.8,
  x: 2276,
  y: 82
}, {
  s: 0.8,
  x: 2654,
  y: 182
}, {
  s: 0.8,
  x: 2783,
  y: 60
}, {
  x: 1519,
  y: 118
}, {
  x: 1071,
  y: 233
}, {
  x: 1773,
  y: 148
}, {
  x: 2098,
  y: 385
}, {
  x: 2423,
  y: 244
}, {
  x: 901,
  y: 385
}, {
  x: 624,
  y: 111
}, {
  x: 75,
  y: 103
}, {
  x: 413,
  y: 367
}, {
  x: 2895,
  y: 271
}, {
  x: 1990,
  y: 75
}]; // const floaters = [
//   name: 'Career',
//   name: 'Financial',
//   name: 'Instagram',
//   name: 'Facebook',
//   name: 'Interests',
//   name: 'hobbies',
//   name: 'Lifestyles',
// ]

var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hero);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hero)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      bubbles: [],
      index: '',
      x: '',
      y: '',
      scale: 1
    });

    _defineProperty(_assertThisInitialized(_this), "updateAnimation", function () {});

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      var SCROLL_SPEED = 0.3;
      var CANVAS_WIDTH = 2800;
      var x = _this.state.x;

      _this.setState({
        x: x < -200 ? CANVAS_WIDTH : x - SCROLL_SPEED
      });
    });

    return _this;
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, specs.map(function (bubble, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bubble__WEBPACK_IMPORTED_MODULE_3__["default"], {
          bubble: bubble,
          className: "logo".concat(i + 1),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        });
      })));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
/* harmony import */ var _Questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Questions */ "./components/Questions.js");
/* harmony import */ var _PhoneDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhoneDisplay */ "./components/PhoneDisplay.js");
/* harmony import */ var _CardTilt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardTilt */ "./components/CardTilt.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Info */ "./components/Info.js");
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile */ "./components/Profile.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _IconMorph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IconMorph */ "./components/IconMorph.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/HomePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Backgrounder = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig({
  displayName: "HomePage__Backgrounder",
  componentId: "sc-1w1s86y-0"
})(["width:100%;background:linear-gradient(180deg,rgba(221,224,226,0.6),#fff);"]);

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
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhoneDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconMorph__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardTilt__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Backgrounder, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleDay__WEBPACK_IMPORTED_MODULE_9__["default"], {
          me: me,
          page: _this.props.postsPage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], {
          person: "Phil Flora, Owner",
          image: "../static/img/samplephil.jpg",
          info: "14-year call center expert",
          linkedIn: "https://www.linkedin.com/in/phil-flora-8841939a/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CallToAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      });
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/IconMorph.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Grid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "IconMorph__Grid",
  componentId: "sc-34cvcq-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;max-width:1300px;margin:30px auto 100px auto;"]);
var HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "IconMorph__HeaderTitle",
  componentId: "sc-34cvcq-1"
})(["display:flex;justify-content:center;text-align:center;margin:70px auto 20px auto;width:90%;h1{line-height:3.2rem;padding:5px 20px;cursor:pointer;color:rgba(20,110,240,1);font-size:3rem;font-family:'Montserrat',sans-serif;font-weight:200;}p{margin:0 auto;text-transform:uppercase;color:rgba(20,20,20,0.7);}"]);
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "IconMorph__Circle",
  componentId: "sc-34cvcq-2"
})(["height:30px;width:30px;display:flex;justify-content:center;align-items:center;border-radius:50%;"]);
var StyledBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "IconMorph__StyledBody",
  componentId: "sc-34cvcq-3"
})(["padding-bottom:20px;flex-flow:column;justify-content:stretch;align-items:center;display:flex;h5{margin-bottom:3px;font-size:16px;margin-top:10px;}.lead{font-family:'Montserrat',sans-serif;font-size:1.3rem;line-height:2.2rem;max-width:300px;text-align:center;font-weight:200;margin-top:0;}a{display:flex;border:none;text-align:center;width:auto;overflow:visible;background:transparent;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;transition:0.3s;outline:none;color:white;padding:10px 0;cursor:pointer;font-size:1.7rem;font-family:'Montserrat',sans-serif;font-weight:400;}"]);
var text = ['1', '2', '3'];
var textColor = ['rgba(20, 110, 240, .6)', 'rgba(20, 110, 240, .8)', 'rgba(20, 110, 240, 1)'];
var text2 = ['Refreshingly Simple Text Message Appointment Reminders', 'Spend less time scheduling and more time doing what you do best', 'Perfect Collection of business tools to help you grow'];

var IconMorph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconMorph, _React$Component);

  function IconMorph() {
    _classCallCheck(this, IconMorph);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconMorph).apply(this, arguments));
  }

  _createClass(IconMorph, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Current 2019 Databases & Data Feeds\u2014Build Your Perfect List")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
        style: {
          background: "".concat(textColor[0])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, text[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Brief Consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Start with a brief marketing consultation & determine your targeted demographics")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
        style: {
          background: "".concat(textColor[1])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, text[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Free Sample List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Receive a free test list containing your targeted demographics")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
        style: {
          background: "".concat(textColor[2])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, text[2])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Sign Up & Convert"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Sign up with us and receive lists that convert on a regular basis"))));
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
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Info.js";


var SectionWhite = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Info__SectionWhite",
  componentId: "sc-4rc9kj-0"
})(["min-height:100px;background:linear-gradient(180deg,#fff,rgba(221,224,226,0.6));width:100%;z-index:-1;"]);

var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionWhite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default, OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION, CREATE_CLIENT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL_QUERY", function() { return OPEN_MODAL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CLIENT_MUTATION", function() { return CREATE_CLIENT_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-text-mask */ "react-text-mask");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Modal.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CLIENT_MUTATION(\n    $firstName: String!\n    $lastName: String!\n    $cellPhone: String!\n    $email: String!\n    $businessName: String\n    $image: String\n  ) {\n    createClient(\n      firstName: $firstName\n      lastName: $lastName\n      cellPhone: $cellPhone\n      email: $email\n      businessName: $businessName\n      image: $image\n    ) {\n      id\n      email\n      firstName\n      lastName\n      image\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation TOGGLE_MODAL_MUTATION {\n    toggleModal @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query OPEN_MODAL_QUERY {\n    openModal @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // import SickButton from './styles/SickButton'



var OPEN_MODAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var CREATE_CLIENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());
var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "z4jtxd-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);z-index:990;"]);
var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button.withConfig({
  displayName: "Modal__SickButton",
  componentId: "z4jtxd-1"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:0;margin:20px 0;border-radius:5px;font-size:2rem;padding:0.5rem 1.2rem;font-size:2rem;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);transform:scale(1.1);}&:active{box-shadow:none;}"]);
var SickerButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Modal__SickerButton",
  componentId: "z4jtxd-2"
})(["background:transparent;color:rgba(240,100,100,0.7);font-weight:800;display:flex;position:absolute;top:-60px;right:-40px;border:3px solid rgba(240,100,100,0.7);margin:0px 0px 10px 5px;border-radius:50%;justify-content:center;align-items:center;font-size:1.3rem;height:35px;width:35px;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(230,10,40,0.5);color:white;border-color:white;transform:scale(1.1);}&:active{box-shadow:none;}&:after{content:'x';}"]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.form.withConfig({
  displayName: "Modal__Modall",
  componentId: "z4jtxd-3"
})(["background-color:#fff;border-radius:28px;display:block;position:absolute;width:500px;padding:5px;z-index:999;box-shadow:1px 1px 5px 3px rgba(0,0,0,0.3);box-shadow:0 16px 24px 2px rgba(0,0,0,0.1),0 6px 10px 5px rgba(0,0,0,0.1),0 8px 10px -5px rgba(0,0,0,0.2);background:white;z-index:999;padding:30px 30px;margin:0px 15px;font-size:1.5rem;line-height:1.5;border-radius:25px;font-weight:600;position:relative;height:480px;label{display:block;font-family:'Montserrat',sans-serif;font-weight:400;color:rgba(20,110,240,0.8);margin-bottom:1rem;}input,textarea,select{width:100%;padding-left:1rem;padding-top:0.7rem;padding-bottom:0.7rem;font-size:1.5rem;border-radius:5px;background:transparent;border:1px solid rgba(0,0,0,0.2);margin-top:0.8rem;&:focus{outline:0;border:2px solid rgba(20,110,220,0.5);}}button,input[type='submit']{width:auto;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;margin-top:1rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;margin-bottom:10px;content:'';display:block;background-image:linear-gradient( to right,#272ebd 0%,#0980cd 50%,#272ebd 100% );}}"]);

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
      firstName: '',
      lastName: '',
      cellPhone: '',
      businessName: '',
      email: '',
      image: '../static/img/profpic.jpg'
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
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
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: TOGGLE_MODAL_MUTATION,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, function (toggleModal) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: OPEN_MODAL_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, function (_ref) {
          var data = _ref.data;

          if (!data.openModal) {
            return null;
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
            mutation: CREATE_CLIENT_MUTATION,
            variables: {
              firstName: _this2.state.firstName,
              lastName: _this2.state.lastName,
              cellPhone: _this2.state.cellPhone,
              businessName: _this2.state.businessName,
              email: _this2.state.email,
              image: _this2.state.image
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, function (createClient, _ref2) {
            var error = _ref2.error,
                loading = _ref2.loading,
                called = _ref2.called;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackDrop, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 242
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modall, {
              onSubmit:
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          e.preventDefault();
                          _context.next = 3;
                          return createClient();

                        case 3:
                          _context.next = 5;
                          return _this2.setState({
                            firstName: '',
                            lastName: '',
                            cellPhone: '',
                            businessName: '',
                            email: '',
                            image: ''
                          });

                        case 5:
                          _context.next = 7;
                          return toggleModal();

                        case 7:
                          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
                            pathname: '/welcome'
                          });

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }(),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SickerButton, {
              onClick: toggleModal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 262
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
              disabled: loading,
              "aria-busy": loading,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 263
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 264
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              htmlFor: "firstName",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 265
              },
              __self: this
            }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              name: "firstName",
              placeholder: "First Name",
              required: true,
              value: _this2.state.firstName.charAt(0).toUpperCase() + _this2.state.firstName.slice(1).trim(),
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              htmlFor: "lastName",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 279
              },
              __self: this
            }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              name: "lastName",
              placeholder: "Last Name",
              required: true,
              value: _this2.state.lastName.charAt(0).toUpperCase() + _this2.state.lastName.slice(1).trim(),
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 281
              },
              __self: this
            })), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              htmlFor: "cellPhone",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 293
              },
              __self: this
            }, "Phone Number", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_6___default.a, {
              mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
              type: "text",
              id: "cellPhone",
              name: "cellPhone",
              placeholder: "Phone Number",
              autoComplete: "off",
              required: true,
              value: _this2.state.cellPhone,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 295
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              htmlFor: "email",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 322
              },
              __self: this
            }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "email",
              name: "email",
              placeholder: "email@address.com",
              required: true,
              value: _this2.state.email,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 324
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              htmlFor: "businessName",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 333
              },
              __self: this
            }, "Business Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              name: "businessName",
              placeholder: "Your Company Name",
              required: true,
              value: _this2.state.businessName,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 335
              },
              __self: this
            })), ' '), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SickButton, {
              type: "submit",
              name: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 345
              },
              __self: this
            }, "Submit")));
          });
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
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Phone.js";




var Computer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Phone__Computer",
  componentId: "sc-14kne8s-0"
})([".main-phone{z-index:4;margin:0 auto;}"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Phone__Flex",
  componentId: "sc-14kne8s-1"
})(["display:flex;justify-content:center;.logoWhite{position:absolute;padding:0px;display:block;z-index:15;margin:110px auto 70px auto;height:auto;width:500px;z-index:10;}.compTitle{font-family:'Montserrat',sans-serif;font-weight:300;font-size:1.1rem;text-align:center;margin:185px auto 20px auto;color:white;padding:8px 16px;border-radius:5px;text-transform:uppercase;position:absolute;display:block;z-index:900;}.clickhere{cursor:pointer;padding:6px 10px;border:2px solid white;border-radius:5px;color:white;position:absolute;display:block;margin-top:310px;&:hover{background:white;color:rgba(20,110,240,0.8);}}.typing{@import url('https://fonts.googleapis.com/css?family=Audiowide|Comfortaa|Orbitron|Rajdhani|VT323');position:absolute;font-family:'VT323',monospace;font-size:18px;transform:translateY(260px);color:white;}.Typist .Cursor{display:inline-block;}.Typist .Cursor--blinking{opacity:1;animation:blink 1s linear infinite;}@keyframes blink{0%{opacity:1;}50%{opacity:0;}100%{opacity:1;}}"]);
var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.img({
  exit: {
    y: -35,
    opacity: 0
  },
  enter: {
    y: 0,
    x: 0,
    opacity: 1,
    delay: 900,
    transition: {
      y: {
        type: 'spring',
        stiffness: 600,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Bub2 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.a({
  exit: {
    opacity: 0,
    y: -50
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: 1900,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Bub3 = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.p({
  exit: {
    opacity: 0,
    x: 100
  },
  enter: {
    x: 160,
    opacity: 1,
    delay: 1500,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Color = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Phone__Color",
  componentId: "sc-14kne8s-2"
})(["color:rgba(200,80,150,1);font-weight:800;"]);

var Phone = function Phone(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
    initialPose: "exit",
    pose: "enter",
    key: "bub1",
    className: "logoWhite",
    src: '../static/img/ogocalibri.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
    initialPose: "exit",
    pose: "enter",
    key: "bub2",
    onClick: props.toggleModal,
    className: "clickhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Click Here to Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
    initialPose: "exit",
    pose: "enter",
    key: "bub3",
    className: "compTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Business & Consumer Lists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "typing",
    cursor: {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true
    },
    startDelay: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Our database contains ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "150 million Consumers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 21,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "110 million Homeowners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 22,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "30 million Businesses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 21,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "15 million Business Owners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 48,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), "Data for Any Industry that Makes Calls")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Computer, {
    width: "805px",
    height: "auto",
    src: '../static/img/comp2.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }));
};

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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/PhoneDisplay.js";






var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__StyledHero",
  componentId: "sc-1uvxycy-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;width:100%;position:relative;height:590px;padding:0px;background-color:#6680cd;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23ffffff' fill-opacity='0.55' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\");background-attachment:fixed;overflow:hidden;z-index:0;"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__Left",
  componentId: "sc-1uvxycy-1"
})(["z-index:5;grid-column:1;height:100%;background:rgba(0,0,0,0.3);"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__Middle",
  componentId: "sc-1uvxycy-2"
})(["z-index:5;padding-top:125px;grid-column:2;text-align:center;height:100%;background:rgba(0,0,0,0.3);"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PhoneDisplay__Right",
  componentId: "sc-1uvxycy-3"
})(["z-index:5;grid-column:3;display:block;content:'';width:100%;height:100%;background:rgba(0,0,0,0.3);"]);

var PhoneDisplay = function PhoneDisplay() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
    mutation: _Modal__WEBPACK_IMPORTED_MODULE_4__["TOGGLE_MODAL_MUTATION"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (toggleModal) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHero, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Phone__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleModal: toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneDisplay);

/***/ }),

/***/ "./components/PostsPagination.js":
/*!***************************************!*\
  !*** ./components/PostsPagination.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react'
// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'
// import Link from 'next/link'
// const POSTS_PAGINATION_QUERY = gql`
//   query POSTS_PAGINATION_QUERY {
//     postConnection {
//       aggregate {
//         count
//       }
//     }
//   }
// `
// const PostsPagination = props => {
//   return (
//     <Query query={POSTS_PAGINATION_QUERY}>
//       {({ data, loading, error }) => {
//         if (loading) return <p>Loading...</p>
//         return (
//           <Link>
//             <a className="next">View More</a>
//           </Link>
//         )
//       }}
//     </Query>
//   )
// }
// export default PostsPagination
// export { POSTS_PAGINATION_QUERY }

/***/ }),

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Profile.js";

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



var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Profile__Wrap",
  componentId: "sc-1mebv5n-0"
})(["overflow-x:hidden;.cd-img-replace{display:inline-block;overflow:hidden;text-indent:100%;white-space:nowrap;}.cd-btn{display:inline-block;width:120px;height:30px;line-height:30px;margin-right:8px;text-align:center;text-transform:uppercase;font-weight:bold;font-size:1.2rem;font-family:'PT Sans',sans-serif;color:#ffffff;background-color:rgba(200,100,100,1);box-shadow:0 1px 6px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.2);margin-bottom:25px;}.no-touch .cd-btn:hover{background-color:#756da4;}@media only screen and (min-width:1170px){.cd-btn{width:160px;height:45px;line-height:45px;margin-right:15px;font-size:1.4rem;letter-spacing:2px;}}.cd-product{position:relative;width:90%;max-width:1170px;margin:0 auto;}@media only screen and (min-width:1170px){.cd-product{padding-top:50px;min-height:600px;}.cd-product.is-product-tour{height:auto;padding-bottom:100px;}}.cd-product-intro{padding:0 0;text-align:left;}.cd-product-intro h1{margin-bottom:0px;font-size:2.5rem;font-weight:700;font-family:'PT Sans',sans-serif;color:rgba(20,20,20,0.6);}.cd-product-intro p{max-width:560px;color:rgba(20,20,20,0.6);padding:0 0 20px;font-size:1.4rem;line-height:1;}.cd-product-intro::before{content:'mobile';display:none;}@media (max-width:768px){.cd-product-intro h1{margin-top:50px;}}@media only screen and (min-width:1170px){.cd-product-intro{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:200px;left:0;width:50%;padding:0;text-align:left;-webkit-transition:-webkit-transform 0.6s,opacity 0.6s;-moz-transition:-moz-transform 0.6s,opacity 0.6s;transition:transform 0.6s,opacity 0.6s;}.is-product-tour .cd-product-intro{opacity:0;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);}.cd-product-intro h1{font-size:4rem;}.cd-product-intro p{font-size:1.6rem;padding:10px 0 44px;margin:0;}.cd-product-intro::before{content:'desktop';}}.no-csstransforms3d #cd-start{display:none;}.cd-product-mockup{width:90%;max-width:450px;margin:0 auto 50px;position:relative;}.cd-product-mockup img{display:block;position:relative;outline:1px solid transparent;}@media only screen and (min-width:1170px){.cd-product-mockup{margin-bottom:0;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:center top;-moz-transform-origin:center top;-ms-transform-origin:center top;-o-transform-origin:center top;transform-origin:center top;-webkit-transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px);-moz-transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px);-ms-transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px);-o-transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px);transform:rotateX(-60deg) rotateZ(-40deg) translateX(50px) translateY(300px);-webkit-transition:-webkit-transform 0.6s;-moz-transition:-moz-transform 0.6s;transition:transform 0.6s;}.cd-product-mockup::before{display:block;content:'';position:absolute;top:0;left:0;width:0;height:37%;box-shadow:0px 0px 30px 175px rgba(0,0,0,0.1);-webkit-transform:translateZ(-100px) translateY(480px);-moz-transform:translateZ(-100px) translateY(480px);-ms-transform:translateZ(-100px) translateY(480px);-o-transform:translateZ(-100px) translateY(480px);transform:translateZ(-70px) translateY(410px);-webkit-transition:-webkit-transform 0.6s;-moz-transition:-moz-transform 0.6s;transition:transform 0.6s;}.is-product-tour .cd-product-mockup{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);}.is-product-tour .cd-product-mockup::before{-webkit-transform:translateZ(-100px) translateX(226px) translateY(216px);-moz-transform:translateZ(-100px) translateX(226px) translateY(216px);-ms-transform:translateZ(-100px) translateX(226px) translateY(216px);-o-transform:translateZ(-100px) translateX(226px) translateY(216px);transform:translateZ(-100px) translateX(226px) translateY(216px);}}.cd-product.is-product-tour > .cd-product-mockup::before{display:block;content:'';position:absolute;top:0;left:0;width:0;height:37%;box-shadow:143px 0px 30px 175px rgba(0,0,0,0.2);-webkit-transform:translateZ(-100px) translateY(480px);-moz-transform:translateZ(-100px) translateY(480px);-ms-transform:translateZ(-100px) translateY(480px);-o-transform:translateZ(-100px) translateY(480px);transform:translateZ(-70px) translateY(230px);-webkit-transition:-webkit-transform 0.6s;-moz-transition:-moz-transform 0.6s;transition:transform 0.6s;}.no-csstransforms3d .cd-product:after{content:'';display:table;clear:both;}.no-csstransforms3d .cd-product-mockup{float:right;}.no-csstransforms3d .cd-product-mockup::before{display:none;}.cd-3d-right-side,.cd-3d-bottom-side{display:none;}@media only screen and (min-width:1170px){.cd-3d-right-side,.cd-3d-bottom-side{display:block;position:absolute;left:0;background-image:url('../static/img/samplephil.jpg');outline:1px solid transparent;}.cd-3d-right-side-m{background-image:url('../static/img/samplephil.jpg');}.cd-3d-right-side::after,.cd-3d-bottom-side::after{content:'';display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.2);}}@media only screen and (min-width:1170px){.cd-3d-right-side{top:-1px;width:10px;height:100%;background-size:auto 100%;-webkit-transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center;-webkit-transform:translateZ(-1px) translateY(1px) rotateY(-90deg);-moz-transform:translateZ(-1px) translateY(1px) rotateY(-90deg);-ms-transform:translateZ(-1px) translateY(1px) rotateY(-90deg);-o-transform:translateZ(-1px) translateY(1px) rotateY(-90deg);transform:translateZ(-1px) translateY(1px) rotateY(-90deg);}.cd-3d-bottom-side{bottom:0;width:74.3%;height:10px;background-position:bottom center;background-size:100% auto;-webkit-transform-origin:center bottom;-moz-transform-origin:center bottom;-ms-transform-origin:center bottom;-o-transform-origin:center bottom;transform-origin:center bottom;-webkit-transform:translateZ(-1px) rotateX(-90deg);-moz-transform:translateZ(-1px) rotateX(-90deg);-ms-transform:translateZ(-1px) rotateX(-90deg);-o-transform:translateZ(-1px) rotateX(-90deg);transform:translateZ(-1px) rotateX(-90deg);}.cd-3d-bottom-side::after{background-color:rgba(0,0,0,0.4);}}.no-csstransforms3d .cd-3d-right-side,.no-csstransforms3d .cd-3d-bottom-side{display:none;}.cd-close-product-tour{display:none;}@media only screen and (min-width:1170px){.cd-close-product-tour{display:block;position:absolute;top:40px;right:0;height:40px;width:40px;opacity:0;visibility:hidden;}.no-touch .cd-close-product-tour:hover{opacity:0.8;}.cd-close-product-tour::after,.cd-close-product-tour::before{content:'';height:40px;width:2px;position:absolute;left:50%;top:50%;background-color:rgba(20,20,20,0.6);}.cd-close-product-tour::after{-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);-moz-transform:translateX(-50%) translateY(-50%) rotate(45deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);-o-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);}.cd-close-product-tour::before{-webkit-transform:translateX(-50%) translateY(-50%) rotate(-45deg);-moz-transform:translateX(-50%) translateY(-50%) rotate(-45deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(-45deg);-o-transform:translateX(-50%) translateY(-50%) rotate(-45deg);transform:translateX(-50%) translateY(-50%) rotate(-45deg);}.cd-close-product-tour.is-visible{visibility:visible;opacity:1;}}.cd-single-point{position:absolute;border-radius:50%;list-style:none;}.cd-single-point > a{position:relative;display:block;width:30px;height:30px;border-radius:inherit;background:#ea4a55;box-shadow:0 0 10px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.3);z-index:2;-webkit-transition:background-color 0.3s;-moz-transition:background-color 0.3s;transition:background-color 0.3s;}.cd-single-point > a::after,.cd-single-point > a:before{content:'';position:absolute;left:50%;top:50%;bottom:auto;right:auto;-webkit-transform:translateX(-50%) translateY(-50%);-moz-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);background-color:#ffffff;-webkit-transition:-webkit-transform 0.3s;-moz-transition:-moz-transform 0.3s;transition:transform 0.3s;}.cd-single-point > a::after{height:2px;width:12px;}.cd-single-point > a::before{height:12px;width:2px;}.cd-single-point::after{content:'';position:absolute;z-index:1;width:100%;height:100%;top:0;left:0;border-radius:inherit;background-color:transparent;-webkit-animation:cd-pulse 2s infinite;-moz-animation:cd-pulse 2s infinite;animation:cd-pulse 2s infinite;}.cd-single-point:nth-of-type(1){bottom:58%;right:40%;}.cd-single-point:nth-of-type(2){top:6%;right:5%;}.cd-single-point:nth-of-type(3){top:6%;left:14%;}.cd-single-point.is-open > a{background-color:#685f99;}.cd-single-point.is-open > a::after,.cd-single-point.is-open > a::before{-webkit-transform:translateX(-50%) translateY(-50%) rotate(135deg);-moz-transform:translateX(-50%) translateY(-50%) rotate(135deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(135deg);-o-transform:translateX(-50%) translateY(-50%) rotate(135deg);transform:translateX(-50%) translateY(-50%) rotate(135deg);}.cd-single-point.is-open::after{display:none;}.cd-single-point.is-open .cd-more-info{visibility:visible;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-transition:opacity 0.3s 0s,visibility 0s 0s,-webkit-transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;-moz-transition:opacity 0.3s 0s,visibility 0s 0s,-moz-transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;transition:opacity 0.3s 0s,visibility 0s 0s,transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;}.cd-single-point.visited > a{background-color:#685f99;}.cd-single-point.visited::after{display:none;}@media only screen and (min-width:480px){.cd-single-point.is-open .cd-more-info.cd-left{right:140%;}.cd-single-point.is-open .cd-more-info.cd-right{left:140%;}.cd-single-point.is-open .cd-more-info.cd-top{bottom:140%;}.cd-single-point.is-open .cd-more-info.cd-bottom{top:140%;}}@media only screen and (min-width:1170px){.cd-single-point{-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);}.cd-single-point::after{-webkit-animation:none;-moz-animation:none;animation:none;}.points-enlarged .cd-single-point{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-animation:cd-bounce 0.4s;-moz-animation:cd-bounce 0.4s;animation:cd-bounce 0.4s;}.points-pulsing .cd-single-point::after{-webkit-animation:cd-pulse 2s infinite;-moz-animation:cd-pulse 2s infinite;animation:cd-pulse 2s infinite;}}.no-csstransforms3d .cd-single-point{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);}@-webkit-keyframes cd-bounce{0%{-webkit-transform:scale(0);}60%{-webkit-transform:scale(1.2);}100%{-webkit-transform:scale(1);}}@-moz-keyframes cd-bounce{0%{-moz-transform:scale(0);}60%{-moz-transform:scale(1.2);}100%{-moz-transform:scale(1);}}@keyframes cd-bounce{0%{-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);}60%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2);}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);}}@-webkit-keyframes cd-pulse{0%{-webkit-transform:scale(1);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}50%{box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}100%{-webkit-transform:scale(1.6);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0);}}@-moz-keyframes cd-pulse{0%{-moz-transform:scale(1);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}50%{box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}100%{-moz-transform:scale(1.6);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0);}}@keyframes cd-pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}50%{box-shadow:inset 0 0 1px 1px rgba(234,74,85,0.8);}100%{-webkit-transform:scale(1.6);-moz-transform:scale(1.6);-ms-transform:scale(1.6);-o-transform:scale(1.6);transform:scale(1.6);box-shadow:inset 0 0 1px 1px rgba(234,74,85,0);}}.cd-single-point .cd-more-info{position:fixed;top:0;left:0;z-index:3;width:100%;height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;text-align:left;line-height:1.5;background-color:rgba(255,255,255,0.95);padding:2em 1em 1em;visibility:hidden;opacity:0;-webkit-transform:scale(0.8);-moz-transform:scale(0.8);-ms-transform:scale(0.8);-o-transform:scale(0.8);transform:scale(0.8);-webkit-transition:opacity 0.3s 0s,visibility 0s 0.3s,-webkit-transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;-moz-transition:opacity 0.3s 0s,visibility 0s 0.3s,-moz-transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;transition:opacity 0.3s 0s,visibility 0s 0.3s,transform 0.3s 0s,top 0.3s 0s,bottom 0.3s 0s,left 0.3s 0s,right 0.3s 0s;}.cd-single-point .cd-more-info::before{content:'';position:absolute;height:0;width:0;display:none;border:8px solid transparent;}.cd-single-point .cd-more-info h2{font-size:2.2rem;font-family:'PT Sans',sans-serif;font-weight:bold;margin-bottom:0.6em;}.cd-single-point .cd-more-info p{color:#3d385a;}@media only screen and (min-width:480px){.cd-single-point .cd-more-info{position:absolute;width:220px;height:240px;padding:1em;overflow-y:visible;line-height:1.4;border-radius:0.25em;box-shadow:0 0 20px rgba(61,56,90,0.3);}.cd-single-point .cd-more-info::before{display:block;}.cd-single-point .cd-more-info.cd-left,.cd-single-point .cd-more-info.cd-right{top:50%;bottom:auto;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);}.cd-single-point .cd-more-info.cd-left::before,.cd-single-point .cd-more-info.cd-right::before{top:50%;bottom:auto;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);}.cd-single-point .cd-more-info.cd-left{right:160%;left:auto;}.cd-single-point .cd-more-info.cd-left::before{border-left-color:rgba(255,255,255,0.95);left:100%;}.cd-single-point .cd-more-info.cd-right{left:160%;}.cd-single-point .cd-more-info.cd-right::before{border-right-color:rgba(255,255,255,0.95);right:100%;}.cd-single-point .cd-more-info.cd-top,.cd-single-point .cd-more-info.cd-bottom{left:50%;right:auto;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);}.cd-single-point .cd-more-info.cd-top::before,.cd-single-point .cd-more-info.cd-bottom::before{left:50%;right:auto;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);}.cd-single-point .cd-more-info.cd-top{bottom:160%;top:auto;}.cd-single-point .cd-more-info.cd-top::before{border-top-color:rgba(255,255,255,0.95);top:100%;}.cd-single-point .cd-more-info.cd-bottom{top:160%;}.cd-single-point .cd-more-info.cd-bottom::before{border-bottom-color:rgba(255,255,255,0.95);bottom:100%;}.cd-single-point .cd-more-info h2{margin-bottom:0;}.cd-single-point .cd-more-info p{font-size:1.3rem;}}.cd-close-info{position:fixed;top:0;right:0;height:44px;width:44px;}.cd-close-info::after,.cd-close-info:before{content:'';position:absolute;left:50%;top:50%;bottom:auto;right:auto;background-color:#ea4a55;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);-moz-transform:translateX(-50%) translateY(-50%) rotate(45deg);-ms-transform:translateX(-50%) translateY(-50%) rotate(45deg);-o-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transition-property:transform 0.2s;-moz-transition-property:transform 0.2s;transition-property:transform 0.2s;}.cd-close-info::after{height:2px;width:16px;}.cd-close-info::before{height:16px;width:2px;}@media only screen and (min-width:480px){.cd-close-info{display:none;}}.contact{margin-top:110px;}"]);

var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      addClass: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        addClass: !_this.state.addClass
      });
    });

    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2;

      var boxClass = ['cd-product'];
      var closer = ['cd-close-product-tour'];
      var point = ['cd-single-point'];

      if (this.state.addClass) {
        boxClass.push('is-product-tour');
      }

      if (this.state.addClass) {
        closer.push('is-visible');
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", (_React$createElement2 = {
        className: "cd-product"
      }, _defineProperty(_React$createElement2, "className", boxClass.join(' ')), _defineProperty(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 835
      }), _defineProperty(_React$createElement2, "__self", this), _React$createElement2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cd-product-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 837
        },
        __self: this
      }, this.props.person), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        },
        __self: this
      }, this.props.info), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cd-triggers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.toggle,
        href: "#cd-product-tour",
        id: "cd-start",
        className: "cd-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        __self: this
      }, "Learn More"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.image,
        alt: "Preview image",
        height: "600px",
        width: "334.8px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cd-3d-right-side",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cd-3d-bottom-side",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", (_React$createElement = {
        onClick: this.toggle,
        href: "#cd-product",
        className: "cd-close-product-tour cd-img-replace"
      }, _defineProperty(_React$createElement, "className", closer.join(' ')), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 861
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/Questions.js":
/*!*********************************!*\
  !*** ./components/Questions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Questions.js";


var A = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Questions__A",
  componentId: "sc-9zxn1v-0"
})(["color:rgba(20,110,240,0.8);"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Questions__P",
  componentId: "sc-9zxn1v-1"
})(["background:white;z-index:1;width:200px;margin:0 auto;position:relative;display:block;"]);
var Line = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.hr.withConfig({
  displayName: "Questions__Line",
  componentId: "sc-9zxn1v-2"
})(["height:5;margin:-15px auto 0 auto;width:30%;min-width:325px;z-index:0;position:relative;display:block;"]);

var Questions = function Questions() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '1rem 0 4rem 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Contact EveryData"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '2em',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Questions for Us?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: '1.33em',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Call our friendly support team at (866)403-5986"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    href: "mailto:info@everydata.com ",
    style: {
      fontSize: '1.1em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Send Us an Email by Clicking Here")));
};

/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./components/SingleDay.js":
/*!*********************************!*\
  !*** ./components/SingleDay.js ***!
  \*********************************/
/*! exports provided: default, ALL_POSTS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS_QUERY", function() { return ALL_POSTS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _PostsPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostsPagination */ "./components/PostsPagination.js");
/* harmony import */ var _PostsPagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PostsPagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DeletePost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeletePost */ "./components/DeletePost.js");
/* harmony import */ var _TablePdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TablePdf */ "./components/TablePdf.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/SingleDay.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    posts(skip: $skip, first: $first, orderBy: createdAt_DESC) {\n      id\n      message\n      file\n      createdAt\n      updatedAt\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_6__["postsPerPage"]);
var DayView = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__DayView",
  componentId: "sc-7ehsws-0"
})(["position:relative;width:95%;display:grid;grid-row:1;grid-column:1;height:100%;margin:0 auto;background-color:white;box-shadow:0 1px 5px 3px rgba(0,0,0,0.05);border-radius:20px 20px 5px 5px;z-index:500;overflow-y:scroll;"]);
var Post = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__Post",
  componentId: "sc-7ehsws-1"
})(["flex-flow:column;padding:0px 0px 60px 0;display:flex;margin:0 40px;.postMessage{display:flex;padding:10px 20px;margin-top:20px;background:rgba(150,150,150,0.1);}span{&:nth-child(1){font-family:'Montserrat',sans-serrif;}}div{opacity:0.6;font-size:12px;line-height:10px;}"]);
var MostRecent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleDay__MostRecent",
  componentId: "sc-7ehsws-2"
})(["text-align:center;margin-top:36px;margin-bottom:30px;color:rgba(20,110,220,0.7);span{border-top:1px solid #ccc;opacity:0.7;width:100px;display:inline-block;margin:0 10px 5px 10px;}"]);

var SingleDay =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleDay, _Component);

  function SingleDay() {
    _classCallCheck(this, SingleDay);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleDay).apply(this, arguments));
  }

  _createClass(SingleDay, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
        query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DayView, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: ALL_POSTS_QUERY,
          variables: {
            skip: _this.props.page * _config__WEBPACK_IMPORTED_MODULE_6__["postsPerPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["postsPerPage"],
            first: 5
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          });
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, "Loading...");
          if (!data.posts) return null;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MostRecent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }), "Most Recent", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          })), data.posts.map(function (post) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Post, {
              key: post.createdAt,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            }, Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(post.createdAt, 'dddd MMMM Do, YYYY '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            }, Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["distanceInWordsToNow"])(post.createdAt, {
              addSuffix: true
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeletePost__WEBPACK_IMPORTED_MODULE_9__["default"], {
              id: post.id,
              me: me,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "postMessage",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, post.message), _TablePdf__WEBPACK_IMPORTED_MODULE_10__["default"] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TablePdf__WEBPACK_IMPORTED_MODULE_10__["default"], {
              file: post.file,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }));
          }));
        }));
      });
    }
  }]);

  return SingleDay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleDay);


/***/ }),

/***/ "./components/TablePdf.js":
/*!********************************!*\
  !*** ./components/TablePdf.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_csv_to_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv-to-table */ "react-csv-to-table");
/* harmony import */ var react_csv_to_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv_to_table__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/TablePdf.js";



var CssWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TablePdf__CssWrap",
  componentId: "sc-583blj-0"
})(["display:flex;flex-flow:column;width:100%;tr{font-size:12px;padding:5px 5px;&:hover{background:rgba(20,110,240,0.4);}&:nth-child(2n + 0){background:rgba(20,110,240,0.2);&:hover{background:rgba(20,110,240,0.4);}}}"]);

var TablePdf = function TablePdf(props) {
  return props.file && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CssWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.file), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_csv_to_table__WEBPACK_IMPORTED_MODULE_2__["CsvToHtmlTable"], {
    data: props.file || sampleData,
    csvDelimiter: ",",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TablePdf);

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
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomePage */ "./components/HomePage.js");
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/pages/index.js";



var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 7:
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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "react-csv-to-table":
/*!*************************************!*\
  !*** external "react-csv-to-table" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-csv-to-table");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-text-mask":
/*!**********************************!*\
  !*** external "react-text-mask" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist");

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