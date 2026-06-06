"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code, BarChart3, Megaphone, Lightbulb, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Craft a liquid-clear brand identity that commands attention, resonates deeply, and separates you from the noise.",
    href: "/services#branding",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites and applications built with precision — every pixel intentional, every interaction smooth.",
    href: "/services#web",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven campaigns architected for maximum ROI. No guesswork — just compounding growth across every channel.",
    href: "/services#marketing",
  },
  {
    icon: Megaphone,
    title: "Content Creation",
    description: "Direct, authoritative content that tells your story with clarity and builds a brand that speaks without shouting.",
    href: "/services#content",
  },
  {
    icon: Lightbulb,
    title: "UX/UI Design",
    description: "Interfaces designed for inevitability — users flow toward conversion without friction, confusion, or hesitation.",
    href: "/services#design",
  },
  {
    icon: Cpu,
    title: "AI Growth Systems",
    description: "Automate the grind. We build AI-powered infrastructure that scales your operations and compounds your results.",
    href: "/services#consulting",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Strategy. Architecture.{" "}
            <span className="text-gradient">Automation.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From brand clarity to AI-powered systems — every solution is engineered to remove complexity and accelerate your dominance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link
                href={service.href}
                className="group relative p-8 rounded-2xl glass-card hover:shadow-xl block h-full transition-all duration-300"
                style={{ ['--hover-border-color' as string]: 'rgba(110, 207, 245, 0.4)' }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>

                {/* Link indicator */}
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
