import React, { Component, Fragment } from 'react'
import { format } from 'date-fns'
import { Query } from 'react-apollo'
import Error from './ErrorMessage'
import gql from 'graphql-tag'
import Head from 'next/head'
import styled from 'styled-components'
import { SINGLE_CLIENT_QUERY } from './Clients'

const GridSub = styled.div`
  display: grid;
  background: #3d5866;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 25px;
  z-index: -1;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Lister = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  background: white;
  overscroll-behavior: contain;
  overflow-y: scroll;
`
const TextChunk = styled.div`
  display: flex;
  min-height: 170px;
  border-top: 1.5px solid rgba(220, 220, 220, 0.4);
  padding-left: 20px;
  &:first-child {
    margin-top: 30px;
    border-top: none;
  }
  .message-text {
    background: rgba(220, 220, 220, 0.8);
    font-family: 'Montserrat', sans-serif;
    color: black;
    display: inline-flex;
    align-self: center;
    font-size: 12px;
    padding: 10px 14px;
    border-radius: 10px;
    min-width: 300px;
    max-width: 600px;
  }
  .conf {
    display: inline-flex;
    padding: 0 0 0 40px;
    justify-content: center;
    flex-direction: column;
  }
`
const Nothing = styled.h2`
  display: block;
  font-size: 20px;
  margin: 10px 0 0 25px;
  color: white;
  text-align: left;
`
const P = styled.p`
  font-size: 10px;
  opacity: 0.7;
  margin: 0;
`
const PU = styled.p`
  font-size: 10px;
  margin: 0;
  color: rgba(50, 50, 50, 0.6);
`
const PG = styled.p`
  font-size: 10px;
  margin: 0;
  color: rgba(10, 180, 10, 0.8);
`
const PR = styled.p`
  font-size: 10px;
  margin: 0;
  color: rgba(250, 50, 50, 0.8);
`
const Color = styled.span`
  color: rgba(210, 210, 240, 1);
`

class SingleClient extends Component {
  render() {
    return (
      <GridSub>
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
              <>
                <Head>
                  <title>
                    Submission | {client.firstName} {client.lastName}
                  </title>
                </Head>
                <div>
                  <Nothing>
                    <Color>Name:</Color> {client.fullName}
                  </Nothing>
                  <Nothing>
                    <Color>Phone:</Color> {client.cellPhone}
                  </Nothing>
                  <Nothing>
                    <Color>Email:</Color> {client.email}
                  </Nothing>
                </div>
              </>
            )
          }}
        </Query>
      </GridSub>
    )
  }
}

export default SingleClient
export { SINGLE_CLIENT_QUERY }
