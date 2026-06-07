import { createElement } from "react"
import { GHL_LOCATION_ID, GHL_WIDGET_ID } from "@/lib/ghl-config"

/**
 * Server-rendered LeadConnector mount nodes so data-location-id exists
 * in the initial HTML before loader.js runs (client-only injection was
 * missing on production).
 */
export function GhlChatMount() {
  return (
    <>
      <div
        data-chat-widget=""
        data-widget-id={GHL_WIDGET_ID}
        data-location-id={GHL_LOCATION_ID}
      />
      {createElement("chat-widget", { "data-widget-id": GHL_WIDGET_ID })}
    </>
  )
}
