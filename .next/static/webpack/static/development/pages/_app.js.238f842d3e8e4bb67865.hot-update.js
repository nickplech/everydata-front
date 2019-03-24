webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Client.js":
false,

/***/ "./components/Clients.js":
false,

/***/ "./components/DaySelector.js":
false,

/***/ "./components/DeleteClient.js":
false,

/***/ "./components/ErrorMessage.js":
false,

/***/ "./components/Pagination.js":
false,

/***/ "./components/ReviewMessage.js":
false,

/***/ "./components/SingleClient.js":
false,

/***/ "./components/Submitted.js":
false,

/***/ "./components/TimePicker.js":
false,

/***/ "./components/styles/ClientStyles.js":
false,

/***/ "./components/styles/PaginationStyles.js":
false,

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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_SlideDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SlideDown */ "./components/SlideDown.js");







function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
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
              query: _components_Slider__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STATE_QUERY"]
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
              query: _components_Modal__WEBPACK_IMPORTED_MODULE_4__["OPEN_MODAL_QUERY"]
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
          openSlide: function openSlide(_, variables, _ref4) {
            var cache = _ref4.cache;

            var _cache$readQuery3 = cache.readQuery({
              query: OPEN_SLIDE_QUERY
            }),
                openSlide = _cache$readQuery3.openSlide;

            var data = {
              data: {
                openSlide: !openSlide
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
        openSlide: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
false,

/***/ "./node_modules/chroma-js/chroma.js":
false,

/***/ "./node_modules/create-emotion/dist/index.esm.js":
false,

/***/ "./node_modules/emotion/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
false,

/***/ "./node_modules/react-select/dist/react-select.esm.js":
false

})
//# sourceMappingURL=_app.js.238f842d3e8e4bb67865.hot-update.js.map