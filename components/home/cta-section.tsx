"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background: Deep Glacier Navy */}
          <div className="absolute inset-0 gradient-primary" />

          {/* Glass Blue shimmer overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 70% 20%, rgba(110, 207, 245, 0.12) 0%, transparent 60%)',
            }}
          />

          {/* Decorative orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
              style={{ background: 'rgba(110, 207, 245, 0.3)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.09, 0.04] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl"
              style={{ background: 'rgba(255, 79, 46, 0.2)' }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            {/* Ember badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255, 79, 46, 0.15)', border: '1px solid rgba(255, 79, 46, 0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F2E] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FF4F2E]">
                Are We Clear
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 text-balance"
            >
              Ice Cold Strategy.{" "}
              <span style={{ color: '#6ECFF5' }}>On Fire Results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: 'rgba(239, 255, 255, 0.75)' }}
            >
              Let&apos;s clarify the path, simplify the complex, and automate the grind. Book a free strategy call — no blur, no fluff, just actionable clarity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <CalendlyButton variant="white">
                Book a Free Call
              </CalendlyButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 border-2 text-white hover:bg-white/20 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(110, 207, 245, 0.4)' }}
                >
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust badge */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 text-sm"
              style={{ color: 'rgba(239, 255, 255, 0.45)' }}
            >
              No commitment required · 30-minute call · Radical transparency guaranteed.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
