import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const theme = {
  red: '#FF0000',
  blue: 'rgba(100,100,230,1)',
  green: 'rgba(50,230,150,1)',
  lightblue: 'rgba(100,160,250,1)',
  primary: '#3d5866',
  secondary: '#3d5866',
  tertiary: '#3d5866',
  quaternary: '#3d5866',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '100vw',
  innerWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
}
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0rem 0 0 0;
`

injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2')
      format('woff2');
		font-style: normal;
		font-weight: normal;
	}
	html {
		box-sizing: border-box;
		font-size: 10px;

	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.4rem;
		line-height: 2;
		font-family: 'radnika_next';
	}
a {
text-decoration: none;
color: ${theme.black};
}
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page
