import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { format } from 'date-fns'
import DeleteClient from './DeleteClient'
import ClientStyles from './styles/ClientStyles'

export default class Client extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
  }

  render() {
    const { client } = this.props
    return (
      <ClientStyles>
        <div className="buttonList">
          <Link
            href={{
              pathname: '/client',
              query: { id: client.id },
            }}
          >
            <a>
              {client.lastName}, {client.firstName}
            </a>
          </Link>

          <p>{client.cellPhone}</p>
          <p>{format(client.birthDay, 'MMMM Do, YYYY')}</p>
          <Link
            href={{
              pathname: 'update',
              query: { id: client.id },
            }}
          >
            <button>Edit</button>
          </Link>
          <DeleteClient
            user={this.props.user}
            firstName={client.firstName}
            lastName={client.lastName}
            id={client.id}
          >
            Delete{' '}
          </DeleteClient>
        </div>
      </ClientStyles>
    )
  }
}
