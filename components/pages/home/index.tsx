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
        className={cn('rounded-b-2xl h-screen relative', className)}
        ref={ref}
        {...rest}
      >
        <div className="grid grid-cols-2 grid-rows-1 h-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: 'easeInOut',
            }}
            className="sm:max-w-lg flex flex-col justify-center space-y-4 h-full"
          >
            <BlurText
              text={`Hello, I'm Raibann`}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold tracking-tight sm:text-6xl first-letter:text-9xl"
            />
            <BlurText
              text="I'm a full-stack web developer with a Bachelor's in Computer Science and over 4 years of experience building end-to-end web applications. I enjoy transforming complex problems into elegant, efficient solutions. My stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express, and PostgreSQL—along with tools like Docker, Git, and CI/CD pipelines."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl font-medium tracking-tight"
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
            className="flex justify-center items-center relative"
          >
            <ProfileCard
              name="Raibann"
              title="Full Stack Developer"
              handle="raibann"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/images/profile.png"
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
