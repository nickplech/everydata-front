import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { Mutation } from 'react-apollo'
import { TOGGLE_MODAL_MUTATION } from './Modal'
import { format } from 'date-fns'
import { Data_15, Data_20 } from '../lib/timeSlots'
import Modal from './Modal'

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
const TopBlock = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1/3;

  width: 100%;
  height: 100%;
  background: rgba(240, 240, 240, 1);
`
const DayView = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 20px 20px 25px 25px;
  z-index: -1;

  .parent {
    display: flex;
    flex-flow: column;
    position: absolute;
    right: 0px;
    align-items: flex-end;
    border-radius: 15px 15px 0 0;
    text-align: center;
    padding-right: 20px;
    margin-top: 1px;
    height: 65px;
    width: 100%;
    background: rgba(20, 110, 240, 1);
  }
  .gear {
    position: absolute;
    display: flex;
    left: 30px;
    top: 22px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    z-index: 50;
  }
  .date {
    display: flex;
    text-transform: uppercase;
    margin: 0;
    color: rgba(230, 230, 230, 0.8);
    font-size: 14px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .sideDate {
    display: flex;
    color: white;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    line-height: 26px;
    padding-top: 10px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`
const DayGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 60px 1fr;
  position: absolute;
  grid-auto-rows: 25px;
  border-radius: 0px 0 25px 0;
  grid-gap: 2px;
  width: 100%;
  right: 0px;
  margin-top: 67px;
  height: 75vh;
  overflow-y: scroll;
  overscroll-behavior: contain;
`
const TimeCell = styled.div`
  display: grid;
  border-left: none;
  grid-column: 2/3;
  padding-left: 5px;
  align-items: center;
  border-bottom: none;
  border-top: 1px solid white;
  background: rgba(243, 241, 244, 1);
  cursor: pointer;

  &:nth-child(4n + 2) {
    display: grid;
    grid-column: 1/3;
    align-items: center;
    border-bottom: none;
    border-top: 1px solid white;
    border-radius: 20px 0 0 20px;
    background: rgba(20, 110, 240, 0.65);
    color: grey;
  }
  &:hover {
    opacity: 0.5;
  }
  .number {
    display: grid;
    font-size: 12px;
    align-self: center;
    justify-content: flex-start;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`
const StyledInput = styled.input`
  display: grid;
  grid-column: 1;
  text-align: left;
  font-weight: 800;
  color: rgba(243, 241, 244, 1);
  background: transparent;
  border: none;
  opacity: 1;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

class SingleDay extends Component {
  state = { selectedTime: '' }

  update = e => {
    this.setState({ selectedTime: e.target.value })
  }
  render() {
    const date = this.props.date
    const time = this.state.selectedTime
    return (
      <DayView>
        <div className="parent">
          <div className="sideDate">{format(date, 'MMMM Do, YYYY')}</div>
          <div className="date">{format(date, 'dddd')}</div>
        </div>
        <DayGrid>
          <TopBlock />
          {Data_15.map((timeblock, i) => {
            return (
              <Mutation key={i} mutation={TOGGLE_MODAL_MUTATION}>
                {toggleModal => (
                  <TimeCell>
                    <StyledInput
                      onDoubleClick={toggleModal}
                      key={timeblock.time}
                      className="number"
                      value={timeblock.time}
                      onClick={this.update}
                      readOnly
                    />
                  </TimeCell>
                )}
              </Mutation>
            )
          })}
        </DayGrid>
        <Modal date={date} time={time} />
      </DayView>
    )
  }
}

export default SingleDay
