import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Client from './Client'
import Pagination from './Pagination'
import { perPage } from '../config'
import Error from './ErrorMessage'

const SINGLE_CLIENT_QUERY = gql`
  query SINGLE_CLIENT_QUERY($id: ID!) {
    client(where: { id: $id }) {
      id
      firstName
      lastName
      cellPhone
      birthDay
    }
  }
`

const ALL_CLIENTS_QUERY = gql`
  query ALL_CLIENTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    clients(first: $first, skip: $skip, orderBy: lastName_ASC) {
      id
      firstName
      lastName
      cellPhone
      birthDay
      image
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
  grid-gap: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 0px;
  overflow-y: scroll;
  padding-bottom: 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`

class Clients extends Component {
  render() {
    return (
      <React.Fragment>
        <List>
          <Pagination page={this.props.page} />
          <Query
            query={ALL_CLIENTS_QUERY} // fetchPolicy=
            variables={{ skip: this.props.page * perPage - perPage, first: 19 }}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                <Clientlisting>
                  {data.clients.map(client => (
                    <Client client={client} key={client.id} />
                  ))}
                </Clientlisting>
              )
            }}
          </Query>
          <Pagination page={this.props.page} />
        </List>
      </React.Fragment>
    )
  }
}

export default Clients
export { ALL_CLIENTS_QUERY, SINGLE_CLIENT_QUERY }
