import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import { site } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'Privacy',
  description:
    'How this website and its newsletter handle personal information.',
  path: '/privacy/',
});

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link-u">
    {children}
  </a>
);

export default function PrivacyPage() {
  return (
    <article className="article wrap">
      <div className="article-card">
        <p className="kicker">Last updated 7 October 2026</p>
        <h1>Privacy.</h1>

        <div className="prose">
          <p className="intro">
            I’m Raihan Ghorami, the controller for this website and its personal newsletter, based in Dhaka, Bangladesh. Contact{' '}
            <a href={`mailto:${site.email}`} className="link-u">
              {site.email}
            </a>
            . This newsletter is separate from Beyond Edits’ client communications.
          </p>

          <h2>If you subscribe</h2>
          <p>
            Your email address and signup page go through this website to Kit, which manages subscriptions and sends my writing. Kit stores your
            email, subscription status, dates and signup source, and may record delivery, opens and clicks. See{' '}
            <A href="https://kit.com/privacy">Kit’s privacy policy</A>.
          </p>
          <p>
            Subscribing is optional and based on consent. Confirm your email before receiving the newsletter. Withdraw consent through any
            newsletter’s unsubscribe link or by emailing me. Records are kept to deliver requested writing and retain consent or opt-out
            information; unsubscribing stops mail but does not automatically erase the record. You can request deletion.
          </p>

          <h2>Website and security</h2>
          <p>
            This site’s code sets no analytics or advertising cookies and loads no Kit tracking script. The signup endpoint does not log raw email
            addresses or IP addresses. For abuse prevention, it temporarily keeps a coded IP identifier, request count and time. These records
            expire within two hours and are cleared on the next request. This serves my legitimate interest in protecting the service.
          </p>
          <p>
            Hostinger hosts the site and may retain separate technical logs, including IP addresses, under its{' '}
            <A href="https://www.hostinger.com/legal/privacy-policy">privacy policy and retention practices</A>.
          </p>

          <h2>Conversations and bookings</h2>
          <p>
            Booking a call opens Calendly, where you enter your details. Booking does not subscribe you to the newsletter. WhatsApp opens
            separately. See <A href="https://calendly.com/legal/privacy-notice">Calendly’s notice</A>{' '}
            and <A href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp’s policy</A>. I use correspondence to answer you or discuss
            requested work, keeping it while relevant to that conversation or relationship.
          </p>
          <p>
            Replying to messages serves my legitimate interest in communicating with you; discussing work you request may also be a step toward a
            contract.
          </p>

          <h2>Where information is handled</h2>
          <p>
            I work in Bangladesh; Kit and its subprocessors process information in the US. Kit’s published{' '}
            <A href="https://kit.com/dpa">Data Processing Addendum</A> describes its transfer provisions, including the Data Privacy Framework and
            contractual safeguards. Contact me for information about safeguards relevant to your data.
          </p>

          <h2>Your choices and rights</h2>
          <p>
            Depending on applicable law, you can request access, correction, deletion, restriction or a portable copy of your information by
            emailing me.
          </p>
          <p>
            You can object to direct marketing at any time, and to processing based on legitimate interests. You can also complain to the{' '}
            <A href="https://ico.org.uk/make-a-complaint/">UK ICO</A> or your local EU data protection authority.
          </p>
        </div>
      </div>
    </article>
  );
}
