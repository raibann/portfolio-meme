'use client'
import FuzzyText from '@/components/text/fuzzy-text'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize="clamp(1rem, 2vw, 2rem)"
      >
        Page not found
      </FuzzyText>
    </div>
  )
}

export default NotFound
