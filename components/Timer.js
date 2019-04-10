import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2;
  padding-left: 40px;
  .hour {
    background: #3d5866;
  }
  .min {
    background: rgba(20, 110, 240, 1);
  }
`
const Input = styled.input`
  border: none;
  border-radius: 50%;
  display: flex;
  outline: none;
  text-align: center;
  color: white;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 2px;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    opacity: 0.4;
  }
`

const hourOptions = [
  { value: '1:00', label: '1' },
  { value: '2:00', label: '2' },
  { value: '3:00', label: '3' },
  { value: '4:00', label: '4' },
  { value: '5:00', label: '5' },
  { value: '6:00', label: '6' },
  { value: '7:00', label: '7' },
  { value: '8:00', label: '8' },
  { value: '9:00', label: '9' },
  { value: '10:00', label: '10' },
  { value: '11:00', label: '11' },
  { value: '12:00', label: '12' },
]

const minOptions = [
  { value: '00' },
  { value: '15' },
  { value: '30' },
  { value: '45' },
]

const Timer = props => {
  return (
    <Div>
      {hourOptions.map(hour => (
        <Input
          className="hour"
          key={hour.value}
          readOnly
          name={hour.value}
          onClick={props.saveTime}
          value={hour.label}
        />
      ))}
      {minOptions.map(min => (
        <Input
          disabled={props.time.length < 4}
          className="min"
          key={min.value}
          readOnly
          name="minutes"
          onClick={props.saveTimeMin}
          value={min.value}
        />
      ))}
    </Div>
  )
}
export default Timer
