import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_CLIENTS_QUERY } from './Clients'

const DELETE_CLIENT_MUTATION = gql`
  mutation DELETE_CLIENT_MUTATION($id: ID!) {
    deleteClient(id: $id) {
      id
      firstName
    }
  }
`

class DeleteClient extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_CLIENTS_QUERY })
    console.log(data, payload)

    data.clients = data.clients.filter(
      client => client.id !== payload.data.deleteClient.id,
    )

    cache.writeQuery({ query: ALL_CLIENTS_QUERY, data })
  }
  render() {
    const firstName = this.props.firstName
    const lastName = this.props.lastName
    return (
      <Mutation
        mutation={DELETE_CLIENT_MUTATION}
        variables={{
          id: this.props.id,
          firstName: this.props.firstName,
        }}
        update={this.update}
      >
        {(deleteClient, { error }) => (
          <button
            onClick={() => {
              if (
                confirm(
                  `Are you sure you want to delete ${firstName} ${lastName}`,
                )
              ) {
                deleteClient().catch(err => {
                  alert(err.message)
                })
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteClient
