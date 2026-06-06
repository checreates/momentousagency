"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Momentous stripped away every layer of complexity. Our conversion rate increased 340% in three months — and we finally have a brand that commands attention without saying a word.",
    author: "Sarah Chen",
    title: "CEO, TechCorp",
    rating: 5,
    metric: "+340% CVR",
  },
  {
    quote: "They don't add fluff — they remove it. Their strategic architecture took us from unknown startup to industry leader in under two years. Ice cold precision, on fire results.",
    author: "Michael Roberts",
    title: "Founder, InnovateCo",
    rating: 5,
    metric: "$15M+ Revenue",
  },
  {
    quote: "Radical transparency is real here. Every deliverable, every decision — fully explained, fully owned. True partners who design systems that scale.",
    author: "Emily Watson",
    title: "CMO, FutureScale",
    rating: 5,
    metric: "87% Automation",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function TestimonialsSection() {
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
            Client Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Can You{" "}
            <span className="text-gradient">SEE</span>{" "}
            the Difference?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real brands. Radical transparency. Momentous results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative p-8 rounded-2xl glass-card hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Metric badge */}
              <div
                className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                style={{ background: 'linear-gradient(135deg, #0A1A2F, #0D2440)', color: '#6ECFF5' }}
              >
                {testimonial.metric}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Star className="w-4 h-4" style={{ fill: '#6ECFF5', color: '#6ECFF5' }} />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1 text-[0.95rem]">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0A1A2F, #6ECFF5)' }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
