import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {Code, Lightbulb, MountainIcon, Rocket, Users} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6"/>
          <span className="ml-2 text-lg font-semibold">ProjectHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About ProjectHub</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Connecting ideas, talent, and innovation in the world of IT
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              ProjectHub is a dynamic platform designed to foster collaboration and innovation within the IT community.
              We provide a space where individuals can share ideas, form teams, and work together on exciting projects
              across all areas of information technology.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2 text-primary"/>
                  <CardTitle>Share Your Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  Have a brilliant project idea? Post it on ProjectHub and watch it come to life as others join your
                  vision.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary"/>
                  <CardTitle>Build Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  Find talented individuals across various IT roles to collaborate with and bring diverse skills to your
                  project.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary"/>
                  <CardTitle>Collaborate</CardTitle>
                </CardHeader>
                <CardContent>
                  Work together in a supportive environment, sharing knowledge and growing your skills as you build
                  amazing projects.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Rocket className="h-8 w-8 mb-2 text-primary"/>
                  <CardTitle>Launch & Showcase</CardTitle>
                </CardHeader>
                <CardContent>
                  Complete your project and showcase it to the community. Gain recognition and open doors to new
                  opportunities.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Who Can Join?</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              ProjectHub is open to all IT professionals, enthusiasts, and learners. Whether you are a:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-400 space-y-2">
              <li>Software Developer</li>
              <li>UX/UI Designer</li>
              <li>Data Scientist</li>
              <li>Project Manager</li>
              <li>DevOps Engineer</li>
              <li>Cybersecurity Specialist</li>
              <li>Or any other IT role</li>
            </ul>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              There is a place for you in our community. Join us to learn, grow, and create together!
            </p>
          </section>

          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Join ProjectHub today and be part of the next big thing in IT!
            </p>
            <Button size="lg" asChild>
              <Link href="/login">Join ProjectHub</Link>
            </Button>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 ProjectHub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}