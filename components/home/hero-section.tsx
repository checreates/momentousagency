"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const stats = [
  { value: "$24.8M", label: "Revenue Generated", position: "left" },
  { value: "342%", label: "Average ROI", position: "right" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glass Blue grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6ECFF5 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glacial glow orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(110, 207, 245, 0.12)' }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(10, 26, 47, 0.06)' }}
        />
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(110, 207, 245, 0.05)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#FF4F2E' }} />
                <span className="text-sm font-medium text-foreground tracking-wide">
                  Ice Cold &amp; On Fire — Now Accepting New Clients
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance"
            >
              Motivate.{" "}
              <span className="text-gradient">Innovate.</span>{" "}
              Create.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              We clarify the path, simplify the complex, and automate the grind — transforming ambitious brands into market leaders with radical transparency and precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 gradient-primary hover:opacity-90 transition-opacity text-white"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                >
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative lg:pl-8"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glacial glow behind logo */}
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(110, 207, 245, 0.25) 0%, rgba(10, 26, 47, 0.08) 60%, transparent 100%)' }}
              />

              {/* Logo */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="Momentous Agency"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating stat card — left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-4 top-1/4"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-2xl blur-xl"
                    style={{ background: 'rgba(110, 207, 245, 0.3)' }}
                  />
                  <div className="relative glass-card rounded-2xl p-4 min-w-[140px]">
                    <p className="text-2xl font-bold text-foreground">$24.8M</p>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">Revenue Generated</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card — right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-2xl blur-xl"
                    style={{ background: 'rgba(110, 207, 245, 0.3)' }}
                  />
                  <div className="relative glass-card rounded-2xl p-4 min-w-[120px]">
                    <p className="text-2xl font-bold text-foreground">342%</p>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">Average ROI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
