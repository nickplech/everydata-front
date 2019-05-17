import SignInSwitch from '../components/SignInSwitch'
import InboxComponent from '../components/InboxComponent'

const SignupPage = props => (
  <SignInSwitch>
    <InboxComponent id={props.query.id} />
  </SignInSwitch>
)

export default SignupPage
