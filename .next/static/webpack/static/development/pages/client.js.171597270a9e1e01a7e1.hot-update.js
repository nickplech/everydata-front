webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/ReviewMessage.js":
/*!*************************************!*\
  !*** ./components/ReviewMessage.js ***!
  \*************************************/
/*! exports provided: default, TEXT_TEMPLATES_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TEMPLATES_QUERY", function() { return TEXT_TEMPLATES_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DaySelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DaySelector */ "./components/DaySelector.js");
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimePicker */ "./components/TimePicker.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ReviewMessage.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query TEXT_TEMPLATES_QUERY {\n    textTemplates {\n      id\n      name\n      content\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var TEXT_TEMPLATES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Back = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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

var MessageEdit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "ReviewMessage__MessageEdit",
  componentId: "sc-1kkiazb-1"
})(["grid-column:2;grid-row:2;position:relative;z-index:6;width:100%;padding:10px;height:100%;border-radius:10px;font-size:2rem;resize:none;border:none;box-shadow:0 0 4px 3px rgba(0,0,0,0.05);&:focus{outline:none;}"]);
var Send = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ReviewMessage__Send",
  componentId: "sc-1kkiazb-2"
})(["background:rgba(30,110,240,1);color:white;font-weight:800;border:none;width:75px;font-size:2rem;height:75px;font-size:1.8rem;border-radius:50%;outline:none;cursor:pointer;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);&:active{box-shadow:none;}&[disabled]{opacity:0.5;}&:hover{background:rgba(30,110,240,0.9);}"]);

var ReviewMessage = function ReviewMessage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    var business = me.businessName.toString();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Back, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
      query: TEXT_TEMPLATES_QUERY // variables={{ id: 'cjtdj1u818f3m0b51mos9b43o' }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, function (_ref2) {
      var data = _ref2.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DaySelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimePicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageEdit, {
        readOnly: true,
        max: 160,
        value: data.textTemplates[0].content.replace('<business>', {
          business: business
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewMessage);


/***/ })

})
//# sourceMappingURL=client.js.171597270a9e1e01a7e1.hot-update.js.map