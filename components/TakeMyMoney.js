import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import gql from 'graphql-tag'
// import calcTotalPrice from '../lib/calcTotalPrice'
// import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY } from './User'

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!, $plan: String!, $price: Int!) {
    createOrder(token: $token, plan: $plan, price: $price) {
      id
      plan
      price
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
        plan: this.props.plan,
        price: this.props.price,
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
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            variables={{
              plan: this.props.plan,
              price: this.props.price,
            }}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={this.props.price}
                name="Perfect Day Reminders"
                description={`Subscribing to ${this.props.title}`}
                email={me.email}
                image="../static/img/perfectdayreminders.png"
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
