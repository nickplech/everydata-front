import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import Router from 'next/router'
import styled from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'

import SickerButton from './styles/SickerButton'

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $name: String
    $businessName: String
    $email: String
  ) {
    updateUser(
      name: $name
      businessName: $businessName
      email: $email
      id: $id
    ) {
      id
      name
      businessName
      email
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
class UpdateUserProfiles extends Component {
  state = {}
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  updateUser = async (e, updateUserMutation) => {
    e.preventDefault()
    console.log(this.state)

    const res = await updateUserMutation({
      variables: { id: this.props.id, ...this.state },
    })
  }

  handleCancelClick = e => {
    e.preventDefault()
    Router.back()
  }

  render() {
    return (
      <Inner>
        <Mutation
          mutation={UPDATE_USER_MUTATION}
          variables={{ ...this.state, id: this.props.id }}
        >
          {(updateUser, { loading, error, called }) => (
            <Form onSubmit={e => this.updateUser(e, updateUser)}>
              <Error error={error} />
              {!error && !loading && called && (
                <Submitted>Profile Updated Successfully!</Submitted>
              )}
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="id">
                  User ID for Reference
                  <input
                    name="id"
                    required
                    defaultValue={this.props.id}
                    onChange={this.handleChange}
                    readOnly
                  />
                </label>
                <label htmlFor="firstName">
                  Name on Account:
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
                <label htmlFor="businessName">
                  Edit Display Name:
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="Business Display Name"
                    required
                    defaultValue={this.props.businessName}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Login/Contact Email Address
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    defaultValue={this.props.email}
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

export default UpdateUserProfiles
export { UPDATE_USER_MUTATION }
