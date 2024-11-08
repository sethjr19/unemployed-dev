'use client'

import {useState} from 'react'
import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {Input} from "@/app/shared/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/app/shared/ui/select"
import {Badge} from "@/app/shared/ui/badge"
import {Search, Users} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/app/components/navbar'

const projects = [
  {
    id: 1,
    title: "Community Garden",
    description: "Build and maintain a community garden.",
    category: "Environment",
    members: 15,
    openSpots: 5,
    roles: ["PM", "UI Designer"],
  },
  {
    id: 2,
    title: "Coding Workshop Series",
    description: "Run coding workshops for beginners.",
    category: "Education",
    members: 8,
    openSpots: 7,
    roles: ["Frontend Dev", "UX Designer"],
  },
  {
    id: 3,
    title: "Neighborhood Watch Program",
    description: "Set up a neighborhood watch for safety.",
    category: "Safety",
    members: 20,
    openSpots: 10,
    roles: ["DevOps", "Backend Dev"],
  },
  {
    id: 4,
    title: "Local History Preservation",
    description: "Archive and share local history.",
    category: "Culture",
    members: 12,
    openSpots: 8,
    roles: ["PM", "Frontend Dev"],
  },
  {
    id: 5,
    title: "Youth Mentorship Program",
    description: "Pair professionals with youth mentors.",
    category: "Education",
    members: 25,
    openSpots: 15,
    roles: ["UI Designer", "Backend Dev"],
  },
  {
    id: 6,
    title: "Community Fitness Challenge",
    description: "Organize a community fitness challenge.",
    category: "Health",
    members: 30,
    openSpots: 20,
    roles: ["UX Designer", "DevOps"],
  },
  {
    id: 7,
    title: "Art for All",
    description: "Host art workshops for all ages.",
    category: "Arts",
    members: 10,
    openSpots: 5,
    roles: ["PM", "UI Designer"],
  },
  {
    id: 8,
    title: "Green Cleanup Drive",
    description: "Organize cleanups in local parks.",
    category: "Environment",
    members: 20,
    openSpots: 10,
    roles: ["Frontend Dev", "UX Designer"],
  },
  {
    id: 9,
    title: "Mental Health Awareness Campaign",
    description: "Promote mental health resources.",
    category: "Health",
    members: 12,
    openSpots: 8,
    roles: ["PM", "Backend Dev"],
  },
  {
    id: 10,
    title: "Digital Literacy Program",
    description: "Teach digital skills to adults.",
    category: "Education",
    members: 15,
    openSpots: 5,
    roles: ["UX Designer", "Frontend Dev"],
  },
  {
    id: 11,
    title: "Local Food Drive",
    description: "Collect and distribute food donations.",
    category: "Community Service",
    members: 25,
    openSpots: 10,
    roles: ["PM", "Backend Dev"],
  },
  {
    id: 12,
    title: "Senior Support Network",
    description: "Assist seniors with daily needs.",
    category: "Community Service",
    members: 30,
    openSpots: 15,
    roles: ["UI Designer", "DevOps"],
  },
];

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
              <Card key={project.id} className="min-h-[250px] flex flex-col h-full">
                <CardHeader className='min-h-[110px]'>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-10">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="rounded-2xl">{project.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-1"/>
                      {project.members} members
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Roles Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.roles.map((role) => (
                        <Badge key={role} className="text-sm bg-blue-500 text-gray-100 dark:text-gray-300 rounded-2xl">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.openSpots} spots left</p>
                  <Button className="rounded-2xl">View Project</Button>
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
