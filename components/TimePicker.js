import React from 'react'
import Select from 'react-select'
import chroma from 'chroma-js'
import styled from 'styled-components'

const colourOptions = [
  { value: '1', label: '1', color: '#00B8D9' },
  { value: '2', label: '2', color: '#0052CC' },
  { value: '3', label: '3', color: '#5243AA' },
  { value: '4', label: '4', color: '#FF5630' },
  { value: '5', label: '5', color: '#FF8B00' },
  { value: '6', label: '6', color: '#FFC400' },
  { value: '7', label: '7', color: '#36B37E' },
  { value: '8', label: '8', color: '#00875A' },
  { value: '9', label: '9', color: '#253858' },
  { value: '10', label: '10', color: '#666666' },
  { value: '11', label: '11', color: '#666666' },
  { value: '12', label: '12', color: '#666666' },
]
const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
    }
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}
class Timer extends React.Component {
  state = {
    hour: '',
    minute: '',
    am: true,
  }

  handleTime = (hour, minute, am) => {
    this.setState({ hour, minute, am })
  }
  render() {
    const { hour } = this.state

    return (
      <Select
        className="color"
        styles={colourStyles}
        value={hour}
        onChange={this.handleTime}
        options={colourOptions}
      />
    )
  }
}
export default Timer
