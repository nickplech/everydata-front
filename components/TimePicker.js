import React from 'react'
import TimeKeeper from 'react-timekeeper'
import styled from 'styled-components'

const StyledPicka = styled.div`
  position: absolute;
  margin: 0 15px;
  bottom: 15px;

  .center {
    margin: 0 90px;
  }
`
class TimePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: null,
      displayTimepicker: true,
    }
    this.handleTimeChange = this.handleTimeChange.bind(this)
  }
  handleTimeChange(newTime) {
    this.setState({ time: newTime.formatted })
  }

  render() {
    return (
      <StyledPicka>
        {this.state.displayTimepicker ? (
          <TimeKeeper
            time={this.state.time}
            onChange={this.handleTimeChange}
            config={{
              TIMEPICKER_BACKGROUND: 'white',
              CLOCK_WRAPPER_BACKGROUND: 'rgba(230,230,240,.4)',
              CLOCK_WRAPPER_MERIDIEM_COLOR: '#898989',
              CLOCK_WRAPPER_MERIDIEM_BACKGROUND_COLOR_SELECTED:
                'rgba(100,100,240,1)',
              CLOCK_WRAPPER_MERIDIEM_TEXT_COLOR_SELECTED: 'white',
              CLOCK_HAND_ARM: 'rgba(100,100,240,1)',
              CLOCK_HAND_CIRCLE_BACKGROUND: 'rgba(100,100,240,1)',
              CLOCK_NUMBER_COLOR: '#999999',
              TIME_SELECTED_COLOR: 'rgba(100,100,240,1)',
            }}
            switchToMinuteOnHourSelect={true}
          />
        ) : (
          false
        )}
      </StyledPicka>
    )
  }
}

export default TimePicker
