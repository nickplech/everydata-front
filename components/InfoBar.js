import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import { TOGGLE_CART_MUTATION } from './Slider'
import { CURRENT_USER_QUERY } from './User'
import Link from 'next/link'
import SuccessCount from './SuccessCount'
import styled from 'styled-components'
import Tab from './Tab'
import Slider from './Slider'

const StyledBar = styled.div`
  display: flex;
  position: relative;
  height: 45px;
  width: 100%;
  margin: 0;
  opacity: 1;
  .tab2 {
    background: purple;
    height: 45px;
    opacity: 0.8;
  }
  .tab3 {
    background: blue;
    height: 45px;
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
            <Tab name="Bulk Sender" />
          </a>
        </Link>
        <Link href="/schedule">
          <a className="tab3">
            <Tab name="Schedule" />
          </a>
        </Link>
        <Query query={CURRENT_USER_QUERY}>
          {({ data: { me } }) => (
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <Confirmer onClick={toggleCart}>
                  <span className="confirmations">Confirmations</span>
                  <SuccessCount
                    count={me.cart.reduce(
                      (tally, cartItem) => tally + cartItem.quantity,
                      0,
                    )}
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
