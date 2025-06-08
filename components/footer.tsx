'use client'
import Link from 'next/link'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const { theme, setTheme } = useTheme()

  return (
    <footer>
      <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
        {/* Copyright */}
        <span className="text-muted-foreground align-middle text-center w-full">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="/" target="_blank">
            Raibann
          </Link>
          . All rights reserved.
        </span>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setTheme(theme === 'dark' || theme === 'system' ? 'light' : 'dark')
          }
          className="w-9 h-9"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
