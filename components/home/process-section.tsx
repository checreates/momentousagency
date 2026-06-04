"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, market, and goals to understand exactly what success looks like for you.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Our team develops a comprehensive roadmap with clear milestones and measurable objectives.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    description: "We bring your vision to life with pixel-perfect design and flawless technical implementation.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous optimization and iteration to maximize performance and drive sustainable growth.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const floatingGlowTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut" as const,
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            A Proven Path to{" "}
            <span className="text-primary">Momentous Results</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70 leading-relaxed">
            Our battle-tested methodology ensures every project delivers exceptional outcomes.
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
            <motion.div 
              key={step.number} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  style={{ transformOrigin: "left" }}
                  className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" 
                />
              )}

              <motion.div 
                transition={{ duration: 0.3 }}
                className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/10"
              >
                <motion.div
                  animate={{
                    opacity: [0.05, 0.18, 0.05],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ ...floatingGlowTransition, delay: index * 0.2 }}
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent"
                />

                {/* Number badge */}
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="absolute -top-4 left-8 px-3 py-1 rounded-full gradient-primary text-white text-sm font-bold"
                >
                  {step.number}
                </motion.span>

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors"
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed">
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
