'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

export function Projects() {
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
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
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
                Projects & Operations
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-primary to-cyan-primary/20" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 rounded-sm border border-cyan-primary/20 bg-dark-card/50 backdrop-blur-sm hover:border-cyan-primary/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-cyan-light">{project.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-sm bg-violet-primary/10 text-violet-light border border-violet-primary/20">
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-dark-muted/90 leading-relaxed">{project.description}</p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-dark-border">
                    <p className="text-xs font-mono text-dark-muted/50">
                      Details coming soon
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder Note */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-sm border border-cyan-primary/20 bg-dark-card/30 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-cyan-light mb-2">Projects Coming Soon</p>
                <p className="text-sm text-dark-muted/80">
                  Detailed infrastructure and systems projects demonstrating infrastructure design, network
                  implementation, and system optimization will be added here.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-primary/5 rounded-full blur-3xl -z-10 opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
