import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Pricing | Momentous Agency",
  description: "Transparent pricing packages designed for businesses at every stage. Find the perfect plan to accelerate your growth.",
}

const websitePackages = [
  {
    name: "Glow-Up Starter",
    price: "2,500",
    description: "From outdated to elevated.",
    features: [
      "Up to 5 pages",
      "Modern responsive design",
      "Brand alignment (colors + fonts)",
      "Basic SEO setup",
      "Speed optimization",
      "Contact form integration",
      "1 revision round",
    ],
  },
  {
    name: "Digital Boss Mode",
    price: "5,000",
    description: "Turn your site into a revenue asset.",
    popular: true,
    features: [
      "Up to 10 custom pages",
      "Conversion-focused UI/UX",
      "Advanced SEO structure",
      "CRM + email integration",
      "Booking/calendar system",
      "Lead capture automation",
      "Analytics setup",
      "2–3 revisions",
    ],
  },
  {
    name: "Limitless Build",
    price: "8,500+",
    description: "No templates. No ceilings.",
    features: [
      "Fully custom design",
      "Advanced animations",
      "Unlimited pages",
      "E-commerce / web app capability",
      "API integrations",
      "Membership portals",
      "AI + automation systems",
    ],
  },
]

const addOns = [
  {
    name: "Traffic Booster",
    tagline: "Get found, not just seen.",
    price: "$1,500 – $3,500",
    bestFor: "Businesses that want consistent inbound traffic.",
    features: [
      "Keyword research + search intent mapping",
      "On-page SEO optimization (titles, headers, structure)",
      "Technical SEO audit + fixes (speed, indexing, errors)",
      "Google Search Console setup",
      "XML sitemap + indexing submission",
      "1–2 optimized blog posts (SEO-focused)",
      "Local SEO optimization (Google Business Profile alignment)",
    ],
    outcome: "Improved search visibility and a foundation for long-term organic growth.",
  },
  {
    name: "Conversion Engine",
    tagline: "Turn clicks into clients.",
    price: "$1,200 – $2,800",
    bestFor: "Businesses that want more leads without more traffic.",
    features: [
      "High-converting landing page design",
      "CTA strategy + placement optimization",
      "Lead capture forms (multi-step if needed)",
      "Thank-you page funnel flow",
      "A/B layout recommendations",
      "Copy structure optimization (headlines, hooks, offers)",
      "Basic funnel tracking setup",
    ],
    outcome: "Higher conversion rates and a smoother user journey from visitor to lead.",
  },
  {
    name: "AutoPilot System",
    tagline: "Your digital employee that never sleeps.",
    price: "$1,500 – $4,000",
    bestFor: "Businesses tired of manual follow-ups and missed leads.",
    features: [
      "CRM setup (GoHighLevel, HubSpot, or similar)",
      "Lead capture → pipeline automation",
      "Email/SMS follow-up sequences",
      "Appointment booking automation",
      "Pipeline stages + deal tracking",
      "Workflow triggers (form fills, clicks, bookings)",
      "Basic reporting dashboard",
    ],
    outcome: "Every lead is captured, followed up with, and tracked automatically.",
  },
  {
    name: "Brand Authority Kit",
    tagline: "Look like the brand people trust instantly.",
    price: "$1,000 – $2,500",
    bestFor: "Businesses lacking a cohesive or modern brand identity.",
    features: [
      "Brand color palette + typography system",
      "Logo refinement or redesign",
      "Visual style guide (consistent design rules)",
      "Social media branding kit (profile + post templates)",
      "Website visual consistency overhaul",
      "Brand voice + messaging guidelines",
    ],
    outcome: "A cohesive, premium brand presence across all platforms.",
  },
  {
    name: "Care Plan",
    tagline: "Keep it fast, secure, and running.",
    price: "$150 – $500/mo",
    bestFor: "Anyone who doesn't want to deal with technical upkeep.",
    features: [
      "Website updates & edits (monthly hours included)",
      "Plugin/theme updates",
      "Security monitoring + backups",
      "Performance optimization checks",
      "Uptime monitoring",
      "Bug fixes + support",
    ],
    outcome: "Peace of mind with a consistently high-performing site.",
  },
  {
    name: "Content Power Pack",
    tagline: "Say the right thing, the right way.",
    price: "$800 – $2,500",
    bestFor: "Businesses struggling with messaging or weak copy.",
    features: [
      "Website copywriting (core pages)",
      "Sales-driven headlines + CTAs",
      "SEO-friendly content structure",
      "Brand voice alignment",
      "Blog/article writing (optional add-on)",
      "Content refresh for outdated pages",
    ],
    outcome: "Clear, persuasive messaging that builds trust and drives action.",
  },
  {
    name: "Ecom Expansion Kit",
    tagline: "Turn your site into a selling machine.",
    price: "$2,000 – $6,000",
    bestFor: "Businesses selling products or planning to.",
    features: [
      "E-commerce store setup (Shopify or WooCommerce)",
      "Product page design + optimization",
      "Payment gateway integration",
      "Cart + checkout optimization",
      "Shipping & tax setup",
      "Abandoned cart recovery setup",
      "Basic product SEO",
    ],
    outcome: "A fully functional online store optimized for conversions.",
  },
  {
    name: "Visual Impact Kit",
    tagline: "Make your brand impossible to ignore.",
    price: "$1,500 – $4,000",
    bestFor: "Brands needing high-quality visuals to stand out.",
    features: [
      "Custom graphics + icons",
      "Website banners + section visuals",
      "Short-form video content (for site/social)",
      "Image optimization for web performance",
      "Stock sourcing or light editing",
      "Visual storytelling enhancements",
    ],
    outcome: "A visually engaging site that captures attention instantly.",
  },
  {
    name: "AI Smart Site Upgrade",
    tagline: "Turn your website into an intelligent experience.",
    price: "$1,200 – $3,500",
    bestFor: "Businesses wanting a cutting-edge, interactive feel.",
    features: [
      "AI chatbot integration (lead capture + FAQ handling)",
      "Smart recommendations (content/products)",
      "AI-assisted live chat workflows",
      "Personalized user experiences",
      "Integration with OpenAI-powered tools",
      "Training chatbot on your business data",
    ],
    outcome: "A smarter website that engages users and captures leads 24/7.",
  },
]

const packages = [
  {
    name: "CORE CRM",
    description: "Ideal for solo founders, startups, and lean service businesses.",
    price: "297",
    period: "month",
    popular: false,
    features: [
      "All-in-one CRM dashboard (leads, deals, calendar, tasks)",
      "1 branded sales funnel/landing page",
      "Basic follow-up sequences (email + SMS)",
      "Contact tagging & segmentation",
      "Appointment booking system",
      "Pipeline tracking",
      "Basic email/SMS automation",
      "AI chatbot for inbound web leads",
      "Reporting dashboard",
      "Skip tracing ($0.03 per lead)",
      "Mass SMS capabilities ($0.0125 per text)",
      "AI TEXT: $0.03 per text + text costs",
      "AI VOICE: $0.020 per min",
      "Phone Calls: $0.0102/min",
      "Email: $0.002025 per email",
      "Automation to increase reviews & SEO",
      "No contracts – cancel anytime",
    ],
    cta: "Get Started",
    href: "/contact?package=core-crm",
  },
  {
    name: "CRM + AUTOMATIONS",
    description: "Ideal for small to medium teams with steady lead flow.",
    price: "497",
    period: "month",
    popular: true,
    features: [
      "Everything in CORE CRM, PLUS:",
      "3–5 done-for-you automation workflows",
      "Automated lead assignment to team members",
      "Multi-channel follow-up (IG DMs, Email, SMS, Voicemail)",
      "Smart lead scoring & auto-tagging",
      "Content scheduler for IG, FB, LinkedIn",
      "Sales team performance tracking",
      "Automated invoice & contract delivery",
      "AI-powered nurture sequences",
      "Google/Facebook Ads management",
      "Unlimited automation potential",
      "2 onboarding strategy calls/month",
      "No contracts – cancel anytime",
    ],
    cta: "Most Popular",
    href: "/contact?package=crm-automations",
  },
  {
    name: "PRO (AI + DFY)",
    description: "Ideal for established teams scaling fast or replacing headcount.",
    price: "997",
    period: "month",
    popular: false,
    features: [
      "Everything in CRM + AUTOMATIONS, PLUS:",
      "Custom-built AI Agent (outreach, follow-up, qualification)",
      "Replace a full-time admin + missed calls + slow follow-ups",
      "UNLIMITED AI TEXT + AI VOICE (No Extra Costs)",
      "Advanced AI workflows for cold outreach + demo booking",
      "Unlimited Funnels/Websites",
      "On-demand CRM customizations",
    ],
    cta: "Go Pro",
    href: "/contact?package=pro",
  },
]

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Once you sign up, we typically have your CRM configured and ready within 24-48 hours. Our team will schedule an onboarding call to walk you through everything and ensure you're set up for success.",
  },
  {
    question: "Are there any contracts or long-term commitments?",
    answer: "No contracts at all! All of our plans are month-to-month. You can cancel anytime with no penalties or hidden fees.",
  },
  {
    question: "What's included in the AI capabilities?",
    answer: "Our AI features include chatbots for inbound leads, AI-powered text and voice for outreach, smart lead scoring, and automated nurture sequences. The PRO plan includes unlimited AI text and voice with no per-message costs.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at your next billing cycle.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes! If you need something beyond our standard packages, reach out and we'll create a tailored solution that fits your specific needs and scale.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include access to our support team. Higher tier plans include strategy calls and dedicated onboarding. We're committed to your success and are here to help whenever you need it.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-6">
                Pricing
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
                Simple, Transparent{" "}
                <span className="text-gradient">Pricing</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Choose the package that fits your needs. No contracts, no hidden fees — just powerful tools to grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Website Packages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                Website Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern builds designed to elevate your brand and drive results.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {websitePackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    pkg.popular
                      ? "bg-secondary text-secondary-foreground border-2 border-primary"
                      : "bg-card border border-border"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-medium">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-foreground"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-foreground"}`}>
                      ${pkg.price}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-primary" : "text-primary"}`} />
                        <span className={`text-sm ${pkg.popular ? "text-secondary-foreground/90" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full mt-auto ${
                      pkg.popular
                        ? "gradient-primary hover:opacity-90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="py-16 lg:py-24 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                Add-Ons & Growth Kits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stack these to scale traffic, conversions, and automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="rounded-2xl p-6 bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg flex flex-col"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-foreground mb-1">{addon.name}</h4>
                    <p className="text-sm italic text-primary">{addon.tagline}</p>
                  </div>

                  <p className="text-2xl font-bold text-foreground mb-4">{addon.price}</p>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Best for:</span> {addon.bestFor}
                  </p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {addon.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Outcome:</span>{" "}
                      <span className="text-muted-foreground">{addon.outcome}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Packages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                CRM & Automation Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Monthly subscription plans to power your lead management and automation.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    pkg.popular
                      ? "bg-secondary text-secondary-foreground border-2 border-primary"
                      : "bg-card border border-border"
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-medium">
                      Recommended
                    </span>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-foreground"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-foreground"}`}>
                      ${pkg.price}
                    </span>
                    <span className={`text-sm ${pkg.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                      {" "}/ {pkg.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-primary" : "text-primary"}`} />
                        <span className={`text-sm ${pkg.popular ? "text-secondary-foreground/90" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full rounded-full mt-auto ${
                      pkg.popular
                        ? "gradient-primary hover:opacity-90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  >
                    <Link href={pkg.href}>
                      {pkg.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-accent">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background text-primary text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-primary/5">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
