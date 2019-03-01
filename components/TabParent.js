import React from 'react'
import UpdateUserProfiles from './UpdateUserProfile'
import Tabs from './Tabs'
import styled from 'styled-components'
import SubscriptionManagement from './SubscriptionManagement'
import { Query } from 'react-apollo'
import UpdateScheduleSettings from './UpdateScheduleSettings'
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
      {({ data: { me }, error }) => {
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
            <Tabs.Tab id="tab2" title="Schedule">
              <UpdateScheduleSettings />
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Subscription">
              <SubscriptionManagement />
            </Tabs.Tab>
          </Tabs>
        )
      }}
    </Query>
  </Styled>
)

export default TabParent
