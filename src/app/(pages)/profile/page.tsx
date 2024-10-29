'use client'
import { useAuth } from "@/app/context/AuthContext"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { set } from "date-fns"
import { getDatabase, onValue, ref } from "firebase/database"
import {Code, Lightbulb, MountainIcon, Rocket, Users} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type userDetails = {
    username: string,
    email: string,
    userID: string,
    dateCreated: string,
}

export default function AboutPage() {
    const { user } = useAuth()
    const [userDetails, setUserDetails] = useState<userDetails | null>(null)
    const router = useRouter()
    const db = getDatabase();
  
    useEffect(() => {
      if (!user) {
        router.push('/'); // Redirect to home or login page if not authenticated
      }
      else {
        const userProfile = ref(db, 'users/' + user.uid);
        onValue(userProfile, (snapshot) => {
            const user = snapshot.val();
            setUserDetails(user);
        })
      }
    }, [user, router]);
  
    if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <h1>Welcome {userDetails?.username}</h1>
      </main>
    </div>
  )
}