import PleaseSignIn from '../components/PleaseSignIn'
import UpdateClient from '../components/UpdateClient'

const AddClient = props => (
  <div>
    <PleaseSignIn>
      <UpdateClient id={props.query.id} />
    </PleaseSignIn>
  </div>
)

export default AddClient
