import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import Router from 'next/router'
import MaskedInput from 'react-text-mask'
import gql from 'graphql-tag'
import styled, { ThemeProvider } from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'

const Inner = styled.div`
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
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

const CREATE_CLIENT_MUTATION = gql`
  mutation CREATE_CLIENT_MUTATION(
    $firstName: String!
    $lastName: String!
    $cellPhone: String!
    $birthDay: DateTime
    $image: String
  ) {
    createClient(
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      birthDay: $birthDay
      image: $image
    ) {
      id
    }
  }
`

class CreateClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    cellPhone: '',
    birthDay: '',
    image: '',
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  render() {
    return (
      <Inner>
        <Mutation mutation={CREATE_CLIENT_MUTATION} variables={this.state}>
          {(createClient, { loading, error }) => (
            <Form
              onSubmit={async e => {
                e.preventDefault()
                const res = await createClient()
                console.log(res)
                Router.push({
                  pathname: '/client',
                  query: { id: res.data.createClient.id },
                })
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="firstName" className="required">
                  First Name
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="off"
                    autoFocus
                    required
                    value={
                      this.state.firstName.charAt(0).toUpperCase() +
                      this.state.firstName.slice(1).trim()
                    }
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    autoComplete="off"
                    required
                    value={
                      this.state.lastName.charAt(0).toUpperCase() +
                      this.state.lastName.slice(1).trim()
                    }
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="cellPhone">
                  Cell Phone
                  <MaskedInput
                    mask={[
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    type="text"
                    id="cellPhone"
                    name="cellPhone"
                    placeholder="Phone Number"
                    autoComplete="off"
                    required
                    value={this.state.cellPhone}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="birthDay">
                  Birthday
                  <input
                    className="dates"
                    type="date"
                    id="birthDay"
                    name="birthDay"
                    autoComplete="off"
                    value={this.state.birthDay}
                    onChange={this.handleChange}
                  />
                </label>

                <SickButton type="submit">Add Contact</SickButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </Inner>
    )
  }
}

export default CreateClient
export { CREATE_CLIENT_MUTATION }
