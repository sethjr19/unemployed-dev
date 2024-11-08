'use client'
import { useAuth } from "@/app/context/AuthContext"
import { auth } from "../../firebase/firebaseConfig"
import { signOut } from "firebase/auth"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import {Button} from "@/app/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/app/components/ui/card"
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

export default function Profile() {
    const { user } = useAuth()
    const [userDetails, setUserDetails] = useState<userDetails | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const db = getDatabase();

  
    const Logout = async () => {
      try {
      setIsLoading(true);
      await signOut(auth);
      console.log('user is', user)
      setIsLoading(false);
      router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  
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
        <Button className="w-full" type="submit" onClick={() => Logout()}>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              <span className="ml-2">Signing Out</span>
            </div>
          ) : (
            "Logout"
          )}
        </Button>
      </main>
    </div>
  )
}