import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import MaskedInput from 'react-text-mask'
import Router from 'next/router'
import { format } from 'date-fns'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import gql from 'graphql-tag'
import styled, { ThemeProvider } from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
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
    width: 80px;
    height: 80px;
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

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy')

class CreateClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    cellPhone: '',
    birthDay: '',
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
  uploadFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
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
                  <MaskedInput
                    className="dates"
                    id="birthDay"
                    name="birthDay"
                    autoComplete="off"
                    keepCharPositions={true}
                    pipe={autoCorrectedDatePipe}
                    value={this.state.birthDay}
                    placeholder="MM/DD/YYYY"
                    onChange={this.handleChange}
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
                  />
                </label>
                <label htmlFor="file">
                  Add Client's Photo
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="upload their picture"
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img
                      className="profPic"
                      width="150"
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
