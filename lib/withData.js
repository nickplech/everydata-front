import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import dateFns from 'date-fns'
import { endpoint } from '../config'
import { LOCAL_STATE_QUERY } from '../components/Slider'
import { OPEN_MODAL_QUERY } from '../components/Modal'
import { LOCAL_DATE_QUERY } from '../components/CalendarStats'
import { NEW_DATE_MUTATION } from '../components/CalendarStats'

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
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
          toggleCart(_, variables, { cache }) {
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            })
            const data = {
              data: { cartOpen: !cartOpen },
            }
            cache.writeData(data)
            return data
          },
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
        cartOpen: false,
        openModal: false,
      },
    },
  })
}

export default withApollo(createClient)
