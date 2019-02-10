webpackHotUpdate("static/development/pages/account.js",{

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
})(["display:inline-block;padding-right:10px;padding-left:10px;padding-top:5px;transition:all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;margin:16px 0px 0 0px;cursor:pointer;border:1px solid grey;opacity:0.4;border-bottom:none;&:hover{opacity:1;}&:nth-child(1){border-radius:10px 0 0 0;}&:nth-child(3){border-radius:0px 10px 0 0;}"]);
var ActiveTabBorder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tabs__ActiveTabBorder",
  componentId: "sc-1h2wkfw-2"
})(["background-color:#0088dd;position:absolute;bottom:0;transition:all 300ms cubic-bezier(0.4,0,0.2,1) 0ms;will-change:left,width;"]);
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
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabzContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListTabs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabAnchorItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, tab.title));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveTabBorder, {
        activeTabElement: this.state.tabsElements[this.state.activeTab.id],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
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

/***/ })

})
//# sourceMappingURL=account.js.cb0d8f541926e6f3fece.hot-update.js.map