import React, { Component } from 'react'
import styled from 'styled-components'

const Back = styled.div`
  grid-row: 2/3;
  grid-column: 2;

  width: 96%;
  height: 94%;
  margin: 0 auto;
  z-index: 5;

  border-radius: 10px;
  background-color: rgba(220, 220, 220, 0.3);
`

const Flexer = styled.div`
  display: flex;
  flex-flow: column;

  width: 90%;
  height: 90%;
  justify-content: center;
`
const CharCount = styled.span`
  font-size: 11px;
  display: flex;
  align-self: flex-end;
`
const MessageEdit = styled.input`
  background: white;
  display: flex;
  align-self: flex-end;
  z-index: 6;
  width: 90%;
  height: 80%;
  max-width: 800px;
`
const Send = styled.button`
  display: flex;

  align-content: center;
  justify-content: center;

  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin-top: 10px;
  align-self: flex-end;
  font-size: 2rem;
  padding: 0.7rem 1.2rem;
  font-size: 1.8rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.15);
  &:active {
    box-shadow: none;
  }
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(30, 110, 240, 0.9);
  }
`

const ReviewMessage = () => (
  <Back>
    <Flexer>
      <CharCount>
        <p>/160</p>
      </CharCount>

      <MessageEdit readOnly />
      <Send>Send</Send>
    </Flexer>
  </Back>
)

export default ReviewMessage
