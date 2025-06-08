'use client'

import Footer from '@/components/footer'
import Tech from '@/components/pages/home/tech'
import Home from '@/components/pages/home'
import Experience from '@/components/pages/home/experience'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-t px-4">
      <Home />
      <Tech />
      {/* <Separator />
      <Project />
      <Separator /> */}
      <Experience />
      <Separator />
      <Footer />
    </main>
  )
}
