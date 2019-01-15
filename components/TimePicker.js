import React, { Component } from 'react'
import styled from 'styled-components'

const Flexer = styled.div`
  display: flex;
  justify-content: center;
`
const Hour = styled.div`
  display: inline-flex;
  height: 125px;
  width: 125px;
  border-radius: 50%;
  background: rgba(230, 230, 230, 1);
  margin: 0 20px;
  justify-content: center;
`
const Min = styled.div`
  display: inline-flex;
  height: 125px;
  width: 125px;
  border-radius: 50%;
  background: rgba(230, 230, 230, 1);
  margin: 0 20px;
  justify-content: center;
`

const Hr = styled.p`
  display: flex;
  align-self: center;
  opacity: 0.6;
`
const Minute = styled.p`
  display: flex;
  align-self: center;
  opacity: 0.6;
`
const Digital = styled.p`
  display: block;
  text-align: center;
  font-size: 38px;
  color: rgba(100, 100, 240, 1);
  font-weight: 200;
`

class TimePicker extends Component {
  render() {
    return (
      <>
        <Flexer>
          <Hour>
            <Hr>Hr</Hr>
          </Hour>
          <Min>
            <Minute>Min</Minute>
          </Min>
        </Flexer>
        <Digital>12:00</Digital>
      </>
    )
  }
}

export default TimePicker
