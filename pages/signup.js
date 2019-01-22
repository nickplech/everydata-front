import SingInSwitch from '../components/SignInSwitch'
import LoggedIn from '../components/LoggedIn'

const SignupPage = props => (
  <SingInSwitch>
    <LoggedIn id={props.query.id} />
  </SingInSwitch>
)

export default SignupPage
