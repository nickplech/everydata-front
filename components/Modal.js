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
  background: rgba(20, 110, 240, 0.5);
  margin: 20px 0;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  outline: none;
`
const StyledTextArea = styled.textarea`
  padding: 5px;
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
  grid-column: 1;
  grid-row: 1;
  justify-content: flex-end;
  border-radius: 25px 25px 0 0;

  overflow: hidden;
  height: 100%;
  padding: 5px 20px 0px 20px;

  p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.theme.blue};
    display: block;

    padding: 0px 0px;

    font-size: 2.2rem;
    position: relative;
  }

  h3 {
    margin: 0;
  }
`
const Cancel = styled.button`
  background-color: #fff;
  border-radius: 20px;
  display: grid;
  grid-row: 2;
  margin-left: 25px;
  position: absolute;
  left: 0;
  align-items: center;
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
// const SAMPLE = ['Fraxel', 'Hair']
class Modal extends Component {
  state = {
    selection: [],
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
  // handleSearch = () => {
  //   debounce(async (e, client) => {
  //     console.log('Searching...')
  //     this.setState({ loading: true })
  //     const res = await client.query({
  //       query: SEARCH_CLIENTS_QUERY,
  //       variables: { searchTerm: e.target.value },
  //     })
  //     this.setState({
  //       clients: res.data.clients,
  //       loading: false,
  //     })
  //   }, 350)
  // }
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
                        const res = await createAppointment()
                        console.log(res)
                      }}
                    >
                      <Date>
                        <p>{format(this.props.date, 'MMMM Do, YYYY')}</p>
                        <p>{this.props.time}</p>
                      </Date>
                      <ClientSearch />

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

                      <label htmlFor="note">
                        Notes:
                        <StyledTextArea />
                      </label>

                      <Cancel onClick={toggleModal}>Cancel</Cancel>
                      <Save onClick={toggleModal}>Save</Save>
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
