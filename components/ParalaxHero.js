import React, { Component } from 'react'
import Plx from 'react-plx'
import styled from 'styled-components'

const SectionStyles = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  height: 500px;
  width: 100%;
`

const exampleParallaxData = [
  {
    start: 150,
    end: 400,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
]

const styles = {
  width: 100,
  height: 100,
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius: 20,
  backgroundColor: '#34ba9c',
  color: 'rgba(20,110,240,1)',
  fontSize: '7vw',
  margin: '0 auto',
  top: 200,
  position: 'fixed',
  fontFamily: 'Radnika_next',
}

class ParalaxHero extends Component {
  render() {
    return (
      <SectionStyles>
        <Plx
          className="MyAwesomeParallax"
          parallaxData={exampleParallaxData} // your parallax effects, see beneath
          style={styles}
        >
          EveryData
        </Plx>
      </SectionStyles>
    )
  }
}

export default ParalaxHero
