import React from 'react'
import styled from 'styled-components'

const Days = styled.div`
  display: flex;
  margin: 2px;
  width: 12.25%;
  height: 40%;
  color: rgba(20, 110, 240, 0.8);
  grid-row: 3;
  background: lightskyblue;
  align-content: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: lavender;
  }
  &:active {
    background: lavender;
  }
`

const ActualDay = props => <Days>{props.date}</Days>
export default ActualDay
