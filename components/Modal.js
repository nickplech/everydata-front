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
  display: grid;
  grid-template-rows: 1fr 55px;
  grid-template-columns: 1fr;
  position: absolute;
  align-items: flex-start;
  width: 500px;
  height: 500px;
  padding: 15px 25px;
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
  grid-column: 1;
  grid-row: 1;
  justify-content: flex-end;
  border-radius: 25px 25px 0 0;
  height: 100%;
  padding: 5px 20px 0px 20px;

  p {
    margin: 10px;
    color: ${props => props.theme.blue};
    padding: 0px 0px;
    font-size: 2.2rem;
    position: relative;
  }

  h3 {
    margin: 0;
  }
`
const Cancel = styled.a`
  background-color: #fff;
  border-radius: 20px;
  display: grid;
  grid-row: 2;
  margin-left: 25px;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 60%;
  background: rgba(220, 100, 120, 1);
  color: white;
  width: 100px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  font-size: 18px;
  z-index: 900;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`

const Save = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 20px;
  display: grid;
  right: 0;
  grid-row: 2;
  cursor: pointer;
  position: absolute;
  align-items: center;
  width: 100px;
  height: 60%;
  background: rgba(20, 200, 120, 1);
  color: white;
  font-size: 18px;
  margin-right: 25px;
  transition: 0.3s;
  z-index: 900;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
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
                      <Date>
                        <p>{format(this.props.date, 'MMMM Do, YYYY')}</p>
                        <p>{this.props.time}</p>
                      </Date>
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

                      <Cancel onClick={toggleModal}>Cancel</Cancel>
                      <Save type="submit" onClick={toggleModal}>
                        Save
                      </Save>
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
