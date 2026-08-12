'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
                DevOps & IT Infrastructure Specialist
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                Navigation
              </p>
              <div className="space-y-2 text-sm text-dark-muted/80">
                <a href="#home" className="block hover:text-cyan-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="block hover:text-cyan-primary transition-colors">
                  About
                </a>
                <a href="#experience" className="block hover:text-cyan-primary transition-colors">
                  Experience
                </a>
                <a href="#skills" className="block hover:text-cyan-primary transition-colors">
                  Skills
                </a>
              </div>
            </div>

            {/* More Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                More
              </p>
              <div className="space-y-2 text-sm text-dark-muted/80">
                <a href="#projects" className="block hover:text-cyan-primary transition-colors">
                  Projects
                </a>
                <a href="#education" className="block hover:text-cyan-primary transition-colors">
                  Education
                </a>
                <a href="#contact" className="block hover:text-cyan-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-4">
                Social
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
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>•</span>
              <span>DevOps & Infrastructure</span>
              <span>•</span>
              <span>Built with Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
