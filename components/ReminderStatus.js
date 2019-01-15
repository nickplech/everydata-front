import React, { Component } from 'react'
import styled from 'styled-components'

const Success = styled.div`
  display: flex;
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: lightgreen;
  right: 10px;
  top: 20px;
`

class ReminderStatus extends Component {
  state = {
    reminderStatus: '',
  }
  render() {
    return <Success remstatus={client.reminderStatus} color="success" />
  }
}

export default ReminderStatus
