import React, { Component } from 'react'
import styled from 'styled-components'

const DayView = styled.div`
  position: relative;
  display: grid;
  grid-row: 1/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  background-color: transparent;
  /* border: 2px solid rgba(220, 220, 220, 0.4); */
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 25px;
  z-index: -1;
`
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
  <DayView>
    <DayGrid>
      <div className="date">Date: {props.date.toString()}</div>
    </DayGrid>
  </DayView>
)

export default SingleDay
