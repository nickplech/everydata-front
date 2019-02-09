import Link from 'next/link'

import FooterStyles from './styles/FooterStyles'

const Footer = () => (
  <FooterStyles>
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
    <div>
      <Link href="/pricing">
        <a>FAQ</a>
      </Link>
    </div>
    <div>
      <Link href="/privacy">
        <a>Privacy Policy</a>
      </Link>
    </div>
    <div>
      <Link href="/terms">
        <a>Terms of Use</a>
      </Link>
    </div>
    <div>
      <p>Copyright © Perfect Day Reminders LLC 2016-2018</p>
    </div>
  </FooterStyles>
)

export default Footer
