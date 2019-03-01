import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!, $confirmationStatus: String!) {
    addToCart(id: $id, confirmationStatus: $confirmationStatus) {
      id
      quantity
      confirmationStatus
    }
  }
`
class AddToCart extends React.Component {
  render() {
    const { id } = this.props
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id, confirmationStatus: 'UNCONFIRMED' }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {addToCart => <button onClick={addToCart}> Add </button>}
      </Mutation>
    )
  }
}

export default AddToCart
