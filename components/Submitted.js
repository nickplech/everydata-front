import React from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const AnimationStyles = styled.span`
  position: absolute;
  right: 20px;
  top: -25px;
  .count {
    display: block;

    transition: all 0.4s;
  }
  /* Intial State of the entered Dot */
  .count-enter {
    opacity: 0;
  }
  .count-enter-active {
    opacity: 1;
  }
  .count-exit {
    top: 0;
    position: absolute;
    opacity: 1;
  }
  .count-exit-active {
    opacity: 0;
  }
`

const Submit = styled.div`
  text-align: center;
  padding: 10px;
  background: rgba(20, 180, 110, 0.9);
  color: white;
  border-radius: 5px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  z-index: 999;
`

const Submitted = () => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        timeout={{ enter: 2000, exit: 2000 }}
      >
        <Submit>Appointment Reminder Sent Successfully</Submit>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
)

export default Submitted
