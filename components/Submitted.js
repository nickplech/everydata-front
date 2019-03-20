import React, { Component } from 'react'
import styled from 'styled-components'

const Submit = styled.div`
  display: block;
  position: fixed;
  min-width: 300px;
  width: 30%;
  transform: translateX(0%);
  text-align: center;
  transition: 0.3s;
  padding: 10px;
  background: rgba(20, 180, 110, 0.9);
  color: white;
  border-radius: 5px;
  bottom: 15px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  right: 20px;
  ${props => props.called && `transform: translateX(0%);`};
  z-index: 999;
`

const Submitted = props => <Submit>{props.message}</Submit>

export default Submitted
