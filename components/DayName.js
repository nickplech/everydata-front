import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;

  .daynum {
    display: flex;
    color: lightslategray;
    margin: 3px;

    width: 25px;
    height: 20px;
    background: transparent;
  }
`

const DayName = props => {
  return (
    <StyledDiv>
      <p className="daynum">{props.weekDay}</p>
    </StyledDiv>
  )
}

export default DayName
