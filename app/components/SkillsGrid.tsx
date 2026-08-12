'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

interface Skill {
  name: string
  description: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
  icon: string
}

export function SkillsGrid() {
  const categories: SkillCategory[] = [
    {
      title: 'Infrastructure',
      icon: '🏗️',
      skills: portfolioData.skills.infrastructure,
    },
    {
      title: 'Networking',
      icon: '🌐',
      skills: portfolioData.skills.networking,
    },
    {
      title: 'DevOps',
      icon: '⚙️',
      skills: portfolioData.skills.devops,
    },
    {
      title: 'Other',
      icon: '📚',
      skills: portfolioData.skills.other,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
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
                Technical Arsenal
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-primary to-cyan-primary/20" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-dark-border">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-cyan-light">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="p-3 rounded-sm border border-dark-border bg-dark-bg/50 hover:border-cyan-primary/50 hover:bg-dark-card/50 transition-all duration-300 cursor-default"
                    >
                      <p className="text-sm font-medium text-dark-text">{skill.name}</p>
                      <p className="text-xs text-dark-muted/70 mt-1">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-primary/5 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
