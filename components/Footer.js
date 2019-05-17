import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const Wrap = styled.div`
  background: rgba(10, 10, 10, 0.95);
  height: 100%;
  bottom: 0;
  position: relative;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr 1fr;
  background: transparent;
  color: rgba(240, 240, 240, 0.9);
  margin: 0;
  padding: 0;
  padding-top: 10px;
  bottom: 0;
  position: relative;
  font-size: 0.9rem;
  height: 250px;
  width: 100%;
  &:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  &:nth-child(2) {
    grid-row: 1;
    grid-column: 2;
  }

  @media (min-width: 1000px) {
    font-size: 0.8rem;
    max-width: 1000px;
    margin: 0 auto;
  }
`

const CopyrightZone = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 1/3;
  text-align: center;
  width: 100%;
  position: relative;
  top: -40px;
  background: transparent;
  font-size: 11px;
  p {
    margin: 0;
  }
`
const Column = styled.div`
  align-content: flex-start;
  display: grid;
  color: rgba(240, 240, 240, 0.9);
  border-right: 1px solid rgba(240, 240, 240, 0.2);
  margin: 50px 0;
  padding-left: 20px;
  &:nth-child(2) {
    border-right: none;
  }
  p {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }
  .phone {
    color: rgba(20, 110, 240, 0.7);
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  a {
    font-family: 'Montserrat', sans-serif;
    color: rgba(240, 240, 240, 0.9);
    font-size: 12px;
    &:hover {
      color: rgba(20, 110, 240, 0.8);
    }
  }
`

const Header = props => {
  return <h5 style={{ fontSize: '12px', margin: '0' }}>{props.content}</h5>
}
const Footer = () => {
  return (
    <Wrap>
      <Grid>
        <Column>
          <Header content="Site Index" />
          <List>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </List>
        </Column>

        <Column>
          <Header content="Questions" />
          <p>
            To reach a sales representative, please call{' '}
            <a className="phone" href="tel: 17144000000">
              {' '}
              (714)400-0000
            </a>
          </p>
        </Column>
        <CopyrightZone>
          <div>
            <p>Copyright © Everydata 2010-2019</p>
          </div>
        </CopyrightZone>
      </Grid>
    </Wrap>
  )
}

export default Footer
