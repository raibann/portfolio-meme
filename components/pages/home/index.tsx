'use client'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'
import ProfileCard from '../../profile-card/profile-card'
import DATA_LINKS from '@/lib/data-links'
import BlurText from '@/components/text/blur-text'
import { motion } from 'motion/react'

const Home = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props
    return (
      <div
        className={cn('rounded-b-2xl h-[calc(100shv-4rem)]', className)}
        ref={ref}
        {...rest}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 h-full gap-8 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeInOut',
            }}
            className="flex flex-col justify-center space-y-6 md:space-y-8 h-full py-12 lg:py-0"
          >
            <BlurText
              text={`Hello, I'm Raibann`}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight first-letter:text-6xl sm:first-letter:text-7xl lg:first-letter:text-9xl text-center lg:text-left"
            />
            <BlurText
              text="I'm a full-stack developer with a Bachelor's in Computer Science and over 4 years of experience building end-to-end web applications. I enjoy transforming complex problems into elegant, efficient solutions. My stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express, and PostgreSQL—along with tools like Docker, Git, and CI/CD pipelines."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-center lg:text-left text-muted-foreground"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeInOut',
            }}
            className="flex justify-center items-center relative py-8 lg:py-24"
          >
            <ProfileCard
              name="Raibann"
              title="Full Stack Developer"
              handle="raibann"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/images/208FBD93-5F93-4BF7-A532-3FCB2AEEE80B.png"
              showUserInfo={true}
              enableTilt={true}
              contactLink={DATA_LINKS.telegram}
            />
          </motion.div>
        </div>
      </div>
    )
  },
)

Home.displayName = 'Home'

export default Home
