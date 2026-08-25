import React, { useState, useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

// Lazy load components for better performance
const AboutSection = lazy(() => import('./components/AboutSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (loading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [loading])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative bg-[#0a0a0a] text-gray-100 min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <Suspense fallback={<div className="h-screen" />}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Suspense>
    </div>
  )
}

export default App