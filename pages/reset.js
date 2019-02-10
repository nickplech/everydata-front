import React from 'react'
import Reset from '../components/Reset'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../components/User'
import Schedule from '../components/Schedule'

const reset = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <>
            <p>Password Reset Token: {props.query.resetToken}</p>
            {/* <p>Please Reset Your Password Below!</p> */}
            <Reset resetToken={props.query.resetToken} />
          </>
        )
      }
      return (
        <div>
          <Schedule id={data.me.id} />
        </div>
      )
    }}
  </Query>
)

export default reset
