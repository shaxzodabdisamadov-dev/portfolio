'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

export function ExperienceTimeline() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
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
                Experience
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-primary to-cyan-primary/20" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-6 sm:pl-12"
              >
                {/* Timeline Marker */}
                <div className="absolute left-0 top-2 sm:top-4">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                    <div className="absolute inset-0 bg-cyan-primary rounded-full animate-pulse" />
                    <div className="absolute inset-1 sm:inset-1.5 bg-dark-bg rounded-full border border-cyan-primary" />
                  </div>
                </div>

                {/* Timeline Line */}
                {index < portfolioData.experience.length - 1 && (
                  <div className="absolute left-[7px] sm:left-[9px] top-8 sm:top-12 w-0.5 h-24 bg-gradient-to-b from-cyan-primary/50 to-transparent" />
                )}

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-sm border border-cyan-primary/20 bg-dark-card/50 backdrop-blur-sm hover:border-cyan-primary/50 transition-colors duration-300"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-cyan-light">
                          {exp.position}
                        </h3>
                        <span className="text-xs sm:text-sm font-mono text-dark-muted/70">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-dark-muted/80 mt-1">{exp.company}</p>
                    </div>

                    <p className="text-sm text-dark-muted/90 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-mono rounded-sm bg-cyan-primary/10 text-cyan-light border border-cyan-primary/20 hover:border-cyan-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-primary/10 rounded-full blur-3xl -z-10 opacity-20 transform translate-y-1/2" />
    </section>
  )
}
