webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CalendarStats.js":
/*!*************************************!*\
  !*** ./components/CalendarStats.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "./node_modules/react-calendar/dist/entry.nostyle.js");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/CalendarStats.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CalendarStats__StatsDisplay",
  componentId: "sc-3vgek8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);padding-left:10px;padding-top:10px;width:100%;height:100%;border:5px solid white;border-radius:25px;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);.gear{position:relative;display:flex;left:215px;width:25px;height:25px;cursor:pointer;}"]);
var Flexer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CalendarStats__Flexer",
  componentId: "sc-3vgek8-1"
})(["display:flex;flex-flow:column;"]);
var Stat = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CalendarStats__Stat",
  componentId: "sc-3vgek8-2"
})(["font-size:12px;"]);
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2.withConfig({
  displayName: "CalendarStats__StyledTitle",
  componentId: "sc-3vgek8-3"
})(["margin:0;display:flex;font-size:19px;line-height:28px;color:rgba(100,120,240,1);"]);
var StyledSub = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "CalendarStats__StyledSub",
  componentId: "sc-3vgek8-4"
})(["margin-top:0;font-size:14px;"]);
var Gear = react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  press: {
    scale: 1.1
  }
});

var CalendarStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarStats, _React$Component);

  function CalendarStats() {
    _classCallCheck(this, CalendarStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarStats).apply(this, arguments));
  }

  _createClass(CalendarStats, [{
    key: "render",
    value: function render() {
      var today = new Date();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: 'calendarsettings',
          query: {
            id: this.props.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
        className: "gear",
        src: "../static/img/gear.png",
        alt: "edit schedule settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(today, 'MMMM d, YYYY', {
        awareOfUnicodeTokens: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSub, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "yo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stat, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }));
    }
  }]);

  return CalendarStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarStats);

/***/ }),

/***/ "./node_modules/get-user-locale/dist/entry.js":
/*!****************************************************!*\
  !*** ./node_modules/get-user-locale/dist/entry.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getUserLocale = exports.getUserLocales = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var filterDuplicates = function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
};

var fixLowercaseProperties = function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
};

var getUserLocales = (0, _lodash.default)(function () {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList.push.apply(languageList, _toConsumableArray(window.navigator.languages));
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
});
exports.getUserLocales = getUserLocales;
var getUserLocale = (0, _lodash.default)(function () {
  return getUserLocales()[0];
});
exports.getUserLocale = getUserLocale;
var _default = getUserLocale;
exports.default = _default;

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/merge-class-names/build/entry.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-class-names/build/entry.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mergeClassNames = function mergeClassNames() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(function (className) {
    return className;
  }).join(' ');
};

exports.default = mergeClassNames;

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _mergeClassNames = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/build/entry.js");

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _Navigation = __webpack_require__(/*! ./Calendar/Navigation */ "./node_modules/react-calendar/dist/Calendar/Navigation.js");

var _Navigation2 = _interopRequireDefault(_Navigation);

var _CenturyView = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/CenturyView.js");

var _CenturyView2 = _interopRequireDefault(_CenturyView);

var _DecadeView = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/DecadeView.js");

var _DecadeView2 = _interopRequireDefault(_DecadeView);

var _YearView = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/YearView.js");

var _YearView2 = _interopRequireDefault(_YearView);

var _MonthView = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/MonthView.js");

var _MonthView2 = _interopRequireDefault(_MonthView);

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var datesAreDifferent = function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
};

/**
 * Returns views array with disallowed values cut off.
 */
var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
};

var getView = function getView(view, minDetail, maxDetail) {
  if (view && getLimitedViews(minDetail, maxDetail).indexOf(view) !== -1) {
    return view;
  }

  return getLimitedViews(minDetail, maxDetail).pop();
};

/**
 * Determines whether a given view is allowed with currently applied settings.
 */
var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);

  return views.indexOf(view) !== -1;
};

/**
 * Returns value type that can be returned with currently applied settings.
 */
var getValueType = function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
};

var getValueFrom = function getValueFrom(value) {
  if (!value) {
    return null;
  }

  var rawValueFrom = value instanceof Array && value.length === 2 ? value[0] : value;

  if (!rawValueFrom) {
    return null;
  }

  var valueFromDate = new Date(rawValueFrom);

  if (isNaN(valueFromDate.getTime())) {
    throw new Error('Invalid date: ' + value);
  }

  return valueFromDate;
};

var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
  var valueFrom = getValueFrom(value);

  if (!valueFrom) {
    return null;
  }

  var detailValueFrom = (0, _dates.getBegin)(getValueType(maxDetail), valueFrom);

  return (0, _utils.between)(detailValueFrom, minDate, maxDate);
};

var getValueTo = function getValueTo(value) {
  if (!value) {
    return null;
  }

  var rawValueTo = value instanceof Array && value.length === 2 ? value[1] : value;

  if (!rawValueTo) {
    return null;
  }

  var valueToDate = new Date(rawValueTo);

  if (isNaN(valueToDate.getTime())) {
    throw new Error('Invalid date: ' + value);
  }

  return valueToDate;
};

var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
  var valueTo = getValueTo(value);

  if (!valueTo) {
    return null;
  }

  var detailValueTo = (0, _dates.getEnd)(getValueType(maxDetail), valueTo);

  return (0, _utils.between)(detailValueTo, minDate, maxDate);
};

var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
};

var getActiveStartDate = function getActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;


  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom(value, minDate, maxDate, maxDetail) || activeStartDate || new Date();
  return (0, _dates.getBegin)(rangeType, valueFrom);
};

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.setActiveStartDate = function (activeStartDate) {
      var onActiveDateChange = _this.props.onActiveDateChange;


      _this.setState({ activeStartDate: activeStartDate }, function () {
        var view = _this.state.view;


        (0, _utils.callIfDefined)(onActiveDateChange, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    }, _this.drillDown = function (activeStartDate) {
      if (!_this.drillDownAvailable) {
        return;
      }

      var _this$props = _this.props,
          maxDetail = _this$props.maxDetail,
          minDetail = _this$props.minDetail,
          onDrillDown = _this$props.onDrillDown;


      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) + 1];
        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var view = _this.state.view;


        (0, _utils.callIfDefined)(onDrillDown, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    }, _this.drillUp = function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _this$props2 = _this.props,
          maxDetail = _this$props2.maxDetail,
          minDetail = _this$props2.minDetail,
          onDrillUp = _this$props2.onDrillUp;


      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) - 1];
        var activeStartDate = (0, _dates.getBegin)(nextView, prevState.activeStartDate);

        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var _this$state = _this.state,
            activeStartDate = _this$state.activeStartDate,
            view = _this$state.view;


        (0, _utils.callIfDefined)(onDrillUp, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    }, _this.onChange = function (value) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          selectRange = _this$props3.selectRange;


      var nextValue = void 0;
      var callback = void 0;
      if (selectRange) {
        var previousValue = _this.state.value;
        // Range selection turned on

        if (!previousValue || [].concat(previousValue).length !== 1 // 0 or 2 - either way we're starting a new array
        ) {
            // First value
            nextValue = (0, _dates.getBegin)(_this.valueType, value);
          } else {
          // Second value
          nextValue = (0, _dates.getValueRange)(_this.valueType, previousValue, value);
          callback = function callback() {
            return (0, _utils.callIfDefined)(onChange, nextValue);
          };
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
        callback = function callback() {
          return (0, _utils.callIfDefined)(onChange, nextValue);
        };
      }

      _this.setState({ value: nextValue }, callback);
    }, _this.onMouseOver = function (value) {
      _this.setState({ hover: value });
    }, _this.onMouseOut = function () {
      _this.setState({ hover: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'getProcessedValue',


    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          maxDetail = _props.maxDetail,
          returnValue = _props.returnValue;


      switch (returnValue) {
        case 'start':
          return getDetailValueFrom(value, minDate, maxDate, maxDetail);
        case 'end':
          return getDetailValueTo(value, minDate, maxDate, maxDetail);
        case 'range':
          return getDetailValueArray(value, minDate, maxDate, maxDetail);
        default:
          throw new Error('Invalid returnValue.');
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _props2 = this.props,
          calendarType = _props2.calendarType,
          locale = _props2.locale,
          maxDate = _props2.maxDate,
          minDate = _props2.minDate,
          renderChildren = _props2.renderChildren,
          selectRange = _props2.selectRange,
          tileClassName = _props2.tileClassName,
          tileContent = _props2.tileContent,
          tileDisabled = _props2.tileDisabled;
      var _state = this.state,
          activeStartDate = _state.activeStartDate,
          hover = _state.hover,
          value = _state.value,
          view = _state.view;
      var onMouseOver = this.onMouseOver,
          valueType = this.valueType;


      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent || renderChildren, // For backwards compatibility
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };

      var clickAction = this.drillDownAvailable ? this.drillDown : this.onChange;

      switch (view) {
        case 'century':
          {
            var onClickDecade = this.props.onClickDecade;


            return _react2.default.createElement(_CenturyView2.default, _extends({
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickDecade)
            }, commonProps));
          }
        case 'decade':
          {
            var onClickYear = this.props.onClickYear;


            return _react2.default.createElement(_DecadeView2.default, _extends({
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickYear)
            }, commonProps));
          }
        case 'year':
          {
            var _props3 = this.props,
                formatMonth = _props3.formatMonth,
                onClickMonth = _props3.onClickMonth;


            return _react2.default.createElement(_YearView2.default, _extends({
              formatMonth: formatMonth,
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickMonth)
            }, commonProps));
          }
        case 'month':
          {
            var _props4 = this.props,
                formatShortWeekday = _props4.formatShortWeekday,
                onClickDay = _props4.onClickDay,
                onClickWeekNumber = _props4.onClickWeekNumber,
                showFixedNumberOfWeeks = _props4.showFixedNumberOfWeeks,
                showNeighboringMonth = _props4.showNeighboringMonth,
                showWeekNumbers = _props4.showWeekNumbers;


            return _react2.default.createElement(_MonthView2.default, _extends({
              calendarType: calendarType,
              formatShortWeekday: formatShortWeekday,
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickDay),
              onClickWeekNumber: onClickWeekNumber,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }
        default:
          throw new Error('Invalid view: ' + view + '.');
      }
    }
  }, {
    key: 'renderNavigation',
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;


      if (!showNavigation) {
        return null;
      }

      var _props5 = this.props,
          formatMonthYear = _props5.formatMonthYear,
          locale = _props5.locale,
          maxDate = _props5.maxDate,
          maxDetail = _props5.maxDetail,
          minDate = _props5.minDate,
          minDetail = _props5.minDetail,
          next2Label = _props5.next2Label,
          nextLabel = _props5.nextLabel,
          navigationLabel = _props5.navigationLabel,
          prev2Label = _props5.prev2Label,
          prevLabel = _props5.prevLabel;
      var _state2 = this.state,
          activeRange = _state2.activeRange,
          activeStartDate = _state2.activeStartDate,
          view = _state2.view;


      return _react2.default.createElement(_Navigation2.default, {
        activeRange: activeRange,
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        next2Label: next2Label,
        nextLabel: nextLabel,
        navigationLabel: navigationLabel,
        prev2Label: prev2Label,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        view: view,
        views: getLimitedViews(minDetail, maxDetail)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          className = _props6.className,
          selectRange = _props6.selectRange;
      var value = this.state.value;
      var onMouseOut = this.onMouseOut;

      var valueArray = [].concat(value);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _mergeClassNames2.default)('react-calendar', selectRange && valueArray.length === 1 && 'react-calendar--selectRange', className),
          onMouseOut: selectRange ? onMouseOut : null,
          onBlur: selectRange ? onMouseOut : null
        },
        this.renderNavigation(),
        this.renderContent()
      );
    }
  }, {
    key: 'drillDownAvailable',
    get: function get() {
      var _props7 = this.props,
          maxDetail = _props7.maxDetail,
          minDetail = _props7.minDetail;
      var view = this.state.view;


      var views = getLimitedViews(minDetail, maxDetail);

      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: 'drillUpAvailable',
    get: function get() {
      var _props8 = this.props,
          maxDetail = _props8.maxDetail,
          minDetail = _props8.minDetail;
      var view = this.state.view;


      var views = getLimitedViews(minDetail, maxDetail);

      return views.indexOf(view) > 0;
    }
  }, {
    key: 'valueType',
    get: function get() {
      var maxDetail = this.props.maxDetail;


      return getValueType(maxDetail);
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          minDetail = nextProps.minDetail,
          maxDetail = nextProps.maxDetail;


      var nextState = {};

      /**
       * If the next activeStartDate is different from the current one, update
       * activeStartDate (for display) and activeStartDateProps (for future comparisons)
       */
      var nextActiveStartDate = getActiveStartDate(nextProps);
      if (datesAreDifferent(nextActiveStartDate, prevState.activeStartDateProps)) {
        nextState.activeStartDate = nextActiveStartDate;
        nextState.activeStartDateProps = nextActiveStartDate;
      }

      /**
       * If the next view is different from the current one, and the previously set view is not
       * valid based on minDetail and maxDetail, get a new one.
       */
      var nextView = getView(nextProps.view, minDetail, maxDetail);
      if (nextView !== prevState.viewProps && !isViewAllowed(prevState.view, minDetail, maxDetail)) {
        nextState.view = nextView;
        nextState.viewProps = nextView;
      }

      /**
       * If the next value is different from the current one (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */
      var values = [nextProps.value, prevState.valueProps];
      if (nextState.view // Allowed view changed
      || datesAreDifferent.apply(undefined, _toConsumableArray(values.map(function (value) {
        return getValueFrom(value, minDate, maxDate, maxDetail);
      }))) || datesAreDifferent.apply(undefined, _toConsumableArray(values.map(function (value) {
        return getValueTo(value, minDate, maxDate, maxDetail);
      })))) {
        nextState.value = nextProps.value;
        nextState.valueProps = nextProps.value;
      }

      if (!nextProps.selectRange && prevState.hover) {
        nextState.hover = null;
      }

      return nextState;
    }

    /**
     * Called when the user uses navigation buttons.
     */

  }]);

  return Calendar;
}(_react.Component);

exports.default = Calendar;


Calendar.defaultProps = {
  maxDetail: 'month',
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true,
  view: 'month'
};

Calendar.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date),
  calendarType: _propTypes3.isCalendarType,
  className: _propTypes3.isClassName,
  formatMonth: _propTypes2.default.func,
  formatMonthYear: _propTypes2.default.func,
  formatShortWeekday: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  maxDate: _propTypes3.isMaxDate,
  maxDetail: _propTypes2.default.oneOf(allViews),
  minDate: _propTypes3.isMinDate,
  minDetail: _propTypes2.default.oneOf(allViews),
  navigationLabel: _propTypes2.default.func,
  next2Label: _propTypes2.default.node,
  nextLabel: _propTypes2.default.node,
  onActiveDateChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClickDay: _propTypes2.default.func,
  onClickDecade: _propTypes2.default.func,
  onClickMonth: _propTypes2.default.func,
  onClickWeekNumber: _propTypes2.default.func,
  onClickYear: _propTypes2.default.func,
  onDrillDown: _propTypes2.default.func,
  onDrillUp: _propTypes2.default.func,
  prev2Label: _propTypes2.default.node,
  prevLabel: _propTypes2.default.node,
  renderChildren: _propTypes2.default.func, // For backwards compatibility
  returnValue: _propTypes2.default.oneOf(['start', 'end', 'range']),
  selectRange: _propTypes2.default.bool,
  showFixedNumberOfWeeks: _propTypes2.default.bool,
  showNavigation: _propTypes2.default.bool,
  showNeighboringMonth: _propTypes2.default.bool,
  showWeekNumbers: _propTypes2.default.bool,
  tileClassName: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes3.isClassName]),
  tileContent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  tileDisabled: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes3.isValue]),
  view: _propTypes2.default.oneOf(allViews)
};

(0, _reactLifecyclesCompat.polyfill)(Calendar);

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar/Navigation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar/Navigation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_PureComponent) {
  _inherits(Navigation, _PureComponent);

  function Navigation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args))), _this), _this.onClickPrevious = function () {
      var _this$props = _this.props,
          date = _this$props.activeStartDate,
          view = _this$props.view,
          setActiveStartDate = _this$props.setActiveStartDate;

      setActiveStartDate((0, _dates.getBeginPrevious)(view, date));
    }, _this.onClickNext = function () {
      var _this$props2 = _this.props,
          date = _this$props2.activeStartDate,
          view = _this$props2.view,
          setActiveStartDate = _this$props2.setActiveStartDate;

      setActiveStartDate((0, _dates.getBeginNext)(view, date));
    }, _this.onClickPrevious2 = function () {
      var _this$props3 = _this.props,
          date = _this$props3.activeStartDate,
          view = _this$props3.view,
          setActiveStartDate = _this$props3.setActiveStartDate;

      setActiveStartDate((0, _dates.getBeginPrevious2)(view, date));
    }, _this.onClickNext2 = function () {
      var _this$props4 = _this.props,
          date = _this$props4.activeStartDate,
          view = _this$props4.view,
          setActiveStartDate = _this$props4.setActiveStartDate;

      setActiveStartDate((0, _dates.getBeginNext2)(view, date));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var label = this.label;
      var _props = this.props,
          date = _props.activeStartDate,
          drillUp = _props.drillUp,
          navigationLabel = _props.navigationLabel,
          next2Label = _props.next2Label,
          nextLabel = _props.nextLabel,
          prev2Label = _props.prev2Label,
          prevLabel = _props.prevLabel,
          view = _props.view;


      var className = 'react-calendar__navigation';

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: { display: 'flex' }
        },
        prev2Label !== null && view !== 'century' && _react2.default.createElement(
          'button',
          {
            className: className + '__arrow ' + className + '__prev2-button',
            disabled: this.prev2ButtonDisabled,
            onClick: this.onClickPrevious2,
            type: 'button'
          },
          prev2Label
        ),
        _react2.default.createElement(
          'button',
          {
            className: className + '__arrow ' + className + '__prev-button',
            disabled: this.prevButtonDisabled,
            onClick: this.onClickPrevious,
            type: 'button'
          },
          prevLabel
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'react-calendar__navigation__label',
            onClick: drillUp,
            disabled: !this.drillUpAvailable,
            style: { flexGrow: 1 },
            type: 'button'
          },
          navigationLabel ? navigationLabel({ date: date, view: view, label: label }) : label
        ),
        _react2.default.createElement(
          'button',
          {
            className: className + '__arrow ' + className + '__next-button',
            disabled: this.nextButtonDisabled,
            onClick: this.onClickNext,
            type: 'button'
          },
          nextLabel
        ),
        next2Label !== null && view !== 'century' && _react2.default.createElement(
          'button',
          {
            className: className + '__arrow ' + className + '__next2-button',
            disabled: this.next2ButtonDisabled,
            onClick: this.onClickNext2,
            type: 'button'
          },
          next2Label
        )
      );
    }
  }, {
    key: 'drillUpAvailable',
    get: function get() {
      var _props2 = this.props,
          view = _props2.view,
          views = _props2.views;

      return views.indexOf(view) > 0;
    }
  }, {
    key: 'prevButtonDisabled',
    get: function get() {
      var _props3 = this.props,
          date = _props3.activeStartDate,
          minDate = _props3.minDate,
          view = _props3.view;

      var previousActiveStartDate = (0, _dates.getBeginPrevious)(view, date);
      if (previousActiveStartDate.getFullYear() < 1000) {
        return true;
      }
      var previousActiveEndDate = (0, _dates.getEndPrevious)(view, date);
      return minDate && minDate >= previousActiveEndDate;
    }
  }, {
    key: 'prev2ButtonDisabled',
    get: function get() {
      var _props4 = this.props,
          date = _props4.activeStartDate,
          minDate = _props4.minDate,
          view = _props4.view;

      var previousActiveStartDate = (0, _dates.getBeginPrevious2)(view, date);
      if (previousActiveStartDate.getFullYear() < 1000) {
        return true;
      }
      var previousActiveEndDate = (0, _dates.getEndPrevious2)(view, date);
      return minDate && minDate >= previousActiveEndDate;
    }
  }, {
    key: 'nextButtonDisabled',
    get: function get() {
      var _props5 = this.props,
          date = _props5.activeStartDate,
          maxDate = _props5.maxDate,
          view = _props5.view;

      var nextActiveStartDate = (0, _dates.getBeginNext)(view, date);
      return maxDate && maxDate <= nextActiveStartDate;
    }
  }, {
    key: 'next2ButtonDisabled',
    get: function get() {
      var _props6 = this.props,
          date = _props6.activeStartDate,
          maxDate = _props6.maxDate,
          view = _props6.view;

      var nextActiveStartDate = (0, _dates.getBeginNext2)(view, date);
      return maxDate && maxDate <= nextActiveStartDate;
    }
  }, {
    key: 'label',
    get: function get() {
      var _props7 = this.props,
          date = _props7.activeStartDate,
          formatMonthYear = _props7.formatMonthYear,
          locale = _props7.locale,
          view = _props7.view;


      switch (view) {
        case 'century':
          return (0, _dates.getCenturyLabel)(date);
        case 'decade':
          return (0, _dates.getDecadeLabel)(date);
        case 'year':
          return (0, _dates.getYear)(date);
        case 'month':
          return formatMonthYear(date, locale);
        default:
          throw new Error('Invalid view: ' + view + '.');
      }
    }
  }]);

  return Navigation;
}(_react.PureComponent);

exports.default = Navigation;


Navigation.defaultProps = {
  formatMonthYear: _dateFormatter.formatMonthYear,
  next2Label: '»',
  nextLabel: '›',
  prev2Label: '«',
  prevLabel: '‹'
};

Navigation.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  drillUp: _propTypes2.default.func.isRequired,
  formatMonthYear: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  maxDate: _propTypes2.default.instanceOf(Date),
  minDate: _propTypes2.default.instanceOf(Date),
  next2Label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  nextLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  navigationLabel: _propTypes2.default.func,
  prev2Label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  prevLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  setActiveStartDate: _propTypes2.default.func.isRequired,
  view: _propTypes3.isView.isRequired,
  views: _propTypes3.isViews.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Decades = __webpack_require__(/*! ./CenturyView/Decades */ "./node_modules/react-calendar/dist/CenturyView/Decades.js");

var _Decades2 = _interopRequireDefault(_Decades);

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenturyView = function (_PureComponent) {
  _inherits(CenturyView, _PureComponent);

  function CenturyView() {
    _classCallCheck(this, CenturyView);

    return _possibleConstructorReturn(this, (CenturyView.__proto__ || Object.getPrototypeOf(CenturyView)).apply(this, arguments));
  }

  _createClass(CenturyView, [{
    key: 'renderDecades',
    value: function renderDecades() {
      return _react2.default.createElement(_Decades2.default, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-calendar__century-view' },
        this.renderDecades()
      );
    }
  }]);

  return CenturyView;
}(_react.PureComponent);

exports.default = CenturyView;


CenturyView.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func,
  setActiveRange: _propTypes2.default.func,
  value: _propTypes3.isValue,
  valueType: _propTypes2.default.string
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView/Decade.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView/Decade.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tile = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var className = 'react-calendar__century-view__decades__decade';

var Decade = function Decade(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ['classes', 'point']);

  return _react2.default.createElement(
    _Tile2.default,
    _extends({}, otherProps, {
      classes: [].concat(_toConsumableArray(classes), [className]),
      dateTime: point + 'T00:00:00.000',
      maxDateTransform: _dates.getEndOfDecade,
      minDateTransform: _dates.getBeginOfDecade,
      view: 'century'
    }),
    (0, _dates.getDecadeLabel)(point)
  );
};

Decade.propTypes = _extends({
  point: _propTypes2.default.number.isRequired
}, _propTypes3.tileProps);

exports.default = Decade;

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView/Decades.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView/Decades.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TileGroup = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js");

var _TileGroup2 = _interopRequireDefault(_TileGroup);

var _Decade = __webpack_require__(/*! ./Decade */ "./node_modules/react-calendar/dist/CenturyView/Decade.js");

var _Decade2 = _interopRequireDefault(_Decade);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Decades = function (_PureComponent) {
  _inherits(Decades, _PureComponent);

  function Decades() {
    _classCallCheck(this, Decades);

    return _possibleConstructorReturn(this, (Decades.__proto__ || Object.getPrototypeOf(Decades)).apply(this, arguments));
  }

  _createClass(Decades, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TileGroup2.default, _extends({}, this.props, {
        className: 'react-calendar__century-view__decades',
        dateTransform: _dates.getBeginOfDecade,
        dateType: 'decade',
        end: this.end,
        start: this.start,
        step: 10,
        tile: _Decade2.default
      }));
    }
  }, {
    key: 'start',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getBeginOfCenturyYear)(activeStartDate);
    }
  }, {
    key: 'end',
    get: function get() {
      return this.start + 99;
    }
  }]);

  return Decades;
}(_react.PureComponent);

exports.default = Decades;


Decades.propTypes = _extends({}, _propTypes.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView.js":
/*!********************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Years = __webpack_require__(/*! ./DecadeView/Years */ "./node_modules/react-calendar/dist/DecadeView/Years.js");

var _Years2 = _interopRequireDefault(_Years);

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecadeView = function (_PureComponent) {
  _inherits(DecadeView, _PureComponent);

  function DecadeView() {
    _classCallCheck(this, DecadeView);

    return _possibleConstructorReturn(this, (DecadeView.__proto__ || Object.getPrototypeOf(DecadeView)).apply(this, arguments));
  }

  _createClass(DecadeView, [{
    key: 'renderYears',
    value: function renderYears() {
      return _react2.default.createElement(_Years2.default, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-calendar__decade-view' },
        this.renderYears()
      );
    }
  }]);

  return DecadeView;
}(_react.PureComponent);

exports.default = DecadeView;


DecadeView.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func,
  setActiveRange: _propTypes2.default.func,
  value: _propTypes3.isValue,
  valueType: _propTypes2.default.string
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView/Year.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView/Year.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tile = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var className = 'react-calendar__decade-view__years__year';

var Year = function Year(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ['classes', 'point']);

  return _react2.default.createElement(
    _Tile2.default,
    _extends({}, otherProps, {
      classes: [].concat(_toConsumableArray(classes), [className]),
      dateTime: point + 'T00:00:00.000',
      maxDateTransform: _dates.getEndOfYear,
      minDateTransform: _dates.getBeginOfYear,
      view: 'decade'
    }),
    point
  );
};

Year.propTypes = _extends({
  point: _propTypes2.default.number.isRequired
}, _propTypes3.tileProps);

exports.default = Year;

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView/Years.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView/Years.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TileGroup = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js");

var _TileGroup2 = _interopRequireDefault(_TileGroup);

var _Year = __webpack_require__(/*! ./Year */ "./node_modules/react-calendar/dist/DecadeView/Year.js");

var _Year2 = _interopRequireDefault(_Year);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Years = function (_PureComponent) {
  _inherits(Years, _PureComponent);

  function Years() {
    _classCallCheck(this, Years);

    return _possibleConstructorReturn(this, (Years.__proto__ || Object.getPrototypeOf(Years)).apply(this, arguments));
  }

  _createClass(Years, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TileGroup2.default, _extends({}, this.props, {
        className: 'react-calendar__decade-view__years',
        dateTransform: function dateTransform(year) {
          return new Date(year, 0, 1);
        },
        dateType: 'year',
        end: this.end,
        start: this.start,
        tile: _Year2.default
      }));
    }
  }, {
    key: 'start',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getBeginOfDecadeYear)(activeStartDate);
    }
  }, {
    key: 'end',
    get: function get() {
      return this.start + 9;
    }
  }]);

  return Years;
}(_react.PureComponent);

exports.default = Years;


Years.propTypes = _extends({}, _propTypes.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/Flex.js":
/*!**************************************************!*\
  !*** ./node_modules/react-calendar/dist/Flex.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toPercent = function toPercent(num) {
  return num + '%';
};

var Flex = function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ['children', 'className', 'direction', 'count', 'offset', 'style', 'wrap']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: className,
      style: _extends({
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'no-wrap'
      }, style)
    }, otherProps),
    _react2.default.Children.map(children, function (child, index) {
      return _react2.default.cloneElement(child, _extends({}, child.props, {
        style: {
          flexBasis: toPercent(100 / count),
          maxWidth: toPercent(100 / count),
          overflow: 'hidden',
          marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
        }
      }));
    })
  );
};

Flex.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  count: _propTypes2.default.number.isRequired,
  direction: _propTypes2.default.string,
  offset: _propTypes2.default.number,
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
  wrap: _propTypes2.default.bool
};

exports.default = Flex;

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Days = __webpack_require__(/*! ./MonthView/Days */ "./node_modules/react-calendar/dist/MonthView/Days.js");

var _Days2 = _interopRequireDefault(_Days);

var _Weekdays = __webpack_require__(/*! ./MonthView/Weekdays */ "./node_modules/react-calendar/dist/MonthView/Weekdays.js");

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _WeekNumbers = __webpack_require__(/*! ./MonthView/WeekNumbers */ "./node_modules/react-calendar/dist/MonthView/WeekNumbers.js");

var _WeekNumbers2 = _interopRequireDefault(_WeekNumbers);

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthView = function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  function MonthView() {
    _classCallCheck(this, MonthView);

    return _possibleConstructorReturn(this, (MonthView.__proto__ || Object.getPrototypeOf(MonthView)).apply(this, arguments));
  }

  _createClass(MonthView, [{
    key: 'renderWeekdays',
    value: function renderWeekdays() {
      var _props = this.props,
          activeStartDate = _props.activeStartDate,
          formatShortWeekday = _props.formatShortWeekday,
          locale = _props.locale;


      return _react2.default.createElement(_Weekdays2.default, {
        calendarType: this.calendarType,
        locale: locale,
        month: activeStartDate,
        formatShortWeekday: formatShortWeekday
      });
    }
  }, {
    key: 'renderWeekNumbers',
    value: function renderWeekNumbers() {
      var showWeekNumbers = this.props.showWeekNumbers;


      if (!showWeekNumbers) {
        return null;
      }

      var _props2 = this.props,
          activeStartDate = _props2.activeStartDate,
          onClickWeekNumber = _props2.onClickWeekNumber,
          showFixedNumberOfWeeks = _props2.showFixedNumberOfWeeks;


      return _react2.default.createElement(_WeekNumbers2.default, {
        activeStartDate: activeStartDate,
        calendarType: this.calendarType,
        onClickWeekNumber: onClickWeekNumber,
        showFixedNumberOfWeeks: showFixedNumberOfWeeks
      });
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _props3 = this.props,
          calendarType = _props3.calendarType,
          showWeekNumbers = _props3.showWeekNumbers,
          childProps = _objectWithoutProperties(_props3, ['calendarType', 'showWeekNumbers']);

      return _react2.default.createElement(_Days2.default, _extends({
        calendarType: this.calendarType
      }, childProps));
    }
  }, {
    key: 'render',
    value: function render() {
      var showWeekNumbers = this.props.showWeekNumbers;


      var className = 'react-calendar__month-view';

      return _react2.default.createElement(
        'div',
        {
          className: [className, showWeekNumbers ? className + '--weekNumbers' : ''].join(' ')
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'flex-end'
            }
          },
          this.renderWeekNumbers(),
          _react2.default.createElement(
            'div',
            {
              style: {
                flexGrow: 1,
                width: '100%'
              }
            },
            this.renderWeekdays(),
            this.renderDays()
          )
        )
      );
    }
  }, {
    key: 'calendarType',
    get: function get() {
      var _props4 = this.props,
          calendarType = _props4.calendarType,
          locale = _props4.locale;


      if (calendarType) {
        return calendarType;
      }

      switch (locale) {
        case 'en-CA':
        case 'en-US':
        case 'es-AR':
        case 'es-BO':
        case 'es-CL':
        case 'es-CO':
        case 'es-CR':
        case 'es-DO':
        case 'es-EC':
        case 'es-GT':
        case 'es-HN':
        case 'es-MX':
        case 'es-NI':
        case 'es-PA':
        case 'es-PE':
        case 'es-PR':
        case 'es-SV':
        case 'es-VE':
        case 'pt-BR':
          return 'US';
        // ar-LB, ar-MA intentionally missing
        case 'ar':
        case 'ar-AE':
        case 'ar-BH':
        case 'ar-DZ':
        case 'ar-EG':
        case 'ar-IQ':
        case 'ar-JO':
        case 'ar-KW':
        case 'ar-LY':
        case 'ar-OM':
        case 'ar-QA':
        case 'ar-SA':
        case 'ar-SD':
        case 'ar-SY':
        case 'ar-YE':
        case 'dv':
        case 'dv-MV':
        case 'ps':
        case 'ps-AR':
          return 'Arabic';
        case 'he':
        case 'he-IL':
          return 'Hebrew';
        default:
          return 'ISO 8601';
      }
    }
  }]);

  return MonthView;
}(_react.PureComponent);

exports.default = MonthView;


MonthView.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  calendarType: _propTypes3.isCalendarType,
  formatShortWeekday: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func,
  onClickWeekNumber: _propTypes2.default.func,
  setActiveRange: _propTypes2.default.func,
  showFixedNumberOfWeeks: _propTypes2.default.bool,
  showNeighboringMonth: _propTypes2.default.bool,
  showWeekNumbers: _propTypes2.default.bool,
  value: _propTypes3.isValue,
  valueType: _propTypes2.default.string
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Day.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Day.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tile = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var className = 'react-calendar__month-view__days__day';

var Day = function Day(_ref) {
  var calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      date = _ref.date,
      otherProps = _objectWithoutProperties(_ref, ['calendarType', 'classes', 'currentMonthIndex', 'date']);

  return _react2.default.createElement(
    _Tile2.default,
    _extends({}, otherProps, {
      classes: [].concat(_toConsumableArray(classes), [className, (0, _dates.isWeekend)(date, calendarType) ? className + '--weekend' : null, date.getMonth() !== currentMonthIndex ? className + '--neighboringMonth' : null]),
      date: date,
      dateTime: (0, _dates.getISOLocalDate)(date) + 'T00:00:00.000',
      maxDateTransform: _dates.getEndOfDay,
      minDateTransform: _dates.getBeginOfDay,
      view: 'month'
    }),
    (0, _dates.getDay)(date)
  );
};

Day.propTypes = _extends({
  currentMonthIndex: _propTypes2.default.number.isRequired
}, _propTypes3.tileProps);

exports.default = Day;

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Days.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Days.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TileGroup = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js");

var _TileGroup2 = _interopRequireDefault(_TileGroup);

var _Day = __webpack_require__(/*! ./Day */ "./node_modules/react-calendar/dist/MonthView/Day.js");

var _Day2 = _interopRequireDefault(_Day);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Days = function (_PureComponent) {
  _inherits(Days, _PureComponent);

  function Days() {
    _classCallCheck(this, Days);

    return _possibleConstructorReturn(this, (Days.__proto__ || Object.getPrototypeOf(Days)).apply(this, arguments));
  }

  _createClass(Days, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var monthIndex = this.monthIndex;

      var _props = this.props,
          showNeighboringMonth = _props.showNeighboringMonth,
          otherProps = _objectWithoutProperties(_props, ['showNeighboringMonth']);

      return _react2.default.createElement(_TileGroup2.default, _extends({}, otherProps, {
        className: 'react-calendar__month-view__days',
        count: 7,
        dateTransform: function dateTransform(day) {
          return new Date(_this2.year, monthIndex, day);
        },
        dateType: 'day',
        end: this.end,
        offset: this.offset,
        start: this.start,
        tile: _Day2.default
        // Tile props
        , currentMonthIndex: monthIndex
      }));
    }
  }, {
    key: 'offset',
    get: function get() {
      var _props2 = this.props,
          showFixedNumberOfWeeks = _props2.showFixedNumberOfWeeks,
          showNeighboringMonth = _props2.showNeighboringMonth;


      if (showFixedNumberOfWeeks || showNeighboringMonth) {
        return 0;
      }

      var _props3 = this.props,
          activeStartDate = _props3.activeStartDate,
          calendarType = _props3.calendarType;


      return (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
    }

    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */

  }, {
    key: 'start',
    get: function get() {
      var _props4 = this.props,
          showFixedNumberOfWeeks = _props4.showFixedNumberOfWeeks,
          showNeighboringMonth = _props4.showNeighboringMonth;


      if (showFixedNumberOfWeeks || showNeighboringMonth) {
        var _props5 = this.props,
            activeStartDate = _props5.activeStartDate,
            calendarType = _props5.calendarType;

        return -(0, _dates.getDayOfWeek)(activeStartDate, calendarType) + 1;
      }

      return 1;
    }

    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */

  }, {
    key: 'end',
    get: function get() {
      var _props6 = this.props,
          activeStartDate = _props6.activeStartDate,
          showFixedNumberOfWeeks = _props6.showFixedNumberOfWeeks,
          showNeighboringMonth = _props6.showNeighboringMonth;

      var daysInMonth = (0, _dates.getDaysInMonth)(activeStartDate);

      if (showFixedNumberOfWeeks) {
        // Always show 6 weeks
        return this.start + 6 * 7 - 1;
      }

      if (showNeighboringMonth) {
        var year = this.year,
            monthIndex = this.monthIndex;
        var calendarType = this.props.calendarType;

        var activeEndDate = new Date(year, monthIndex, daysInMonth);
        return daysInMonth + (7 - (0, _dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
      }

      return daysInMonth;
    }
  }, {
    key: 'year',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getYear)(activeStartDate);
    }
  }, {
    key: 'monthIndex',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getMonthIndex)(activeStartDate);
    }
  }]);

  return Days;
}(_react.PureComponent);

exports.default = Days;


Days.propTypes = _extends({
  calendarType: _propTypes3.isCalendarType.isRequired,
  showFixedNumberOfWeeks: _propTypes2.default.bool,
  showNeighboringMonth: _propTypes2.default.bool
}, _propTypes3.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/WeekNumber.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/WeekNumber.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeekNumber = function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  return onClickWeekNumber ? _react2.default.createElement(
    'button',
    {
      className: 'react-calendar__tile',
      onClick: function onClick() {
        return onClickWeekNumber(weekNumber, date);
      },
      style: { flexGrow: 1 },
      type: 'button'
    },
    _react2.default.createElement(
      'span',
      null,
      weekNumber
    )
  ) : _react2.default.createElement(
    'div',
    {
      className: 'react-calendar__tile',
      style: { flexGrow: 1 }
    },
    _react2.default.createElement(
      'span',
      null,
      weekNumber
    )
  );
};

WeekNumber.propTypes = {
  date: _propTypes2.default.instanceOf(Date).isRequired,
  onClickWeekNumber: _propTypes2.default.func,
  weekNumber: _propTypes2.default.number.isRequired
};

exports.default = WeekNumber;

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/WeekNumbers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/WeekNumbers.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WeekNumber = __webpack_require__(/*! ./WeekNumber */ "./node_modules/react-calendar/dist/MonthView/WeekNumber.js");

var _WeekNumber2 = _interopRequireDefault(_WeekNumber);

var _Flex = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeekNumbers = function (_PureComponent) {
  _inherits(WeekNumbers, _PureComponent);

  function WeekNumbers() {
    _classCallCheck(this, WeekNumbers);

    return _possibleConstructorReturn(this, (WeekNumbers.__proto__ || Object.getPrototypeOf(WeekNumbers)).apply(this, arguments));
  }

  _createClass(WeekNumbers, [{
    key: 'render',
    value: function render() {
      var dates = this.dates,
          numberOfWeeks = this.numberOfWeeks,
          weekNumbers = this.weekNumbers;
      var onClickWeekNumber = this.props.onClickWeekNumber;


      return _react2.default.createElement(
        _Flex2.default,
        {
          className: 'react-calendar__month-view__weekNumbers',
          count: numberOfWeeks,
          direction: 'column',
          style: { flexBasis: 'calc(100% * (1 / 8)', flexShrink: 0 }
        },
        weekNumbers.map(function (weekNumber, weekIndex) {
          return _react2.default.createElement(_WeekNumber2.default, {
            date: dates[weekIndex],
            key: weekNumber,
            onClickWeekNumber: onClickWeekNumber,
            weekNumber: weekNumber
          });
        })
      );
    }
  }, {
    key: 'startWeekday',
    get: function get() {
      var _props = this.props,
          activeStartDate = _props.activeStartDate,
          calendarType = _props.calendarType;

      return (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
    }
  }, {
    key: 'numberOfDays',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getDaysInMonth)(activeStartDate);
    }
  }, {
    key: 'numberOfWeeks',
    get: function get() {
      var showFixedNumberOfWeeks = this.props.showFixedNumberOfWeeks;


      if (showFixedNumberOfWeeks) {
        return 6;
      }

      var days = this.numberOfDays - (7 - this.startWeekday);
      return 1 + Math.ceil(days / 7);
    }
  }, {
    key: 'year',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getYear)(activeStartDate);
    }
  }, {
    key: 'monthIndex',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getMonthIndex)(activeStartDate);
    }
  }, {
    key: 'day',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getDay)(activeStartDate);
    }
  }, {
    key: 'dates',
    get: function get() {
      var year = this.year,
          monthIndex = this.monthIndex,
          numberOfWeeks = this.numberOfWeeks,
          day = this.day;
      var calendarType = this.props.calendarType;


      var dates = [];
      for (var index = 0; index < numberOfWeeks; index += 1) {
        dates.push((0, _dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
      }
      return dates;
    }
  }, {
    key: 'weekNumbers',
    get: function get() {
      var dates = this.dates;
      var calendarType = this.props.calendarType;

      return dates.map(function (date) {
        return (0, _dates.getWeekNumber)(date, calendarType);
      });
    }
  }]);

  return WeekNumbers;
}(_react.PureComponent);

exports.default = WeekNumbers;


WeekNumbers.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  calendarType: _propTypes3.isCalendarType.isRequired,
  onClickWeekNumber: _propTypes2.default.func,
  showFixedNumberOfWeeks: _propTypes2.default.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Weekdays.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Weekdays.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          calendarType = _props.calendarType,
          locale = _props.locale;


      return nextProps.calendarType !== calendarType || nextProps.locale !== locale;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          calendarType = _props2.calendarType,
          formatShortWeekday = _props2.formatShortWeekday,
          locale = _props2.locale;
      var beginOfMonth = this.beginOfMonth,
          year = this.year,
          monthIndex = this.monthIndex;


      var weekdays = [];

      for (var weekday = 1; weekday <= 7; weekday += 1) {
        var weekdayDate = new Date(year, monthIndex, weekday - (0, _dates.getDayOfWeek)(beginOfMonth, calendarType));

        weekdays.push(_react2.default.createElement(
          'div',
          {
            className: 'react-calendar__month-view__weekdays__weekday',
            key: weekday,
            style: { flexGrow: 1 }
          },
          formatShortWeekday(weekdayDate, locale).replace('.', '')
        ));
      }

      return _react2.default.createElement(
        _Flex2.default,
        {
          className: 'react-calendar__month-view__weekdays',
          count: 7
        },
        weekdays
      );
    }
  }, {
    key: 'beginOfMonth',
    get: function get() {
      var month = this.props.month;


      return (0, _dates.getBeginOfMonth)(month);
    }
  }, {
    key: 'year',
    get: function get() {
      var beginOfMonth = this.beginOfMonth;


      return (0, _dates.getYear)(beginOfMonth);
    }
  }, {
    key: 'monthIndex',
    get: function get() {
      var beginOfMonth = this.beginOfMonth;


      return (0, _dates.getMonthIndex)(beginOfMonth);
    }
  }]);

  return Weekdays;
}(_react.Component);

exports.default = Weekdays;


Weekdays.defaultProps = {
  formatShortWeekday: _dateFormatter.formatShortWeekday
};

Weekdays.propTypes = {
  calendarType: _propTypes3.isCalendarType.isRequired,
  formatShortWeekday: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  month: _propTypes2.default.oneOfType([_propTypes2.default.string, // Only strings that are parseable to integer
  _propTypes2.default.number, _propTypes2.default.instanceOf(Date)]).isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/Tile.js":
/*!**************************************************!*\
  !*** ./node_modules/react-calendar/dist/Tile.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mergeClassNames = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/build/entry.js");

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tile = function Tile(_ref) {
  var activeStartDate = _ref.activeStartDate,
      children = _ref.children,
      classes = _ref.classes,
      date = _ref.date,
      dateTime = _ref.dateTime,
      maxDate = _ref.maxDate,
      maxDateTransform = _ref.maxDateTransform,
      minDate = _ref.minDate,
      minDateTransform = _ref.minDateTransform,
      onClick = _ref.onClick,
      onMouseOver = _ref.onMouseOver,
      style = _ref.style,
      tileClassName = _ref.tileClassName,
      tileContent = _ref.tileContent,
      tileDisabled = _ref.tileDisabled,
      view = _ref.view;
  return _react2.default.createElement(
    'button',
    {
      className: (0, _mergeClassNames2.default)(classes, tileClassName instanceof Function ? tileClassName({ date: date, view: view }) : tileClassName),
      disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate: activeStartDate, date: date, view: view }),
      onClick: onClick && function () {
        return onClick(date);
      },
      onMouseOver: onMouseOver && function () {
        return onMouseOver(date);
      },
      onFocus: onMouseOver && function () {
        return onMouseOver(date);
      },
      style: style,
      type: 'button'
    },
    _react2.default.createElement(
      'time',
      { dateTime: dateTime },
      children
    ),
    typeof tileContent === 'function' ? tileContent({ date: date, view: view }) : tileContent
  );
};

Tile.propTypes = _extends({}, _propTypes3.tileProps, {
  children: _propTypes2.default.node.isRequired,
  dateTime: _propTypes2.default.string.isRequired,
  maxDateTransform: _propTypes2.default.func.isRequired,
  minDateTransform: _propTypes2.default.func.isRequired
});

exports.default = Tile;

/***/ }),

/***/ "./node_modules/react-calendar/dist/TileGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/TileGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = __webpack_require__(/*! ./Flex */ "./node_modules/react-calendar/dist/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/shared/utils.js");

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TileGroup = function TileGroup(_ref) {
  var className = _ref.className,
      count = _ref.count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      step = _ref.step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ['className', 'count', 'dateTransform', 'dateType', 'end', 'hover', 'offset', 'start', 'step', 'tile', 'value', 'valueType']);

  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);

    tiles.push(_react2.default.createElement(Tile, _extends({
      classes: (0, _utils.getTileClasses)({
        value: value, valueType: valueType, date: date, dateType: dateType, hover: hover
      }),
      date: date,
      point: point,
      key: date.getTime()
    }, tileProps)));
  }

  return _react2.default.createElement(
    _Flex2.default,
    {
      className: className,
      count: count,
      offset: offset,
      wrap: true
    },
    tiles
  );
};

TileGroup.propTypes = _extends({}, _propTypes3.tileGroupProps, {
  activeStartDate: _propTypes2.default.instanceOf(Date),
  count: _propTypes2.default.number,
  dateTransform: _propTypes2.default.func.isRequired,
  offset: _propTypes2.default.number,
  tile: _propTypes2.default.func.isRequired,
  step: _propTypes2.default.number
});

TileGroup.defaultProps = {
  count: 3,
  step: 1
};

exports.default = TileGroup;

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Months = __webpack_require__(/*! ./YearView/Months */ "./node_modules/react-calendar/dist/YearView/Months.js");

var _Months2 = _interopRequireDefault(_Months);

var _propTypes3 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YearView = function (_PureComponent) {
  _inherits(YearView, _PureComponent);

  function YearView() {
    _classCallCheck(this, YearView);

    return _possibleConstructorReturn(this, (YearView.__proto__ || Object.getPrototypeOf(YearView)).apply(this, arguments));
  }

  _createClass(YearView, [{
    key: 'renderMonths',
    value: function renderMonths() {
      return _react2.default.createElement(_Months2.default, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-calendar__year-view' },
        this.renderMonths()
      );
    }
  }]);

  return YearView;
}(_react.PureComponent);

exports.default = YearView;


YearView.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  formatMonth: _propTypes2.default.func,
  locale: _propTypes2.default.string,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func,
  setActiveRange: _propTypes2.default.func,
  value: _propTypes3.isValue,
  valueType: _propTypes2.default.string
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView/Month.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView/Month.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tile = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js");

var _Tile2 = _interopRequireDefault(_Tile);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var className = 'react-calendar__year-view__months__month';

var Month = function Month(_ref) {
  var classes = _ref.classes,
      date = _ref.date,
      formatMonth = _ref.formatMonth,
      locale = _ref.locale,
      otherProps = _objectWithoutProperties(_ref, ['classes', 'date', 'formatMonth', 'locale']);

  return _react2.default.createElement(
    _Tile2.default,
    _extends({}, otherProps, {
      classes: [].concat(_toConsumableArray(classes), [className]),
      date: date,
      dateTime: (0, _dates.getISOLocalMonth)(date) + 'T00:00:00.000',
      maxDateTransform: _dates.getEndOfMonth,
      minDateTransform: _dates.getBeginOfMonth,
      view: 'year'
    }),
    formatMonth(date, locale)
  );
};

Month.defaultProps = {
  formatMonth: _dateFormatter.formatMonth
};

Month.propTypes = _extends({}, _propTypes3.tileProps, {
  formatMonth: _propTypes2.default.func,
  locale: _propTypes2.default.string
});

exports.default = Month;

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView/Months.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView/Months.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TileGroup = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js");

var _TileGroup2 = _interopRequireDefault(_TileGroup);

var _Month = __webpack_require__(/*! ./Month */ "./node_modules/react-calendar/dist/YearView/Month.js");

var _Month2 = _interopRequireDefault(_Month);

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes3 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Months = function (_PureComponent) {
  _inherits(Months, _PureComponent);

  function Months() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Months);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Months.__proto__ || Object.getPrototypeOf(Months)).call.apply(_ref, [this].concat(args))), _this), _this.start = 0, _this.end = 11, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Months, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_TileGroup2.default, _extends({}, this.props, {
        className: 'react-calendar__year-view__months',
        dateTransform: function dateTransform(monthIndex) {
          return new Date(_this2.year, monthIndex, 1);
        },
        dateType: 'month',
        end: this.end,
        start: this.start,
        tile: _Month2.default
      }));
    }
  }, {
    key: 'year',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getYear)(activeStartDate);
    }
  }]);

  return Months;
}(_react.PureComponent);

exports.default = Months;


Months.propTypes = _extends({}, _propTypes3.tileGroupProps, {
  locale: _propTypes2.default.string
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/entry.nostyle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/entry.nostyle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthView = exports.YearView = exports.DecadeView = exports.CenturyView = exports.Calendar = undefined;

var _Calendar = __webpack_require__(/*! ./Calendar */ "./node_modules/react-calendar/dist/Calendar.js");

var _Calendar2 = _interopRequireDefault(_Calendar);

var _CenturyView = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/CenturyView.js");

var _CenturyView2 = _interopRequireDefault(_CenturyView);

var _DecadeView = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/DecadeView.js");

var _DecadeView2 = _interopRequireDefault(_DecadeView);

var _YearView = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/YearView.js");

var _YearView2 = _interopRequireDefault(_YearView);

var _MonthView = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/MonthView.js");

var _MonthView2 = _interopRequireDefault(_MonthView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Calendar2.default;
exports.Calendar = _Calendar2.default;
exports.CenturyView = _CenturyView2.default;
exports.DecadeView = _DecadeView2.default;
exports.YearView = _YearView2.default;
exports.MonthView = _MonthView2.default;

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/dateFormatter.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/dateFormatter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatShortWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatDate = undefined;

var _getUserLocale = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/entry.js");

var _getUserLocale2 = _interopRequireDefault(_getUserLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatterCache = {};

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */
var getFormatter = function getFormatter(options, locale) {
  if (!locale) {
    // Default parameter is not enough as it does not protect us from null values
    // eslint-disable-next-line no-param-reassign
    locale = (0, _getUserLocale2.default)();
  }

  var stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locale]) {
    formatterCache[locale] = {};
  }

  if (!formatterCache[locale][stringifiedOptions]) {
    formatterCache[locale][stringifiedOptions] = new Intl.DateTimeFormat(locale, options).format;
  }

  return formatterCache[locale][stringifiedOptions];
};

/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */
var toSafeHour = function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
};

var formatDate = exports.formatDate = function formatDate(date, locale) {
  return getFormatter({ day: 'numeric', month: 'numeric', year: 'numeric' }, locale)(toSafeHour(date));
};

var formatMonthYear = exports.formatMonthYear = function formatMonthYear(date, locale) {
  return getFormatter({ month: 'long', year: 'numeric' }, locale)(toSafeHour(date));
};

var formatMonth = exports.formatMonth = function formatMonth(date, locale) {
  return getFormatter({ month: 'long' }, locale)(toSafeHour(date));
};

var formatShortWeekday = exports.formatShortWeekday = function formatShortWeekday(date, locale) {
  return getFormatter({ weekday: 'short' }, locale)(toSafeHour(date));
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/dates.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/dates.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _map = [].concat(_toConsumableArray(Array(7))).map(function (el, index) {
  return index;
}),
    _map2 = _slicedToArray(_map, 7),

// eslint-disable-next-line no-unused-vars
SUNDAY = _map2[0],
    MONDAY = _map2[1],
    TUESDAY = _map2[2],
    WEDNESDAY = _map2[3],
    THURSDAY = _map2[4],
    FRIDAY = _map2[5],
    SATURDAY = _map2[6];

/* Simple getters - getting a property of a given point in time */

var getYear = exports.getYear = function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error('Failed to get year from date: ' + date + '.');
};

var getMonth = exports.getMonth = function getMonth(date) {
  return date.getMonth() + 1;
};

var getMonthIndex = exports.getMonthIndex = function getMonthIndex(date) {
  return date.getMonth();
};

var getDay = exports.getDay = function getDay(date) {
  return date.getDate();
};

var getDayOfWeek = exports.getDayOfWeek = function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';

  var weekday = date.getDay();

  switch (calendarType) {
    case 'ISO 8601':
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;
    case 'Arabic':
      return (weekday + 1) % 7;
    case 'Hebrew':
    case 'US':
      return weekday;
    default:
      throw new Error('Unsupported calendar type.');
  }
};

/* Complex getters - getting a property somehow related to a given point in time */

var getBeginOfCenturyYear = exports.getBeginOfCenturyYear = function getBeginOfCenturyYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 100 + 1;
};

var getBeginOfCentury = exports.getBeginOfCentury = function getBeginOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear, 0, 1);
};

var getEndOfCentury = exports.getEndOfCentury = function getEndOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear + 100, 0, 1, 0, 0, 0, -1);
};

var getCenturyRange = exports.getCenturyRange = function getCenturyRange(date) {
  return [getBeginOfCentury(date), getEndOfCentury(date)];
};

var getBeginOfPreviousCentury = exports.getBeginOfPreviousCentury = function getBeginOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getBeginOfCentury(previousCenturyYear);
};

var getEndOfPreviousCentury = exports.getEndOfPreviousCentury = function getEndOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getEndOfCentury(previousCenturyYear);
};

var getBeginOfNextCentury = exports.getBeginOfNextCentury = function getBeginOfNextCentury(date) {
  var nextCenturyYear = getYear(date) + 100;
  return getBeginOfCentury(nextCenturyYear);
};

var getBeginOfDecadeYear = exports.getBeginOfDecadeYear = function getBeginOfDecadeYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 10 + 1;
};

var getBeginOfDecade = exports.getBeginOfDecade = function getBeginOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear, 0, 1);
};

var getEndOfDecade = exports.getEndOfDecade = function getEndOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear + 10, 0, 1, 0, 0, 0, -1);
};

var getDecadeRange = exports.getDecadeRange = function getDecadeRange(date) {
  return [getBeginOfDecade(date), getEndOfDecade(date)];
};

var getBeginOfPreviousDecade = exports.getBeginOfPreviousDecade = function getBeginOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getBeginOfDecade(previousDecadeYear);
};

var getEndOfPreviousDecade = exports.getEndOfPreviousDecade = function getEndOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getEndOfDecade(previousDecadeYear);
};

var getBeginOfNextDecade = exports.getBeginOfNextDecade = function getBeginOfNextDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var nextDecadeYear = getBeginOfDecadeYear(date) + offset;
  return getBeginOfDecade(nextDecadeYear);
};

/**
 * Returns the beginning of a given year.
 *
 * @param {Date} date Date.
 */
var getBeginOfYear = exports.getBeginOfYear = function getBeginOfYear(date) {
  var year = getYear(date);
  return new Date(year, 0, 1);
};

/**
 * Returns the end of a given year.
 *
 * @param {Date} date Date.
 */
var getEndOfYear = exports.getEndOfYear = function getEndOfYear(date) {
  var year = getYear(date);
  return new Date(year + 1, 0, 1, 0, 0, 0, -1);
};

/**
 * Returns an array with the beginning and the end of a given year.
 *
 * @param {Date} date Date.
 */
var getYearRange = exports.getYearRange = function getYearRange(date) {
  return [getBeginOfYear(date), getEndOfYear(date)];
};

var getBeginOfPreviousYear = exports.getBeginOfPreviousYear = function getBeginOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var previousYear = getYear(date) - offset;
  return getBeginOfYear(previousYear);
};

var getEndOfPreviousYear = exports.getEndOfPreviousYear = function getEndOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var previousYear = getYear(date) - offset;
  return getEndOfYear(previousYear);
};

var getBeginOfNextYear = exports.getBeginOfNextYear = function getBeginOfNextYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var nextYear = getYear(date) + offset;
  return getBeginOfYear(nextYear);
};

/**
 * Returns the beginning of a given month.
 *
 * @param {Date} date Date.
 */
var getBeginOfMonth = exports.getBeginOfMonth = function getBeginOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex, 1);
};

/**
 * Returns the end of a given month.
 *
 * @param {Date} date Date.
 */
var getEndOfMonth = exports.getEndOfMonth = function getEndOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 1, 0, 0, 0, -1);
};

/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */
var getBeginOfWeek = exports.getBeginOfWeek = function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';

  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
};

/**
 * Returns an array with the beginning and the end of a given month.
 *
 * @param {Date} date Date.
 */
var getMonthRange = exports.getMonthRange = function getMonthRange(date) {
  return [getBeginOfMonth(date), getEndOfMonth(date)];
};

var getDifferentMonth = function getDifferentMonth(date, offset) {
  var year = getYear(date);
  var previousMonthIndex = getMonthIndex(date) + offset;
  return new Date(year, previousMonthIndex, 1);
};

var getBeginOfPreviousMonth = exports.getBeginOfPreviousMonth = function getBeginOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var previousMonth = getDifferentMonth(date, -offset);
  return getBeginOfMonth(previousMonth);
};

var getEndOfPreviousMonth = exports.getEndOfPreviousMonth = function getEndOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var previousMonth = getDifferentMonth(date, -offset);
  return getEndOfMonth(previousMonth);
};

var getBeginOfNextMonth = exports.getBeginOfNextMonth = function getBeginOfNextMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var nextMonth = getDifferentMonth(date, offset);
  return getBeginOfMonth(nextMonth);
};

var getBeginOfDay = exports.getBeginOfDay = function getBeginOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day);
};

var getEndOfDay = exports.getEndOfDay = function getEndOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day + 1, 0, 0, 0, -1);
};

/**
 * Returns an array with the beginning and the end of a given day.
 *
 * @param {Date} date Date.
 */
var getDayRange = exports.getDayRange = function getDayRange(date) {
  return [getBeginOfDay(date), getEndOfDay(date)];
};

/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */
var getWeekNumber = exports.getWeekNumber = function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';

  var calendarTypeForWeekNumber = calendarType === 'US' ? 'US' : 'ISO 8601';
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = getYear(date) + 1;
  var dayInWeekOne = void 0;
  var beginOfFirstWeek = void 0;

  // Look for the first week one that does not come after a given date
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === 'ISO 8601' ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
};

/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
var getBegin = exports.getBegin = function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfCentury(date);
    case 'decade':
      return getBeginOfDecade(date);
    case 'year':
      return getBeginOfYear(date);
    case 'month':
      return getBeginOfMonth(date);
    case 'day':
      return getBeginOfDay(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getBeginPrevious = exports.getBeginPrevious = function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfPreviousCentury(date);
    case 'decade':
      return getBeginOfPreviousDecade(date);
    case 'year':
      return getBeginOfPreviousYear(date);
    case 'month':
      return getBeginOfPreviousMonth(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getBeginNext = exports.getBeginNext = function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfNextCentury(date);
    case 'decade':
      return getBeginOfNextDecade(date);
    case 'year':
      return getBeginOfNextYear(date);
    case 'month':
      return getBeginOfNextMonth(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getBeginPrevious2 = exports.getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfPreviousDecade(date, 100);
    case 'year':
      return getBeginOfPreviousYear(date, 10);
    case 'month':
      return getBeginOfPreviousMonth(date, 12);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getBeginNext2 = exports.getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfNextDecade(date, 100);
    case 'year':
      return getBeginOfNextYear(date, 10);
    case 'month':
      return getBeginOfNextMonth(date, 12);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
var getEnd = exports.getEnd = function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfCentury(date);
    case 'decade':
      return getEndOfDecade(date);
    case 'year':
      return getEndOfYear(date);
    case 'month':
      return getEndOfMonth(date);
    case 'day':
      return getEndOfDay(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getEndPrevious = exports.getEndPrevious = function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfPreviousCentury(date);
    case 'decade':
      return getEndOfPreviousDecade(date);
    case 'year':
      return getEndOfPreviousYear(date);
    case 'month':
      return getEndOfPreviousMonth(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

var getEndPrevious2 = exports.getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getEndOfPreviousDecade(date, 100);
    case 'year':
      return getEndOfPreviousYear(date, 10);
    case 'month':
      return getEndOfPreviousMonth(date, 12);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
var getRange = exports.getRange = function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);
    case 'decade':
      return getDecadeRange(date);
    case 'year':
      return getYearRange(date);
    case 'month':
      return getMonthRange(date);
    case 'day':
      return getDayRange(date);
    default:
      throw new Error('Invalid rangeType: ' + rangeType);
  }
};

/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */
var getValueRange = exports.getValueRange = function getValueRange(rangeType, date1, date2) {
  // Need to change to number and back due to https://bugs.chromium.org/p/v8/issues/detail?id=8379
  var rawNextValue = [date1, date2].map(function (d) {
    return d.getTime();
  }).sort().map(function (d) {
    return new Date(d);
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
};

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */
var getDaysInMonth = exports.getDaysInMonth = function getDaysInMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 0).getDate();
};

var toYearLabel = function toYearLabel(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  return getYear(start) + ' \u2013 ' + getYear(end);
};

/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
var getCenturyLabel = exports.getCenturyLabel = function getCenturyLabel(date) {
  return toYearLabel(getCenturyRange(date));
};

/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
var getDecadeLabel = exports.getDecadeLabel = function getDecadeLabel(date) {
  return toYearLabel(getDecadeRange(date));
};

/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */
var isWeekend = exports.isWeekend = function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';

  var weekday = date.getDay();
  switch (calendarType) {
    case 'Arabic':
    case 'Hebrew':
      return weekday === FRIDAY || weekday === SATURDAY;
    case 'ISO 8601':
    case 'US':
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error('Unsupported calendar type.');
  }
};

/**
 * Returns local month in ISO-like format (YYYY-MM).
 */
var getISOLocalMonth = exports.getISOLocalMonth = function getISOLocalMonth(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date: ' + value);
  }

  var year = getYear(date);
  var month = ('0' + getMonth(date)).slice(-2);

  return year + '-' + month;
};

/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */
var getISOLocalDate = exports.getISOLocalDate = function getISOLocalDate(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date: ' + value);
  }

  var year = getYear(date);
  var month = ('0' + getMonth(date)).slice(-2);
  var day = ('0' + getDay(date)).slice(-2);

  return year + '-' + month + '-' + day;
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/propTypes.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/propTypes.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tileProps = exports.tileGroupProps = exports.isView = exports.isClassName = exports.isViews = exports.isValue = exports.isMaxDate = exports.isMinDate = exports.isCalendarType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calendarTypes = ['ISO 8601', 'US', 'Arabic', 'Hebrew'];
var allViews = ['century', 'decade', 'year', 'month'];

var isCalendarType = exports.isCalendarType = _propTypes2.default.oneOf(calendarTypes);

var isMinDate = exports.isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];


  if (minDate) {
    if (!(minDate instanceof Date)) {
      return new Error('Invalid prop `' + propName + '` of type `' + (typeof minDate === 'undefined' ? 'undefined' : _typeof(minDate)) + '` supplied to `' + componentName + '`, expected instance of `Date`.');
    }

    var maxDate = props.maxDate;


    if (maxDate && minDate > maxDate) {
      return new Error('Invalid prop `' + propName + '` of type `' + (typeof minDate === 'undefined' ? 'undefined' : _typeof(minDate)) + '` supplied to `' + componentName + '`, minDate cannot be larger than maxDate.');
    }
  }

  // Everything is fine
  return null;
};

var isMaxDate = exports.isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];


  if (maxDate) {
    if (!(maxDate instanceof Date)) {
      return new Error('Invalid prop `' + propName + '` of type `' + (typeof maxDate === 'undefined' ? 'undefined' : _typeof(maxDate)) + '` supplied to `' + componentName + '`, expected instance of `Date`.');
    }

    var minDate = props.minDate;


    if (minDate && maxDate < minDate) {
      return new Error('Invalid prop `' + propName + '` of type `' + (typeof maxDate === 'undefined' ? 'undefined' : _typeof(maxDate)) + '` supplied to `' + componentName + '`, maxDate cannot be smaller than minDate.');
    }
  }

  // Everything is fine
  return null;
};

var isValue = exports.isValue = _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(Date), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date))]);

var isViews = exports.isViews = _propTypes2.default.arrayOf(_propTypes2.default.oneOf(allViews));

var isClassName = exports.isClassName = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]);

var isView = exports.isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;


  var allowedViews = views || allViews;

  if (allowedViews.indexOf(view) === -1) {
    return new Error('Invalid prop `' + propName + '` of value `' + view + '` supplied to `' + componentName + '`, expected one of [' + ['a', 'b', 'c', 'd', 'e'].map(function (a) {
      return '"' + a + '"';
    }).join(', ') + '].');
  }

  // Everything is fine
  return null;
};

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];


  if (!view) {
    return new Error('The prop `' + propName + '` is marked as required in `' + componentName + '`, but its value is `' + view + '`.');
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = exports.tileGroupProps = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  hover: _propTypes2.default.instanceOf(Date),
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  tileClassName: _propTypes2.default.oneOfType([_propTypes2.default.func, isClassName]),
  tileContent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  value: isValue,
  valueType: _propTypes2.default.string
};

var tileProps = exports.tileProps = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  classes: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  date: _propTypes2.default.instanceOf(Date).isRequired,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
  tileClassName: _propTypes2.default.oneOfType([_propTypes2.default.func, isClassName]),
  tileContent: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  tileDisabled: _propTypes2.default.func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileClasses = exports.between = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.callIfDefined = exports.mergeFunctions = undefined;

var _dates = __webpack_require__(/*! ./dates */ "./node_modules/react-calendar/dist/shared/dates.js");

/**
 * Returns a function that, when called, calls all the functions
 * passed to it, applying its arguments to them.
 *
 * @param {Function[]} functions
 */
var mergeFunctions = exports.mergeFunctions = function mergeFunctions() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return functions.filter(Boolean).forEach(function (f) {
      return f.apply(undefined, args);
    });
  };
};

/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */
var callIfDefined = exports.callIfDefined = function callIfDefined(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  if (fn && typeof fn === 'function') {
    fn.apply(undefined, args);
  }
};

var isValueWithinRange = exports.isValueWithinRange = function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
};

var isRangeWithinRange = exports.isRangeWithinRange = function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
};

var doRangesOverlap = exports.doRangesOverlap = function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
};

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */
var between = exports.between = function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
};

var isEqual = function isEqual(date1, date2) {
  return new Date(date1).getTime() === new Date(date2).getTime();
};

var getTileClasses = exports.getTileClasses = function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!(date instanceof Array) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = date instanceof Array ? date : (0, _dates.getRange)(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push(className + '--now');
  }

  if (!value) {
    return classes;
  }

  if (!(value instanceof Array) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = value instanceof Array ? value : (0, _dates.getRange)(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push(className + '--active');
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push(className + '--hasActive');
  } else if (hover && (
  // Date before value
  dateRange[1] < valueRange[0] && isRangeWithinRange([hover, valueRange[0]], dateRange) ||
  // Date after value
  dateRange[0] > valueRange[1] && isRangeWithinRange([valueRange[1], hover], dateRange))) {
    classes.push(className + '--hover');
  }

  var isRangeStart = isEqual(dateRange[0], valueRange[0]);
  var isRangeEnd = isEqual(dateRange[1], valueRange[1]);

  if (isRangeStart) {
    classes.push(className + '--rangeStart');
  }

  if (isRangeEnd) {
    classes.push(className + '--rangeEnd');
  }

  if (isRangeStart && isRangeEnd) {
    classes.push(className + '--rangeBothEnds');
  }

  return classes;
};

/***/ })

})
//# sourceMappingURL=index.js.e5fdb094988f8c038db5.hot-update.js.map