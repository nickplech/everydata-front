import Signup from '../components/Signup'
import styled from 'styled-components'

const BackGround = styled.div`
  background: rgba(253, 253, 253, 1);
  padding: 15px;
`

const SignupPage = () => (
  <BackGround>
    <Signup />
  </BackGround>
)

export default SignupPage
