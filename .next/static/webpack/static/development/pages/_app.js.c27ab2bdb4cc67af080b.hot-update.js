webpackHotUpdate("static/development/pages/_app.js",{

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
                date: date_fns__WEBPACK_IMPORTED_MODULE_2___default.a.startOfDay(new Date())
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
//# sourceMappingURL=_app.js.c27ab2bdb4cc67af080b.hot-update.js.map