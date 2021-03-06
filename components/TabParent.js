import React from 'react'
import UpdateUserProfiles from './UpdateUserProfile'
import Tabs from './Tabs'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import RequestReset from './RequestReset'
import Permissions from './Permissions'
import { CURRENT_USER_QUERY } from './User'

const Styled = styled.div`
  text-align: left;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
  padding-top: 0;
`

const TabParent = () => (
  <Styled>
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { me }, loading, error }) => {
        if (loading) return <p>loading...</p>
        return (
          <Tabs
            activeTab={{
              id: 'tab1',
            }}
          >
            <Tabs.Tab id="tab1" title="Profile">
              <UpdateUserProfiles
                id={me.id}
                cellPhone={me.cellPhone}
                email={me.email}
                businessName={me.businessName}
              />
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Password">
              <RequestReset user={me} />
            </Tabs.Tab>
          </Tabs>
        )
      }}
    </Query>
  </Styled>
)

export default TabParent
