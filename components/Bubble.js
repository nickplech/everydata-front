import React from 'react'
import styled from 'styled-components'

const Floater = styled.div`
  border-radius: 50%;

  display: inline-block;
  /* transform: translatey(-370px); */
  background: rgba(20, 110, 240, 1);
  position: absolute;
  z-index: 5;
  height: 152px;
  padding: 5px;
  width: 152px;
  /* border: 3px solid white; */

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  .logo1 {
    background-position: 0 0;
  }
  .logo2 {
    background-position: -154px 0;
  }
  .logo3 {
    background-position: -308px 0;
  }
  .logo4 {
    background-position: -462px 0;
  }
  .logo5 {
    background-position: -616px 0;
  }
  .logo6 {
    background-position: -770px 0;
  }
  .logo7 {
    background-position: -924px 0;
  }
  .logo8 {
    background-position: 0 -154px;
  }
  .logo9 {
    background-position: -154px -154px;
  }
  .logo10 {
    background-position: -308px -154px;
  }
  .logo11 {
    background-position: -462px -154px;
  }
  .logo12 {
    background-position: -616px -154px;
  }
  .logo13 {
    background-position: -770px -154px;
  }
  .logo14 {
    background-position: -924px -154px;
  }
  .logo15 {
    background-position: 0 -308px;
  }
  .logo16 {
    background-position: -154px -308px;
  }
  .logo17 {
    background-position: -308px -308px;
  }
  .logo18 {
    background-position: -462px -308px;
  }
  .logo19 {
    background-position: -616px -308px;
  }
  .logo20 {
    background-position: -770px -308px;
  }
  .logo21 {
    background-position: -924px -308px;
  }
  .logo22 {
    background-position: 0 -462px;
  }
  .logo23 {
    background-position: -154px -462px;
  }
  .logo24 {
    background-position: -308px -462px;
  }
  .logo25 {
    background-position: -462px -462px;
  }
  .logo26 {
    background-position: -616px -462px;
  }
  .logo27 {
    background-position: -770px -462px;
  }
  .logo28 {
    background-position: -924px -462px;
  }
  .logo29 {
    background-position: 0 -616px;
  }
  .logo30 {
    background-position: -154px -616px;
  }
  .logo31 {
    background-position: -308px -616px;
  }
  .logo32 {
    background-position: -462px -616px;
  }
  .logo33 {
    background-position: -616px -616px;
  }
`

const Bubble = props => {
  return (
    <Floater
      style={{
        transform: `translate(${props.bubble.x}px, ${props.bubble.y}px) scale(${
          props.bubble.s
        })`,
      }}
    >
      {props.bubble.name}
    </Floater>
  )
}

export default Bubble
