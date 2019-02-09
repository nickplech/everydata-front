webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/UpdateUserProfile.js":
/*!*****************************************!*\
  !*** ./components/UpdateUserProfile.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { Component } from 'react'
// import { Mutation, Query } from 'react-apollo'
// import Form from './styles/Form'
// import Router from 'next/router'
// import MaskedInput from 'react-text-mask'
// import gql from 'graphql-tag'
// import styled, { ThemeProvider } from 'styled-components'
// import Error from './ErrorMessage'
// import SickButton from './styles/SickButton'
// import User, { CURRENT_USER_QUERY } from './User'
// const Inner = styled.div`
//   max-width: ${props => props.theme.innerWidth};
//   margin: 0 auto;
//   padding: 2rem;
//   .dates {
//     font-family: montserrat, sans-serif;
//     text-transform: uppercase;
//     opacity: 0.5;
//     &:focus {
//       opacity: 1;
//     }
//     &:active {
//       opacity: 1;
//     }
//   }
// `
// // const SINGLE_USER_QUERY = gql`
// //   query SINGLE_USER_QUERY($id: ID!) {
// //     user(where: { id: $id }) {
// //       id
// //       name
// //       businessName
// //       email
// //     }
// //   }
// // `
// const UPDATE_USER_MUTATION = gql`
//   mutation UPDATE_USER_MUTATION(
//     $id: ID!
//     $name: String
//     $businessName: String!
//     $email: String!
//   ) {
//     updateUser(
//       id: $id
//       name: $name
//       businessName: $businessName
//       email: $email
//     ) {
//       id
//       name
//       businessName
//       email
//     }
//   }
// `
// class UpdateUser extends Component {
//   state = { name: '', businessName: '', email: '' }
//   handleChange = e => {
//     const { name, type, value } = e.target
//     const val = type === 'number' ? parseFloat(value) : value
//     this.setState({ [name]: val })
//   }
//   updateUser = async (e, updateUserMutation) => {
//     e.preventDefault()
//     console.log('Updating User!')
//     console.log(this.state)
//     const res = await updateUserMutation({
//       variables: {
//         id: this.props.id,
//         ...this.state,
//       },
//     })
//     Router.push({
//       pathname: '/schedule',
//     })
//   }
//   render() {
//     return (
//       <Inner>
//         <User>
//           <Query
//             query={CURRENT_USER_QUERY}
//             variables={{
//               id: this.props.id,
//             }}
//           >
//             {({ data: { me }, loading }) => {
//               if (loading) return <p>Loading...</p>
//               if (!me) return <p>No User Found for ID {this.props.id}</p>
//               return (
//                 <Mutation
//                   mutation={UPDATE_USER_MUTATION}
//                   variables={this.state}
//                 >
//                   {(updateUser, { loading, error }) => (
//                     <Form onSubmit={e => this.updateUser(e, updateUser)}>
//                       <Error error={error} />
//                       <fieldset disabled={loading} aria-busy={loading}>
//                         <label htmlFor="firstName">
//                           Account Manager's Name
//                           <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             placeholder="Name"
//                             required
//                             defaultValue={me.name}
//                             onChange={this.handleChange}
//                           />
//                         </label>
//                         <label htmlFor="businessName">
//                           Edit Display Name:
//                           <input
//                             type="text"
//                             id="businessName"
//                             name="businessName"
//                             placeholder="Business Display Name"
//                             required
//                             defaultValue={me.businessName}
//                             onChange={this.handleChange}
//                           />
//                         </label>
//                         <label htmlFor="email">
//                           Login/Contact Email Address
//                           <input
//                             type="text"
//                             id="email"
//                             name="email"
//                             placeholder="Email Address"
//                             required
//                             defaultValue={me.email}
//                             onChange={this.handleChange}
//                           />
//                         </label>
//                         <SickButton type="submit">
//                           Sav{loading ? 'ing' : 'e'} Changes
//                         </SickButton>
//                       </fieldset>
//                     </Form>
//                   )}
//                 </Mutation>
//               )
//             }}
//           </Query>
//         </User>
//       </Inner>
//     )
//   }
// }
// export default UpdateUser
// export { UPDATE_USER_MUTATION }

/***/ }),

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-text-mask/dist/reactTextMask.js":
false,

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
/* harmony import */ var _components_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nickplechas/coding/pday-app/pday-front-master/pages/account.js";




var Settings = function Settings(props) {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UpdateUserProfile__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: props.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
//# sourceMappingURL=account.js.04dbfaf12cb389898778.hot-update.js.map