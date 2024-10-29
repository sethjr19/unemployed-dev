'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Badge} from "@/components/ui/badge"
import {MountainIcon, Search, Users} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
// Mock data for projects with roles
const projects = [
  {
    id: 1,
    title: "Community Garden",
    description: "Help create and maintain a local community garden to promote sustainable living.",
    category: "Environment",
    members: 15,
    openSpots: 5,
    roles: ["Project Manager", "UI Designer"],
  },
  {
    id: 2,
    title: "Coding Workshop Series",
    description: "Organize and run coding workshops for beginners in various programming languages.",
    category: "Education",
    members: 8,
    openSpots: 7,
    roles: ["Frontend Developer", "UX Designer"],
  },
  {
    id: 3,
    title: "Neighborhood Watch Program",
    description: "Establish a neighborhood watch program to improve community safety and security.",
    category: "Safety",
    members: 20,
    openSpots: 10,
    roles: ["DevOps", "Backend Developer"],
  },
  {
    id: 4,
    title: "Local History Preservation",
    description: "Document and preserve local history through interviews, archiving, and digital storytelling.",
    category: "Culture",
    members: 12,
    openSpots: 8,
    roles: ["Project Manager", "Frontend Developer"],
  },
  {
    id: 5,
    title: "Youth Mentorship Program",
    description: "Connect experienced professionals with local youth for career guidance and personal development.",
    category: "Education",
    members: 25,
    openSpots: 15,
    roles: ["UI Designer", "Backend Developer"],
  },
  {
    id: 6,
    title: "Community Fitness Challenge",
    description: "Organize a month-long fitness challenge to promote health and wellness in the community.",
    category: "Health",
    members: 30,
    openSpots: 20,
    roles: ["UX Designer", "DevOps"],
  },
]

export default function CommunityProjects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'all' || project.category === categoryFilter)
  )

  const categories = [...new Set(projects.map(project => project.category))]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Open Community Projects</h1>
            <p className="text-gray-500 dark:text-gray-400">Join exciting project, share and enhance your skills.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"/>
              <Input
                className="pl-8"
                placeholder="Search projects..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="rounded-2xl">{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-1"/>
                      {project.members} members
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Roles Needed:</p>

                      {project.roles.map((role) => (
                        <Badge key={role} className="text-sm bg-blue-500 text-gray-100 dark:text-gray-300 rounded-2xl gap-2">{role}</Badge>
                      ))}

                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.openSpots} spots left</p>
                  <Button className='rounded-2xl'>Join Project</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
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
      </footer>
    </div>
  )
}
