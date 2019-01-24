import React, { Component } from 'react'
import CalendarStats from './CalendarStats'
import styled from 'styled-components'

const CalendarLayout = styled.div`
  display: grid;
  grid-template-columns: 375px minmax(420px, 1fr);
  grid-template-rows: 1fr;
  height: calc(100% - 140px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 125px;
  grid-column-gap: 0px;
  bottom: 0;
  z-index: -1;
`

class Schedule extends Component {
  render() {
    return (
      <CalendarLayout>
        <CalendarStats id={this.props.id} />
      </CalendarLayout>
    )
  }
}

export default Schedule
