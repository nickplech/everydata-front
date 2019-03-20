import React, { Component } from 'react'
import ClientStats from '../components/ClientStats'
import ReviewMessage from '../components/ReviewMessage'
import SingleClient from '../components/SingleClient'
import { Query } from 'react-apollo'
import { SINGLE_CLIENT_QUERY } from './Clients'
import styled from 'styled-components'

const SingleClientStyles = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(420px, 1fr);
  grid-template-rows: minmax(300px, 1fr) 260px;
  height: calc(100vh - 140px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 125px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  bottom: 0;
  z-index: -1;
`

class TextWindow extends Component {
  render() {
    return (
      <Query query={SINGLE_CLIENT_QUERY} variables={{ id: this.props.id }}>
        {({ data: { client } }) => {
          return (
            <SingleClientStyles>
              <ClientStats id={this.props.id} />
              <SingleClient id={this.props.id} />
              <ReviewMessage id={this.props.id} cellPhone={client.cellPhone} />
            </SingleClientStyles>
          )
        }}
      </Query>
    )
  }
}

export default TextWindow
