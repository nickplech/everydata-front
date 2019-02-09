webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/CalendarStats.js":
/*!*************************************!*\
  !*** ./components/CalendarStats.js ***!
  \*************************************/
/*! exports provided: default, LOCAL_DATE_QUERY, NEW_DATE_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_DATE_QUERY", function() { return LOCAL_DATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_DATE_MUTATION", function() { return NEW_DATE_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-calendar/dist/entry.nostyle */ "./node_modules/react-calendar/dist/entry.nostyle.js");
/* harmony import */ var react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SingleDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleDay */ "./components/SingleDay.js");
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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    newDate @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    date @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var LOCAL_DATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var NEW_DATE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CalendarStats__StatsDisplay",
  componentId: "sc-3vgek8-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);width:100%;height:100%;border:5px solid white;border-radius:25px 25px 25px 25px;box-shadow:1px 1px 2px 3px rgba(0,0,0,0.05);.react-calendar{width:365px;border-radius:15px;max-width:100%;box-shadow:0px 1px 1px 1px rgba(20,20,20,0.1);max-height:300px;background:white;border:1px solid rgba(20,20,20,0.1);font-family:Arial,Helvetica,sans-serif;line-height:1.125em;}.react-calendar,.react-calendar *,.react-calendar *:before,.react-calendar *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.react-calendar button{margin:0;border:0;outline:none;}.react-calendar button:enabled:hover{cursor:pointer;}.react-calendar__navigation{height:60px;margin-bottom:0.5em;}.react-calendar__navigation button{min-width:44px;background:none;font-size:20px;background-color:rgba(100,100,240,1);border-radius:15px 15px 0 0;color:white;&:first-child{border-radius:15px 0 0 0;}&:last-child{border-radius:0 15px 0 0;}&:nth-child(2){border-radius:0;}&:nth-child(3){border-radius:0;}&:nth-child(4){border-radius:0;}}.react-calendar__navigation button:enabled:hover,.react-calendar__navigation button:enabled:focus{background-color:#e6e6e6;}.react-calendar__navigation button[disabled]{background-color:rgba(100,100,240,0.1);}.react-calendar__month-view__weekdays{text-align:center;text-transform:uppercase;font-weight:bold;font-size:0.75em;}.react-calendar__month-view__weekdays__weekday{padding:2em 0;}.react-calendar__month-view__weekNumbers{font-weight:bold;}.react-calendar__month-view__weekNumbers .react-calendar__tile{display:flex;align-items:center;justify-content:center;font-size:0.75em;padding:calc(0.75em / 0.75) calc(0.5em / 0.75);}.react-calendar__month-view__days__day--weekend{color:red;}.react-calendar__month-view__days__day--neighboringMonth{color:#969696;}.react-calendar__year-view .react-calendar__tile,.react-calendar__decade-view .react-calendar__tile,.react-calendar__century-view .react-calendar__tile{padding:2em 0.5em;}.react-calendar__tile{max-width:100%;text-align:center;padding:0.75em 0.5em;background:none;}.react-calendar__tile:disabled{background-color:#f0f0f0;}.react-calendar__tile:enabled:hover,.react-calendar__tile:enabled:focus{background-color:#e6e6e6;}.react-calendar__tile--hasActive{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--hasActive:enabled:hover,.react-calendar__tile--hasActive:enabled:focus{background:#a9d4ff;}.react-calendar__tile--active{background:rgba(100,100,240,1);color:white;}.react-calendar__tile--active:enabled:hover,.react-calendar__tile--active:enabled:focus{background:#1087ff;}.react-calendar--selectRange .react-calendar__tile--hover{background-color:rgba(100,100,240,1);color:white;}"]);

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
    // onChange = date => this.setState({ date })
    // handleClick = () => {
    //   alert(`'New date is: ${this.state.date}'`)
    // }
    // handleJumpToToday = today => this.setState({ today })
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: NEW_DATE_MUTATION,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, function (newDate) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: LOCAL_DATE_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, function (_ref) {
          var data = _ref.data;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default.a, {
            name: "date",
            onChange: data.newDate,
            minDetail: "decade",
            value: data.date,
            calendarType: "US",
            returnValue: "start",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleDay__WEBPACK_IMPORTED_MODULE_5__["default"], {
            date: data.date,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }));
        }, ' ');
      }));
    }
  }]);

  return CalendarStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CalendarStats);


/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_CalendarStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CalendarStats */ "./components/CalendarStats.js");









function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_3__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            var _cache$readQuery = cache.readQuery({
              query: _components_Slider__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STATE_QUERY"]
            }),
                cartOpen = _cache$readQuery.cartOpen;

            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          },
          toggleModal: function toggleModal(_, variables, _ref3) {
            var cache = _ref3.cache;

            var _cache$readQuery2 = cache.readQuery({
              query: _components_Modal__WEBPACK_IMPORTED_MODULE_5__["OPEN_MODAL_QUERY"]
            }),
                openModal = _cache$readQuery2.openModal;

            var data = {
              data: {
                openModal: !openModal
              }
            };
            cache.writeData(data);
            return data;
          },
          newDate: function newDate(_, variables, _ref4) {
            var cache = _ref4.cache;

            var _cache$readQuery3 = cache.readQuery({
              query: _components_CalendarStats__WEBPACK_IMPORTED_MODULE_6__["LOCAL_DATE_QUERY"]
            }),
                date = _cache$readQuery3.date;

            var data = {
              data: {
                date: date
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false,
        openModal: false,
        date: date_fns__WEBPACK_IMPORTED_MODULE_2___default.a.startOfDay(new Date())
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ })

})
//# sourceMappingURL=_app.js.d775d418e68385a4421a.hot-update.js.map