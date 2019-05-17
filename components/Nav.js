import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import User from './User'
import Signout from './Signout'
import styled from 'styled-components'
import AutoComplete from './AutoComplete'
import Block from './Block'

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        {me && (
          <>
            <Link href="/inbox">
              <a className="tab">
                <Block name="Dashboard" />
              </a>
            </Link>
            <Link href="/feedupload">
              <a className="tab2">
                <Block name="Feed Upload" />
              </a>
            </Link>
            <Link href="/account">
              <a className="tab3">
                <Block name="Admin Settings" />
              </a>
            </Link>
            <AutoComplete user={me} />
            <Signout />
          </>
        )}
        {!me && (
          <>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav
