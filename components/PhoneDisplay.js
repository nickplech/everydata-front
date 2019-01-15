import React from 'react'
import styled from 'styled-components'
import Phone from './Phone'

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;
  min-height: 440px;
  padding-top: 0px;
  background-color: #611acc;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238e55e8' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  overflow-x: hidden;
  z-index: 0;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100px;
    background: #f4f3fa;
    z-index: 4;
  }
`
const Left = styled.div`
  z-index: 5;
  padding-left: 25px;
  p {
    position: relative;
    display: block;
    max-width: 600px;
    z-index: 5;
  }
`

const PhoneDisplay = () => (
  <StyledHero>
    <Left>
      <Phone />
    </Left>
    <div />
  </StyledHero>
)

export default PhoneDisplay
