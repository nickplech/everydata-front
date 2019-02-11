// import React, { Component } from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// import { Mutation } from 'react-apollo'
// import Router from 'next/router'
// import NProgress from 'nprogress'
// import gql from 'graphql-tag'
// import calcTotalPrice from '../lib/calcTotalPrice'
// import Error from './ErrorMessage'
// import User, { CURRENT_USER_QUERY } from './User'

// const CREATE_ORDER_MUTATION = gql`
//   mutation createOrder($token: String!) {
//     createOrder(token: $token) {
//       id
//       charde
//       total
//       packages {
//         id
//         title
//       }
//     }
//   }
// `

// class TakeMyMoney extends Component {
//   onToken = (res, createOrder) => {
//     NProgress.start()
//     const order = await createOrder({
//       variables: {
//         token: res.id,
//       },
//     }).catch(err => {
//       alert(err.message)
//     })
//     Router.push({
//       pathname: '/order',
//       query: { id: order.data.createOrder.id}
//     })
//   }
//   render() {
//     return (
//       <User>
//         {({ data: { me } }) => (
//           <Mutation
//             mutation={CREATE_ORDER_MUTATION}
//             refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//           >
//             {createOrder => (
//               <StripeCheckout
//                 amount={2999}
//                 name="Perfect Day Reminders"
//                 // description={`Subscribing to ${me.package}`}
//                 email={me.email}
//                 currency="USD"
//                 stripeKey="pk_test_phxfXJjORkbsc6QeCDWIEvtJ"
//                 token={res => this.onToken(res, createOrder)}
//               >
//                 {this.props.children}
//               </StripeCheckout>
//             )}
//           </Mutation>
//         )}
//       </User>
//     )
//   }
// }

// export default TakeMyMoney
