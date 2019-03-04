import React, { Component } from 'react'
import styled from 'styled-components'
import DaySelector from './DaySelector'

const Back = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 5;
  border-radius: 20px;
  border: 5px solid white;
  box-shadow: 1px 0 4px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(240, 240, 240, 1);
`

const Flexer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr 60px;
  position: relative;
  flex-flow: column;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  justify-content: center;
`
// const CharCount = styled.div`
//   display: block;
//   font-size: 11px;
//   bottom: 70px;
//   right: 40px;
//   position: absolute;
//   z-index: 10px;
// `
const MessageEdit = styled.textarea`
  background: white;
  display: grid;
  grid-column: 2;
  position: relative;
  z-index: 6;
  width: 95%;
  padding: 10px;
  height: calc(100% - 40px);
  border-radius: 10px;
  align-self: center;
  resize: none;
  border: none;
  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.05);
  /* justify-self: center; */
  /* max-width: 800px; */
  &:focus {
    outline: none;
  }
`
const Send = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  /* margin-bottom: 10px; */
  width: 95%;

  display: grid;
  grid-column: 2;
  font-size: 2rem;
  /* justify-self: center; */
  padding: 0rem 1.2rem;
  height: 70%;
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
      {/* <div>
        <CharCount>/160</CharCount>
      </div> */}
      <DaySelector />
      <MessageEdit readOnly max={160} content="Testing" />

      <Send>Send</Send>
    </Flexer>
  </Back>
)

export default ReviewMessage
