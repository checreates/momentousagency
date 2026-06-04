import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { LEGAL } from "@/lib/legal-config"

export const metadata: Metadata = {
  title: "Privacy Policy | Momentous Agency",
  description: "How Momentous Agency collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 4, 2026
      </p>
      <p>
        {LEGAL.brandName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
        <a href={LEGAL.website}>{LEGAL.website}</a>. This Privacy Policy explains how we
        collect, use, and safeguard information when you visit our website, contact us, or
        communicate with us through our chat widget and related services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> name, email, company, project details,
          and messages submitted through our contact form or chat widget.
        </li>
        <li>
          <strong>Communications:</strong> records of email, chat, and (if you opt in via
          our chat widget) SMS correspondence.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device information, and
          usage data collected through cookies and analytics tools.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Respond to inquiries and deliver our services</li>
        <li>Send project updates and service-related communications you request</li>
        <li>Improve our website and client experience</li>
        <li>Comply with legal obligations and prevent fraud</li>
      </ul>

      <h2>SMS and mobile messaging</h2>
      <p>
        If you choose to receive SMS messages, you opt in only through our website chat
        widget. We do not use this contact form or other website forms to collect SMS
        marketing consent. Message frequency varies. Message and data rates may apply. Reply{" "}
        <strong>STOP</strong> to opt out or <strong>HELP</strong> for help at {LEGAL.phone}.
      </p>

      <h2>Sharing of information</h2>
      <p>
        We do not sell your personal information. We may share information with service
        providers who help us operate our business (for example, hosting, CRM, email/SMS
        delivery, and analytics), subject to contractual confidentiality obligations.
      </p>
      <p>
        <strong>Mobile information:</strong> No mobile information will be shared with
        third parties or affiliates for marketing or promotional purposes. Information
        shared with service providers is used solely to support our operations. All the
        above categories exclude text messaging originator opt-in data and consent; this
        information will not be shared with any third parties, excluding aggregators and
        providers of the text message services.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We retain information as long as needed to provide services, meet legal requirements,
        and resolve disputes. We use reasonable administrative, technical, and organizational
        measures to protect your data.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Request access, correction, or deletion of your personal information by emailing {LEGAL.email}</li>
        <li>Opt out of marketing emails using the unsubscribe link in our messages</li>
        <li>Opt out of SMS at any time by replying STOP to our texts</li>
      </ul>

      <h2>Children&apos;s privacy</h2>
      <p>Our services are not directed to individuals under 18, and we do not knowingly collect their data.</p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The &quot;Last updated&quot; date at the top will reflect revisions.</p>

      <h2>Contact</h2>
      <p>
        {LEGAL.brandName}
        <br />
        {LEGAL.location}
        <br />
        Email: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        <br />
        Phone: <a href={`tel:${LEGAL.phoneE164}`}>{LEGAL.phone}</a>
      </p>
      <p>
        See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPageLayout>
  )
}
