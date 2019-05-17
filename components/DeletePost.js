import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { ALL_POSTS_QUERY } from './SingleDay'
import Error from './ErrorMessage'

const DELETE_POST_MUTATION = gql`
  mutation DELETE_POST_MUTATION($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 2rem;
  position: relative;
  text-align: right;
  background: none;
  border: 0;
  outline: none;
  display: block;
  /* left: -30px;
  top: 56px; */
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`

class DeletePost extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: ALL_POSTS_QUERY })
    // 2. remove that item from the cart
    const postId = payload.data.deletePost.id
    data.posts = data.posts.filter(post => post.id !== postId)
    // 3. write it back to the cache
    cache.writeQuery({ query: ALL_POSTS_QUERY, data })
  }
  render() {
    return (
      <Mutation
        mutation={DELETE_POST_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          deletePost: {
            __typename: 'Post',
            id: this.props.id,
          },
        }}
      >
        {(deletePost, { loading, error }) => {
          // if (error) return <Error error={error} />
          if (!this.props.me) return null
          return (
            <BigButton
              disabled={loading}
              onClick={() => {
                if (confirm(`Are you sure? This action will be final!`)) {
                  deletePost().catch(err => {
                    alert(err.message)
                  })
                }
              }}
              title="Delete Post"
            >
              &times;
            </BigButton>
          )
        }}
      </Mutation>
    )
  }
}

export default DeletePost
export { DELETE_POST_MUTATION }
