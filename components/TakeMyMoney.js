import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import gql from 'graphql-tag'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY } from './User'

class TakeMyMoney extends Component {
  onToken = res => {}
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <StripeCheckout
            amount="2999"
            name="Perfect Day Reminders"
            description={`Subscribing to ${me.package}`}
            email={me.email}
            currency="USD"
            token={res => this.onToken(res)}
          >
            {this.props.children}
          </StripeCheckout>
        )}
      </User>
    )
  }
}

export default TakeMyMoney
