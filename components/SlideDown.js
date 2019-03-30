import React from 'react'
import { SlideDown } from 'react-slidedown'
import styled from 'styled-components'

const Wrap = styled.div`
  padding-top: 50px;
  .react-slidedown {
    height: 0;
    transition-property: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }

  .react-slidedown.transitioning {
    overflow-y: hidden;
  }

  .react-slidedown.closed {
    display: none;
  }
`

const MyDropdown = props => {
  return (
    <Wrap>
      <SlideDown className={'my-dropdown-slidedown'}>
        {props.openSlide ? props.children : null}
      </SlideDown>
    </Wrap>
  )
}

export default MyDropdown
