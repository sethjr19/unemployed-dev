import React from 'react'
import Link from 'next/link'
import { MountainIcon } from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'

export default function Navbar() {
  const { user } = useAuth()
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6"/>
          <span className="sr-only">Project Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          { user ? (
            <>
            <Link className="text-sm font-medium hover:bg-gray-400 duration-300 flex items-center px-3 rounded-xl py-2 gap-2" href="/create">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Create
            </Link>
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
            <Link className="text-sm rounded-full text-white px-3 py-2 font-medium bg-black underline-offset-4 border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black" href="/login">
              Login
            </Link>
            </>
          )}
          
        </nav>
      </header>
  )
}

