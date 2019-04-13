import React, { Component } from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import Router from 'next/router'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

const SEARCH_CLIENTS_QUERY = gql`
  query SEARCH_CLIENTS_QUERY($searchTerm: String!, $user: ID!) {
    clients(
      orderBy: updatedAt_DESC
      where: {
        AND: [{ fullName_contains: $searchTerm }, { user: { id: $user } }]
      }
    ) {
      id
      image
      firstName
      lastName
    }
  }
`
const Img = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

function routeToClient(client) {
  Router.push({
    pathname: '/client',
    query: {
      id: client.id,
    },
  })
}

class AutoComplete extends Component {
  state = {
    clients: [],
    loading: false,
  }
  onChange = debounce(async (e, client) => {
    console.log('Searching...')
    this.setState({ loading: true })
    const res = await client.query({
      query: SEARCH_CLIENTS_QUERY,
      variables: { searchTerm: e.target.value, user: this.props.user.id },
    })
    this.setState({
      clients: res.data.clients,
      loading: false,
    })
  }, 350)
  render() {
    resetIdCounter()
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToClient}
          itemToString={client =>
            client === null
              ? ''
              : client.lastName + ',' + ' ' + client.firstName
          }
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search Clients',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      spellCheck: false,
                      onChange: e => {
                        e.persist()
                        this.onChange(e, client)
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.clients.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <Img src={item.image} alt={item.firstName} />
                      {item.lastName}, {item.firstName}
                    </DropDownItem>
                  ))}
                  {!this.state.clients.length && !this.state.loading && (
                    <DropDownItem> Nothing Found for {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    )
  }
}

export default AutoComplete
export { SEARCH_CLIENTS_QUERY }
