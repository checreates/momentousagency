import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GhlChatMount } from '@/components/ghl-chat-mount'
import { GhlChatWidget } from '@/components/ghl-chat-widget'
import { BRAND_LOGO_SRC } from '@/lib/brand'
import { LEGAL } from '@/lib/legal-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(LEGAL.website),
  title: 'Momentous Agency | Motivate. Innovate. Create.',
  description:
    'A forward-thinking digital agency helping brands create momentous impact through strategy, design, and technology.',
  keywords: ['digital agency', 'branding', 'web design', 'marketing', 'strategy'],
  authors: [{ name: 'Momentous Agency' }],
  openGraph: {
    title: 'Momentous Agency | Motivate. Innovate. Create.',
    description: 'A forward-thinking digital agency helping brands create momentous impact.',
    type: 'website',
    url: LEGAL.website,
    images: [
      {
        url: BRAND_LOGO_SRC,
        width: 512,
        height: 512,
        alt: 'Momentous Agency',
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: [BRAND_LOGO_SRC],
  },
  icons: {
    icon: BRAND_LOGO_SRC,
    apple: BRAND_LOGO_SRC,
  },
}

export const viewport: Viewport = {
  themeColor: '#0088CC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <GhlChatMount />
        <GhlChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
