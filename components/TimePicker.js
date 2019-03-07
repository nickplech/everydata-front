import React from 'react'

import styled from 'styled-components'

const StyledPicka = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 130px;
  width: 130px;
  bottom: 20px;
  left: 300px;
  background: rgba(200, 200, 200, 1);
`

const Clock = styled.div``

class TimePicker extends React.Component {
  state = {
    time: null,
    displayTimepicker: true,
  }

  handleTimeChange = newTime => {
    this.setState({ time: newTime.formatted })
  }

  render() {
    return (
      <StyledPicka>
        <Clock time={this.state.time} onChange={this.handleTimeChange} />
      </StyledPicka>
    )
  }
}

export default TimePicker
