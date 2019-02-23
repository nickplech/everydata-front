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
