'use client'

import { useRef, useEffect } from 'react'
import Footer from '@/components/footer'
import About from '@/components/pages/home/about'
import Home from '@/components/pages/home'
import Project from '@/components/pages/home/project'
import Experience from '@/components/pages/home/experience'

export default function HomePage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const computedStyle = window.getComputedStyle(sectionRef.current)
      console.log('Background color:', computedStyle.backgroundColor)
      console.log('Background image:', computedStyle.backgroundImage)
      console.log('Background (shorthand):', computedStyle.background)
    }
  }, [])

  return (
    <main className="relative bg-background container mx-auto">
      <Home ref={sectionRef} />
      <About ref={sectionRef} />
      <Project ref={sectionRef} />
      <Experience ref={sectionRef} />
      <Footer />
    </main>
  )
}
