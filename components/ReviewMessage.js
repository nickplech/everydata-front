import React, { Component } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import DaySelector from './DaySelector'
import { format, setHours } from 'date-fns'
import Timer from './Timer'
import Submitted from './Submitted'
import { SINGLE_CLIENT_QUERY } from './Clients'
import { ALL_CLIENTS_REMINDERS } from './SingleClient'
import User from './User'
import Error from './ErrorMessage'
import { ALL_CARTITEMS_QUERY } from './Slider'

const SEND_TEXT_MUTATION = gql`
  mutation SEND_TEXT_MUTATION(
    $to: String!
    $text: String!
    $client: ID!
    $confirmationStatus: String!
    $forDate: String!
    $forTime: String!
  ) {
    createTextReminder(
      to: $to
      text: $text
      client: $client
      confirmationStatus: $confirmationStatus
      forDate: $forDate
      forTime: $forTime
    ) {
      confirmationStatus
      id
      text
      forDate
      forTime
      user {
        id
      }
      client {
        id
      }
    }
  }
`

const TEXT_TEMPLATES_QUERY = gql`
  query TEXT_TEMPLATES_QUERY {
    textTemplates {
      id
      name
      content
    }
  }
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 280px 10px 1fr 100px;
  grid-template-rows: 70px 1fr;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  z-index: 5;
  border-radius: 20px;
  border: 5px solid white;
  box-shadow: 1px 0 4px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(240, 240, 240, 1);
`

const CharCount = styled.p`
  font-size: 11px;
  grid-column: 3;
  grid-row: 2;
  justify-self: flex-end;
  margin: 2px 0;
  z-index: 100;
`

const Message = styled.textarea`
  grid-column: 3;
  grid-row: 2;
  position: relative;
  z-index: 6;
  margin: 0 10px;
  font-family: 'Montserrat', sans-serif;
  color: rgba(20, 20, 20, 0.7);
  width: 100%;
  min-width: 250px;
  padding: 10px;
  height: 100%;
  line-height: 22px;
  max-height: 140px;
  border-radius: 10px;
  font-size: 1.5rem;
  resize: none;
  border: none;
  background: rgba(250, 250, 250, 1);
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.05);
  &:focus {
    outline: none;
  }
  span {
    color: blue;
  }
`

const Send = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: none;
  width: 75px;
  font-size: 2rem;
  grid-column: 4;
  grid-row: 2;
  justify-self: flex-end;
  height: 35px;
  font-size: 1.8rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  &:active {
    box-shadow: none;
  }

  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    transform: scale(1.1);
  }
`

const MessageBody = props => (
  <User>
    {({ data: { me } }) => {
      const business = me.businessName.toString()
      const phone = me.cellPhone.toString()
      return (
        <Query query={SINGLE_CLIENT_QUERY} variables={{ id: props.id }}>
          {({ loading, error, data: { client } }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <Error error={error} />
            if (!client) return null
            return (
              <Query query={TEXT_TEMPLATES_QUERY}>
                {({ data }) => {
                  const seed = data.textTemplates[0].content
                    .replace('<business>', business)
                    .replace('<phone>', phone)
                  return (
                    <ReviewMessage
                      client={client.id}
                      seededMessage={seed}
                      cellPhone={client.cellPhone}
                    />
                  )
                }}
              </Query>
            )
          }}
        </Query>
      )
    }}
  </User>
)

class ReviewMessage extends Component {
  state = {
    time: '',
    text: this.props.seededMessage,
    date: '',
  }

  saveToState = e => {
    const { value } = e.target
    this.setState({ date: value })
    const date = format(value, 'ddd, MMM Do')
    const time = this.state.time.length > 0 ? this.state.time : '<time>'
    let str = this.props.seededMessage

    const mapObj = {
      '<date>': `${date}`,
      '<time>': `${time}`,
    }
    const re = new RegExp(Object.keys(mapObj).join('|'), 'gi')
    str = str.replace(re, function(matched) {
      return mapObj[matched]
    })
    this.setState({ text: str })
  }

  saveTime = e => {
    const { name } = e.target
    this.setState({ time: name })
    const date =
      this.state.date.length > 7
        ? format(this.state.date, 'ddd, MMM Do')
        : '<date>'
    let str = this.props.seededMessage
    let time = name
    const mapObj = {
      '<date>': `${date}`,
      '<time>': `${time}`,
    }
    const re = new RegExp(Object.keys(mapObj).join('|'), 'gi')
    str = str.replace(re, function(matched) {
      return mapObj[matched]
    })
    this.setState({ text: str })
  }

  saveTimeMin = e => {
    const { value } = e.target
    let built = this.state.time.replace(/(00|15|30|45)/, `${value}`)
    this.setState({ time: built })

    const date =
      this.state.date.length > 7
        ? format(this.state.date, 'ddd, MMM Do')
        : '<date>'
    let str = this.props.seededMessage
    const mapObj = {
      '<date>': `${date}`,
      '<time>': `${built}`,
    }
    const re = new RegExp(Object.keys(mapObj).join('|'), 'gi')
    str = str.replace(re, function(matched) {
      return mapObj[matched]
    })
    this.setState({ text: str })
  }

  render() {
    const tooLong = this.state.text.length > 159
    const needsDate = this.state.date.length < 2
    const needsTime = this.state.time.length < 1

    return (
      <Mutation
        mutation={SEND_TEXT_MUTATION}
        variables={{
          to: this.props.cellPhone.toString(),
          text: this.state.text,
          client: this.props.client,
          confirmationStatus: 'UNCONFIRMED',
          forDate: this.state.date,
          forTime: this.state.time,
        }}
        refetchQueries={[
          {
            query: ALL_CLIENTS_REMINDERS,
            variables: { client: this.props.client },
          },
          {
            query: ALL_CARTITEMS_QUERY,
          },
        ]}
      >
        {(createTextReminder, { error, loading, called }) => {
          if (error) return <Error error={error} />

          return (
            <Form
              onSubmit={async e => {
                e.preventDefault()
                const res = await createTextReminder()
                console.log(res)
              }}
            >
              {!loading && !error && called && <Submitted />}
              <>
                <Timer
                  saveTime={this.saveTime}
                  time={this.state.time}
                  saveTimeMin={this.saveTimeMin}
                />
                <DaySelector saveToState={this.saveToState} />

                <Message
                  readOnly
                  name="text"
                  value={this.state.text}
                  onChange={this.saveToState}
                />
                <CharCount>{this.state.text.length} of 160</CharCount>

                <Send
                  disabled={loading || tooLong || needsDate || needsTime}
                  aria-busy={loading}
                  type="submit"
                >
                  Send
                </Send>
              </>
            </Form>
          )
        }}
      </Mutation>
    )
  }
}
export default MessageBody
export { TEXT_TEMPLATES_QUERY, SEND_TEXT_MUTATION }
