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
/* harmony import */ var _ImageInput__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ImageInput__WEBPACK_IMPORTED_MODULE_5__);
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
})(["display:flex;flex-flow:column;.gear{position:absolute;height:25px;width:25px;left:215px;margin-top:10px;}.create-contact-avatar-input{min-width:80px;height:80px;background-color:lightgrey;background-image:url('./icons/person.svg');background-size:32px 32px;background-position:center;background-repeat:no-repeat;border-radius:50%;cursor:pointer;}.center{font-family:'Open Sans',Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;height:299px;width:250px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:2px 2px 3px 0 rgba(0,0,0,0.2);}.profile{width:100%;height:300px;text-align:center;}.profile .image{position:relative;width:70px;height:70px;margin:38px auto 0 auto;}.profile .image .circle-1,.profile .image .circle-2{position:absolute;box-sizing:border-box;width:76px;height:76px;top:-3px;left:-3px;border-width:1px;border-style:solid;border-color:rgba(100,120,240,1) rgba(100,120,240,1) rgba(100,120,240,1) transparent;border-radius:50%;transition:all 1.5s ease-in-out;}.profile .image .circle-2{width:82px;height:82px;top:-6px;left:-6px;border-color:rgba(100,120,240,1) transparent rgba(100,120,240,1) rgba(100,120,240,1);}.profile .image img{display:block;border-radius:50%;background:#f5e8df;}.profile .image:hover{cursor:pointer;}.profile .image:hover .circle-1,.profile .image:hover .circle-2{-webkit-transform:rotate(360deg);transform:rotate(360deg);}.profile .image:hover .circle-2{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);}.stats{display:flex;flex-flow:row nowrap;margin-top:35px;height:100px;color:white;justify-content:center;align-content:center;align-items:center;background:rgba(100,120,240,1);text-align:center;}"]);
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
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _SingleClient__WEBPACK_IMPORTED_MODULE_1__["SINGLE_CLIENT_QUERY"],
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        });
        if (!data.client) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, "No Client Found for ", _this.props.id);
        var client = data.client;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flexer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
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
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Gear, {
          className: "gear",
          src: "../static/img/gear.png",
          alt: "client update",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "profile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "circle-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "circle-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "http://100dayscss.com/codepen/jessica-potter.jpg",
          width: "70",
          height: "70",
          alt: "Jessica Potter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, client.firstName, " ", client.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSub, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, client.cellPhone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "stats",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stat, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cake, {
          src: "../static/img/cake.png",
          alt: "birthday cake",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        })), Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(client.birthDay, 'MMMM d, YYYY', {
          awareOfUnicodeTokens: true
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: _this.props.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageInput__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "create-contact-avatar-input",
          name: "avatarURL",
          maxHeight: 64,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
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
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react'
// import PropTypes from 'prop-types'
// const readFileAsDataURL = file =>
//   new Promise(resolve => {
//     const reader = new FileReader()
//     reader.onload = event => {
//       resolve(event.target.result)
//     }
//     reader.readAsDataURL(file)
//   })
// const resizeImage = (imageURL, canvas, maxHeight) =>
//   new Promise(resolve => {
//     const image = new Image()
//     image.onload = () => {
//       const context = canvas.getContext('2d')
//       if (image.height > maxHeight) {
//         image.width *= maxHeight / image.height
//         image.height = maxHeight
//       }
//       context.clearRect(0, 0, canvas.width, canvas.height)
//       canvas.width = image.width
//       canvas.height = image.height
//       context.drawImage(image, 0, 0, image.width, image.height)
//       resolve(canvas.toDataURL('image/jpeg'))
//     }
//     image.src = imageURL
//   })
// /**
//  * A custom <input> that dynamically reads and resizes image files before
//  * submitting them to the server as data URLs. Also, shows a preview of the image
//  */
// class ImageInput extends React.Component {
//   static propTypes = {
//     className: PropTypes.string,
//     name: PropTypes.string,
//     maxHeight: PropTypes.number,
//   }
//   // state = {
//   //   image: '',
//   // }
//   handleFileChange = event => {
//     const file = event.target.files[0]
//     if (file && file.type.match(/^image\//)) {
//       readFileAsDataURL(file).then(originalURL => {
//         resizeImage(originalURL, this.canvas, this.props.maxHeight).then(
//           url => {
//             this.setState({ value: url })
//           },
//         )
//       })
//     } else {
//       this.setState({ image: '' })
//     }
//   }
//   handleFormReset = () => {
//     this.setState({ image: '' })
//   }
//   componentDidMount() {
//     this.canvas = document.createElement('canvas')
//     this.fileInput.form.addEventListener('reset', this.handleFormReset)
//   }
//   componentWillUnmount() {
//     this.fileInput.form.removeEventListener('reset', this.handleFormReset)
//   }
//   render() {
//     const { className, name } = this.props
//     const { value } = this.state
//     const style = {
//       position: 'relative',
//     }
//     if (value) {
//       style.backgroundImage = `url("${image}")`
//       style.backgroundRepeat = 'no-repeat'
//       style.backgroundPosition = 'center'
//       style.backgroundSize = 'cover'
//     }
//     return (
//       <div className={className} style={style}>
//         <input type="hidden" name={name} value={value} />
//         <input
//           ref={node => (this.fileInput = node)}
//           type="file"
//           onChange={this.handleFileChange}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: 0,
//           }}
//         />
//       </div>
//     )
//   }
// }
// export default ImageInput

/***/ })

})
//# sourceMappingURL=client.js.5858c5840abe9c24b11a.hot-update.js.map