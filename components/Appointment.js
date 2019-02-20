import React, { Component } from 'react'
import styled from 'styled-components'

const AppointmentBox = styled.div`
border: none;
border-radius: 10px;
height: auto;
width: 150px;
/* background: ${props => props} */
`

class Appointment extends Component {
  render() {
    return <AppointmentBox />
  }
}

export default Appointment
