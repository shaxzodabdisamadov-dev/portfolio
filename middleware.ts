import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
