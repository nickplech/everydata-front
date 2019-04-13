import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_CLIENTS_QUERY } from './Clients'
import { PAGINATION_QUERY } from './Pagination'

const DELETE_CLIENT_MUTATION = gql`
  mutation DELETE_CLIENT_MUTATION($id: ID!) {
    deleteClient(id: $id) {
      id
      firstName
    }
  }
`

const DeleteClient = props => {
  const firstName = props.firstName
  const lastName = props.lastName
  return (
    <Mutation
      mutation={DELETE_CLIENT_MUTATION}
      variables={{
        id: props.id,
        firstName: firstName,
      }}
      refetchQueries={[
        { query: ALL_CLIENTS_QUERY, variables: { user: props.user.id } },
        { query: PAGINATION_QUERY, variables: { userId: props.user.id } },
      ]}
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
          {props.children}
        </button>
      )}
    </Mutation>
  )
}

export default DeleteClient
