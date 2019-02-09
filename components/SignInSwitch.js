import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import Signup from '../components/Signup'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'

import styled from 'styled-components'

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
  grid-gap: 20px;
  justify-content: center;
  margin-top: 50px;
`

const Bottom = styled.div`
  position: relative;

  width: 100%;
  margin-top: 300px;
`

const DoDisplay = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me) {
        return (
          <>
            <Columns>
              <SignIn /> <Signup />
            </Columns>
            <Bottom>
              <Footer className="bottom" />
            </Bottom>
          </>
        )
      }
      return props.children
    }}
  </Query>
)

export default DoDisplay
