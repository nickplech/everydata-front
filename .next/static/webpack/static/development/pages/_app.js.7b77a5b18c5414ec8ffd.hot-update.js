webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Slider.js";

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
var ConfList = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Slider__ConfList",
  componentId: "sc-94qe3k-0"
})(["display:flex;font-family:'Montserrat',sans-serif;text-align:center;align-items:center;width:100%;.flexChild{display:block;align-content:center;justify-content:center;width:100%;color:white;}.scroll{height:300px;overflow-y:scroll;overscroll-behavior:contain;overflow-x:hidden;&::-webkit-scrollbar{display:none;}}.confirmed{background:rgba(100,190,90,0.9);border-radius:15px 0 0 15px;}.canceled{background:rgba(200,80,90,0.9);}.unconfirmed{background:grey;border-radius:0 15px 15px 0;}"]);

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfDay"])(new Date())
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var date = this.state.date;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        if (!me) return null;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: TOGGLE_CART_MUTATION,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, function (toggleCart) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
            query: LOCAL_STATE_QUERY,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, function (_ref2) {
            var data = _ref2.data;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
              open: data.cartOpen,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              onClick: toggleCart,
              title: "close",
              className: "exy",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "child",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_5__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            }, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfList, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "confirmed",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            }, "Confirmed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'green'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            }, me.cart.length, " of", ' ', me.cart.reduce(function (tally, cartItem) {
              return tally + cartItem.quantity;
            }, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return cartItem.confirmationStatus === 'CONFIRMED' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                },
                __self: this
              }) : null;
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "canceled",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, "Canceled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'red'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            }, me.cart.length, " of", ' ', me.cart.reduce(function (tally, cartItem) {
              return tally + cartItem.quantity;
            }, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return cartItem.confirmationStatus === 'CANCELED' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122
                },
                __self: this
              }) : null;
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "flexChild",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "unconfirmed",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, "Unconfirmed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              style: {
                color: 'grey'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, (me.cart.filter(function (cartItem) {
              return cartItem.confirmationStatus === 'UNCONFIRMED' && cartItem.confirmationStatus;
            }), confirmationStatus.length), "of", ' ', me.cart.reduce(function (tally, cartItem) {
              return tally + cartItem.quantity;
            }, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "scroll",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              },
              __self: this
            }, me.cart.map(function (cartItem) {
              return cartItem.confirmationStatus === 'UNCONFIRMED' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
                key: cartItem.id,
                cartItem: cartItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
                },
                __self: this
              }) : null;
            })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }));
          });
        });
      });
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slider);


/***/ })

})
//# sourceMappingURL=_app.js.7b77a5b18c5414ec8ffd.hot-update.js.map