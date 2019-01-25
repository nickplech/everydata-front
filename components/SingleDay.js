import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Link from 'next/link'
import moment from 'moment'

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

const DATA = [
  {
    time: 6,
    am: true,
    q2: 615,
    q3: 630,
    q4: 645,

    display: '6 am',
  },
  {
    time: 7,
    am: true,
    q2: 715,
    q3: 730,
    q4: 745,

    display: '7 am',
  },
  {
    time: 8,
    am: true,
    q2: 815,
    q3: 830,
    q4: 845,

    display: '8 am',
  },

  {
    time: 9,
    am: true,
    q2: 915,
    q3: 930,
    q4: 945,

    display: '9 am',
  },

  {
    time: 10,
    am: true,
    q2: 1015,
    q3: 1030,
    q4: 1045,
    display: '10 am',
  },
  {
    time: 11,
    am: true,
    q2: 1115,
    q3: 1130,
    q4: 1145,
    display: '11 am',
  },

  {
    time: 12,
    am: false,
    pm: true,
    q2: 1215,
    q3: 1230,
    q4: 1245,
    display: '12 pm',
  },

  {
    time: 1,
    am: false,
    pm: true,
    q2: 115,
    q3: 130,
    q4: 145,

    display: '1 pm',
  },
  {
    time: 2,
    am: false,
    pm: true,
    q2: 215,
    q3: 230,
    q4: 245,

    display: '2 pm',
  },
  {
    time: 3,
    am: false,
    pm: true,
    q2: 315,
    q3: 330,
    q4: 345,

    display: '3 pm',
  },
  {
    time: 4,
    am: false,
    pm: true,
    q2: 415,
    q3: 430,
    q4: 445,

    display: '4 pm',
  },
  {
    time: 5,
    am: false,
    pm: true,
    q2: 515,
    q3: 530,
    q4: 545,

    display: '5 pm',
  },
  {
    time: 6,
    am: false,
    pm: true,
    q2: 615,
    q3: 630,
    q4: 645,

    display: '6 pm',
  },
  {
    time: 7,
    am: false,
    pm: true,
    q2: 715,
    q3: 730,
    q4: 745,

    display: '7 pm',
  },
  {
    time: 8,
    am: false,
    pm: true,
    q2: 815,
    q3: 830,
    q4: 845,

    display: '8 pm',
  },
  {
    time: 9,
    am: false,
    pm: true,
    q2: 915,
    q3: 930,
    q4: 945,

    display: '9 pm',
  },
]

const SingleDay = props => (
  <DayView>
    <Link
      href={{
        pathname: 'calendarsettings',
        // query: { id: this.props.id },
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
    <div className="parent">
      <div className="sideDate">
        {moment(props.date.toString()).format('MMMM D, YYYY')}
      </div>
      <div className="date">{moment(props.date.toString()).format('dddd')}</div>
    </div>

    <DayGrid>
      {DATA.map((timeblock, index) => {
        return (
          <>
            <div key={index} className="timeCell number" value={timeblock.time}>
              {timeblock.display}
            </div>
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
