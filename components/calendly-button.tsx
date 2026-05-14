"use client"

import { useEffect } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Declare Calendly on window
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

interface CalendlyButtonProps {
  variant?: "primary" | "outline" | "white"
  size?: "default" | "lg"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  showArrow?: boolean
}

export function CalendlyButton({ 
  variant = "primary", 
  size = "lg",
  className = "",
  children,
  showIcon = true,
  showArrow = false
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Load Calendly JS
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/chewilliamscreates"
      })
    }
  }

  const getButtonClasses = () => {
    const base = "rounded-full px-8"
    
    switch (variant) {
      case "white":
        return `${base} bg-white text-primary hover:bg-white/90 transition-colors`
      case "outline":
        return `${base} bg-white/20 border-2 border-white text-white hover:bg-white/30 transition-colors`
      case "primary":
      default:
        return `${base} gradient-primary hover:opacity-90 text-white`
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        size={size}
        className={`${getButtonClasses()} ${className}`}
        onClick={openCalendly}
      >
        {showIcon && <Calendar className="mr-2 w-5 h-5" />}
        {children || "Schedule a Call"}
        {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
      </Button>
    </motion.div>
  )
}
