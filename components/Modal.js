import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { format } from 'date-fns'
import styled from 'styled-components'
import ClientSearch from './ClientSearch'

const OPEN_MODAL_QUERY = gql`
  query {
    openModal @client
  }
`
const TOGGLE_MODAL_MUTATION = gql`
  mutation {
    toggleModal @client
  }
`

const SINGLE_REASON_QUERY = gql`
  query SINGLE_REASON_QUERY($id: ID!) {
    reason(id: $id) {
      id
      name
      color
    }
  }
`
const ALL_REASONS_QUERY = gql`
  query ALL_REASONS_QUERY {
    reasons(orderBy: createdAt_DESC) {
      id
      name
      color
    }
  }
`

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`

const Modall = styled.div`
  background-color: #fff;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 120px 1fr 35px;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  align-items: flex-start;
  width: 500px;
  height: 500px;
  padding: 0px 0px 25px 0px;
  z-index: 999;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
`

const Middle = styled.div`
  grid-row: 2;
  width: 100%;
  grid-column: 1/3;
  padding: 30px 20px;
  border-top: 3px solid grey;
`
const StyledInput = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 2rem;
  outline: none;
`
const StyledTextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  background: transparent;
  font-size: 2rem;
  outline: none;
  resize: none;
  border: 2px solid rgba(220, 220, 220, 1);

  &:focus {
    outline: none;
  }
`
const Date = styled.div`
  align-self: center;
  grid-column: 1/3;
  grid-row: 1;
  justify-content: center;
  border-radius: 25px 25px 0 0;
  background: rgba(20, 110, 220, 1);
  overflow: hidden;
  height: 100%;
  padding: 5px 20px 0px 20px;
  p {
    margin: 0;
    font-size: 18px;
    position: relative;
    color: white;
  }
  .title {
    display: flex;
    font-size: 18px;
    margin: 0;
    color: white;
    position: relative;
  }
  h3 {
    margin: 0;
  }
`
const Cancel = styled.button`
  background-color: #fff;
  border-radius: 5px;
  display: grid;
  grid-row: 3;
  grid-column: 2;
  position: relative;
  align-items: center;
  justify-self: flex-start;
  height: 100%;
  background: rgba(220, 100, 120, 1);
  color: white;
  width: 100px;
  font-size: 18px;
  z-index: 900;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`

const Save = styled.button`
  background-color: #fff;
  border-radius: 5px;
  display: grid;
  grid-column: 2;
  grid-row: 3;
  justify-self: flex-end;
  position: relative;
  align-items: center;
  width: 100px;
  height: 100%;
  background: rgba(20, 200, 120, 1);
  color: white;
  font-size: 18px;
  margin-right: 25px;
  z-index: 900;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`

class Modal extends Component {
  state = {
    client: '',
    reason: '',
    date: '',
    startTime: '',
    length: '',
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  render() {
    return (
      <Mutation mutation={TOGGLE_MODAL_MUTATION}>
        {toggleModal => (
          <Query query={OPEN_MODAL_QUERY}>
            {({ data }) => {
              if (!data.openModal) {
                return null
              }
              return (
                <BackDrop>
                  <Modall>
                    <Date>
                      <h1 className="title">Appointment</h1>
                      <p>{format(this.props.date, 'MMMM Do, YYYY')}</p>
                      <p>{this.props.time}</p>
                    </Date>
                    <Query query={ALL_REASONS_QUERY}>
                      {({ data: { reasons } }) => {
                        return (
                          <Middle>
                            <form>
                              <label>
                                For:
                                <ClientSearch />
                              </label>

                              <label htmlFor="reason" className="required">
                                Type:
                                <StyledInput
                                  style={{
                                    paddingTop: '3px',
                                    marginBottom: '10px',
                                  }}
                                  type="text"
                                  id="reason"
                                  name="reason"
                                  placeholder="Appointment Type"
                                  autoComplete="off"
                                  required
                                  value={this.state.reason}
                                  onChange={this.handleChange}
                                >
                                  {reasons.map(reason => {
                                    return (
                                      <option
                                        key={reason.name}
                                        value={reason.name}
                                      >
                                        {reason.name}
                                      </option>
                                    )
                                  })}
                                </StyledInput>
                              </label>
                              <label htmlFor="note">
                                Notes:
                                <StyledTextArea />
                              </label>
                            </form>
                          </Middle>
                        )
                      }}
                    </Query>
                    <Cancel onClick={toggleModal}>Cancel</Cancel>
                    <Save onClick={toggleModal}>Save</Save>
                  </Modall>
                </BackDrop>
              )
            }}
          </Query>
        )}
      </Mutation>
    )
  }
}

export default Modal
export { OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION, ALL_REASONS_QUERY }
