import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shaxzod Abdisamadov — DevOps & IT Infrastructure Specialist',
  description: 'Portfolio of Shaxzod Abdisamadov, a DevOps and IT Infrastructure specialist with 4+ years of experience in networking, servers, monitoring, firewall, Linux, Windows Server, Docker and virtualization.',
  keywords: [
    'DevOps',
    'IT Infrastructure',
    'Linux',
    'Windows Server',
    'Docker',
    'Networking',
    'Firewall',
    'Server Administration',
    'Monitoring',
    'Virtualization',
    'Cisco',
  ],
  authors: [{ name: 'Shaxzod Abdisamadov' }],
  creator: 'Shaxzod Abdisamadov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shaxzodabdisamadov.com',
    siteName: 'Shaxzod Abdisamadov - Portfolio',
    title: 'Shaxzod Abdisamadov — DevOps & IT Infrastructure Specialist',
    description: 'Professional portfolio showcasing infrastructure expertise',
    images: [
      {
        url: 'https://shaxzodabdisamadov.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shaxzod Abdisamadov Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaxzod Abdisamadov — DevOps & IT Infrastructure Specialist',
    description: 'Professional portfolio showcasing infrastructure expertise',
    creator: '@shaxzod_023',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://shaxzodabdisamadov.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#05070A" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-dark-bg text-dark-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
