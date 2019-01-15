import Link from 'next/link';
import styled from 'styled-components';
import FooterStyles from './styles/FooterStyles';
import SickButton from './styles/SickButton';

const Footer = () => (
<FooterStyles>

    <div>
	    <Link href="/blog">
				<a>Blog</a>
			</Link>
    </div>
    <div>
      <Link href="/faq">
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
  );

export default Footer;