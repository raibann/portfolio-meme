'use client'
import { nav } from '@/lib/nav'
import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Github, Gitlab } from 'lucide-react'
import Link from 'next/link'
import DATA_LINKS from '@/lib/data-links'
import ShinyText from './text/shiny-text/shiny-text'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const Navbar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-sm"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center min-w-16 min-h-16"
        >
          <Link href="/">
            <p className="text-2xl font-semibold tracking-tight text-center text-foreground">
              RB
            </p>
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="flex rounded-b-2xl max-sm:rounded-full p-4 max-sm:py-0 max-sm:px-4 bg-black">
            {nav.map((item) => (
              <Link key={item.name} href={item.path} className="relative">
                <Button
                  className={
                    'text-sm text-muted dark:text-foreground min-w-28 max-sm:min-w-auto group hover:text-primary transition-colors'
                  }
                  variant={'ghost'}
                >
                  {item.icon && <item.icon className="min-md:hidden" />}
                  <span className="max-sm:hidden group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </Button>
                {isActive(item.path) && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute bottom-0 right-0 left-0 translate-x-1/2 w-1/2 rounded-2xl h-0.5 bg-muted dark:bg-foreground origin-left"
                  />
                )}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="h-full flex justify-center items-center min-w-16 min-h-16"
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Button variant="ghost" size={'icon'} asChild>
                <Github className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={DATA_LINKS.github} target="_blank">
                <DropdownMenuItem className="cursor-pointer">
                  <Github className="h-5 w-5" />
                  GitHub
                </DropdownMenuItem>
              </Link>
              <Link href={DATA_LINKS.gitlab} target="_blank">
                <DropdownMenuItem className="cursor-pointer">
                  <Gitlab className="h-5 w-5" />
                  GitLab
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
