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
<<<<<<< HEAD
import Cardcontainer from '@/components/homepage/Cardcontainer'
import Projectcontainer from '@/components/homepage/Projectcontainer'
import SectionHeader from '@/components/sectionHeader'
import Sidenav from '@/components/sidebar'
=======
import Cardcontainer from '@/app/components/homepage/Cardcontainer'
import Projectcontainer from '@/app/components/homepage/Projectcontainer'
>>>>>>> 3fbf35ed77ffd329b531790c38dd0a315e9f2304

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
