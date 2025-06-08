'use client'
import React from 'react'
import ClientOnly from '@/components/client-only'
import Navbar from '@/components/navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </ClientOnly>
  )
}

export default layout
