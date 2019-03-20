import React, { Component, Fragment } from 'react'
import { format } from 'date-fns'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Head from 'next/head'
import styled from 'styled-components'
import { SINGLE_CLIENT_QUERY } from './Clients'

const ALL_CLIENTS_REMINDERS = gql`
  query ALL_CLIENTS_REMINDERS($client: ID!) {
    textReminders(client: $client, orderBy: createdAt_ASC) {
      id
      text
      createdAt
      updatedAt
      user {
        id
      }
      client {
        id
      }
    }
  }
`

const GridSub = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1;
  background-color: transparent;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 25px;
  z-index: -1;
  height: 100%;
  width: 100%;
  overscroll-behavior: contain;
  overflow: scroll;
  &:after {
    width: 100%;
    position: fixed;
    display: flex;
    margin: 0 auto;
    content: 'Appointment Reminder Log';
    justify-content: center;
    line-height: 28px;
    color: white;
    border-radius: 20px 20px 0 0;
    padding: 2px 10px;
    background: rgba(20, 110, 240, 1);
  }
`

const Lister = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  /* padding-bottom: 20px; */
  box-sizing: border-box;
  padding-left: 6px;
  overflow-y: scroll;
  background: white;
`
const TextChunk = styled.div`
  display: flex;
  align-content: center;
  margin: 0px 30px;
  padding: 0px;
  border-top: 1.5px solid rgba(220, 220, 220, 0.4);
  &:first-child {
    margin-top: 30px;
    border-top: none;
  }

  .message-text {
    align-self: center;
    background: rgba(220, 220, 220, 0.8);
    font-family: 'Montserrat', sans-serif;
    color: black;
    display: inline-flex;
    font-size: 12px;
    padding: 10px 14px;
    margin: 30px 0;
    border-radius: 8px;
    width: 40%;
    height: 80%;
    max-width: 600px;
    min-width: 300px;
    @media (min-width: 1200px) {
      font-size: 13px;
    }
  }
  .confirmationStatus {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 40px;
  }
`
const P = styled.p`
  font-size: 10px;
  opacity: 0.7;
  margin: 0;
`
const PU = styled.p`
  font-size: 10px;

  margin: 0;
  color: rgba(50, 50, 50, 0.4);
`
const PG = styled.p`
  font-size: 10px;

  margin: 0;
  color: rgba(50, 250, 50, 0.4);
`
const PR = styled.p`
  font-size: 10px;

  margin: 0;
  color: rgba(250, 50, 50, 0.4);
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
              <Query
                query={ALL_CLIENTS_REMINDERS}
                variables={{ client: this.props.id }}
              >
                {({ data }) => {
                  return (
                    <Fragment>
                      <Head>
                        <title>
                          Client | {client.firstName} {client.lastName}
                        </title>
                      </Head>
                      <div>
                        <Lister>
                          {data.textReminders.map((message, index) => {
                            return (
                              <TextChunk key={message.id}>
                                <div className="message-text">
                                  {message.text}
                                </div>
                                <div className="confirmationStatus">
                                  <P>{message.confirmationStatus}</P>
                                  <P>
                                    Sent:{' '}
                                    {format(
                                      message.createdAt,
                                      'MMMM Do, YYYY h:mm a',
                                    )}
                                  </P>
                                  {message.updatedAt !== message.createdAt && (
                                    <P>
                                      Updated:{' '}
                                      {format(
                                        message.updatedAt,
                                        'MMMM Do, YYYY h:mm a',
                                      )}
                                    </P>
                                  )}
                                </div>
                              </TextChunk>
                            )
                          })}
                        </Lister>
                      </div>
                    </Fragment>
                  )
                }}
              </Query>
            )
          }}
        </Query>
      </GridSub>
    )
  }
}

export default SingleClient
export { SINGLE_CLIENT_QUERY, ALL_CLIENTS_REMINDERS }
