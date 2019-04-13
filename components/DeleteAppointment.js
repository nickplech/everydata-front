import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
// import { ALL_CARTITEMS_QUERY } from './Slider'

const DELETE_APPOINTMENT_MUTATION = gql`
  mutation DeleteAppointment($id: ID!) {
    DeleteAppointment(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 1rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`

class DeleteAppointment extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: ALL_CARTITEMS_QUERY })
    // 2. remove that item from the cart
    const cartItemId = payload.data.deleteAppointment.id
    data.cartItems = data.cartItems.filter(
      cartItem => cartItem.id !== cartItemId,
    )
    // 3. write it back to the cache
    cache.writeQuery({ query: ALL_CARTITEMS_QUERY, data })
  }
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          deleteAppointment: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(deleteAppointment, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              DeleteAppointment().catch(err => alert(err.message))
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    )
  }
}

export default DeleteAppointment
export { DELETE_APPOINTMENT_MUTATION }
