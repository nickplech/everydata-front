import React from 'react'
import styled from 'styled-components'
import DeleteReason from './DeleteReason'

const Div = styled.div`
  padding: 3px 10px;
  margin: 4px 5px;
  border-width: 2px;
  border-style: solid;
  background: transparent;
  color: white;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
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
    <>
      <Div
        style={{
          background: `${reason.color}`,
          color: reason.color === '#F8F8FF' && 'black',
          borderColor: reason.color === '#F8F8FF' && 'lightgrey',
        }}
      >
        {reason.name}
        <DeleteReason color={reason.color} id={reason.id} name={reason.name} />
      </Div>
    </>
  )
}

export default Reason
