import React from 'react'
import posed from 'react-pose'
import { tween } from 'popmotion'
import { interpolate } from 'flubber'
import styled from 'styled-components'

const StyledBody = styled.div`
  height: 400px;
  padding-bottom: 100px;
  padding-top: 50px;
  flex-flow: column;
  justify-content: stretch;
  align-items: center;
  display: flex;
  background: #f4f3fa;

  svg {
    margin-left: 20px;
  }
  .lead {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.2rem;
    line-height: 3.2rem;
    max-width: 900px;
    text-align: center;
    font-weight: 200;
    margin-top: 0;
  }
  button {
    display: flex;
    border: none;
    text-align: center;
    width: auto;
    overflow: visible;
    background: transparent;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    background: transparent;
    outline: none;
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    color: rgb(70, 200, 120);
    font-size: 3.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
  }
`

const paths = {
  bell:
    'M50.74,135.05a101.47,101.47,0,0,1,68.16-95.89,33.82,33.82,0,1,1,66.8,0,101.47,101.47,0,0,1,68,95.89V236.53l50.74,33.82v16.91H0V270.35l50.74-33.82ZM186,304.18a33.82,33.82,0,0,1-67.65,0Z',
  plane:
    'M187.57,0C291.16,0,375.13,67.75,375.13,151.32c0,33.35-13.41,64.17-36.07,89.17l34.85,86.65L226.21,297.46c-15.43.42-32.72,4.16-50,4.61-2,.05-3.92.08-5.86.08C69.88,302.15,0,233.3,0,151.32,0,67.75,84,0,187.57,0',
  heart:
    'M313.31,0a34.81,34.81,0,0,1,34.81,34.81V243.69a34.81,34.81,0,0,1-34.81,34.81H34.81A34.81,34.81,0,0,1,0,243.69V34.81A34.91,34.91,0,0,1,34.81,0ZM237.25,158.4l110.88,85.29V208.88L259,141l89.12-71.37V34.81L174.06,174.06,0,34.81V69.63L89.12,141,0,208.88v34.81L110.88,158.4l63.18,50.48Z',
}
const text = {
  first: 'Refreshingly Simple Text Message Appointment Reminders',
  second: 'Calendar',
  third: 'Perfect Collection of business tools to help you grow',
}

const pathIds = Object.keys(paths)

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
  }).pipe(interpolate(from, to))

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition,
    }

    return config
  }, {}),
)

const NextButton = posed.button({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.9 },
})

class IconMorph extends React.Component {
  state = {
    pathIndex: 0,
    buttonText: text.first,
  }

  gotoNext = () => {
    const { pathIndex } = this.state
    const nextIndex = pathIndex + 1
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex,
    })
  }

  render() {
    return (
      <StyledBody>
        <svg
          width="60"
          height="60"
          viewBox="0 0 375.13 327.15"
          fill="rgba(70, 200, 150,.9)"
        >
          <Icon pose={pathIds[this.state.pathIndex]} />
        </svg>
        <NextButton onClick={this.gotoNext}>{this.state.buttonText}</NextButton>
        <p className="lead">
          Take control of your business' schedule and communicate with your
          clients in the most <b>relevant</b> and <b>effective</b> way possible.
        </p>
      </StyledBody>
    )
  }
}

export default IconMorph
