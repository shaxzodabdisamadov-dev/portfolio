'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { portfolioData } from '@/app/data/portfolio'

export function About() {
  const t = useTranslations('about')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-primary to-violet-primary bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-primary to-cyan-primary/20" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-light">
                {t('headline')}
              </h3>
              <div className="space-y-4 text-dark-muted/90 leading-relaxed">
                {t('description').split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-sm border border-cyan-primary/30 bg-dark-card/50 backdrop-blur-sm h-fit"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-primary to-cyan-light bg-clip-text text-transparent">
                    {portfolioData.personal.experience}
                  </p>
                  <p className="text-sm text-dark-muted/70 mt-2">{t('experience')}</p>
                </div>
                <div className="pt-6 border-t border-dark-border">
                  <p className="text-sm font-mono text-cyan-primary/70 mb-2">{t('education')}</p>
                  <p className="text-sm font-semibold text-dark-text">
                    {t('university')}
                  </p>
                  <p className="text-xs text-dark-muted/70 mt-1">
                    {t('degree')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
