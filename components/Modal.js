import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { format } from 'date-fns'
import styled from 'styled-components'
import UserProps from './ClientSearch'

const OPEN_MODAL_QUERY = gql`
  query OPEN_MODAL_QUERY {
    openModal @client
  }
`
const TOGGLE_MODAL_MUTATION = gql`
  mutation TOGGLE_MODAL_MUTATION {
    toggleModal @client
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
  display: block;
  position: absolute;
  width: 500px;
  height: 500px;
  padding: 15px 25px 15px 25px;
  z-index: 999;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
`

const StyledInput = styled.select`
  width: 100%;
  border: 2px solid rgba(20, 20, 20, 0.4);
  background: transparent;
  margin: 5px 0 20px 0;
  height: 50px;
  font-size: 2rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
  position: relative;
  z-index: 990;
  option {
    background: white;
    padding: 1rem;
    transition: all 0.2s;
    padding-left: 2rem;
    display: flex;
    align-items: center;
  }
`
const StyledTextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  background: transparent;
  font-size: 2rem;
  outline: none;
  resize: none;
  border: 2px solid rgba(20, 20, 20, 0.4);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`
const Date = styled.div`
  padding: 3px 10px;
  margin: 4px auto;
  border-width: 2px;
  border-style: solid;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 0.1);
  color: white;
  background: rgba(20, 110, 240, 1);
  color: white;
  border-color: white;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
  border-radius: 25px;
  list-style: none;
`
const SickButton = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin: 20px 0;
  float: right;
  display: flex;
  border-radius: 5px;
  font-size: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(30, 110, 240, 0.9);
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
  }
`

const SickerButton = styled.button`
  background: transparent;
  color: red;
  font-weight: 800;
  display: flex;
  position: relative;
  border: 3px solid red;
  margin: 10px 0px 10px 15px;
  border-radius: 50%;
  font-size: 2rem;
  float: right;
  padding: 0.4rem 0.8rem;
  font-size: 1.8rem;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(230, 10, 40, 0.5);
    color: white;
    border-color: white;
    transform: scale(1.1);
  }
  &:active {
    box-shadow: none;
  }
`

class Modal extends Component {
  state = {
    clients: [],
    reason: '',
    date: '',
    startTime: '',
    length: '',
    notes: '',
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
                    <form
                      onSubmit={async e => {
                        e.preventDefault()
                        await createAppointment()
                      }}
                    >
                      <SickerButton onClick={toggleModal}>&times;</SickerButton>
                      <Date>{format(this.props.date, 'MMMM Do, YYYY')}</Date>
                      <Date>{this.props.time}</Date>
                      <UserProps
                        name="clients"
                        type="search"
                        value={this.state.clients}
                        handleChange={this.handleChange}
                      />
                      <label htmlFor="reason">
                        Appointment Type:
                        <StyledInput
                          name="reason"
                          type="select"
                          multiple={false}
                          value={this.state.reason}
                          onChange={this.handleChange}
                        >
                          {this.props.reasons.map((reason, i) => (
                            <option value={reason.name} key={reason.name}>
                              {reason.name}
                            </option>
                          ))}
                        </StyledInput>
                      </label>
                      <label htmlFor="note">
                        Notes:
                        <StyledTextArea
                          name="notes"
                          type="text"
                          value={this.state.notes}
                          onChange={this.handleChange}
                        />
                      </label>
                      <SickButton type="submit" onClick={toggleModal}>
                        Save
                      </SickButton>
                    </form>
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
export { OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION }
