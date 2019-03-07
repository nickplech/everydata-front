import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'
import { format, addWeeks, eachDay, subDays } from 'date-fns'

import ActualDay from './ActualDay'

const Flexer = styled.div`
  display: flex;
  flex-flow: column;
  .center {
    margin: 0 20px;
  }
`

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
`

const RemIcon = styled.div`
  display: flex;
  padding: 20px;
  background: blueviolet;
  border-radius: 50%;
`
const DateSelector = styled.div`
  border-radius: 8px 8px 0 0;
  position: absolute;
  margin-left: 20px;
  margin-top: 100px;
  display: grid;
  width: 245px;
  height: 132px;
  grid-template-columns: 1;
  grid-template-rows: 35px 30px 1fr;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  background: white;
  align-self: flex-start;

  .month {
    width: 100%;
    display: grid;
    height: 35px;
    background: rgba(20, 110, 220, 1);
    grid-row: 1;
    /* grid-column: 1/8; */
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
class DaySelector extends Component {
  state = {
    today: new Date(),
  }

  render() {
    const { today } = this.state
    const twoWeeks = addWeeks(today, 2)
    const result = eachDay(today, twoWeeks)
    const fixedArray = result.splice(-1, 1)

    const oneWeek = addWeeks(today, 1)
    const dayNameResult = eachDay(today, oneWeek)
    const fixedOneWeek = dayNameResult.splice(-1, 1)

    return (
      <User>
        {({ data: { me } }) => (
          <Flexer>
            <DateSelector>
              <div className="month">{format(today, 'MMMM')}</div>

              <StyledDiv>
                {dayNameResult.map(weekDayName => {
                  return <p key={weekDayName}> {format(weekDayName, 'dd')}</p>
                })}
              </StyledDiv>

              <Day>
                {result.map((day, i, arr) => {
                  return <ActualDay key={day} date={format(day, 'D')} />
                })}
              </Day>
            </DateSelector>
          </Flexer>
        )}
      </User>
    )
  }
}

export default DaySelector
