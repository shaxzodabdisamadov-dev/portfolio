'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { portfolioData } from '@/app/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const locale = useLocale()

  const getNavLink = (href: string) => {
    return `/${locale}${href}`
  }

  return (
    <footer className="border-t border-dark-border bg-dark-card/50 backdrop-blur-sm">
      <div className="container-custom py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-primary to-violet-primary bg-clip-text text-transparent mb-2">
                SA.
              </div>
              <p className="text-xs sm:text-sm text-dark-muted/70">
                {t('brand')}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                {t('navigation')}
              </p>
              <div className="space-y-2 text-sm text-dark-muted/80">
                <a href={getNavLink('#home')} className="block hover:text-cyan-primary transition-colors">
                  Home
                </a>
                <a href={getNavLink('#about')} className="block hover:text-cyan-primary transition-colors">
                  About
                </a>
                <a href={getNavLink('#experience')} className="block hover:text-cyan-primary transition-colors">
                  Experience
                </a>
                <a href={getNavLink('#skills')} className="block hover:text-cyan-primary transition-colors">
                  Skills
                </a>
              </div>
            </div>

            {/* More Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                {t('more')}
              </p>
              <div className="space-y-2 text-sm text-dark-muted/80">
                <a href={getNavLink('#projects')} className="block hover:text-cyan-primary transition-colors">
                  Projects
                </a>
                <a href={getNavLink('#education')} className="block hover:text-cyan-primary transition-colors">
                  Education
                </a>
                <a href={getNavLink('#contact')} className="block hover:text-cyan-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                {t('social')}
              </p>
              <div className="space-y-2">
                <a
                  href={`https://github.com/${portfolioData.personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-dark-muted/80 hover:text-cyan-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={`https://t.me/${portfolioData.personal.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-dark-muted/80 hover:text-cyan-primary transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block text-sm text-dark-muted/80 hover:text-cyan-primary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-border" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted/50 font-mono">
            <p>
              © {currentYear} {portfolioData.personal.name}. {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <span>•</span>
              <span>DevOps & Infrastructure</span>
              <span>•</span>
              <span>{t('builtWith')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
