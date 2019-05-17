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
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  position: relative;
  border: none;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin: ${props => (props.isActiveTab ? '70px 6px 0 6px' : '70px 0px 0 0px')};
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  transform: ${props => (props.isActiveTab ? 'scale(1.1)' : ' scale(1)')};
  cursor: pointer;
  background: ${props =>
    props.isActiveTab ? 'rgba(20,110,220,1)' : '#3d5866'};
  opacity: 1;
  border-bottom: none;
  z-index: 0;

  &:hover {
    background: rgba(20, 110, 220, 1);
  }

  &:focus {
    background: rgba(20, 110, 220, 1);
  }
  &:nth-child(1) {
    border-radius: 10px 0 0 0;
  }
  &:nth-child(2) {
    border-radius: 0px 10px 0 0;
  }
`
const ActiveTabBorder = styled.div`
  background-color: rgba(20, 110, 220, 1);
  position: relative;
`

const TabAnchorItem = styled.a`
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
`

const TabzContainer = styled.div`
  position: relative;
  padding: 0 20px;
`

const ReactTabs = styled.div`
  position: relative;
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
