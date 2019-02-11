webpackHotUpdate("static/development/pages/addclient.js",{

/***/ "./components/CreateClient.js":
/*!************************************!*\
  !*** ./components/CreateClient.js ***!
  \************************************/
/*! exports provided: default, CREATE_CLIENT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CLIENT_MUTATION", function() { return CREATE_CLIENT_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _styles_SickerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickerButton */ "./components/styles/SickerButton.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CreateClient.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_CLIENT_MUTATION(\n    $firstName: String!\n    $lastName: String!\n    $cellPhone: String!\n    $birthDay: DateTime\n    $image: String\n  ) {\n    createClient(\n      firstName: $firstName\n      lastName: $lastName\n      cellPhone: $cellPhone\n      birthDay: $birthDay\n      image: $image\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Inner = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "CreateClient__Inner",
  componentId: "h45ly-0"
})(["max-width:", ";margin:0 auto;padding:2rem;.dates{font-family:montserrat,sans-serif;text-transform:uppercase;opacity:0.5;&:focus{opacity:1;}&:active{opacity:1;}}.profPic{width:80px;height:80px;background-color:lightgrey;background-position:center;background-repeat:no-repeat;border-radius:50%;cursor:pointer;}"], function (props) {
  return props.theme.innerWidth;
});
var CREATE_CLIENT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

var CreateClient =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateClient, _Component);

  function CreateClient() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateClient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateClient)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      firstName: '',
      lastName: '',
      cellPhone: '',
      birthDay: '',
      image: '../static/img/profpic.jpg'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancelClick", function (e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.back();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreateClient, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_CLIENT_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, function (createClient, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      _context2.next = 3;
                      return createClient();

                    case 3:
                      res = _context2.sent;
                      console.log(res);
                      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                        pathname: '/client',
                        query: {
                          id: res.data.createClient.id
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "firstName",
          className: "required",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "firstName",
          name: "firstName",
          placeholder: "First Name",
          autoComplete: "off",
          autoFocus: true,
          required: true,
          value: _this2.state.firstName.charAt(0).toUpperCase() + _this2.state.firstName.slice(1).trim(),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "lastName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "lastName",
          name: "lastName",
          placeholder: "Last Name",
          autoComplete: "off",
          required: true,
          value: _this2.state.lastName.charAt(0).toUpperCase() + _this2.state.lastName.slice(1).trim(),
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "cellPhone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Cell Phone", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_text_mask__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
            lineNumber: 133
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "birthDay",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "Birthday", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "dates",
          type: "date",
          id: "birthDay",
          name: "birthDay",
          autoComplete: "off",
          value: _this2.state.birthDay,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, "Add Client's Photo", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "upload their picture",
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "profPic",
          width: "150",
          src: _this2.state.image,
          alt: "upload preview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "Add Contact"), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickerButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: _this2.handleCancelClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Cancel")));
      }));
    }
  }]);

  return CreateClient;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateClient);


/***/ }),

/***/ "./components/styles/SickerButton.js":
/*!*******************************************!*\
  !*** ./components/styles/SickerButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SickerButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "SickerButton",
  componentId: "g5nnpk-0"
})(["background:rgba(10,120,240,1);color:white;font-weight:800;border:0;margin:10px 20px;border-radius:5px;font-size:2rem;padding:0.5rem 1.2rem;font-size:1.8rem;display:inline-block;transition:all 0.5s;outline:none;cursor:pointer;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.2);&[disabled]{opacity:0.5;}&:hover{background:rgba(230,10,40,0.7);}&:active{box-shadow:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickerButton);

/***/ })

})
//# sourceMappingURL=addclient.js.cfba6c4a59de69f4355d.hot-update.js.map