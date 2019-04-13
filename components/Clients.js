import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Client from './Client'
import Pagination from './Pagination'
import { perPage } from '../config'
import { CURRENT_USER_QUERY } from './User'
import Error from './ErrorMessage'

const SINGLE_CLIENT_QUERY = gql`
  query SINGLE_CLIENT_QUERY($id: ID!) {
    client(id: $id) {
      id
      firstName
      lastName
      cellPhone
      birthDay
      image
      user {
        id
      }
    }
  }
`

const ALL_CLIENTS_QUERY = gql`
  query ALL_CLIENTS_QUERY($skip: Int = 0, $first: Int = ${perPage}, $user: ID!) {
    clients(first: $first, skip: $skip, orderBy: lastName_ASC, where: {user: { id: $user }}) {
      id
      firstName
      lastName
      cellPhone
      birthDay
      image
      user {
        id
      }
    }
  }
`

const List = styled.div`
  display: grid;
  margin-top: 50px;
  margin-bottom: 50px;
  grid-template-rows: 1fr 50vh 1fr;
  position: relative;
  z-index: 0;
`

const Clientlisting = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 20px;
  background-color: rgba(20, 20, 100, 0.1);
  max-width: 100%;
  grid-gap: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 0px;

  overflow-y: scroll;
  padding-bottom: 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

class Clients extends Component {
  render() {
    return (
      <React.Fragment>
        <Query query={CURRENT_USER_QUERY}>
          {({ data: { me } }) => {
            return (
              <List>
                <Pagination user={me.id} page={this.props.page} />
                <Query
                  query={ALL_CLIENTS_QUERY}
                  variables={{
                    skip: this.props.page * perPage - perPage,
                    first: 19,
                    user: me.id,
                  }}
                >
                  {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    return (
                      <Clientlisting>
                        {data.clients.map(client => (
                          <Client user={me} client={client} key={client.id} />
                        ))}
                      </Clientlisting>
                    )
                  }}
                </Query>
                <Pagination user={me.id} page={this.props.page} />
              </List>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Clients
export { ALL_CLIENTS_QUERY, SINGLE_CLIENT_QUERY }
