import React, { Component } from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import { ApolloConsumer } from 'react-apollo'
import { SEARCH_CLIENTS_QUERY } from './AutoComplete'
import debounce from 'lodash.debounce'
import User from './User'
import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5;
  border: 1px solid ${props => props.theme.lightgrey};
  max-height: 50vh;
  overflow-y: scroll;
  z-index: 999;
`

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: white;
  padding: 1rem;
  transition: all 0.2s;
  z-index: 999;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    z-index: 999;
    font-size: 2rem;
    outline: none;

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`

const InputDiv = styled.div`
  border: 2px solid rgba(20, 20, 20, 0.4);
  border-radius: 5px;
  margin-bottom: 20px;
`

const Img = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
const UserProps = props => (
  <User>
    {({ data: { me } }) => {
      return <ClientSearch onChange={props.handleChange} user={me} />
    }}
  </User>
)

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
      variables: { searchTerm: e.target.value, user: this.props.user.id },
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

export default UserProps
