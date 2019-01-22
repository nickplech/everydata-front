import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130vh;
  width: 100vw;
  .c-hero-flex__item {
    flex-grow: 1;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.3);
    transition: 0.2s all;

    &:hover {
      flex-grow: 2;
      box-shadow: inset 0 0 0 100vmax rgba(20, 0, 100, 0.5);
    }
    &:nth-child(3) {
      background: url('../static/img/doc.jpg') no-repeat center center;
      text-decoration: none;
    }
    &:nth-child(2) {
      background: url('../static/img/fitness-appointment-reminders.jpg')
        no-repeat center center;
      text-decoration: none;
    }
    &:nth-child(1) {
      background: url('../static/img/spa-appointment-reminders.jpg') no-repeat
        center center;
      text-decoration: none;
    }
    &:nth-child(4) {
      background: url('../static/img/realestate.jpg') no-repeat center center;
      text-decoration: none;
    }
  }
  .c-hero-flex__title {
    text-transform: uppercase;
    letter-spacing: 0.075em;
    color: rgb(255, 255, 255);
    transition: 0.2s all;
    font-size: 18px;
    opacity: 0.8;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 0px;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  @media (max-width: 960px) {
    flex-flow: column nowrap;
    .c-hero-flex__item {
      width: 100%;
    }
  }
  @media (min-width: 961px) {
    .c-hero-flex__item {
      height: 100%;
      text-decoration: none;
    }
  }
`

const Boxes = () => {
  return (
    <StyledBoxes>
      <Link href="/spa">
        <a className="c-hero-flex__item">
          <h2 className="c-hero-flex__title">Spa &amp; Beauty</h2>
        </a>
      </Link>
      <Link href="/fitness">
        <a className="c-hero-flex__item">
          <h2 className="c-hero-flex__title">Fitness Instruction</h2>
        </a>
      </Link>
      <Link href="/medical">
        <a className="c-hero-flex__item">
          <h2 className="c-hero-flex__title">Health Care</h2>
        </a>
      </Link>
      <Link href="/realestate">
        <a className="c-hero-flex__item">
          <h2 className="c-hero-flex__title">Real Estate</h2>
        </a>
      </Link>
    </StyledBoxes>
  )
}

export default Boxes
