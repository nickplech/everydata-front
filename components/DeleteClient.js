import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_CLIENTS_QUERY } from './Clients'

const DELETE_CLIENT_MUTATION = gql`
  mutation DELETE_CLIENT_MUTATION($id: ID!) {
    deleteClient(id: $id) {
      id
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
    return (
      <Mutation
        mutation={DELETE_CLIENT_MUTATION}
        variables={{
          id: this.props.id,
        }}
        update={this.update}
      >
        {(deleteClient, { error }) => (
          <button
            onClick={() => {
              if (
                confirm(`'Are you sure you want to delete ${this.props.id}'`)
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
