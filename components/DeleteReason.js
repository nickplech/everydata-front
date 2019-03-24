import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { ALL_REASONS_QUERY } from './SingleDay'

const DELETE_REASON_MUTATION = gql`
  mutation deleteReason($id: ID!) {
    deleteReason(id: $id) {
      id
    }
  }
`

const BigButton = styled.a`
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  margin: 0 4px 0 10px;

  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`

class DeleteReason extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: ALL_REASONS_QUERY })
    // 2. remove that item from the cart
    const reasonId = payload.data.deleteReason.id
    data.reasons = data.reasons.filter(reason => reason.id !== reasonId)
    // 3. write it back to the cache
    cache.writeQuery({ query: ALL_REASONS_QUERY, data })
  }
  render() {
    return (
      <Mutation
        mutation={DELETE_REASON_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          deleteReason: {
            __typename: 'Reason',
            id: this.props.id,
          },
        }}
      >
        {(deleteReason, { loading, error }) => {
          return (
            <BigButton
              style={{ color: this.props.color === '#F8F8FF' && 'black' }}
              disabled={loading}
              onClick={() => {
                if (
                  confirm(`Are you sure you want to delete ${this.props.name}?`)
                ) {
                  deleteReason().catch(err => alert(err.message))
                }
              }}
              title="Delete Reason"
            >
              &times;
            </BigButton>
          )
        }}
      </Mutation>
    )
  }
}

export default DeleteReason
export { DELETE_REASON_MUTATION }
