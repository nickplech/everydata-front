import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { StepList } from './StepList'
import { Step } from './Step'
import Form from './styles/Form'
import Router from 'next/router'
import Error from './ErrorMessage'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from './User'
import SickButton from './styles/SickButton'
import MaskedInput from 'react-text-mask'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $firstName: String!
    $lastName: String!
    $cellPhone: String!
    $businessName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $plan: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      cellPhone: $cellPhone
      businessName: $businessName
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      plan: $plan
    ) {
      id
      firstName
      lastName
      cellPhone
      businessName
      email
      plan
    }
  }
`
const SignUpTitle = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto');
  color: rgba(20, 110, 220, 1);
  font-family: 'Pacifico', cursive;
  font-size: 46px;
  margin-bottom: 10px;
`

const StyledSignUpStepper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`

const ORDER_DATA = [
  {
    title: 'Test Classic Account',
    id: 'plan_Ea8mmCdhMNHxxk',
    price: 3999,
  },
  {
    title: 'Classic Account',
    id: 'plan_EW7xrpDzOE9d5I',
    price: 3999,
  },

  {
    title: 'HIPAA Compliant',
    id: '3',
    price: 1000,
  },
]
class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    cellPhone: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          cellPhone: this.state.cellPhone,
          businessName: this.state.businessName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          plan: this.state.plan,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading, called }) => (
          <StyledSignUpStepper>
            <SignUpTitle>Create an Account</SignUpTitle>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                await signup()
                this.setState({
                  firstName: '',
                  lastName: '',
                  cellPhone: '',
                  businessName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  plan: '',
                })
                Router.push({
                  pathname: '/welcome',
                })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <Error error={error} />
                {/* {!error && !loading && called && (
                  <Submitted>
                    Submitted! Welcome to Perfect Day Reminders, please log in
                    to begin your Free Trial
                  </Submitted>
                )} */}
                <StepList>
                  <Step>
                    <h3 style={{ textAlign: 'center' }}>
                      A Little About Your Business
                    </h3>
                    <label htmlFor="firstName">
                      First Name
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Account Holder's First Name"
                        required
                        value={
                          this.state.firstName.charAt(0).toUpperCase() +
                          this.state.firstName.slice(1).trim()
                        }
                        onChange={this.saveToState}
                      />
                    </label>
                    <label htmlFor="lastName">
                      Last Name
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Account Holder's Last Name"
                        required
                        value={
                          this.state.lastName.charAt(0).toUpperCase() +
                          this.state.lastName.slice(1).trim()
                        }
                        onChange={this.saveToState}
                      />
                    </label>{' '}
                    <label htmlFor="cellPhone">
                      Cell Phone Number
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
                  </Step>
                  <Step>
                    <h3 style={{ textAlign: 'center' }}>
                      Choose Your Login Credentials
                    </h3>

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
                  </Step>
                  <Step>
                    <label htmlFor="plan">
                      Select Which Plan Works for You:
                      <select
                        style={{ paddingTop: '3px', margin: '30px 0px' }}
                        type="text"
                        name="plan"
                        placeholder="Appointment Type"
                        autoComplete="off"
                        required
                        value={this.state.plan}
                        onChange={this.saveToState}
                      >
                        {ORDER_DATA.map(plans => {
                          return (
                            <option key={plans.id} value={plans.id}>
                              {plans.title}
                            </option>
                          )
                        })}
                      </select>
                    </label>
                    <SickButton style={{ float: 'right' }} type="submit">
                      Sign Up!
                    </SickButton>
                  </Step>
                </StepList>
              </fieldset>
            </Form>
          </StyledSignUpStepper>
        )}
      </Mutation>
    )
  }
}

export default Signup
export { SIGNUP_MUTATION }
