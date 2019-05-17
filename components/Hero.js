import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Bubble from './Bubble'

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`
const StyledHero = styled.div`
  display: grid;
  position: relative;

  height: 700px;
  width: 100%;
  margin: 0 auto;
  z-index: 0;
  &:after {
    /* top: 45px; */
    display: block;
    position: absolute;
    content: '';
    left: -50px;
    right: -50px;
    height: 500px;
    -webkit-transform: rotateZ(-2deg);
    transform: rotateZ(-2deg);
    z-index: 700;

    overflow-x: hidden;
    background: linear-gradient(
      270deg,
      rgba(20, 110, 240, 0.1),
      rgba(39, 172, 225, 0.1),
      rgba(95, 191, 191, 0.1)
    );
    z-index: 0;
  }
`

const Buttons = styled.div`
  z-index: 25;
  display: flex;
`

const Button = styled.img`
  padding: 0px;
  height: 505px;
  width: 505px;
  margin: 30px 35px;
  position: absolute;
  border: none;
  transition: 0.2s;
  outline: none;
  cursor: pointer;
`

const Logo = styled.p`
  color: rgba(240, 240, 240, 1);
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 11px;
  margin: 0 auto;
  font-weight: 700;
`
// const bubbles = [
//   { name: 'Business Owners', s: 0.6, x: 1134, y: 45 },

//   { name: 'Homeowners', s: 0.6, x: 2499, y: 79 },

//   { name: 'Cell Phones', s: 0.6, x: 795, y: 226 },

//   { name: 'Landlines', s: 0.6, x: 444, y: 193 },

//   { name: 'Emails', s: 0.8, x: 1303, y: 193 },
//   { name: 'Faxes', s: 0.8, x: 907, y: 88 },

//   { name: 'DNC', s: 0.8, x: 323, y: 60 },

//   { name: 'Suppressions', s: 0.8, x: 1929, y: 293 },
//   { name: 'Net Worth Investors', s: 0.8, x: 2135, y: 198 },
//   { name: 'Travel', s: 0.8, x: 2276, y: 82 },
//   { name: 'Vacation', s: 0.8, x: 2654, y: 182 },
//   { name: 'Opportunity Seekers', s: 0.8, x: 2783, y: 60 },
//   { name: 'Credit', x: 1519, y: 118 },
//   { name: 'Debt Data', x: 1071, y: 233 },
//   {
//     name: 'Hispanic',
//     x: 1773,
//     y: 148,
//   },

//   { name: 'African American', x: 624, y: 111 },
//   { name: 'Real Estate', x: 75, y: 103 },

//   { name: 'Insurance Agents', x: 1990, y: 75 },
// ]
const specs = [
  { s: 0.6, x: 1134, y: 45 },
  { s: 0.6, x: 1620, y: 271 },
  { s: 0.6, x: 1761, y: 372 },
  { s: 0.6, x: 2499, y: 79 },
  { s: 0.6, x: 2704, y: 334 },
  { s: 0.6, x: 2271, y: 356 },
  { s: 0.6, x: 795, y: 226 },
  { s: 0.6, x: 276, y: 256 },
  { s: 0.6, x: 1210, y: 365 },
  { s: 0.6, x: 444, y: 193 },
  { s: 0.6, x: 2545, y: 387 },
  { s: 0.8, x: 1303, y: 193 },
  { s: 0.8, x: 907, y: 88 },
  { s: 0.8, x: 633, y: 320 },
  { s: 0.8, x: 323, y: 60 },
  { s: 0.8, x: 129, y: 357 },
  { s: 0.8, x: 1440, y: 342 },
  { s: 0.8, x: 1929, y: 293 },
  { s: 0.8, x: 2135, y: 198 },
  { s: 0.8, x: 2276, y: 82 },
  { s: 0.8, x: 2654, y: 182 },
  { s: 0.8, x: 2783, y: 60 },
  { x: 1519, y: 118 },
  { x: 1071, y: 233 },
  { x: 1773, y: 148 },
  { x: 2098, y: 385 },
  { x: 2423, y: 244 },
  { x: 901, y: 385 },
  { x: 624, y: 111 },
  { x: 75, y: 103 },
  { x: 413, y: 367 },
  { x: 2895, y: 271 },
  { x: 1990, y: 75 },
]
// const floaters = [

//   name: 'Career',

//   name: 'Financial',

//   name: 'Instagram',

//   name: 'Facebook',

//   name: 'Interests',

//   name: 'hobbies',

//   name: 'Lifestyles',

// ]
class Hero extends Component {
  state = {
    bubbles: [],
    index: '',
    x: '',
    y: '',
    scale: 1,
  }

  updateAnimation = () => {}
  update = () => {
    const SCROLL_SPEED = 0.3
    const CANVAS_WIDTH = 2800
    let { x } = this.state
    this.setState({ x: x < -200 ? CANVAS_WIDTH : x - SCROLL_SPEED })
  }
  render() {
    return (
      <Wrapper>
        <StyledHero>
          {/* <Buttons>
        <Button src={'../static/img/cclusters.svg'} />
      </Buttons> */}

          {specs.map((bubble, i) => {
            return <Bubble bubble={bubble} className={`logo${i + 1}`} key={i} />
          })}
        </StyledHero>
      </Wrapper>
    )
  }
}
export default Hero
