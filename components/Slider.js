import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import CartStyles from './styles/CartStyles'
import ColumnTally from './ColumnTally'
import Supreme from './styles/Supreme'
import { startOfDay, format } from 'date-fns'
import styled from 'styled-components'
import CartItem from './CartItem'

const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    cartOpen @client
  }
`

const ALL_CARTITEMS_QUERY = gql`
  query ALL_CARTITEMS_QUERY {
    cartItems(orderBy: time_DESC) {
      id
      confirmationStatus
      quantity
      date
      time
      textReminder {
        id
        forTime
      }
      client {
        id
        firstName
        lastName
      }
    }
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
    border-radius: 15px 0 0 15px;
  }
  .canceled {
    background: rgba(200, 80, 90, 0.9);
  }
  .unconfirmed {
    background: grey;
    border-radius: 0 15px 15px 0;
  }
`

class Slider extends Component {
  state = {
    date: startOfDay(new Date()),
  }

  render() {
    let { date } = this.state
    return (
      <Query query={ALL_CARTITEMS_QUERY}>
        {({ data: { cartItems } }) => {
          if (!cartItems) return null
          return (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data }) => {
                // if (!data.cartOpen) {
                //   return null
                // }
                return (
                  <CartStyles open={data.cartOpen}>
                    <header>
                      <Supreme>{format(date, 'MMMM Do, YYYY')}</Supreme>
                      <ConfList>
                        <div className="flexChild">
                          <p className="confirmed">Confirmed</p>
                          <ColumnTally
                            cart={cartItems}
                            color="green"
                            name="CONFIRMED"
                          />
                          <div className="scroll">
                            <ul>
                              {cartItems.map(cartItem =>
                                cartItem.confirmationStatus === 'CONFIRMED' ? (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ) : null,
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="flexChild">
                          <p className="canceled">Canceled</p>
                          <ColumnTally
                            cart={cartItems}
                            color="red"
                            name="CANCELED"
                          />
                          <div className="scroll">
                            <ul>
                              {cartItems.map(cartItem =>
                                cartItem.confirmationStatus === 'CANCELED' ? (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ) : null,
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className="flexChild">
                          <p className="unconfirmed">Unconfirmed</p>
                          <ColumnTally
                            cart={cartItems}
                            color="grey"
                            name="UNCONFIRMED"
                          />

                          <div className="scroll">
                            <ul>
                              {cartItems.map(cartItem =>
                                cartItem.confirmationStatus ===
                                'UNCONFIRMED' ? (
                                  <CartItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                  />
                                ) : null,
                              )}
                            </ul>
                          </div>
                        </div>
                      </ConfList>
                    </header>

                    <footer />
                  </CartStyles>
                )
              }}
            </Query>
          )
        }}
      </Query>
    )
  }
}
export default Slider
export { LOCAL_STATE_QUERY, ALL_CARTITEMS_QUERY }
