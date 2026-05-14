import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Momentous Agency | Motivate. Innovate. Create.',
  description: 'A forward-thinking digital agency helping brands create momentous impact through strategy, design, and technology.',
  keywords: ['digital agency', 'branding', 'web design', 'marketing', 'strategy'],
  authors: [{ name: 'Momentous Agency' }],
  openGraph: {
    title: 'Momentous Agency | Motivate. Innovate. Create.',
    description: 'A forward-thinking digital agency helping brands create momentous impact.',
    type: 'website',
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
        <Analytics />
      </body>
    </html>
  )
}
