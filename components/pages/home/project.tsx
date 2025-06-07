'use client'
import CardSwap, { Card } from '@/components/card-swap'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

const Project = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props
  return (
    <div className={cn('h-svh', className)} ref={ref} {...rest}>
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center">
          <h2>Projects</h2>
          <p>
            {`I've worked on a variety of projects, from small personal projects
            to large-scale enterprise applications.`}
          </p>
        </div>
        <div className="h-full relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  )
})

Project.displayName = 'Project'

export default Project
