import React, { Component } from 'react'
import ClientStats from '../components/ClientStats'

import SingleClient from '../components/SingleClient'

import styled from 'styled-components'

const SingleClientStyles = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(420px, 1fr);
  grid-template-rows: minmax(300px, 1fr);
  height: calc(100vh - 80px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 65px;
  grid-column-gap: 8px;

  bottom: 0;
  z-index: -1;
`

class TextWindow extends Component {
  render() {
    return (
      <SingleClientStyles>
        <ClientStats id={this.props.id} />

        <SingleClient id={this.props.id} />
      </SingleClientStyles>
    )
  }
}

export default TextWindow
