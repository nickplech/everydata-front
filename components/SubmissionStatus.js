import React from 'react'
import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const StyledSubStatus = styled.div`
  display: grid;
  background: rgba(200, 200, 200, 0.1);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  border-radius: 5px 5px 5px 5px;
  z-index: -1;
  height: 100%;
  width: 98%;
  position: relative;
  overflow: hidden;
`
const ClientPill = styled.p`
  padding: 10px 15px;
  border-radius: 25px;
  margin: 10px 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
`

const SubmissionStatus = ({ clients, makeSeen }) => {
  return (
    <StyledSubStatus>
      <div>
        {clients.map(client => {
          const { id } = client
          return (
            <ClientPill key={id} onClick={() => makeSeen(id)}>
              {client.fullName}
            </ClientPill>
          )
        })}
      </div>
    </StyledSubStatus>
  )
}

export default SubmissionStatus
