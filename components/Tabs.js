import React, { Component } from 'react'
import styled from 'styled-components'

import Tab from './Tab'

const ListTabs = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
`

const TabTitleItem = styled.li`
  display: inline-block;
  padding-right: 5;
  padding-left: 5;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin: 16px 50px;
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`
const ActiveTabBorder = styled.div`
  background-color: #0088dd;
  position: absolute;
  bottom: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  will-change: left, width;
`

const TabAnchorItem = styled.a`
  text-transform: capitalize;
  color: #000000;
  font-weight: 600;
`

const TabzContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #dfdfdf;
`

const ReactTabs = styled.div`
  position: realative;
`

class TabsContainer extends Component {
  static Tab = Tab

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab,
    tabsElements: [],
  }

  addTab = newTab => {
    let isNewTabFound

    for (let i in this.state.tabs) {
      let tab = this.state.tabs[i]

      if (tab.id === newTab.id) {
        isNewTabFound = true
        break
      }
    }

    if (!isNewTabFound) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(newTab),
        }
      })
    }
  }

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId),
      }
    })
  }

  onClick = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab,
      }
    })
  }

  render() {
    return (
      <ReactTabs>
        <TabzContainer>
          <ListTabs>
            {this.state.tabs.map((tab, index) => (
              <TabTitleItem
                key={index}
                onClick={this.onClick(tab)}
                id={tab.id}
                innerRef={tabElement => {
                  if (!this.state.tabsElements[tab.id]) {
                    this.setState((prevState, props) => {
                      const tabsElements = prevState.tabsElements
                      tabsElements[tab.id] = tabElement

                      return {
                        tabsElements,
                      }
                    })
                  }
                }}
                isActiveTab={this.state.activeTab.id === tab.id}
              >
                <TabAnchorItem>{tab.title}</TabAnchorItem>
              </TabTitleItem>
            ))}
          </ListTabs>

          <ActiveTabBorder
            activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
          />
        </TabzContainer>

        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            activeTab: this.state.activeTab,
            addTab: this.addTab,
          }),
        )}
      </ReactTabs>
    )
  }
}

export default TabsContainer
