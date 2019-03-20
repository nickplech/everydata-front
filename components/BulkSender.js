import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { SEARCH_CLIENTS_QUERY } from './AutoComplete'
import Select from 'react-select'

class BulkSender extends Component {
  state = { clients: [] }
  render() {
    return (
      <div>
        {/* <Query query={SEARCH_CLIENTS_QUERY} variables={this.state.searchTerm}>
          {({ data: { clients } }) => (
            <label>
              <Select
                isMulti
                name="clients"
                options={clients}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </label>
          )}
        </Query> */}
      </div>
    )
  }
}

export default BulkSender
