import TextWindow from '../components/TextWindow'
import PleaseSignIn from '../components/PleaseSignIn'

const Client = props => (
  <PleaseSignIn>
    <TextWindow id={props.query.id} />
  </PleaseSignIn>
)

export default Client
