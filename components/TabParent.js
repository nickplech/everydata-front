import React from 'react'
import UpdateUserProfile from './UpdateUserProfile'
import Tabs from './Tabs'
import styled from 'styled-components'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const Styled = styled.div`
  .padded {
    padding: 0px;
  }
`

const TabParent = () => (
  <Styled style={styles}>
    <Tabs
      activeTab={{
        id: 'tab1',
      }}
    >
      <Tabs.Tab id="tab1" title="Profile Settings">
        <div className="padded">
          <UpdateUserProfile />
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Subscription">
        <div className="padded">Payment &amp; Subscription</div>
      </Tabs.Tab>
    </Tabs>
  </Styled>
)

export default TabParent
