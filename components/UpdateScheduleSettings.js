import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import chroma from 'chroma-js'
import Select from 'react-select'
import Router from 'next/router'
import styled from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'

const CREATE_REASON_MUTATION = gql`
  mutation CREATE_REASON_MUTATION(
    $name: String!
    $defaultLength: Int
    $provider: String
    $color: String!
  ) {
    createReason(
      name: $name
      defaultLength: $defaultLength
      provider: $provider
      color: $color
    ) {
      id
      defaultLength
      name
      color
    }
  }
`

const Inner = styled.div`
  text-align: left;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem 0;
  padding-top: 0;
  .color {
    margin: 15px 0;
  }
  .dates {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    opacity: 0.5;
    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
`
const Submitted = styled.p`
  color: green;
  background: white;
  padding: 15px 15px;
  border-left: 5px solid green;
`
const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
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
class UpdateScheduleSettings extends Component {
  state = {
    name: '',
    defaultLength: 0,
    provider: '',
    checked: false,
    selectedOption: null,
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  handleColor = selectedOption => {
    selectedOption.toString()
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }
  createReason = async (e, createReasonMutation) => {
    e.preventDefault()
    const res = await createReasonMutation()
    console.log(res)
  }

  handleCancelClick = e => {
    e.preventDefault()
    Router.back()
  }

  render() {
    const selectedOption = this.state.selectedOption
    return (
      <Inner>
        <Mutation
          mutation={CREATE_REASON_MUTATION}
          variables={{ ...this.state, color: this.state.selectedOption }}
        >
          {(createReason, { loading, error, called }) => (
            <Form onSubmit={e => this.createReason(e, createReason)}>
              <Error error={error} />
              {!error && !loading && called && (
                <Submitted>
                  New Appointment Type Created SuccessFully!
                </Submitted>
              )}
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="firstName">
                  Name of Appointment Type
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Select Color to Identify Appointment Type
                  <Select
                    className="color"
                    styles={colourStyles}
                    value={selectedOption}
                    onChange={this.handleColor}
                    options={colourOptions}
                  />
                </label>
                <label htmlFor="defaultLength">
                  Default Length(optional):
                  <input
                    type="number"
                    min="0"
                    max="800"
                    step="15"
                    id="defaultLength"
                    name="defaultLength"
                    value={this.state.defaultLength}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="provider">
                  Appointment Belongs to Specific Provider?(optional)
                  <input
                    type="text"
                    id="provider"
                    name="provider"
                    placeholder="provider"
                    value={this.state.provider}
                    onChange={this.handleChange}
                  />
                </label>
                <SickButton type="submit">
                  Creat{loading ? 'ing' : 'e'} Appointment Type
                </SickButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </Inner>
    )
  }
}

export default UpdateScheduleSettings
export { CREATE_REASON_MUTATION }
