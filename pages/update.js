import UpdateClient from '../components/UpdateClient'

const AddClient = props => (
  <div>
    <UpdateClient id={props.query.id} />
  </div>
)

export default AddClient
