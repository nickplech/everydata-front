webpackHotUpdate("static/development/pages/orders.js",{

/***/ "./components/OrdersList.js":
/*!**********************************!*\
  !*** ./components/OrdersList.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React from 'react'
// import { Query } from 'react-apollo'
// import { formatDistance } from 'date-fns'
// import Link from 'next/link'
// import styled from 'styled-components'
// import gql from 'graphql-tag'
// import Error from './ErrorMessage'
// import formatMoney from '../lib/formatMoney'
// import OrderItemStyles from './styles/OrderItemStyles'
// const USER_ORDERS_QUERY = gql`
//   query USER_ORDERS_QUERY {
//     orders(orderBy: createdAt_DESC) {
//       id
//       price
//       createdAt
//     }
//   }
// `
// const OrderUl = styled.ul`
//   display: grid;
//   grid-gap: 4rem;
//   grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
// `
// class OrderList extends React.Component {
//   render() {
//     return (
//       <Query query={USER_ORDERS_QUERY}>
//         {({ data: { orders }, loading, error }) => {
//           if (loading) return <p>loading...</p>
//           if (error) return <Error erorr={error} />
//           console.log(orders)
//           return (
//             <div>
//               <h2>You have {orders.length} orders</h2>
//               <OrderUl>
//                 {orders.map(order => (
//                   <OrderItemStyles key={order.id}>
//                     <Link
//                       href={{
//                         pathname: '/order',
//                         query: { id: order.id },
//                       }}
//                     >
//                       <a>
//                         <div className="order-meta">
//                           {/* <p>
//                             {order.packages.reduce((a, b) => a + b.quantity, 0)}{' '}
//                             Package(s):
//                           </p>
//                           <p>{order.packages.length} Products</p> */}
//                           <p>{formatDistance(order.createdAt, new Date())}</p>
//                           <p>{formatMoney(order.total)}</p>
//                         </div>
//                         {/* <div className="images">
//                           {orders.map(kit => (
//                             <img key={kit.id} src={kit.image} alt={kit.title} />
//                           ))}
//                         </div> */}
//                       </a>
//                     </Link>
//                   </OrderItemStyles>
//                 ))}
//               </OrderUl>
//             </div>
//           )
//         }}
//       </Query>
//     )
//   }
// }
// export default OrderList

/***/ }),

/***/ "./components/styles/OrderItemStyles.js":
false,

/***/ "./lib/formatMoney.js":
false,

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/add_days/index.js":
false,

/***/ "./node_modules/date-fns/add_hours/index.js":
false,

/***/ "./node_modules/date-fns/add_iso_years/index.js":
false,

/***/ "./node_modules/date-fns/add_milliseconds/index.js":
false,

/***/ "./node_modules/date-fns/add_minutes/index.js":
false,

/***/ "./node_modules/date-fns/add_months/index.js":
false,

/***/ "./node_modules/date-fns/add_quarters/index.js":
false,

/***/ "./node_modules/date-fns/add_seconds/index.js":
false,

/***/ "./node_modules/date-fns/add_weeks/index.js":
false,

/***/ "./node_modules/date-fns/add_years/index.js":
false,

/***/ "./node_modules/date-fns/are_ranges_overlapping/index.js":
false,

/***/ "./node_modules/date-fns/closest_index_to/index.js":
false,

/***/ "./node_modules/date-fns/closest_to/index.js":
false,

/***/ "./node_modules/date-fns/compare_asc/index.js":
false,

/***/ "./node_modules/date-fns/compare_desc/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_iso_weeks/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_iso_years/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_months/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_quarters/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_weeks/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_calendar_years/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_days/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_hours/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_iso_years/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_minutes/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_months/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_quarters/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_weeks/index.js":
false,

/***/ "./node_modules/date-fns/difference_in_years/index.js":
false,

/***/ "./node_modules/date-fns/distance_in_words/index.js":
false,

/***/ "./node_modules/date-fns/distance_in_words_strict/index.js":
false,

/***/ "./node_modules/date-fns/distance_in_words_to_now/index.js":
false,

/***/ "./node_modules/date-fns/each_day/index.js":
false,

/***/ "./node_modules/date-fns/end_of_day/index.js":
false,

/***/ "./node_modules/date-fns/end_of_hour/index.js":
false,

/***/ "./node_modules/date-fns/end_of_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/end_of_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/end_of_minute/index.js":
false,

/***/ "./node_modules/date-fns/end_of_month/index.js":
false,

/***/ "./node_modules/date-fns/end_of_quarter/index.js":
false,

/***/ "./node_modules/date-fns/end_of_second/index.js":
false,

/***/ "./node_modules/date-fns/end_of_today/index.js":
false,

/***/ "./node_modules/date-fns/end_of_tomorrow/index.js":
false,

/***/ "./node_modules/date-fns/end_of_week/index.js":
false,

/***/ "./node_modules/date-fns/end_of_year/index.js":
false,

/***/ "./node_modules/date-fns/end_of_yesterday/index.js":
false,

/***/ "./node_modules/date-fns/format/index.js":
false,

/***/ "./node_modules/date-fns/get_date/index.js":
false,

/***/ "./node_modules/date-fns/get_day/index.js":
false,

/***/ "./node_modules/date-fns/get_day_of_year/index.js":
false,

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
false,

/***/ "./node_modules/date-fns/get_days_in_year/index.js":
false,

/***/ "./node_modules/date-fns/get_hours/index.js":
false,

/***/ "./node_modules/date-fns/get_iso_day/index.js":
false,

/***/ "./node_modules/date-fns/get_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/get_iso_weeks_in_year/index.js":
false,

/***/ "./node_modules/date-fns/get_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/get_milliseconds/index.js":
false,

/***/ "./node_modules/date-fns/get_minutes/index.js":
false,

/***/ "./node_modules/date-fns/get_month/index.js":
false,

/***/ "./node_modules/date-fns/get_overlapping_days_in_ranges/index.js":
false,

/***/ "./node_modules/date-fns/get_quarter/index.js":
false,

/***/ "./node_modules/date-fns/get_seconds/index.js":
false,

/***/ "./node_modules/date-fns/get_time/index.js":
false,

/***/ "./node_modules/date-fns/get_year/index.js":
false,

/***/ "./node_modules/date-fns/index.js":
false,

/***/ "./node_modules/date-fns/is_after/index.js":
false,

/***/ "./node_modules/date-fns/is_before/index.js":
false,

/***/ "./node_modules/date-fns/is_date/index.js":
false,

/***/ "./node_modules/date-fns/is_equal/index.js":
false,

/***/ "./node_modules/date-fns/is_first_day_of_month/index.js":
false,

/***/ "./node_modules/date-fns/is_friday/index.js":
false,

/***/ "./node_modules/date-fns/is_future/index.js":
false,

/***/ "./node_modules/date-fns/is_last_day_of_month/index.js":
false,

/***/ "./node_modules/date-fns/is_leap_year/index.js":
false,

/***/ "./node_modules/date-fns/is_monday/index.js":
false,

/***/ "./node_modules/date-fns/is_past/index.js":
false,

/***/ "./node_modules/date-fns/is_same_day/index.js":
false,

/***/ "./node_modules/date-fns/is_same_hour/index.js":
false,

/***/ "./node_modules/date-fns/is_same_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/is_same_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/is_same_minute/index.js":
false,

/***/ "./node_modules/date-fns/is_same_month/index.js":
false,

/***/ "./node_modules/date-fns/is_same_quarter/index.js":
false,

/***/ "./node_modules/date-fns/is_same_second/index.js":
false,

/***/ "./node_modules/date-fns/is_same_week/index.js":
false,

/***/ "./node_modules/date-fns/is_same_year/index.js":
false,

/***/ "./node_modules/date-fns/is_saturday/index.js":
false,

/***/ "./node_modules/date-fns/is_sunday/index.js":
false,

/***/ "./node_modules/date-fns/is_this_hour/index.js":
false,

/***/ "./node_modules/date-fns/is_this_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/is_this_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/is_this_minute/index.js":
false,

/***/ "./node_modules/date-fns/is_this_month/index.js":
false,

/***/ "./node_modules/date-fns/is_this_quarter/index.js":
false,

/***/ "./node_modules/date-fns/is_this_second/index.js":
false,

/***/ "./node_modules/date-fns/is_this_week/index.js":
false,

/***/ "./node_modules/date-fns/is_this_year/index.js":
false,

/***/ "./node_modules/date-fns/is_thursday/index.js":
false,

/***/ "./node_modules/date-fns/is_today/index.js":
false,

/***/ "./node_modules/date-fns/is_tomorrow/index.js":
false,

/***/ "./node_modules/date-fns/is_tuesday/index.js":
false,

/***/ "./node_modules/date-fns/is_valid/index.js":
false,

/***/ "./node_modules/date-fns/is_wednesday/index.js":
false,

/***/ "./node_modules/date-fns/is_weekend/index.js":
false,

/***/ "./node_modules/date-fns/is_within_range/index.js":
false,

/***/ "./node_modules/date-fns/is_yesterday/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_month/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_quarter/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_week/index.js":
false,

/***/ "./node_modules/date-fns/last_day_of_year/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
false,

/***/ "./node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js":
false,

/***/ "./node_modules/date-fns/locale/en/build_format_locale/index.js":
false,

/***/ "./node_modules/date-fns/locale/en/index.js":
false,

/***/ "./node_modules/date-fns/max/index.js":
false,

/***/ "./node_modules/date-fns/min/index.js":
false,

/***/ "./node_modules/date-fns/parse/index.js":
false,

/***/ "./node_modules/date-fns/set_date/index.js":
false,

/***/ "./node_modules/date-fns/set_day/index.js":
false,

/***/ "./node_modules/date-fns/set_day_of_year/index.js":
false,

/***/ "./node_modules/date-fns/set_hours/index.js":
false,

/***/ "./node_modules/date-fns/set_iso_day/index.js":
false,

/***/ "./node_modules/date-fns/set_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/set_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/set_milliseconds/index.js":
false,

/***/ "./node_modules/date-fns/set_minutes/index.js":
false,

/***/ "./node_modules/date-fns/set_month/index.js":
false,

/***/ "./node_modules/date-fns/set_quarter/index.js":
false,

/***/ "./node_modules/date-fns/set_seconds/index.js":
false,

/***/ "./node_modules/date-fns/set_year/index.js":
false,

/***/ "./node_modules/date-fns/start_of_day/index.js":
false,

/***/ "./node_modules/date-fns/start_of_hour/index.js":
false,

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
false,

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
false,

/***/ "./node_modules/date-fns/start_of_minute/index.js":
false,

/***/ "./node_modules/date-fns/start_of_month/index.js":
false,

/***/ "./node_modules/date-fns/start_of_quarter/index.js":
false,

/***/ "./node_modules/date-fns/start_of_second/index.js":
false,

/***/ "./node_modules/date-fns/start_of_today/index.js":
false,

/***/ "./node_modules/date-fns/start_of_tomorrow/index.js":
false,

/***/ "./node_modules/date-fns/start_of_week/index.js":
false,

/***/ "./node_modules/date-fns/start_of_year/index.js":
false,

/***/ "./node_modules/date-fns/start_of_yesterday/index.js":
false,

/***/ "./node_modules/date-fns/sub_days/index.js":
false,

/***/ "./node_modules/date-fns/sub_hours/index.js":
false,

/***/ "./node_modules/date-fns/sub_iso_years/index.js":
false,

/***/ "./node_modules/date-fns/sub_milliseconds/index.js":
false,

/***/ "./node_modules/date-fns/sub_minutes/index.js":
false,

/***/ "./node_modules/date-fns/sub_months/index.js":
false,

/***/ "./node_modules/date-fns/sub_quarters/index.js":
false,

/***/ "./node_modules/date-fns/sub_seconds/index.js":
false,

/***/ "./node_modules/date-fns/sub_weeks/index.js":
false,

/***/ "./node_modules/date-fns/sub_years/index.js":
false,

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_OrdersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OrdersList */ "./components/OrdersList.js");
/* harmony import */ var _components_OrdersList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_OrdersList__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/orders.js";




var OrderPage = function OrderPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrdersList__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/orders")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=orders.js.54237a9b0bdebb718267.hot-update.js.map