'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { experiences } from './utils/data'

export interface ExperienceItem {
  id: string
  type: 'work' | 'education' | 'project' | 'achievement'
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
  color?: string
}

export interface ExperienceRoadmapProps {
  experiences?: ExperienceItem[]
  className?: string
}

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
  achievement: Award,
}

const typeColors = {
  work: 'bg-blue-500',
  education: 'bg-green-500',
  project: 'bg-purple-500',
  achievement: 'bg-yellow-500',
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = typeIcons[experience.type]
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex items-start w-full"
    >
      {/* Timeline line connector - responsive positioning */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-6 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-gray-600 md:transform md:-translate-x-1/2 origin-top"
      />

      {/* Timeline dot - responsive positioning */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{ duration: 0.5, delay: 0.6 }}
        className={cn(
          'absolute left-3 md:left-1/2 top-6 w-6 h-6 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white shadow-lg flex items-center justify-center md:transform md:-translate-x-1/2 z-10 shrink-0',
          typeColors[experience.type],
        )}
      >
        <Icon size={12} className="text-white md:w-5 md:h-5" />
      </motion.div>

      {/* Experience card - responsive layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.5, delay: 0.8 }}
        className={cn(
          'w-full ml-12 md:ml-0 bg-card rounded-lg md:rounded-xl shadow-lg border border-border p-4 md:p-6 hover:shadow-xl transition-shadow duration-300',
          // Desktop alternating layout
          'md:w-5/12',
          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto',
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span className="text-xs sm:text-sm font-medium">
              {experience.period}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span className="text-xs sm:text-sm">{experience.location}</span>
          </div>
        </div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight flex items-center">
              {experience.title}
            </h3>
            <div className="mb-3">
              <span className="text-base sm:text-lg font-semibold text-muted-foreground">
                {experience.company}
              </span>
            </div>
          </div>
          <motion.button
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="ml-2 cursor-pointer"
          >
            <ChevronDown size={16} />
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-1 sm:space-y-2 mb-4">
            {experience.description.map((desc, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
              >
                • {desc}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {experience.technologies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="flex flex-wrap gap-1 sm:gap-2"
          >
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-muted text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Experience({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const roadmapData = experiences

  return (
    <div className={cn('relative py-8 md:py-12 px-4 md:px-0', className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-4xl font-bold mb-2 md:mb-4">My Journey</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl px-4">
          A timeline of my professional experiences, education, and key
          achievements
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="space-y-8 md:space-y-16">
          {roadmapData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* End of timeline indicator - responsive positioning */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-4 left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  )
}
