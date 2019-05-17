import React, { Component } from 'react'
import styled from 'styled-components'
import Error from './ErrorMessage'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'
import { postsPerPage } from '../config'
import PostsPagination from './PostsPagination'
import { format, distanceInWordsToNow } from 'date-fns'
import DeletePost from './DeletePost'
import TablePdf from './TablePdf'

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ${postsPerPage}) {
    posts(skip: $skip, first: $first, orderBy: createdAt_DESC) {
      id
      message
      file
      createdAt
      updatedAt
      user {
        id
      }
    }
  }
`
const DayView = styled.div`
  position: relative;
  width: 95%;
  display: grid;
  grid-row: 1;
  grid-column: 1;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.05);

  border-radius: 20px 20px 5px 5px;
  z-index: 500;
  overflow-y: scroll;
`
const Post = styled.div`
  flex-flow: column;
  padding: 0px 0px 60px 0;
  display: flex;
  margin: 0 40px;
  .postMessage {
    display: flex;
    padding: 10px 20px;
    margin-top: 20px;
    background: rgba(150, 150, 150, 0.1);
  }
  span {
    &:nth-child(1) {
      font-family: 'Montserrat', sans-serrif;
    }
  }
  div {
    opacity: 0.6;
    font-size: 12px;
    line-height: 10px;
  }
`
const MostRecent = styled.div`
  text-align: center;
  margin-top: 36px;
  margin-bottom: 30px;
  color: rgba(20, 110, 220, 0.7);
  span {
    border-top: 1px solid #ccc;
    opacity: 0.7;
    width: 100px;
    display: inline-block;
    margin: 0 10px 5px 10px;
  }
`

class SingleDay extends Component {
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { me } }) => {
          return (
            <DayView>
              <Query
                query={ALL_POSTS_QUERY}
                variables={{
                  skip: this.props.page * postsPerPage - postsPerPage,
                  first: 5,
                }}
              >
                {({ data, loading, error }) => {
                  if (error) return <Error error={error} />
                  if (loading) return <p>Loading...</p>
                  if (!data.posts) return null
                  return (
                    <>
                      <MostRecent>
                        <span />
                        Most Recent
                        <span />
                      </MostRecent>
                      {data.posts.map(post => (
                        <Post key={post.createdAt}>
                          <span>
                            {format(post.createdAt, 'dddd MMMM Do, YYYY ')}
                            <div>
                              {distanceInWordsToNow(post.createdAt, {
                                addSuffix: true,
                              })}
                            </div>
                          </span>
                          <DeletePost id={post.id} me={me} />
                          <span className="postMessage">{post.message}</span>
                          {TablePdf && <TablePdf file={post.file} />}
                        </Post>
                      ))}
                    </>
                  )
                }}
              </Query>
            </DayView>
          )
        }}
      </Query>
    )
  }
}

export default SingleDay
export { ALL_POSTS_QUERY }
