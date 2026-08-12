'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function InfrastructureDiagram() {
  const t = useTranslations('infrastructureDiagram')

  const layers = [
    { label: t('user'), icon: '👤', color: 'from-cyan-primary' },
    { label: t('network'), icon: '🌐', color: 'from-violet-primary' },
    { label: t('firewall'), icon: '🔒', color: 'from-cyan-primary' },
    { label: t('server'), icon: '🖥️', color: 'from-violet-primary' },
    { label: t('application'), icon: '📱', color: 'from-cyan-primary' },
    { label: t('monitoring'), icon: '📊', color: 'from-violet-primary' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 sm:py-24 relative overflow-hidden">
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

          {/* Diagram */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
            {layers.map((layer, index) => (
              <div key={layer.label} className="w-full flex flex-col items-center">
                {/* Layer Box */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 sm:px-8 py-4 sm:py-5 rounded-sm border border-transparent bg-gradient-to-r ${layer.color} to-dark-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 relative w-full sm:w-auto`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xl sm:text-2xl">{layer.icon}</span>
                    <span className="font-mono font-semibold text-dark-bg text-sm sm:text-base">
                      {layer.label}
                    </span>
                  </div>
                </motion.div>

                {/* Connection Line */}
                {index < layers.length - 1 && (
                  <motion.div
                    animate={{ scaleY: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-cyan-primary/50 to-violet-primary/50 origin-top"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-6 rounded-sm border border-cyan-primary/20 bg-dark-card/30 backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base text-dark-muted/90 text-center leading-relaxed">
              {t('description')}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
