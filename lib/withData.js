import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { endpoint, prodEndpoint } from '../config'
import { OPEN_MODAL_QUERY } from '../components/Modal'

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      })
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleModal(_, variables, { cache }) {
            const { openModal } = cache.readQuery({
              query: OPEN_MODAL_QUERY,
            })
            const data = {
              data: { openModal: !openModal },
            }
            cache.writeData(data)
            return data
          },
        },
      },
      defaults: {
        openModal: false,
      },
    },
  })
}

export default withApollo(createClient)
