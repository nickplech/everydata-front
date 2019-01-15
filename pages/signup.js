import Signup from '../components/Signup'
import Signin from '../components/SignIn'
import Footer from '../components/Footer'

import RequestReset from '../components/RequestReset'
import styled from 'styled-components'

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`
const Bottom = styled.div`
  position: relative;

  width: 100%;
  margin-top: 300px;
`
const SignupPage = props => (
  <div>
    <Columns>
      <Signup />
      <Signin />
      <RequestReset />
    </Columns>
    <Bottom>
      <Footer className="bottom" />
    </Bottom>
  </div>
)

export default SignupPage
