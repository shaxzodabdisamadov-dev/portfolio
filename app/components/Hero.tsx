'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { systemStatusItems, portfolioData } from '@/app/data/portfolio'
import { SystemStatus } from '@/app/components/SystemStatus'

export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-cyan-primary font-mono text-xs sm:text-sm uppercase tracking-widest"
              >
                ● {t('status')}
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-primary via-cyan-light to-violet-primary bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-dark-muted">
                {t('title')}
              </h2>
              <p className="text-dark-muted/80 text-base sm:text-lg leading-relaxed">
                {t('bio')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-primary to-cyan-light text-dark-bg font-semibold rounded-sm hover:shadow-lg hover:shadow-cyan-primary/50 transition-all duration-300 text-sm sm:text-base"
              >
                {t('viewExperience')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 border border-cyan-primary text-cyan-primary font-semibold rounded-sm hover:bg-cyan-primary/10 transition-all duration-300 text-sm sm:text-base"
              >
                {t('contactMe')}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href={`https://github.com/${portfolioData.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-cyan-primary transition-colors font-mono text-sm"
              >
                GitHub
              </a>
              <span className="text-dark-border">/</span>
              <a
                href={`https://t.me/${portfolioData.personal.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-cyan-primary transition-colors font-mono text-sm"
              >
                Telegram
              </a>
              <span className="text-dark-border">/</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-dark-muted hover:text-cyan-primary transition-colors font-mono text-sm"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right - System Status */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <SystemStatus items={systemStatusItems} />
          </motion.div>
        </div>

        {/* Mobile System Status */}
        <motion.div variants={itemVariants} className="md:hidden mt-12">
          <SystemStatus items={systemStatusItems} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-cyan-primary/50">
          <span className="text-xs font-mono">{t('scrollExplore')}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
