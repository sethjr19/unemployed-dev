'use client'

import {useEffect, useState} from 'react'
import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {Input} from "@/app/shared/ui/input"
import {Label} from "@/app/shared/ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/app/shared/ui/tabs"
import {MountainIcon, Facebook, Twitter, Github} from 'lucide-react'
import Link from 'next/link'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../../firebase/firebaseConfig'
import { useRouter } from "next/navigation"; // For redirection after login
import { useAuth } from '@/app/context/AuthContext'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmpass, setConfirmpass] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string | null>('')

  const router = useRouter()
  const {user} = useAuth()
  const db = getDatabase();

  useEffect(() => {
    if (user) {
      // Redirect if user is logged in
      router.push('/');
    }
  }, [user, router]);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      setIsLoading(false)
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      router.push('/');
      console.log('user is:', user)
      setEmail('')
      setPassword('')
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate registration logic (replace with actual API call)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user
      console.log('user is:', user)
      set(ref(db, 'users/' + user.uid), {
        username: username,
        email: email,
        userID: user.uid,
        dateCreated: new Date().toISOString(),
      });
      setSuccess('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
      router.push('/');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6"/>
          <span className="sr-only">Community Website</span>
        </Link>
      </header>
      <main className="flex-1 flex items-start justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome to ProjectHub</CardTitle>
            <CardDescription className="text-center">
              Log in to your account or sign up to join our vibrant community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="m@example.com" required type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                      {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <Button className="w-full" type="submit">
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                          <span className="ml-2">Logging in...</span>
                        </div>
                      ) : (
                        "Log In"
                      )}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignUp}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="m@example.com" required type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" required type="password" onChange={(e) => setConfirmpass(e.target.value)}/>
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
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"/>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" type="button">
                <Facebook className="mr-2 h-4 w-4"/>
                Facebook
              </Button>
              <Button variant="outline" type="button">
                <Twitter className="mr-2 h-4 w-4"/>
                Twitter
              </Button>
              <Button variant="outline" type="button">
                <Github className="mr-2 h-4 w-4"/>
                GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">Don&apos;t have an account?</span>
              <Link
                aria-label="Sign up"
                href="#"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </Link>
            </div>
            <Link
              aria-label="Reset password"
              href="#"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Reset password
            </Link>
          </CardFooter>
        </Card>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ProjectHub. All rights reserved.</p>
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