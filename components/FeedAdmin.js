import React, { Component } from 'react'

import styled from 'styled-components'
import SingleDay from './SingleDay'
import UpdateFeed from './UpdateFeed'

const CalendarLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(250px, 1fr) 300px;
  height: calc(100% - 140px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 125px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  bottom: 0;
  z-index: -1;
`

const FeedAdmin = () => (
  <CalendarLayout>
    <SingleDay />
    <UpdateFeed />
  </CalendarLayout>
)

export default FeedAdmin
