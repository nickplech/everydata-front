import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import Router from 'next/router'
import MaskedInput from 'react-text-mask'
import gql from 'graphql-tag'
import styled, { ThemeProvider } from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
import { SINGLE_CLIENT_QUERY } from './Clients'
import SickerButton from './styles/SickerButton'

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

const UPDATE_CLIENT_MUTATION = gql`
  mutation UPDATE_CLIENT_MUTATION(
    $id: ID!
    $firstName: String
    $lastName: String
    $cellPhone: String
    $birthDay: DateTime
  ) {
    updateClient(
      id: $id
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      birthDay: $birthDay
    ) {
      id
      firstName
      lastName
      cellPhone
      birthDay
    }
  }
`

class UpdateClient extends Component {
  state = {}
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  updateClient = async (e, updateClientMutation) => {
    e.preventDefault()
    console.log('Updating Client!')
    console.log(this.state)
    const res = await updateClientMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    })
    Router.push({
      pathname: '/client',
      query: { id: res.data.updateClient.id },
    })
  }
  handleCancelClick = e => {
    e.preventDefault()
    Router.back()
  }
  render() {
    return (
      <Inner>
        <Query
          query={SINGLE_CLIENT_QUERY}
          variables={{
            id: this.props.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>
            if (!data.client)
              return <p>No Client Found for ID {this.props.id}</p>
            return (
              <Mutation
                mutation={UPDATE_CLIENT_MUTATION}
                variables={this.state}
              >
                {(updateClient, { loading, error }) => (
                  <Form onSubmit={e => this.updateClient(e, updateClient)}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="firstName">
                        First Name
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          required
                          defaultValue={data.client.firstName}
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
                          required
                          defaultValue={data.client.lastName}
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
                          required
                          defaultValue={data.client.cellPhone}
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
                          defaultValue={data.client.birthDay}
                          onChange={this.handleChange}
                        />
                      </label>
                      <SickButton type="submit">
                        Sav{loading ? 'ing' : 'e'} Changes
                      </SickButton>{' '}
                      <SickerButton onClick={this.handleCancelClick}>
                        Cancel
                      </SickerButton>
                    </fieldset>{' '}
                  </Form>
                )}
              </Mutation>
            )
          }}
        </Query>
      </Inner>
    )
  }
}

export default UpdateClient
export { UPDATE_CLIENT_MUTATION }
