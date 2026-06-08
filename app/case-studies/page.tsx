import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies | Momentous Agency",
  description: "See how we've helped brands achieve momentous results through strategic design and digital excellence.",
}

const caseStudies = [
  {
    slug: "techcorp-rebrand",
    client: "TechCorp",
    title: "Complete Digital Transformation",
    description: "How we helped TechCorp increase conversions by 340% with a complete brand overhaul and new digital experience.",
    category: "Brand Strategy + Web Development",
    metrics: [
      { value: "+340%", label: "Conversion Rate" },
      { value: "+180%", label: "Traffic Growth" },
      { value: "2.5x", label: "Revenue Increase" },
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    slug: "innovateco-launch",
    client: "InnovateCo",
    title: "Startup to Market Leader",
    description: "Taking a fintech startup from unknown to industry leader with strategic positioning and growth marketing.",
    category: "Growth Consulting + Marketing",
    metrics: [
      { value: "$15M", label: "Revenue Generated" },
      { value: "50K+", label: "New Users" },
      { value: "#1", label: "Market Position" },
    ],
    color: "from-indigo-500 to-purple-400",
  },
  {
    slug: "futurescale-platform",
    client: "FutureScale",
    title: "Enterprise Platform Redesign",
    description: "Redesigning a complex SaaS platform to improve user experience and reduce churn by 60%.",
    category: "UX/UI Design + Development",
    metrics: [
      { value: "-60%", label: "Churn Rate" },
      { value: "+85%", label: "User Satisfaction" },
      { value: "3x", label: "Feature Adoption" },
    ],
    color: "from-teal-500 to-emerald-400",
  },
  {
    slug: "nextgen-ecommerce",
    client: "NextGen Retail",
    title: "E-Commerce Revolution",
    description: "Building a best-in-class e-commerce experience that drives $10M+ in annual revenue.",
    category: "Web Development + Marketing",
    metrics: [
      { value: "$10M+", label: "Annual Revenue" },
      { value: "+220%", label: "AOV Increase" },
      { value: "4.9/5", label: "Customer Rating" },
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    slug: "healthtech-rebrand",
    client: "HealthTech Plus",
    title: "Healthcare Brand Evolution",
    description: "Modernizing a healthcare brand to appeal to a new generation while maintaining trust.",
    category: "Brand Strategy + Content",
    metrics: [
      { value: "+150%", label: "Brand Awareness" },
      { value: "+90%", label: "Patient Signups" },
      { value: "12", label: "Industry Awards" },
    ],
    color: "from-rose-500 to-pink-400",
  },
  {
    slug: "greenearth-campaign",
    client: "GreenEarth",
    title: "Sustainability Campaign",
    description: "Launching a global sustainability campaign that reached 50M+ people worldwide.",
    category: "Content Creation + Marketing",
    metrics: [
      { value: "50M+", label: "People Reached" },
      { value: "500K", label: "Actions Taken" },
      { value: "8x", label: "ROI" },
    ],
    color: "from-green-500 to-lime-400",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-6">
                Case Studies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight mb-6 text-balance">
                Real Results for{" "}
                <span className="text-gradient">Real Brands</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Explore how we've helped ambitious brands achieve momentous growth through strategic design and digital excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20" />
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-16">
                <div className="flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 w-fit">
                    <TrendingUp className="w-4 h-4" />
                    Featured Case Study
                  </span>
                  <p className="text-primary font-medium mb-2">{caseStudies[0].client}</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                    {caseStudies[0].title}
                  </h2>
                  <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
                    {caseStudies[0].description}
                  </p>
                  <div className="flex flex-wrap gap-8 mb-8">
                    {caseStudies[0].metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-3xl font-bold text-primary">{metric.value}</p>
                        <p className="text-secondary-foreground/60 text-sm">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="rounded-full px-8 gradient-primary hover:opacity-90 transition-opacity w-fit">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudies[0].color}`} />
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/20">{caseStudies[0].client.charAt(0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(1).map((study) => (
                <Link
                  key={study.slug}
                  href="/contact"
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color}`} />
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/30">{study.client.charAt(0)}</span>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-primary font-medium">{study.client}</span>
                    <h3 className="text-xl font-semibold text-secondary mt-1 mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-lg font-bold text-secondary">{metric.value}</p>
                          <p className="text-muted-foreground text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
