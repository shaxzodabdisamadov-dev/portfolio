'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface SystemStatusItem {
  label: string
  status: string
  icon: string
}

interface SystemStatusProps {
  items: SystemStatusItem[]
}

export function SystemStatus({ items }: SystemStatusProps) {
  const t = useTranslations('systemStatus')

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  const getStatusTranslation = (status: string) => {
    return t(status as any) || status
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative p-6 sm:p-8 rounded-sm border border-cyan-primary/30 bg-dark-card/50 backdrop-blur-sm overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-primary/20 blur-3xl -z-10" />

      {/* Header */}
      <div className="mb-6 pb-6 border-b border-dark-border">
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-primary animate-pulse" />
          <h3 className="text-sm font-mono font-semibold text-cyan-primary uppercase tracking-widest">
            {t('title')}
          </h3>
        </motion.div>
      </div>

      {/* Status Grid */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className="flex items-center justify-between p-3 rounded-sm bg-dark-bg/50 border border-dark-border hover:border-cyan-primary/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-dark-muted">
                  {t(item.label.toLowerCase() as any)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
              <span className="text-xs font-mono text-cyan-primary capitalize">
                {getStatusTranslation(item.status)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="mt-6 pt-6 border-t border-dark-border flex items-center justify-between text-xs font-mono text-dark-muted/50"
      >
        <span>Infrastructure Control Center</span>
        <span>{t('version')}</span>
      </motion.div>
    </motion.div>
  )
}
