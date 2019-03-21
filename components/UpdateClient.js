import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import Router from 'next/router'
import MaskedInput from 'react-text-mask'
import gql from 'graphql-tag'
import styled, { ThemeProvider } from 'styled-components'
import Error from './ErrorMessage'

import { format } from 'date-fns'
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
    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  .profPic {
    width: 150px;
    height: 150px;
    background-color: lightgrey;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-top: 20px;
    border: 2px solid rgba(20, 110, 220, 0.5);
    box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`

const UPDATE_CLIENT_MUTATION = gql`
  mutation UPDATE_CLIENT_MUTATION(
    $id: ID!
    $firstName: String
    $lastName: String
    $cellPhone: String
    $birthDay: DateTime
    $image: String
  ) {
    updateClient(
      id: $id
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      birthDay: $birthDay
      image: $image
    ) {
      id
      firstName
      lastName
      cellPhone
      birthDay
      image
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
  uploadFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'perfectday')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pdayrem/image/upload',
      {
        method: 'POST',
        body: data,
      },
    )
    const file = await res.json()
    console.log(file)
    this.setState({
      image: file.secure_url,
    })
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
                      <h2>Update Client Information</h2>
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
                          id="birthDay"
                          name="birthDay"
                          autoComplete="off"
                          placeholder="mm/dd/yyyy"
                          mask={[
                            /\d/,
                            /\d/,
                            '/',
                            /\d/,
                            /\d/,
                            '/',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                          ]}
                          defaultValue={format(
                            data.client.birthDay,
                            'MM/DD/YYYY',
                          )}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="file">
                        Change Client's Photo
                        <input
                          type="file"
                          id="file"
                          name="file"
                          placeholder="upload picture"
                          onChange={this.uploadFile}
                        />
                        {this.state.image && (
                          <>
                            <img
                              className="profPic"
                              width="150"
                              src={this.state.image}
                              alt="upload preview"
                            />
                            <p>New Picture Preview</p>
                          </>
                        )}
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
            )
          }}
        </Query>
      </Inner>
    )
  }
}

export default UpdateClient
export { UPDATE_CLIENT_MUTATION }
