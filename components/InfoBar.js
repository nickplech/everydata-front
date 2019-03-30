import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import { TOGGLE_CART_MUTATION } from './Slider'
import { CURRENT_USER_QUERY } from './User'
import { ALL_CARTITEMS_QUERY } from './Slider'
import Link from 'next/link'
import SuccessCount from './SuccessCount'
import styled from 'styled-components'
import Block from './Block'
import Slider from './Slider'

const StyledBar = styled.div`
  display: flex;
  position: relative;
  height: 44px;
  width: 100%;
  margin: 0;
  opacity: 1;
  .tab2 {
    background: purple;
    height: 44px;
    opacity: 0.8;
  }
  .tab3 {
    background: blue;
    height: 44px;
    opacity: 0.8;
  }
  button {
    width: 150px;
  }
`

const Confirmer = styled.div`
  display: flex;
  background: lightseagreen;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-size: 10px;
  padding: 5px 20px;
  position: relative;
  cursor: pointer;
  .confirmations {
    display: inline-block;
  }
`
class InfoBar extends Component {
  render() {
    return (
      <StyledBar>
        <Link href="/bulk">
          <a className="tab2">
            <Block name="Bulk Sender" />
          </a>
        </Link>
        <Link href="/schedule">
          <a className="tab3">
            <Block name="Schedule" />
          </a>
        </Link>
        <Query query={ALL_CARTITEMS_QUERY}>
          {({ data: { cartItems } }) => (
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <Confirmer onClick={toggleCart}>
                  <span className="confirmations">Confirmations</span>
                  <SuccessCount
                    count={
                      cartItems &&
                      cartItems.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0,
                      )
                    }
                  />
                </Confirmer>
              )}
            </Mutation>
          )}
        </Query>
        <Slider />
      </StyledBar>
    )
  }
}

export default InfoBar
