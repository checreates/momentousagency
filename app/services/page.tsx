import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { 
  Palette, 
  Code, 
  BarChart3, 
  Megaphone, 
  Lightbulb, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | Momentous Agency",
  description: "Comprehensive digital services including brand strategy, web development, digital marketing, and growth consulting.",
}

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Brand Strategy & Identity",
    description: "Build a brand that commands attention and drives loyalty. We create comprehensive brand identities that tell your story and resonate with your audience.",
    features: [
      "Brand Discovery & Research",
      "Visual Identity Design",
      "Brand Guidelines & Assets",
      "Messaging & Voice Development",
      "Competitive Positioning",
      "Brand Launch Strategy",
    ],
    deliverables: "Complete brand kit including logo, color palette, typography, and comprehensive guidelines.",
  },
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    description: "High-performance websites and applications built with cutting-edge technology. We create digital experiences that convert visitors into customers.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Web Application Development",
      "CMS Implementation",
      "Performance Optimization",
      "Ongoing Maintenance",
    ],
    deliverables: "Fully responsive, SEO-optimized website with admin dashboard and analytics integration.",
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that maximize ROI. We help you reach the right audience with the right message at the right time.",
    features: [
      "SEO & Content Strategy",
      "Paid Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Analytics & Reporting",
      "Conversion Rate Optimization",
    ],
    deliverables: "Comprehensive marketing strategy with monthly reporting and continuous optimization.",
  },
  {
    id: "content",
    icon: Megaphone,
    title: "Content Creation",
    description: "Compelling content that engages and converts. From copywriting to video production, we create content that tells your story.",
    features: [
      "Copywriting & Messaging",
      "Video Production",
      "Photography",
      "Podcast Production",
      "Social Media Content",
      "Blog & Article Writing",
    ],
    deliverables: "High-quality content calendar with assets ready for multi-channel distribution.",
  },
  {
    id: "design",
    icon: Lightbulb,
    title: "UX/UI Design",
    description: "User-centered design that delights and converts. We create intuitive interfaces that make complex simple.",
    features: [
      "User Research & Testing",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
      "Accessibility Compliance",
    ],
    deliverables: "Complete design system with interactive prototypes and developer-ready specifications.",
  },
  {
    id: "consulting",
    icon: Users,
    title: "Growth Consulting",
    description: "Strategic guidance to scale your business. We help you identify opportunities and execute growth strategies.",
    features: [
      "Growth Strategy Development",
      "Market Analysis",
      "Sales Funnel Optimization",
      "Team Training & Workshops",
      "Technology Advisory",
      "KPI Development & Tracking",
    ],
    deliverables: "Actionable growth roadmap with clear milestones and accountability metrics.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight mb-6 text-balance">
                Full-Service Solutions for{" "}
                <span className="text-gradient">Ambitious Brands</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From strategy to execution, we provide everything you need to build, grow, and dominate your market.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20 lg:space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables */}
                    <div className="p-4 rounded-xl bg-accent border border-primary/10 mb-8">
                      <p className="text-sm font-medium text-secondary mb-1">Deliverables:</p>
                      <p className="text-muted-foreground">{service.deliverables}</p>
                    </div>

                    <Button asChild className="rounded-full px-8 gradient-primary hover:opacity-90 transition-opacity">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                      {/* Decorative gradient */}
                      <div className="absolute inset-0 gradient-primary opacity-80" />
                      
                      {/* Grid pattern */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                          backgroundSize: '30px 30px'
                        }}
                      />

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="w-32 h-32 text-white/20" />
                      </div>

                      {/* Floating elements */}
                      <div className="absolute top-8 left-8 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <span className="text-white font-medium text-sm">{service.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
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
