import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import { INBOX_QUERY_TOTAL } from './InboxComponent'
import { perPage } from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    clientsConnection {
      aggregate {
        count
      }
    }
  }
`
const Pagination = props => (
  <Query
    query={PAGINATION_QUERY}
    refetchQueries={[
      {
        query: INBOX_QUERY_TOTAL,
        variables: { skip: props.page * perPage - perPage, first: 5 },
      },
    ]}
  >
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>
      const count = data.clientsConnection.aggregate.count
      const pages = Math.ceil(count / perPage)
      const page = props.page
      return (
        <PaginationStyles>
          <Link
            prefetch
            href={{ pathname: 'inbox', query: { page: page - 1 } }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p className="totes">
            Page {props.page} of <span className="totalPages">{pages}</span>
          </p>
          {/* <p className="totes">Total: {count}</p> */}
          <Link
            prefetch
            href={{ pathname: 'inbox', query: { page: page + 1 } }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      )
    }}
  </Query>
)

export default Pagination
export { PAGINATION_QUERY }
