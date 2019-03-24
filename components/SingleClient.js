import React, { Component, Fragment } from 'react'
import { format } from 'date-fns'
import { Query } from 'react-apollo'
import Error from './ErrorMessage'
import gql from 'graphql-tag'
import Head from 'next/head'
import styled from 'styled-components'
import { SINGLE_CLIENT_QUERY } from './Clients'
import ScrollToBottomComponent from './ScrollToBottomComponent'

const ALL_CLIENTS_REMINDERS = gql`
  query ALL_CLIENTS_REMINDERS($client: ID!) {
    textReminders(client: $client, orderBy: createdAt_ASC) {
      id
      text
      createdAt
      updatedAt
      confirmationStatus
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
  background-color: white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  border-radius: 25px;
  z-index: -1;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  &:after {
    width: calc(100%);
    height: 30px;
    position: relative;
    display: flex;
    margin: 0 auto;
    content: 'Appointment Reminder Log';
    justify-content: center;
    border-bottom: 2px solid grey;
    line-height: 28px;
    color: white;
    border-radius: 20px 20px 0 0;
    padding: 2px 10px;
    background: #3d5866;
  }
`
const Lister = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 600px));
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 6px;
  background: white;
  overscroll-behavior: contain;
  overflow-y: scroll;
`
const TextChunk = styled.div`
  display: grid;
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
    grid-column: 1;
    display: inline-flex;
    font-size: 12px;
    padding: 10px 14px;
    margin: 30px 20px;
    border-radius: 10px;
    min-width: 300px;
    max-width: 600px;
  }
  .conf {
    grid-column: 2;
    display: flex;
    align-content: center;
  }
  .confirmationStatus {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
  }
`
const Nothing = styled.h2`
  display: block;
  font-size: 20px;
  margin-top: 150px;
  opacity: 0.5;
  text-align: center;
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
  color: rgba(10, 150, 10, 0.6);
`
const PR = styled.p`
  font-size: 10px;
  margin: 0;
  color: rgba(250, 50, 50, 0.6);
`
class SingleClient extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.myRef.current.scrollIntoView()
  }

  render() {
    console.log(this.myRef)
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
                {({ data, loading, error }) => {
                  if (loading) return <p>Loading...</p>
                  if (error) return <p>Error: {error.message}</p>
                  if (data.textReminders.length < 1)
                    return (
                      <>
                        <Nothing>
                          You Haven't Sent {client.firstName} Any Reminders Yet
                        </Nothing>
                        <ScrollToBottomComponent
                          style={{
                            float: 'left',
                            clear: 'both',
                          }}
                          ref={this.myRef}
                        />
                      </>
                    )
                  return (
                    <Fragment>
                      <Head>
                        <title>
                          Client | {client.firstName} {client.lastName}
                        </title>
                      </Head>
                      <>
                        <Lister myRef={this.myRef}>
                          {data.textReminders.map(message => {
                            return (
                              <TextChunk key={message.id}>
                                <div className="message-text">
                                  {message.text}
                                </div>
                                <div className="conf">
                                  <div className="confirmationStatus">
                                    {message.confirmationStatus ===
                                      'UNCONFIRMED' && (
                                      <PU>{message.confirmationStatus}</PU>
                                    )}
                                    {message.confirmationStatus ===
                                      'CONFIRMED' && (
                                      <PG>{message.confirmationStatus}</PG>
                                    )}
                                    {message.confirmationStatus ===
                                      'CANCELED' && (
                                      <PR>{message.confirmationStatus}</PR>
                                    )}
                                    {message.updatedAt !==
                                      message.createdAt && (
                                      <P>
                                        on{' '}
                                        {format(
                                          message.updatedAt,
                                          'MMMM Do, YYYY h:mm a',
                                        )}
                                      </P>
                                    )}
                                    <P>
                                      Sent:{' '}
                                      {format(
                                        message.createdAt,
                                        'MMMM Do, YYYY h:mm a',
                                      )}
                                    </P>
                                  </div>
                                </div>
                              </TextChunk>
                            )
                          })}
                          <ScrollToBottomComponent
                            style={{
                              float: 'left',
                              clear: 'both',
                            }}
                            ref={this.myRef}
                          />
                        </Lister>
                      </>
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
