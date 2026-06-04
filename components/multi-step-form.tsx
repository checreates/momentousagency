"use client"

// Multi-step contact form with animations (email only — SMS opt-in is via GHL chat widget)
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, CheckCircle, User, Building, Mail, Briefcase, DollarSign, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const services = [
  { id: "brand", label: "Brand Strategy & Identity", icon: "🎨" },
  { id: "web", label: "Web Development", icon: "💻" },
  { id: "marketing", label: "Digital Marketing", icon: "📈" },
  { id: "content", label: "Content Creation", icon: "✍️" },
  { id: "design", label: "UX/UI Design", icon: "🎯" },
  { id: "consulting", label: "Growth Consulting", icon: "🚀" },
]

const budgets = [
  { id: "under-5k", label: "Under $5,000", description: "Perfect for small projects" },
  { id: "5k-15k", label: "$5,000 - $15,000", description: "Most popular range" },
  { id: "15k-50k", label: "$15,000 - $50,000", description: "Comprehensive solutions" },
  { id: "50k-plus", label: "$50,000+", description: "Enterprise-level projects" },
  { id: "not-sure", label: "Not sure yet", description: "We'll help you figure it out" },
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  services: string[]
  budget: string
  message: string
}

const steps = [
  { id: 1, title: "Your Info", icon: User },
  { id: 2, title: "Company", icon: Building },
  { id: 3, title: "Services", icon: Briefcase },
  { id: 4, title: "Budget", icon: DollarSign },
  { id: 5, title: "Project", icon: MessageSquare },
]

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: "",
  })

  // Scroll to top of form when step changes (for all devices)
  useEffect(() => {
    if (formContainerRef.current) {
      // Get the form container's position relative to the viewport
      const rect = formContainerRef.current.getBoundingClientRect()
      
      // Check if the top of the form is above the viewport (scrolled past)
      // or if on mobile and need to ensure visibility
      if (rect.top < 100) {
        const yOffset = -100 // Offset to account for fixed header
        const y = rect.top + window.pageYOffset + yOffset
        
        window.scrollTo({
          top: Math.max(0, y),
          behavior: "smooth"
        })
      }
      
      // Also scroll within the form container itself if needed
      formContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [currentStep])

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email
      case 2:
        return true // Company is optional
      case 3:
        return formData.services.length > 0
      case 4:
        return formData.budget
      case 5:
        return formData.message.length > 10
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < 5 && canProceed()) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-foreground mb-4"
        >
          Message Sent Successfully!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-md mx-auto"
        >
          Thank you for reaching out, {formData.firstName}! We&apos;ll review your message and get back to you within 24 hours.
        </motion.p>
      </motion.div>
    )
  }

  const stepTitles = [
    "Let's start with your name",
    `Nice to meet you, ${formData.firstName || "there"}!`,
    "What can we help you with?",
    "What's your budget range?",
    "Tell us about your project"
  ]

  const stepSubtitles = [
    "We'd love to know who we're talking to",
    "Tell us about your company (optional)",
    "Select all that apply",
    "This helps us tailor the perfect solution",
    "Share your vision, goals, and timeline"
  ]

  return (
    <div ref={formContainerRef} className="space-y-6">
      {/* Current Step Header - Always Visible */}
      <div className="sticky top-0 bg-card z-10 pb-4 -mx-8 px-8 lg:-mx-10 lg:px-10 pt-2 -mt-2 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-white text-sm font-bold">{currentStep}</span>
          </div>
          <span className="text-sm text-muted-foreground">Step {currentStep} of 5</span>
        </div>
        <motion.h3 
          key={currentStep}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-bold text-foreground"
        >
          {stepTitles[currentStep - 1]}
        </motion.h3>
        <motion.p 
          key={`sub-${currentStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mt-1"
        >
          {stepSubtitles[currentStep - 1]}
        </motion.p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              initial={false}
              animate={{
                scale: currentStep === step.id ? 1.1 : 1,
                backgroundColor: currentStep >= step.id ? "var(--primary)" : "var(--muted)",
              }}
              className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5 text-white" />
              ) : (
                <step.icon className={`w-5 h-5 ${currentStep >= step.id ? "text-white" : "text-muted-foreground"}`} />
              )}
            </motion.div>
            {index < steps.length - 1 && (
              <div className="hidden sm:block w-12 lg:w-20 h-1 mx-2">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: currentStep > step.id ? 1 : 0 }}
                  className="h-full gradient-primary origin-left"
                  transition={{ duration: 0.3 }}
                />
                <div className="h-full bg-muted -mt-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="min-h-[320px] relative">
        <AnimatePresence mode="wait" custom={currentStep}>
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="John"
                    className="rounded-xl h-12 text-lg"
                    autoFocus
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Doe"
                    className="rounded-xl h-12 text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@company.com"
                  className="rounded-xl h-12 text-lg"
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Company */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company Name</label>
                <Input
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Your Company"
                  className="rounded-xl h-12 text-lg"
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Services */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.services.includes(service.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <span className="font-medium text-foreground">{service.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              
              <div className="space-y-3">
                {budgets.map((budget) => (
                  <motion.button
                    key={budget.id}
                    type="button"
                    onClick={() => updateFormData("budget", budget.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
                      formData.budget === budget.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-foreground">{budget.label}</p>
                      <p className="text-sm text-muted-foreground">{budget.description}</p>
                    </div>
                    {formData.budget === budget.id && (
                      <CheckCircle className="w-6 h-6 text-primary" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 5: Message */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              
              <div className="space-y-2">
                <Textarea
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="I'm looking to build a new website that..."
                  className="rounded-xl min-h-[160px] text-lg resize-none"
                  autoFocus
                />
                <p className="text-sm text-muted-foreground text-right">
                  {formData.message.length} characters
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        This form is for email inquiries only and does not sign you up for text messages.
        To receive SMS updates, use the chat widget on this site. By submitting, you agree
        to our{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>
        .
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6 border-t border-border">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="rounded-full px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          {currentStep === 5 ? (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className="rounded-full px-8 gradient-primary hover:opacity-90"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <CheckCircle className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canProceed()}
              className="rounded-full px-8 gradient-primary hover:opacity-90"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  )
}
