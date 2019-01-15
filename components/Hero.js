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
    -webkit-transform: rotateZ(-5.7deg);
    transform: rotateZ(-5.7deg);
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
  z-index: 5;

  p {
    position: relative;
    display: block;
    max-width: 600px;
    z-index: 5;
    color: white;
    font-size: 1.2rem;
  }
  .title {
    position: relative;
    display: block;
    color: white;
    font-weight: 600;

    font-size: 1.6rem;
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

const Hero = () => (
  <Wrapper>
    <StyledHero>
      <Left>
        <h1 className="title">Making Every Day Perfect</h1>
        <p>
          Most appointment-based businesses are plauged with constant "No-Shows"
          which result in lost revenue and disruption to your daily schedule. We
          have simplified &amp; perfected appointment reminders.
        </p>
        <p>Effortlessly reduce "No-Shows" &amp; improve daily work flow.</p>
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
