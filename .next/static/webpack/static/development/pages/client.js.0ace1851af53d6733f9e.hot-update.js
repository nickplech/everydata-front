webpackHotUpdate("static/development/pages/client.js",{

/***/ "./components/ClientStats.js":
/*!***********************************!*\
  !*** ./components/ClientStats.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleClient */ "./components/SingleClient.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ImageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageInput */ "./components/ImageInput.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ClientStats.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var StatsDisplay = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "ClientStats__StatsDisplay",
  componentId: "cs4r2f-0"
})(["position:relative;display:grid;grid-row:1/3;grid-column:1;background-color:rgba(220,220,220,0.3);padding-left:5px;padding-top:5px;width:100%;height:100%;border:5px solid white;border-radius:25px;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);"]);
var Flexer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "ClientStats__Flexer",
  componentId: "cs4r2f-1"
})(["display:flex;flex-flow:column;.gear{position:absolute;height:25px;width:25px;left:215px;margin-top:10px;}.center{font-family:'Open Sans',Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;height:299px;width:250px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:2px 2px 3px 0 rgba(0,0,0,0.2);}.profile{width:100%;height:300px;text-align:center;}.profile .image{position:relative;width:70px;height:70px;margin:38px auto 0 auto;}.profile .image .circle-1,.profile .image .circle-2{position:absolute;box-sizing:border-box;width:76px;height:76px;top:-3px;left:-3px;border-width:1px;border-style:solid;border-color:rgba(100,120,240,1) rgba(100,120,240,1) rgba(100,120,240,1) transparent;border-radius:50%;transition:all 1.5s ease-in-out;}.profile .image .circle-2{width:82px;height:82px;top:-6px;left:-6px;border-color:rgba(100,120,240,1) transparent rgba(100,120,240,1) rgba(100,120,240,1);}.profile .image img{display:block;border-radius:50%;background:#f5e8df;}.profile .image:hover{cursor:pointer;}.profile .image:hover .circle-1,.profile .image:hover .circle-2{-webkit-transform:rotate(360deg);transform:rotate(360deg);}.profile .image:hover .circle-2{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);}.stats{display:flex;flex-flow:row nowrap;margin-top:35px;height:100px;color:white;justify-content:center;align-content:center;align-items:center;background:rgba(100,120,240,1);text-align:center;}"]);
var Cake = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "ClientStats__Cake",
  componentId: "cs4r2f-2"
})(["width:15px;height:15px;margin-right:5px;"]);
var Stat = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "ClientStats__Stat",
  componentId: "cs4r2f-3"
})(["font-size:12px;"]);
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2.withConfig({
  displayName: "ClientStats__StyledTitle",
  componentId: "cs4r2f-4"
})(["margin-top:10px;margin-bottom:0;display:block;text-align:center;font-size:19px;line-height:28px;color:rgba(100,120,240,1);"]);
var StyledSub = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "ClientStats__StyledSub",
  componentId: "cs4r2f-5"
})(["margin:0;font-size:14px;font-weight:400;"]);
var Gear = react_pose__WEBPACK_IMPORTED_MODULE_7__["default"].img({
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

var ClientStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClientStats, _React$Component);

  function ClientStats() {
    _classCallCheck(this, ClientStats);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClientStats).apply(this, arguments));
  }

  _createClass(ClientStats, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsDisplay, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _SingleClient__WEBPACK_IMPORTED_MODULE_1__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "No Client Found for ", _this.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: _this.props.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
          className: "gear",
          src: "../static/img/gear.png",
          alt: "client update",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "circle-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "circle-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "http://100dayscss.com/codepen/jessica-potter.jpg",
          width: "70",
          height: "70",
          alt: "Jessica Potter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, client.firstName, " ", client.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSub, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, client.cellPhone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "stats",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stat, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cake, {
          src: "../static/img/cake.png",
          alt: "birthday cake",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        })), Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.birthDay, 'MMMM d, YYYY', {
          awareOfUnicodeTokens: true
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: _this.props.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }));
      }));
    }
  }]);

  return ClientStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ClientStats);

/***/ }),

/***/ "./components/ImageInput.js":
/*!**********************************!*\
  !*** ./components/ImageInput.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/ImageInput.js";

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




var readFileAsDataURL = function readFileAsDataURL(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });
};

var resizeImage = function resizeImage(imageURL, canvas, maxHeight) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      var context = canvas.getContext('2d');

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height;
        image.height = maxHeight;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      resolve(canvas.toDataURL('image/jpeg'));
    };

    image.src = imageURL;
  });
};
/**
 * A custom <input> that dynamically reads and resizes image files before
 * submitting them to the server as data URLs. Also, shows a preview of the image.
 */


var ImageInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageInput, _React$Component);

  function ImageInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFileChange", function (event) {
      var file = event.target.files[0];

      if (file && file.type.match(/^image\//)) {
        readFileAsDataURL(file).then(function (originalURL) {
          resizeImage(originalURL, _this.canvas, _this.props.maxHeight).then(function (url) {
            _this.setState({
              value: url
            });
          });
        });
      } else {
        _this.setState({
          value: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFormReset", function () {
      _this.setState({
        value: ''
      });
    });

    return _this;
  }

  _createClass(ImageInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvas = document.createElement('canvas');
      this.fileInput.form.addEventListener('reset', this.handleFormReset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.fileInput.form.removeEventListener('reset', this.handleFormReset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name;
      var value = this.state.value;
      var style = {
        position: 'relative'
      };

      if (value) {
        style.backgroundImage = "url(\"".concat(value, "\")");
        style.backgroundRepeat = 'no-repeat';
        style.backgroundPosition = 'center';
        style.backgroundSize = 'cover';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: name,
        value: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: function ref(node) {
          return _this2.fileInput = node;
        },
        type: "file",
        onChange: this.handleFileChange,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    }
  }]);

  return ImageInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ImageInput, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

/* harmony default export */ __webpack_exports__["default"] = (ImageInput);

/***/ })

})
//# sourceMappingURL=client.js.0ace1851af53d6733f9e.hot-update.js.map