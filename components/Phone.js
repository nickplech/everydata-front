import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

const MainPhone = styled.div`
  .main-phone {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 190px 125px 45px 1fr;
    background-image: url('../static/img/bg-phone2.png');
    bottom: 0%;
    width: 425px;
    min-height: 550px;
    z-index: 4;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    padding-left: 35px;
    margin: 0 auto;
  }

  .med-text1 {
    grid-row: 2/3;
    height: auto;
    width: 270px;
    top: 35%;
    left: 35px;
    z-index: 5;
  }

  .med-text2 {
    margin-left: 245px;
    grid-row: 3/4;
    height: auto;
    width: 110px;
    top: 97%;
    left: 283px;
    z-index: 5;
  }
  .med-text3 {
    grid-row: 4/5;
    height: auto;
    width: 270px;
    top: 66%;
    left: 35px;
    z-index: 5;
  }
`
const PhoneSlide = posed.div({
  exit: {
    y: '0%',
  },
  enter: {
    y: '0%',
    beforeChildren: true,
    staggerChildren: 500,
  },
})

const Bub1 = posed.img({
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
})

const Bub2 = posed.img({
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
})

const Bub3 = posed.img({
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
})

class Phone extends React.Component {
  render() {
    return (
      <MainPhone>
        <PhoneSlide initialPose="exit" pose="enter" className="main-phone">
          <Bub1
            key="bub1"
            id="i1"
            className="med-text1"
            src="../static/img/medical-reminder.png"
          />
          <Bub2
            key="bub2"
            id="i2"
            className="med-text2"
            src="../static/img/confirm2.png"
          />
          <Bub3
            key="bub3"
            id="i3"
            className="med-text3"
            src="../static/img/confirmrem.png"
          />
        </PhoneSlide>
      </MainPhone>
    )
  }
}

export default Phone
