import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Router from 'next/router'
import RadioComponent from './Radio'
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

class UpdateScheduleSettings extends Component {
  state = {
    name: '',
    defaultLength: 0,
    provider: '',
    color: 'Blue',
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
  selectColor = e => {
    this.setState({ color: e.target.value })
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
                    autoComplete="off"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <RadioComponent selectColor={this.selectColor} />

                <label htmlFor="defaultLength">
                  Default Length(optional):
                  <input
                    type="number"
                    min="0"
                    max="800"
                    step="15"
                    id="defaultLength"
                    name="defaultLength"
                    defaultValue={0}
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
