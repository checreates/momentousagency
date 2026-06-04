import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#branding", label: "Brand Strategy" },
    { href: "/services#web", label: "Web Development" },
    { href: "/services#marketing", label: "Digital Marketing" },
    { href: "/services#content", label: "Content Creation" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <BrandLogo width={48} height={48} className="w-12 h-12" onDark />
              <span className="font-bold text-xl tracking-tight">
                Momentous
              </span>
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Motivate. Innovate. Create. We help brands make momentous impact through strategic design and digital excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="mailto:hello@momentous.marketing"
                  className="text-secondary-foreground/70 hover:text-white text-sm transition-colors"
                >
                  hello@momentous.marketing
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="tel:+18352764138"
                  className="text-secondary-foreground/70 hover:text-white text-sm transition-colors"
                >
                  835-276-4138
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/70 text-sm">
                  Lehigh Valley, PA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SMS / chat widget compliance (GHL widget-first A2P) */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-secondary-foreground/60 text-xs leading-relaxed max-w-4xl">
            Text message updates are available only through our website chat widget. This
            site&apos;s contact form does not enroll you in SMS. Message frequency varies.
            Message and data rates may apply. Reply STOP to opt out or HELP for help at{" "}
            <a href="tel:+18352764138" className="underline hover:text-white">
              835-276-4138
            </a>
            . See our{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Service
            </Link>
            .
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Momentous Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-foreground/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
