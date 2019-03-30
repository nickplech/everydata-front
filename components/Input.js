import React from 'react'
// import { TransitionMotion, spring } from 'react-motion'
import styled from 'styled-components'

const Wrap = styled.div`
  .field {
    width: 100%;
    height: 56px;
    border-radius: 4px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
  }

  .field:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  .field.active {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  }

  .field.active input {
    padding: 24px 16px 8px 16px;
  }

  .field.active input + label {
    top: 4px;
    opacity: 1;
    color: #512da8;
  }

  .field.locked {
    pointer-events: none;
  }

  .field input {
    width: 100%;
    height: 56px;
    position: relative;
    padding: 0px 16px;
    border: none;
    border-radius: 4px;
    font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
    -webkit-appearance: none;
  }

  .field input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .field input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .field input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .field input:-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  .field input + label {
    position: absolute;
    top: 24px;
    left: 16px;
    font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    color: #ffffff;
    opacity: 0;
    pointer-events: none;
    transition: 0.1s all ease-in-out;
  }

  .field input + label.error {
    color: #ec392f;
  }

  .field p.predicted {
    position: absolute;
    top: 8px;
    left: 16px;
    font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #e0e0e0;
    opacity: 1;
    pointer-events: none;
  }
`
class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || 'Label',
    }
  }

  changeValue(event) {
    const value = event.target.value
    this.setState({ value, error: '' })
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted })
    }
  }

  render() {
    const { active, value, error, label } = this.state
    const { predicted, locked } = this.props
    const fieldClassName = `field ${(locked ? active : active || value) &&
      'active'} ${locked && !active && 'locked'}`

    return (
      <Wrap>
        <div className={fieldClassName}>
          {active && value && predicted && predicted.includes(value) && (
            <p className="predicted">{predicted}</p>
          )}
          <input
            id={1}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={1} className={error && 'error'}>
            {error || label}
          </label>
        </div>
      </Wrap>
    )
  }
}
