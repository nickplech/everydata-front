import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import User from './User'
import Router from 'next/router'
import NProgress from 'nprogress'

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
    background: white;
    color: rgba(10, 110, 240, 1);
    text-decoration: none;
  }
`

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: rgba(10, 110, 240, 1);
  z-index: 1000;
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    background: rgba(10, 110, 240, 1);
    justify-content: space-between;
    align-items: center;
  }

  /* .tab {
    background: green;
    height: 44px;
    opacity: 0.8;
  }
  .tab2 {
    background: purple;
    height: 44px;
    opacity: 0.8;
  }
  .tab3 {
    background: blue;
    height: 44px;
    opacity: 0.8;
  }
  .tab4 {
    background: rgba(20, 110, 240, 1);
    height: 44px;
    opacity: 0.8;
  } */
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>EveryData</a>
          </Link>
        </Logo>
        <Nav />
      </div>
    </StyledHeader>
  )
}

export default Header
