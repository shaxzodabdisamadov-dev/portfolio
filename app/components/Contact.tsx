'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    // In production, integrate with your email service (Nodemailer, SendGrid, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    setIsLoading(false)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-primary to-violet-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-primary to-cyan-primary/20 mx-auto" />
            <p className="text-dark-muted/80 text-base sm:text-lg max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Reach out and let&apos;s create something great together.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="block p-4 rounded-sm border border-dark-border bg-dark-card/50 hover:border-cyan-primary/50 transition-colors"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-2">
                  Email
                </p>
                <p className="text-sm font-semibold text-cyan-light hover:text-cyan-primary transition-colors">
                  {portfolioData.personal.email}
                </p>
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/${portfolioData.personal.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-sm border border-dark-border bg-dark-card/50 hover:border-cyan-primary/50 transition-colors"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-2">
                  Telegram
                </p>
                <p className="text-sm font-semibold text-cyan-light hover:text-cyan-primary transition-colors">
                  {portfolioData.personal.telegram}
                </p>
              </a>

              {/* GitHub */}
              <a
                href={`https://github.com/${portfolioData.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-sm border border-dark-border bg-dark-card/50 hover:border-cyan-primary/50 transition-colors"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-dark-muted/50 mb-2">
                  GitHub
                </p>
                <p className="text-sm font-semibold text-cyan-light hover:text-cyan-primary transition-colors">
                  {portfolioData.personal.github}
                </p>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="md:col-span-2 space-y-4"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-dark-muted/50">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-sm border border-dark-border bg-dark-card/50 text-dark-text placeholder-dark-muted/30 focus:border-cyan-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-dark-muted/50">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-sm border border-dark-border bg-dark-card/50 text-dark-text placeholder-dark-muted/30 focus:border-cyan-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-dark-muted/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full mt-2 px-4 py-3 rounded-sm border border-dark-border bg-dark-card/50 text-dark-text placeholder-dark-muted/30 focus:border-cyan-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-primary to-cyan-light text-dark-bg font-semibold rounded-sm hover:shadow-lg hover:shadow-cyan-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 rounded-sm bg-cyan-primary/10 border border-cyan-primary/50 text-cyan-light text-sm font-medium text-center"
                >
                  ✓ Message received! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </div>

          {/* Note */}
          <motion.div variants={itemVariants} className="p-4 rounded-sm bg-dark-card/30 border border-cyan-primary/10 text-center">
            <p className="text-xs sm:text-sm text-dark-muted/70">
              <span className="font-mono">💡</span> For direct communication, reach out via email or Telegram for faster response.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-primary/10 rounded-full blur-3xl -z-10 opacity-20" />
    </section>
  )
}
