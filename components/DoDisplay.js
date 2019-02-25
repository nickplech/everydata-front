import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import HomePage from './HomePage'
import Chat from '../components/Chat'

const DoDisplay = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <div>
            <HomePage />
            <Chat />
          </div>
        )
      }
      return props.children
    }}
  </Query>
)

export default DoDisplay
