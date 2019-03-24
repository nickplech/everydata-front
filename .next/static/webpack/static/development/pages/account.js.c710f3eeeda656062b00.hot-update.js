webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Accordian.js":
false,

/***/ "./components/SlideDown.js":
/*!*********************************!*\
  !*** ./components/SlideDown.js ***!
  \*********************************/
/*! exports provided: MyDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDropdown", function() { return MyDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slidedown */ "./node_modules/react-slidedown/lib/slidedown.js");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/SlideDown.js";



var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SlideDown__Wrap",
  componentId: "sc-2x2b9z-0"
})([".react-slidedown{height:0;transition-property:none;transition-duration:0.5s;transition-timing-function:ease-in-out;}.react-slidedown.transitioning{overflow-y:hidden;}.react-slidedown.closed{display:none;}"]);
function MyDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slidedown__WEBPACK_IMPORTED_MODULE_1__["SlideDown"], {
    className: 'my-dropdown-slidedown',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.open ? props.children : null));
}

/***/ }),

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
var Submitted = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p.withConfig({
  displayName: "UpdateScheduleSettings__Submitted",
  componentId: "sc-183e56o-1"
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
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _SingleDay__WEBPACK_IMPORTED_MODULE_13__["ALL_REASONS_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
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
            lineNumber: 150
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
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
            lineNumber: 154
          },
          __self: this
        }, function (createReason, _ref5) {
          var loading = _ref5.loading,
              error = _ref5.error,
              called = _ref5.called;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideDown__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onSubmit: function onSubmit(e) {
              return _this2.createReason(e, createReason);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }), !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submitted, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, "New Appointment Type Created SuccessFully!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "Appointment Types"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
            style: {
              padding: '0'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, data.reasons.map(function (reason) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Reason__WEBPACK_IMPORTED_MODULE_12__["default"], {
              key: reason.id,
              reason: reason,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175
              },
              __self: this
            });
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "firstName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
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
              lineNumber: 181
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
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
              lineNumber: 194
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "defaultLength",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, "Default Length(optional):", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
              lineNumber: 204
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "provider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, "Appointment Belongs to Specific Provider?(optional)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "provider",
            name: "provider",
            placeholder: "provider",
            value: _this2.state.provider,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }, "Creat", loading ? 'ing' : 'e', " Appointment Type"))));
        });
      }));
    }
  }]);

  return UpdateScheduleSettings;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateScheduleSettings);


/***/ }),

/***/ "./node_modules/chain-function/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chain-function/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ "./node_modules/react-slidedown/lib/TransitionGroup/ChildMapping.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-slidedown/lib/TransitionGroup/ChildMapping.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function getChildMapping(children) {
    if (!children) {
        return children;
    }
    var result = {};
    react_1.Children.map(children, function (child) { return child; })
        .forEach(function (child) {
        result[child.key] = child;
    });
    return result;
}
exports.getChildMapping = getChildMapping;
function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        if (next.hasOwnProperty(key)) {
            return next[key];
        }
        return prev[key];
    }
    var nextKeysPending = {};
    var pendingKeys = [];
    for (var prevKey in prev) {
        if (next.hasOwnProperty(prevKey)) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        }
        else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next) {
        if (nextKeysPending.hasOwnProperty(nextKey)) {
            for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
exports.mergeChildMappings = mergeChildMappings;
//# sourceMappingURL=ChildMapping.js.map

/***/ }),

/***/ "./node_modules/react-slidedown/lib/TransitionGroup/TransitionGroup.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-slidedown/lib/TransitionGroup/TransitionGroup.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var chain_function_1 = tslib_1.__importDefault(__webpack_require__(/*! chain-function */ "./node_modules/chain-function/index.js"));
var ChildMapping_1 = __webpack_require__(/*! ./ChildMapping */ "./node_modules/react-slidedown/lib/TransitionGroup/ChildMapping.js");
var TransitionGroup = (function (_super) {
    tslib_1.__extends(TransitionGroup, _super);
    function TransitionGroup(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.performAppear = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component.componentWillAppear) {
                component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
            }
            else {
                _this._handleDoneAppearing(key, component);
            }
        };
        _this._handleDoneAppearing = function (key, component) {
            if (component && component.componentDidAppear) {
                component.componentDidAppear();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = ChildMapping_1.getChildMapping(_this.props.children);
            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
                _this.performLeave(key, component);
            }
        };
        _this.performEnter = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component.componentWillEnter) {
                component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
            }
            else {
                _this._handleDoneEntering(key, component);
            }
        };
        _this._handleDoneEntering = function (key, component) {
            if (component && component.componentDidEnter) {
                component.componentDidEnter();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = ChildMapping_1.getChildMapping(_this.props.children);
            if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
                _this.performLeave(key, component);
            }
        };
        _this.performLeave = function (key, component) {
            _this.currentlyTransitioningKeys[key] = true;
            if (component && component.componentWillLeave) {
                component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
            }
            else {
                _this._handleDoneLeaving(key, component);
            }
        };
        _this._handleDoneLeaving = function (key, component) {
            if (component && component.componentDidLeave) {
                component.componentDidLeave();
            }
            delete _this.currentlyTransitioningKeys[key];
            var currentChildMapping = ChildMapping_1.getChildMapping(_this.props.children);
            if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
                _this.keysToEnter.push(key);
            }
            else {
                _this.setState(function (state) {
                    var newChildren = tslib_1.__assign({}, state.children);
                    delete newChildren[key];
                    return { children: newChildren };
                });
            }
        };
        _this.childRefs = Object.create(null);
        _this.currentlyTransitioningKeys = {};
        _this.keysToEnter = [];
        _this.keysToLeave = [];
        _this.state = {
            children: ChildMapping_1.getChildMapping(props.children),
        };
        return _this;
    }
    TransitionGroup.prototype.componentDidMount = function () {
        var initialChildMapping = this.state.children;
        for (var key in initialChildMapping) {
            if (initialChildMapping[key]) {
                this.performAppear(key, this.childRefs[key]);
            }
        }
    };
    TransitionGroup.getDerivedStateFromProps = function (props, state) {
        var nextChildMapping = ChildMapping_1.getChildMapping(props.children);
        var prevChildMapping = state.children;
        return {
            children: ChildMapping_1.mergeChildMappings(prevChildMapping, nextChildMapping),
        };
    };
    TransitionGroup.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var _this = this;
        var nextChildMapping = ChildMapping_1.getChildMapping(this.props.children);
        var prevChildMapping = prevState.children;
        for (var key in nextChildMapping) {
            var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
            if (nextChildMapping[key] && !hasPrev &&
                !this.currentlyTransitioningKeys[key]) {
                this.keysToEnter.push(key);
            }
        }
        for (var key in prevChildMapping) {
            var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
            if (prevChildMapping[key] && !hasNext &&
                !this.currentlyTransitioningKeys[key]) {
                this.keysToLeave.push(key);
            }
        }
        var keysToEnter = this.keysToEnter;
        this.keysToEnter = [];
        keysToEnter.forEach(function (key) { return _this.performEnter(key, _this.childRefs[key]); });
        var keysToLeave = this.keysToLeave;
        this.keysToLeave = [];
        keysToLeave.forEach(function (key) { return _this.performLeave(key, _this.childRefs[key]); });
    };
    TransitionGroup.prototype.render = function () {
        var _this = this;
        var childrenToRender = [];
        var _loop_1 = function (key) {
            var child = this_1.state.children[key];
            if (child) {
                var isCallbackRef = typeof child.ref !== 'string';
                var factoryChild = this_1.props.childFactory(child);
                var ref = function (r) {
                    _this.childRefs[key] = r;
                };
                if (!isCallbackRef) {
                    throw new Error('string refs are not supported on children of TransitionGroup. ' +
                        'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute');
                }
                if (factoryChild === child && isCallbackRef) {
                    ref = chain_function_1.default(child.ref, ref);
                }
                childrenToRender.push(react_1.default.cloneElement(factoryChild, {
                    key: key,
                    ref: ref,
                }));
            }
        };
        var this_1 = this;
        for (var key in this.state.children) {
            _loop_1(key);
        }
        var props = tslib_1.__assign({}, this.props);
        delete props.childFactory;
        delete props.component;
        return react_1.default.createElement(this.props.component, props, childrenToRender);
    };
    TransitionGroup.defaultProps = {
        component: 'span',
        childFactory: function (child) { return child; },
    };
    return TransitionGroup;
}(react_1.default.Component));
exports.default = TransitionGroup;
//# sourceMappingURL=TransitionGroup.js.map

/***/ }),

/***/ "./node_modules/react-slidedown/lib/slidedown.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slidedown/lib/slidedown.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var TransitionGroup_1 = tslib_1.__importDefault(__webpack_require__(/*! ./TransitionGroup/TransitionGroup */ "./node_modules/react-slidedown/lib/TransitionGroup/TransitionGroup.js"));
var SlideDownContent = (function (_super) {
    tslib_1.__extends(SlideDownContent, _super);
    function SlideDownContent(props) {
        var _this = _super.call(this, props) || this;
        _this.outerRef = null;
        _this.handleRef = function (ref) {
            _this.outerRef = ref;
            if (_this.props.forwardedRef) {
                if (typeof _this.props.forwardedRef === 'function') {
                    _this.props.forwardedRef(ref);
                }
                else if (typeof _this.props.forwardedRef === 'object') {
                    var forwardedRef = _this.props.forwardedRef;
                    forwardedRef.current = ref;
                }
                else {
                    throw new Error("Invalid forwardedRef " + _this.props.forwardedRef);
                }
            }
        };
        _this.handleTransitionEnd = function (evt) {
            if ((evt.target === _this.outerRef) && (evt.propertyName === 'height')) {
                var callback = _this.callbacks.shift();
                callback && callback();
                if (_this.callbacks.length === 0) {
                    _this.outerRef.classList.remove('transitioning');
                    _this.outerRef.style.transitionProperty = 'none';
                    _this.outerRef.style.height = _this.props.closed ? '0px' : 'auto';
                    if (_this.props.closed) {
                        _this.outerRef.classList.add('closed');
                    }
                }
            }
        };
        _this.callbacks = [];
        return _this;
    }
    SlideDownContent.prototype.componentDidMount = function () {
        if (this.props.closed) {
            this.outerRef.classList.add('closed');
        }
    };
    SlideDownContent.prototype.componentWillAppear = function (callback) {
        if (this.props.transitionOnAppear) {
            this.callbacks.push(callback);
            this.startTransition('0px');
        }
        else {
            this.outerRef.style.height = this.props.closed ? '0px' : 'auto';
            callback();
        }
    };
    SlideDownContent.prototype.componentWillEnter = function (callback) {
        this.callbacks.push(callback);
        var prevHeight = this.outerRef.getBoundingClientRect().height + 'px';
        this.startTransition(prevHeight);
    };
    SlideDownContent.prototype.componentWillLeave = function (callback) {
        this.callbacks.push(callback);
        this.outerRef.classList.add('transitioning');
        this.outerRef.style.height = getComputedStyle(this.outerRef).height;
        this.outerRef.offsetHeight;
        this.outerRef.style.transitionProperty = 'height';
        this.outerRef.style.height = '0px';
    };
    SlideDownContent.prototype.getSnapshotBeforeUpdate = function () {
        if (this.callbacks.length === 0) {
            return this.outerRef.getBoundingClientRect().height + 'px';
        }
        else {
            return null;
        }
    };
    SlideDownContent.prototype.componentDidUpdate = function (_prevProps, _prevState, snapshot) {
        var callback = this.callbacks.shift();
        callback && callback();
        if (this.callbacks.length === 0) {
            var prevHeight = snapshot || getComputedStyle(this.outerRef).height;
            this.startTransition(prevHeight);
        }
    };
    SlideDownContent.prototype.startTransition = function (prevHeight) {
        var endHeight = '0px';
        if (!this.props.closed) {
            this.outerRef.classList.remove('closed');
            this.outerRef.style.height = 'auto';
            endHeight = getComputedStyle(this.outerRef).height;
        }
        if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {
            this.outerRef.classList.add('transitioning');
            this.outerRef.style.height = prevHeight;
            this.outerRef.offsetHeight;
            this.outerRef.style.transitionProperty = 'height';
            this.outerRef.style.height = endHeight;
        }
    };
    SlideDownContent.prototype.render = function () {
        var className = this.props.className ?
            'react-slidedown ' + this.props.className : 'react-slidedown';
        return (react_1.default.createElement("div", { className: className, ref: this.handleRef, onTransitionEnd: this.handleTransitionEnd }, this.props.children));
    };
    SlideDownContent.defaultProps = {
        transitionOnAppear: true,
        closed: false
    };
    return SlideDownContent;
}(react_1.default.Component));
function TransitionGroupWrapper(props) {
    var childrenArray = react_1.default.Children.toArray(props.children);
    return childrenArray[0] || null;
}
exports.SlideDown = react_1.default.forwardRef(function (props, ref) {
    var children = props.children, attrs = tslib_1.__rest(props, ["children"]);
    var hasContent = (children && react_1.default.Children.count(children) !== 0);
    return (react_1.default.createElement(TransitionGroup_1.default, { component: TransitionGroupWrapper }, hasContent && react_1.default.createElement(SlideDownContent, tslib_1.__assign({ key: 'content' }, attrs, { forwardedRef: ref }), children)));
});
exports.default = exports.SlideDown;
//# sourceMappingURL=slidedown.js.map

/***/ })

})
//# sourceMappingURL=account.js.c710f3eeeda656062b00.hot-update.js.map