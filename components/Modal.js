import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
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
// const CREATE_CLIENT_MUTATION = gql`
//   mutation CREATE_CLIENT_MUTATION(
//     $firstName: String!
//     $lastName: String!
//     $cellPhone: String!
//     $birthDay: DateTime
//     $image: String
//   ) {
//     createClient(
//       firstName: $firstName
//       lastName: $lastName
//       cellPhone: $cellPhone
//       birthDay: $birthDay
//       image: $image
//     ) {
//       id
//     }
//   }
// `

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
`
const Title = styled.h1``
const Modall = styled.div`
  background-color: #fff;
  border-radius: 25px;
  display: grid;
  grid-template-rows: 50px 1fr 80px;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  align-items: center;
  width: 500px;
  height: 500px;
  padding: 10px 25px;

  z-index: 900;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);
  .title {
    grid-column: 1/3;
    font-size: 18px;
    justify-self: center;
    color: rgba(20, 110, 220, 1);
    left: 0;
    right: 0;

    top: 0;
    position: relative;
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
  height: 40%;
  background: rgba(220, 100, 120, 1);
  color: white;
  width: 100px;
  font-size: 18px;
  z-index: 900;
  &:focus {
    outline: none;
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
  height: 40%;
  background: rgba(20, 200, 120, 1);
  color: white;
  font-size: 18px;
  z-index: 900;
  &:focus {
    outline: none;
  }
`
class Modal extends Component {
  state = {
    client: '',
    date: '',
    timeRange: '',
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
                    <h1 className="title">New Appointment</h1>
                    <form>
                      <ClientSearch />
                      <label htmlFor="reason" className="required">
                        Appointment Type:
                        <input
                          type="text"
                          id="reason"
                          name="reason"
                          placeholder="Appointment Type"
                          autoComplete="off"
                          required
                          // value={

                          // }
                          onChange={this.handleChange}
                        />
                      </label>
                    </form>
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
