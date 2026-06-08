import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const CANONICAL_URL = 'https://www.momentousagency.xyz'

/** Non-canonical production hosts → www (matches Vercel project aliases). */
const REDIRECT_HOSTS = [
  'momentousagency.xyz',
  'v0-momentous-agency-ui.vercel.app',
  'v0-momentous-agency-ui-musklonsrs-projects.vercel.app',
  'v0-momentous-agency-ui-git-main-musklonsrs-projects.vercel.app',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return REDIRECT_HOSTS.map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: `${CANONICAL_URL}/:path*`,
      permanent: true,
    }))
  },
}

export default nextConfig
