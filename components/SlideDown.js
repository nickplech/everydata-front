import React from 'react'
import { SlideDown } from 'react-slidedown'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

const OPEN_SLIDE_QUERY = gql`
  query {
    openSlide @client
  }
`
const TOGGLE_SLIDE_MUTATION = gql`
  mutation {
    toggleSlide @client
  }
`

const Wrap = styled.div`
  padding-top: 50px;
  .react-slidedown {
    height: 0;
    transition-property: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }

  .react-slidedown.transitioning {
    overflow-y: hidden;
  }

  .react-slidedown.closed {
    display: none;
  }
`

const MyDropdown = props => {
  return (
    <Query query={OPEN_SLIDE_QUERY}>
      {({ data }) => {
        if (!data.openSlide) {
          return null
        }
        return (
          <Wrap>
            <SlideDown className={'my-dropdown-slidedown'}>
              {data.openSlide ? props.children : null}
            </SlideDown>
          </Wrap>
        )
      }}
    </Query>
  )
}
export default MyDropdown
export { OPEN_SLIDE_QUERY, TOGGLE_SLIDE_MUTATION }
