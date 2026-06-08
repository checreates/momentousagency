"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import {
  fadeUpHeroItemVariants,
  staggerHeroContainerVariants,
} from "@/lib/motion"

const stats = [
  { value: "250+", label: "Projects", position: "left-[0%] top-[18%] lg:-left-4", delay: "0s" },
  { value: "98%", label: "Satisfaction", position: "right-[0%] bottom-[22%] lg:-right-4", delay: "1.5s" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0088CC 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerHeroContainerVariants}
            initial={false}
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUpHeroItemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Now Accepting New Clients</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUpHeroItemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance"
            >
              Motivate.{" "}
              <span className="text-gradient">Innovate.</span>{" "}
              Create.
            </motion.h1>

            <motion.p
              variants={fadeUpHeroItemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              We transform ambitious brands into market leaders through strategic design, cutting-edge
              technology, and data-driven marketing that delivers momentous results.
            </motion.p>

            <motion.div variants={fadeUpHeroItemVariants} className="flex flex-wrap gap-4 pt-2">
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

          <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{ animationDelay: stat.delay }}
                className={`absolute ${stat.position} z-10 glass-card rounded-2xl px-5 py-4 shadow-lg animate-float`}
              >
                <div>
                  <p className="text-2xl font-bold text-foreground tabular-nums leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </div>
            ))}

            <div className="relative z-0 animate-float" style={{ animationDuration: "8s" }}>
              <BrandLogo
                width={280}
                height={280}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
