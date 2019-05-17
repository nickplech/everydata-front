import React from 'react'
import styled from 'styled-components'

const BackButton = styled.a`
  cursor: pointer;
  margin: 0;
  position: relative;
  transition: 0.3s;
  width: 50px;
  top: 0;
  &:hover {
    transform: scale(1.1);
  }
`

const SVG = (
  props,
  {
    style = {
      display: 'flex',
      margin: '0',
      fontFamily: 'sans-serif',
    },
    width = '50px',

    height = '50px',
    className = '',
    viewBox = '0 0 50 50',
  },
) => (
  <BackButton onClick={props.handleCancelClick}>
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ''}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  </BackButton>
)

export default SVG
