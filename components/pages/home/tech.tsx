'use client'
// import AnimatedContent from '@/components/animation-content'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

import {
  RocketIcon,
  ShieldCheckIcon,
  MonitorSmartphoneIcon,
  DatabaseIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import PixelCard from '@/components/pixel-card'
import AnimatedContent from '@/components/animation-content'
import StackIcon from 'tech-stack-icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skills = [
  {
    icon: MonitorSmartphoneIcon,
    title: 'Frontend',
    description:
      'I specialize in building user-friendly, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS. I focus on creating intuitive interfaces that provide seamless user experiences.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Backend',
    description:
      'I build robust server-side solutions using Node.js, Express, and MongoDB. I ensure data security and efficient handling of server-side operations.',
  },
  {
    icon: DatabaseIcon,
    title: 'Database',
    description:
      'I use MongoDB for flexible and scalable database solutions. I ensure data integrity and efficient data retrieval for seamless application functionality.',
  },
  {
    icon: RocketIcon,
    title: 'DevOps',
    description:
      'I implement CI/CD pipelines to automate deployment and testing processes. I ensure smooth deployment and efficient monitoring of applications.',
  },
]

const items = [
  {
    icon: <StackIcon name="html5" />,
    title: 'HTML',
  },
  {
    icon: <StackIcon name="css3" />,
    title: 'CSS',
  },
  {
    icon: <StackIcon name="javascript" />,
    title: 'JavaScript',
  },
  {
    icon: <StackIcon name="typescript" />,
    title: 'TypeScript',
  },
  {
    icon: <StackIcon name="react" />,
    title: 'React',
  },
  {
    icon: <StackIcon name="nextjs" />,
    title: 'Next.js',
  },
  {
    icon: <StackIcon name="tailwindcss" />,
    title: 'Tailwind CSS',
  },
  {
    icon: <StackIcon name="nodejs" />,
    title: 'Node.js',
  },
  {
    icon: <StackIcon name="mongodb" />,
    title: 'MongoDB',
  },
  {
    icon: <StackIcon name="postgresql" />,
    title: 'PostgreSQL',
  },
  {
    icon: <StackIcon name="docker" />,
    title: 'Docker',
  },
  {
    icon: <StackIcon name="kubernetes" />,
    title: 'Kubernetes',
  },
]

const tabs = [
  {
    name: 'Home',
    value: 'home',
  },
  {
    name: 'Profile',
    value: 'profile',
  },
  {
    name: 'Messages',
    value: 'messages',
  },
  {
    name: 'Settings',
    value: 'settings',
  },
]

const Tech = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div className={cn('space-y-24', className)} ref={ref} {...rest}>
        <section className="space-y-8">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.3}
          >
            <div className="space-y-4 text-center">
              <h2 className="text-6xl font-bold">Skills</h2>
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
          </AnimatedContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={true}
                duration={0.8 + index * 0.1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.4 + index * 0.1}
                key={skill.title}
              >
                <Card className="p-0 relative rounded-2xl h-75">
                  <PixelCard
                    variant="blue"
                    className="h-full w-full border-0 rounded-2xl"
                  >
                    <CardContent className="space-y-2 p-6 absolute top-0 left-0 w-full h-full">
                      <skill.icon className="text-primary h-12 w-12" />
                      <h3 className="font-bold">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </CardContent>
                  </PixelCard>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={skills.length * 0.1 + 0.5}
          >
            <div className="space-y-4 text-center">
              <h2 className="text-6xl font-bold">Technologies</h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                I have worked with a wide range of technologies, including
                React, Next.js, Tailwind CSS, Node.js, Express, MongoDB,
                PostgreSQL, and more. I am always looking to learn new
                technologies and improve my skills.
              </p>
            </div>
          </AnimatedContent>
        </section>
      </div>
    )
  },
)

Tech.displayName = 'Tech'

export default Tech
