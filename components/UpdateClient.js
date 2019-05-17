import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import Router from 'next/router'
import MaskedInput from 'react-text-mask'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Error from './ErrorMessage'
import DeleteAlt from './DeleteAlt'
import SVG from './SVG'
import SickButton from './styles/SickButton'
import { SINGLE_CLIENT_QUERY } from './Clients'

const SickerButton = styled.div`
  background: rgba(10, 120, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin: 10px 20px;
  border-radius: 5px;
  font-size: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1.3rem;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(230, 10, 40, 0.7);
  }
  &:active {
    box-shadow: none;
  }
`

const Inner = styled.div`
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
  .dates {
    font-family: montserrat, sans-serif;
    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  .profPic {
    width: 130px;
    height: 130px;
    background-color: lightgrey;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-top: 0px;
    border: none;
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
    $email: String
    $seen: Boolean
  ) {
    updateClient(
      id: $id
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      email: $email
      seen: $seen
    ) {
      id
      firstName
      lastName
      fullName
      cellPhone
      email
      image
      seen
      handled
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
      <>
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
                      <SVG handleCancelClick={this.handleCancelClick} />
                      <fieldset disabled={loading} aria-busy={loading}>
                        <DeleteAlt
                          firstName={data.client.firstName}
                          lastName={data.client.lastName}
                          id={data.client.id}
                        >
                          <SickerButton style={{ float: 'right' }}>
                            Delete Client &times;
                          </SickerButton>
                        </DeleteAlt>
                        <h2>Update {data.client.fullName}'s Info</h2>{' '}
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
                        <label htmlFor="email">
                          Email
                          <input
                            className="dates"
                            id="email"
                            name="email"
                            autoComplete="off"
                            defaultValue={data.client.email}
                            onChange={this.handleChange}
                          />
                        </label>
                        <SickButton type="submit">
                          Sav{loading ? 'ing' : 'e'} Changes
                        </SickButton>
                      </fieldset>
                    </Form>
                  )}
                </Mutation>
              )
            }}
          </Query>
        </Inner>
      </>
    )
  }
}

export default UpdateClient
export { UPDATE_CLIENT_MUTATION }
