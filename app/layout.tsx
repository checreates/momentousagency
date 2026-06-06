import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Momentous Agency | Liquid Glass Brand System',
  description: 'Ice Cold Strategy. On Fire Results. We clarify the path, simplify the complex, and automate the grind for ambitious brands.',
  keywords: ['digital agency', 'branding', 'web design', 'marketing', 'AI automation', 'growth strategy'],
  authors: [{ name: 'Momentous Agency' }],
  openGraph: {
    title: 'Momentous Agency | Liquid Glass Brand System',
    description: 'Ice Cold Strategy. On Fire Results.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1A2F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69eb561abd8fe8da4a4b311a"
          async
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
