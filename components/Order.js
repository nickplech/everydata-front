import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { format } from 'date-fns'
import Head from 'next/head'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'
import OrderStyles from './styles/OrderStyles'

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      price
      createdAt
      user {
        id
      }
      plan
    }
  }
`

class Order extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  render() {
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>
          const order = data.order
          return (
            <OrderStyles data-test="order">
              <Head>
                <title>
                  Perfect Day Reminders - Subscription Management {order.id}
                </title>
              </Head>
              <p>
                <span>Subscription ID:</span>
                <span>{this.props.id}</span>
              </p>
              <p>
                <span>Charge</span>
                <span>{order.charge}</span>
              </p>
              <p>
                <span>Date</span>
                <span>{format(order.createdAt, 'MMMM d, YYYY h:mm a')}</span>
              </p>
              <p>
                <span>Order Total</span>
                <span>{formatMoney(order.price)}</span>
              </p>
              <p>
                <span>Item Count</span>
                <span>1</span>
              </p>
              {/* <div className="items">
                {order.cartPackages.map(package => (
                  <div className="order-item" key={package.id}>
                    <img src={package.image} alt={package.title} />
                    <div className="item-details">
                      <h2>{package.title}</h2>
                      <p>Qty: {package.quantity}</p>
                      <p>{package.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </OrderStyles>
          )
        }}
      </Query>
    )
  }
}

export default Order
export { SINGLE_ORDER_QUERY }
