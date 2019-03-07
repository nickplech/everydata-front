import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { ALL_REASONS_QUERY } from './Modal'

class BulkSender extends Component {
  render() {
    return (
      <Query
        query={ALL_REASONS_QUERY}
        // variables={{ id: 'cjstnpzd3ivu00b79dw8jevg5' }}
      >
        {({ data }) => {
          return (
            <ul>
              {data.reasons.map((reason, i) => (
                <li key={i}>{reason.name}</li>
              ))}
            </ul>
          )
        }}
      </Query>
    )
  }
}

export default BulkSender
