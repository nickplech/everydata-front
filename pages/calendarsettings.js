import UpdateCalendar from '../components/UpdateCalendar'

const CalendarSettings = props => (
  <div>
    <UpdateCalendar id={props.query.id} />
  </div>
)

export default CalendarSettings
