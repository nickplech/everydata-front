import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from './User'
import SickButton from './styles/SickButton'

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`

const Inner = styled.div`
  text-align: left;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
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

class Reset extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  }
  state = {
    password: '',
    confirmPassword: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Inner>
        <Mutation
          mutation={RESET_MUTATION}
          variables={{
            resetToken: this.props.resetToken,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
          }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(reset, { error, loading, called }) => (
            <Form
              style={{ margin: '50px auto' }}
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                await reset()
                this.setState({ password: '', confirmPassword: '' })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Reset Your Password</h2>
                <Error error={error} />
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

                <SickButton type="submit">Reset Your Password</SickButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </Inner>
    )
  }
}

export default Reset
