import React from 'react'
import styled from 'styled-components'

const Submitted = styled.p`
  color: green;
  text-align: center;
  background: white;
  margin-top: 100px;
  font-size: 2vw;
  padding: 15px 15px;
  border-left: 5px solid green;
`
const welcome = () => {
  return (
    <div>
      <Submitted>
        Welcome to Perfect Day Reminders, please log in to begin your Free Trial
      </Submitted>
    </div>
  )
}

export default welcome
