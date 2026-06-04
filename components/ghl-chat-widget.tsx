import Script from "next/script"

const WIDGET_ID = "69eb561abd8fe8da4a4b311a"
const LOCATION_ID = "HfkuKJhCSVosS7wfITUj"

/** LeadConnector / GoHighLevel chat widget — sole SMS opt-in path (widget-first A2P) */
export function GhlChatWidget() {
  return (
    <>
      <div
        data-chat-widget
        data-widget-id={WIDGET_ID}
        data-location-id={LOCATION_ID}
      />
      <Script
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id={WIDGET_ID}
        strategy="afterInteractive"
      />
    </>
  )
}
