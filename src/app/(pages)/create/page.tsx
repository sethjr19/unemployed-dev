'use client'

import React, { useState } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/app/context/AuthContext'
import { firestore } from '@/app/firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore"; 
import { Tags } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Createpage = () => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(title, 'and', description, 'from user', user)
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firestore, "projects"), {
                Title: title,
                Description: description,
                User: user?.uid, 
                Date: new Date().toISOString(),
              });
            console.log("Document written with ID: ", docRef.id);
            setTitle(''); setDescription(''); setTags('')
            router.push('/')
        }catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }


  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
      
      <main className="flex-1 flex flex-col md:ml-[20vw] mt-[5rem] items-start justify-start p-4">
      <header className=" h-14 flex flex-col items-start justify-start md:justify-center w-full">
        <h1 className='text-[3rem] font-bold'>Create</h1>
      </header>
      <div className='w-full flex flex-col md:flex-row'>
        <div className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-start">Have a project idea?</CardTitle>
            <CardDescription className="text-start">
              Post it and collaborate with others.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="project" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="project">Project</TabsTrigger>
                <TabsTrigger value="post">Post</TabsTrigger>
              </TabsList>
              <TabsContent value="project">
              <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Title <span className='text-red-600'>*</span></Label>
                      <Input className='rounded-xl leading-normal' value={title} id="name" placeholder="Project name" required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Description</Label>
                      <Textarea className='resize-none rounded-xl pb-[3rem] pt-[1rem]' id="email" value={description} placeholder="Project description" required onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" type="tags" value={tags} onChange={(e) => setTags(e.target.value)}/>
                    </div>
                    <Button className="w-full" type="submit">
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                          <span className="ml-2">Posting...</span>
                        </div>
                      ) : (
                        "Post"
                      )}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="post">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Title*</Label>
                      <Input className='rounded-xl leading-normal ' id="name" placeholder="John Doe" required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Description</Label>
                      <Textarea className='resize-none rounded-xl pb-[3rem] pt-[1rem]' id="email" placeholder="m@example.com" required onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" onChange={(e) => setTags(e.target.value)}/>
                    </div>
                    <Button className="w-full" type="submit">
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                          <span className="ml-2">Signing up...</span>
                        </div>
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </div>
        <div className="sm:w-full md:w-[20rem] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer">
            <p className="text-gray-500">Upload an image</p>
            </div>
      </div>
        
      </main>
    </div>
  )
}

export default Createpage