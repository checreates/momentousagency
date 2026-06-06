"use client"

import { motion } from "framer-motion"
import { ScanSearch, Cpu, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Clarify",
    description: "Strip the noise. We map what's real — your market, goals, and competitive gaps — with radical precision and zero fluff.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Architect",
    description: "Design the system. We build a strategic roadmap engineered for inevitability, not just intent. Clear milestones, measurable outcomes.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute",
    description: "Bring it to life. Pixel-perfect implementation with automated systems powering every layer of your brand and tech stack.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description: "Let it flow. AI-driven optimization and compounding growth that turns momentum into an unstoppable market force.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(110, 207, 245, 0.12)', color: '#6ECFF5', border: '1px solid rgba(110, 207, 245, 0.2)' }}
          >
            The Method
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Clarity. Architecture.{" "}
            <span style={{ color: '#6ECFF5' }}>Flow.</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(239, 255, 255, 0.65)' }}>
            A battle-tested methodology that removes complexity, designs inevitability, and automates the grind — so you can focus on growth.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  style={{ transformOrigin: 'left', background: 'linear-gradient(to right, rgba(110, 207, 245, 0.4), transparent)' }}
                  className="hidden lg:block absolute top-12 left-1/2 w-full h-px"
                />
              )}

              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative glass-dark rounded-2xl p-8 h-full transition-all duration-300"
                style={{ '--hover-border': 'rgba(110, 207, 245, 0.3)' } as React.CSSProperties}
              >
                {/* Number badge */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="absolute -top-4 left-8 px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #6ECFF5, #0A1A2F)', color: '#EFFFFF' }}
                >
                  {step.number}
                </motion.span>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ background: 'rgba(110, 207, 245, 0.12)' }}
                >
                  <step.icon className="w-8 h-8" style={{ color: '#6ECFF5' }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: 'rgba(239, 255, 255, 0.65)' }}>
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
