import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { Mutation } from 'react-apollo'
import { TOGGLE_MODAL_MUTATION } from './Modal'
import { format } from 'date-fns'
import setHours from 'date-fns/set_hours'
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
    height: 60px;
    width: 100%;
    background: rgba(100, 100, 240, 1);
  }
  .gear {
    position: absolute;
    display: flex;
    left: 10px;
    top: 10px;
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
  margin-top: 63px;
  height: 75vh;
  overflow-y: scroll;
  overscroll-behavior: contain;
  .timeCell {
    display: grid;
    grid-column: 1/3;
    padding-left: 15px;
    align-items: center;
    border-bottom: none;
    border-top: 1px solid white;
    border-radius: 20px 0 0 20px;
    background: rgba(100, 100, 240, 0.2);
    color: grey;

    &:hover {
      opacity: 0.5;
    }
  }
  .lower {
    display: grid;
    grid-column: 2/3;
    padding-left: 5px;
    align-items: center;
    border-bottom: none;
    border-top: 1px solid white;
    background: rgba(243, 241, 244, 1);
    color: grey;
    &:hover {
      opacity: 0.5;
    }
  }
  .number {
    display: grid;
    font-size: 12px;
    align-self: center;
    justify-content: flex-start;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`

const TopBlock = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1/3;

  width: 100%;
  height: 100%;
  background: rgba(240, 240, 240, 1);
`

const DATA = [
  {
    time: '7:00 am',
    q2: '7:15 am',
    q3: '7:30 am',
    q4: '7:45 am',
    display: '7 am',
  },
  {
    time: '8:00 am',
    q2: '8:15 am',
    q3: '8:30 am',
    q4: '8:45 am',
    display: '8 am',
  },

  {
    time: '9:00 am',
    q2: '9:15 am',
    q3: '9:30 am',
    q4: '9:45 am',
    display: '9 am',
  },

  {
    time: '10:00 am',
    q2: '10:15 am',
    q3: '10:30 am',
    q4: '10:45 am',
    display: '10 am',
  },
  {
    time: '11:00 am',
    q2: '11:15 am',
    q3: '11:30 am',
    q4: '11:45 am',
    display: '11 am',
  },

  {
    time: '12:00 pm',
    q2: '12:15 pm',
    q3: '12:30 pm',
    q4: '12:45 pm',
    display: '12 pm',
  },

  {
    time: '1:00 pm',
    q2: '1:15 pm',
    q3: '1:30 pm',
    q4: '1:45 pm',
    display: '1 pm',
  },
  {
    time: '2:00 pm',
    q2: '2:15 pm',
    q3: '2:30 pm',
    q4: '2:45 pm',
    display: '2 pm',
  },
  {
    time: '3:00 pm',
    q2: '3:15 pm',
    q3: '3:30 pm',
    q4: '3:45 pm',
    display: '3 pm',
  },
  {
    time: '4:00 pm',
    q2: '4:15 pm',
    q3: '4:30 pm',
    q4: '4:45 pm',
    display: '4 pm',
  },
  {
    time: '5:00 pm',
    q2: '5:15 pm',
    q3: '5:30 pm',
    q4: '5:45 pm',
    display: '5 pm',
  },
  {
    time: '6:00 pm',
    q2: '6:15 pm',
    q3: '6:30 pm',
    q4: '6:45 pm',
    display: '6 pm',
  },
  {
    time: '7:00 pm',
    q2: '7:15 pm',
    q3: '7:30 pm',
    q4: '7:45 pm',
    display: '7 pm',
  },
  {
    time: '8:00 pm',
    q2: '8:15 pm',
    q3: '8:30 pm',
    q4: '8:45 pm',
    display: '8 pm',
  },
  {
    time: '9:00 pm',
    q2: '9:15 pm',
    q3: '9:30 pm',
    q4: '9:45 pm',
    display: '9 pm',
  },
]

const SingleDay = props => (
  <DayView>
    {/* <Link
      href={{
        pathname: 'calendarsettings',
        // query: { id: this.props.id },
      }}
    > */}
    <Gear
      className="gear"
      src="../static/img/gear.png"
      alt="edit schedule settings"
      onClick={props.handleJumpToToday}
    />
    {/* </Link> */}
    <div className="parent">
      <div className="sideDate">{format(props.date, 'MMMM Do, YYYY')}</div>
      <div className="date">{format(props.date, 'dddd')}</div>
    </div>

    <DayGrid>
      <TopBlock />
      {DATA.map(timeblock => {
        return (
          <Mutation mutation={TOGGLE_MODAL_MUTATION}>
            {toggleModal => (
              <>
                <div
                  onDoubleClick={toggleModal}
                  key={timeblock.time}
                  className="timeCell number"
                  value={timeblock.time}
                >
                  {timeblock.display}
                </div>
                <div
                  onDoubleClick={toggleModal}
                  className="lower"
                  value={timeblock.q2}
                  key={timeblock.q2}
                />
                <div
                  onDoubleClick={toggleModal}
                  className="lower"
                  value={timeblock.q3}
                  key={timeblock.q3}
                />
                <div
                  onDoubleClick={toggleModal}
                  className="lower"
                  value={timeblock.q4}
                  key={timeblock.q4}
                />
              </>
            )}
          </Mutation>
        )
      })}
    </DayGrid>
    <Modal value={DATA} />
  </DayView>
)

export default SingleDay
