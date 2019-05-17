import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Submitted = styled.p`
  color: white;
  text-align: center;
  background: rgba(20, 110, 240, 0.8);
  margin: 100px 50px;
  font-size: 22px;
  padding: 25px 15px;
  a {
    color: white;
    padding-bottom: 3px;
    border-bottom: 3px solid white;
  }
`
const Welcome = () => {
  return (
    <Submitted>
      Thank You for Your Interest in EveryData, a Data Specialist Will be in
      Contact with You Shortly
    </Submitted>
  )
}

export default Welcome
