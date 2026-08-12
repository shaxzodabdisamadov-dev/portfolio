'use client'

import {
  Navbar,
  Hero,
  About,
  ExperienceTimeline,
  SkillsGrid,
  InfrastructureDiagram,
  Projects,
  Education,
  Contact,
  Footer,
} from '@/app/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Skills Grid */}
      <SkillsGrid />

      {/* Infrastructure Diagram */}
      <InfrastructureDiagram />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
