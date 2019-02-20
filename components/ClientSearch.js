import React, { Component } from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import styled from 'styled-components'
import { ApolloConsumer } from 'react-apollo'

import debounce from 'lodash.debounce'
import { SEARCH_CLIENTS_QUERY } from './AutoComplete'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

class ClientSearch extends Component {
  state = {
    clients: [],
    loading: false,
  }

  onChange = debounce(async (e, client) => {
    console.log('Searching...')
    this.setState({ loading: true })
    const res = await client.query({
      query: SEARCH_CLIENTS_QUERY,
      variables: { searchTerm: e.target.value },
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
                    style={{ paddingTop: '3px', marginBottom: '10px' }}
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Client Name',
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

export default ClientSearch
