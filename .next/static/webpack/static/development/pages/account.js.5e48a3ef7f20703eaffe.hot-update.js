webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/UpdateScheduleSettings.js":
/*!**********************************************!*\
  !*** ./components/UpdateScheduleSettings.js ***!
  \**********************************************/
/*! exports provided: default, CREATE_REASON_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_REASON_MUTATION", function() { return CREATE_REASON_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _SlideDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SlideDown */ "./components/SlideDown.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _Reason__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Reason */ "./components/Reason.js");
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");

var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/UpdateScheduleSettings.js";

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_REASON_MUTATION(\n    $name: String!\n    $defaultLength: Int\n    $provider: String\n    $color: String!\n  ) {\n    createReason(\n      name: $name\n      defaultLength: $defaultLength\n      provider: $provider\n      color: $color\n    ) {\n      id\n      defaultLength\n      name\n      color\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















var CREATE_REASON_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "UpdateScheduleSettings__Inner",
  componentId: "sc-183e56o-0"
})(["text-align:left;max-width:", ";margin:0 auto;padding:2rem 0;padding-top:0;.color{margin:15px 0;}.dates{font-family:'Montserrat',sans-serif;text-transform:uppercase;opacity:0.5;&:focus{opacity:1;}&:active{opacity:1;}}"], function (props) {
  return props.theme.innerWidth;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "UpdateScheduleSettings__Flex",
  componentId: "sc-183e56o-1"
})(["display:flex;flex-flow:row wrap;"]);
var Types = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h2.withConfig({
  displayName: "UpdateScheduleSettings__Types",
  componentId: "sc-183e56o-2"
})(["display:inline-flex;align-items:center;"]);
var AButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a.withConfig({
  displayName: "UpdateScheduleSettings__AButton",
  componentId: "sc-183e56o-3"
})(["background:rgba(20,110,240,1);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;height:25px;width:25px;margin:0px 10px;box-shadow:1px 1px 4px 2px rgba(0,0,0,0.3);border:none;position:relative;z-index:20;cursor:pointer;opacity:0.6;outline:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;&:hover{opacity:0.7;}.child{position:absolute;justify-self:center;display:flex;font-family:'Montserrat',sans-serif;color:white;font-size:2.8rem;padding-left:0px;}"]);
var Submitted = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "UpdateScheduleSettings__Submitted",
  componentId: "sc-183e56o-4"
})(["color:green;background:white;padding:15px 15px;border-left:5px solid green;"]);
var colourOptions = [{
  value: 'blue',
  label: 'Blue',
  color: '#0052CC'
}, {
  value: 'ocean',
  label: 'Ocean',
  color: '#00B8D9'
}, {
  value: 'purple',
  label: 'Purple',
  color: '#5243AA'
}, {
  value: 'red',
  label: 'Red',
  color: '#FF5630'
}, {
  value: 'orange',
  label: 'Orange',
  color: '#FF8B00'
}, {
  value: 'yellow',
  label: 'Yellow',
  color: '#FFC400'
}, {
  value: 'green',
  label: 'Green',
  color: '#36B37E'
}, {
  value: 'forest',
  label: 'Forest',
  color: '#00875A'
}, {
  value: 'slate',
  label: 'Slate',
  color: '#253858'
}, {
  value: 'silver',
  label: 'Silver',
  color: '#666666'
}];

var dot = function dot() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ccc';
  return {
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10
    }
  };
};

var colourStyles = {
  control: function control(styles) {
    return _objectSpread({}, styles, {
      backgroundColor: 'white'
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    var color = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(data.color);
    return _objectSpread({}, styles, {
      backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled ? '#ccc' : isSelected ? chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a.contrast(color, 'white') > 2 ? 'white' : 'black' : data.color
    });
  },
  input: function input(styles) {
    return _objectSpread({}, styles, dot());
  },
  placeholder: function placeholder(styles) {
    return _objectSpread({}, styles, dot());
  },
  singleValue: function singleValue(styles, _ref2) {
    var data = _ref2.data;
    return _objectSpread({}, styles, dot(data.color));
  }
};

var UpdateScheduleSettings =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateScheduleSettings, _Component);

  function UpdateScheduleSettings() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateScheduleSettings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateScheduleSettings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: '',
      defaultLength: 0,
      provider: '',
      checked: false,
      selectedOption: 'blue'
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_this), "handleColor", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      console.log("Option selected:", selectedOption);
    });

    _defineProperty(_assertThisInitialized(_this), "createReason",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, createReasonMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return createReasonMutation();

              case 3:
                res = _context.sent;
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleCancelClick", function (e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.back();
    });

    return _this;
  }

  _createClass(UpdateScheduleSettings, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedOption = this.state.selectedOption;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _SingleDay__WEBPACK_IMPORTED_MODULE_13__["ALL_REASONS_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, function (_ref4) {
        var data = _ref4.data,
            loading = _ref4.loading,
            error = _ref4.error;
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, "Loading...");
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: CREATE_REASON_MUTATION,
          variables: _objectSpread({}, _this2.state, {
            color: _this2.state.selectedOption.color
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, function (createReason, _ref5) {
          var loading = _ref5.loading,
              error = _ref5.error,
              called = _ref5.called;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onSubmit: function onSubmit(e) {
              return _this2.createReason(e, createReason);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }), !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submitted, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }, "New Appointment Type Created SuccessFully!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
            mutation: _SlideDown__WEBPACK_IMPORTED_MODULE_9__["TOGGLE_SLIDE_MUTATION"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, function (toggleSlide) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Types, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 219
              },
              __self: this
            }, "Appointment Types"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AButton, {
              onClick: toggleSlide,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 220
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "child",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              },
              __self: this
            }, "+")));
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Flex, {
            style: {
              padding: '0'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, data.reasons.map(function (reason) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Reason__WEBPACK_IMPORTED_MODULE_12__["default"], {
              key: reason.id,
              reason: reason,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              },
              __self: this
            });
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideDown__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 231
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "firstName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, "Name of Appointment Type", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Name",
            autoComplete: "off",
            required: true,
            value: _this2.state.name,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, "Select Color to Identify Appointment Type", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "color",
            styles: colourStyles,
            value: selectedOption,
            onChange: _this2.handleColor,
            options: colourOptions,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "defaultLength",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            },
            __self: this
          }, "Default Length:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "number",
            min: "0",
            max: "800",
            step: "15",
            id: "defaultLength",
            name: "defaultLength",
            value: _this2.state.defaultLength,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "provider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, "Appointment Belongs to Specific Provider?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "provider",
            name: "provider",
            placeholder: "provider",
            value: _this2.state.provider,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            },
            __self: this
          }, "Creat", loading ? 'ing' : 'e', " Appointment Type"), ' ')));
        });
      }));
    }
  }]);

  return UpdateScheduleSettings;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateScheduleSettings);


/***/ })

})
//# sourceMappingURL=account.js.5e48a3ef7f20703eaffe.hot-update.js.map