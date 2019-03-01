import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import User from './User'
import Signout from './Signout'
import styled from 'styled-components'

const Sign = styled.a`
  padding: 4px 8px;
  border-radius: 5px;
  background: rgba(20, 110, 220, 0.8);
`

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        {me && (
          <>
            {' '}
            <Link href="/account">
              <a>Account</a>
            </Link>
            <Link href="/clients">
              <a>Settings</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <>
            {' '}
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
            <Link href="/hipaa">
              <a>Hipaa</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/signup">
              <Sign>Sign Up</Sign>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav
