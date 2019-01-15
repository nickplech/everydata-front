import React from 'react'
import styled from 'styled-components'

const Tabs = styled.div`
  display: flex;
  padding: 10px;
  min-width: 150px;
  height: 45px;
  justify-content: center;
  align-content: center;
  align-items: center;

  .textWhite {
    color: white;
    text-transform: uppercase;
    font-size: 10px;
  }
  &:hover {
    background: rgba(240, 240, 240, 0.3);
  }
`

const Tab = props => (
  <>
    <Tabs>
      <p className="textWhite">{props.name}</p>
    </Tabs>
  </>
)

export default Tab
