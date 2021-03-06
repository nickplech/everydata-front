import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User'
import Link from 'next/link'
import styled from 'styled-components'
import SickButton from './styles/SickButton'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      businessName
      email
    }
  }
`
const Margin = styled.div`
  margin: 15px 25px;
`

const StyledP = styled.p`
  margin-bottom: 0;
  margin-top: 20px;
  cursor: pointer;
`

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Margin>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => {
            return (
              <>
                <Form
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault()
                    await signin()
                    this.setState({
                      email: '',
                      password: '',
                    })
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Admin Login</h2>
                    <Error error={error} />
                    <label htmlFor="email">
                      Email
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
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
                        value={this.state.password}
                        onChange={this.saveToState}
                      />
                    </label>

                    <SickButton type="submit">Sign In</SickButton>
                  </fieldset>
                </Form>
              </>
            )
          }}
        </Mutation>
      </Margin>
    )
  }
}

export default SignIn
export { SIGNIN_MUTATION }
