import React, { Component, Fragment } from 'react'

import { Query } from 'react-apollo'
import Link from 'next/link'
import { format } from 'date-fns'

import posed from 'react-pose'
import styled from 'styled-components'

const StatsDisplay = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 1;
  background-color: rgba(220, 220, 220, 0.3);
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  border: 5px solid white;
  border-radius: 25px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  .gear {
    position: relative;
    display: flex;
    left: 215px;

    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`
const Flexer = styled.div`
  display: flex;
  flex-flow: column;
`

const Stat = styled.div`
  font-size: 12px;
`

const StyledTitle = styled.h2`
  margin: 0;
  display: flex;
  font-size: 19px;
  line-height: 28px;
  color: rgba(100, 120, 240, 1);
`
const StyledSub = styled.p`
  margin-top: 0;
  font-size: 14px;
`

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

class CalendarStats extends React.Component {
  render() {
    let today = new Date()
    return (
      <StatsDisplay>
        <Fragment>
          <Flexer>
            <Link
              href={{
                pathname: 'calendarsettings',
                query: { id: this.props.id },
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
            <StyledTitle>
              {format(today, 'MMMM d, YYYY', {
                awareOfUnicodeTokens: true,
              })}
            </StyledTitle>
            <StyledSub>yo</StyledSub>
            <Stat />
          </Flexer>
        </Fragment>
      </StatsDisplay>
    )
  }
}

export default CalendarStats
