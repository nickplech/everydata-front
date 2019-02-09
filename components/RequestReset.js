import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
import styled from 'styled-components'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`

const Thinner = styled.div`
  max-width: 600px;
  margin: 50px auto;
`

class RequestReset extends Component {
  state = {
    email: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Thinner>
        <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
          {(requestReset, { error, loading, called }) => (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                await requestReset()
                this.setState({
                  email: '',
                })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Forgot Your Password?</h2>
                <Error error={error} />
                {!error && !loading && called && (
                  <p>Check your email for a reset link</p>
                )}
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

                <SickButton type="submit">Reset Password</SickButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </Thinner>
    )
  }
}

export default RequestReset
export { REQUEST_RESET_MUTATION }
