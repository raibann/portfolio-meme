'use client'

import Footer from '@/components/footer'
import Tech from '@/components/pages/home/tech'
import Home from '@/components/pages/home'
import Experience from '@/components/pages/home/experience'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main className="px-4">
      <Home />
      <Tech />
      <Experience />
      <Separator />
      <Footer />
    </main>
  )
}
