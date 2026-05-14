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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0088CC 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating circles */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Now Accepting New Clients</span>
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
              We transform ambitious brands into market leaders through strategic design, cutting-edge technology, and data-driven marketing that delivers momentous results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" className="rounded-full px-8 gradient-primary hover:opacity-90 transition-opacity text-white">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative lg:pl-8"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl" />
              
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

              {/* Floating project cards with logo */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-4 top-1/4"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-primary/40 rounded-2xl blur-xl" />
                  <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/images/logo.png"
                      alt="Project"
                      width={80}
                      height={80}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-sm font-medium text-secondary mt-2">250+ Projects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-primary/40 rounded-2xl blur-xl" />
                  <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/images/logo.png"
                      alt="Project"
                      width={80}
                      height={80}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-sm font-medium text-secondary mt-2">98% Satisfaction</p>
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
