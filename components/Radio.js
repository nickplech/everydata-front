import React, { Component } from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`
const StyledButton = styled.a`
  display: inline-flex;
  flex-flow: row;
  justify-self: center;
  border-radius: 35px;
  border: 3px solid white;
  height: 75px;
  width: 75px;
  color: white;
  margin: 20px 10px;
  padding: 4px 10px;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
    transform: scale(1.1);
  }
  &:active {
    outline: none;
    transform: scale(1.1);
  }

  .picked {
    border: 3px solid black;
  }
`

const possibleColors = [
  'Blue',
  'Green',
  'Yellow',
  'Black',
  'Orange',
  'Purple',
  'Red',
]

const RadioComponent = props => (
  <Flex>
    {possibleColors.map((color, index) => {
      return (
        <StyledButton
          style={{
            background: `${possibleColors[index]}`,
          }}
          type="button"
          name="color"
          value={color}
          key={index}
          onClick={props.selectColor}
          className={
            possibleColors[index] === props.selectedColor ? 'picked' : ''
          }
        >
          Select
        </StyledButton>
      )
    })}
  </Flex>
)

export default RadioComponent
