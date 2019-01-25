import React from 'react'
import RequestReset from '../components/RequestReset'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Bottom = styled.div`
  position: relative;

  width: 100%;
  margin-top: 300px;
`
const reset = props => (
  <div>
    <RequestReset />
    <Bottom>
      <Footer className="bottom" />
    </Bottom>
  </div>
)

export default reset
