// import React from 'react'
// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'
// import Link from 'next/link'

// const POSTS_PAGINATION_QUERY = gql`
//   query POSTS_PAGINATION_QUERY {
//     postConnection {
//       aggregate {
//         count
//       }
//     }
//   }
// `
// const PostsPagination = props => {
//   return (
//     <Query query={POSTS_PAGINATION_QUERY}>
//       {({ data, loading, error }) => {
//         if (loading) return <p>Loading...</p>

//         return (
//           <Link>
//             <a className="next">View More</a>
//           </Link>
//         )
//       }}
//     </Query>
//   )
// }
// export default PostsPagination
// export { POSTS_PAGINATION_QUERY }
