import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RemoveFromCart from './RemoveFromCart'

const ConfirmationStyles = styled.li`
  padding: 0.1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  p {
    color: black;
    font-size: 12px;
  }
`

const Confirms = ({ cartItem }) => {
  // first check if that item exists
  if (!cartItem.client)
    return (
      <ConfirmationStyles>
        <p>This Item has been removed</p>
        <RemoveFromCart id={cartItem.id} />
      </ConfirmationStyles>
    )
  return (
    <ConfirmationStyles>
      <div className="cart-item-details">
        <p>
          {cartItem.client.firstName} {cartItem.client.lastName}
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </ConfirmationStyles>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
}

export default Confirms
