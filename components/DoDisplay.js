import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import HomePage from './HomePage'

import styled from 'styled-components'

const NoScroll = styled.div`
  overflow-y: hidden;
`

const DoDisplay = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <NoScroll>
            <HomePage />
          </NoScroll>
        )
      }
      return props.children
    }}
  </Query>
)

export default DoDisplay
