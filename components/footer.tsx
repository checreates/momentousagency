import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/brand", label: "Brand Kit" },
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
              <Image
                src="/images/logo.png"
                alt="Momentous Agency"
                width={48}
                height={48}
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <span className="font-bold text-xl tracking-tight">Momentous</span>
            </Link>
            <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(239, 255, 255, 0.6)' }}>
              Ice Cold Strategy. On Fire Results.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(239, 255, 255, 0.45)' }}>
              Clarify the path. Simplify the complex. Automate the grind.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(110, 207, 245, 0.1)', border: '1px solid rgba(110, 207, 245, 0.15)' }}
                  aria-label={social.label}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(110, 207, 245, 0.2)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(110, 207, 245, 0.1)' }}
                >
                  <social.icon className="w-5 h-5" style={{ color: '#6ECFF5' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239, 255, 255, 0.4)' }}>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(239, 255, 255, 0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239, 255, 255, 0.4)' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(239, 255, 255, 0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(239, 255, 255, 0.4)' }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#6ECFF5' }} />
                <a
                  href="mailto:hello@momentous.marketing"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(239, 255, 255, 0.6)' }}
                >
                  hello@momentous.marketing
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#6ECFF5' }} />
                <a
                  href="tel:+18352764138"
                  className="text-sm transition-colors"
                  style={{ color: 'rgba(239, 255, 255, 0.6)' }}
                >
                  835-276-4138
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#6ECFF5' }} />
                <span className="text-sm" style={{ color: 'rgba(239, 255, 255, 0.6)' }}>
                  Lehigh Valley, PA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(110, 207, 245, 0.1)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(239, 255, 255, 0.35)' }}>
            &copy; {new Date().getFullYear()} Momentous Agency. Liquid Glass Brand System v1.0
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: 'rgba(239, 255, 255, 0.35)' }}
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
