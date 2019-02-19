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
  grid-template-rows: 80px 1fr 35px;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  align-items: flex-start;
  width: 500px;
  height: 500px;
  padding: 20px 25px;
  z-index: 999;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
`

const Middle = styled.div`
  grid-row: 2;
  width: 100%;
  grid-column: 1/3;
  padding: 30px 0;
`
const StyledInput = styled.select`
  padding: 10px;
  width: 100%;
  background: transparent;
  border: 2px solid rgba(20, 110, 240, 1);
  font-size: 2rem;
  outline: none;
`

const Date = styled.div`
  align-self: center;
  grid-column: 1/3;
  grid-row: 1;
  justify-content: center;
  p {
    margin: 0;
    margin-left: 10px;
    font-size: 18px;
    display: inline-block;
    position: relative;
    color: rgba(220, 20, 20, 1);
  }
  .title {
    display: inline-block;
    font-size: 18px;
    margin: 0;
    color: rgba(20, 110, 220, 1);
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
const Line = styled.div`
  width: 100%;
  margin: 0;

  height: 3px;
  background: grey;
  grid-column: 1/3;
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
  z-index: 900;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`
const REASONS = [
  {
    name: 'Botox',
  },
  {
    name: 'Restylane',
  },
  {
    name: 'Hair Laser',
  },
  {
    name: 'Fraxel',
  },
  {
    name: 'Face Removal',
  },
]
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
                      <h1 className="title">APPOINTMENT:</h1>
                      <p>{format(this.props.date, 'MMMM Do, YYYY')}</p>
                      <h3 className="title">START TIME:</h3>
                      <p>{this.props.time}</p>
                      <Line />
                    </Date>

                    <Middle>
                      <form>
                        <label>
                          For:
                          <ClientSearch />
                        </label>
                        <label htmlFor="reason" className="required">
                          Type:
                          <StyledInput
                            type="text"
                            id="reason"
                            name="reason"
                            placeholder="Appointment Type"
                            autoComplete="off"
                            required
                            value={this.state.reason}
                            onChange={this.handleChange}
                          >
                            {REASONS.map(type => {
                              return (
                                <option key={type.name} value={type.name}>
                                  {type.name}
                                </option>
                              )
                            })}
                          </StyledInput>
                        </label>{' '}
                      </form>
                    </Middle>
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
export { OPEN_MODAL_QUERY, TOGGLE_MODAL_MUTATION }
