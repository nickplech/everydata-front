webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Tab.js":
/*!***************************!*\
  !*** ./components/Tab.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.addTab({
        id: this.props.id,
        title: this.props.title
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.activeTab.id === this.props.id && this.props.children;
    }
  }]);

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./components/TabParent.js":
/*!*********************************!*\
  !*** ./components/TabParent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UpdateUserProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateUserProfile */ "./components/UpdateUserProfile.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./components/Tabs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/TabParent.js";




var styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "TabParent__Styled",
  componentId: "sc-1tmt3av-0"
})([".padded{padding:20px;}"]);

var TabParent = function TabParent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styled, {
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeTab: {
      id: 'tab1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"].Tab, {
    id: "tab1",
    title: "Tab 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "padded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"].Tab, {
    id: "tab2",
    title: "Tab 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "padded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "This is tab 2"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TabParent);

/***/ }),

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "./components/Tab.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/components/Tabs.js";

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




var ListTabs = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Tabs__ListTabs",
  componentId: "sc-1h2wkfw-0"
})(["padding-left:0;list-style:none;margin:0;"]);
var TabTitleItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Tabs__TabTitleItem",
  componentId: "sc-1h2wkfw-1"
})(["display:inline-block;padding-right:5;padding-left:5;transition:all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;padding:16px 30px;cursor:pointer;opacity:0.4;&:hover{opacity:1;}"]); // props => {
//   return (
//     props.isActiveTab && {
//       transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//       cursor: 'default',
//       opacity: 1,
//     }
//   )
// },

var ActiveTabBorder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tabs__ActiveTabBorder",
  componentId: "sc-1h2wkfw-2"
})(["height:4;background-color:#0088dd;position:absolute;bottom:0;transition:all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;will-change:left,width;"]); // props => {
//   return (
//     props.activeTabElement && {
//       width: props.activeTabElement.offsetWidth,
//       left: props.activeTabElement.offsetLeft,
//     }
//   )
// },

var TabAnchorItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Tabs__TabAnchorItem",
  componentId: "sc-1h2wkfw-3"
})(["text-transform:capitalize;color:#000000;font-weight:600;"]);
var TabzContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tabs__TabzContainer",
  componentId: "sc-1h2wkfw-4"
})(["position:relative;border-bottom:1px solid #dfdfdf;"]);
var ReactTabs = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tabs__ReactTabs",
  componentId: "sc-1h2wkfw-5"
})(["position:realative;"]);

var TabsContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(TabsContainer, _Component);

  function TabsContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      tabs: [],
      prevActiveTab: {},
      activeTab: _this.props.activeTab,
      tabsElements: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addTab", function (newTab) {
      var isNewTabFound;

      for (var i in _this.state.tabs) {
        var tab = _this.state.tabs[i];

        if (tab.id === newTab.id) {
          isNewTabFound = true;
          break;
        }
      }

      if (!isNewTabFound) {
        _this.setState(function (prevState, props) {
          return {
            tabs: prevState.tabs.concat(newTab)
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeTab", function (tabId) {
      _this.setState(function (prevState, props) {
        return {
          tabs: prevState.tabs.filter(function (tab) {
            return tab.id !== tabId;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (tab) {
      return function (event) {
        _this.setState(function (prevState, props) {
          return {
            prevActiveTab: prevState.activeTab,
            activeTab: tab
          };
        });
      };
    });

    return _this;
  }

  _createClass(TabsContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactTabs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabzContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListTabs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, this.state.tabs.map(function (tab, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabTitleItem, {
          key: index,
          onClick: _this2.onClick(tab),
          id: tab.id,
          innerRef: function innerRef(tabElement) {
            if (!_this2.state.tabsElements[tab.id]) {
              _this2.setState(function (prevState, props) {
                var tabsElements = prevState.tabsElements;
                tabsElements[tab.id] = tabElement;
                return {
                  tabsElements: tabsElements
                };
              });
            }
          },
          isActiveTab: _this2.state.activeTab.id === tab.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabAnchorItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, tab.title));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveTabBorder, {
        activeTabElement: this.state.tabsElements[this.state.activeTab.id],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          activeTab: _this2.state.activeTab,
          addTab: _this2.addTab
        });
      }));
    }
  }]);

  return TabsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(TabsContainer, "Tab", _Tab__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TabsContainer);

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpdateUserProfile */ "./components/UpdateUserProfile.js");
/* harmony import */ var _components_TabParent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TabParent */ "./components/TabParent.js");
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/account.js";





var Settings = function Settings(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TabParent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/account")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=account.js.58f2969496788143e2cd.hot-update.js.map