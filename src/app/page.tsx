'use client'

import {useEffect} from 'react'
import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {Input} from "@/app/shared/ui/input"
import {Facebook, Instagram, MountainIcon, Twitter} from "lucide-react"
import Link from "next/link"
import '../../src/app/globals.css'
import Navbar from "@/app/components/navbar"
import Mainhero from "@/app/components/mainhero"
import Footer from "@/app/components/footer"
import { useAuth } from "./context/AuthContext"
import { useRouter } from 'next/navigation'
import Cardcontainer from '@/app/components/homepage/Cardcontainer'
import Projectcontainer from '@/app/components/homepage/Projectcontainer'

export function HomeLayout() { 
  return (
    <div className="flex flex-col min-h-screen container">
      <div className='mt-[3rem]'>
        <Cardcontainer/>

        <section className='mt-[3rem]'>
          <Projectcontainer/>
        </section>
        
      </div>
      
    </div>
    
  )
}
export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/'); // Redirect to home or login page if not authenticated
    }
  }, [user, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      { user ? (<><HomeLayout /></>) : (<Mainhero />) }
      <Footer />
    </div>
  )
}
