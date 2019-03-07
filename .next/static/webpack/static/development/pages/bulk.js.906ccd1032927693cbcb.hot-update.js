webpackHotUpdate("static/development/pages/bulk.js",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default, OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION, ALL_REASONS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL_QUERY", function() { return OPEN_MODAL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL_MUTATION", function() { return TOGGLE_MODAL_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REASONS_QUERY", function() { return ALL_REASONS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ClientSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClientSearch */ "./components/ClientSearch.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Modal.js";

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query ALL_REASONS_QUERY {\n    reasons(orderBy: name_ASC) {\n      id\n      name\n      color\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

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








var OPEN_MODAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var SINGLE_REASON_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
var ALL_REASONS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());
var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "sc-105rmtf-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);z-index:990;"]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Modal__Modall",
  componentId: "sc-105rmtf-1"
})(["background-color:#fff;border-radius:25px;display:grid;grid-template-rows:120px 1fr 35px;grid-template-columns:1fr 1fr;position:absolute;align-items:flex-start;width:500px;height:500px;padding:0px 0px 25px 0px;z-index:999;box-shadow:1px 1px 5px 3px rgba(0,0,0,0.3);"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Modal__Middle",
  componentId: "sc-105rmtf-2"
})(["grid-row:2;width:100%;grid-column:1/3;padding:30px 20px;border-top:3px solid grey;"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].select.withConfig({
  displayName: "Modal__StyledInput",
  componentId: "sc-105rmtf-3"
})(["width:100%;background:transparent;border:none;font-size:2rem;outline:none;"]);
var StyledTextArea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].textarea.withConfig({
  displayName: "Modal__StyledTextArea",
  componentId: "sc-105rmtf-4"
})(["padding:10px;width:100%;background:transparent;font-size:2rem;outline:none;resize:none;border:2px solid rgba(220,220,220,1);&:focus{outline:none;}"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Modal__Date",
  componentId: "sc-105rmtf-5"
})(["align-self:center;grid-column:1/3;grid-row:1;justify-content:center;border-radius:25px 25px 0 0;overflow:hidden;height:100%;padding:5px 20px 0px 20px;p{margin:0;font-family:'Montserrat',sans-serif;color:", ";display:block;text-align:center;padding:0px 0px;font-size:2.2rem;position:relative;}h3{margin:0;}"], function (props) {
  return props.theme.blue;
});
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "Modal__Cancel",
  componentId: "sc-105rmtf-6"
})(["background-color:#fff;border-radius:5px;display:grid;grid-row:3;grid-column:2;position:relative;align-items:center;justify-self:flex-start;height:100%;background:rgba(220,100,120,1);color:white;width:100px;font-size:18px;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;}"]);
var Save = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "Modal__Save",
  componentId: "sc-105rmtf-7"
})(["background-color:#fff;border-radius:5px;display:grid;grid-column:2;grid-row:3;justify-self:flex-end;position:relative;align-items:center;width:100px;height:100%;background:rgba(20,200,120,1);color:white;font-size:18px;margin-right:25px;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;}"]); // const SAMPLE = ['Fraxel', 'Hair']

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
      client: '',
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
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_REASONS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: TOGGLE_MODAL_MUTATION,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, function (toggleModal) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
            query: OPEN_MODAL_QUERY,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, function (_ref2) {
            var data = _ref2.data;

            if (!data.openModal) {
              return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackDrop, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modall, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 202
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 203
              },
              __self: this
            }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(_this2.props.date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 204
              },
              __self: this
            }, _this2.props.time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 207
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: this
            }, "For:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              htmlFor: "reason",
              className: "required",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 214
              },
              __self: this
            }, "Type:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
              style: {
                paddingTop: '3px',
                marginBottom: '10px'
              },
              type: "text",
              id: "reason",
              name: "reason",
              placeholder: "Appointment Type",
              autoComplete: "off",
              required: true,
              value: _this2.state.reason,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 216
              },
              __self: this
            }, data.reasons.map(function (reason, i) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: i,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 231
                },
                __self: this
              }, reason.name);
            }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              htmlFor: "note",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235
              },
              __self: this
            }, "Notes:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextArea, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 237
              },
              __self: this
            })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cancel, {
              onClick: toggleModal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 242
              },
              __self: this
            }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Save, {
              onClick: toggleModal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243
              },
              __self: this
            }, "Save")));
          });
        });
      });
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ })

})
//# sourceMappingURL=bulk.js.906ccd1032927693cbcb.hot-update.js.map