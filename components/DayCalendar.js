import React, { Component } from 'react'
import dateFNS from 'date-fns'
import styled from 'styled-components'
import FilterableProductTable from './CalendarDayHour'

const PRODUCTS = [
  {
    id: '6q1',
    q2: '30',
    q3: '45',
    name: '15',
    category: '6 am',
    booked: false,
  },
  {
    id: '7q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '7 am',
  },
  {
    id: '8q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '8 am',
  },
  {
    id: '9q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '9 am',
  },
  {
    id: '10q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '10 am',
  },
  {
    id: '11q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '11 am',
  },
  {
    id: '12q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '12 pm',
  },
  {
    id: '1q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '1 pm',
  },
  {
    id: '2q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '2 pm',
  },
  {
    id: '3q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '3 pm',
  },
  {
    id: '4q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '4 pm',
  },
  {
    id: '5q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '5 pm',
  },
  {
    id: '62q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '6 pm',
  },
  {
    id: '72q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '7 pm',
  },
  {
    id: '82q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '8 pm',
  },
  {
    id: '92q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '9 pm',
  },
  {
    id: '102q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '10 pm',
  },
  {
    id: '112q1',
    q2: '30',
    q3: '45',
    name: '15',
    booked: false,
    category: '11 pm',
  },
]
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
          <FilterableProductTable
            props={this.props.value}
            products={PRODUCTS}
          />
        </DayGrid>
      </DayView>
    )
  }
}

export default DayCalendar
