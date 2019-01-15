import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import User from './User'
import Signout from './Signout'

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        {me && (
          <>
            <Link href="/clients">
              <a>Settings</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <>
            <Link href="/hipaa">
              <a>Hipaa</a>
            </Link>{' '}
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
)

export default Nav
