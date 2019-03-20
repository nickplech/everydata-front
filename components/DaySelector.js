import React from 'react'
import styled from 'styled-components'
import { format, addWeeks, eachDay } from 'date-fns'

const DateSelector = styled.div`
  grid-row: 2;
  margin: 0 20px;
  border-radius: 8px 8px 8px 8px;
  position: relative;
  display: grid;
  width: 245px;
  height: 100%;
  grid-template-columns: 1;
  grid-template-rows: 35px 30px 1fr;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  background: white;

  .month {
    width: 100%;
    display: grid;
    height: 35px;
    background: rgba(20, 110, 220, 1);
    grid-row: 1;
    border-radius: 8px 8px 0 0;
    align-content: center;
    align-items: center;
    justify-content: center;
    color: white;
  }
`

const Day = styled.div`
  display: flex;
  grid-row: 3;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
`
const Days = styled.input`
  display: flex;
  margin: 2px;
  width: 12.25%;
  height: 40%;
  color: white;
  grid-row: 3;
  background: #3d5866;
  align-content: center;
  text-align: center;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  transition: 0.2s;

  border: none;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:first-child {
    background: rgba(20, 110, 240, 0.8);
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background: lavender;
  }
`
const StyledDiv = styled.div`
  display: flex;
  color: lightslategray;
  margin: 2px 1px;
  grid-row: 2;
  justify-content: space-around;
  background: transparent;

  p {
    margin: 0 0px;
  }
`
const today = new Date()
const twoWeeks = addWeeks(today, 2)
const result = eachDay(today, twoWeeks)
const fixedArray = result.splice(-1, 1)
const oneWeek = addWeeks(today, 1)
const dayNameResult = eachDay(today, oneWeek)
const fixedOneWeek = dayNameResult.splice(-1, 1)

const DaySelector = props => (
  <DateSelector>
    <div className="month">{format(today, 'MMMM')}</div>

    <StyledDiv>
      {dayNameResult.map(weekDayName => {
        return <p key={weekDayName}> {format(weekDayName, 'dd')}</p>
      })}
    </StyledDiv>

    <Day>
      {result.map(day => {
        return (
          <Days
            key={day}
            readOnly
            name="date"
            onChange={props.saveToState}
            value={format(day, 'D')}
          />
        )
      })}
    </Day>
  </DateSelector>
)

export default DaySelector
