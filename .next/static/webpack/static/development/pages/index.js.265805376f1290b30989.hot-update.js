webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Phone.js":
/*!*****************************!*\
  !*** ./components/Phone.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typist */ "./node_modules/react-typist/dist/Typist.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nickplechas/coding/everyData/everydata-front/components/Phone.js";




var Computer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Phone__Computer",
  componentId: "sc-14kne8s-0"
})([".main-phone{z-index:4;margin:0 auto;}"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Phone__Flex",
  componentId: "sc-14kne8s-1"
})(["display:flex;justify-content:center;.logoWhite{position:absolute;padding:0px;display:block;z-index:15;margin:110px auto 70px auto;height:auto;width:500px;z-index:10;}.compTitle{font-family:'Montserrat',sans-serif;font-weight:300;font-size:1.3rem;text-align:center;margin:185px auto 20px auto;color:white;padding:8px 16px;border-radius:5px;position:absolute;display:block;z-index:900;}.clickhere{cursor:pointer;padding:6px 10px;border:2px solid white;border-radius:5px;color:white;position:absolute;display:block;margin-top:310px;&:hover{background:white;color:rgba(20,110,240,0.8);}}.typing{@import url('https://fonts.googleapis.com/css?family=Audiowide|Comfortaa|Orbitron|Rajdhani|VT323');position:absolute;font-family:'VT323',monospace;font-size:18px;transform:translateY(260px);color:white;}.Typist .Cursor{display:inline-block;}.Typist .Cursor--blinking{opacity:1;animation:blink 1s linear infinite;}@keyframes blink{0%{opacity:1;}50%{opacity:0;}100%{opacity:1;}}"]);
var Bub1 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].img({
  exit: {
    y: -35,
    opacity: 0
  },
  enter: {
    y: 0,
    x: 0,
    opacity: 1,
    delay: 900,
    transition: {
      y: {
        type: 'spring',
        stiffness: 600,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Bub2 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].a({
  exit: {
    opacity: 0,
    y: -50
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: 1900,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Bub3 = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].p({
  exit: {
    opacity: 0,
    x: 100
  },
  enter: {
    x: 153,
    opacity: 1,
    delay: 1500,
    transition: {
      y: {
        type: 'spring',
        stiffness: 1000,
        damping: 15
      },
      default: {
        duration: 300
      }
    }
  }
});
var Color = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Phone__Color",
  componentId: "sc-14kne8s-2"
})(["color:rgba(200,80,150,1);font-weight:800;"]);

var Phone = function Phone(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub1, {
    initialPose: "exit",
    pose: "enter",
    key: "bub1",
    className: "logoWhite",
    src: '../static/img/ogocalibri.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub2, {
    initialPose: "exit",
    pose: "enter",
    key: "bub2",
    onClick: props.toggleModal,
    className: "clickhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Click Here to Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bub3, {
    initialPose: "exit",
    pose: "enter",
    key: "bub3",
    className: "compTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Business & Consumer Lists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "typing",
    cursor: {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true
    },
    startDelay: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Our database contains ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "150 million Consumers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 21,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "110 million Homeowners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 22,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "30 million Businesses"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 21,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "15 million Business Owners"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Delay, {
    ms: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_3___default.a.Backspace, {
    count: 48,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), "Data for Any Industry that Makes Calls")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Computer, {
    width: "805px",
    height: "auto",
    src: '../static/img/comp2.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Phone);

/***/ })

})
//# sourceMappingURL=index.js.265805376f1290b30989.hot-update.js.map