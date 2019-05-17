import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import MaskedInput from 'react-text-mask'
import Router from 'next/router'

import gql from 'graphql-tag'
import styled from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
import SickerButton from './styles/SickerButton'
import { ALL_CLIENTS_QUERY } from './Clients'

const Inner = styled.div`
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
  .dates {
    font-family: 'Montserrat', sans-serif;

    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  .profPic {
    width: 120px;
    height: 120px;
    background-color: lightgrey;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-top: 20px;
    /* border: 2px solid rgba(20, 110, 220, 0.5); */
    box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .field {
    margin: 20px 0;
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
    color: rgba(20, 20, 20, 0.4);
  }
  .field input::-moz-placeholder {
    color: rgba(20, 20, 20, 0.4);
  }
  .field input:-ms-input-placeholder {
    color: rgba(20, 20, 20, 0.4);
  }
  .field input:-moz-placeholder {
    color: rgba(20, 20, 20, 0.4);
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

const CREATE_CLIENT_MUTATION = gql`
  mutation CREATE_CLIENT_MUTATION(
    $firstName: String!
    $lastName: String!
    $cellPhone: String!
    $email: String!
    $businessName: String
    $image: String
  ) {
    createClient(
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      email: $email
      businessName: $businessName
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
    email: '',
    image: '../static/img/profpic.jpg',
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  handleCancelClick = e => {
    e.preventDefault()
    Router.back()
  }

  handleLabel = e => {
    this.setState({ label: e.target.name })
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
    let { firstName, lastName } = this.state

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
                <h2>Add to Contacts List</h2>
                <label htmlFor="firstName" className="required">
                  First Name{' '}
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="off"
                    autoFocus
                    required
                    value={
                      firstName.charAt(0).toUpperCase() +
                      firstName.slice(1).trim()
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
                      lastName.charAt(0).toUpperCase() +
                      lastName.slice(1).trim()
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
                <label htmlFor="email">
                  Email
                  <input
                    className="dates"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={this.state.email}
                    placeholder="client@email.com"
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="file">
                  Add Client's Photo
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="upload picture"
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img
                      className="profPic"
                      width="120"
                      src={this.state.image}
                      alt="upload preview"
                    />
                  )}
                </label>
                <SickButton type="submit">Add Contact</SickButton>{' '}
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

export default CreateClient
export { CREATE_CLIENT_MUTATION }
