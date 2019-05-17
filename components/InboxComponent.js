import React, { Component } from 'react'
import styled from 'styled-components'
import { ApolloConsumer } from 'react-apollo'
import { format, distanceInWordsToNow } from 'date-fns'
import { PAGINATION_QUERY } from './Pagination'
import posed from 'react-pose'
import Pagination from './Pagination'
import { perPage } from '../config'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const Container = posed.ul({
  notShut: {
    delayChildren: 200,
    staggerChildren: 60,
  },
  shut: { delay: 300 },
  initialPose: 'shut',
})
const P = posed.li({
  notShut: { y: 0, opacity: 1 },
  shut: { y: 20, opacity: 0 },
})

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})
const INBOX_QUERY_NEW = gql`
  query INBOX_QUERY_NEW($seen: Boolean) {
    clients(where: { seen: $seen }, orderBy: createdAt_DESC) {
      id
      fullName
      firstName
      lastName
      businessName
      cellPhone
      email
      seen
      handled
      createdAt
      updatedAt
    }
  }
`
const INBOX_QUERY_CLOSED = gql`
  query INBOX_QUERY_CLOSED($handled: Boolean) {
    clients(where: { handled: $handled }, orderBy: createdAt_DESC) {
      id
      fullName
      cellPhone
      firstName
      lastName
      businessName
      email
      seen
      handled
      createdAt
      updatedAt
    }
  }
`
const INBOX_QUERY_OPEN = gql`
  query INBOX_QUERY_OPEN($handled: Boolean) {
    clients(where: { handled: $handled }, orderBy: createdAt_DESC) {
      id
      fullName
      firstName
      lastName
      businessName
      cellPhone
      email
      seen
      handled
      createdAt
      updatedAt
    }
  }
`

const OPEN_TOTAL_QUERY = gql`
  query OPEN_TOTAL_QUERY($handled: Boolean) {
    clientsConnection(where: { handled: $handled }) {
      aggregate {
        count
      }
    }
  }
`
const CLOSED_TOTAL_QUERY = gql`
  query CLOSED_TOTAL_QUERY($handled: Boolean) {
    clientsConnection(where: { handled: $handled }) {
      aggregate {
        count
      }
    }
  }
`
const NEW_TOTAL_QUERY = gql`
  query NEW_TOTAL_QUERY($seen: Boolean) {
    clientsConnection(where: { seen: $seen }) {
      aggregate {
        count
      }
    }
  }
`
const INBOX_QUERY_TOTAL = gql`
  query INBOX_QUERY_TOTAL {
    clients(orderBy: createdAt_DESC) {
      id
      fullName
      firstName
      lastName
      businessName
      cellPhone
      email
      seen
      handled
      createdAt
      updatedAt
    }
  }
`
const UPDATE_SEEN_MUTATION = gql`
  mutation UPDATE_SEEN_MUTATION($id: ID!, $seen: Boolean) {
    updateClient(id: $id, seen: $seen) {
      id
      seen
    }
  }
`

const StatsDisplay = styled.div`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  background: white;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.05);
  z-index: 10;
  h3 {
    border-radius: 5px 5px 0px 0px;
  }
  .parent {
    display: flex;
    flex-flow: column;
    position: relative;
    right: 0px;
    align-items: flex-start;
    border-radius: 15px 15px 0 0;
    text-align: center;
    padding-left: 20px;
    margin-top: 1px;
    height: 65px;
    width: 100%;
    background: #3d5866;
  }
  .sideDate {
    display: flex;
    color: white;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    line-height: 26px;
    padding-top: 10px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .date {
    display: flex;
    text-transform: uppercase;
    margin: 0;
    color: rgba(230, 230, 230, 0.8);
    font-size: 14px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`
const DateLine = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  line-height: 16px;
  position: relative;
  .ago {
    font-size: 11px;
  }
`
const Name = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 280px;
  padding-left: 20px;
  h4 {
    margin: 0;
  }
`
const Info = styled.a`
  font-family: 'Montserrat', sans-serif;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  justify-items: flex-start;
  color: rgba(20, 20, 20, 0.4);
  margin: 0px 0;
  transition: 0.2s;
  padding: 10px 10px 10px 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(20, 110, 220, 0.2);
  width: 100%;
  text-transform: uppercase;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  &:hover {
    padding-left: 15px;
  }
  &:active {
    color: blue;
  }
`
const Number = styled.div`
  display: flex;
  font-weight: 700;
  padding-left: 10px;
  float: right;
`
const CalendarLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  height: calc(100vh - 100px);
  width: 99%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  /* right: 10px; */
margin: 0 auto;
  top: 85px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  bottom: 0;
  z-index: -1;
`
const Nothing = styled.h2`
  display: block;
  font-size: 20px;
  margin-top: 125px;
  opacity: 0.4;
  text-align: center;
`
const StyledSubStatus = styled.div`
  display: grid;
  grid-column: 2;
  background: rgba(200, 200, 200, 0.1);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  border-radius: 5px 5px 5px 5px;
  z-index: -1;
  padding: 10px 10px 10px 30px;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: scroll;
  overscroll-behavior: contain;
  ul {
    list-style: none;
    padding: 0;
  }
`
const ClientPill = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  border-radius: 5px;
  margin: 10px 0px;
  min-height: 50px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: rgba(10, 110, 220, 0.3);
  }
  &:active {
    box-shadow: none;
  }

  h5 {
    font-size: 16px;
    margin: 5px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
  span {
    font-weight: 600;
  }
  .content {
    overflow: hidden;
    font-size: 18px;
    border-radius: 5px;
    background: rgba(240, 240, 240, 1);
    color: black;
    min-width: 330px;
    width: 100%;
    margin-bottom: 0px;
  }
  .content-wrapper {
    padding: 20px 10px;
  }
`
class InboxComponent extends Component {
  state = {
    clients: [],
    seen: '',
    open: false,
    inbox: '',
    isOpen: false,
    loading: false,
  }

  // componentDidMount() {
  //   setTimeout(this.toggle, 1000)
  // }

  toggle = () => this.setState({ isOpen: true })

  saveToState = async (e, client) => {
    console.log('Searching...')
    await this.setState({ isOpen: false, clients: [], loading: true })
    const res = await client.query({
      query: INBOX_QUERY_TOTAL,
    })

    await this.setState({
      loading: false,
      clients: res.data.clients,
      inbox: 'total',
    })
    await this.toggle()
  }
  saveToState2 = async (e, client) => {
    console.log('Searching...')
    await this.setState({ isOpen: false, clients: [], loading: true })
    const res = await client.query({
      query: INBOX_QUERY_NEW,
      variables: {
        seen: false,
      },
    })

    await this.setState({
      loading: false,
      clients: res.data.clients,
      inbox: 'new',
    })

    await this.toggle()
  }
  saveToState3 = async (e, client) => {
    console.log('Searching...')
    await this.setState({ isOpen: false, clients: [], loading: true })

    const res = await client.query({
      query: INBOX_QUERY_OPEN,
      variables: {
        handled: false,
      },
    })

    await this.setState({
      loading: false,
      clients: res.data.clients,
      inbox: 'open',
    })

    await this.toggle()
  }
  saveToState4 = async (e, client) => {
    console.log('Searching...')
    await this.setState({ isOpen: false, clients: [], loading: true })

    const res = await client.query({
      query: INBOX_QUERY_CLOSED,
      variables: {
        handled: true,
      },
    })

    await this.setState({
      loading: false,
      clients: res.data.clients,
      inbox: 'closed',
    })
    await this.toggle()
  }

  updateClient = async (id, i, updateClientMutation) => {
    this.setState({ open: open === i ? false : i })
    await this.setState({
      seen: id,
    })
    console.log(this.state.seen)

    const res = await updateClientMutation({
      variables: {
        id: this.state.seen,
        seen: true,
      },
    })
    console.log(res)
  }
  render() {
    const { isOpen } = this.state
    const { open } = this.state
    return (
      <CalendarLayout>
        <StatsDisplay>
          <h3
            style={{
              color: 'white',
              margin: 0,
              background: 'rgba(20,110,240,1)',
              textTransform: 'uppercase',
            }}
          >
            Inbox
          </h3>
          <ApolloConsumer>
            {client => (
              <>
                <Query query={NEW_TOTAL_QUERY} variables={{ seen: false }}>
                  {({ data: { clientsConnection }, loading }) => {
                    if (loading) return <p>loading...</p>
                    if (!clientsConnection) return null
                    return (
                      <Info
                        value={this.state.inbox}
                        onClick={e => this.saveToState2(e, client)}
                      >
                        New{' '}
                        <Number>
                          {clientsConnection.aggregate.count &&
                            clientsConnection.aggregate.count}
                        </Number>
                      </Info>
                    )
                  }}
                </Query>{' '}
                <Info
                  value={this.state.inbox}
                  onClick={e => this.saveToState(e, client)}
                >
                  Total Leads
                  <Query query={PAGINATION_QUERY}>
                    {({ data, loading, error }) => {
                      if (loading) return <p>Loading...</p>
                      const count = data.clientsConnection.aggregate.count

                      return <Number>{count && count}</Number>
                    }}
                  </Query>{' '}
                </Info>{' '}
                <Query query={OPEN_TOTAL_QUERY} variables={{ handled: false }}>
                  {({ data: { clientsConnection }, loading }) => {
                    if (loading) return <p>loading...</p>
                    if (!clientsConnection) return null
                    return (
                      <Info
                        value={this.state.inbox}
                        onClick={e => this.saveToState3(e, client)}
                      >
                        Open
                        <Number>
                          {clientsConnection.aggregate.count &&
                            clientsConnection.aggregate.count}
                        </Number>
                      </Info>
                    )
                  }}
                </Query>
                <Query query={CLOSED_TOTAL_QUERY} variables={{ handled: true }}>
                  {({ data: { clientsConnection }, loading }) => {
                    if (loading) return <p>loading...</p>
                    if (!clientsConnection) return null
                    return (
                      <Info
                        value={this.state.inbox}
                        onClick={e => this.saveToState4(e, client)}
                      >
                        <div> Closed</div>
                        <Number>
                          {clientsConnection.aggregate.count &&
                            clientsConnection.aggregate.count}
                        </Number>
                      </Info>
                    )
                  }}
                </Query>
              </>
            )}
          </ApolloConsumer>
        </StatsDisplay>
        <Mutation
          mutation={UPDATE_SEEN_MUTATION}
          variables={{ seen: true, id: this.state.seen }}
          refetchQueries={[
            {
              query: NEW_TOTAL_QUERY,
              variables: { seen: false },
            },
            {
              query: INBOX_QUERY_NEW,
              variables: { seen: false },
            },
          ]}
        >
          {(updateClient, { loading, error }) => {
            if (loading) return <p>loading...</p>
            if (this.state.loading)
              return (
                <Nothing>
                  <p>loading...</p>
                </Nothing>
              )
            if (this.state.clients.length < 1)
              return this.state.inbox ? (
                <StyledSubStatus>
                  <Nothing>
                    There are currently no {this.state.inbox} submissions
                  </Nothing>
                </StyledSubStatus>
              ) : (
                <StyledSubStatus />
              )
            return (
              <StyledSubStatus>
                <Container pose={isOpen ? 'notShut' : 'shut'}>
                  {this.state.clients.map((client, i) => {
                    const { id } = client

                    if (client.seen === true)
                      return (
                        <P key={id}>
                          <ClientPill
                            onClick={() =>
                              this.setState({
                                open: open === i ? false : i,
                              })
                            }
                          >
                            <Name>
                              <h4>{client.fullName}</h4>
                              <DateLine>
                                {distanceInWordsToNow(client.createdAt, {
                                  addSuffix: true,
                                })}
                                <div className="ago">
                                  {format(
                                    client.createdAt,
                                    'dddd MMMM Do, YYYY ',
                                  )}
                                </div>
                              </DateLine>
                            </Name>
                            <Content
                              className="content"
                              pose={open === i ? 'open' : 'closed'}
                            >
                              <div className="content-wrapper">
                                <h5><span>First Name:</span> {client.firstName}</h5>
                                <h5> <span>Last Name:</span>  {client.lastName}</h5>
                                <h5> <span>Business:</span>  {client.businessName}</h5>
                                <h5> <span>Phone:</span>  {client.cellPhone}</h5>
                                <h5> <span>Email:</span>  {client.email}</h5>
                                <h5>
                                  <span> Submitted:</span> {' '}
                                  {format(client.createdAt, 'MMM Do, YYYY')} at{' '}
                                  {format(client.createdAt, 'h:mm a')}
                                </h5>
                              </div>
                            </Content>
                          </ClientPill>
                        </P>
                      )

                    return (
                      <P key={id}>
                        <ClientPill
                          style={{
                            background: 'rgba(20,220,110,.4',
                          }}
                          onClick={() => this.updateClient(id, i, updateClient)}
                        >
                          {' '}
                          <Name>
                            <h4>{client.fullName}</h4>
                            <DateLine>
                              {distanceInWordsToNow(client.createdAt, {
                                addSuffix: true,
                              })}
                              <div className="ago">
                                {format(
                                  client.createdAt,
                                  'dddd MMMM Do, YYYY ',
                                )}
                              </div>
                            </DateLine>
                          </Name>
                          <Content
                            className="content"
                            pose={open === i ? 'open' : 'closed'}
                          >
                            <div className="content-wrapper">
                                <h5><span>First Name:</span> {client.firstName}</h5>
                                <h5> <span>Last Name:</span>  {client.lastName}</h5>
                                <h5> <span>Business:</span>  {client.businessName}</h5>
                                <h5> <span>Phone:</span>  {client.cellPhone}</h5>
                                <h5> <span>Email:</span>  {client.email}</h5>
                                <h5>
                                  <span> Submitted:</span> {' '}
                                {format(client.createdAt, 'MMM Do, YYYY')} at{' '}
                                {format(client.createdAt, 'h:mm a')}
                              </h5>
                            </div>
                          </Content>
                        </ClientPill>
                      </P>
                    )
                  })}
                </Container>

                {/*
                <Pagination
                  saveToState={this.saveToState}
                  page={this.props.page}
                /> */}
              </StyledSubStatus>
            )
          }}
        </Mutation>
      </CalendarLayout>
    )
  }
}

export default InboxComponent
export {
  INBOX_QUERY_TOTAL,
  INBOX_QUERY_OPEN,
  INBOX_QUERY_CLOSED,
  INBOX_QUERY_NEW,
}
