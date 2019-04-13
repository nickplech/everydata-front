import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import RemoveFromCart from './RemoveFromCart'
import DeleteAppointment from './DeleteAppointment'

const AppointmentBox = styled.div`
  border: none;
  border-radius: 10px;
  height: auto;
  width: 150px;
  font-size: 12px;
  padding: 6px 0 0 0;
  cursor: pointer;
  &:hover {
    background: rgba(100, 100, 230, 0.2);
  }
  p {
    display: block;
    margin: 0;
    font-size: 12px;
    line-height: 10px;
    padding-bottom: 12px;
  }
`

const Appointment = ({ appointment }) => {
  if (!appointment)
    return (
      <AppointmentBox>
        <p>This client has been deleted</p>
        <RemoveFromCart id={cartItem.id} />
      </AppointmentBox>
    )
  return (
    <AppointmentBox>
      {/* <Link
        href={{
          pathname: '/client',
          query: { id: appointment.id },
        }}
      /> */}
      <p>
        {appointment.client.firstName} {appointment.client.lastName}
      </p>
      <p>{appointment.time}</p>
      {/* <DeleteAppointment id={appointment.id} /> */}
    </AppointmentBox>
  )
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
}

export default Appointment
