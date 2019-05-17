import React from 'react'
import styled from 'styled-components'
import { linear } from '@popmotion/easing'

const StyledPricing = styled.div`
  .frame {
    position: relative;
    width: 95%;
    max-width: 800px;
    height: 350px;
    margin: 100px auto;
    border-radius: 2px;
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: lighten(grey, 47%);
    color: #333;
    font-family: 'Montserrat', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: grid;
    grid-gap: 1px;
    grid-template-rows: 250px 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .bars {
    height: 85%;
    width: 95%;
    background: white;
    box-shadow: 3px 3px 5px rgba(grey, 0.2);
    grid-column: 1 / -1;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .stat-info {
    font-size: 1.4rem;
    margin-bottom: 0rem;
    display: flex;
    justify-content: space-between;
  }

  .stat-bar {
    height: 12px;
    width: 100%;
    background: #e0e0e0;
    border-radius: 0.5rem;
    span {
      display: block;
      height: 100%;
      width: 0;
      background: #ff773d;
      border-radius: 0.5rem;
      transition: all 0.3s;
    }
  }

  .card {
    background: white;
    height: 95%;
    width: 88%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:first-child {
      margin-left: 1rem;
    }

    &:nth-child(3) {
      margin-right: 1rem;
    }

    & > * {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      transform: scale(1.04);
      .top {
        background: rgba(20, 80, 220, 1);
      }
      .value {
        color: rgba(20, 80, 220, 1);
      }
    }
    .card-1:hover ~ .bars > .stat > .bar-1 > span {
      width: 10%;
    }

    .card-1:hover ~ .bars > .stat > .bar-2 > span {
      width: 10%;
    }

    .card-1:hover ~ .bars > .stat > .bar-3 > span {
      width: 10%;
    }

    .card-2:hover ~ .bars > .stat > .bar-1 > span {
      width: 30%;
    }

    .card-2:hover ~ .bars > .stat > .bar-2 > span {
      width: 60%;
    }

    .card-2:hover ~ .bars > .stat > .bar-3 > span {
      width: 40%;
    }

    .card-3:hover ~ .bars > .stat > .bar-1 > span {
      width: 100%;
    }

    .card-3:hover ~ .bars > .stat > .bar-2 > span {
      width: 100%;
    }

    .card-3:hover ~ .bars > .stat > .bar-3 > span {
      width: 100%;
    }

    .top {
      height: 25%;
      width: 100%;
      font-size: 20px;
      background: rgba(20, 110, 240, 1);
      color: white;
      font-weight: 600;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info {
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > * {
        text-align: center;
      }
    }

    .cost {
      margin-bottom: 0.8rem;
    }

    .value {
      font-weight: 600;
      font-size: 2.3rem;
    }

    .month {
      font-size: 1.5rem;
    }

    .lines {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .line {
      margin-bottom: 3px;
      height: 4px;
      background: #e0e0e0;
    }
  }
`

const LINES = [
  {
    width: '100px',
  },
  { width: '70px' },
  { width: '110px' },
  { width: '90px' },
]
const PricingDisplay = () => {
  return (
    <StyledPricing>
      <div className="frame">
        <div className="card card-1">
          <div className="top">100k Leads</div>
          <div className="info">
            <div className="cost">
              <div className="value">$400</div>
            </div>
            <div className="lines">
              {LINES.map((line, i) => {
                return (
                  <div className="line" key={i} style={{ width: line.width }} />
                )
              })}
            </div>
          </div>
        </div>
        <div className="card card-2">
          <div className="top">250k Leads</div>
          <div className="info">
            <div className="cost">
              <div className="value">$800</div>
            </div>
            <div className="lines">
              {LINES.map((line, i) => {
                return (
                  <div className="line" key={i} style={{ width: line.width }} />
                )
              })}
            </div>
          </div>
        </div>
        <div className="card card-3">
          <div className="top">500k Leads</div>
          <div className="info">
            <div className="cost">
              <div className="value">$1200</div>
            </div>
            <div className="lines">
              {LINES.map((line, i) => {
                return (
                  <div className="line" key={i} style={{ width: line.width }} />
                )
              })}
            </div>
          </div>
        </div>

        <div className="bars">
          <div className="stat-info">
            <div className="stat-min">Total Leads</div>
            {/* <div className="stat-max">100 Users</div> */}
          </div>
          <div className="stat-bar bar-1">
            <span />
          </div>
        </div>
      </div>
    </StyledPricing>
  )
}

export default PricingDisplay
