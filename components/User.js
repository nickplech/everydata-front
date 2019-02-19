import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      businessName
      permissions
      orders {
        id
      }
      subscription {
        id
        quantity
        plan
      }
      appointments {
        id
      }
      cart {
        id
        quantity
        client {
          id
          firstName
          lastName
        }
      }
    }
  }
`

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
)

User.propTypes = {
  children: PropTypes.func.isRequired,
}

export default User
export { CURRENT_USER_QUERY }
