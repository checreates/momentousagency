"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Copy, Check, ArrowRight, ExternalLink } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const colors = [
  {
    name: "Deep Glacier Navy",
    hex: "#0A1A2F",
    rgb: "10, 26, 47",
    oklch: "oklch(0.17 0.055 258)",
    role: "Authority · Depth",
    usage: "Primary CTAs, headings, authority surfaces",
    ratio: "60%",
    textColor: "#EFFFFF",
  },
  {
    name: "Ice Clear",
    hex: "#EFFFFF",
    rgb: "239, 255, 255",
    oklch: "oklch(0.97 0.025 200)",
    role: "Purity · Clarity",
    usage: "Primary backgrounds, light surfaces",
    ratio: "20%",
    textColor: "#0A1A2F",
  },
  {
    name: "Liquid Glass Blue",
    hex: "#6ECFF5",
    rgb: "110, 207, 245",
    oklch: "oklch(0.81 0.09 215)",
    role: "Fluidity · Glass Effect",
    usage: "Accents, borders, ring, shimmer highlights",
    ratio: "10%",
    textColor: "#0A1A2F",
  },
  {
    name: "Diamond White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    oklch: "oklch(1 0 0)",
    role: "Precision · Sharp",
    usage: "Cards, text on dark surfaces",
    ratio: "5%",
    textColor: "#0A1A2F",
  },
  {
    name: "Electric Fire Ember",
    hex: "#FF4F2E",
    rgb: "255, 79, 46",
    oklch: "oklch(0.65 0.22 28)",
    role: "On Fire · Accent",
    usage: "Sparse use: alerts, CTAs, emphasis moments",
    ratio: "5%",
    textColor: "#FFFFFF",
  },
  {
    name: "Glacier Surface",
    hex: "#0D2440",
    rgb: "13, 36, 64",
    oklch: "oklch(0.20 0.06 255)",
    role: "Surface · Panels",
    usage: "Dark section backgrounds, panel surfaces",
    ratio: "—",
    textColor: "#EFFFFF",
  },
  {
    name: "Molten Silver",
    hex: "#C7D1D9",
    rgb: "199, 209, 217",
    oklch: "oklch(0.85 0.015 228)",
    role: "Metallic Clarity",
    usage: "Muted text, subtle borders, secondary UI",
    ratio: "—",
    textColor: "#0A1A2F",
  },
  {
    name: "Frost Black",
    hex: "#0D0D0D",
    rgb: "13, 13, 13",
    oklch: "oklch(0.09 0 0)",
    role: "Contrast · Dominance",
    usage: "Body text on light backgrounds",
    ratio: "—",
    textColor: "#EFFFFF",
  },
]

const typeSpecimens = [
  {
    label: "Command",
    tag: "Display / 900",
    family: "Space Grotesk",
    weight: 900,
    size: "clamp(2rem, 5vw, 4rem)",
    letterSpacing: "0.02em",
    textTransform: "uppercase" as const,
    sample: "MOTIVATE. INNOVATE. CREATE.",
    desc: "Headlines, hero moments, poster text. All caps. Widest spacing. Maximum authority.",
  },
  {
    label: "Storytelling",
    tag: "Medium / 600",
    family: "Space Grotesk",
    weight: 600,
    size: "clamp(1.25rem, 2.5vw, 1.75rem)",
    letterSpacing: "0",
    textTransform: "none" as const,
    sample: "We clarify the path, simplify the complex, and automate the grind — so you can focus on what's inevitable.",
    desc: "Subheadings, narrative web copy, feature callouts. Sentence case. Confident weight.",
  },
  {
    label: "Body",
    tag: "Regular / 400",
    family: "Space Grotesk",
    weight: 400,
    size: "1rem",
    letterSpacing: "0",
    textTransform: "none" as const,
    sample: "Every decision is intentional. Every system is designed for inevitability. This is what radical transparency looks like in practice — no blur, no fluff, no confusion.",
    desc: "Paragraphs, UI copy, descriptions. Comfortable reading weight. Never weak, never loud.",
  },
  {
    label: "Technical",
    tag: "Mono / 500",
    family: "JetBrains Mono",
    weight: 500,
    size: "0.875rem",
    letterSpacing: "0.02em",
    textTransform: "none" as const,
    sample: "system.clarify()  →  architect()  →  execute()  →  scale()",
    desc: "Architecture diagrams, automation flows, code snippets, data labels. Precision in motion.",
    mono: true,
  },
]

const pillars = [
  {
    number: "01",
    title: "Ice Cold & On Fire",
    desc: "Calculated. Precise. Unwavering in method, relentless in execution. Never reactive — always inevitable.",
    color: "#6ECFF5",
  },
  {
    number: "02",
    title: "Strip the Noise",
    desc: "Reveal what's real. Remove, don't add. Clarity is not a feature — it is the competitive advantage.",
    color: "#6ECFF5",
  },
  {
    number: "03",
    title: "I Am Speaking",
    desc: "Direct, not loud. Clear, not complicated. Speak with certainty — never with hesitation.",
    color: "#FF4F2E",
  },
  {
    number: "04",
    title: "The Architect",
    desc: "Designs systems, not just solutions. Every output is a blueprint for clarity and inevitability.",
    color: "#FF4F2E",
  },
]

const phrases = [
  { phrase: "Let it Flow", context: "Motion, systems running seamlessly, frictionless execution" },
  { phrase: "Can you SEE?", context: "Clarity reveal, transparency moment, insight landing" },
  { phrase: "ARE WE CLEAR", context: "Closing authority statement, maximum emphasis" },
  { phrase: "Fully Transparent", context: "Trust signal, radical honesty, no blur" },
  { phrase: "Ice Cold & On Fire", context: "Primary brand tension — precision meets relentlessness" },
  { phrase: "Liquid Glass", context: "The aesthetic system itself — fluid, structured, clear" },
]

const voiceDos = [
  "Speak with certainty and conviction",
  "Use short, sharp, declarative sentences",
  "Remove all filler — command attention",
  "Focus on outcomes, not features",
  "Reward the reader with clarity",
]

const voiceDonts = [
  "Over-explain or hedge",
  "Use soft language or qualifiers",
  "Add unnecessary adjectives",
  "Blend into industry clichés",
  "Sound uncertain — ever",
]

const principles = [
  {
    num: "01",
    title: "Showcase Purpose",
    desc: "Explain the why, not the what. Every piece of content must answer: why does this matter? What does the client gain?",
  },
  {
    num: "02",
    title: "Implement Automation",
    desc: "Show systems, flows, architecture. Make the invisible visible. Demonstrate the engine, not just the output.",
  },
  {
    num: "03",
    title: "Control the Room",
    desc: "Speak with clarity, precision, and authority. Every post, page, and presentation must command — not beg — for attention.",
  },
]

const metrics = [
  { value: "$24.8M", label: "Revenue Generated" },
  { value: "342%", label: "Average ROI" },
  { value: "87%", label: "Automation Rate" },
  { value: "98%", label: "Client Satisfaction" },
]

const gradients = [
  {
    name: "Glacier Primary",
    className: "gradient-primary",
    desc: "Deep Navy → Glacier Surface. Authority, CTAs, dark panels.",
    usage: ".gradient-primary",
    lightText: true,
  },
  {
    name: "Liquid Glass",
    className: "gradient-glass",
    desc: "Glass Blue → Glacier Surface. Hero accents, special reveals.",
    usage: ".gradient-glass",
    lightText: true,
  },
  {
    name: "Electric Ember",
    className: "gradient-ember",
    desc: "Electric Fire → Dark Ember. Alert states, on-fire moments.",
    usage: ".gradient-ember",
    lightText: true,
  },
  {
    name: "Ice Hero",
    className: "gradient-hero",
    desc: "Ice Clear → Diamond White. Primary hero and section backgrounds.",
    usage: ".gradient-hero",
    lightText: false,
  },
]

const navItems = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "logo", label: "Logo" },
  { id: "glass", label: "Glass UI" },
  { id: "voice", label: "Voice & Tone" },
  { id: "architecture", label: "Architecture" },
  { id: "gradients", label: "Gradients" },
  { id: "numbers", label: "Numbers" },
]

// ─── Copy Button ─────────────────────────────────────────────────────────────

function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all"
      style={{
        background: copied ? 'rgba(110, 207, 245, 0.2)' : 'rgba(0,0,0,0.06)',
        color: copied ? '#0A1A2F' : 'inherit',
      }}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {label ?? value}
    </button>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
        style={{ background: 'rgba(110, 207, 245, 0.12)', color: '#0A1A2F', border: '1px solid rgba(110, 207, 245, 0.25)' }}
      >
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">{title}</h2>
      {desc && <p className="text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandPage() {
  const [activeSection, setActiveSection] = useState("colors")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden gradient-primary">
          {/* Glass Blue shimmer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(110,207,245,0.14) 0%, transparent 60%)' }}
          />
          {/* Ember glow */}
          <div
            className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,79,46,0.1) 0%, transparent 70%)' }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #6ECFF5 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(110,207,245,0.1)', border: '1px solid rgba(110,207,245,0.25)', color: '#6ECFF5' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ECFF5] animate-pulse" />
                Liquid Glass Brand System · v1.0
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wide mb-4 leading-none"
                style={{ color: '#EFFFFF' }}
              >
                Momentous<br />
                <span style={{ color: '#6ECFF5' }}>Brand</span> Kit
              </h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(239,255,255,0.6)' }}>
                Liquid Glass · Ice Cold · On Fire · Fully Transparent
              </p>
            </motion.div>

            {/* Metric strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-14"
              style={{ background: 'rgba(110,207,245,0.12)', borderTop: '1px solid rgba(110,207,245,0.15)' }}
            >
              {metrics.map((m) => (
                <div key={m.label} className="px-6 py-5" style={{ background: 'rgba(10,26,47,0.6)' }}>
                  <p className="text-2xl sm:text-3xl font-black" style={{ color: '#EFFFFF' }}>{m.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: 'rgba(239,255,255,0.45)' }}>{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Sticky Chapter Nav ── */}
        <div className="sticky top-16 md:top-20 z-40 glass-nav border-t" style={{ borderTopColor: 'rgba(110,207,245,0.15)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap"
                  style={{
                    background: activeSection === item.id ? '#0A1A2F' : 'transparent',
                    color: activeSection === item.id ? '#EFFFFF' : '#64748b',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Colors ── */}
        <section id="colors" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Color System"
              title={<>Palette of <span className="text-gradient">Liquid Glass</span></>}
              desc="Eight purposeful colors. One cohesive system. The usage ratio keeps the brand disciplined: 60% Navy authority, 20% Ice clarity, 10% Glass accent, 5% White precision, 5% Ember fire."
            />

            {/* Usage ratio bar */}
            <div className="flex rounded-full overflow-hidden h-3 mb-12 max-w-xl">
              <div style={{ width: '60%', background: '#0A1A2F' }} />
              <div style={{ width: '20%', background: '#EFFFFF', border: '1px solid #C7D1D9' }} />
              <div style={{ width: '10%', background: '#6ECFF5' }} />
              <div style={{ width: '5%', background: '#FFFFFF', border: '1px solid #C7D1D9' }} />
              <div style={{ width: '5%', background: '#FF4F2E' }} />
            </div>
            <div className="flex flex-wrap gap-4 mb-16 text-xs font-medium text-muted-foreground">
              {[
                { color: '#0A1A2F', label: '60% Navy', text: '#fff' },
                { color: '#EFFFFF', label: '20% Ice', text: '#0A1A2F', border: true },
                { color: '#6ECFF5', label: '10% Glass', text: '#0A1A2F' },
                { color: '#FFFFFF', label: '5% White', text: '#0A1A2F', border: true },
                { color: '#FF4F2E', label: '5% Ember', text: '#fff' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: s.color, border: s.border ? '1px solid #C7D1D9' : undefined }}
                  />
                  {s.label}
                </div>
              ))}
            </div>

            {/* Color cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {colors.map((c, i) => (
                <motion.div
                  key={c.hex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: 'rgba(110,207,245,0.15)' }}
                >
                  {/* Swatch */}
                  <div
                    className="h-32 flex items-end p-4"
                    style={{ background: c.hex, border: c.hex === '#FFFFFF' || c.hex === '#EFFFFF' ? '1px solid #C7D1D9' : undefined }}
                  >
                    {c.ratio !== "—" && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          color: c.textColor,
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {c.ratio}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 bg-card">
                    <p className="font-semibold text-foreground text-sm mb-1">{c.name}</p>
                    <p className="text-xs text-muted-foreground mb-3">{c.role}</p>
                    <div className="space-y-1.5">
                      <CopyButton value={c.hex} />
                      <div className="text-xs text-muted-foreground font-mono">RGB {c.rgb}</div>
                      <div className="text-xs text-muted-foreground font-mono leading-tight">{c.oklch}</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed border-t pt-3" style={{ borderColor: 'rgba(110,207,245,0.1)' }}>
                      {c.usage}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Typography ── */}
        <section id="typography" className="py-24" style={{ background: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Typography"
              title="Space Grotesk × JetBrains Mono"
              desc="Wide, intentional spacing. Structure over decoration. Four distinct styles — each serving a specific communication function."
            />

            <div className="space-y-4">
              {typeSpecimens.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: 'rgba(110,207,245,0.2)' }}
                >
                  {/* Label row */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b"
                    style={{ background: 'rgba(10,26,47,0.03)', borderColor: 'rgba(110,207,245,0.15)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-foreground uppercase tracking-widest">{t.label}</span>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-mono"
                        style={{ background: 'rgba(110,207,245,0.12)', color: '#0A1A2F' }}
                      >
                        {t.tag}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.desc}</span>
                  </div>

                  {/* Specimen */}
                  <div className="px-6 py-8 bg-card">
                    <p
                      style={{
                        fontFamily: t.mono ? "'JetBrains Mono', monospace" : "'Space Grotesk', sans-serif",
                        fontWeight: t.weight,
                        fontSize: t.size,
                        letterSpacing: t.letterSpacing,
                        textTransform: t.textTransform,
                        lineHeight: t.weight === 900 ? 1 : 1.6,
                        color: '#0A1A2F',
                      }}
                    >
                      {t.sample}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Type pairing note */}
            <div
              className="mt-8 p-6 rounded-2xl flex items-start gap-4"
              style={{ background: 'rgba(10,26,47,0.04)', border: '1px solid rgba(110,207,245,0.15)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                style={{ background: '#0A1A2F' }}
              >
                Aa
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Typeface Note</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Space Grotesk approximates the precision of Neue Haas Grotesk for web use. For print and high-fidelity brand materials, license{" "}
                  <strong>Neue Haas Grotesk</strong> or <strong>Helvetica Now</strong>. JetBrains Mono is free and available via Google Fonts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Logo ── */}
        <section id="logo" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="The Liquid M"
              title={<>The Mark that <span className="text-gradient">Flows</span></>}
              desc="The M refracts light, bends motion, and flows like water while holding shape like ice. It reveals structure like glass. This is not a logo — it is brand philosophy as form."
            />

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Logo display */}
              <div>
                {/* Dark version */}
                <div
                  className="rounded-2xl p-12 flex items-center justify-center mb-4"
                  style={{ background: '#0A1A2F' }}
                >
                  <Image src="/images/logo.png" alt="Momentous Logo — dark" width={200} height={200} className="w-40 h-40 object-contain" />
                </div>
                <p className="text-xs text-muted-foreground text-center mb-6">On Deep Glacier Navy — preferred use</p>

                {/* Light version */}
                <div
                  className="rounded-2xl p-12 flex items-center justify-center mb-4 border"
                  style={{ background: '#EFFFFF', borderColor: 'rgba(110,207,245,0.3)' }}
                >
                  <Image src="/images/logo.png" alt="Momentous Logo — light" width={200} height={200} className="w-40 h-40 object-contain" />
                </div>
                <p className="text-xs text-muted-foreground text-center">On Ice Clear — secondary use</p>
              </div>

              {/* Logo guidelines */}
              <div className="space-y-8">
                {/* Five meanings */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">The Five M's</h3>
                  <div className="space-y-2">
                    {["Mindset", "Movement", "Momentum", "Method", "Mastery"].map((m, i) => (
                      <div key={m} className="flex items-center gap-3">
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: 'rgba(110,207,245,0.15)', color: '#0A1A2F' }}
                        >
                          {i + 1}
                        </span>
                        <span className="font-medium text-foreground">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Do's and Don'ts */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-5 rounded-xl"
                    style={{ background: 'rgba(110,207,245,0.06)', border: '1px solid rgba(110,207,245,0.2)' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0A1A2F' }}>Do</p>
                    <ul className="space-y-2">
                      {[
                        "Use on dark backgrounds",
                        "Apply glass, ice, water textures",
                        "Use in motion + 3D",
                        "Maintain clear space",
                      ].map((d) => (
                        <li key={d} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span style={{ color: '#6ECFF5' }} className="mt-0.5 flex-shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="p-5 rounded-xl"
                    style={{ background: 'rgba(255,79,46,0.04)', border: '1px solid rgba(255,79,46,0.15)' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FF4F2E' }}>Don&apos;t</p>
                    <ul className="space-y-2">
                      {[
                        "Flatten or distort",
                        "Add off-palette gradients",
                        "Place on busy backgrounds",
                        "Recolor arbitrarily",
                      ].map((d) => (
                        <li key={d} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span style={{ color: '#FF4F2E' }} className="mt-0.5 flex-shrink-0">✕</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Three story elements */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">The Story Elements</h3>
                  <div className="space-y-3">
                    {[
                      { element: "Water", trait: "Flexibility", desc: "Adapts to any shape without breaking" },
                      { element: "Ice", trait: "Durability", desc: "Strength and structure under pressure" },
                      { element: "Glass", trait: "Transparency", desc: "Reveals architecture, hides nothing" },
                    ].map((s) => (
                      <div
                        key={s.element}
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{ background: 'rgba(110,207,245,0.05)', border: '1px solid rgba(110,207,245,0.12)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{ background: 'rgba(110,207,245,0.15)', color: '#0A1A2F' }}
                        >
                          {s.element[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{s.element} → {s.trait}</p>
                          <p className="text-xs text-muted-foreground">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Glass UI System ── */}
        <section id="glass" className="py-24" style={{ background: '#EFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Glass UI System"
              title="Live Component Demos"
              desc="Four distinct glass variants for different surface contexts. Each has been tuned for legibility, brand alignment, and appropriate elevation."
            />

            {/* Light variants */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Light Mode Variants</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* glass-card */}
                <div className="space-y-2">
                  <div className="glass-card rounded-2xl p-6 h-40 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg gradient-primary" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Glass Card</p>
                      <p className="text-xs text-muted-foreground">Primary content surface</p>
                    </div>
                  </div>
                  <CopyButton value="glass-card" label=".glass-card" />
                  <p className="text-xs text-muted-foreground">bg 72% white · blur 20px · Glass Blue border</p>
                </div>

                {/* glass-panel */}
                <div className="space-y-2">
                  <div className="glass-panel rounded-2xl p-6 h-40 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #6ECFF5, #0A1A2F)' }} />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Glass Panel</p>
                      <p className="text-xs text-muted-foreground">Elevated feature surface</p>
                    </div>
                  </div>
                  <CopyButton value="glass-panel" label=".glass-panel" />
                  <p className="text-xs text-muted-foreground">bg 60% white · blur 40px · stronger shadow</p>
                </div>

                {/* glass-nav */}
                <div className="space-y-2">
                  <div className="glass-nav rounded-2xl p-6 h-40 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded gradient-primary" />
                      <div className="w-5 h-5 rounded" style={{ background: '#6ECFF5' }} />
                      <div className="w-5 h-5 rounded" style={{ background: '#FF4F2E' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">Glass Nav</p>
                      <p className="text-xs text-muted-foreground">Navigation bar surface</p>
                    </div>
                  </div>
                  <CopyButton value="glass-nav" label=".glass-nav" />
                  <p className="text-xs text-muted-foreground">Ice Clear 88% · blur 28px · very subtle</p>
                </div>
              </div>
            </div>

            {/* Dark variant */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Dark Mode Variant</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div
                  className="rounded-2xl p-8"
                  style={{ background: '#0D2440' }}
                >
                  <div className="glass-dark rounded-xl p-6 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-semibold text-sm" style={{ color: '#EFFFFF' }}>System Status</p>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(110,207,245,0.15)', color: '#6ECFF5' }}>
                        Live
                      </span>
                    </div>
                    <div className="space-y-2">
                      {["Automation · Active", "Analytics · Running", "CRM Sync · 100%"].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#6ECFF5' }} />
                          <p className="text-xs font-mono" style={{ color: 'rgba(239,255,255,0.7)' }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <CopyButton value="glass-dark" label=".glass-dark" />
                  <p className="text-xs mt-2" style={{ color: 'rgba(239,255,255,0.4)' }}>Glacier 65% · blur 24px · Glass Blue border</p>
                </div>

                <div
                  className="p-6 rounded-2xl"
                  style={{ background: '#0A1A2F', border: '1px solid rgba(110,207,245,0.15)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(239,255,255,0.4)' }}>
                    CSS Properties
                  </p>
                  <pre className="text-xs leading-relaxed font-mono" style={{ color: '#6ECFF5' }}>
{`.glass-dark {
  background:
    rgba(13, 36, 64, 0.65);
  backdrop-filter:
    blur(24px);
  border:
    1px solid
    rgba(110, 207, 245, 0.15);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Voice & Tone ── */}
        <section id="voice" className="py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ background: 'rgba(110,207,245,0.12)', color: '#6ECFF5', border: '1px solid rgba(110,207,245,0.2)' }}
              >
                Voice & Tone
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: '#EFFFFF' }}>
                I Am Speaking.{" "}
                <span style={{ color: '#6ECFF5' }}>Are We Clear?</span>
              </h2>
              <p className="leading-relaxed" style={{ color: 'rgba(239,255,255,0.6)' }}>
                Authoritative. Ice-cold. Direct. Minimalist. Intentional. Transparent. Every word earns its place.
              </p>
            </div>

            {/* Do / Don't */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="glass-dark rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#6ECFF5' }}>Speak Like This</p>
                <ul className="space-y-4">
                  {voiceDos.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-sm" style={{ color: '#6ECFF5' }}>→</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(239,255,255,0.8)' }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,79,46,0.06)', border: '1px solid rgba(255,79,46,0.15)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#FF4F2E' }}>Never Like This</p>
                <ul className="space-y-4">
                  {voiceDonts.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-sm" style={{ color: '#FF4F2E' }}>✕</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(239,255,255,0.6)' }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Brand phrases */}
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(239,255,255,0.4)' }}>
              Signature Phrases
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phrases.map((p) => (
                <div
                  key={p.phrase}
                  className="p-5 rounded-xl"
                  style={{ background: 'rgba(110,207,245,0.05)', border: '1px solid rgba(110,207,245,0.12)' }}
                >
                  <p className="font-black text-xl uppercase tracking-wide leading-none mb-2" style={{ color: '#EFFFFF' }}>
                    {p.phrase}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(239,255,255,0.5)' }}>{p.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Architecture ── */}
        <section id="architecture" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Brand Architecture"
              title={<>The Four <span className="text-gradient">Pillars</span></>}
              desc="Three core values — Precision, Power, Radical Transparency — built on four foundational brand pillars that guide every decision, deliverable, and communication."
            />

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-xs font-black font-mono flex-shrink-0 mt-1"
                      style={{ color: p.color }}
                    >
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2 tracking-tight">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission strip */}
            <div
              className="rounded-2xl p-8 grid sm:grid-cols-3 gap-8"
              style={{ background: '#0A1A2F' }}
            >
              {[
                { label: "Mission", value: "Clarify the path" },
                { label: "Method", value: "Strategy-Architecture + Automated Systems" },
                { label: "Differentiator", value: "Radical Transparency — No blur. No fluff." },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(239,255,255,0.4)' }}>
                    {item.label}
                  </p>
                  <p className="font-semibold leading-snug" style={{ color: '#EFFFFF' }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Content principles */}
            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Content Principles</p>
              <div className="grid sm:grid-cols-3 gap-6">
                {principles.map((pr, i) => (
                  <motion.div
                    key={pr.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl border"
                    style={{ borderColor: 'rgba(110,207,245,0.2)', background: 'rgba(110,207,245,0.03)' }}
                  >
                    <span className="font-black text-3xl font-mono" style={{ color: 'rgba(110,207,245,0.3)' }}>{pr.num}</span>
                    <h4 className="font-bold text-foreground mt-2 mb-2">{pr.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pr.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gradients ── */}
        <section id="gradients" className="py-24" style={{ background: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Gradients & Textures"
              title="The Gradient System"
              desc="Four brand gradients — each with a specific role. Use sparingly and intentionally. Gradients should feel earned, not decorative."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gradients.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: 'rgba(110,207,245,0.15)' }}
                >
                  <div className={`${g.className} h-36 flex items-end p-4`}>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: g.lightText ? 'rgba(239,255,255,0.7)' : 'rgba(10,26,47,0.5)' }}
                    >
                      {g.usage}
                    </span>
                  </div>
                  <div className="p-4 bg-card">
                    <p className="font-semibold text-foreground text-sm mb-1">{g.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Text gradient demo */}
            <div
              className="mt-8 p-8 rounded-2xl border"
              style={{ borderColor: 'rgba(110,207,245,0.2)', background: 'rgba(110,207,245,0.03)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Text Gradient</p>
              <p className="text-4xl sm:text-5xl font-black uppercase tracking-wide text-gradient">
                Let it Flow.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <CopyButton value="text-gradient" label=".text-gradient" />
                <span className="text-xs text-muted-foreground">Glass Blue → Deep Glacier Navy</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Numbers ── */}
        <section id="numbers" className="py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ background: 'rgba(110,207,245,0.12)', color: '#6ECFF5', border: '1px solid rgba(110,207,245,0.2)' }}
              >
                By the Numbers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: '#EFFFFF' }}>
                The Results Speak.{" "}
                <span style={{ color: '#FF4F2E' }}>Fully Transparent.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(110,207,245,0.08)' }}>
              {metrics.map((m) => (
                <div key={m.label} className="p-10" style={{ background: '#0A1A2F' }}>
                  <p
                    className="font-black leading-none mb-2"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFFFFF' }}
                  >
                    {m.value}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'rgba(239,255,255,0.5)' }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Anthem strip */}
            <div
              className="mt-8 p-8 rounded-2xl overflow-hidden relative"
              style={{ background: 'rgba(110,207,245,0.05)', border: '1px solid rgba(110,207,245,0.12)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(239,255,255,0.4)' }}>
                The Anthem
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {[
                  "Simplify & Optimize",
                  "Organize & Systemize",
                  "Architect & Idolize",
                  "We Momentous on the rise",
                ].map((line) => (
                  <span key={line} className="font-bold text-lg uppercase tracking-wide" style={{ color: '#6ECFF5' }}>
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ background: 'rgba(10,26,47,0.04)', border: '1px solid rgba(110,207,245,0.2)' }}
            >
              <div>
                <h3 className="font-bold text-2xl text-foreground mb-1">Ready to build something Momentous?</h3>
                <p className="text-muted-foreground text-sm">Start your project. No blur. No fluff. Just results.</p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-primary hover:opacity-90 transition-opacity"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`https://momentous-test-brandkit.vercel.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-foreground hover:text-background"
                  style={{ borderColor: 'rgba(10,26,47,0.2)' }}
                >
                  View Full Brand Reference <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
