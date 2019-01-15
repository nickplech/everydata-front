import TextWindow from '../components/TextWindow'
import PleaseSignIn from '../components/PleaseSignIn'

const Client = props => (
  <div>
    <PleaseSignIn>
      <TextWindow id={props.query.id} />
    </PleaseSignIn>
  </div>
)

export default Client
