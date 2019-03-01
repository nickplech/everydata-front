import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import RemoveFromCart from './RemoveFromCart'

const ConfirmationStyles = styled.li`
  padding: 0rem 10px;
  margin: 0 10px;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  color: black;
  display: grid;
  align-items: center;
  grid-template-columns: auto 10px;

  a {
    color: black;
    font-size: 12px;
    padding: 10px 0;
    &:hover {
      background: rgba(100, 100, 230, 0.2);
    }
  }
`

const CartItem = ({ cartItem }) => {
  // first check if that item exists
  if (!cartItem.client)
    return (
      <ConfirmationStyles>
        <p>This client has been deleted</p>
        <RemoveFromCart id={cartItem.id} />
      </ConfirmationStyles>
    )
  return (
    <ConfirmationStyles>
      <Link
        href={{
          pathname: '/client',
          query: { id: cartItem.client.id },
        }}
      >
        <a>
          {cartItem.client.firstName} {cartItem.client.lastName}
        </a>
      </Link>
      <RemoveFromCart id={cartItem.id} />
    </ConfirmationStyles>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
}

export default CartItem
