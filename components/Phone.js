import React from 'react'
import styled from 'styled-components'

const MainPhone = styled.div`
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
  .main-phone {
    position: absolute;
    -webkit-animation-name: phone-slide;
    -webkit-animation-duration: 1s;
    -webkit-animation-delay: 1s;
    animation-name: phone-slide;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    visibility: hidden;
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
  /* @-webkit-keyframes phone-slide {
    0% {
      top: 80%;
    }
    100% {
      top: -23%;
    }
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  } */

  @keyframes phone-slide {
    0% {
      top: 80%;
    }
    100% {
      top: -23%;
    }
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`

const Phone = () => (
  <MainPhone className="main-phone">
    <img
      id="i1"
      className="med-text1"
      src="../static/img/medical-reminder.png"
    />
    <img id="i2" className="med-text2" src="../static/img/confirm2.png" />
    <img id="i3" className="med-text3" src="../static/img/confirmrem.png" />
  </MainPhone>
)

export default Phone
