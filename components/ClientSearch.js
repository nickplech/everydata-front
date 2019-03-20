import React, { Component } from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import { ApolloConsumer } from 'react-apollo'
import { SEARCH_CLIENTS_QUERY } from './AutoComplete'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

const InputDiv = styled.div`
  border: 2px solid rgba(20, 110, 240, 1);
  border-radius: 5px;
`

const Img = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

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
      variables: { searchTerm: e.target.value, userId: this.props.id },
    })
    console.log(res)
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
                  <InputDiv>
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
                  </InputDiv>
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

export default ClientSearch
