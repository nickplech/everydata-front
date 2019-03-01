import SignInSwitch from '../components/SignInSwitch'
import Schedule from '../components/Schedule'

const SignupPage = props => (
  <SignInSwitch>
    <Schedule id={props.query.id} />
  </SignInSwitch>
)

export default SignupPage
