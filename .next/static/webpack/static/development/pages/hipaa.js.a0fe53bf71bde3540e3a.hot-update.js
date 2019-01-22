webpackHotUpdate("static/development/pages/hipaa.js",{

/***/ "./components/Accordian.js":
/*!*********************************!*\
  !*** ./components/Accordian.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { Fragment } from 'react'
// import posed from 'react-pose'
// import styled from 'styled-components'
// const Content = posed.div({
//   closed: { height: 0 },
//   open: { height: 'auto' },
// })
// const StyledAccordian = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   #root {
//     display: flex;
//     flex-direction: column;
//     width: 400px;
//     color: white;
//     font-family: 'PT Sans', Helvetica, sans-serif;
//   }
//   h1 {
//     margin-bottom: 20px;
//     color: Black;
//     text-align: center;
//   }
//   h2 {
//     margin: 0;
//     color: white;
//     font-size: 16px;
//     width: 50%;
//   }
//   .title {
//     cursor: pointer;
//     background-image: linear-gradient(
//       -180deg,
//       rgba(100, 100, 240, 1) 0%,
//       rgba(100, 160, 220, 1) 300px
//     );
//     padding: 10px 20px;
//   }
//   .content {
//     overflow: hidden;
//     font-size: 18px;
//     background: rgba(240, 240, 240, 0.4);
//     color: black;
//     width: 50%;
//   }
//   .content-wrapper {
//     padding: 20px 20px;
//   }
// `
// const Plus = styled.div`
//   display: inline-flex;
//   align-content: center;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 30px;
//   background: white;
//   border: 2px solid white;
//   border-radius: 50%;
//   margin-right: 40px;
//   .plus {
//     display: inline-flex;
//     text-align: center;
//     -webkit-touch-callout: none; /* iOS Safari */
//     -webkit-user-select: none; /* Safari */
//     -khtml-user-select: none; /* Konqueror HTML */
//     -moz-user-select: none; /* Firefox */
//     -ms-user-select: none; /* Internet Explorer/Edge */
//     user-select: none;
//     color: purple;
//     font-size: 25px;
//     margin-bottom: 2px;
//     margin-right: 0.5px;
//   }
// `
// class Accordian extends React.Component {
//   state = { open: false }
//   render() {
//     const { open } = this.state
//     return (
//       <StyledAccordian>
//         <h1>Frequently Asked Questions</h1>
//         {this.props.data.map(({ title, content }, i) => (
//           <Fragment key={i}>
//             <h2
//               className="title"
//               onClick={() => this.setState({ open: open === i ? false : i })}
//             >
//               <Plus>
//                 <span className="plus">{open === i ? '-' : '+'}</span>
//               </Plus>
//               {title}
//             </h2>
//             <Content className="content" pose={open === i ? 'open' : 'closed'}>
//               <div className="content-wrapper">{content}</div>
//             </Content>
//           </Fragment>
//         ))}
//       </StyledAccordian>
//     )
//   }
// }
// export default Accordian

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
false,

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
false,

/***/ "./node_modules/fbjs/lib/hyphenate.js":
false,

/***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
false,

/***/ "./node_modules/framesync/dist/framesync.es.js":
false,

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/object-assign/index.js":
false,

/***/ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js":
false,

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
false,

/***/ "./node_modules/pose-core/dist/pose-core.es.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-pose/dist/react-pose.es.js":
false,

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/hipaa.js":
/*!************************!*\
  !*** ./pages/hipaa.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Accordian */ "./components/Accordian.js");
/* harmony import */ var _components_Accordian__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Accordian__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/hipaa.js";



var Hipaa = function Hipaa(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Accordian__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hipaa);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hipaa")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=hipaa.js.a0fe53bf71bde3540e3a.hot-update.js.map