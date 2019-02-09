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

const terms = () => {
  return (
    <>
      <TermsPage>
        <h1>Terms of Use</h1>

        <p>Last updated: May 28, 2018</p>

        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the www.perfectdayreminders.com
          website (the "Service") operated by Perfect Day Reminders LLC ("us",
          "we", or "our").
        </p>

        <p>
          Your access to and use of the Service is conditioned upon your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who wish to access or use the Service.
        </p>

        <p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you do not have
          permission to access the Service.
        </p>

        <p className="header">Communications</p>

        <p>
          By creating an Account on our service, you agree to subscribe to
          newsletters, marketing or promotional materials and other information
          we may send. However, you may opt out of receiving any, or all, of
          these communications from us by following the unsubscribe link or
          instructions provided in any email we send.
        </p>

        <p className="header">Subscriptions</p>

        <p>
          Some parts of the Service are billed on a subscription basis
          ("Subscription(s)"). You will be billed in advance on a recurring and
          periodic basis ("Billing Cycle"). Billing cycles are set on a monthly
          basis.
        </p>

        <p>
          At the end of each Billing Cycle, your Subscription will automatically
          renew under the exact same conditions unless you cancel it or Perfect
          Day Reminders LLC cancels it. You may cancel your Subscription renewal
          either through your online account management page or by contacting
          Perfect Day Reminders LLC customer support team.
        </p>

        <p>
          A valid payment method, including credit card or PayPal, is required
          to process the payment for your Subscription. You shall provide
          Perfect Day Reminders LLC with accurate and complete billing
          information including full name, address, state, zip code, telephone
          number, and a valid payment method information. By submitting such
          payment information, you automatically authorize Perfect Day Reminders
          LLC to charge all Subscription fees incurred through your account to
          any such payment instruments.
        </p>

        <p>
          Should automatic billing fail to occur for any reason, Perfect Day
          Reminders LLC will issue an electronic invoice indicating that you
          must proceed manually, within a certain deadline date, with the full
          payment corresponding to the billing period as indicated on the
          invoice.
        </p>

        <p className="header">Free Trial</p>

        <p>
          Perfect Day Reminders LLC may, at its sole discretion, offer a
          Subscription with a free trial for a limited period of time ("Free
          Trial").
        </p>

        <p>
          Although Personal Information is required as well as Verifying
          Personal and Business Identification, Billing information is not
          required to sign up for the Free Trial.
        </p>

        <p>
          On the last day of the Free Trial period, unless you cancelled your
          Subscription, you will be to provide billing information for use as
          payment for applicable Subscription fees for the type of Subscription
          you have selected.
        </p>

        <p>
          At any time and without notice, Perfect Day Reminders LLC reserves the
          right to (i) modify the terms and conditions of the Free Trial offer,
          or (ii) cancel such Free Trial offer.
        </p>

        <p className="header">Fee Changes</p>

        <p>
          Perfect Day Reminders LLC, in its sole discretion and at any time, may
          modify the Subscription fees for the Subscriptions. Any Subscription
          fee change will become effective at the end of the then-current
          Billing Cycle.
        </p>

        <p>
          Perfect Day Reminders LLC will provide you with a reasonable prior
          notice of any change in Subscription fees to give you an opportunity
          to terminate your Subscription before such change becomes effective.
        </p>

        <p>
          Your continued use of the Service after the Subscription fee change
          comes into effect constitutes your agreement to pay the modified
          Subscription fee amount.
        </p>

        <p className="header">Refunds</p>

        <p>
          Certain refund requests for Subscriptions may be considered by Perfect
          Day Reminders LLC on a case-by-case basis and granted in sole
          discretion of Perfect Day Reminders LLC.
        </p>

        <p>
          If an account is terminated by the subscriber on or before the 21st
          day of the billing cycle (Billing Month) a full refund for that month,
          meaning that incomplete Billing Month only, can be issued Upon Request
          of the Subscriber. Any accounts terminated for reasons unrelated to
          displeasure with the Service will not receive a refund unless paired
          with a Subscriber Request, regardless of termination taking place
          within the first 21 days of the Billing Month.
        </p>

        <p>
          “Billing Month (Cycle)” is defined as the length of time beginning
          upon payment receipt for a month of service, lasting until the
          following Billing Month’s start.
        </p>

        <p className="header">Content</p>

        <p>
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for the Content that you
          post on or through the Service, including its legality, reliability,
          and appropriateness.
        </p>

        <p>
          By posting Content on or through the Service, You represent and
          warrant that: (i) the Content is yours (you own it) and/or you have
          the right to use it and the right to grant us the rights and license
          as provided in these Terms, and (ii) that the posting of your Content
          on or through the Service does not violate the privacy rights,
          publicity rights, copyrights, contract rights or any other rights of
          any person or entity. We reserve the right to terminate the account of
          anyone found to be infringing on a copyright.
        </p>

        <p>
          You retain any and all of your rights to any Content you submit, post
          or display on or through the Service and you are responsible for
          protecting those rights. We take no responsibility and assume no
          liability for Content you or any third party posts on or through the
          Service. However, by posting Content using the Service you grant us
          the right and license to use, modify, perform, display, reproduce, and
          distribute such Content on and through the Service.
        </p>

        <p>
          Perfect Day Reminders LLC has the right but not the obligation to
          monitor and edit all Content provided by users.
        </p>

        <p>
          In addition, Content found on or through this Service are the property
          of Perfect Day Reminders LLC or used with permission. You may not
          distribute, modify, transmit, reuse, download, repost, copy, or use
          said Content, whether in whole or in part, for commercial purposes or
          for personal gain, without express advance written permission from us.
        </p>

        <p className="header">Accounts</p>

        <p>
          When you create an account with us, you guarantee that you are above
          the age of 18, and that the information you provide us is accurate,
          complete, and current at all times. Inaccurate, incomplete, or
          obsolete information may result in the immediate termination of your
          account on the Service.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your
          account and password, including but not limited to the restriction of
          access to your computer and/or account. You agree to accept
          responsibility for any and all activities or actions that occur under
          your account and/or password, whether your password is with our
          Service or a third-party service. You must notify us immediately upon
          becoming aware of any breach of security or unauthorized use of your
          account.
        </p>

        <p>
          You may not use as a username the name of another person or entity or
          that is not lawfully available for use, a name or trademark that is
          subject to any rights of another person or entity other than you,
          without appropriate authorization. You may not use as a username any
          name that is offensive, vulgar or obscene.
        </p>

        <p className="header">Intellectual Property</p>

        <p>
          The Service and its original content (excluding Content provided by
          users), features and functionality are and will remain the exclusive
          property of Perfect Day Reminders LLC and its licensors. The Service
          is protected by copyright, trademark, and other laws of both the
          United States and foreign countries. Our trademarks and trade dress
          may not be used in connection with any product or service without the
          prior written consent of Perfect Day Reminders LLC.
        </p>

        <p className="header">Links To Other Web Sites</p>

        <p>
          Our Service may contain links to third party web sites or services
          that are not owned or controlled by Perfect Day Reminders LLC
        </p>

        <p>
          Perfect Day Reminders LLC has no control over, and assumes no
          responsibility for the content, privacy policies, or practices of any
          third party web sites or services. We do not warrant the offerings of
          any of these entities/individuals or their websites.
        </p>

        <p>
          You acknowledge and agree that Perfect Day Reminders LLC shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods or services available on or
          through any such third party web sites or services.
        </p>

        <p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third party web sites or services that you visit.
        </p>

        <p className="header">Termination</p>

        <p>
          We may terminate or suspend your account and bar access to the Service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms.
        </p>

        <p>
          If you wish to terminate your account, you may simply discontinue
          using the Service.
        </p>

        <p>
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>

        <p className="header">Indemnification</p>

        <p>
          You agree to defend, indemnify and hold harmless Perfect Day Reminders
          LLC and its licensee and licensors, and their employees, contractors,
          agents, officers and directors, from and against any and all claims,
          damages, obligations, losses, liabilities, costs or debt, and expenses
          (including but not limited to attorney's fees), resulting from or
          arising out of a. your use and access of the Service, by you or any
          person using your account and password; b. a breach of these Terms, or
          c. Content posted on the Service.
        </p>

        <p className="header">Limitation Of Liability</p>

        <p>
          In no event shall Perfect Day Reminders LLC, nor its directors,
          employees, partners, agents, suppliers, or affiliates, be liable for
          any indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from -i- your access to or use of
          or inability to access or use the Service; -ii- any conduct or content
          of any third party on the Service; -iii- any content obtained from the
          Service; and -iv- unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          -including negligence- or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </p>

        <p className="header">Disclaimer</p>

        <p>
          Your use of the Service is at your sole risk. The Service is provided
          on an "AS IS" and "AS AVAILABLE" basis. The Service is provided
          without warranties of any kind, whether express or implied, including,
          but not limited to, implied warranties of merchantability, fitness for
          a particular purpose, non-infringement or course of performance.
        </p>

        <p>
          Perfect Day Reminders LLC its subsidiaries, affiliates, and its
          licensors do not warrant that a. the Service will function
          uninterrupted, secure or available at any particular time or location;
          b. any errors or defects will be corrected; c. the Service is free of
          viruses or other harmful components; or d. the results of using the
          Service will meet your requirements.
        </p>

        <p className="header">Exclusions</p>

        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          the exclusion or limitation of liability for consequential or
          incidental damages, so the limitations above may not apply to you.
        </p>

        <p className="header">Governing Law</p>

        <p>
          These Terms shall be governed and construed in accordance with the
          laws of California, United States, without regard to its conflict of
          law provisions.
        </p>

        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between
          us regarding the Service.
        </p>

        <p className="header">Changes</p>

        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will provide at
          least 30 days notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>

        <p>
          By continuing to access or use our Service after any revisions become
          effective, you agree to be bound by the revised terms. If you do not
          agree to the new terms, you are no longer authorized to use the
          Service.
        </p>

        <p className="header">Contact Us</p>

        <p>If you have any questions about these Terms, please contact us.</p>

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
          Phone: `(949)`887-3031
        </p>
      </TermsPage>
      <Footer />
    </>
  )
}

export default terms
