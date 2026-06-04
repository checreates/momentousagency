import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout } from "@/components/legal-page-layout"
import { LEGAL } from "@/lib/legal-config"

export const metadata: Metadata = {
  title: "Terms of Service | Momentous Agency",
  description: "Terms of service and SMS messaging terms for Momentous Agency.",
}

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 4, 2026
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of {LEGAL.website} and
        services provided by {LEGAL.brandName}. By using our website, you agree to these
        Terms and our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Services</h2>
      <p>
        We provide digital strategy, design, development, and marketing services. Specific
        scope, fees, and deliverables are defined in separate proposals or agreements.
      </p>

      <h2>Website use</h2>
      <p>
        You agree not to misuse the site, attempt unauthorized access, or use our content
        without permission. We may update or discontinue site features at any time.
      </p>

      <h2>SMS messaging terms</h2>
      <p>
        <strong>Program:</strong> {LEGAL.brandName} SMS program for {LEGAL.smsProgram}.
      </p>
      <p>
        <strong>Opt-in:</strong> SMS consent is collected only through our website chat
        widget. Website contact forms and other flows on this site do not enroll you in
        text messages.
      </p>
      <p>
        <strong>Frequency:</strong> Message frequency varies.
      </p>
      <p>
        <strong>Cost:</strong> Message and data rates may apply.
      </p>
      <p>
        <strong>Opt-out:</strong> Reply <strong>STOP</strong> to cancel. Reply <strong>HELP</strong>{" "}
        for help or contact us at {LEGAL.phone} or {LEGAL.email}.
      </p>
      <p>
        <strong>Consent:</strong> Consent to receive SMS is not a condition of purchase.
      </p>
      <p>
        <strong>Carriers:</strong> Wireless carriers are not liable for delayed or
        undelivered messages.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Site content, branding, and materials are owned by {LEGAL.brandName} or our
        licensors unless otherwise stated in a client agreement.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The website and general information are provided &quot;as is&quot; without warranties
        of any kind, to the fullest extent permitted by law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {LEGAL.brandName} is not liable for indirect,
        incidental, special, or consequential damages arising from use of the website or
        services.
      </p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law rules.</p>

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
    </LegalPageLayout>
  )
}
