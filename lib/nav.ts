import { Book, Home, LucideIcon } from 'lucide-react'

type NavItem = {
  name: string
  path: string
  icon?: LucideIcon
}

export const nav: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: Home,
  },
  {
    name: 'Blog',
    path: '/blog',
    icon: Book,
  },
]
