'use client'

import {useEffect} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Facebook, Instagram, MountainIcon, Twitter} from "lucide-react"
import Link from "next/link"
import '../../src/app/globals.css'
import Navbar from "@/components/navbar"
import Mainhero from "@/components/mainhero"
import Footer from "@/components/footer"
import { useAuth } from "./context/AuthContext"
import { useRouter } from 'next/navigation'
import Cardcontainer from '@/components/homepage/Cardcontainer'
import Projectcontainer from '@/components/homepage/Projectcontainer'
import SectionHeader from '@/components/sectionHeader'
import Sidenav from '@/components/sidebar'

export function HomeLayout() { 
  return (
    <div className="flex min-h-screen m-0 max-w-[100vw] bg-slate-100 mt-[56px]">
      <Sidenav />

      <div className='container overflow-x-hidden'>
        <SectionHeader title='Browse'/>
        <section className='ml-[3rem]'>
          <Cardcontainer/>
        </section>
        
        <SectionHeader title='Recent Projects'/>
        <section className='w-full ml-[3rem]'>
        
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
