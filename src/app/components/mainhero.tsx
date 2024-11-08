import React from 'react'
import Link from 'next/link'
import { MountainIcon } from 'lucide-react'
import {Button} from "@/app/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/components/ui/card"
import {Input} from "@/app/components/ui/input"

export default function Mainhero() {
  return (
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to ProjectHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Join us in building a community that shares project ideas, skills and time. Connect, share and grow
                  together. </p>
              </div>
              <div className="space-x-4">
                <Link href='/login'>
                  <Button className="bg-white text-black hover:bg-gray-200">Join Now</Button>
                </Link>
                <Link href='about'>
                <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Community Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Member Spotlight</CardTitle>
                  <CardDescription>Meet our outstanding community members</CardDescription>
                </CardHeader>
                <CardContent>

                  <p>Seth Yap has been an active member for 5 years, contributing to various projects.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Latest Open Project</CardTitle>
                  <CardDescription>Participate in the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Community for Developers</li>
                    <li>Best practices for community engagement</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Tech-Stack</CardTitle>
                  <CardDescription>View our most used Tech-Stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Next.js, React, Typescript</li>
                    <li>React Native</li>
                    <li>Flutter</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Upcoming Events</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <Card className="w-full md:w-1/2">

              </Card>

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Join Our Community</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input placeholder="Enter your email" type="email"/>
                <Button className="w-full">Subscribe to Newsletter</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
  )
}

