import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Error from './ErrorMessage'
import SickButton from './styles/SickButton'
import { UPDATE_PERMISSIONS_MUTATION } from './Permissions'
import User from './User'

// const UPDATE_USER_MUTATION = gql`
//   mutation updateProfile(
//     $userId: ID!
//     $name: String
//     $businessName: String!
//     $email: String!
//   ) {
//     updateUser(
//       userId: $userId
//       name: $name
//       businessName: $businessName
//       email: $email
//     ) {
//       id
//       name
//       businessName
//       email
//     }
//   }
// `

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

class UpdateUserProfile extends Component {
  state = {
    name: '',
    businessName: '',
    email: '',
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  updatePermissions = async (e, updateUserPermissions) => {
    e.preventDefault()
    const res = await updateUserPermissions({
      variables: {
        name: '',
        businessName: '',
        email: '',
        permissions: this.props.permissions,
        userId: this.props.id,
      },
    })
    Router.push({
      pathname: '/schedule',
      // query: { id: res.data.updateClient.id },
    })
  }

  render() {
    return (
      <Inner>
        <User>
          {({ data: { me } }) => (
            <Mutation
              mutation={UPDATE_PERMISSIONS_MUTATION}
              variables={{
                name: '',
                businessName: '',
                email: '',
                permissions: this.props.permissions,
                userId: this.props.id,
              }}
            >
              {(updatePermissions, { loading, error }) => (
                <Form
                  onSubmit={e => this.updatePermissions(e, updatePermissions)}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="firstName">
                      Name on Account:
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        defaultValue={me.name}
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
                        defaultValue={me.businessName}
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
                        defaultValue={me.email}
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
          )}
        </User>
      </Inner>
    )
  }
}

export default UpdateUserProfile
export { UPDATE_USER_MUTATION }
