'use client'

import Footer from '@/components/footer'
import Tech from '@/components/pages/home/tech'
import Home from '@/components/pages/home'
import Project from '@/components/pages/home/project'
import Experience from '@/components/pages/home/experience'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main className="relative bg-gradient-to-t container mx-auto">
      <Home />
      <Separator />
      <Tech />
      <Separator />
      <Project />
      <Separator />
      <Experience />
      <Separator />
      <Footer />
    </main>
  )
}
