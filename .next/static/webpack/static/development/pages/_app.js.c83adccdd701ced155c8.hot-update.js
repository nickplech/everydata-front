webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _styles_SickerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/SickerButton */ "./components/styles/SickerButton.js");
/* harmony import */ var _ClientSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClientSearch */ "./components/ClientSearch.js");

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









var OPEN_MODAL_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "sc-105rmtf-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);z-index:990;"]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Modal__Modall",
  componentId: "sc-105rmtf-1"
})(["background-color:#fff;border-radius:25px;display:grid;grid-template-rows:1fr 55px;grid-template-columns:1fr;position:absolute;align-items:flex-start;width:500px;height:500px;padding:15px 25px;z-index:999;box-shadow:1px 1px 5px 3px rgba(0,0,0,0.3);"]);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].select.withConfig({
  displayName: "Modal__StyledInput",
  componentId: "sc-105rmtf-2"
})(["width:100%;border:2px solid rgba(20,20,20,0.4);background:transparent;margin:5px 0 20px 0;height:50px;font-size:2rem;font-weight:500;color:rgba(0,0,0,0.5);outline:none;position:relative;z-index:990;option{background:white;padding:1rem;transition:all 0.2s;padding-left:2rem;display:flex;align-items:center;}"]);
var StyledTextArea = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].textarea.withConfig({
  displayName: "Modal__StyledTextArea",
  componentId: "sc-105rmtf-3"
})(["padding:5px;width:100%;background:transparent;font-size:2rem;outline:none;resize:none;border:2px solid rgba(20,20,20,0.4);border-radius:5px;&:focus{outline:none;}"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Modal__Date",
  componentId: "sc-105rmtf-4"
})(["grid-column:1;grid-row:1;justify-content:flex-end;border-radius:25px 25px 0 0;height:100%;padding:5px 20px 0px 20px;p{margin:10px;color:", ";padding:0px 0px;font-size:2.2rem;position:relative;}h3{margin:0;}"], function (props) {
  return props.theme.blue;
});
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "Modal__Cancel",
  componentId: "sc-105rmtf-5"
})(["background-color:#fff;border-radius:20px;display:grid;grid-row:2;margin-left:25px;position:absolute;left:0;align-items:center;justify-content:center;height:60%;background:rgba(220,100,120,1);color:white;width:100px;cursor:pointer;border:none;transition:0.3s;font-size:18px;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;transform:scale(1.1);}"]);
var Save = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "Modal__Save",
  componentId: "sc-105rmtf-6"
})(["background-color:#fff;border:none;border-radius:20px;display:grid;right:0;grid-row:2;cursor:pointer;position:absolute;align-items:center;width:100px;height:60%;background:rgba(20,200,120,1);color:white;font-size:18px;margin-right:25px;transition:0.3s;z-index:900;&:focus{outline:none;}&:hover{opacity:0.8;transform:scale(1.1);}"]);

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
      clients: [],
      reason: '',
      date: '',
      startTime: '',
      length: '',
      notes: ''
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
          lineNumber: 175
        },
        __self: this
      }, function (toggleModal) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: OPEN_MODAL_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
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
              lineNumber: 183
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modall, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
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
                        return createAppointment();

                      case 3:
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
              lineNumber: 185
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Date, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(_this2.props.date, 'MMMM Do, YYYY')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, _this2.props.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ClientSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: "clients",
            type: "search",
            value: _this2.state.clients,
            handleChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "reason",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, "Appointment Type:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
            name: "reason",
            type: "select",
            multiple: false,
            value: _this2.state.reason,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, _this2.props.reasons.map(function (reason, i) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: reason.name,
              key: reason.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              },
              __self: this
            }, reason.name);
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "note",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, "Notes:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea, {
            name: "notes",
            type: "text",
            value: _this2.state.notes,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            type: "submit",
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, "Save"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickerButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, "Cancel"))));
        });
      });
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ })

})
//# sourceMappingURL=_app.js.c83adccdd701ced155c8.hot-update.js.map