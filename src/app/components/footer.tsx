import React from 'react'
import {Facebook, Instagram, MountainIcon, Twitter} from "lucide-react"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ProjectHub All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Facebook className="h-5 w-5"/>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Twitter className="h-5 w-5"/>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Instagram className="h-5 w-5"/>
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
  )
}

export default Footer