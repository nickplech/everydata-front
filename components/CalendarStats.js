import React from 'react'
import dateFns from 'date-fns'
import Calendar from 'react-calendar/dist/entry.nostyle'
import styled from 'styled-components'
import SingleDay from './SingleDay'

const Indexed = styled.div`
  position: relative;
  z-index: 0;
`
const StatsDisplay = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 1;
  background-color: rgba(220, 220, 220, 0.3);

  width: 100%;
  height: 100%;
  border: 5px solid white;

  border-radius: 25px 25px 25px 25px;
  box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.05);

  .react-calendar {
    width: 365px;
    border-radius: 15px;
    max-width: 100%;
    box-shadow: 0px 1px 1px 1px rgba(20, 20, 20, 0.1);
    height: 310px;
    background: white;
    border: 1px solid rgba(20, 20, 20, 0.1);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 60px;
    margin-bottom: 0.5em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-size: 20px;
    background-color: rgba(20, 110, 240, 1);
    border-radius: 15px 15px 0 0;
    color: white;
    &:first-child {
      border-radius: 15px 0 0 0;
    }
    &:last-child {
      border-radius: 0 15px 0 0;
    }
    &:nth-child(2) {
      border-radius: 0;
    }
    &:nth-child(3) {
      border-radius: 0;
    }
    &:nth-child(4) {
      border-radius: 0;
    }
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: rgba(20, 110, 240, 0.1);
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 2em 0;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #969696;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--hasActive {
    background: rgba(20, 110, 240, 1);
    color: white;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: rgba(20, 110, 240, 1);
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: rgba(100, 100, 240, 1);
    color: white;
  }
`

class CalendarStats extends React.Component {
  state = {
    date: dateFns.startOfDay(new Date()),
    today: dateFns.startOfToday(new Date()),
  }

  onChange = date => this.setState({ date })

  // handleClick = () => {
  //   alert(`'New date is: ${this.state.date}'`)
  // }

  handleJumpToToday = today => this.setState({ today })

  render() {
    return (
      <>
        <StatsDisplay>
          <Calendar
            name="date"
            onChange={this.onChange}
            minDetail="decade"
            // onClick={this.handleClick}
            value={this.state.date}
            calendarType="US"
            returnValue="start"
          />
        </StatsDisplay>
        <SingleDay date={this.state.date} />
      </>
    )
  }
}

export default CalendarStats
