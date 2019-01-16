import React, { Component } from 'react'
import ClientStats from '../components/ClientStats'
import TextDashboard from '../components/TextDashboard'
import TextMessages from '../components/TextMessages'

import styled from 'styled-components'

const SingleClientStyles = styled.div`
  display: grid;
  grid-template-columns: 270px minmax(420px, 1fr) 300px;
  grid-template-rows: 1fr 250px;
  height: calc(100% - 140px);
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  top: 125px;
  grid-column-gap: 8px;
  bottom: 0;
  z-index: -1;
`

class TextWindow extends Component {
  render() {
    return (
      <SingleClientStyles>
        <ClientStats id={this.props.id} />
        <TextMessages id={this.props.id} />
        <TextDashboard id={this.props.id} />
      </SingleClientStyles>
    )
  }
}

export default TextWindow
