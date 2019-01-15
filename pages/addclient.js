import CreateClient from '../components/CreateClient'
import PleaseSignIn from '../components/PleaseSignIn'

const AddClient = props => (
  <div>
    <PleaseSignIn>
      <CreateClient />
    </PleaseSignIn>
  </div>
)

export default AddClient
