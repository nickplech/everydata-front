import DoDisplay from '../components/DoDisplay'
import Scheduler from './schedule'

const Home = props => (
  <DoDisplay>
    <Scheduler id={props.query.id} />
  </DoDisplay>
)

export default Home
