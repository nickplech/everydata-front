import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'

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
      }}
    >
      {(deleteClient, { error }) => (
        <a
          onClick={() => {
            if (
              confirm(
                `Are you sure you want to delete ${firstName} ${lastName}`,
              )
            ) {
              deleteClient().catch(
                err => {
                  alert(err.message)
                },
                Router.push({
                  pathname: '/',
                }),
              )
            }
          }}
        >
          {props.children}
        </a>
      )}
    </Mutation>
  )
}

export default DeleteClient
