import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { TOGGLE_MODAL_MUTATION } from './Modal'

const GradientDiv = styled.div`
  display: flex;
  font-family: 'Monteserrat', sans-serif;
  background: rgba(20, 110, 240, 1);

  flex-flow: column;

  justify-content: center;
  align-items: center;
  padding: 50px 0;
  .title {
    color: white;
    margin: 0;
  }
  .sub {
    color: white;
    margin: 0;
    margin-bottom: 15px;
    font-size: 18px;
  }
`

const StyledButton = styled.button`
  display: flex;
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
  background: white;
  color: gray;
  border: none;
  border-radius: 40px;
  width: 250px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  transition: 0.3s;
  box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background: rgba(20, 110, 220, 0.3);
    color: white;
  }
  &:active {
    outline: none;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`

const CallToAction = () => (
  <GradientDiv>
    <h1 className="title">Top-Teir US Business &amp; Consumer Lists</h1>
    <h2 className="sub">
      Reach the Demographic of Your Choice with a Free Sample List
    </h2>
    <Mutation mutation={TOGGLE_MODAL_MUTATION}>
      {toggleModal => (
        <StyledButton onClick={toggleModal}>Click to Get Started</StyledButton>
      )}
    </Mutation>
  </GradientDiv>
)

export default CallToAction
