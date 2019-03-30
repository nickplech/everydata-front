import styled from 'styled-components'
import React from 'react'

import PropTypes from 'prop-types'

const ErrorStyles = styled.div`
  padding: 2rem;
  background: rgba(250, 0, 0, 0.5);
  margin: 2rem 0;
  border-left: 5px solid rgba(220, 0, 0, 0.7);

  p {
    margin: 0;
    font-weight: 100;
    color: white;
  }
  strong {
    margin-right: 1rem;
  }
`

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Oops...</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ))
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Oops...</strong>
        {error.message
          .replace('GraphQL error: ', '')
          .replace(
            'A unique constraint would be violated on User. Details: Field name = cellPhone',
            'This phone number is already in use! Please enter a new cellphone number',
          )}
      </p>
    </ErrorStyles>
  )
}

DisplayError.defaultProps = {
  error: {},
}

DisplayError.propTypes = {
  error: PropTypes.object,
}

export default DisplayError
