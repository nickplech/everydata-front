import Clients from '../components/Clients'
import DoDisplay from '../components/DoDisplay'
import Scheduler from './schedule'

const Home = props => (
  <div>
    <DoDisplay>
      <Scheduler />
    </DoDisplay>
  </div>
)

export default Home
