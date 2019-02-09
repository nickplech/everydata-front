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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ClientSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientSearch */ "./components/ClientSearch.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Modal.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var TOGGLE_MODAL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2()); // const CREATE_CLIENT_MUTATION = gql`
//   mutation CREATE_CLIENT_MUTATION(
//     $firstName: String!
//     $lastName: String!
//     $cellPhone: String!
//     $birthDay: DateTime
//     $image: String
//   ) {
//     createClient(
//       firstName: $firstName
//       lastName: $lastName
//       cellPhone: $cellPhone
//       birthDay: $birthDay
//       image: $image
//     ) {
//       id
//     }
//   }
// `

var BackDrop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Modal__BackDrop",
  componentId: "sc-105rmtf-0"
})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.5);"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "Modal__Title",
  componentId: "sc-105rmtf-1"
})([""]);
var Modall = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Modal__Modall",
  componentId: "sc-105rmtf-2"
})(["background-color:#fff;border-radius:25px;display:grid;grid-template-rows:50px 1fr 80px;grid-template-columns:1fr 1fr;position:absolute;align-items:center;width:500px;height:500px;padding:10px 25px;z-index:900;box-shadow:1px 1px 5px 3px rgba(0,0,0,0.3);.title{grid-column:1/3;font-size:18px;align-self:center;background:rgba(20,110,220,1);width:100%;color:white;}"]);
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Modal__Cancel",
  componentId: "sc-105rmtf-3"
})(["background-color:#fff;border-radius:5px;display:grid;grid-row:3;grid-column:2;position:relative;align-items:center;justify-self:flex-start;height:40%;background:rgba(220,100,120,1);color:white;width:100px;font-size:18px;z-index:900;&:focus{outline:none;}"]);
var Save = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Modal__Save",
  componentId: "sc-105rmtf-4"
})(["background-color:#fff;border-radius:5px;display:grid;grid-column:2;grid-row:3;justify-self:flex-end;position:relative;align-items:center;width:100px;height:40%;background:rgba(20,200,120,1);color:white;font-size:18px;z-index:900;&:focus{outline:none;}"]);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      client: '',
      date: '',
      timeRange: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: TOGGLE_MODAL_MUTATION,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, function (toggleModal) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: OPEN_MODAL_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
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
              lineNumber: 131
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modall, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, "New Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "reason",
            className: "required",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, "Appointment Type:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "text",
            id: "reason",
            name: "reason",
            placeholder: "Appointment Type",
            autoComplete: "off",
            required: true // value={
            // }
            ,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cancel, {
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Save, {
            onClick: toggleModal,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, "Save")));
        });
      });
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ })

})
//# sourceMappingURL=_app.js.1c5ae3f34bf065be20b5.hot-update.js.map