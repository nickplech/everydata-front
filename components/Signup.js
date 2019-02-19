import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from './User'
import SickButton from './styles/SickButton'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $businessName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      name: $name
      businessName: $businessName
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      name
      businessName
      email
    }
  }
`

const Margin = styled.div`
  margin: 15px 25px;
`
const Submitted = styled.p`
  color: green;
  background: white;
  padding: 15px 15px;
  border-left: 5px solid green;
`

class Signup extends Component {
  state = {
    name: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{
          name: this.state.name,
          businessName: this.state.businessName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading, called }) => (
          <Margin>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                await signup()
                this.setState({
                  name: '',
                  businessName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign Up for An Account</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <Submitted>
                    Submitted! Welcome to Perfect Day Reminders, please log in
                    to begin your Free Trial
                  </Submitted>
                )}
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="businessName">
                  Business Name
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    required
                    value={this.state.businessName}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>

                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    minLength={6}
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="confirmPassword">
                  Confirm Your Password
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.saveToState}
                  />
                </label>

                <SickButton type="submit">Sign Up!</SickButton>
              </fieldset>
            </Form>
          </Margin>
        )}
      </Mutation>
    )
  }
}

export default Signup
export { SIGNUP_MUTATION }
