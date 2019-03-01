import React, { Component } from 'react'
import styled from 'styled-components'

const StyledPara = styled.p`
  font-family: 'Montserrat', sans-serif;
`

class ColumnTally extends Component {
  render() {
    const cart = this.props.cart
    const itemsToRender = cart.filter(
      cartItem => cartItem.confirmationStatus === `${this.props.name}`,
    )
    const filteredCol = itemsToRender.length

    return (
      <StyledPara style={{ color: `${this.props.color}` }}>
        {filteredCol} of{' '}
        {cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
      </StyledPara>
    )
  }
}

export default ColumnTally
