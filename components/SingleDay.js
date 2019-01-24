import React, { Component } from 'react'
import styled from 'styled-components'

import moment from 'moment'

const DayView = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  background-color: white;
  /* border: 2px solid rgba(220, 220, 220, 0.4); */
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 0 25px 25px 0;
  border-left: none;
  z-index: -1;

  .parent {
    display: flex;
    flex-flow: column;
    position: absolute;
    right: 0px;

    align-items: flex-end;
    border-radius: 0px 20px 0 0;
    text-align: center;
    padding-right: 20px;
    margin-top: 1px;
    height: 60px;
    width: 100%;
    background: rgba(100, 100, 240, 1);
  }
  .date {
    display: flex;
    text-transform: uppercase;
    margin: 0;
    color: rgba(230, 230, 230, 0.8);
    font-size: 14px;
  }
  .sideDate {
    display: flex;
    color: white;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    line-height: 26px;
    padding-top: 10px;
  }
`
const DayGrid = styled.div`
  display: grid;
  position: relative;

  grid-template-columns: 60px 1fr;
  position: absolute;
  grid-auto-rows: 30px;
  border-radius: 0px 0 25px 0;
  grid-gap: 1px;
  width: 80%;
  right: 0px;

  margin-top: 61px;
  height: 75vh;
  overflow-y: scroll;
  overscroll-behavior: contain;
  .timeCell {
    display: grid;
    grid-column: 1/3;
    margin-top: 2px;
    padding-left: 5px;
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
  /* .number {
    grid-column: 1/3;
    height: 100%;
    background: lightblue;
    margin-top: 2px;
    border-bottom: none;
  } */
`

const DUMMY_DATA = [
  {
    time: 8,
    am: true,
    q2: 815,
    q3: 830,
    q4: 845,
  },

  {
    time: 9,
    am: true,
    q2: 915,
    q3: 930,
    q4: 945,
  },

  {
    time: 10,
    am: true,
    q2: 1015,
    q3: 1030,
    q4: 1045,
  },
  {
    time: 11,
    am: true,
    q2: 1115,
    q3: 1130,
    q4: 1145,
  },

  {
    time: 12,
    am: false,
    pm: true,
    q2: 1215,
    q3: 1230,
    q4: 1245,
  },

  {
    time: 1,
    am: false,
    pm: true,
    q2: 115,
    q3: 130,
    q4: 145,
  },
  {
    time: 2,
    am: false,
    pm: true,
    q2: 215,
    q3: 230,
    q4: 245,
  },
  {
    time: 3,
    am: false,
    pm: true,
    q2: 315,
    q3: 330,
    q4: 345,
  },
  {
    time: 4,
    am: false,
    pm: true,
    q2: 415,
    q3: 430,
    q4: 445,
  },
  {
    time: 5,
    am: false,
    pm: true,
    q2: 515,
    q3: 530,
    q4: 545,
  },
  {
    time: 6,
    am: false,
    pm: true,
    q2: 615,
    q3: 630,
    q4: 645,
  },
  {
    time: 7,
    am: false,
    pm: true,
    q2: 715,
    q3: 730,
    q4: 745,
  },
  {
    time: 8,
    am: false,
    pm: true,
    q2: 815,
    q3: 830,
    q4: 845,
  },
  {
    time: 9,
    am: false,
    pm: true,
    q2: 915,
    q3: 930,
    q4: 945,
  },
]

const SingleDay = props => (
  <DayView>
    <div className="parent">
      <div className="sideDate">
        {moment(props.date.toString()).format('MMMM D, YYYY')}
      </div>
      <div className="date">{moment(props.date.toString()).format('dddd')}</div>
    </div>

    <DayGrid>
      {DUMMY_DATA.map((timeblock, index) => {
        return (
          <>
            {' '}
            <div
              key={index}
              className="timeCell number"
              value={timeblock.time}
            />
            <div className="lower" value={timeblock.q2} key={timeblock.q2} />
            <div className="lower" value={timeblock.q3} key={timeblock.q3} />
            <div className="lower" value={timeblock.q4} key={timeblock.q4} />
          </>
        )
      })}
    </DayGrid>
  </DayView>
)

export default SingleDay
