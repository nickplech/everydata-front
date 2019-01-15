import React, { Component } from 'react'
import Calendar from './Calendar'
import CalendarStats from './CalendarStats'
import styled from 'styled-components'

const CalendarLayout = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(420px, 1fr);
  grid-template-rows: 1fr 250px;
  height: calc(100% - 140px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 125px;
  grid-column-gap: 8px;
  bottom: 0;
  z-index: -1;
`

class Schedule extends Component {
  render() {
    return (
      <CalendarLayout>
        <CalendarStats />

        <Calendar />
      </CalendarLayout>
    )
  }
}

export default Schedule
