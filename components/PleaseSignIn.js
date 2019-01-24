import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import SignIn from './SignIn'
import styled from 'styled-components'

const Paragraph = styled.p`
  padding-left: 20px;
`
const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <>
            <Paragraph>
              You have either been logged out due to innactivity or have ended
              your session. Please Sign In to continue!
            </Paragraph>
            <SignIn />
          </>
        )
      }
      return props.children
    }}
  </Query>
)

export default PleaseSignIn
