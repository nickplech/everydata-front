import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import User from './User'

import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme'
import CloseButton from './styles/CloseButton'
import styled from 'styled-components'
import CartItem from './CartItem'

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

const ConfList = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  align-items: center;
  width: 100%;

  .flexChild {
    display: block;
    align-content: center;
    justify-content: center;
    width: 100%;
    color: white;
  }
  .scroll {
    height: 300px;
    overflow-y: scroll;
    overscroll-behavior: contain;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none; // Safari and Chrome
    }
  }
  .confirmed {
    background: rgba(100, 190, 90, 0.9);
  }
  .canceled {
    background: rgba(200, 80, 90, 0.9);
  }
  .unconfirmed {
    background: grey;
  }
`

class Slider extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => {
          if (!me) return null
          return (
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <Query query={LOCAL_STATE_QUERY}>
                  {({ data }) => (
                    <CartStyles open={data.cartOpen}>
                      <div>
                        <p>calendar</p>
                      </div>
                      <header>
                        <CloseButton
                          onClick={toggleCart}
                          title="close"
                          className="exy"
                        >
                          &times;
                        </CloseButton>
                        <Supreme>Date</Supreme>
                        <ConfList>
                          <div className="flexChild">
                            <p className="confirmed">Confirmed</p>
                            <p style={{ color: 'green' }}>{me.cart.length}</p>
                            <div className="scroll">
                              <ul>
                                {me.cart.map(cartItem => (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flexChild">
                            <p className="canceled">Canceled</p>
                            <p style={{ color: 'red' }}>{me.cart.length}</p>
                            <div className="scroll">
                              <ul>
                                {me.cart.map(cartItem => (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flexChild">
                            <p className="unconfirmed">Unconfirmed</p>
                            <p style={{ color: 'grey' }}>{me.cart.length}</p>
                            <div className="scroll">
                              <ul>
                                {me.cart.map(cartItem => (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </ConfList>
                      </header>

                      <footer>
                        <p>flash messages with date</p>
                      </footer>
                    </CartStyles>
                  )}
                </Query>
              )}
            </Mutation>
          )
        }}
      </User>
    )
  }
}
export default Slider
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION }
