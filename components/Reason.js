import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  padding: 3px 10px;
  margin: 4px 1px;
  border-width: 2px;
  border-style: solid;
  background: transparent;
  color: white;
  width: 250px;
  text-align: center;
  border-radius: 25px;
  list-style: none;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 0.1);
  }
`

const Reason = ({ reason }) => {
  return (
    <Li style={{ borderColor: `${reason.color}`, color: `${reason.color}` }}>
      {reason.name}
    </Li>
  )
}

export default Reason
