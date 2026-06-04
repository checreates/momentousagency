"use client"

import { useMemo, useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

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
  const [open, setOpen] = useState(false)

  const calendlyUrl = useMemo(() => {
    const params = new URLSearchParams({
      hide_landing_page_details: "1",
      hide_event_type_details: "1",
      hide_gdpr_banner: "1",
      background_color: "ffffff",
      text_color: "0f172a",
      primary_color: "0088cc",
    })
    return `https://calendly.com/chewilliamscreates?${params.toString()}`
  }, [])

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
        onClick={() => setOpen(true)}
      >
        {showIcon && <Calendar className="mr-2 w-5 h-5" />}
        {children || "Schedule a Call"}
        {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton
          className="w-[96vw] max-w-5xl p-0 overflow-hidden border-primary/20 shadow-2xl [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:opacity-90 [&_[data-slot=dialog-close]]:hover:opacity-100 [&_[data-slot=dialog-close]]:focus-visible:ring-white/40"
        >
          <DialogTitle className="sr-only">Schedule a Strategy Call</DialogTitle>
          <div className="bg-secondary px-4 py-3 border-b border-primary/20">
            <p className="text-sm font-medium text-secondary-foreground">Book your strategy call</p>
            <p className="text-xs text-secondary-foreground/70">Pick a date and time that works for you.</p>
          </div>
          <iframe
            src={calendlyUrl}
            title="Calendly scheduling"
            className="w-full h-[78vh] min-h-[620px]"
            loading="lazy"
          />
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
