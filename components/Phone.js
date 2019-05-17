import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Typist from 'react-typist'

const Computer = styled.img`
  .main-phone {
    z-index: 4;
    margin: 0 auto;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  .logoWhite {
    position: absolute;
    padding: 0px;
    display: block;
    z-index: 15;
    margin: 110px auto 70px auto;
    height: auto;
    width: 500px;
    z-index: 10;
  }
  .compTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    text-align: center;
    margin: 185px auto 20px auto;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-transform: uppercase;
    position: absolute;
    display: block;
    z-index: 900;
  }
  .clickhere {
    cursor: pointer;
    padding: 6px 10px;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    position: absolute;
    display: block;
    margin-top: 310px;
    &:hover {
      background: white;
      color: rgba(20, 110, 240, 0.8);
    }
  }
  .typing {
    @import url('https://fonts.googleapis.com/css?family=Audiowide|Comfortaa|Orbitron|Rajdhani|VT323');
    position: absolute;
    font-family: 'VT323', monospace;
    font-size: 18px;
    transform: translateY(260px);
    color: white;
  }

  .Typist .Cursor {
    display: inline-block;
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Bub1 = posed.img({
  exit: {
    y: -35,
    opacity: 0,
  },
  enter: {
    y: 0,
    x: 0,
    opacity: 1,
    delay: 900,
    transition: {
      y: { type: 'spring', stiffness: 600, damping: 15 },
      default: { duration: 300 },
    },
  },
})

const Bub2 = posed.a({
  exit: {
    opacity: 0,

    y: -50,
  },
  enter: {
    y: 0,
    opacity: 1,
    delay: 1900,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
})

const Bub3 = posed.p({
  exit: {
    opacity: 0,
    x: 100,
  },
  enter: {
    x: 160,
    opacity: 1,
    delay: 1500,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
})
const Color = styled.span`
  color: rgba(200, 80, 150, 1);
  font-weight: 800;
`
const Phone = props => {
  return (
    <>
      <Flex>
        <Bub1
          initialPose="exit"
          pose="enter"
          key="bub1"
          className="logoWhite"
          src={'../static/img/ogocalibri.svg'}
        />
        <Bub2
          initialPose="exit"
          pose="enter"
          key="bub2"
          onClick={props.toggleModal}
          className="clickhere"
        >
          Click Here to Start
        </Bub2>
        <Bub3 initialPose="exit" pose="enter" key="bub3" className="compTitle">
          Business &amp; Consumer Lists
        </Bub3>
        <Typist
          className="typing"
          cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
          }}
          startDelay={3000}
        >
          Our database contains <Color>150 million Consumers</Color>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={21} delay={1000} />
          <Color>110 million Homeowners</Color>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={22} delay={1000} />
          <Color>30 million Businesses</Color>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={21} delay={1000} />
          <Color>15 million Business Owners</Color>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={48} delay={1000} />
          Data for Any Industry that Makes Calls
        </Typist>
      </Flex>

      <Computer width="805px" height="auto" src={'../static/img/comp2.svg'} />
    </>
  )
}

export default Phone
