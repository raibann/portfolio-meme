'use client'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import PixelCard from '@/components/pixel-card'
import { skills, tools } from './utils/data'
import { motion } from 'framer-motion'

const Tech = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div className={cn('space-y-24', className)} ref={ref} {...rest}>
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-6xl font-bold">Skills & Technologies</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                As a full-stack developer, I excel in creating responsive and
                user-friendly web applications using React and Next.js for the
                frontend, while building robust server-side solutions with
                Node.js and Express. My expertise extends to database management
                with MongoDB, ensuring efficient data handling and storage. I
                also implement modern DevOps practices, including CI/CD
                pipelines, to ensure smooth deployment and continuous monitoring
                of applications.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <Card className="p-0 relative rounded-2xl h-[280px] sm:h-[300px]">
                  <PixelCard
                    variant="blue"
                    className="h-full w-full border-0 rounded-2xl"
                  >
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 absolute top-0 left-0 w-full h-full">
                      <skill.icon className="text-primary h-8 w-8 sm:h-12 sm:w-12" />
                      <h3 className="font-bold text-base sm:text-lg">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {skill.description}
                      </p>
                    </CardContent>
                  </PixelCard>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-6xl font-bold">Languages & Tools</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                I have a strong understanding of the following languages and
                tools:
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {tools.map((toolCategory, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                key={index}
              >
                <Card
                  key={toolCategory.category}
                  className="rounded-lg border p-3 sm:p-4 pb-6 sm:pb-8 h-full"
                >
                  <h4 className="flex items-center gap-2 font-medium text-sm sm:text-base">
                    {toolCategory.icon}
                    {toolCategory.category}
                  </h4>

                  <CardContent className="grid gap-2 sm:gap-3 grid-cols-2">
                    {toolCategory.items.map((tool) => (
                      <div
                        key={tool.name}
                        className="bg-muted hover:border-muted flex items-center gap-1.5 sm:gap-2 rounded-md border border-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors"
                      >
                        <span className="text-primary w-4 h-4 sm:w-5 sm:h-5 relative">
                          {tool.icon}
                        </span>
                        {tool.name}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    )
  },
)

Tech.displayName = 'Tech'

export default Tech
