"use client"

import { useEffect } from "react"
import {
  GHL_LOADER_SRC,
  GHL_RESOURCES_URL,
  GHL_WIDGET_ID,
} from "@/lib/ghl-config"

function wakeWidget() {
  window.dispatchEvent(new Event("scroll", { bubbles: true }))
  document.body?.dispatchEvent(
    new PointerEvent("pointerdown", { bubbles: true })
  )
}

/**
 * LeadConnector chat widget for www.momentousagency.xyz
 * GHL embed: loader.js + data-widget-id + location mount.
 * Widget config uses load-strategy "interaction" — we wake it on mount.
 */
export function GhlChatWidget() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${GHL_LOADER_SRC}"]`
    )
    if (!existing) {
      const script = document.createElement("script")
      script.src = GHL_LOADER_SRC
      script.async = true
      script.setAttribute("data-resources-url", GHL_RESOURCES_URL)
      script.setAttribute("data-widget-id", GHL_WIDGET_ID)
      script.setAttribute("data-load-strategy", "immediate")
      document.body.appendChild(script)
    }

    wakeWidget()
    window.addEventListener("load", wakeWidget, { once: true })
    window.addEventListener("LC_chatWidgetLoaded", wakeWidget, { once: true })

    return () => {
      window.removeEventListener("load", wakeWidget)
      window.removeEventListener("LC_chatWidgetLoaded", wakeWidget)
    }
  }, [])

  return null
}
