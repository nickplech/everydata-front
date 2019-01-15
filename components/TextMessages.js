import React, { Component } from 'react'
import SingleClient from './SingleClient'
import ReviewMessage from './ReviewMessage'

import styled from 'styled-components'

const TextMessage = styled.div`
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

class TextMessages extends Component {
  render() {
    return (
      <>
        <TextMessage>
          <SingleClient id={this.props.id} />
        </TextMessage>
        <ReviewMessage id={this.props.id} />
      </>
    )
  }
}

export default TextMessages
