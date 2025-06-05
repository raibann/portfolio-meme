'use client'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'
import ProfileCard from '../../profile-card/profile-card'
import DATA_LINKS from '@/lib/data-links'
import DecryptedText from '@/components/text/decrypt-text'
import BlurText from '@/components/text/blur-text'

const Home = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props
    return (
      <div
        className={cn('rounded-b-2xl h-[calc(100dvh-1rem)] mt-10', className)}
        ref={ref}
        {...rest}
      >
        <div className="grid grid-cols-2">
          <div className="sm:max-w-lg flex flex-col justify-center space-y-4">
            <BlurText
              text="Hi, I'm Raibann"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            />
            <DecryptedText
              text="I'm a full-stack developer with a Bachelor's in Computer Science and over 4 years of experience building end-to-end web applications. I enjoy transforming complex problems into elegant, efficient solutions. My stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express, and PostgreSQL—along with tools like Docker, Git, and CI/CD pipelines."
              speed={300}
              maxIterations={20}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
              className="revealed text-xl"
              parentClassName="all-letters"
              encryptedClassName="encrypted text-xl"
              animateOn="view"
            />
          </div>
          <div className="flex justify-center items-center relative">
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
          </div>
        </div>
      </div>
    )
  },
)

Home.displayName = 'Home'

export default Home
