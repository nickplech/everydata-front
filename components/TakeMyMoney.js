import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import gql from 'graphql-tag'
// import calcTotalPrice from '../lib/calcTotalPrice'
// import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY } from './User'
import { ORDER_DATA } from '../lib/timeSlots'

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!, $plan: String!) {
    createOrder(token: $token, plan: $plan) {
      id
      plan
      charge
      total
    }
  }
`

class TakeMyMoney extends Component {
  onToken = async (res, createOrder) => {
    NProgress.start()
    const order = await createOrder({
      variables: {
        token: res.id,
        plan: ORDER_DATA.id,
      },
    }).catch(err => {
      alert(err.message)
    })
    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id },
    })
  }
  render() {
    const ORDER_DATA = this.props
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            variables={{
              plan: ORDER_DATA.id,
            }}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={ORDER_DATA.price}
                name="Perfect Day Reminders"
                description={`Subscribing to ${ORDER_DATA.title}`}
                email={me.email}
                currency="USD"
                stripeKey="pk_test_phxfXJjORkbsc6QeCDWIEvtJ"
                token={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    )
  }
}

export default TakeMyMoney
