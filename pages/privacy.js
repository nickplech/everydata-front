import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

const TermsPage = styled.div`
  padding: 20px 40px;
  background: rgba(245, 245, 245, 1);
  .header {
    text-transform: uppercase;
    color: rgba(20, 110, 220, 1);
    font-size: 24px;
  }
`

const privacy = () => {
  return (
    <>
      <TermsPage>
        <h1>Privacy Policy</h1>

        <p>PerfectDayReminders.com Privacy Policy</p>

        <p>
          This privacy policy has been compiled to better serve those who are
          concerned with how their 'Personally Identifiable Information' (PII)
          is being used online. PII, as described in US privacy law and
          information security, is information that can be used on its own or
          with other information to identify, contact, or locate a single
          person, or to identify an individual in context. Please read our
          privacy policy carefully to get a clear understanding of how we
          collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>

        <p>
          What personal information do we collect from the people that visit our
          blog, website or app?
        </p>

        <p>
          When ordering or registering on our site, as appropriate, you may be
          asked to enter your name, email address, mailing address, phone
          number, credit card information or other details to help you with your
          experience.
        </p>

        <p className="header">When do we collect information?</p>

        <p>
          We collect information from you when you register on our site, place
          an order or enter information on our site.
        </p>

        <p className="header">How do we use your information?</p>

        <p>
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>

        <ul>
          <li>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>To quickly process your transactions.</li>
        </ul>

        <p className="header">How do we protect your information?</p>

        <p>
          Our website is scanned on a regular basis for security holes and known
          vulnerabilities in order to make your visit to our site as safe as
          possible.
        </p>

        <p>We use regular Malware Scanning.</p>

        <p>
          Your personal information is contained behind secured networks and is
          only accessible by a limited number of persons who have special access
          rights to such systems, and are required to keep the information
          confidential. In addition, all sensitive/credit information you supply
          is encrypted via Secure Socket Layer (SSL) technology.
        </p>

        <p>
          We implement a variety of security measures when a user places an
          order enters, submits, or accesses their information to maintain the
          safety of your personal information.
        </p>

        <p>
          All transactions are processed through a gateway provider and are not
          stored or processed on our servers.
        </p>

        <p className="header">Do we use 'cookies'?</p>

        <p>
          Yes. Cookies are small files that a site or its service provider
          transfers to your computer's hard drive through your Web browser (if
          you allow) that enables the site's or service provider's systems to
          recognize your browser and capture and remember certain information.
          For instance, we use cookies to help us remember and process the items
          in your shopping cart. They are also used to help us understand your
          preferences based on previous or current site activity, which enables
          us to provide you with improved services. We also use cookies to help
          us compile aggregate data about site traffic and site interaction so
          that we can offer better site experiences and tools in the future.
        </p>

        <p>We use cookies to:</p>

        <ul>
          <li>Understand and save user's preferences for future visits.</li>
          <li>
            Compile aggregate data about site traffic and site interactions in
            order to offer better site experiences and tools in the future. We
            may also use trusted third-party services that track this
            information on our behalf.
          </li>
        </ul>

        <p>
          You can choose to have your computer warn you each time a cookie is
          being sent, or you can choose to turn off all cookies. You do this
          through your browser settings. Since browser is a little different,
          look at your browser's Help Menu to learn the correct way to modify
          your cookies.
        </p>

        <p>If users disable cookies in their browser:</p>

        <p>
          If you turn cookies off, Some of the features that make your site
          experience more efficient may not function properly. Some of the
          features that make your site experience more efficient and may not
          function properly.
        </p>

        <p className="header">Third-party disclosure</p>

        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          Personally Identifiable Information unless we provide users with
          advance notice. This does not include website hosting partners and
          other parties who assist us in operating our website, conducting our
          business, or serving our users, so long as those parties agree to keep
          this information confidential. We may also release information when
          it's release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others' rights, property or safety.
        </p>

        <p>
          However, non-personally identifiable visitor information may be
          provided to other parties for marketing, advertising, or other uses.
        </p>

        <p className="header">Third-party links</p>

        <p>
          We do not include or offer third-party products or services on our
          website.
        </p>

        <p className="header">Google</p>

        <p>
          Google's advertising requirements can be summed up by Google's
          Advertising Principles. They are put in place to provide a positive
          experience for users.
          <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
            https://support.google.com/adwordspolicy/answer/1316548?hl=en
          </a>
        </p>

        <p>
          We have not enabled Google AdSense on our site but we may do so in the
          future.
        </p>

        <p className="header">COPPA (Children Online Privacy Protection Act)</p>

        <p>
          When it comes to the collection of personal information from children
          under the age of 13 years old, the Children's Online Privacy
          Protection Act (COPPA) puts parents in control. The Federal Trade
          Commission, United States' consumer protection agency, enforces the
          COPPA Rule, which spells out what operators of websites and online
          services must do to protect children's privacy and safety online.
        </p>

        <p>
          We do not specifically market to children under the age of 13 years
          old.
        </p>

        <p className="header">Fair Information Practices</p>

        <p>
          The Fair Information Practices Principles form the backbone of privacy
          law in the United States and the concepts they include have played a
          significant role in the development of data protection laws around the
          globe. Understanding the Fair Information Practice Principles and how
          they should be implemented is critical to comply with the various
          privacy laws that protect personal information.
        </p>

        <p>
          In order to be in line with Fair Information Practices we will take
          the following responsive action, should a data breach occur:
        </p>

        <p>We will notify you via email</p>

        <ul>
          <li>Within 7 business days</li>
        </ul>

        <p>
          We also agree to the Individual Redress Principle which requires that
          individuals have the right to legally pursue enforceable rights
          against data collectors and processors who fail to adhere to the law.
          This principle requires not only that individuals have enforceable
          rights against data users, but also that individuals have recourse to
          courts or government agencies to investigate and/or prosecute
          noncompliance by data processors.
        </p>

        <p className="header">HIPAA Compliance</p>

        <p>CAN SPAM Act</p>

        <p>
          The CAN-SPAM Act is a law that sets the rules for commercial email,
          establishes requirements for commercial messages, gives recipients the
          right to have emails stopped from being sent to them, and spells out
          tough penalties for violations.
        </p>

        <p>We collect your email address in order to:</p>

        <ul>
          <li>
            Send information, respond to inquiries, and/or other requests or
            questions
          </li>
          <li>
            Process orders and to send information and updates pertaining to
            orders.
          </li>
          <li>
            Send you additional information related to your product and/or
            service
          </li>
          <li>
            Market to our mailing list or continue to send emails to our clients
            after the original transaction has occurred.
          </li>
        </ul>

        <p>To be in accordance with CANSPAM, we agree to the following:</p>

        <ul>
          <li>Not use false or misleading subjects or email addresses.</li>
          <li>
            Identify the message as an advertisement in some reasonable way.
          </li>
          <li>
            Include the physical address of our business or site headquarters.
          </li>
          <li>
            Monitor third-party email marketing services for compliance, if one
            is used.
          </li>
          <li>Honor opt-out/unsubscribe requests quickly.</li>
          <li>
            Allow users to unsubscribe by using the link at the bottom of each
            email.
          </li>
          <li>
            Follow the instructions at the bottom of each email and we will
            promptly remove you from ALL correspondence.
          </li>
        </ul>

        <p>
          If at any time you would like to unsubscribe from receiving future
          emails, you can email us at
          <a href="mailto:info@perfectdayreminders.com">
            info@perfectdayreminders.com
          </a>
        </p>

        <p className="header">Contacting Us</p>

        <p>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below.
        </p>

        <p>
          PerfectDayReminders.com
          <br />
          17815 Sky Park Cir Suite F<br />
          Irvine, CA 92614
          <br />
          USA
          <br />
          info@perfectdayreminders.com
          <br />
          Phone: (949)887-3031
        </p>
      </TermsPage>
      <Footer />
    </>
  )
}

export default privacy