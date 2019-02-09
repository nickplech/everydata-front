import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`
const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 800px;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgb(255, 255, 255),
    rgb(245, 245, 250)
  );
  background: linear-gradient(180deg, #fff, #f4f3fa);
  overflow-x: hidden;
  z-index: 0;
  &:after {
    top: -121px;
    display: block;
    position: absolute;
    content: '';
    left: -50px;
    right: -50px;
    height: 700px;
    -webkit-transform: rotateZ(-5.4deg);
    transform: rotateZ(-5.4deg);
    z-index: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(
      270deg,
      rgba(37, 222, 162, 1),
      #27aee1,
      #0f7ffeff
    );
    z-index: 0;
  }
`
const Left = styled.div`
  font-family: 'Montserrat', sans-serif;
  z-index: 5;
  margin-top: 300px;
  .confirmation {
    color: white;
  }
  p {
    position: relative;
    margin: 0;
    display: block;
    max-width: 700px;
    z-index: 5;
    color: white;
    font-size: 1.5rem;
    padding-left: 20%;
  }
  .title {
    position: relative;
    display: block;
    margin-bottom: 0px;
    color: white;
    font-weight: 600;
    padding-left: 20%;
    line-height: 2.8rem;
    font-size: 2.7rem;
  }
`

const Screen = styled.img`
  position: relative;
  display: block;
  top: 75px;
  height: 660px;
  width: auto;
  z-index: 3;
`

const HeroButton = styled.button`
  display: inline-block;
  background: transparent;
  border: 2px solid white;
  margin-left: 20%;
  padding: 8px 12px;
  margin-top: 15px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border-color: yellow;
    color: yellow;
  }
`
const SecondButton = styled.button`
  display: inline-block;
  background: rgba(100, 100, 220, 1);
  border: 3px solid rgba(100, 100, 220, 1);
  margin-left: 25px;
  padding: 8px 12px;
  margin-top: 15px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border-color: yellow;
    color: yellow;
  }
`
const Hero = () => (
  <Wrapper>
    <StyledHero>
      <Left>
        <h1 className="title">
          Confidence Through <span className="confirmation">Confirmation</span>
        </h1>
        <p>
          Your Business' best option for effortlessly reducing "no-shows" &amp;
          improving daily work flow. Start sending appointment reminders
          immediately with no credit card required for a free trial.
        </p>
        <HeroButton>Start Your Free Trial</HeroButton>{' '}
        <SecondButton>Start Your Free Trial</SecondButton>
      </Left>
      <div>
        <Screen
          src="../static/img/placeit.png"
          alt="perfect day reminders screen"
        />
      </div>
    </StyledHero>
  </Wrapper>
)

export default Hero
