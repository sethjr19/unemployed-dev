import React from 'react'
import Link from 'next/link'
import { MountainIcon } from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'

export default function Navbar() {
  const { user } = useAuth()
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6"/>
          <span className="sr-only">Project Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          { user ? (
            <>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
              Messages
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/profile">
              Profile
            </Link>
            </>
          ) : (
            <>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
              Contact
            </Link>
            </>
          )}
          
        </nav>
      </header>
  )
}

