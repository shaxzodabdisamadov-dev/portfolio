'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navigationItems, portfolioData } from '@/app/data/portfolio'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-primary to-violet-primary bg-clip-text text-transparent">
              SA.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-dark-muted hover:text-cyan-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* GitHub Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-cyan-primary text-cyan-primary hover:bg-cyan-primary/10 rounded transition-all duration-300"
            >
              GitHub
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-dark-card rounded transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-cyan-primary transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-cyan-primary transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-cyan-primary transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-6 space-y-3"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium text-dark-muted hover:text-cyan-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://github.com/${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 text-sm font-medium border border-cyan-primary text-cyan-primary hover:bg-cyan-primary/10 rounded transition-all duration-300 text-center"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
