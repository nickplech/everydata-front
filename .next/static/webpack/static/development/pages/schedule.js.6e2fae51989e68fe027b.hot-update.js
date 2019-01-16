webpackHotUpdate("static/development/pages/schedule.js",{

/***/ "./components/CalendarDayHour.js":
/*!***************************************!*\
  !*** ./components/CalendarDayHour.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CalendarDayHour.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].table.withConfig({
  displayName: "CalendarDayHour__StyledTable",
  componentId: "ntzlwl-0"
})(["position:relative;display:flex;width:100%;margin-top:30px;border-spacing:0 0px;border-top:1px solid lightgrey;"]);
var Hour = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
  displayName: "CalendarDayHour__Hour",
  componentId: "ntzlwl-1"
})(["border-bottom:1px solid lightgrey;border-left:1px solid lightgrey;text-align:left;padding:4px 8px;font-size:12px;"]);
var BorderlessHour = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].th.withConfig({
  displayName: "CalendarDayHour__BorderlessHour",
  componentId: "ntzlwl-2"
})(["border-bottom:none;text-align:left;padding:4px 8px;font-size:12px;"]);
var BorderlessSub = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].td.withConfig({
  displayName: "CalendarDayHour__BorderlessSub",
  componentId: "ntzlwl-3"
})(["border-bottom:none;text-align:left;padding:4px 8px;font-size:12px;"]);
var Sub = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].td.withConfig({
  displayName: "CalendarDayHour__Sub",
  componentId: "ntzlwl-4"
})(["border-bottom:1px solid lightgrey;border-left:1px solid lightgrey;text-align:left;padding:4px 8px;font-size:12px;"]);

var HourRow = function HourRow(props) {
  var category = props.category;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorderlessHour, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hour, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, category));
};

var ProductRow = function ProductRow(props) {
  var product = props.product;
  var name = product.booked ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: 'lightgrey'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, product.name) : product.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorderlessSub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
};

var ProductTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTable).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var rows = [];
      var lastCategory = null;
      this.props.products.map(function (product) {
        if (product.category !== lastCategory) {
          rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HourRow, {
            category: product.category,
            key: product.category,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }));
        }

        rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductRow, {
          product: product,
          key: product.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }));
        lastCategory = product.category;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTable, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, rows));
    }
  }]);

  return ProductTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "CalendarDayHour__StyledTitle",
  componentId: "ntzlwl-5"
})(["color:rgb(100,100,240);"]);

var FilterableProductTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(FilterableProductTable, _React$Component2);

  function FilterableProductTable(props) {
    var _this;

    _classCallCheck(this, FilterableProductTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterableProductTable).call(this, props));
    _this.state = {
      booked: false
    };
    return _this;
  }

  _createClass(FilterableProductTable, [{
    key: "render",
    value: function render() {
      var today = new Date();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(today, 'MMMM d, YYYY', {
        awareOfUnicodeTokens: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductTable, {
        products: this.props.products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }]);

  return FilterableProductTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilterableProductTable);

/***/ })

})
//# sourceMappingURL=schedule.js.6e2fae51989e68fe027b.hot-update.js.map