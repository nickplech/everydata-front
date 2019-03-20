import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import Router from 'next/router'
import NProgress from 'nprogress'
import InfoBar from './InfoBar'
import Slider from './Slider'
import { PlusButton } from 'react-svg-buttons'
import SignInNoDisplay from './SignInNoDisplay'
import AutoComplete from './AutoComplete'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const Logo = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-self: center;
  justify-self: center;
  position: relative;
  z-index: 0;
  a {
    padding: 0rem 1rem;
    background: rgba(10, 110, 240, 1);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`

const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    z-index: -2;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 50px 295px 1fr;
    height: 45px;
    align-self: center;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    opacity: 1;
  }
`

const Plus = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 3px;
  outline: none;
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link href="/">
              <a>Perfect Day Reminders</a>
            </Link>
          </Logo>
          <Nav />
        </div>
        <SignInNoDisplay>
          <div className="sub-bar">
            <Link href="/addclient">
              <a>
                <Plus>
                  <PlusButton
                    color="rgba(100,100,200,1)"
                    size={35}
                    thickness={2}
                  />
                </Plus>
              </a>
            </Link>
            <AutoComplete />
            <InfoBar />
            <Slider />
          </div>
        </SignInNoDisplay>
      </StyledHeader>
    )
  }
}

export default Header
