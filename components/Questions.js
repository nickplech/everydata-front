import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: rgba(20, 110, 240, 0.8);
`
const P = styled.p`
  background: white;
  z-index: 1;
  width: 200px;
  margin: 0 auto;
  position: relative;
  display: block;
`
const Line = styled.hr`
  height: 5;
  margin: -15px auto 0 auto;
  width: 30%;
  min-width: 325px;
  z-index: 0;
  position: relative;
  display: block;
  /* top: -20px; */
`
const Questions = () => {
  return (
    <div style={{ padding: '1rem 0 4rem 0' }}>
      <div
        className="header"
        style={{
          margin: '3em 0em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        <P>Contact EveryData</P>
        <Line />
      </div>
      <div style={{ fontSize: '2em', textAlign: 'center' }}>
        Questions for Us?
      </div>
      <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
        Call our friendly support team at (866)403-5986
      </p>
      <div style={{ textAlign: 'center' }}>
        <A href="mailto:info@everydata.com " style={{ fontSize: '1.1em' }}>
          Send Us an Email by Clicking Here
        </A>
      </div>
    </div>
  )
}

export default Questions
