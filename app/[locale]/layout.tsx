import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Providers } from '@/app/providers'
import '../globals.css'

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
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const locales = ['uz', 'ru', 'en']

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#05070A" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-dark-bg text-dark-text">
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
