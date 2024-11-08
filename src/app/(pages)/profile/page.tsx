'use client'
import {useAuth} from "@/app/context/AuthContext"
import {auth} from "../../firebase/firebaseConfig"
import {signOut} from "firebase/auth"
import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {getDatabase, onValue, ref} from "firebase/database"

import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {Avatar, AvatarFallback, AvatarImage} from "@/app/shared/ui/avatar"
import {Badge} from "@/app/shared/ui/badge"
import {Progress} from "@/app/shared/ui/progress"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/app/shared/ui/tabs"
import {BookOpen, Github, GraduationCap, Linkedin, Mail, MapPin, Rocket, Trophy, Users} from "lucide-react"


type userDetails = {
  username: string,
  email: string,
  userID: string,
  dateCreated: string,
}

export default function Profile() {
  const {user} = useAuth()
  const [userDetails, setUserDetails] = useState<userDetails | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const db = getDatabase();


  const Logout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setIsLoading(false);
      router.push('/');
    } catch (error) {

    }
  }

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      const userProfile = ref(db, 'users/' + user.uid);
      onValue(userProfile, (snapshot) => {
        const user = snapshot.val();
        setUserDetails(user);
      })
    }
  }, [user, router]);

  if (!user) return null;

  /**
   * Simple Layout for now with dummy TO DO after seth's push
   * */
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Avatar className="h-32 w-32">
              <AvatarImage alt="John Doe" src="/placeholder.svg?height=128&width=128"/>
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{userDetails?.username} 👨‍💻</h1>
              <p className="text-xl text-muted-foreground">Front End Developer | Lifelong Learner 🚀</p>
              <div className="mt-2 flex items-center justify-center space-x-2 md:justify-start">
                <MapPin className="h-4 w-4"/>
                <span>Kuala Lumpur, KL 🌉</span>
              </div>
              <div className="mt-4 flex justify-center space-x-4 md:justify-start">
                <Button size="icon" variant="outline">
                  <Github className="h-4 w-4"/>
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Linkedin className="h-4 w-4"/>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Mail className="h-4 w-4"/>
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">About Me 🙋‍♂️</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience 💼</TabsTrigger>
          <TabsTrigger value="learning">Learning Journey 📚</TabsTrigger>
          <TabsTrigger value="community">Community 🤝</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Me 🙋‍♂️</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                *ALL FAKE INFO*
                Hey there! 👋 I'm Brian, a passionate front end developer with 1+ years of experience. I love building
                scalable
                web applications and exploring new technologies. When I'm not coding, you can find me hiking 🏞️ or
                playing chess
                ♟️. Always excited to learn and connect with fellow tech enthusiasts!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts ⚡</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>🎓 Computer Science graduate from Warwick University</li>
                <li>🏆 Won 1st place in the UCL Startup Pitch Competition</li>
                <li>🌱 Currently learning Next and exploring the world of PM</li>
                <li>🎯 Goal: Contribute to 10 open-source projects this year</li>
                <li>🎸 Fun fact: I play league</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills 🛠️</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span>JavaScript/TypeScript</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="mt-2"/>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>React & Next.js</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="mt-2"/>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Node.js & Express</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="mt-2"/>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>AWS & Cloud Technologies</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="mt-2"/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experience 💼</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Senior Full Stack Developer - Tech Innovators Inc. 🚀</h3>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <ul className="mt-2 list-inside list-disc">
                    <li>Led development of a microservices-based e-commerce platform</li>
                    <li>Mentored junior developers and conducted knowledge-sharing sessions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Full Stack Developer - WebSolutions Co. 💻</h3>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                  <ul className="mt-2 list-inside list-disc">
                    <li>Developed and maintained multiple client websites using React and Node.js</li>
                    <li>Implemented performance optimizations, improving load times by 40%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Learning Goals 🎯</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>Mastering Rust programming language 🦀</li>
                <li>Exploring Web3 and blockchain technologies 🔗</li>
                <li>Deepening knowledge in system design and architecture 🏗️</li>
                <li>Improving skills in AI and machine learning 🤖</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources 📚</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center font-semibold">
                    <BookOpen className="mr-2 h-5 w-5"/>
                    Favorite Books
                  </h3>
                  <ul className="mt-2 list-inside list-disc">
                    <li>"Clean Code" by Robert C. Martin</li>
                    <li>"Designing Data-Intensive Applications" by Martin Kleppmann</li>
                    <li>"The Pragmatic Programmer" by Andrew Hunt and David Thomas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center font-semibold">
                    <Rocket className="mr-2 h-5 w-5"/>
                    Online Courses
                  </h3>
                  <ul className="mt-2 list-inside list-disc">
                    <li>CS50's Web Programming with Python and JavaScript</li>
                    <li>Advanced React and GraphQL by Wes Bos</li>
                    <li>Machine Learning by Andrew Ng (Coursera)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications 🏆</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>AWS Certified Solutions Architect</Badge>
                <Badge>Google Cloud Professional Developer</Badge>
                <Badge>Certified Kubernetes Administrator</Badge>
                <Badge>Certified Scrum Master</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Involvement 🤝</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center font-semibold">
                    <Users className="mr-2 h-5 w-5"/>
                    Mentorship
                  </h3>
                  <p className="mt-2">
                    I'm passionate about giving back to the community. I mentor 3 junior developers, helping them
                    navigate their
                    career paths and tackle technical challenges.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center font-semibold">
                    <Trophy className="mr-2 h-5 w-5"/>
                    Hackathons & Events
                  </h3>
                  <p className="mt-2">
                    I regularly participate in and organize local hackathons. Last year, I helped organize a charity
                    hackathon
                    that raised $10,000 for coding education in underserved communities.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center font-semibold">
                    <GraduationCap className="mr-2 h-5 w-5"/>
                    Teaching & Workshops
                  </h3>
                  <p className="mt-2">
                    I run a monthly workshop series on web development basics for beginners. So far, we've helped over
                    100
                    aspiring developers start their coding journey!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Source Contributions 🌟</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">React Performance Optimizer</h3>
                  <p className="text-sm text-muted-foreground">
                    Created and maintained a popular open-source React library for optimizing component performance,
                    with over 5k
                    GitHub stars.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Contributions to Next.js</h3>
                  <p className="text-sm text-muted-foreground">
                    Actively contribute to Next.js, having submitted several pull requests to improve documentation and
                    fix minor
                    bugs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect! 🎉</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I'm always excited to meet fellow developers, share knowledge, and collaborate on interesting projects.
                Whether
                you're a seasoned pro or just starting out, feel free to reach out! Let's learn and grow together in
                this amazing
                world of technology. 🚀
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button>Send Message 💬</Button>
                <Button variant="outline">Follow 🤝</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}