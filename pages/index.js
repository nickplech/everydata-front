import DoDisplay from '../components/DoDisplay'
import Schedule from '../components/Schedule'

const Home = props => (
  <DoDisplay>
    <Schedule id={props.query.id} />
  </DoDisplay>
)

export default Home
