import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import styled from 'styled-components'
// import SickButton from './styles/SickButton'
import MaskedInput from 'react-text-mask'
import Error from './ErrorMessage'

const OPEN_MODAL_QUERY = gql`
  query OPEN_MODAL_QUERY {
    openModal @client
  }
`
const TOGGLE_MODAL_MUTATION = gql`
  mutation TOGGLE_MODAL_MUTATION {
    toggleModal @client
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
      email
      firstName
      lastName
      image
    }
  }
`
const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`

const SickButton = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin: 20px 0;

  border-radius: 5px;
  font-size: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(30, 110, 240, 0.9);
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
  }
`

const SickerButton = styled.div`
  background: transparent;
  color: rgba(240, 100, 100, 0.7);
  font-weight: 800;
  display: flex;
  position: absolute;
  top: -60px;
  right: -40px;
  border: 3px solid rgba(240, 100, 100, 0.7);
  margin: 0px 0px 10px 5px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  height: 35px;
  width: 35px;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(230, 10, 40, 0.5);
    color: white;
    border-color: white;
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
  }
  &:after {
    content: 'x';
  }
`

const Modall = styled.form`
  background-color: #fff;
  border-radius: 28px;
  display: block;
  position: absolute;
  width: 500px;
  padding: 5px;

  z-index: 999;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: white;
  z-index: 999;
  padding: 30px 30px;
  margin: 0px 15px;

  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 25px;
  font-weight: 600;
  position: relative;
  height: 480px;
  label {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: rgba(20, 110, 240, 0.8);
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    border-radius: 5px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 0.8rem;
    &:focus {
      outline: 0;
      border: 2px solid rgba(20, 110, 220, 0.5);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 1rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-bottom: 10px;

      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #272ebd 0%,
        #0980cd 50%,
        #272ebd 100%
      );
    }
  }
`

class Modal extends Component {
  state = {
    firstName: '',
    lastName: '',
    cellPhone: '',
    businessName: '',
    email: '',
    image: '../static/img/profpic.jpg',
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  render() {
    return (
      <Mutation mutation={TOGGLE_MODAL_MUTATION}>
        {toggleModal => (
          <Query query={OPEN_MODAL_QUERY}>
            {({ data }) => {
              if (!data.openModal) {
                return null
              }
              return (
                <Mutation
                  mutation={CREATE_CLIENT_MUTATION}
                  variables={{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    cellPhone: this.state.cellPhone,
                    businessName: this.state.businessName,
                    email: this.state.email,
                    image: this.state.image,
                  }}
                >
                  {(createClient, { error, loading, called }) => {
                    return (
                      <BackDrop>
                        <Modall
                          onSubmit={async e => {
                            e.preventDefault()
                            await createClient()

                            await this.setState({
                              firstName: '',
                              lastName: '',
                              cellPhone: '',
                              businessName: '',
                              email: '',
                              image: '',
                            })
                            await toggleModal()
                            Router.push({
                              pathname: '/welcome',
                            })
                          }}
                        >
                          <SickerButton onClick={toggleModal} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <Error error={error} />
                            <label htmlFor="firstName">
                              First Name
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
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
                                name="lastName"
                                placeholder="Last Name"
                                required
                                value={
                                  this.state.lastName.charAt(0).toUpperCase() +
                                  this.state.lastName.slice(1).trim()
                                }
                                onChange={this.handleChange}
                              />
                            </label>{' '}
                            <label htmlFor="cellPhone">
                              Phone Number
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
                                type="email"
                                name="email"
                                placeholder="email@address.com"
                                required
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                            </label>
                            <label htmlFor="businessName">
                              Business Name
                              <input
                                type="text"
                                name="businessName"
                                placeholder="Your Company Name"
                                required
                                value={this.state.businessName}
                                onChange={this.handleChange}
                              />
                            </label>{' '}
                          </fieldset>
                          <SickButton type="submit" name="submit">
                            Submit
                          </SickButton>
                        </Modall>
                      </BackDrop>
                    )
                  }}
                </Mutation>
              )
            }}
          </Query>
        )}
      </Mutation>
    )
  }
}

export default Modal
export { OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION, CREATE_CLIENT_MUTATION }
