import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Router from 'next/router'
import styled from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
import SickerButton from './styles/SickerButton'

const possibleColors = [
  'BLUE',
  'GREEN',
  'YELLOW',
  'BLACK',
  'WHITE',
  'ORANGE',
  'PURPLE',
  'RED',
  'MAROON',
  'LIGHTBLUE',
]

const CREATE_REASON_MUTATION = gql`
  mutation CREATE_REASON_MUTATION(
    $id: ID!
    $name: String!
    $description: String
    $provider: String
    $color: String!
  ) {
    updateUser(
      id: $id
      name: $name
      description: $description
      provider: $provider
      color: $color
    ) {
      id
      name
      description
      provider
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

  .dates {
    font-family: montserrat, sans-serif;
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
const StyledInput = styled.select`
  /* padding: 10px; */
  width: 100%;
  background: transparent;
  border: none;
  font-size: 2rem;
  outline: none;
`
class UpdateScheduleSettings extends Component {
  state = {
    name: '',
    description: '',
    provider: '',
    color: '',
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
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
    return (
      <Inner>
        <Mutation mutation={CREATE_REASON_MUTATION} variables={this.state}>
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
                    required
                    defaultValue={this.props.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description(optional):
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description..."
                    defaultValue={this.props.description}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="color">
                  Color to Identify Appointment Type
                  <StyledInput
                    style={{ paddingTop: '3px', marginBottom: '10px' }}
                    type="text"
                    id="color"
                    name="color"
                    placeholder="Assign Color"
                    autoComplete="off"
                    required
                    value={this.state.color}
                    onChange={this.handleChange}
                  >
                    {possibleColors.map(color => {
                      return (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      )
                    })}
                  </StyledInput>
                </label>
                <label htmlFor="provider">
                  Appointment Belongs to Specific Provider?(optional)
                  <input
                    type="text"
                    id="provider"
                    name="provider"
                    placeholder="provider"
                    required
                    defaultValue={this.props.provider}
                    onChange={this.handleChange}
                  />
                </label>
                <SickButton type="submit">
                  Sav{loading ? 'ing' : 'e'} Changes
                </SickButton>
                <SickerButton onClick={this.handleCancelClick}>
                  Cancel
                </SickerButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </Inner>
    )
  }
}

export default UpdateScheduleSettings
