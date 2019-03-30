import React, { Component } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import DaySelector from './DaySelector'
import { format } from 'date-fns'
import Timer from './TimePicker'
import Submitted from './Submitted'
import { SINGLE_CLIENT_QUERY } from './Clients'
import { ALL_CLIENTS_REMINDERS } from './SingleClient'
import User from './User'
import { ALL_CARTITEMS_QUERY } from './Slider'

const SEND_TEXT_MUTATION = gql`
  mutation SEND_TEXT_MUTATION(
    $to: String!
    $text: String!
    $client: ID!
    $confirmationStatus: String!
    $forDate: String!
  ) {
    createTextReminder(
      to: $to
      text: $text
      client: $client
      confirmationStatus: $confirmationStatus
      forDate: $forDate
    ) {
      confirmationStatus
      id
      text
      forDate
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
  grid-template-columns: 280px 40px 1fr 100px;
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
`

const Error = styled.div`
  display: block;
  position: absolute;
  min-width: 300px;
  width: 30%;
  text-align: center;
  padding: 10px;
  background: rgba(220, 50, 20, 0.9);
  color: white;
  border-radius: 5px;
  bottom: 15px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  right: 20px;
  z-index: 999;
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
  height: 75px;
  font-size: 1.8rem;
  border-radius: 50%;
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
    time: '8:00 am',
    text: this.props.seededMessage,
    date: '',
    message: 'Appointment Reminder has Been Sent',
  }

  saveToState = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    if (name === 'date') {
      this.setState({ date: val })
    }
    if (name === 'time') {
      this.setState({ time: val })
    }
    let date = format(val, 'ddd, MMM Do')
    let time = this.state.time
    const textTemplate = this.props.seededMessage
      .replace('<date>', date)
      .replace('<time>', time)
    this.setState({ text: textTemplate })
  }

  render() {
    const tooLong = this.state.text.length > 159
    const needsDate = this.state.date.length < 2
    const needsTime = this.state.time.length < 2

    return (
      <Mutation
        mutation={SEND_TEXT_MUTATION}
        variables={{
          to: this.props.cellPhone.toString(),
          text: this.state.text,
          client: this.props.client,
          confirmationStatus: 'UNCONFIRMED',
          forDate: this.state.date,
        }}
        refetchQueries={[
          {
            query: {
              ALL_CLIENTS_REMINDERS,
            },
            variables: { client: this.props.client },
          },
        ]}
      >
        {(createTextReminder, { error, loading, called }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <Error error={error} />

          return (
            <Form
              onSubmit={async e => {
                e.preventDefault()
                const res = await createTextReminder()
                console.log(res)
              }}
            >
              {error && (
                <Error>
                  Appointment Reminder Failed to Send. Please Try Again Shortly
                </Error>
              )}
              {!error && !loading && called && (
                <Submitted message={this.state.message} />
              )}

              <>
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
