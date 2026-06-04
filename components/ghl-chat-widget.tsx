"use client"

import { useEffect } from "react"

const WIDGET_ID = "69eb561abd8fe8da4a4b311a"
const LOCATION_ID = "HfkuKJhCSVosS7wfITUj"
const LOADER_SRC = "https://beta.leadconnectorhq.com/loader.js"
const RESOURCES_URL = "https://beta.leadconnectorhq.com/chat-widget/loader.js"

/**
 * Injects the exact LeadConnector embed (div + loader).
 * next/script alone did not reliably render the mount node in production.
 */
export function GhlChatWidget() {
  useEffect(() => {
    if (!document.querySelector("[data-chat-widget]")) {
      const mount = document.createElement("div")
      mount.setAttribute("data-chat-widget", "")
      mount.setAttribute("data-widget-id", WIDGET_ID)
      mount.setAttribute("data-location-id", LOCATION_ID)
      document.body.appendChild(mount)
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${LOADER_SRC}"]`
    )
    if (!existing) {
      const script = document.createElement("script")
      script.src = LOADER_SRC
      script.async = true
      script.setAttribute("data-resources-url", RESOURCES_URL)
      script.setAttribute("data-widget-id", WIDGET_ID)
      document.body.appendChild(script)
    }
  }, [])

  return null
}
