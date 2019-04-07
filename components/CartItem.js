import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import RemoveFromCart from './RemoveFromCart'

const ConfirmationStyles = styled.li`
  padding: 0rem 0px;
  margin: 0 10px;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  color: black;

  align-items: center;
  grid-template-columns: auto 10px;
  &:hover {
    background: rgba(100, 100, 230, 0.2);
  }
  a {
    color: black;
    display: block;
    font-size: 12px;
    padding: 6px 0 0 0;
    cursor: pointer;
  }
  p {
    display: block;
    color: blue;
    margin: 0;
    font-size: 12px;
    line-height: 10px;
    padding-bottom: 12px;
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
      <p>{cartItem.time}</p>
      {/* <RemoveFromCart id={cartItem.id} /> */}
    </ConfirmationStyles>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
}

export default CartItem
