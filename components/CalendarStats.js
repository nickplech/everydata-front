import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import posed from 'react-pose'
import moment from 'moment'
import Calendar from 'react-calendar/dist/entry.nostyle'
import styled from 'styled-components'
import SingleDay from './SingleDay'

// const SINGLE_DAY_MUTATION = gql`
//   mutation SINGLE_DAY_MUTATION($day: DateTime!) {
//     changeDay(day: $day) {
//       date
//     }
//   }
// `
const StatsDisplay = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 1;
  background-color: rgba(220, 220, 220, 0.3);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  width: 100%;
  height: 100%;
  border: 5px solid white;
  border-radius: 25px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  .gear {
    position: relative;
    display: flex;
    left: 215px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .react-calendar {
    width: 355px;
    border-radius: 15px;
    max-width: 100%;
    box-shadow: 1px 1px 1px 1px rgba(20, 20, 20, 0.1);
    max-height: 300px;
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
    height: 54px;
    margin-bottom: 0.5em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-size: 20px;
    background-color: rgba(100, 100, 240, 1);
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
    background-color: rgba(100, 100, 240, 0.1);
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
    background: rgba(100, 100, 240, 1);
    color: white;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: rgba(100, 100, 240, 1);
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
const Flexer = styled.div`
  display: flex;
  flex-flow: column;
`

const Stat = styled.div`
  font-size: 12px;
`

const StyledSub = styled.p`
  margin-top: 0;
  font-size: 14px;
`

const Gear = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
})

class CalendarStats extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <>
        <StatsDisplay>
          <Calendar
            name="date"
            onChange={this.onChange}
            minDetail="decade"
            value={this.state.date}
            calendarType="US"
            returnValue="start"
          />
          <Fragment>
            <Flexer>
              <Link
                href={{
                  pathname: 'calendarsettings',
                  query: { id: this.props.id },
                }}
              >
                <a>
                  <Gear
                    className="gear"
                    src="../static/img/gear.png"
                    alt="edit schedule settings"
                  />
                </a>
              </Link>
              <Stat />
            </Flexer>
          </Fragment>
        </StatsDisplay>
        <SingleDay date={this.state.date} />
      </>
    )
  }
}

export default CalendarStats
