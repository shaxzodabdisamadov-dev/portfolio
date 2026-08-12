'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { portfolioData } from '@/app/data/portfolio'

export function Education() {
  const t = useTranslations('education')

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
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
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

          {/* Education Cards */}
          <div className="max-w-2xl">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-8 rounded-sm border border-cyan-primary/20 bg-dark-card/50 backdrop-blur-sm hover:border-cyan-primary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-cyan-light">
                      {portfolioData.about.education.university}
                    </h3>
                    <p className="text-dark-muted/80 mt-1 text-sm sm:text-base">
                      {portfolioData.about.education.degree}
                    </p>
                  </div>
                  <span className="text-3xl">🎓</span>
                </div>

                {/* Details */}
                <div className="pt-4 border-t border-dark-border space-y-2">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-dark-muted/50">
                      {t('fieldOfStudy')}
                    </p>
                    <p className="text-sm text-dark-text mt-1">
                      {portfolioData.about.education.degree}
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-dark-muted/50">
                      {t('focusAreas')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Telecommunications', 'Infrastructure', 'Networking'].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-mono rounded-sm bg-cyan-primary/10 text-cyan-light border border-cyan-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-primary/5 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
