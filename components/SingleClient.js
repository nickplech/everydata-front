import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import MessageList from './MessageList'
import { Query } from 'react-apollo'
import Head from 'next/head'
import styled from 'styled-components'

const SINGLE_CLIENT_QUERY = gql`
  query SINGLE_CLIENT_QUERY($id: ID!) {
    client(where: { id: $id }) {
      id
      firstName
      lastName
      cellPhone
      birthDay
      image
    }
  }
`
const StyledTitle = styled.h2`
  margin: 0 auto;
  text-align: center;
  line-height: 28px;
  color: rgba(100, 120, 240, 1);
`

const Hr = styled.hr`
  margin-top: 1px;
  opacity: 0.2;
  border: 1px solid grey;
`

class SingleClient extends Component {
  render() {
    return (
      <Query
        query={SINGLE_CLIENT_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <Error error={error} />
          if (!data.client) return <p>No Client Found for {this.props.id}</p>
          const client = data.client
          return (
            <Fragment>
              <Head>
                <title>
                  Client | {client.firstName} {client.lastName}
                </title>
              </Head>
              <div>
                <StyledTitle>Appointment Reminder Log</StyledTitle>
                <Hr />
                <MessageList id={this.props.id} />
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default SingleClient
export { SINGLE_CLIENT_QUERY }
