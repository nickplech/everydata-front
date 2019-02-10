import React from 'react'
import UpdateUserProfile from './UpdateUserProfile'
import Tabs from './Tabs'
import styled from 'styled-components'
import SubscriptionManagement from './SubscriptionManagement'

const Styled = styled.div`
  font-family: sans-serif;
  text-align: left;
  /* margin: 0 30%; */
  text-align: left;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem;
  padding-top: 0;
`

const TabParent = () => (
  <Styled>
    <Tabs
      activeTab={{
        id: 'tab1',
      }}
    >
      <Tabs.Tab id="tab1" title="Profile">
        <UpdateUserProfile />
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Schedule">
        <div> </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab3" title="Subscription ">
        <SubscriptionManagement />
      </Tabs.Tab>
    </Tabs>
  </Styled>
)

export default TabParent
