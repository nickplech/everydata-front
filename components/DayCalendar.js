import React, { Component } from 'react'
import dateFNS from 'date-fns'
import styled from 'styled-components'
import CalendarDayHour from './CalendarDayHour'

const DayView = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  background-color: transparent;
  /* border: 2px solid rgba(220, 220, 220, 0.4); */
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 25px;
  z-index: -1;
`

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;
  border: none;
  height: 80vh;
  overflow-y: scroll;
  overscroll-behavior: contain;
`

class DayCalendar extends Component {
  render() {
    return (
      <DayView>
        <DayGrid>
          <CalendarDayHour date={this.state.date} />
        </DayGrid>
      </DayView>
    )
  }
}

export default DayCalendar
