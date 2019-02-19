import PleaseSignIn from '../components/PleaseSignIn'
import TabParent from '../components/TabParent'

const Settings = props => (
  <div>
    <PleaseSignIn>
      <TabParent id={props.query.id} />
    </PleaseSignIn>
  </div>
)

export default Settings
