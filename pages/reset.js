import React from 'react'
import Reset from '../components/Reset'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../components/User'
import InboxComponent from '../components/InboxComponent'

const reset = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <>
            <Reset resetToken={props.query.resetToken} />
          </>
        )
      }
      return (
        <div>
          <InboxComponent id={data.me.id} />
        </div>
      )
    }}
  </Query>
)

export default reset
