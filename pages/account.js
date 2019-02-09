import PleaseSignIn from '../components/PleaseSignIn'
import UpdateUserProfile from '../components/UpdateUserProfile'
import TabParent from '../components/TabParent'

const Settings = props => (
  <div>
    <PleaseSignIn>
      <TabParent id={props.query.id} />
    </PleaseSignIn>
  </div>
)

export default Settings
