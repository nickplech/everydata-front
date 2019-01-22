import React, { Component } from 'react'
import styled from 'styled-components'

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;
  border: none;
  height: 80vh;
  overflow-y: scroll;
  overscroll-behavior: contain;
  .date {
    padding-left: 20px;
    padding-top: 10px;
  }
`

const SingleDay = props => (
  <DayGrid>
    <div className="date">Date: {props.date.toString()}</div>
  </DayGrid>
)

export default SingleDay
