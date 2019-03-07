import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import User from './User'
import { perPage } from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($userId: ID!) {
    clientsConnection(where: { user: { id: $userId } }) {
      aggregate {
        count
      }
    }
  }
`
const Pagination = props => (
  <Query query={PAGINATION_QUERY} variables={{ userId: props.user }}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>
      const count = data.clientsConnection.aggregate.count
      const pages = Math.ceil(count / perPage)
      const page = props.page
      return (
        <PaginationStyles>
          <Link
            prefetch
            href={{ pathname: 'clients', query: { page: page - 1 } }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p className="totes">
            Page {props.page} of <span className="totalPages">{pages}</span>
          </p>
          <p className="totes">{count} Clients Total</p>
          <Link
            prefetch
            href={{ pathname: 'clients', query: { page: page + 1 } }}
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
