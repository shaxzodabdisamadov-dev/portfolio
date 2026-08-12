import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shaxzod Abdisamadov — DevOps & IT Infrastructure Specialist',
  description: 'Portfolio of Shaxzod Abdisamadov, a DevOps and IT Infrastructure specialist with 4+ years of experience in networking, servers, monitoring, firewall, Linux, Windows Server, Docker and virtualization.',
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
    <html suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#05070A" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
