webpackHotUpdate("static/development/pages/client.js",{

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
 * submitting them to the server as data URLs. Also, shows a preview of the image
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
//# sourceMappingURL=client.js.8288d5c36932d5381c41.hot-update.js.map