import React from 'react'
import styled from 'styled-components'

const Tabs = styled.div`
  display: flex;
  padding: 10px;
  min-width: 100px;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  .textWhite {
    color: white;
    text-transform: uppercase;
    font-size: 10px;
  }
`

const Block = props => (

    <Tabs>
      <p className="textWhite">{props.name}</p>
    </Tabs>

)

export default Block
