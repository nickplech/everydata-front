import PleaseSignIn from '../components/PleaseSignIn'
import Clients from '../components/Clients'

const Settings = props => (
  <div>
    <PleaseSignIn>
      <Clients page={parseFloat(props.query.page) || 1} />
    </PleaseSignIn>
  </div>
)

export default Settings
