webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Modal.js";

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





var OPEN_MODAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "sc-105rmtf-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);"]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Modal__Modall",
  componentId: "sc-105rmtf-1"
})(["background-color:#fff;border-radius:25px;flex-flow:column;display:grid;grid-template-rows:50px 1fr 80px;position:absolute;align-items:center;width:500px;min-height:300px;padding:10px 25px;z-index:900;box-shadow:-3px 0px 6px 3px rgba(0,0,0,0.3);"]);
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Modal__Cancel",
  componentId: "sc-105rmtf-2"
})(["background-color:#fff;border-radius:5px;display:grid;grid-row:3;position:relative;align-items:center;margin:0 auto;height:50%;background:rgba(220,100,120,1);color:white;width:120px;font-size:22px;z-index:900;"]);
var Save = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Modal__Save",
  componentId: "sc-105rmtf-3"
})(["background-color:#fff;border-radius:5px;display:grid;grid-row:3;margin:0 auto;position:relative;align-items:center;width:120px;height:50%;background:rgba(20,200,120,1);color:white;font-size:22px;z-index:900;"]);

var Modal = function Modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: TOGGLE_MODAL_MUTATION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, function (toggleModal) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: OPEN_MODAL_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, function (_ref) {
      var data = _ref.data;

      if (!data.openModal) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackDrop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modall, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, props.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cancel, {
        onClick: toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Save, {
        onClick: toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Save")));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ })

})
//# sourceMappingURL=signup.js.ea9f5d5c761e1d2cd07a.hot-update.js.map